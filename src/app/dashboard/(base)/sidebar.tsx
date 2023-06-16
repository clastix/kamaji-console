"use client";

import { ClastixLogoHorizontal } from "@/components/clastix/logos/logo";
import { env } from "@/env/client.mjs";
import { Dialog, Transition } from "@headlessui/react";
import { CogIcon } from "@heroicons/react/20/solid";
import {
  ArrowPathIcon,
  ArrowRightOnRectangleIcon,
  ArrowUpTrayIcon,
  CircleStackIcon,
  ClipboardIcon,
  ComputerDesktopIcon,
  CpuChipIcon,
  PhoneIcon,
  UsersIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, useCallback, type SVGProps } from "react";
import { useSidebarStore } from "./sidebar.store";
import { useSession } from "@/auth/client";
import { useSignOut } from "@/auth/client/hooks";

export function SideBar() {
  const { isOpen, setIsOpen } = useSidebarStore();
  return (
    <>
      <Transition.Root show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-20 flex md:hidden"
          onClose={setIsOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative flex w-full max-w-xs flex-1 flex-col bg-primary-700 pb-4 pt-5">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute right-0 top-0 -mr-12 pt-2">
                  <button
                    type="button"
                    className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XMarkIcon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </Transition.Child>
              <div className="flex flex-shrink-0 items-center px-4">
                <ClastixLogoHorizontal className="h-8 text-white" />
              </div>
              <div className="mt-5 h-0 flex-1 overflow-y-auto">
                <Navigation />
                <SidebarProfile />
              </div>
            </div>
          </Transition.Child>
          <div className="w-14 flex-shrink-0" aria-hidden="true">
            {/* Dummy element to force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>
      <div className="z-20 hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
        <div className="flex flex-grow flex-col overflow-y-auto bg-primary-700 pt-5">
          <div className="flex flex-shrink-0 items-center px-4">
            <ClastixLogoHorizontal className="h-10 text-white" />
          </div>
          <div className="mt-5 flex flex-1 flex-col">
            <Navigation />
            <SidebarProfile />
          </div>
        </div>
      </div>
    </>
  );
}

const Navigation = () => {
  const pathname = usePathname();
  const navigation = useNavigation();
  const isCurrentPath = useCallback(
    (path: string) => {
      const allP = (env.NEXT_PUBLIC_BASE_PATH || "") + path;
      return pathname?.startsWith(allP);
    },
    [pathname]
  );

  return (
    <nav className="flex-1 space-y-1 px-2 pb-4">
      {navigation.map((item, id) => {
        if (item.type === "link") {
          return (
            <Link
              key={id}
              href={item.href}
              className={clsx(
                isCurrentPath(item.href)
                  ? "bg-primary-800 text-white"
                  : "text-primary-100 hover:bg-primary-600",
                "group flex items-center rounded-md px-2 py-2 text-sm font-medium"
              )}
            >
              <item.icon
                className="mr-3 h-6 w-6 flex-shrink-0 text-primary-300"
                aria-hidden="true"
              />
              {item.name}
            </Link>
          );
        } else if (item.type === "external-link") {
          return (
            <a
              target="_blank"
              key={id}
              href={item.href}
              className={clsx(
                isCurrentPath(item.href)
                  ? "bg-primary-800 text-white"
                  : "text-primary-100 hover:bg-primary-600",
                "group flex items-center rounded-md px-2 py-2 text-sm font-medium"
              )}
            >
              <item.icon
                className="mr-3 h-6 w-6 flex-shrink-0 text-primary-300"
                aria-hidden="true"
              />
              {item.name}
            </a>
          );
        } else if (item.type === "coming-soon") {
          return (
            <div
              key={id}
              className={clsx(
                "flex items-center",
                "text-primary-400 ",
                "group flex items-center rounded-md px-2 py-2 text-sm font-medium"
              )}
            >
              <item.icon
                className="mr-3 h-6 w-6 flex-shrink-0 text-primary-300"
                aria-hidden="true"
              />
              {item.name}

              <span className="ml-auto inline-flex items-center gap-x-1.5 rounded-full bg-primary-300 leading-none px-[4px] py-[2px] text-[8px] font-light text-primary-700">
                PRO
              </span>
            </div>
          );
        } else if (item.type === "section") {
          return (
            <div key={id} className="ml-3 pt-4 text-sm text-white">
              <span>{item.name}</span>
            </div>
          );
        }
      })}
    </nav>
  );
};

function useNavigation(): Nav[] {
  const navigation: Nav[] = [
    {
      type: "link",
      name: "Tenant Control Planes",
      href: "/dashboard/tcps",
      icon: CogIcon,
    },
    {
      type: "link",
      name: "Datastores",
      href: "/dashboard/datastores",
      icon: CircleStackIcon,
    },
    {
      type: "coming-soon",
      name: "Node Drivers",
      icon: CpuChipIcon,
    },
    {
      type: "coming-soon",
      name: "GitOps Controller",
      icon: ArrowPathIcon,
    },
    {
      type: "coming-soon",
      name: "Authentication",
      icon: UsersIcon,
    },
    {
      type: "coming-soon",
      name: "Auditing",
      icon: ClipboardIcon,
    },
    {
      type: "coming-soon",
      name: "Monitoring",
      icon: ComputerDesktopIcon,
    },
    {
      type: "coming-soon",
      name: "Backup and Restore",
      icon: ArrowUpTrayIcon,
    },
    {
      type: "coming-soon",
      name: "Support",
      icon: PhoneIcon,
    },
  ];

  return navigation;
}

interface LinkNav {
  readonly type: "link";
  name: string;
  href: string;
  icon: (props: Omit<SVGProps<SVGSVGElement>, "ref">) => JSX.Element | null;
}

interface ComingSoonNav {
  readonly type: "coming-soon";
  name: string;
  icon: (props: Omit<SVGProps<SVGSVGElement>, "ref">) => JSX.Element | null;
}

interface ExternalLinkNav {
  readonly type: "external-link";
  name: string;
  icon: (props: Omit<SVGProps<SVGSVGElement>, "ref">) => JSX.Element | null;
  href: string;
}

interface SectionNav {
  readonly type: "section";
  name: string;
}

type Nav = LinkNav | SectionNav | ComingSoonNav | ExternalLinkNav;

const SidebarProfile = () => {
  const session = useSession();
  const signOut = useSignOut();

  if (session.status !== "authenticated") {
    return null;
  }

  return (
    <div className="flex items-center justify-between border-t border-primary-800 px-2 py-4 text-sm text-primary-200">
      <div>{session.user.email}</div>
      <div className="tooltip tooltip-left" data-tip="signout">
        <button
          className="btn-ghost btn-sm btn-circle btn"
          onClick={() => signOut()}
        >
          <ArrowRightOnRectangleIcon className="w-5" />
        </button>
      </div>
    </div>
  );
};
