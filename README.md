# Kamaji Console

View and control Kamaji with a simple user interface from the web.

![Kamaji Console](.github/images/screen.png)

## Deploy on Kubernetes

A sample manifest is available: `deploy/kamaji-console.yaml`. To deploy the console in the admin cluster, edit the manifest according to your environment and apply:

```bash
kubectl apply -f deploy/
```

Alternatively, install with Helm:

    helm repo add clastix https://clastix.github.io/charts
    helm repo update
    helm install console clastix/kamaji-console -n kamaji-system --create-namespace

## Development

Create a `.env` file with the information contained in [.env.example](.env.example)

```bash
$ npm install
$ npm run dev
```

The console should be run in an environment with a default connection to kubenretes API.

## Storybook

This repo contains visual UI tests using storybook. To run storybook

```bash
$ npm run storybook
```

## Connect to a child cluster

When reading child cluster resources, such as node, the console uses the TCP kubeconfig in order to connect to the child cluster.
When running in dev mode, using `npm run dev`, the console uses raw kubeconfig to connect to the cluster, in this way you should check that the child kubernetes API are reachable from your local development tool.

When build and deployed using docker, the console supposes to be runned inside parent kubernetes cluster, so it connects to the TCP using the tcp service fqdn in order to talk with child cluster kubernetes api.

## Generating OpenAPI client from kubernetes Spec

OpenAPI client can be generated using the [OpenAPI Generator](https://openapi-generator.tech) tool. See the [OpenAPI Generator](https://openapi-generator.tech/docs/installation) documentation for installation instructions.

The console uses the OpenAPI client generated from the kubernetes spec to interact with the kubernetes API.

First of all, you need access to a kubernetes cluster with kamaiji installed, and the kubernetes API exposed.

To expose the kubernetes API, you can use the following command:

```bash
$ kubectl proxy --port=8080
```

Then, you can generate the OpenAPI client using the following command:

```bash
openapi-generator generate -g typescript-node  -i http://localhost:8080/openapi/v2 -o src/gen
```

The generated client will be placed in the `src/gen` directory.
