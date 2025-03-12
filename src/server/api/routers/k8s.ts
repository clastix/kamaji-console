import { KubernetesObject } from "@kubernetes/client-node";
import { TRPCError } from "@trpc/server";
import * as yaml from "js-yaml";
import { z } from "zod";
import { handleKubernetesError } from "../httperr";
import { createTRPCRouter, protectedProcedure } from "../trpc";

export const k8sRouter = createTRPCRouter({
  listNs: protectedProcedure.query(({ ctx }) => {
    return ctx.k8s.coreV1.listNamespace();
  }),
  listNamespaces: protectedProcedure.query(async ({ ctx }) => {
    const res = await ctx.k8s.coreV1.listNamespace();
    return res.body.items;
  }),
  listClastixTCPs: protectedProcedure
    .input(
      z.object({
        namespace: z.string().default("default"),
      })
    )
    .query(async ({ ctx, input }) => {
      if (input.namespace === "*") {
        const res =
          await ctx.k8s.clastix.listKamajiClastixIoV1alpha1TenantControlPlaneForAllNamespaces();
        return res.body.items;
      }
      const res =
        await ctx.k8s.clastix.listKamajiClastixIoV1alpha1NamespacedTenantControlPlane(
          input.namespace
        );
      return res.body.items;
    }),
  createTcp: protectedProcedure
    .input(
      z.object({
        yaml: z.string(),
        namespace: z.string().default("default"),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const obj = yaml.load(input.yaml) as KubernetesObject;
      const namespace = obj.metadata?.namespace || input.namespace;
      try {
        const res =
          await ctx.k8s.clastix.createKamajiClastixIoV1alpha1NamespacedTenantControlPlane(
            namespace,
            obj
          );
        return res.body;
      } catch (e) {
        throw handleKubernetesError(e);
      }
    }),
  createDatastore: protectedProcedure
    .input(
      z.object({
        yaml: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const obj = yaml.load(input.yaml) as KubernetesObject;
      try {
        const res =
          await ctx.k8s.clastix.createKamajiClastixIoV1alpha1DataStore(obj);
        return res.body;
      } catch (e) {
        throw handleKubernetesError(e);
      }
    }),
  scaleTcp: protectedProcedure
    .input(
      z.object({
        namespace: z.string(),
        name: z.string(),
        replicas: z.number(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const patch = [
        {
          op: "replace",
          path: "/spec/controlPlane/deployment/replicas",
          value: input.replicas,
        },
      ];
      try {
        const res =
          await ctx.k8s.clastix.patchKamajiClastixIoV1alpha1NamespacedTenantControlPlane(
            input.name,
            input.namespace,
            patch,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            { headers: { "Content-Type": "application/json-patch+json" } }
          );
        return res;
      } catch (e) {
        throw handleKubernetesError(e);
      }
    }),
  deleteTcp: protectedProcedure
    .input(
      z.object({
        namespace: z.string(),
        name: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      try {
        const res =
          await ctx.k8s.clastix.deleteKamajiClastixIoV1alpha1NamespacedTenantControlPlane(
            input.name,
            input.namespace
          );
        return res;
      } catch (e) {
        throw handleKubernetesError(e);
      }
    }),
  deleteTcps: protectedProcedure
    .input(
      z
        .object({
          namespace: z.string(),
          name: z.string(),
        })
        .array()
    )
    .mutation(async ({ ctx, input }) => {
      try {
        await Promise.all(
          input.map((tcp) =>
            ctx.k8s.clastix.deleteKamajiClastixIoV1alpha1NamespacedTenantControlPlane(
              tcp.name,
              tcp.namespace
            )
          )
        );
      } catch (e) {}
    }),
  deleteDSs: protectedProcedure
    .input(
      z
        .object({
          name: z.string(),
        })
        .array()
    )
    .mutation(async ({ ctx, input }) => {
      try {
        await Promise.all(
          input.map((tcp) =>
            ctx.k8s.clastix.deleteKamajiClastixIoV1alpha1DataStore(tcp.name)
          )
        );
      } catch (e) {}
    }),
  deleteDatastore: protectedProcedure
    .input(
      z.object({
        name: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      try {
        const res =
          await ctx.k8s.clastix.deleteKamajiClastixIoV1alpha1DataStore(
            input.name
          );
        return res;
      } catch (e) {
        throw handleKubernetesError(e);
      }
    }),
  listClastixDatastores: protectedProcedure.query(async ({ ctx }) => {
    const res = await ctx.k8s.clastix.listKamajiClastixIoV1alpha1DataStore();
    return res.body.items;
  }),
  getClastixDastastore: protectedProcedure
    .input(
      z.object({
        name: z.string(),
      })
    )
    .query(async ({ ctx, input }) => {
      try {
        const res = await ctx.k8s.clastix.readKamajiClastixIoV1alpha1DataStore(
          input.name
        );
        return res.body;
      } catch (e) {
        throw handleKubernetesError(e);
      }
    }),
  getClastixTCP: protectedProcedure
    .input(
      z.object({
        namespace: z.string(),
        name: z.string(),
      })
    )
    .query(async ({ ctx, input }) => {
      return ctx.clastix.getTcpOrThrow(input.name, input.namespace);
    }),
  getClastixTPCKubeConfig: protectedProcedure
    .input(
      z.object({
        namespace: z.string(),
        name: z.string(),
      })
    )
    .query(async ({ ctx, input }) => {
      const tcp = await ctx.clastix.getTcpOrThrow(input.name, input.namespace);
      return ctx.clastix.getTcpKubeConfigOrThrow(tcp);
    }),
  getSveltosURL: protectedProcedure
    .query(async ({ ctx }) => {
        return ctx.clastix.getSveltosURL();
    }),
  getClastixTPCPods: protectedProcedure
    .input(
      z.object({
        namespace: z.string(),
        name: z.string(),
      })
    )
    .query(async ({ ctx, input }) => {
      const tcpRes =
        await ctx.k8s.clastix.readKamajiClastixIoV1alpha1NamespacedTenantControlPlane(
          input.name,
          input.namespace
        );
      const selector =
        tcpRes.body.status?.kubernetesResources?.deployment?.selector;
      if (!selector) {
        throw new TRPCError({ code: "NOT_FOUND", message: "not found" });
      }
      const res = await ctx.k8s.coreV1.listNamespacedPod(
        input.namespace,
        undefined,
        undefined,
        undefined,
        undefined,
        selector
      );

      return res.body?.items;
    }),
  getClastixTPCDeployments: protectedProcedure
    .input(
      z.object({
        namespace: z.string(),
        name: z.string(),
      })
    )
    .query(async ({ ctx, input }) => {
      const res = await ctx.k8s.appV1.listNamespacedDeployment(
        input.namespace,
        undefined,
        undefined,
        undefined,
        undefined,
        `kamaji.clastix.io/name=${input.name}`
      );
      return res.body.items;
    }),
  getClastixTPCSecrets: protectedProcedure
    .input(
      z.object({
        namespace: z.string(),
        name: z.string(),
      })
    )
    .query(async ({ ctx, input }) => {
      const res = await ctx.k8s.coreV1.listNamespacedSecret(
        input.namespace,
        undefined,
        undefined,
        undefined,
        undefined,
        `kamaji.clastix.io/name=${input.name}`
      );

      return res.body.items;
    }),
  getClastixTPCNodes: protectedProcedure
    .input(
      z.object({
        namespace: z.string(),
        name: z.string(),
      })
    )
    .query(async ({ ctx, input }) => {
      const tcp = await ctx.clastix.getTcpOrThrow(input.name, input.namespace);
      return ctx.clastix.getTcpNodesOrThrow(tcp);
    }),
  getClastixTPCConfigMaps: protectedProcedure
    .input(
      z.object({
        namespace: z.string(),
        name: z.string(),
      })
    )
    .query(async ({ ctx, input }) => {
      const res = await ctx.k8s.coreV1.listNamespacedConfigMap(
        input.namespace,
        undefined,
        undefined,
        undefined,
        undefined,
        `kamaji.clastix.io/name=${input.name}`
      );

      return res.body.items;
    }),
  getClastixTPCServices: protectedProcedure
    .input(
      z.object({
        namespace: z.string(),
        name: z.string(),
      })
    )
    .query(async ({ ctx, input }) => {
      const res = await ctx.k8s.coreV1.listNamespacedService(
        input.namespace,
        undefined,
        undefined,
        undefined,
        undefined,
        `kamaji.clastix.io/name=${input.name}`
      );
      return res.body.items;
    }),
  apply: protectedProcedure
    .input(
      z.object({
        yaml: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      try {
        const spec = yaml.load(input.yaml) as KubernetesObject;
        await ctx.k8s.objectApi.read(spec as any);
        const res = await ctx.k8s.objectApi.replace(spec);
        return res.body;
      } catch (e) {
        throw handleKubernetesError(e);
      }
    }),
});
