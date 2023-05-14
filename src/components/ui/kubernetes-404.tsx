export function NotFoundK8s() {
  return (
    <>
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-indigo-600">
            Kubernetes API Not Found
          </p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Can&apos;t contact kubernetes API server
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Sorry, it seams that kubernetes API server is not reachable from our
            server, pleace check your installation.
          </p>
        </div>
      </main>
    </>
  );
}
