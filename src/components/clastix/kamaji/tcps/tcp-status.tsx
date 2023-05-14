export const StatusBtn = ({
  tcpStatus,
  size = 10,
}: {
  tcpStatus: string;
  size?: number;
}) => {
  const style = {
    width: `${size}px`,
    height: `${size}px`,
  };
  const status = tcpStatusMap(tcpStatus);
  if (status === "loading") {
    return (
      <span className="relative flex" style={style}>
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-yellow-400 opacity-75"></span>
        <span
          style={style}
          className="relative inline-flex rounded-full bg-yellow-500"
        ></span>
      </span>
    );
  }
  if (status === "error") {
    return (
      <span className="relative flex" style={style}>
        <span
          style={style}
          className="relative inline-flex rounded-full bg-red-500"
        ></span>
      </span>
    );
  }
  if (status === "ready") {
    return (
      <span className="relative flex" style={style}>
        <span
          style={style}
          className="relative inline-flex rounded-full bg-green-500"
        ></span>
      </span>
    );
  }
  return (
    <span className="relative flex" style={style}>
      <span
        style={style}
        className="relative inline-flex rounded-full bg-gray-500"
      ></span>
    </span>
  );
};

function tcpStatusMap(tcpStatus: string) {
  if (tcpStatus === "Ready") {
    return "ready";
  }
  if (
    tcpStatus === "Provisioning" ||
    tcpStatus === "Upgrading" ||
    tcpStatus === "Migrating"
  ) {
    return "loading";
  }
  if (tcpStatus === "NotReady") {
    return "error";
  }
  return "unknonw";
}
