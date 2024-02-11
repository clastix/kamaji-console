import fs from "fs/promises";

const allowedDefinitions = ["io.k8s", "io.clastix"];
const allowedApi = ["kamaji.clastix.io"];

function checkApi(path: string) {
  return allowedApi.some((api) => path.startsWith(`/apis/${api}`));
}

function checkDefinition(definition: string) {
  return allowedDefinitions.some((def) => definition.startsWith(def));
}

async function parseSpecs(path: string) {
  const spec = JSON.parse(await fs.readFile(path, "utf-8")) as {
    paths: Record<string, unknown>;
    definitions: Record<string, unknown>;
  };

  const newPaths: Record<string, unknown> = {};
  for (const [path, methods] of Object.entries(spec.paths)) {
    if (checkApi(path)) {
      newPaths[path] = methods;
    }
  }

  const newDefinitions: Record<string, unknown> = {};
  for (const [definition, value] of Object.entries(spec.definitions)) {
    if (checkDefinition(definition)) {
      newDefinitions[definition] = value;
    }
  }

  spec.paths = newPaths;
  spec.definitions = newDefinitions;
  return spec;
}

(async () => {
  const res = await parseSpecs("./specification.json");
  await fs.writeFile(
    "./specification-kamaji.json",
    JSON.stringify(res, null, 2),
  );
})()
  .then(() => console.log("done"))
  .catch(console.error);
