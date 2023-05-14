export function downloadText(filename: string, content: string) {
  console.log("downloadText", filename, content);
  const element = document.createElement("a");
  element.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," + encodeURIComponent(content)
  );
  element.setAttribute("download", filename);

  element.style.display = "none";
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

export function copyToClipboard(text: string) {
  return navigator.clipboard.writeText(text);
}
