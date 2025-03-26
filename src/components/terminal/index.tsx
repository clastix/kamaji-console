"use client";

import { useEffect, useRef, useState } from "react";
import { reactApi, getBaseUrl } from "@/utils/api";
import type { IoClastixKamajiV1alpha1TenantControlPlane } from "@/gen/api";
import clsx from "clsx";

interface TerminalProps {
  tcp: IoClastixKamajiV1alpha1TenantControlPlane;
  onClose?: () => void;
  isOpen?: boolean;
}

export function TerminalComponent({ tcp, onClose, isOpen = true }: TerminalProps) {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState<string[]>([]);
  const [kubeconfigPath, setKubeconfigPath] = useState<string>("");
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [savedInput, setSavedInput] = useState(""); // Saves current input when navigating history
  const outputRef = useRef<HTMLDivElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  const kubeconfig = reactApi.k8s.getClastixTPCKubeConfig.useQuery({
    name: tcp.metadata?.name || "",
    namespace: tcp.metadata?.namespace || ""
  });

  // Scroll to bottom when output changes
  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [output]);

  // Handle keyboard events
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Clear terminal with Ctrl+L
      if (e.ctrlKey && e.key.toLowerCase() === "l") {
        e.preventDefault();
        setOutput([]);
        return;
      }

      // Handle arrow keys for history navigation
      if (e.key === "ArrowUp" || e.key === "ArrowDown") {
        e.preventDefault();

        if (commandHistory.length === 0) return;

        const setInputFn = function(cmd: string | undefined) {
          if (cmd == undefined) {
            return;
          }

          setInput(cmd);
        };

        if (e.key === "ArrowUp") {
          // Save current input if we're starting to navigate history
          if (historyIndex === -1) {
            setSavedInput(input);
          }

          // Move up in history
          const newIndex = historyIndex === -1
            ? commandHistory.length - 1
            : Math.max(0, historyIndex - 1);

          setHistoryIndex(newIndex);
          setInputFn(commandHistory[newIndex]);
        } else if (e.key === "ArrowDown") {
          if (historyIndex === -1) return;

          // Move down in history
          const newIndex = historyIndex + 1;
          if (newIndex >= commandHistory.length) {
            // Reached the end of history, restore saved input
            setHistoryIndex(-1);
            setInput(savedInput);
            return;
          }

          setHistoryIndex(newIndex);
          setInputFn(commandHistory[newIndex]);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [commandHistory, historyIndex, input, savedInput]);

  // Function to perform cleanup
  const performCleanup = async () => {
    if (kubeconfigPath) {
      try {
        console.log("Cleaning up file:", kubeconfigPath); // Debug log

        const response = await fetch(`${getBaseUrl()}/api/kubectl/cleanup`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ kubeconfigPath })
        });

        const result = await response.json();

        if (!response.ok) {
          console.error("Cleanup failed:", result); // Debug log
          throw new Error(result.error || "Cleanup failed");
        }

        if (result.success) {
          setKubeconfigPath("");
        } else {
          console.error("Cleanup was not successful:", result); // Debug log
        }
      } catch (error) {
        console.error("Failed to cleanup kubeconfig:", error);
      }
    }
  };

  // Listen for cleanup event and component unmount
  useEffect(() => {
    const handleCleanup = async () => {
      await performCleanup();
    };

    window.addEventListener("terminal-cleanup", handleCleanup);

    return () => {
      window.removeEventListener("terminal-cleanup", handleCleanup);
      performCleanup(); // Cleanup on unmount
    };
  }, [kubeconfigPath]);

  const executeCommand = async (command: string) => {
    // Add command to history if it's not empty and different from the last command
    if (command.trim() && (commandHistory.length === 0 || commandHistory[commandHistory.length - 1] !== command)) {
      setCommandHistory(prev => [...prev, command]);
    }
    // Reset history navigation
    setHistoryIndex(-1);
    setSavedInput("");

    if (command === "clear") {
      setOutput([]);
      return;
    }

    if (!command.startsWith("kubectl ")) {
      setOutput(prev => [...prev, "Error: Only kubectl commands are allowed"]);
      return;
    }

    try {
      if (kubeconfig.isLoading) {
        throw new Error("Kubeconfig is still loading");
      }

      if (kubeconfig.isError) {
        throw new Error(`Failed to get kubeconfig: ${kubeconfig.error?.message || "Unknown error"}`);
      }

      if (!kubeconfig.data) {
        throw new Error("Kubeconfig data is empty");
      }

      const response = await fetch(`${getBaseUrl()}/api/kubectl`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          command,
          kubeconfig: kubeconfig.data
        })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      if (result.kubeconfigPath) {
        // If there's an existing path, clean it up first
        if (kubeconfigPath) {
          await performCleanup();
        }
        setKubeconfigPath(result.kubeconfigPath);
      }
      setOutput(prev => [...prev, `$ ${command}`, result.output || "Command executed successfully"]);
    } catch (error) {
      console.error("Terminal error:", error);
      setOutput(prev => [...prev, `Error: Failed to execute command`]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      executeCommand(input.trim());
      setInput("");
    }
  };

  // Add click handler for background clicks
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const terminalContainer = document.getElementById('kamaji-terminal-container');
      const clickedElement = event.target as HTMLElement;

      if (!terminalContainer?.contains(clickedElement)) {
        const cleanupEvent = new CustomEvent('terminal-cleanup');
        window.dispatchEvent(cleanupEvent);
        onClose?.();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div 
      ref={terminalRef}
      className={clsx(
        "h-full flex flex-col text-white font-mono relative",
        "transition-all duration-300 ease-in-out transform",
        "fixed bottom-0 left-0 right-0 bg-gray-900 shadow-lg",
        isOpen ? "translate-y-0" : "translate-y-full"
      )}
    >
      {kubeconfig.isLoading && (
        <div className="text-yellow-400 px-4 py-2">Loading kubeconfig...</div>
      )}
      {kubeconfig.isError && (
        <div className="text-red-400 px-4 py-2">
          Error loading kubeconfig: {kubeconfig.error?.message}
        </div>
      )}
      <div
        ref={outputRef}
        className="flex-1 overflow-auto px-4 py-2 mr-2 scroll-smooth terminal-scrollbar"
        style={{
          paddingRight: "20px"
        }}
      >
        {output.map((line, i) => (
          <div key={i} className="whitespace-pre-wrap leading-6">{line}</div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="flex px-4 py-2 border-t border-gray-700">
        <span className="mr-2 text-gray-400">$</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 bg-transparent outline-none"
          placeholder="kubectl command... (or 'clear' to reset terminal, Ctrl+L to clear)"
        />
      </form>
    </div>
  );
}