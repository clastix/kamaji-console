import ts, { GenericContainer } from "testcontainers";

async function main() {
  const container = new GenericContainer("kindest/node:v1.27.1");
  container.withExposedPorts(6443);
  const inst = await container.start();
  console.log("container runned");
  await inst.stop();
  console.log("container stopped");
}

main()
  .then(() => console.log("done"))
  .catch((err) => console.error(err));
