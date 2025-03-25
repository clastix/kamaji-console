# Kamaji Console

View and control Kamaji with a simple user interface from the web.

![Kamaji Console](.github/images/flow.gif)

## Deploy on Kubernetes

A sample manifest is available: `deploy/kamaji-console.yaml`.
To deploy the console in the admin cluster, edit the manifest according to your environment and apply:

```bash
kubectl apply -f deploy/
```

Alternatively, install with Helm:

    helm repo add clastix https://clastix.github.io/charts
    helm repo update
    helm install console clastix/kamaji-console -n kamaji-system --create-namespace

## Application Delivery

Application Delivery with Kamaji is achieved with [Project Sveltos](https://projectsveltos.github.io/sveltos/).

The menu item will connect directly to the Project Sveltos [Dashboard](https://github.com/projectsveltos/dashboard)
when the following environment variables are set:

- `SVELTOS_NAMESPACE`: Kubernetes Namespace where the Project Sveltos Dashboard has been installed
- `SVELTOS_SECRET_NAME`: Kubernetes Secret name of the Project Sveltos Dashboard token
- `SVELTOS_URL`: FQDN of the Project Sveltos Dashboard to access

> When all these inputs are provided, Kamaji Console will redirect the user directly to the Project Sveltos Dashboard,
> without the need for typing manually the required token.

## Development

Create a `.env` file with the information contained in [.env.example](.env.example)

```bash
$ npm install
$ npm run dev
```

The console requires connectivity to the Management cluster's Kubernetes API Server.

## Storybook

This repo contains visual UI tests using storybook. To run storybook

```bash
$ npm run storybook
```

## Connect to a child cluster

When reading child cluster resources such as Nodes the console uses the Tenant Control Plane admin `kubeconfig` in order to connect to the child cluster.

This could be problematic when running in outside-of-the-cluster or in dev mode (`npm run dev`):
given the console uses raw `kubeconfig` to connect to the clusters,
ensure the required connectivity with the Tenant Control Plane API Server is working as expected.

A valid `kubeconfig` to connect to the management cluster must be provided by using Service Account data
(e.g.: running in a Pod) or by declaring a valid `kubeconfig`.

> When the console is running as `NODE_ENV=production` it takes for granted as running in a Pod in the management cluster,
> connecting to the Tenant Control Plane API Server using the Kubernetes Service FQDN.

## Generating OpenAPI client from kubernetes API Specification

OpenAPI client can be generated using the [OpenAPI Generator](https://openapi-generator.tech) tool.
See the [OpenAPI Generator](https://openapi-generator.tech/docs/installation) documentation for installation instructions.

The console uses the OpenAPI client generated from the Kubernetes API specification.

A `kamaji` Kubernetes cluster is required, with a proxied Kubernetes API Server:

```bash
$ kubectl proxy --port=8080
```

Generate the OpenAPI client:

```bash
openapi-generator generate -g typescript-node  -i http://localhost:8080/openapi/v2 -o src/gen
```

The generated client will be placed in the `src/gen` directory.
