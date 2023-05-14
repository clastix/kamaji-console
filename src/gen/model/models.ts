import localVarRequest from 'request';

export * from './ioCertManagerAcmeV1Challenge';
export * from './ioCertManagerAcmeV1ChallengeList';
export * from './ioCertManagerAcmeV1ChallengeSpec';
export * from './ioCertManagerAcmeV1ChallengeSpecIssuerRef';
export * from './ioCertManagerAcmeV1ChallengeSpecSolver';
export * from './ioCertManagerAcmeV1ChallengeSpecSolverDns01';
export * from './ioCertManagerAcmeV1ChallengeSpecSolverDns01AcmeDNS';
export * from './ioCertManagerAcmeV1ChallengeSpecSolverDns01AcmeDNSAccountSecretRef';
export * from './ioCertManagerAcmeV1ChallengeSpecSolverDns01Akamai';
export * from './ioCertManagerAcmeV1ChallengeSpecSolverDns01AzureDNS';
export * from './ioCertManagerAcmeV1ChallengeSpecSolverDns01AzureDNSClientSecretSecretRef';
export * from './ioCertManagerAcmeV1ChallengeSpecSolverDns01AzureDNSManagedIdentity';
export * from './ioCertManagerAcmeV1ChallengeSpecSolverDns01CloudDNS';
export * from './ioCertManagerAcmeV1ChallengeSpecSolverDns01Cloudflare';
export * from './ioCertManagerAcmeV1ChallengeSpecSolverDns01CloudflareApiKeySecretRef';
export * from './ioCertManagerAcmeV1ChallengeSpecSolverDns01CloudflareApiTokenSecretRef';
export * from './ioCertManagerAcmeV1ChallengeSpecSolverDns01Digitalocean';
export * from './ioCertManagerAcmeV1ChallengeSpecSolverDns01Rfc2136';
export * from './ioCertManagerAcmeV1ChallengeSpecSolverDns01Rfc2136TsigSecretSecretRef';
export * from './ioCertManagerAcmeV1ChallengeSpecSolverDns01Route53';
export * from './ioCertManagerAcmeV1ChallengeSpecSolverDns01Route53AccessKeyIDSecretRef';
export * from './ioCertManagerAcmeV1ChallengeSpecSolverDns01Route53SecretAccessKeySecretRef';
export * from './ioCertManagerAcmeV1ChallengeSpecSolverDns01Webhook';
export * from './ioCertManagerAcmeV1ChallengeSpecSolverHttp01';
export * from './ioCertManagerAcmeV1ChallengeSpecSolverHttp01GatewayHTTPRoute';
export * from './ioCertManagerAcmeV1ChallengeSpecSolverHttp01GatewayHTTPRouteParentRefsInner';
export * from './ioCertManagerAcmeV1ChallengeSpecSolverHttp01Ingress';
export * from './ioCertManagerAcmeV1ChallengeSpecSolverHttp01IngressIngressTemplate';
export * from './ioCertManagerAcmeV1ChallengeSpecSolverHttp01IngressIngressTemplateMetadata';
export * from './ioCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplate';
export * from './ioCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplateMetadata';
export * from './ioCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplateSpec';
export * from './ioCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinity';
export * from './ioCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityNodeAffinity';
export * from './ioCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionInner';
export * from './ioCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionInnerPreference';
export * from './ioCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionInnerPreferenceMatchExpressionsInner';
export * from './ioCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution';
export * from './ioCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsInner';
export * from './ioCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAffinity';
export * from './ioCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionInner';
export * from './ioCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionInnerPodAffinityTerm';
export * from './ioCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionInnerPodAffinityTermLabelSelector';
export * from './ioCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionInnerPodAffinityTermLabelSelectorMatchExpressionsInner';
export * from './ioCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionInnerPodAffinityTermNamespaceSelector';
export * from './ioCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionInner';
export * from './ioCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAntiAffinity';
export * from './ioCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplateSpecTolerationsInner';
export * from './ioCertManagerAcmeV1ChallengeSpecSolverSelector';
export * from './ioCertManagerAcmeV1ChallengeStatus';
export * from './ioCertManagerAcmeV1Order';
export * from './ioCertManagerAcmeV1OrderList';
export * from './ioCertManagerAcmeV1OrderSpec';
export * from './ioCertManagerAcmeV1OrderSpecIssuerRef';
export * from './ioCertManagerAcmeV1OrderStatus';
export * from './ioCertManagerAcmeV1OrderStatusAuthorizationsInner';
export * from './ioCertManagerAcmeV1OrderStatusAuthorizationsInnerChallengesInner';
export * from './ioCertManagerV1Certificate';
export * from './ioCertManagerV1CertificateList';
export * from './ioCertManagerV1CertificateRequest';
export * from './ioCertManagerV1CertificateRequestList';
export * from './ioCertManagerV1CertificateRequestSpec';
export * from './ioCertManagerV1CertificateRequestSpecIssuerRef';
export * from './ioCertManagerV1CertificateRequestStatus';
export * from './ioCertManagerV1CertificateRequestStatusConditionsInner';
export * from './ioCertManagerV1CertificateSpec';
export * from './ioCertManagerV1CertificateSpecAdditionalOutputFormatsInner';
export * from './ioCertManagerV1CertificateSpecIssuerRef';
export * from './ioCertManagerV1CertificateSpecKeystores';
export * from './ioCertManagerV1CertificateSpecKeystoresJks';
export * from './ioCertManagerV1CertificateSpecKeystoresJksPasswordSecretRef';
export * from './ioCertManagerV1CertificateSpecKeystoresPkcs12';
export * from './ioCertManagerV1CertificateSpecKeystoresPkcs12PasswordSecretRef';
export * from './ioCertManagerV1CertificateSpecPrivateKey';
export * from './ioCertManagerV1CertificateSpecSecretTemplate';
export * from './ioCertManagerV1CertificateSpecSubject';
export * from './ioCertManagerV1CertificateStatus';
export * from './ioCertManagerV1CertificateStatusConditionsInner';
export * from './ioCertManagerV1ClusterIssuer';
export * from './ioCertManagerV1ClusterIssuerList';
export * from './ioCertManagerV1ClusterIssuerSpec';
export * from './ioCertManagerV1ClusterIssuerSpecAcme';
export * from './ioCertManagerV1ClusterIssuerSpecAcmeExternalAccountBinding';
export * from './ioCertManagerV1ClusterIssuerSpecAcmeExternalAccountBindingKeySecretRef';
export * from './ioCertManagerV1ClusterIssuerSpecAcmePrivateKeySecretRef';
export * from './ioCertManagerV1ClusterIssuerSpecAcmeSolversInner';
export * from './ioCertManagerV1ClusterIssuerSpecCa';
export * from './ioCertManagerV1ClusterIssuerSpecSelfSigned';
export * from './ioCertManagerV1ClusterIssuerSpecVault';
export * from './ioCertManagerV1ClusterIssuerSpecVaultAuth';
export * from './ioCertManagerV1ClusterIssuerSpecVaultAuthAppRole';
export * from './ioCertManagerV1ClusterIssuerSpecVaultAuthAppRoleSecretRef';
export * from './ioCertManagerV1ClusterIssuerSpecVaultAuthKubernetes';
export * from './ioCertManagerV1ClusterIssuerSpecVaultAuthKubernetesSecretRef';
export * from './ioCertManagerV1ClusterIssuerSpecVaultAuthTokenSecretRef';
export * from './ioCertManagerV1ClusterIssuerSpecVaultCaBundleSecretRef';
export * from './ioCertManagerV1ClusterIssuerSpecVenafi';
export * from './ioCertManagerV1ClusterIssuerSpecVenafiCloud';
export * from './ioCertManagerV1ClusterIssuerSpecVenafiCloudApiTokenSecretRef';
export * from './ioCertManagerV1ClusterIssuerSpecVenafiTpp';
export * from './ioCertManagerV1ClusterIssuerSpecVenafiTppCredentialsRef';
export * from './ioCertManagerV1ClusterIssuerStatus';
export * from './ioCertManagerV1ClusterIssuerStatusAcme';
export * from './ioCertManagerV1ClusterIssuerStatusConditionsInner';
export * from './ioCertManagerV1Issuer';
export * from './ioCertManagerV1IssuerList';
export * from './ioCertManagerV1IssuerSpec';
export * from './ioCertManagerV1IssuerStatus';
export * from './ioClastixKamajiV1alpha1DataStore';
export * from './ioClastixKamajiV1alpha1DataStoreList';
export * from './ioClastixKamajiV1alpha1DataStoreSpec';
export * from './ioClastixKamajiV1alpha1DataStoreSpecBasicAuth';
export * from './ioClastixKamajiV1alpha1DataStoreSpecBasicAuthPassword';
export * from './ioClastixKamajiV1alpha1DataStoreSpecBasicAuthPasswordSecretReference';
export * from './ioClastixKamajiV1alpha1DataStoreSpecTlsConfig';
export * from './ioClastixKamajiV1alpha1DataStoreSpecTlsConfigCertificateAuthority';
export * from './ioClastixKamajiV1alpha1DataStoreSpecTlsConfigClientCertificate';
export * from './ioClastixKamajiV1alpha1DataStoreStatus';
export * from './ioClastixKamajiV1alpha1TenantControlPlane';
export * from './ioClastixKamajiV1alpha1TenantControlPlaneList';
export * from './ioClastixKamajiV1alpha1TenantControlPlaneSpec';
export * from './ioClastixKamajiV1alpha1TenantControlPlaneSpecAddons';
export * from './ioClastixKamajiV1alpha1TenantControlPlaneSpecAddonsCoreDNS';
export * from './ioClastixKamajiV1alpha1TenantControlPlaneSpecAddonsKonnectivity';
export * from './ioClastixKamajiV1alpha1TenantControlPlaneSpecAddonsKonnectivityAgent';
export * from './ioClastixKamajiV1alpha1TenantControlPlaneSpecAddonsKonnectivityServer';
export * from './ioClastixKamajiV1alpha1TenantControlPlaneSpecAddonsKonnectivityServerResources';
export * from './ioClastixKamajiV1alpha1TenantControlPlaneSpecAddonsKubeProxy';
export * from './ioClastixKamajiV1alpha1TenantControlPlaneSpecControlPlane';
export * from './ioClastixKamajiV1alpha1TenantControlPlaneSpecControlPlaneDeployment';
export * from './ioClastixKamajiV1alpha1TenantControlPlaneSpecControlPlaneDeploymentAdditionalMetadata';
export * from './ioClastixKamajiV1alpha1TenantControlPlaneSpecControlPlaneDeploymentAffinity';
export * from './ioClastixKamajiV1alpha1TenantControlPlaneSpecControlPlaneDeploymentExtraArgs';
export * from './ioClastixKamajiV1alpha1TenantControlPlaneSpecControlPlaneDeploymentResources';
export * from './ioClastixKamajiV1alpha1TenantControlPlaneSpecControlPlaneDeploymentResourcesApiServer';
export * from './ioClastixKamajiV1alpha1TenantControlPlaneSpecControlPlaneDeploymentTopologySpreadConstraintsInner';
export * from './ioClastixKamajiV1alpha1TenantControlPlaneSpecControlPlaneDeploymentTopologySpreadConstraintsInnerLabelSelector';
export * from './ioClastixKamajiV1alpha1TenantControlPlaneSpecControlPlaneIngress';
export * from './ioClastixKamajiV1alpha1TenantControlPlaneSpecControlPlaneService';
export * from './ioClastixKamajiV1alpha1TenantControlPlaneSpecKubernetes';
export * from './ioClastixKamajiV1alpha1TenantControlPlaneSpecKubernetesKubelet';
export * from './ioClastixKamajiV1alpha1TenantControlPlaneSpecNetworkProfile';
export * from './ioClastixKamajiV1alpha1TenantControlPlaneStatus';
export * from './ioClastixKamajiV1alpha1TenantControlPlaneStatusAddons';
export * from './ioClastixKamajiV1alpha1TenantControlPlaneStatusAddonsCoreDNS';
export * from './ioClastixKamajiV1alpha1TenantControlPlaneStatusAddonsKonnectivity';
export * from './ioClastixKamajiV1alpha1TenantControlPlaneStatusAddonsKonnectivityAgent';
export * from './ioClastixKamajiV1alpha1TenantControlPlaneStatusAddonsKonnectivityCertificate';
export * from './ioClastixKamajiV1alpha1TenantControlPlaneStatusAddonsKonnectivityConfigMap';
export * from './ioClastixKamajiV1alpha1TenantControlPlaneStatusAddonsKonnectivityKubeconfig';
export * from './ioClastixKamajiV1alpha1TenantControlPlaneStatusAddonsKonnectivityService';
export * from './ioClastixKamajiV1alpha1TenantControlPlaneStatusAddonsKonnectivityServiceConditionsInner';
export * from './ioClastixKamajiV1alpha1TenantControlPlaneStatusAddonsKonnectivityServiceLoadBalancer';
export * from './ioClastixKamajiV1alpha1TenantControlPlaneStatusAddonsKonnectivityServiceLoadBalancerIngressInner';
export * from './ioClastixKamajiV1alpha1TenantControlPlaneStatusAddonsKonnectivityServiceLoadBalancerIngressInnerPortsInner';
export * from './ioClastixKamajiV1alpha1TenantControlPlaneStatusCertificates';
export * from './ioClastixKamajiV1alpha1TenantControlPlaneStatusCertificatesEtcd';
export * from './ioClastixKamajiV1alpha1TenantControlPlaneStatusCertificatesEtcdApiServer';
export * from './ioClastixKamajiV1alpha1TenantControlPlaneStatusCertificatesEtcdCa';
export * from './ioClastixKamajiV1alpha1TenantControlPlaneStatusCertificatesSa';
export * from './ioClastixKamajiV1alpha1TenantControlPlaneStatusKubeadmPhase';
export * from './ioClastixKamajiV1alpha1TenantControlPlaneStatusKubeadmPhaseBootstrapToken';
export * from './ioClastixKamajiV1alpha1TenantControlPlaneStatusKubeadmconfig';
export * from './ioClastixKamajiV1alpha1TenantControlPlaneStatusKubeconfig';
export * from './ioClastixKamajiV1alpha1TenantControlPlaneStatusKubernetesResources';
export * from './ioClastixKamajiV1alpha1TenantControlPlaneStatusKubernetesResourcesDeployment';
export * from './ioClastixKamajiV1alpha1TenantControlPlaneStatusKubernetesResourcesDeploymentConditionsInner';
export * from './ioClastixKamajiV1alpha1TenantControlPlaneStatusKubernetesResourcesIngress';
export * from './ioClastixKamajiV1alpha1TenantControlPlaneStatusKubernetesResourcesIngressLoadBalancer';
export * from './ioClastixKamajiV1alpha1TenantControlPlaneStatusKubernetesResourcesIngressLoadBalancerIngressInner';
export * from './ioClastixKamajiV1alpha1TenantControlPlaneStatusKubernetesResourcesIngressLoadBalancerIngressInnerPortsInner';
export * from './ioClastixKamajiV1alpha1TenantControlPlaneStatusKubernetesResourcesVersion';
export * from './ioClastixKamajiV1alpha1TenantControlPlaneStatusStorage';
export * from './ioClastixKamajiV1alpha1TenantControlPlaneStatusStorageCertificate';
export * from './ioClastixKamajiV1alpha1TenantControlPlaneStatusStorageConfig';
export * from './ioClastixKamajiV1alpha1TenantControlPlaneStatusStorageSetup';
export * from './ioK8sApiAdmissionregistrationV1MutatingWebhook';
export * from './ioK8sApiAdmissionregistrationV1MutatingWebhookConfiguration';
export * from './ioK8sApiAdmissionregistrationV1MutatingWebhookConfigurationList';
export * from './ioK8sApiAdmissionregistrationV1RuleWithOperations';
export * from './ioK8sApiAdmissionregistrationV1ServiceReference';
export * from './ioK8sApiAdmissionregistrationV1ValidatingWebhook';
export * from './ioK8sApiAdmissionregistrationV1ValidatingWebhookConfiguration';
export * from './ioK8sApiAdmissionregistrationV1ValidatingWebhookConfigurationList';
export * from './ioK8sApiAdmissionregistrationV1WebhookClientConfig';
export * from './ioK8sApiAppsV1ControllerRevision';
export * from './ioK8sApiAppsV1ControllerRevisionList';
export * from './ioK8sApiAppsV1DaemonSet';
export * from './ioK8sApiAppsV1DaemonSetCondition';
export * from './ioK8sApiAppsV1DaemonSetList';
export * from './ioK8sApiAppsV1DaemonSetSpec';
export * from './ioK8sApiAppsV1DaemonSetStatus';
export * from './ioK8sApiAppsV1DaemonSetUpdateStrategy';
export * from './ioK8sApiAppsV1Deployment';
export * from './ioK8sApiAppsV1DeploymentCondition';
export * from './ioK8sApiAppsV1DeploymentList';
export * from './ioK8sApiAppsV1DeploymentSpec';
export * from './ioK8sApiAppsV1DeploymentStatus';
export * from './ioK8sApiAppsV1DeploymentStrategy';
export * from './ioK8sApiAppsV1ReplicaSet';
export * from './ioK8sApiAppsV1ReplicaSetCondition';
export * from './ioK8sApiAppsV1ReplicaSetList';
export * from './ioK8sApiAppsV1ReplicaSetSpec';
export * from './ioK8sApiAppsV1ReplicaSetStatus';
export * from './ioK8sApiAppsV1RollingUpdateDaemonSet';
export * from './ioK8sApiAppsV1RollingUpdateDeployment';
export * from './ioK8sApiAppsV1RollingUpdateStatefulSetStrategy';
export * from './ioK8sApiAppsV1StatefulSet';
export * from './ioK8sApiAppsV1StatefulSetCondition';
export * from './ioK8sApiAppsV1StatefulSetList';
export * from './ioK8sApiAppsV1StatefulSetPersistentVolumeClaimRetentionPolicy';
export * from './ioK8sApiAppsV1StatefulSetSpec';
export * from './ioK8sApiAppsV1StatefulSetStatus';
export * from './ioK8sApiAppsV1StatefulSetUpdateStrategy';
export * from './ioK8sApiAuthenticationV1BoundObjectReference';
export * from './ioK8sApiAuthenticationV1TokenRequest';
export * from './ioK8sApiAuthenticationV1TokenRequestSpec';
export * from './ioK8sApiAuthenticationV1TokenRequestStatus';
export * from './ioK8sApiAuthenticationV1TokenReview';
export * from './ioK8sApiAuthenticationV1TokenReviewSpec';
export * from './ioK8sApiAuthenticationV1TokenReviewStatus';
export * from './ioK8sApiAuthenticationV1UserInfo';
export * from './ioK8sApiAuthorizationV1LocalSubjectAccessReview';
export * from './ioK8sApiAuthorizationV1NonResourceAttributes';
export * from './ioK8sApiAuthorizationV1NonResourceRule';
export * from './ioK8sApiAuthorizationV1ResourceAttributes';
export * from './ioK8sApiAuthorizationV1ResourceRule';
export * from './ioK8sApiAuthorizationV1SelfSubjectAccessReview';
export * from './ioK8sApiAuthorizationV1SelfSubjectAccessReviewSpec';
export * from './ioK8sApiAuthorizationV1SelfSubjectRulesReview';
export * from './ioK8sApiAuthorizationV1SelfSubjectRulesReviewSpec';
export * from './ioK8sApiAuthorizationV1SubjectAccessReview';
export * from './ioK8sApiAuthorizationV1SubjectAccessReviewSpec';
export * from './ioK8sApiAuthorizationV1SubjectAccessReviewStatus';
export * from './ioK8sApiAuthorizationV1SubjectRulesReviewStatus';
export * from './ioK8sApiAutoscalingV1CrossVersionObjectReference';
export * from './ioK8sApiAutoscalingV1HorizontalPodAutoscaler';
export * from './ioK8sApiAutoscalingV1HorizontalPodAutoscalerList';
export * from './ioK8sApiAutoscalingV1HorizontalPodAutoscalerSpec';
export * from './ioK8sApiAutoscalingV1HorizontalPodAutoscalerStatus';
export * from './ioK8sApiAutoscalingV1Scale';
export * from './ioK8sApiAutoscalingV1ScaleSpec';
export * from './ioK8sApiAutoscalingV1ScaleStatus';
export * from './ioK8sApiAutoscalingV1ScaleV2';
export * from './ioK8sApiAutoscalingV2ContainerResourceMetricSource';
export * from './ioK8sApiAutoscalingV2ContainerResourceMetricStatus';
export * from './ioK8sApiAutoscalingV2CrossVersionObjectReference';
export * from './ioK8sApiAutoscalingV2ExternalMetricSource';
export * from './ioK8sApiAutoscalingV2ExternalMetricStatus';
export * from './ioK8sApiAutoscalingV2HPAScalingPolicy';
export * from './ioK8sApiAutoscalingV2HPAScalingRules';
export * from './ioK8sApiAutoscalingV2HorizontalPodAutoscaler';
export * from './ioK8sApiAutoscalingV2HorizontalPodAutoscalerBehavior';
export * from './ioK8sApiAutoscalingV2HorizontalPodAutoscalerCondition';
export * from './ioK8sApiAutoscalingV2HorizontalPodAutoscalerList';
export * from './ioK8sApiAutoscalingV2HorizontalPodAutoscalerSpec';
export * from './ioK8sApiAutoscalingV2HorizontalPodAutoscalerStatus';
export * from './ioK8sApiAutoscalingV2MetricIdentifier';
export * from './ioK8sApiAutoscalingV2MetricSpec';
export * from './ioK8sApiAutoscalingV2MetricStatus';
export * from './ioK8sApiAutoscalingV2MetricTarget';
export * from './ioK8sApiAutoscalingV2MetricValueStatus';
export * from './ioK8sApiAutoscalingV2ObjectMetricSource';
export * from './ioK8sApiAutoscalingV2ObjectMetricStatus';
export * from './ioK8sApiAutoscalingV2PodsMetricSource';
export * from './ioK8sApiAutoscalingV2PodsMetricStatus';
export * from './ioK8sApiAutoscalingV2ResourceMetricSource';
export * from './ioK8sApiAutoscalingV2ResourceMetricStatus';
export * from './ioK8sApiAutoscalingV2beta1ContainerResourceMetricSource';
export * from './ioK8sApiAutoscalingV2beta1ContainerResourceMetricStatus';
export * from './ioK8sApiAutoscalingV2beta1CrossVersionObjectReference';
export * from './ioK8sApiAutoscalingV2beta1ExternalMetricSource';
export * from './ioK8sApiAutoscalingV2beta1ExternalMetricStatus';
export * from './ioK8sApiAutoscalingV2beta1HorizontalPodAutoscaler';
export * from './ioK8sApiAutoscalingV2beta1HorizontalPodAutoscalerCondition';
export * from './ioK8sApiAutoscalingV2beta1HorizontalPodAutoscalerList';
export * from './ioK8sApiAutoscalingV2beta1HorizontalPodAutoscalerSpec';
export * from './ioK8sApiAutoscalingV2beta1HorizontalPodAutoscalerStatus';
export * from './ioK8sApiAutoscalingV2beta1MetricSpec';
export * from './ioK8sApiAutoscalingV2beta1MetricStatus';
export * from './ioK8sApiAutoscalingV2beta1ObjectMetricSource';
export * from './ioK8sApiAutoscalingV2beta1ObjectMetricStatus';
export * from './ioK8sApiAutoscalingV2beta1PodsMetricSource';
export * from './ioK8sApiAutoscalingV2beta1PodsMetricStatus';
export * from './ioK8sApiAutoscalingV2beta1ResourceMetricSource';
export * from './ioK8sApiAutoscalingV2beta1ResourceMetricStatus';
export * from './ioK8sApiAutoscalingV2beta2ContainerResourceMetricSource';
export * from './ioK8sApiAutoscalingV2beta2ContainerResourceMetricStatus';
export * from './ioK8sApiAutoscalingV2beta2CrossVersionObjectReference';
export * from './ioK8sApiAutoscalingV2beta2ExternalMetricSource';
export * from './ioK8sApiAutoscalingV2beta2ExternalMetricStatus';
export * from './ioK8sApiAutoscalingV2beta2HPAScalingPolicy';
export * from './ioK8sApiAutoscalingV2beta2HPAScalingRules';
export * from './ioK8sApiAutoscalingV2beta2HorizontalPodAutoscaler';
export * from './ioK8sApiAutoscalingV2beta2HorizontalPodAutoscalerBehavior';
export * from './ioK8sApiAutoscalingV2beta2HorizontalPodAutoscalerCondition';
export * from './ioK8sApiAutoscalingV2beta2HorizontalPodAutoscalerList';
export * from './ioK8sApiAutoscalingV2beta2HorizontalPodAutoscalerSpec';
export * from './ioK8sApiAutoscalingV2beta2HorizontalPodAutoscalerStatus';
export * from './ioK8sApiAutoscalingV2beta2MetricIdentifier';
export * from './ioK8sApiAutoscalingV2beta2MetricSpec';
export * from './ioK8sApiAutoscalingV2beta2MetricStatus';
export * from './ioK8sApiAutoscalingV2beta2MetricTarget';
export * from './ioK8sApiAutoscalingV2beta2MetricValueStatus';
export * from './ioK8sApiAutoscalingV2beta2ObjectMetricSource';
export * from './ioK8sApiAutoscalingV2beta2ObjectMetricStatus';
export * from './ioK8sApiAutoscalingV2beta2PodsMetricSource';
export * from './ioK8sApiAutoscalingV2beta2PodsMetricStatus';
export * from './ioK8sApiAutoscalingV2beta2ResourceMetricSource';
export * from './ioK8sApiAutoscalingV2beta2ResourceMetricStatus';
export * from './ioK8sApiBatchV1CronJob';
export * from './ioK8sApiBatchV1CronJobList';
export * from './ioK8sApiBatchV1CronJobSpec';
export * from './ioK8sApiBatchV1CronJobStatus';
export * from './ioK8sApiBatchV1Job';
export * from './ioK8sApiBatchV1JobCondition';
export * from './ioK8sApiBatchV1JobList';
export * from './ioK8sApiBatchV1JobSpec';
export * from './ioK8sApiBatchV1JobStatus';
export * from './ioK8sApiBatchV1JobTemplateSpec';
export * from './ioK8sApiBatchV1UncountedTerminatedPods';
export * from './ioK8sApiBatchV1beta1CronJob';
export * from './ioK8sApiBatchV1beta1CronJobList';
export * from './ioK8sApiBatchV1beta1CronJobSpec';
export * from './ioK8sApiBatchV1beta1CronJobStatus';
export * from './ioK8sApiBatchV1beta1JobTemplateSpec';
export * from './ioK8sApiCertificatesV1CertificateSigningRequest';
export * from './ioK8sApiCertificatesV1CertificateSigningRequestCondition';
export * from './ioK8sApiCertificatesV1CertificateSigningRequestList';
export * from './ioK8sApiCertificatesV1CertificateSigningRequestSpec';
export * from './ioK8sApiCertificatesV1CertificateSigningRequestStatus';
export * from './ioK8sApiCoordinationV1Lease';
export * from './ioK8sApiCoordinationV1LeaseList';
export * from './ioK8sApiCoordinationV1LeaseSpec';
export * from './ioK8sApiCoreV1AWSElasticBlockStoreVolumeSource';
export * from './ioK8sApiCoreV1Affinity';
export * from './ioK8sApiCoreV1AttachedVolume';
export * from './ioK8sApiCoreV1AzureDiskVolumeSource';
export * from './ioK8sApiCoreV1AzureFilePersistentVolumeSource';
export * from './ioK8sApiCoreV1AzureFileVolumeSource';
export * from './ioK8sApiCoreV1Binding';
export * from './ioK8sApiCoreV1CSIPersistentVolumeSource';
export * from './ioK8sApiCoreV1CSIVolumeSource';
export * from './ioK8sApiCoreV1Capabilities';
export * from './ioK8sApiCoreV1CephFSPersistentVolumeSource';
export * from './ioK8sApiCoreV1CephFSVolumeSource';
export * from './ioK8sApiCoreV1CinderPersistentVolumeSource';
export * from './ioK8sApiCoreV1CinderVolumeSource';
export * from './ioK8sApiCoreV1ClientIPConfig';
export * from './ioK8sApiCoreV1ComponentCondition';
export * from './ioK8sApiCoreV1ComponentStatus';
export * from './ioK8sApiCoreV1ComponentStatusList';
export * from './ioK8sApiCoreV1ConfigMap';
export * from './ioK8sApiCoreV1ConfigMapEnvSource';
export * from './ioK8sApiCoreV1ConfigMapKeySelector';
export * from './ioK8sApiCoreV1ConfigMapList';
export * from './ioK8sApiCoreV1ConfigMapNodeConfigSource';
export * from './ioK8sApiCoreV1ConfigMapProjection';
export * from './ioK8sApiCoreV1ConfigMapVolumeSource';
export * from './ioK8sApiCoreV1Container';
export * from './ioK8sApiCoreV1ContainerImage';
export * from './ioK8sApiCoreV1ContainerPort';
export * from './ioK8sApiCoreV1ContainerState';
export * from './ioK8sApiCoreV1ContainerStateRunning';
export * from './ioK8sApiCoreV1ContainerStateTerminated';
export * from './ioK8sApiCoreV1ContainerStateWaiting';
export * from './ioK8sApiCoreV1ContainerStatus';
export * from './ioK8sApiCoreV1DaemonEndpoint';
export * from './ioK8sApiCoreV1DownwardAPIProjection';
export * from './ioK8sApiCoreV1DownwardAPIVolumeFile';
export * from './ioK8sApiCoreV1DownwardAPIVolumeSource';
export * from './ioK8sApiCoreV1EmptyDirVolumeSource';
export * from './ioK8sApiCoreV1EndpointAddress';
export * from './ioK8sApiCoreV1EndpointPort';
export * from './ioK8sApiCoreV1EndpointSubset';
export * from './ioK8sApiCoreV1Endpoints';
export * from './ioK8sApiCoreV1EndpointsList';
export * from './ioK8sApiCoreV1EnvFromSource';
export * from './ioK8sApiCoreV1EnvVar';
export * from './ioK8sApiCoreV1EnvVarSource';
export * from './ioK8sApiCoreV1EphemeralContainer';
export * from './ioK8sApiCoreV1EphemeralVolumeSource';
export * from './ioK8sApiCoreV1Event';
export * from './ioK8sApiCoreV1EventList';
export * from './ioK8sApiCoreV1EventSeries';
export * from './ioK8sApiCoreV1EventSource';
export * from './ioK8sApiCoreV1ExecAction';
export * from './ioK8sApiCoreV1FCVolumeSource';
export * from './ioK8sApiCoreV1FlexPersistentVolumeSource';
export * from './ioK8sApiCoreV1FlexVolumeSource';
export * from './ioK8sApiCoreV1FlockerVolumeSource';
export * from './ioK8sApiCoreV1GCEPersistentDiskVolumeSource';
export * from './ioK8sApiCoreV1GRPCAction';
export * from './ioK8sApiCoreV1GitRepoVolumeSource';
export * from './ioK8sApiCoreV1GlusterfsPersistentVolumeSource';
export * from './ioK8sApiCoreV1GlusterfsVolumeSource';
export * from './ioK8sApiCoreV1HTTPGetAction';
export * from './ioK8sApiCoreV1HTTPHeader';
export * from './ioK8sApiCoreV1HostAlias';
export * from './ioK8sApiCoreV1HostPathVolumeSource';
export * from './ioK8sApiCoreV1ISCSIPersistentVolumeSource';
export * from './ioK8sApiCoreV1ISCSIVolumeSource';
export * from './ioK8sApiCoreV1KeyToPath';
export * from './ioK8sApiCoreV1Lifecycle';
export * from './ioK8sApiCoreV1LifecycleHandler';
export * from './ioK8sApiCoreV1LimitRange';
export * from './ioK8sApiCoreV1LimitRangeItem';
export * from './ioK8sApiCoreV1LimitRangeList';
export * from './ioK8sApiCoreV1LimitRangeSpec';
export * from './ioK8sApiCoreV1LoadBalancerIngress';
export * from './ioK8sApiCoreV1LoadBalancerStatus';
export * from './ioK8sApiCoreV1LocalObjectReference';
export * from './ioK8sApiCoreV1LocalVolumeSource';
export * from './ioK8sApiCoreV1NFSVolumeSource';
export * from './ioK8sApiCoreV1Namespace';
export * from './ioK8sApiCoreV1NamespaceCondition';
export * from './ioK8sApiCoreV1NamespaceList';
export * from './ioK8sApiCoreV1NamespaceSpec';
export * from './ioK8sApiCoreV1NamespaceStatus';
export * from './ioK8sApiCoreV1Node';
export * from './ioK8sApiCoreV1NodeAddress';
export * from './ioK8sApiCoreV1NodeAffinity';
export * from './ioK8sApiCoreV1NodeCondition';
export * from './ioK8sApiCoreV1NodeConfigSource';
export * from './ioK8sApiCoreV1NodeConfigStatus';
export * from './ioK8sApiCoreV1NodeDaemonEndpoints';
export * from './ioK8sApiCoreV1NodeList';
export * from './ioK8sApiCoreV1NodeSelector';
export * from './ioK8sApiCoreV1NodeSelectorRequirement';
export * from './ioK8sApiCoreV1NodeSelectorTerm';
export * from './ioK8sApiCoreV1NodeSpec';
export * from './ioK8sApiCoreV1NodeStatus';
export * from './ioK8sApiCoreV1NodeSystemInfo';
export * from './ioK8sApiCoreV1ObjectFieldSelector';
export * from './ioK8sApiCoreV1ObjectReference';
export * from './ioK8sApiCoreV1PersistentVolume';
export * from './ioK8sApiCoreV1PersistentVolumeClaim';
export * from './ioK8sApiCoreV1PersistentVolumeClaimCondition';
export * from './ioK8sApiCoreV1PersistentVolumeClaimList';
export * from './ioK8sApiCoreV1PersistentVolumeClaimSpec';
export * from './ioK8sApiCoreV1PersistentVolumeClaimStatus';
export * from './ioK8sApiCoreV1PersistentVolumeClaimTemplate';
export * from './ioK8sApiCoreV1PersistentVolumeClaimVolumeSource';
export * from './ioK8sApiCoreV1PersistentVolumeList';
export * from './ioK8sApiCoreV1PersistentVolumeSpec';
export * from './ioK8sApiCoreV1PersistentVolumeStatus';
export * from './ioK8sApiCoreV1PhotonPersistentDiskVolumeSource';
export * from './ioK8sApiCoreV1Pod';
export * from './ioK8sApiCoreV1PodAffinity';
export * from './ioK8sApiCoreV1PodAffinityTerm';
export * from './ioK8sApiCoreV1PodAntiAffinity';
export * from './ioK8sApiCoreV1PodCondition';
export * from './ioK8sApiCoreV1PodDNSConfig';
export * from './ioK8sApiCoreV1PodDNSConfigOption';
export * from './ioK8sApiCoreV1PodIP';
export * from './ioK8sApiCoreV1PodList';
export * from './ioK8sApiCoreV1PodOS';
export * from './ioK8sApiCoreV1PodReadinessGate';
export * from './ioK8sApiCoreV1PodSecurityContext';
export * from './ioK8sApiCoreV1PodSpec';
export * from './ioK8sApiCoreV1PodStatus';
export * from './ioK8sApiCoreV1PodTemplate';
export * from './ioK8sApiCoreV1PodTemplateList';
export * from './ioK8sApiCoreV1PodTemplateSpec';
export * from './ioK8sApiCoreV1PortStatus';
export * from './ioK8sApiCoreV1PortworxVolumeSource';
export * from './ioK8sApiCoreV1PreferredSchedulingTerm';
export * from './ioK8sApiCoreV1Probe';
export * from './ioK8sApiCoreV1ProjectedVolumeSource';
export * from './ioK8sApiCoreV1QuobyteVolumeSource';
export * from './ioK8sApiCoreV1RBDPersistentVolumeSource';
export * from './ioK8sApiCoreV1RBDVolumeSource';
export * from './ioK8sApiCoreV1ReplicationController';
export * from './ioK8sApiCoreV1ReplicationControllerCondition';
export * from './ioK8sApiCoreV1ReplicationControllerList';
export * from './ioK8sApiCoreV1ReplicationControllerSpec';
export * from './ioK8sApiCoreV1ReplicationControllerStatus';
export * from './ioK8sApiCoreV1ResourceFieldSelector';
export * from './ioK8sApiCoreV1ResourceQuota';
export * from './ioK8sApiCoreV1ResourceQuotaList';
export * from './ioK8sApiCoreV1ResourceQuotaSpec';
export * from './ioK8sApiCoreV1ResourceQuotaStatus';
export * from './ioK8sApiCoreV1ResourceRequirements';
export * from './ioK8sApiCoreV1SELinuxOptions';
export * from './ioK8sApiCoreV1ScaleIOPersistentVolumeSource';
export * from './ioK8sApiCoreV1ScaleIOVolumeSource';
export * from './ioK8sApiCoreV1ScopeSelector';
export * from './ioK8sApiCoreV1ScopedResourceSelectorRequirement';
export * from './ioK8sApiCoreV1SeccompProfile';
export * from './ioK8sApiCoreV1Secret';
export * from './ioK8sApiCoreV1SecretEnvSource';
export * from './ioK8sApiCoreV1SecretKeySelector';
export * from './ioK8sApiCoreV1SecretList';
export * from './ioK8sApiCoreV1SecretProjection';
export * from './ioK8sApiCoreV1SecretReference';
export * from './ioK8sApiCoreV1SecretVolumeSource';
export * from './ioK8sApiCoreV1SecurityContext';
export * from './ioK8sApiCoreV1Service';
export * from './ioK8sApiCoreV1ServiceAccount';
export * from './ioK8sApiCoreV1ServiceAccountList';
export * from './ioK8sApiCoreV1ServiceAccountTokenProjection';
export * from './ioK8sApiCoreV1ServiceList';
export * from './ioK8sApiCoreV1ServicePort';
export * from './ioK8sApiCoreV1ServiceSpec';
export * from './ioK8sApiCoreV1ServiceStatus';
export * from './ioK8sApiCoreV1SessionAffinityConfig';
export * from './ioK8sApiCoreV1StorageOSPersistentVolumeSource';
export * from './ioK8sApiCoreV1StorageOSVolumeSource';
export * from './ioK8sApiCoreV1Sysctl';
export * from './ioK8sApiCoreV1TCPSocketAction';
export * from './ioK8sApiCoreV1Taint';
export * from './ioK8sApiCoreV1Toleration';
export * from './ioK8sApiCoreV1TopologySelectorLabelRequirement';
export * from './ioK8sApiCoreV1TopologySelectorTerm';
export * from './ioK8sApiCoreV1TopologySpreadConstraint';
export * from './ioK8sApiCoreV1TypedLocalObjectReference';
export * from './ioK8sApiCoreV1Volume';
export * from './ioK8sApiCoreV1VolumeDevice';
export * from './ioK8sApiCoreV1VolumeMount';
export * from './ioK8sApiCoreV1VolumeNodeAffinity';
export * from './ioK8sApiCoreV1VolumeProjection';
export * from './ioK8sApiCoreV1VsphereVirtualDiskVolumeSource';
export * from './ioK8sApiCoreV1WeightedPodAffinityTerm';
export * from './ioK8sApiCoreV1WindowsSecurityContextOptions';
export * from './ioK8sApiDiscoveryV1Endpoint';
export * from './ioK8sApiDiscoveryV1EndpointConditions';
export * from './ioK8sApiDiscoveryV1EndpointHints';
export * from './ioK8sApiDiscoveryV1EndpointPort';
export * from './ioK8sApiDiscoveryV1EndpointSlice';
export * from './ioK8sApiDiscoveryV1EndpointSliceList';
export * from './ioK8sApiDiscoveryV1ForZone';
export * from './ioK8sApiDiscoveryV1beta1Endpoint';
export * from './ioK8sApiDiscoveryV1beta1EndpointConditions';
export * from './ioK8sApiDiscoveryV1beta1EndpointHints';
export * from './ioK8sApiDiscoveryV1beta1EndpointPort';
export * from './ioK8sApiDiscoveryV1beta1EndpointSlice';
export * from './ioK8sApiDiscoveryV1beta1EndpointSliceList';
export * from './ioK8sApiDiscoveryV1beta1ForZone';
export * from './ioK8sApiEventsV1Event';
export * from './ioK8sApiEventsV1EventList';
export * from './ioK8sApiEventsV1EventSeries';
export * from './ioK8sApiEventsV1beta1Event';
export * from './ioK8sApiEventsV1beta1EventList';
export * from './ioK8sApiEventsV1beta1EventSeries';
export * from './ioK8sApiFlowcontrolV1beta1FlowDistinguisherMethod';
export * from './ioK8sApiFlowcontrolV1beta1FlowSchema';
export * from './ioK8sApiFlowcontrolV1beta1FlowSchemaCondition';
export * from './ioK8sApiFlowcontrolV1beta1FlowSchemaList';
export * from './ioK8sApiFlowcontrolV1beta1FlowSchemaSpec';
export * from './ioK8sApiFlowcontrolV1beta1FlowSchemaStatus';
export * from './ioK8sApiFlowcontrolV1beta1GroupSubject';
export * from './ioK8sApiFlowcontrolV1beta1LimitResponse';
export * from './ioK8sApiFlowcontrolV1beta1LimitedPriorityLevelConfiguration';
export * from './ioK8sApiFlowcontrolV1beta1NonResourcePolicyRule';
export * from './ioK8sApiFlowcontrolV1beta1PolicyRulesWithSubjects';
export * from './ioK8sApiFlowcontrolV1beta1PriorityLevelConfiguration';
export * from './ioK8sApiFlowcontrolV1beta1PriorityLevelConfigurationCondition';
export * from './ioK8sApiFlowcontrolV1beta1PriorityLevelConfigurationList';
export * from './ioK8sApiFlowcontrolV1beta1PriorityLevelConfigurationReference';
export * from './ioK8sApiFlowcontrolV1beta1PriorityLevelConfigurationSpec';
export * from './ioK8sApiFlowcontrolV1beta1PriorityLevelConfigurationStatus';
export * from './ioK8sApiFlowcontrolV1beta1QueuingConfiguration';
export * from './ioK8sApiFlowcontrolV1beta1ResourcePolicyRule';
export * from './ioK8sApiFlowcontrolV1beta1ServiceAccountSubject';
export * from './ioK8sApiFlowcontrolV1beta1Subject';
export * from './ioK8sApiFlowcontrolV1beta1UserSubject';
export * from './ioK8sApiFlowcontrolV1beta2FlowDistinguisherMethod';
export * from './ioK8sApiFlowcontrolV1beta2FlowSchema';
export * from './ioK8sApiFlowcontrolV1beta2FlowSchemaCondition';
export * from './ioK8sApiFlowcontrolV1beta2FlowSchemaList';
export * from './ioK8sApiFlowcontrolV1beta2FlowSchemaSpec';
export * from './ioK8sApiFlowcontrolV1beta2FlowSchemaStatus';
export * from './ioK8sApiFlowcontrolV1beta2GroupSubject';
export * from './ioK8sApiFlowcontrolV1beta2LimitResponse';
export * from './ioK8sApiFlowcontrolV1beta2LimitedPriorityLevelConfiguration';
export * from './ioK8sApiFlowcontrolV1beta2NonResourcePolicyRule';
export * from './ioK8sApiFlowcontrolV1beta2PolicyRulesWithSubjects';
export * from './ioK8sApiFlowcontrolV1beta2PriorityLevelConfiguration';
export * from './ioK8sApiFlowcontrolV1beta2PriorityLevelConfigurationCondition';
export * from './ioK8sApiFlowcontrolV1beta2PriorityLevelConfigurationList';
export * from './ioK8sApiFlowcontrolV1beta2PriorityLevelConfigurationReference';
export * from './ioK8sApiFlowcontrolV1beta2PriorityLevelConfigurationSpec';
export * from './ioK8sApiFlowcontrolV1beta2PriorityLevelConfigurationStatus';
export * from './ioK8sApiFlowcontrolV1beta2QueuingConfiguration';
export * from './ioK8sApiFlowcontrolV1beta2ResourcePolicyRule';
export * from './ioK8sApiFlowcontrolV1beta2ServiceAccountSubject';
export * from './ioK8sApiFlowcontrolV1beta2Subject';
export * from './ioK8sApiFlowcontrolV1beta2UserSubject';
export * from './ioK8sApiNetworkingV1HTTPIngressPath';
export * from './ioK8sApiNetworkingV1HTTPIngressRuleValue';
export * from './ioK8sApiNetworkingV1IPBlock';
export * from './ioK8sApiNetworkingV1Ingress';
export * from './ioK8sApiNetworkingV1IngressBackend';
export * from './ioK8sApiNetworkingV1IngressClass';
export * from './ioK8sApiNetworkingV1IngressClassList';
export * from './ioK8sApiNetworkingV1IngressClassParametersReference';
export * from './ioK8sApiNetworkingV1IngressClassSpec';
export * from './ioK8sApiNetworkingV1IngressList';
export * from './ioK8sApiNetworkingV1IngressRule';
export * from './ioK8sApiNetworkingV1IngressServiceBackend';
export * from './ioK8sApiNetworkingV1IngressSpec';
export * from './ioK8sApiNetworkingV1IngressStatus';
export * from './ioK8sApiNetworkingV1IngressTLS';
export * from './ioK8sApiNetworkingV1NetworkPolicy';
export * from './ioK8sApiNetworkingV1NetworkPolicyEgressRule';
export * from './ioK8sApiNetworkingV1NetworkPolicyIngressRule';
export * from './ioK8sApiNetworkingV1NetworkPolicyList';
export * from './ioK8sApiNetworkingV1NetworkPolicyPeer';
export * from './ioK8sApiNetworkingV1NetworkPolicyPort';
export * from './ioK8sApiNetworkingV1NetworkPolicySpec';
export * from './ioK8sApiNetworkingV1ServiceBackendPort';
export * from './ioK8sApiNodeV1Overhead';
export * from './ioK8sApiNodeV1RuntimeClass';
export * from './ioK8sApiNodeV1RuntimeClassList';
export * from './ioK8sApiNodeV1Scheduling';
export * from './ioK8sApiNodeV1beta1Overhead';
export * from './ioK8sApiNodeV1beta1RuntimeClass';
export * from './ioK8sApiNodeV1beta1RuntimeClassList';
export * from './ioK8sApiNodeV1beta1Scheduling';
export * from './ioK8sApiPolicyV1Eviction';
export * from './ioK8sApiPolicyV1PodDisruptionBudget';
export * from './ioK8sApiPolicyV1PodDisruptionBudgetList';
export * from './ioK8sApiPolicyV1PodDisruptionBudgetSpec';
export * from './ioK8sApiPolicyV1PodDisruptionBudgetStatus';
export * from './ioK8sApiPolicyV1beta1AllowedCSIDriver';
export * from './ioK8sApiPolicyV1beta1AllowedFlexVolume';
export * from './ioK8sApiPolicyV1beta1AllowedHostPath';
export * from './ioK8sApiPolicyV1beta1FSGroupStrategyOptions';
export * from './ioK8sApiPolicyV1beta1HostPortRange';
export * from './ioK8sApiPolicyV1beta1IDRange';
export * from './ioK8sApiPolicyV1beta1PodDisruptionBudget';
export * from './ioK8sApiPolicyV1beta1PodDisruptionBudgetList';
export * from './ioK8sApiPolicyV1beta1PodDisruptionBudgetSpec';
export * from './ioK8sApiPolicyV1beta1PodDisruptionBudgetStatus';
export * from './ioK8sApiPolicyV1beta1PodSecurityPolicy';
export * from './ioK8sApiPolicyV1beta1PodSecurityPolicyList';
export * from './ioK8sApiPolicyV1beta1PodSecurityPolicySpec';
export * from './ioK8sApiPolicyV1beta1RunAsGroupStrategyOptions';
export * from './ioK8sApiPolicyV1beta1RunAsUserStrategyOptions';
export * from './ioK8sApiPolicyV1beta1RuntimeClassStrategyOptions';
export * from './ioK8sApiPolicyV1beta1SELinuxStrategyOptions';
export * from './ioK8sApiPolicyV1beta1SupplementalGroupsStrategyOptions';
export * from './ioK8sApiRbacV1AggregationRule';
export * from './ioK8sApiRbacV1ClusterRole';
export * from './ioK8sApiRbacV1ClusterRoleBinding';
export * from './ioK8sApiRbacV1ClusterRoleBindingList';
export * from './ioK8sApiRbacV1ClusterRoleList';
export * from './ioK8sApiRbacV1PolicyRule';
export * from './ioK8sApiRbacV1Role';
export * from './ioK8sApiRbacV1RoleBinding';
export * from './ioK8sApiRbacV1RoleBindingList';
export * from './ioK8sApiRbacV1RoleList';
export * from './ioK8sApiRbacV1RoleRef';
export * from './ioK8sApiRbacV1Subject';
export * from './ioK8sApiSchedulingV1PriorityClass';
export * from './ioK8sApiSchedulingV1PriorityClassList';
export * from './ioK8sApiStorageV1CSIDriver';
export * from './ioK8sApiStorageV1CSIDriverList';
export * from './ioK8sApiStorageV1CSIDriverSpec';
export * from './ioK8sApiStorageV1CSINode';
export * from './ioK8sApiStorageV1CSINodeDriver';
export * from './ioK8sApiStorageV1CSINodeList';
export * from './ioK8sApiStorageV1CSINodeSpec';
export * from './ioK8sApiStorageV1StorageClass';
export * from './ioK8sApiStorageV1StorageClassList';
export * from './ioK8sApiStorageV1TokenRequest';
export * from './ioK8sApiStorageV1VolumeAttachment';
export * from './ioK8sApiStorageV1VolumeAttachmentList';
export * from './ioK8sApiStorageV1VolumeAttachmentSource';
export * from './ioK8sApiStorageV1VolumeAttachmentSpec';
export * from './ioK8sApiStorageV1VolumeAttachmentStatus';
export * from './ioK8sApiStorageV1VolumeError';
export * from './ioK8sApiStorageV1VolumeNodeResources';
export * from './ioK8sApiStorageV1beta1CSIStorageCapacity';
export * from './ioK8sApiStorageV1beta1CSIStorageCapacityList';
export * from './ioK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceColumnDefinition';
export * from './ioK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceConversion';
export * from './ioK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinition';
export * from './ioK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionCondition';
export * from './ioK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionList';
export * from './ioK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionNames';
export * from './ioK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionSpec';
export * from './ioK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionStatus';
export * from './ioK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionVersion';
export * from './ioK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresourceScale';
export * from './ioK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresources';
export * from './ioK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceValidation';
export * from './ioK8sApiextensionsApiserverPkgApisApiextensionsV1ExternalDocumentation';
export * from './ioK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaProps';
export * from './ioK8sApiextensionsApiserverPkgApisApiextensionsV1ServiceReference';
export * from './ioK8sApiextensionsApiserverPkgApisApiextensionsV1ValidationRule';
export * from './ioK8sApiextensionsApiserverPkgApisApiextensionsV1WebhookClientConfig';
export * from './ioK8sApiextensionsApiserverPkgApisApiextensionsV1WebhookConversion';
export * from './ioK8sApimachineryPkgApisMetaV1APIGroup';
export * from './ioK8sApimachineryPkgApisMetaV1APIGroupList';
export * from './ioK8sApimachineryPkgApisMetaV1APIResource';
export * from './ioK8sApimachineryPkgApisMetaV1APIResourceList';
export * from './ioK8sApimachineryPkgApisMetaV1APIVersions';
export * from './ioK8sApimachineryPkgApisMetaV1Condition';
export * from './ioK8sApimachineryPkgApisMetaV1DeleteOptions';
export * from './ioK8sApimachineryPkgApisMetaV1DeleteOptionsV2';
export * from './ioK8sApimachineryPkgApisMetaV1GroupVersionForDiscovery';
export * from './ioK8sApimachineryPkgApisMetaV1LabelSelector';
export * from './ioK8sApimachineryPkgApisMetaV1LabelSelectorRequirement';
export * from './ioK8sApimachineryPkgApisMetaV1ListMeta';
export * from './ioK8sApimachineryPkgApisMetaV1ManagedFieldsEntry';
export * from './ioK8sApimachineryPkgApisMetaV1ObjectMeta';
export * from './ioK8sApimachineryPkgApisMetaV1ObjectMetaV2';
export * from './ioK8sApimachineryPkgApisMetaV1OwnerReference';
export * from './ioK8sApimachineryPkgApisMetaV1OwnerReferenceV2';
export * from './ioK8sApimachineryPkgApisMetaV1Preconditions';
export * from './ioK8sApimachineryPkgApisMetaV1ServerAddressByClientCIDR';
export * from './ioK8sApimachineryPkgApisMetaV1Status';
export * from './ioK8sApimachineryPkgApisMetaV1StatusCause';
export * from './ioK8sApimachineryPkgApisMetaV1StatusDetails';
export * from './ioK8sApimachineryPkgApisMetaV1StatusDetailsV2';
export * from './ioK8sApimachineryPkgApisMetaV1StatusV2';
export * from './ioK8sApimachineryPkgApisMetaV1WatchEvent';
export * from './ioK8sApimachineryPkgVersionInfo';
export * from './ioK8sKubeAggregatorPkgApisApiregistrationV1APIService';
export * from './ioK8sKubeAggregatorPkgApisApiregistrationV1APIServiceCondition';
export * from './ioK8sKubeAggregatorPkgApisApiregistrationV1APIServiceList';
export * from './ioK8sKubeAggregatorPkgApisApiregistrationV1APIServiceSpec';
export * from './ioK8sKubeAggregatorPkgApisApiregistrationV1APIServiceStatus';
export * from './ioK8sKubeAggregatorPkgApisApiregistrationV1ServiceReference';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { IoCertManagerAcmeV1Challenge } from './ioCertManagerAcmeV1Challenge';
import { IoCertManagerAcmeV1ChallengeList } from './ioCertManagerAcmeV1ChallengeList';
import { IoCertManagerAcmeV1ChallengeSpec } from './ioCertManagerAcmeV1ChallengeSpec';
import { IoCertManagerAcmeV1ChallengeSpecIssuerRef } from './ioCertManagerAcmeV1ChallengeSpecIssuerRef';
import { IoCertManagerAcmeV1ChallengeSpecSolver } from './ioCertManagerAcmeV1ChallengeSpecSolver';
import { IoCertManagerAcmeV1ChallengeSpecSolverDns01 } from './ioCertManagerAcmeV1ChallengeSpecSolverDns01';
import { IoCertManagerAcmeV1ChallengeSpecSolverDns01AcmeDNS } from './ioCertManagerAcmeV1ChallengeSpecSolverDns01AcmeDNS';
import { IoCertManagerAcmeV1ChallengeSpecSolverDns01AcmeDNSAccountSecretRef } from './ioCertManagerAcmeV1ChallengeSpecSolverDns01AcmeDNSAccountSecretRef';
import { IoCertManagerAcmeV1ChallengeSpecSolverDns01Akamai } from './ioCertManagerAcmeV1ChallengeSpecSolverDns01Akamai';
import { IoCertManagerAcmeV1ChallengeSpecSolverDns01AzureDNS } from './ioCertManagerAcmeV1ChallengeSpecSolverDns01AzureDNS';
import { IoCertManagerAcmeV1ChallengeSpecSolverDns01AzureDNSClientSecretSecretRef } from './ioCertManagerAcmeV1ChallengeSpecSolverDns01AzureDNSClientSecretSecretRef';
import { IoCertManagerAcmeV1ChallengeSpecSolverDns01AzureDNSManagedIdentity } from './ioCertManagerAcmeV1ChallengeSpecSolverDns01AzureDNSManagedIdentity';
import { IoCertManagerAcmeV1ChallengeSpecSolverDns01CloudDNS } from './ioCertManagerAcmeV1ChallengeSpecSolverDns01CloudDNS';
import { IoCertManagerAcmeV1ChallengeSpecSolverDns01Cloudflare } from './ioCertManagerAcmeV1ChallengeSpecSolverDns01Cloudflare';
import { IoCertManagerAcmeV1ChallengeSpecSolverDns01CloudflareApiKeySecretRef } from './ioCertManagerAcmeV1ChallengeSpecSolverDns01CloudflareApiKeySecretRef';
import { IoCertManagerAcmeV1ChallengeSpecSolverDns01CloudflareApiTokenSecretRef } from './ioCertManagerAcmeV1ChallengeSpecSolverDns01CloudflareApiTokenSecretRef';
import { IoCertManagerAcmeV1ChallengeSpecSolverDns01Digitalocean } from './ioCertManagerAcmeV1ChallengeSpecSolverDns01Digitalocean';
import { IoCertManagerAcmeV1ChallengeSpecSolverDns01Rfc2136 } from './ioCertManagerAcmeV1ChallengeSpecSolverDns01Rfc2136';
import { IoCertManagerAcmeV1ChallengeSpecSolverDns01Rfc2136TsigSecretSecretRef } from './ioCertManagerAcmeV1ChallengeSpecSolverDns01Rfc2136TsigSecretSecretRef';
import { IoCertManagerAcmeV1ChallengeSpecSolverDns01Route53 } from './ioCertManagerAcmeV1ChallengeSpecSolverDns01Route53';
import { IoCertManagerAcmeV1ChallengeSpecSolverDns01Route53AccessKeyIDSecretRef } from './ioCertManagerAcmeV1ChallengeSpecSolverDns01Route53AccessKeyIDSecretRef';
import { IoCertManagerAcmeV1ChallengeSpecSolverDns01Route53SecretAccessKeySecretRef } from './ioCertManagerAcmeV1ChallengeSpecSolverDns01Route53SecretAccessKeySecretRef';
import { IoCertManagerAcmeV1ChallengeSpecSolverDns01Webhook } from './ioCertManagerAcmeV1ChallengeSpecSolverDns01Webhook';
import { IoCertManagerAcmeV1ChallengeSpecSolverHttp01 } from './ioCertManagerAcmeV1ChallengeSpecSolverHttp01';
import { IoCertManagerAcmeV1ChallengeSpecSolverHttp01GatewayHTTPRoute } from './ioCertManagerAcmeV1ChallengeSpecSolverHttp01GatewayHTTPRoute';
import { IoCertManagerAcmeV1ChallengeSpecSolverHttp01GatewayHTTPRouteParentRefsInner } from './ioCertManagerAcmeV1ChallengeSpecSolverHttp01GatewayHTTPRouteParentRefsInner';
import { IoCertManagerAcmeV1ChallengeSpecSolverHttp01Ingress } from './ioCertManagerAcmeV1ChallengeSpecSolverHttp01Ingress';
import { IoCertManagerAcmeV1ChallengeSpecSolverHttp01IngressIngressTemplate } from './ioCertManagerAcmeV1ChallengeSpecSolverHttp01IngressIngressTemplate';
import { IoCertManagerAcmeV1ChallengeSpecSolverHttp01IngressIngressTemplateMetadata } from './ioCertManagerAcmeV1ChallengeSpecSolverHttp01IngressIngressTemplateMetadata';
import { IoCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplate } from './ioCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplate';
import { IoCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplateMetadata } from './ioCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplateMetadata';
import { IoCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplateSpec } from './ioCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplateSpec';
import { IoCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinity } from './ioCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinity';
import { IoCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityNodeAffinity } from './ioCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityNodeAffinity';
import { IoCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionInner } from './ioCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionInner';
import { IoCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionInnerPreference } from './ioCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionInnerPreference';
import { IoCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionInnerPreferenceMatchExpressionsInner } from './ioCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionInnerPreferenceMatchExpressionsInner';
import { IoCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution } from './ioCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution';
import { IoCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsInner } from './ioCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsInner';
import { IoCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAffinity } from './ioCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAffinity';
import { IoCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionInner } from './ioCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionInner';
import { IoCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionInnerPodAffinityTerm } from './ioCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionInnerPodAffinityTerm';
import { IoCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionInnerPodAffinityTermLabelSelector } from './ioCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionInnerPodAffinityTermLabelSelector';
import { IoCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionInnerPodAffinityTermLabelSelectorMatchExpressionsInner } from './ioCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionInnerPodAffinityTermLabelSelectorMatchExpressionsInner';
import { IoCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionInnerPodAffinityTermNamespaceSelector } from './ioCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionInnerPodAffinityTermNamespaceSelector';
import { IoCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionInner } from './ioCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionInner';
import { IoCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAntiAffinity } from './ioCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAntiAffinity';
import { IoCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplateSpecTolerationsInner } from './ioCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplateSpecTolerationsInner';
import { IoCertManagerAcmeV1ChallengeSpecSolverSelector } from './ioCertManagerAcmeV1ChallengeSpecSolverSelector';
import { IoCertManagerAcmeV1ChallengeStatus } from './ioCertManagerAcmeV1ChallengeStatus';
import { IoCertManagerAcmeV1Order } from './ioCertManagerAcmeV1Order';
import { IoCertManagerAcmeV1OrderList } from './ioCertManagerAcmeV1OrderList';
import { IoCertManagerAcmeV1OrderSpec } from './ioCertManagerAcmeV1OrderSpec';
import { IoCertManagerAcmeV1OrderSpecIssuerRef } from './ioCertManagerAcmeV1OrderSpecIssuerRef';
import { IoCertManagerAcmeV1OrderStatus } from './ioCertManagerAcmeV1OrderStatus';
import { IoCertManagerAcmeV1OrderStatusAuthorizationsInner } from './ioCertManagerAcmeV1OrderStatusAuthorizationsInner';
import { IoCertManagerAcmeV1OrderStatusAuthorizationsInnerChallengesInner } from './ioCertManagerAcmeV1OrderStatusAuthorizationsInnerChallengesInner';
import { IoCertManagerV1Certificate } from './ioCertManagerV1Certificate';
import { IoCertManagerV1CertificateList } from './ioCertManagerV1CertificateList';
import { IoCertManagerV1CertificateRequest } from './ioCertManagerV1CertificateRequest';
import { IoCertManagerV1CertificateRequestList } from './ioCertManagerV1CertificateRequestList';
import { IoCertManagerV1CertificateRequestSpec } from './ioCertManagerV1CertificateRequestSpec';
import { IoCertManagerV1CertificateRequestSpecIssuerRef } from './ioCertManagerV1CertificateRequestSpecIssuerRef';
import { IoCertManagerV1CertificateRequestStatus } from './ioCertManagerV1CertificateRequestStatus';
import { IoCertManagerV1CertificateRequestStatusConditionsInner } from './ioCertManagerV1CertificateRequestStatusConditionsInner';
import { IoCertManagerV1CertificateSpec } from './ioCertManagerV1CertificateSpec';
import { IoCertManagerV1CertificateSpecAdditionalOutputFormatsInner } from './ioCertManagerV1CertificateSpecAdditionalOutputFormatsInner';
import { IoCertManagerV1CertificateSpecIssuerRef } from './ioCertManagerV1CertificateSpecIssuerRef';
import { IoCertManagerV1CertificateSpecKeystores } from './ioCertManagerV1CertificateSpecKeystores';
import { IoCertManagerV1CertificateSpecKeystoresJks } from './ioCertManagerV1CertificateSpecKeystoresJks';
import { IoCertManagerV1CertificateSpecKeystoresJksPasswordSecretRef } from './ioCertManagerV1CertificateSpecKeystoresJksPasswordSecretRef';
import { IoCertManagerV1CertificateSpecKeystoresPkcs12 } from './ioCertManagerV1CertificateSpecKeystoresPkcs12';
import { IoCertManagerV1CertificateSpecKeystoresPkcs12PasswordSecretRef } from './ioCertManagerV1CertificateSpecKeystoresPkcs12PasswordSecretRef';
import { IoCertManagerV1CertificateSpecPrivateKey } from './ioCertManagerV1CertificateSpecPrivateKey';
import { IoCertManagerV1CertificateSpecSecretTemplate } from './ioCertManagerV1CertificateSpecSecretTemplate';
import { IoCertManagerV1CertificateSpecSubject } from './ioCertManagerV1CertificateSpecSubject';
import { IoCertManagerV1CertificateStatus } from './ioCertManagerV1CertificateStatus';
import { IoCertManagerV1CertificateStatusConditionsInner } from './ioCertManagerV1CertificateStatusConditionsInner';
import { IoCertManagerV1ClusterIssuer } from './ioCertManagerV1ClusterIssuer';
import { IoCertManagerV1ClusterIssuerList } from './ioCertManagerV1ClusterIssuerList';
import { IoCertManagerV1ClusterIssuerSpec } from './ioCertManagerV1ClusterIssuerSpec';
import { IoCertManagerV1ClusterIssuerSpecAcme } from './ioCertManagerV1ClusterIssuerSpecAcme';
import { IoCertManagerV1ClusterIssuerSpecAcmeExternalAccountBinding } from './ioCertManagerV1ClusterIssuerSpecAcmeExternalAccountBinding';
import { IoCertManagerV1ClusterIssuerSpecAcmeExternalAccountBindingKeySecretRef } from './ioCertManagerV1ClusterIssuerSpecAcmeExternalAccountBindingKeySecretRef';
import { IoCertManagerV1ClusterIssuerSpecAcmePrivateKeySecretRef } from './ioCertManagerV1ClusterIssuerSpecAcmePrivateKeySecretRef';
import { IoCertManagerV1ClusterIssuerSpecAcmeSolversInner } from './ioCertManagerV1ClusterIssuerSpecAcmeSolversInner';
import { IoCertManagerV1ClusterIssuerSpecCa } from './ioCertManagerV1ClusterIssuerSpecCa';
import { IoCertManagerV1ClusterIssuerSpecSelfSigned } from './ioCertManagerV1ClusterIssuerSpecSelfSigned';
import { IoCertManagerV1ClusterIssuerSpecVault } from './ioCertManagerV1ClusterIssuerSpecVault';
import { IoCertManagerV1ClusterIssuerSpecVaultAuth } from './ioCertManagerV1ClusterIssuerSpecVaultAuth';
import { IoCertManagerV1ClusterIssuerSpecVaultAuthAppRole } from './ioCertManagerV1ClusterIssuerSpecVaultAuthAppRole';
import { IoCertManagerV1ClusterIssuerSpecVaultAuthAppRoleSecretRef } from './ioCertManagerV1ClusterIssuerSpecVaultAuthAppRoleSecretRef';
import { IoCertManagerV1ClusterIssuerSpecVaultAuthKubernetes } from './ioCertManagerV1ClusterIssuerSpecVaultAuthKubernetes';
import { IoCertManagerV1ClusterIssuerSpecVaultAuthKubernetesSecretRef } from './ioCertManagerV1ClusterIssuerSpecVaultAuthKubernetesSecretRef';
import { IoCertManagerV1ClusterIssuerSpecVaultAuthTokenSecretRef } from './ioCertManagerV1ClusterIssuerSpecVaultAuthTokenSecretRef';
import { IoCertManagerV1ClusterIssuerSpecVaultCaBundleSecretRef } from './ioCertManagerV1ClusterIssuerSpecVaultCaBundleSecretRef';
import { IoCertManagerV1ClusterIssuerSpecVenafi } from './ioCertManagerV1ClusterIssuerSpecVenafi';
import { IoCertManagerV1ClusterIssuerSpecVenafiCloud } from './ioCertManagerV1ClusterIssuerSpecVenafiCloud';
import { IoCertManagerV1ClusterIssuerSpecVenafiCloudApiTokenSecretRef } from './ioCertManagerV1ClusterIssuerSpecVenafiCloudApiTokenSecretRef';
import { IoCertManagerV1ClusterIssuerSpecVenafiTpp } from './ioCertManagerV1ClusterIssuerSpecVenafiTpp';
import { IoCertManagerV1ClusterIssuerSpecVenafiTppCredentialsRef } from './ioCertManagerV1ClusterIssuerSpecVenafiTppCredentialsRef';
import { IoCertManagerV1ClusterIssuerStatus } from './ioCertManagerV1ClusterIssuerStatus';
import { IoCertManagerV1ClusterIssuerStatusAcme } from './ioCertManagerV1ClusterIssuerStatusAcme';
import { IoCertManagerV1ClusterIssuerStatusConditionsInner } from './ioCertManagerV1ClusterIssuerStatusConditionsInner';
import { IoCertManagerV1Issuer } from './ioCertManagerV1Issuer';
import { IoCertManagerV1IssuerList } from './ioCertManagerV1IssuerList';
import { IoCertManagerV1IssuerSpec } from './ioCertManagerV1IssuerSpec';
import { IoCertManagerV1IssuerStatus } from './ioCertManagerV1IssuerStatus';
import { IoClastixKamajiV1alpha1DataStore } from './ioClastixKamajiV1alpha1DataStore';
import { IoClastixKamajiV1alpha1DataStoreList } from './ioClastixKamajiV1alpha1DataStoreList';
import { IoClastixKamajiV1alpha1DataStoreSpec } from './ioClastixKamajiV1alpha1DataStoreSpec';
import { IoClastixKamajiV1alpha1DataStoreSpecBasicAuth } from './ioClastixKamajiV1alpha1DataStoreSpecBasicAuth';
import { IoClastixKamajiV1alpha1DataStoreSpecBasicAuthPassword } from './ioClastixKamajiV1alpha1DataStoreSpecBasicAuthPassword';
import { IoClastixKamajiV1alpha1DataStoreSpecBasicAuthPasswordSecretReference } from './ioClastixKamajiV1alpha1DataStoreSpecBasicAuthPasswordSecretReference';
import { IoClastixKamajiV1alpha1DataStoreSpecTlsConfig } from './ioClastixKamajiV1alpha1DataStoreSpecTlsConfig';
import { IoClastixKamajiV1alpha1DataStoreSpecTlsConfigCertificateAuthority } from './ioClastixKamajiV1alpha1DataStoreSpecTlsConfigCertificateAuthority';
import { IoClastixKamajiV1alpha1DataStoreSpecTlsConfigClientCertificate } from './ioClastixKamajiV1alpha1DataStoreSpecTlsConfigClientCertificate';
import { IoClastixKamajiV1alpha1DataStoreStatus } from './ioClastixKamajiV1alpha1DataStoreStatus';
import { IoClastixKamajiV1alpha1TenantControlPlane } from './ioClastixKamajiV1alpha1TenantControlPlane';
import { IoClastixKamajiV1alpha1TenantControlPlaneList } from './ioClastixKamajiV1alpha1TenantControlPlaneList';
import { IoClastixKamajiV1alpha1TenantControlPlaneSpec } from './ioClastixKamajiV1alpha1TenantControlPlaneSpec';
import { IoClastixKamajiV1alpha1TenantControlPlaneSpecAddons } from './ioClastixKamajiV1alpha1TenantControlPlaneSpecAddons';
import { IoClastixKamajiV1alpha1TenantControlPlaneSpecAddonsCoreDNS } from './ioClastixKamajiV1alpha1TenantControlPlaneSpecAddonsCoreDNS';
import { IoClastixKamajiV1alpha1TenantControlPlaneSpecAddonsKonnectivity } from './ioClastixKamajiV1alpha1TenantControlPlaneSpecAddonsKonnectivity';
import { IoClastixKamajiV1alpha1TenantControlPlaneSpecAddonsKonnectivityAgent } from './ioClastixKamajiV1alpha1TenantControlPlaneSpecAddonsKonnectivityAgent';
import { IoClastixKamajiV1alpha1TenantControlPlaneSpecAddonsKonnectivityServer } from './ioClastixKamajiV1alpha1TenantControlPlaneSpecAddonsKonnectivityServer';
import { IoClastixKamajiV1alpha1TenantControlPlaneSpecAddonsKonnectivityServerResources } from './ioClastixKamajiV1alpha1TenantControlPlaneSpecAddonsKonnectivityServerResources';
import { IoClastixKamajiV1alpha1TenantControlPlaneSpecAddonsKubeProxy } from './ioClastixKamajiV1alpha1TenantControlPlaneSpecAddonsKubeProxy';
import { IoClastixKamajiV1alpha1TenantControlPlaneSpecControlPlane } from './ioClastixKamajiV1alpha1TenantControlPlaneSpecControlPlane';
import { IoClastixKamajiV1alpha1TenantControlPlaneSpecControlPlaneDeployment } from './ioClastixKamajiV1alpha1TenantControlPlaneSpecControlPlaneDeployment';
import { IoClastixKamajiV1alpha1TenantControlPlaneSpecControlPlaneDeploymentAdditionalMetadata } from './ioClastixKamajiV1alpha1TenantControlPlaneSpecControlPlaneDeploymentAdditionalMetadata';
import { IoClastixKamajiV1alpha1TenantControlPlaneSpecControlPlaneDeploymentAffinity } from './ioClastixKamajiV1alpha1TenantControlPlaneSpecControlPlaneDeploymentAffinity';
import { IoClastixKamajiV1alpha1TenantControlPlaneSpecControlPlaneDeploymentExtraArgs } from './ioClastixKamajiV1alpha1TenantControlPlaneSpecControlPlaneDeploymentExtraArgs';
import { IoClastixKamajiV1alpha1TenantControlPlaneSpecControlPlaneDeploymentResources } from './ioClastixKamajiV1alpha1TenantControlPlaneSpecControlPlaneDeploymentResources';
import { IoClastixKamajiV1alpha1TenantControlPlaneSpecControlPlaneDeploymentResourcesApiServer } from './ioClastixKamajiV1alpha1TenantControlPlaneSpecControlPlaneDeploymentResourcesApiServer';
import { IoClastixKamajiV1alpha1TenantControlPlaneSpecControlPlaneDeploymentTopologySpreadConstraintsInner } from './ioClastixKamajiV1alpha1TenantControlPlaneSpecControlPlaneDeploymentTopologySpreadConstraintsInner';
import { IoClastixKamajiV1alpha1TenantControlPlaneSpecControlPlaneDeploymentTopologySpreadConstraintsInnerLabelSelector } from './ioClastixKamajiV1alpha1TenantControlPlaneSpecControlPlaneDeploymentTopologySpreadConstraintsInnerLabelSelector';
import { IoClastixKamajiV1alpha1TenantControlPlaneSpecControlPlaneIngress } from './ioClastixKamajiV1alpha1TenantControlPlaneSpecControlPlaneIngress';
import { IoClastixKamajiV1alpha1TenantControlPlaneSpecControlPlaneService } from './ioClastixKamajiV1alpha1TenantControlPlaneSpecControlPlaneService';
import { IoClastixKamajiV1alpha1TenantControlPlaneSpecKubernetes } from './ioClastixKamajiV1alpha1TenantControlPlaneSpecKubernetes';
import { IoClastixKamajiV1alpha1TenantControlPlaneSpecKubernetesKubelet } from './ioClastixKamajiV1alpha1TenantControlPlaneSpecKubernetesKubelet';
import { IoClastixKamajiV1alpha1TenantControlPlaneSpecNetworkProfile } from './ioClastixKamajiV1alpha1TenantControlPlaneSpecNetworkProfile';
import { IoClastixKamajiV1alpha1TenantControlPlaneStatus } from './ioClastixKamajiV1alpha1TenantControlPlaneStatus';
import { IoClastixKamajiV1alpha1TenantControlPlaneStatusAddons } from './ioClastixKamajiV1alpha1TenantControlPlaneStatusAddons';
import { IoClastixKamajiV1alpha1TenantControlPlaneStatusAddonsCoreDNS } from './ioClastixKamajiV1alpha1TenantControlPlaneStatusAddonsCoreDNS';
import { IoClastixKamajiV1alpha1TenantControlPlaneStatusAddonsKonnectivity } from './ioClastixKamajiV1alpha1TenantControlPlaneStatusAddonsKonnectivity';
import { IoClastixKamajiV1alpha1TenantControlPlaneStatusAddonsKonnectivityAgent } from './ioClastixKamajiV1alpha1TenantControlPlaneStatusAddonsKonnectivityAgent';
import { IoClastixKamajiV1alpha1TenantControlPlaneStatusAddonsKonnectivityCertificate } from './ioClastixKamajiV1alpha1TenantControlPlaneStatusAddonsKonnectivityCertificate';
import { IoClastixKamajiV1alpha1TenantControlPlaneStatusAddonsKonnectivityConfigMap } from './ioClastixKamajiV1alpha1TenantControlPlaneStatusAddonsKonnectivityConfigMap';
import { IoClastixKamajiV1alpha1TenantControlPlaneStatusAddonsKonnectivityKubeconfig } from './ioClastixKamajiV1alpha1TenantControlPlaneStatusAddonsKonnectivityKubeconfig';
import { IoClastixKamajiV1alpha1TenantControlPlaneStatusAddonsKonnectivityService } from './ioClastixKamajiV1alpha1TenantControlPlaneStatusAddonsKonnectivityService';
import { IoClastixKamajiV1alpha1TenantControlPlaneStatusAddonsKonnectivityServiceConditionsInner } from './ioClastixKamajiV1alpha1TenantControlPlaneStatusAddonsKonnectivityServiceConditionsInner';
import { IoClastixKamajiV1alpha1TenantControlPlaneStatusAddonsKonnectivityServiceLoadBalancer } from './ioClastixKamajiV1alpha1TenantControlPlaneStatusAddonsKonnectivityServiceLoadBalancer';
import { IoClastixKamajiV1alpha1TenantControlPlaneStatusAddonsKonnectivityServiceLoadBalancerIngressInner } from './ioClastixKamajiV1alpha1TenantControlPlaneStatusAddonsKonnectivityServiceLoadBalancerIngressInner';
import { IoClastixKamajiV1alpha1TenantControlPlaneStatusAddonsKonnectivityServiceLoadBalancerIngressInnerPortsInner } from './ioClastixKamajiV1alpha1TenantControlPlaneStatusAddonsKonnectivityServiceLoadBalancerIngressInnerPortsInner';
import { IoClastixKamajiV1alpha1TenantControlPlaneStatusCertificates } from './ioClastixKamajiV1alpha1TenantControlPlaneStatusCertificates';
import { IoClastixKamajiV1alpha1TenantControlPlaneStatusCertificatesEtcd } from './ioClastixKamajiV1alpha1TenantControlPlaneStatusCertificatesEtcd';
import { IoClastixKamajiV1alpha1TenantControlPlaneStatusCertificatesEtcdApiServer } from './ioClastixKamajiV1alpha1TenantControlPlaneStatusCertificatesEtcdApiServer';
import { IoClastixKamajiV1alpha1TenantControlPlaneStatusCertificatesEtcdCa } from './ioClastixKamajiV1alpha1TenantControlPlaneStatusCertificatesEtcdCa';
import { IoClastixKamajiV1alpha1TenantControlPlaneStatusCertificatesSa } from './ioClastixKamajiV1alpha1TenantControlPlaneStatusCertificatesSa';
import { IoClastixKamajiV1alpha1TenantControlPlaneStatusKubeadmPhase } from './ioClastixKamajiV1alpha1TenantControlPlaneStatusKubeadmPhase';
import { IoClastixKamajiV1alpha1TenantControlPlaneStatusKubeadmPhaseBootstrapToken } from './ioClastixKamajiV1alpha1TenantControlPlaneStatusKubeadmPhaseBootstrapToken';
import { IoClastixKamajiV1alpha1TenantControlPlaneStatusKubeadmconfig } from './ioClastixKamajiV1alpha1TenantControlPlaneStatusKubeadmconfig';
import { IoClastixKamajiV1alpha1TenantControlPlaneStatusKubeconfig } from './ioClastixKamajiV1alpha1TenantControlPlaneStatusKubeconfig';
import { IoClastixKamajiV1alpha1TenantControlPlaneStatusKubernetesResources } from './ioClastixKamajiV1alpha1TenantControlPlaneStatusKubernetesResources';
import { IoClastixKamajiV1alpha1TenantControlPlaneStatusKubernetesResourcesDeployment } from './ioClastixKamajiV1alpha1TenantControlPlaneStatusKubernetesResourcesDeployment';
import { IoClastixKamajiV1alpha1TenantControlPlaneStatusKubernetesResourcesDeploymentConditionsInner } from './ioClastixKamajiV1alpha1TenantControlPlaneStatusKubernetesResourcesDeploymentConditionsInner';
import { IoClastixKamajiV1alpha1TenantControlPlaneStatusKubernetesResourcesIngress } from './ioClastixKamajiV1alpha1TenantControlPlaneStatusKubernetesResourcesIngress';
import { IoClastixKamajiV1alpha1TenantControlPlaneStatusKubernetesResourcesIngressLoadBalancer } from './ioClastixKamajiV1alpha1TenantControlPlaneStatusKubernetesResourcesIngressLoadBalancer';
import { IoClastixKamajiV1alpha1TenantControlPlaneStatusKubernetesResourcesIngressLoadBalancerIngressInner } from './ioClastixKamajiV1alpha1TenantControlPlaneStatusKubernetesResourcesIngressLoadBalancerIngressInner';
import { IoClastixKamajiV1alpha1TenantControlPlaneStatusKubernetesResourcesIngressLoadBalancerIngressInnerPortsInner } from './ioClastixKamajiV1alpha1TenantControlPlaneStatusKubernetesResourcesIngressLoadBalancerIngressInnerPortsInner';
import { IoClastixKamajiV1alpha1TenantControlPlaneStatusKubernetesResourcesVersion } from './ioClastixKamajiV1alpha1TenantControlPlaneStatusKubernetesResourcesVersion';
import { IoClastixKamajiV1alpha1TenantControlPlaneStatusStorage } from './ioClastixKamajiV1alpha1TenantControlPlaneStatusStorage';
import { IoClastixKamajiV1alpha1TenantControlPlaneStatusStorageCertificate } from './ioClastixKamajiV1alpha1TenantControlPlaneStatusStorageCertificate';
import { IoClastixKamajiV1alpha1TenantControlPlaneStatusStorageConfig } from './ioClastixKamajiV1alpha1TenantControlPlaneStatusStorageConfig';
import { IoClastixKamajiV1alpha1TenantControlPlaneStatusStorageSetup } from './ioClastixKamajiV1alpha1TenantControlPlaneStatusStorageSetup';
import { IoK8sApiAdmissionregistrationV1MutatingWebhook } from './ioK8sApiAdmissionregistrationV1MutatingWebhook';
import { IoK8sApiAdmissionregistrationV1MutatingWebhookConfiguration } from './ioK8sApiAdmissionregistrationV1MutatingWebhookConfiguration';
import { IoK8sApiAdmissionregistrationV1MutatingWebhookConfigurationList } from './ioK8sApiAdmissionregistrationV1MutatingWebhookConfigurationList';
import { IoK8sApiAdmissionregistrationV1RuleWithOperations } from './ioK8sApiAdmissionregistrationV1RuleWithOperations';
import { IoK8sApiAdmissionregistrationV1ServiceReference } from './ioK8sApiAdmissionregistrationV1ServiceReference';
import { IoK8sApiAdmissionregistrationV1ValidatingWebhook } from './ioK8sApiAdmissionregistrationV1ValidatingWebhook';
import { IoK8sApiAdmissionregistrationV1ValidatingWebhookConfiguration } from './ioK8sApiAdmissionregistrationV1ValidatingWebhookConfiguration';
import { IoK8sApiAdmissionregistrationV1ValidatingWebhookConfigurationList } from './ioK8sApiAdmissionregistrationV1ValidatingWebhookConfigurationList';
import { IoK8sApiAdmissionregistrationV1WebhookClientConfig } from './ioK8sApiAdmissionregistrationV1WebhookClientConfig';
import { IoK8sApiAppsV1ControllerRevision } from './ioK8sApiAppsV1ControllerRevision';
import { IoK8sApiAppsV1ControllerRevisionList } from './ioK8sApiAppsV1ControllerRevisionList';
import { IoK8sApiAppsV1DaemonSet } from './ioK8sApiAppsV1DaemonSet';
import { IoK8sApiAppsV1DaemonSetCondition } from './ioK8sApiAppsV1DaemonSetCondition';
import { IoK8sApiAppsV1DaemonSetList } from './ioK8sApiAppsV1DaemonSetList';
import { IoK8sApiAppsV1DaemonSetSpec } from './ioK8sApiAppsV1DaemonSetSpec';
import { IoK8sApiAppsV1DaemonSetStatus } from './ioK8sApiAppsV1DaemonSetStatus';
import { IoK8sApiAppsV1DaemonSetUpdateStrategy } from './ioK8sApiAppsV1DaemonSetUpdateStrategy';
import { IoK8sApiAppsV1Deployment } from './ioK8sApiAppsV1Deployment';
import { IoK8sApiAppsV1DeploymentCondition } from './ioK8sApiAppsV1DeploymentCondition';
import { IoK8sApiAppsV1DeploymentList } from './ioK8sApiAppsV1DeploymentList';
import { IoK8sApiAppsV1DeploymentSpec } from './ioK8sApiAppsV1DeploymentSpec';
import { IoK8sApiAppsV1DeploymentStatus } from './ioK8sApiAppsV1DeploymentStatus';
import { IoK8sApiAppsV1DeploymentStrategy } from './ioK8sApiAppsV1DeploymentStrategy';
import { IoK8sApiAppsV1ReplicaSet } from './ioK8sApiAppsV1ReplicaSet';
import { IoK8sApiAppsV1ReplicaSetCondition } from './ioK8sApiAppsV1ReplicaSetCondition';
import { IoK8sApiAppsV1ReplicaSetList } from './ioK8sApiAppsV1ReplicaSetList';
import { IoK8sApiAppsV1ReplicaSetSpec } from './ioK8sApiAppsV1ReplicaSetSpec';
import { IoK8sApiAppsV1ReplicaSetStatus } from './ioK8sApiAppsV1ReplicaSetStatus';
import { IoK8sApiAppsV1RollingUpdateDaemonSet } from './ioK8sApiAppsV1RollingUpdateDaemonSet';
import { IoK8sApiAppsV1RollingUpdateDeployment } from './ioK8sApiAppsV1RollingUpdateDeployment';
import { IoK8sApiAppsV1RollingUpdateStatefulSetStrategy } from './ioK8sApiAppsV1RollingUpdateStatefulSetStrategy';
import { IoK8sApiAppsV1StatefulSet } from './ioK8sApiAppsV1StatefulSet';
import { IoK8sApiAppsV1StatefulSetCondition } from './ioK8sApiAppsV1StatefulSetCondition';
import { IoK8sApiAppsV1StatefulSetList } from './ioK8sApiAppsV1StatefulSetList';
import { IoK8sApiAppsV1StatefulSetPersistentVolumeClaimRetentionPolicy } from './ioK8sApiAppsV1StatefulSetPersistentVolumeClaimRetentionPolicy';
import { IoK8sApiAppsV1StatefulSetSpec } from './ioK8sApiAppsV1StatefulSetSpec';
import { IoK8sApiAppsV1StatefulSetStatus } from './ioK8sApiAppsV1StatefulSetStatus';
import { IoK8sApiAppsV1StatefulSetUpdateStrategy } from './ioK8sApiAppsV1StatefulSetUpdateStrategy';
import { IoK8sApiAuthenticationV1BoundObjectReference } from './ioK8sApiAuthenticationV1BoundObjectReference';
import { IoK8sApiAuthenticationV1TokenRequest } from './ioK8sApiAuthenticationV1TokenRequest';
import { IoK8sApiAuthenticationV1TokenRequestSpec } from './ioK8sApiAuthenticationV1TokenRequestSpec';
import { IoK8sApiAuthenticationV1TokenRequestStatus } from './ioK8sApiAuthenticationV1TokenRequestStatus';
import { IoK8sApiAuthenticationV1TokenReview } from './ioK8sApiAuthenticationV1TokenReview';
import { IoK8sApiAuthenticationV1TokenReviewSpec } from './ioK8sApiAuthenticationV1TokenReviewSpec';
import { IoK8sApiAuthenticationV1TokenReviewStatus } from './ioK8sApiAuthenticationV1TokenReviewStatus';
import { IoK8sApiAuthenticationV1UserInfo } from './ioK8sApiAuthenticationV1UserInfo';
import { IoK8sApiAuthorizationV1LocalSubjectAccessReview } from './ioK8sApiAuthorizationV1LocalSubjectAccessReview';
import { IoK8sApiAuthorizationV1NonResourceAttributes } from './ioK8sApiAuthorizationV1NonResourceAttributes';
import { IoK8sApiAuthorizationV1NonResourceRule } from './ioK8sApiAuthorizationV1NonResourceRule';
import { IoK8sApiAuthorizationV1ResourceAttributes } from './ioK8sApiAuthorizationV1ResourceAttributes';
import { IoK8sApiAuthorizationV1ResourceRule } from './ioK8sApiAuthorizationV1ResourceRule';
import { IoK8sApiAuthorizationV1SelfSubjectAccessReview } from './ioK8sApiAuthorizationV1SelfSubjectAccessReview';
import { IoK8sApiAuthorizationV1SelfSubjectAccessReviewSpec } from './ioK8sApiAuthorizationV1SelfSubjectAccessReviewSpec';
import { IoK8sApiAuthorizationV1SelfSubjectRulesReview } from './ioK8sApiAuthorizationV1SelfSubjectRulesReview';
import { IoK8sApiAuthorizationV1SelfSubjectRulesReviewSpec } from './ioK8sApiAuthorizationV1SelfSubjectRulesReviewSpec';
import { IoK8sApiAuthorizationV1SubjectAccessReview } from './ioK8sApiAuthorizationV1SubjectAccessReview';
import { IoK8sApiAuthorizationV1SubjectAccessReviewSpec } from './ioK8sApiAuthorizationV1SubjectAccessReviewSpec';
import { IoK8sApiAuthorizationV1SubjectAccessReviewStatus } from './ioK8sApiAuthorizationV1SubjectAccessReviewStatus';
import { IoK8sApiAuthorizationV1SubjectRulesReviewStatus } from './ioK8sApiAuthorizationV1SubjectRulesReviewStatus';
import { IoK8sApiAutoscalingV1CrossVersionObjectReference } from './ioK8sApiAutoscalingV1CrossVersionObjectReference';
import { IoK8sApiAutoscalingV1HorizontalPodAutoscaler } from './ioK8sApiAutoscalingV1HorizontalPodAutoscaler';
import { IoK8sApiAutoscalingV1HorizontalPodAutoscalerList } from './ioK8sApiAutoscalingV1HorizontalPodAutoscalerList';
import { IoK8sApiAutoscalingV1HorizontalPodAutoscalerSpec } from './ioK8sApiAutoscalingV1HorizontalPodAutoscalerSpec';
import { IoK8sApiAutoscalingV1HorizontalPodAutoscalerStatus } from './ioK8sApiAutoscalingV1HorizontalPodAutoscalerStatus';
import { IoK8sApiAutoscalingV1Scale } from './ioK8sApiAutoscalingV1Scale';
import { IoK8sApiAutoscalingV1ScaleSpec } from './ioK8sApiAutoscalingV1ScaleSpec';
import { IoK8sApiAutoscalingV1ScaleStatus } from './ioK8sApiAutoscalingV1ScaleStatus';
import { IoK8sApiAutoscalingV1ScaleV2 } from './ioK8sApiAutoscalingV1ScaleV2';
import { IoK8sApiAutoscalingV2ContainerResourceMetricSource } from './ioK8sApiAutoscalingV2ContainerResourceMetricSource';
import { IoK8sApiAutoscalingV2ContainerResourceMetricStatus } from './ioK8sApiAutoscalingV2ContainerResourceMetricStatus';
import { IoK8sApiAutoscalingV2CrossVersionObjectReference } from './ioK8sApiAutoscalingV2CrossVersionObjectReference';
import { IoK8sApiAutoscalingV2ExternalMetricSource } from './ioK8sApiAutoscalingV2ExternalMetricSource';
import { IoK8sApiAutoscalingV2ExternalMetricStatus } from './ioK8sApiAutoscalingV2ExternalMetricStatus';
import { IoK8sApiAutoscalingV2HPAScalingPolicy } from './ioK8sApiAutoscalingV2HPAScalingPolicy';
import { IoK8sApiAutoscalingV2HPAScalingRules } from './ioK8sApiAutoscalingV2HPAScalingRules';
import { IoK8sApiAutoscalingV2HorizontalPodAutoscaler } from './ioK8sApiAutoscalingV2HorizontalPodAutoscaler';
import { IoK8sApiAutoscalingV2HorizontalPodAutoscalerBehavior } from './ioK8sApiAutoscalingV2HorizontalPodAutoscalerBehavior';
import { IoK8sApiAutoscalingV2HorizontalPodAutoscalerCondition } from './ioK8sApiAutoscalingV2HorizontalPodAutoscalerCondition';
import { IoK8sApiAutoscalingV2HorizontalPodAutoscalerList } from './ioK8sApiAutoscalingV2HorizontalPodAutoscalerList';
import { IoK8sApiAutoscalingV2HorizontalPodAutoscalerSpec } from './ioK8sApiAutoscalingV2HorizontalPodAutoscalerSpec';
import { IoK8sApiAutoscalingV2HorizontalPodAutoscalerStatus } from './ioK8sApiAutoscalingV2HorizontalPodAutoscalerStatus';
import { IoK8sApiAutoscalingV2MetricIdentifier } from './ioK8sApiAutoscalingV2MetricIdentifier';
import { IoK8sApiAutoscalingV2MetricSpec } from './ioK8sApiAutoscalingV2MetricSpec';
import { IoK8sApiAutoscalingV2MetricStatus } from './ioK8sApiAutoscalingV2MetricStatus';
import { IoK8sApiAutoscalingV2MetricTarget } from './ioK8sApiAutoscalingV2MetricTarget';
import { IoK8sApiAutoscalingV2MetricValueStatus } from './ioK8sApiAutoscalingV2MetricValueStatus';
import { IoK8sApiAutoscalingV2ObjectMetricSource } from './ioK8sApiAutoscalingV2ObjectMetricSource';
import { IoK8sApiAutoscalingV2ObjectMetricStatus } from './ioK8sApiAutoscalingV2ObjectMetricStatus';
import { IoK8sApiAutoscalingV2PodsMetricSource } from './ioK8sApiAutoscalingV2PodsMetricSource';
import { IoK8sApiAutoscalingV2PodsMetricStatus } from './ioK8sApiAutoscalingV2PodsMetricStatus';
import { IoK8sApiAutoscalingV2ResourceMetricSource } from './ioK8sApiAutoscalingV2ResourceMetricSource';
import { IoK8sApiAutoscalingV2ResourceMetricStatus } from './ioK8sApiAutoscalingV2ResourceMetricStatus';
import { IoK8sApiAutoscalingV2beta1ContainerResourceMetricSource } from './ioK8sApiAutoscalingV2beta1ContainerResourceMetricSource';
import { IoK8sApiAutoscalingV2beta1ContainerResourceMetricStatus } from './ioK8sApiAutoscalingV2beta1ContainerResourceMetricStatus';
import { IoK8sApiAutoscalingV2beta1CrossVersionObjectReference } from './ioK8sApiAutoscalingV2beta1CrossVersionObjectReference';
import { IoK8sApiAutoscalingV2beta1ExternalMetricSource } from './ioK8sApiAutoscalingV2beta1ExternalMetricSource';
import { IoK8sApiAutoscalingV2beta1ExternalMetricStatus } from './ioK8sApiAutoscalingV2beta1ExternalMetricStatus';
import { IoK8sApiAutoscalingV2beta1HorizontalPodAutoscaler } from './ioK8sApiAutoscalingV2beta1HorizontalPodAutoscaler';
import { IoK8sApiAutoscalingV2beta1HorizontalPodAutoscalerCondition } from './ioK8sApiAutoscalingV2beta1HorizontalPodAutoscalerCondition';
import { IoK8sApiAutoscalingV2beta1HorizontalPodAutoscalerList } from './ioK8sApiAutoscalingV2beta1HorizontalPodAutoscalerList';
import { IoK8sApiAutoscalingV2beta1HorizontalPodAutoscalerSpec } from './ioK8sApiAutoscalingV2beta1HorizontalPodAutoscalerSpec';
import { IoK8sApiAutoscalingV2beta1HorizontalPodAutoscalerStatus } from './ioK8sApiAutoscalingV2beta1HorizontalPodAutoscalerStatus';
import { IoK8sApiAutoscalingV2beta1MetricSpec } from './ioK8sApiAutoscalingV2beta1MetricSpec';
import { IoK8sApiAutoscalingV2beta1MetricStatus } from './ioK8sApiAutoscalingV2beta1MetricStatus';
import { IoK8sApiAutoscalingV2beta1ObjectMetricSource } from './ioK8sApiAutoscalingV2beta1ObjectMetricSource';
import { IoK8sApiAutoscalingV2beta1ObjectMetricStatus } from './ioK8sApiAutoscalingV2beta1ObjectMetricStatus';
import { IoK8sApiAutoscalingV2beta1PodsMetricSource } from './ioK8sApiAutoscalingV2beta1PodsMetricSource';
import { IoK8sApiAutoscalingV2beta1PodsMetricStatus } from './ioK8sApiAutoscalingV2beta1PodsMetricStatus';
import { IoK8sApiAutoscalingV2beta1ResourceMetricSource } from './ioK8sApiAutoscalingV2beta1ResourceMetricSource';
import { IoK8sApiAutoscalingV2beta1ResourceMetricStatus } from './ioK8sApiAutoscalingV2beta1ResourceMetricStatus';
import { IoK8sApiAutoscalingV2beta2ContainerResourceMetricSource } from './ioK8sApiAutoscalingV2beta2ContainerResourceMetricSource';
import { IoK8sApiAutoscalingV2beta2ContainerResourceMetricStatus } from './ioK8sApiAutoscalingV2beta2ContainerResourceMetricStatus';
import { IoK8sApiAutoscalingV2beta2CrossVersionObjectReference } from './ioK8sApiAutoscalingV2beta2CrossVersionObjectReference';
import { IoK8sApiAutoscalingV2beta2ExternalMetricSource } from './ioK8sApiAutoscalingV2beta2ExternalMetricSource';
import { IoK8sApiAutoscalingV2beta2ExternalMetricStatus } from './ioK8sApiAutoscalingV2beta2ExternalMetricStatus';
import { IoK8sApiAutoscalingV2beta2HPAScalingPolicy } from './ioK8sApiAutoscalingV2beta2HPAScalingPolicy';
import { IoK8sApiAutoscalingV2beta2HPAScalingRules } from './ioK8sApiAutoscalingV2beta2HPAScalingRules';
import { IoK8sApiAutoscalingV2beta2HorizontalPodAutoscaler } from './ioK8sApiAutoscalingV2beta2HorizontalPodAutoscaler';
import { IoK8sApiAutoscalingV2beta2HorizontalPodAutoscalerBehavior } from './ioK8sApiAutoscalingV2beta2HorizontalPodAutoscalerBehavior';
import { IoK8sApiAutoscalingV2beta2HorizontalPodAutoscalerCondition } from './ioK8sApiAutoscalingV2beta2HorizontalPodAutoscalerCondition';
import { IoK8sApiAutoscalingV2beta2HorizontalPodAutoscalerList } from './ioK8sApiAutoscalingV2beta2HorizontalPodAutoscalerList';
import { IoK8sApiAutoscalingV2beta2HorizontalPodAutoscalerSpec } from './ioK8sApiAutoscalingV2beta2HorizontalPodAutoscalerSpec';
import { IoK8sApiAutoscalingV2beta2HorizontalPodAutoscalerStatus } from './ioK8sApiAutoscalingV2beta2HorizontalPodAutoscalerStatus';
import { IoK8sApiAutoscalingV2beta2MetricIdentifier } from './ioK8sApiAutoscalingV2beta2MetricIdentifier';
import { IoK8sApiAutoscalingV2beta2MetricSpec } from './ioK8sApiAutoscalingV2beta2MetricSpec';
import { IoK8sApiAutoscalingV2beta2MetricStatus } from './ioK8sApiAutoscalingV2beta2MetricStatus';
import { IoK8sApiAutoscalingV2beta2MetricTarget } from './ioK8sApiAutoscalingV2beta2MetricTarget';
import { IoK8sApiAutoscalingV2beta2MetricValueStatus } from './ioK8sApiAutoscalingV2beta2MetricValueStatus';
import { IoK8sApiAutoscalingV2beta2ObjectMetricSource } from './ioK8sApiAutoscalingV2beta2ObjectMetricSource';
import { IoK8sApiAutoscalingV2beta2ObjectMetricStatus } from './ioK8sApiAutoscalingV2beta2ObjectMetricStatus';
import { IoK8sApiAutoscalingV2beta2PodsMetricSource } from './ioK8sApiAutoscalingV2beta2PodsMetricSource';
import { IoK8sApiAutoscalingV2beta2PodsMetricStatus } from './ioK8sApiAutoscalingV2beta2PodsMetricStatus';
import { IoK8sApiAutoscalingV2beta2ResourceMetricSource } from './ioK8sApiAutoscalingV2beta2ResourceMetricSource';
import { IoK8sApiAutoscalingV2beta2ResourceMetricStatus } from './ioK8sApiAutoscalingV2beta2ResourceMetricStatus';
import { IoK8sApiBatchV1CronJob } from './ioK8sApiBatchV1CronJob';
import { IoK8sApiBatchV1CronJobList } from './ioK8sApiBatchV1CronJobList';
import { IoK8sApiBatchV1CronJobSpec } from './ioK8sApiBatchV1CronJobSpec';
import { IoK8sApiBatchV1CronJobStatus } from './ioK8sApiBatchV1CronJobStatus';
import { IoK8sApiBatchV1Job } from './ioK8sApiBatchV1Job';
import { IoK8sApiBatchV1JobCondition } from './ioK8sApiBatchV1JobCondition';
import { IoK8sApiBatchV1JobList } from './ioK8sApiBatchV1JobList';
import { IoK8sApiBatchV1JobSpec } from './ioK8sApiBatchV1JobSpec';
import { IoK8sApiBatchV1JobStatus } from './ioK8sApiBatchV1JobStatus';
import { IoK8sApiBatchV1JobTemplateSpec } from './ioK8sApiBatchV1JobTemplateSpec';
import { IoK8sApiBatchV1UncountedTerminatedPods } from './ioK8sApiBatchV1UncountedTerminatedPods';
import { IoK8sApiBatchV1beta1CronJob } from './ioK8sApiBatchV1beta1CronJob';
import { IoK8sApiBatchV1beta1CronJobList } from './ioK8sApiBatchV1beta1CronJobList';
import { IoK8sApiBatchV1beta1CronJobSpec } from './ioK8sApiBatchV1beta1CronJobSpec';
import { IoK8sApiBatchV1beta1CronJobStatus } from './ioK8sApiBatchV1beta1CronJobStatus';
import { IoK8sApiBatchV1beta1JobTemplateSpec } from './ioK8sApiBatchV1beta1JobTemplateSpec';
import { IoK8sApiCertificatesV1CertificateSigningRequest } from './ioK8sApiCertificatesV1CertificateSigningRequest';
import { IoK8sApiCertificatesV1CertificateSigningRequestCondition } from './ioK8sApiCertificatesV1CertificateSigningRequestCondition';
import { IoK8sApiCertificatesV1CertificateSigningRequestList } from './ioK8sApiCertificatesV1CertificateSigningRequestList';
import { IoK8sApiCertificatesV1CertificateSigningRequestSpec } from './ioK8sApiCertificatesV1CertificateSigningRequestSpec';
import { IoK8sApiCertificatesV1CertificateSigningRequestStatus } from './ioK8sApiCertificatesV1CertificateSigningRequestStatus';
import { IoK8sApiCoordinationV1Lease } from './ioK8sApiCoordinationV1Lease';
import { IoK8sApiCoordinationV1LeaseList } from './ioK8sApiCoordinationV1LeaseList';
import { IoK8sApiCoordinationV1LeaseSpec } from './ioK8sApiCoordinationV1LeaseSpec';
import { IoK8sApiCoreV1AWSElasticBlockStoreVolumeSource } from './ioK8sApiCoreV1AWSElasticBlockStoreVolumeSource';
import { IoK8sApiCoreV1Affinity } from './ioK8sApiCoreV1Affinity';
import { IoK8sApiCoreV1AttachedVolume } from './ioK8sApiCoreV1AttachedVolume';
import { IoK8sApiCoreV1AzureDiskVolumeSource } from './ioK8sApiCoreV1AzureDiskVolumeSource';
import { IoK8sApiCoreV1AzureFilePersistentVolumeSource } from './ioK8sApiCoreV1AzureFilePersistentVolumeSource';
import { IoK8sApiCoreV1AzureFileVolumeSource } from './ioK8sApiCoreV1AzureFileVolumeSource';
import { IoK8sApiCoreV1Binding } from './ioK8sApiCoreV1Binding';
import { IoK8sApiCoreV1CSIPersistentVolumeSource } from './ioK8sApiCoreV1CSIPersistentVolumeSource';
import { IoK8sApiCoreV1CSIVolumeSource } from './ioK8sApiCoreV1CSIVolumeSource';
import { IoK8sApiCoreV1Capabilities } from './ioK8sApiCoreV1Capabilities';
import { IoK8sApiCoreV1CephFSPersistentVolumeSource } from './ioK8sApiCoreV1CephFSPersistentVolumeSource';
import { IoK8sApiCoreV1CephFSVolumeSource } from './ioK8sApiCoreV1CephFSVolumeSource';
import { IoK8sApiCoreV1CinderPersistentVolumeSource } from './ioK8sApiCoreV1CinderPersistentVolumeSource';
import { IoK8sApiCoreV1CinderVolumeSource } from './ioK8sApiCoreV1CinderVolumeSource';
import { IoK8sApiCoreV1ClientIPConfig } from './ioK8sApiCoreV1ClientIPConfig';
import { IoK8sApiCoreV1ComponentCondition } from './ioK8sApiCoreV1ComponentCondition';
import { IoK8sApiCoreV1ComponentStatus } from './ioK8sApiCoreV1ComponentStatus';
import { IoK8sApiCoreV1ComponentStatusList } from './ioK8sApiCoreV1ComponentStatusList';
import { IoK8sApiCoreV1ConfigMap } from './ioK8sApiCoreV1ConfigMap';
import { IoK8sApiCoreV1ConfigMapEnvSource } from './ioK8sApiCoreV1ConfigMapEnvSource';
import { IoK8sApiCoreV1ConfigMapKeySelector } from './ioK8sApiCoreV1ConfigMapKeySelector';
import { IoK8sApiCoreV1ConfigMapList } from './ioK8sApiCoreV1ConfigMapList';
import { IoK8sApiCoreV1ConfigMapNodeConfigSource } from './ioK8sApiCoreV1ConfigMapNodeConfigSource';
import { IoK8sApiCoreV1ConfigMapProjection } from './ioK8sApiCoreV1ConfigMapProjection';
import { IoK8sApiCoreV1ConfigMapVolumeSource } from './ioK8sApiCoreV1ConfigMapVolumeSource';
import { IoK8sApiCoreV1Container } from './ioK8sApiCoreV1Container';
import { IoK8sApiCoreV1ContainerImage } from './ioK8sApiCoreV1ContainerImage';
import { IoK8sApiCoreV1ContainerPort } from './ioK8sApiCoreV1ContainerPort';
import { IoK8sApiCoreV1ContainerState } from './ioK8sApiCoreV1ContainerState';
import { IoK8sApiCoreV1ContainerStateRunning } from './ioK8sApiCoreV1ContainerStateRunning';
import { IoK8sApiCoreV1ContainerStateTerminated } from './ioK8sApiCoreV1ContainerStateTerminated';
import { IoK8sApiCoreV1ContainerStateWaiting } from './ioK8sApiCoreV1ContainerStateWaiting';
import { IoK8sApiCoreV1ContainerStatus } from './ioK8sApiCoreV1ContainerStatus';
import { IoK8sApiCoreV1DaemonEndpoint } from './ioK8sApiCoreV1DaemonEndpoint';
import { IoK8sApiCoreV1DownwardAPIProjection } from './ioK8sApiCoreV1DownwardAPIProjection';
import { IoK8sApiCoreV1DownwardAPIVolumeFile } from './ioK8sApiCoreV1DownwardAPIVolumeFile';
import { IoK8sApiCoreV1DownwardAPIVolumeSource } from './ioK8sApiCoreV1DownwardAPIVolumeSource';
import { IoK8sApiCoreV1EmptyDirVolumeSource } from './ioK8sApiCoreV1EmptyDirVolumeSource';
import { IoK8sApiCoreV1EndpointAddress } from './ioK8sApiCoreV1EndpointAddress';
import { IoK8sApiCoreV1EndpointPort } from './ioK8sApiCoreV1EndpointPort';
import { IoK8sApiCoreV1EndpointSubset } from './ioK8sApiCoreV1EndpointSubset';
import { IoK8sApiCoreV1Endpoints } from './ioK8sApiCoreV1Endpoints';
import { IoK8sApiCoreV1EndpointsList } from './ioK8sApiCoreV1EndpointsList';
import { IoK8sApiCoreV1EnvFromSource } from './ioK8sApiCoreV1EnvFromSource';
import { IoK8sApiCoreV1EnvVar } from './ioK8sApiCoreV1EnvVar';
import { IoK8sApiCoreV1EnvVarSource } from './ioK8sApiCoreV1EnvVarSource';
import { IoK8sApiCoreV1EphemeralContainer } from './ioK8sApiCoreV1EphemeralContainer';
import { IoK8sApiCoreV1EphemeralVolumeSource } from './ioK8sApiCoreV1EphemeralVolumeSource';
import { IoK8sApiCoreV1Event } from './ioK8sApiCoreV1Event';
import { IoK8sApiCoreV1EventList } from './ioK8sApiCoreV1EventList';
import { IoK8sApiCoreV1EventSeries } from './ioK8sApiCoreV1EventSeries';
import { IoK8sApiCoreV1EventSource } from './ioK8sApiCoreV1EventSource';
import { IoK8sApiCoreV1ExecAction } from './ioK8sApiCoreV1ExecAction';
import { IoK8sApiCoreV1FCVolumeSource } from './ioK8sApiCoreV1FCVolumeSource';
import { IoK8sApiCoreV1FlexPersistentVolumeSource } from './ioK8sApiCoreV1FlexPersistentVolumeSource';
import { IoK8sApiCoreV1FlexVolumeSource } from './ioK8sApiCoreV1FlexVolumeSource';
import { IoK8sApiCoreV1FlockerVolumeSource } from './ioK8sApiCoreV1FlockerVolumeSource';
import { IoK8sApiCoreV1GCEPersistentDiskVolumeSource } from './ioK8sApiCoreV1GCEPersistentDiskVolumeSource';
import { IoK8sApiCoreV1GRPCAction } from './ioK8sApiCoreV1GRPCAction';
import { IoK8sApiCoreV1GitRepoVolumeSource } from './ioK8sApiCoreV1GitRepoVolumeSource';
import { IoK8sApiCoreV1GlusterfsPersistentVolumeSource } from './ioK8sApiCoreV1GlusterfsPersistentVolumeSource';
import { IoK8sApiCoreV1GlusterfsVolumeSource } from './ioK8sApiCoreV1GlusterfsVolumeSource';
import { IoK8sApiCoreV1HTTPGetAction } from './ioK8sApiCoreV1HTTPGetAction';
import { IoK8sApiCoreV1HTTPHeader } from './ioK8sApiCoreV1HTTPHeader';
import { IoK8sApiCoreV1HostAlias } from './ioK8sApiCoreV1HostAlias';
import { IoK8sApiCoreV1HostPathVolumeSource } from './ioK8sApiCoreV1HostPathVolumeSource';
import { IoK8sApiCoreV1ISCSIPersistentVolumeSource } from './ioK8sApiCoreV1ISCSIPersistentVolumeSource';
import { IoK8sApiCoreV1ISCSIVolumeSource } from './ioK8sApiCoreV1ISCSIVolumeSource';
import { IoK8sApiCoreV1KeyToPath } from './ioK8sApiCoreV1KeyToPath';
import { IoK8sApiCoreV1Lifecycle } from './ioK8sApiCoreV1Lifecycle';
import { IoK8sApiCoreV1LifecycleHandler } from './ioK8sApiCoreV1LifecycleHandler';
import { IoK8sApiCoreV1LimitRange } from './ioK8sApiCoreV1LimitRange';
import { IoK8sApiCoreV1LimitRangeItem } from './ioK8sApiCoreV1LimitRangeItem';
import { IoK8sApiCoreV1LimitRangeList } from './ioK8sApiCoreV1LimitRangeList';
import { IoK8sApiCoreV1LimitRangeSpec } from './ioK8sApiCoreV1LimitRangeSpec';
import { IoK8sApiCoreV1LoadBalancerIngress } from './ioK8sApiCoreV1LoadBalancerIngress';
import { IoK8sApiCoreV1LoadBalancerStatus } from './ioK8sApiCoreV1LoadBalancerStatus';
import { IoK8sApiCoreV1LocalObjectReference } from './ioK8sApiCoreV1LocalObjectReference';
import { IoK8sApiCoreV1LocalVolumeSource } from './ioK8sApiCoreV1LocalVolumeSource';
import { IoK8sApiCoreV1NFSVolumeSource } from './ioK8sApiCoreV1NFSVolumeSource';
import { IoK8sApiCoreV1Namespace } from './ioK8sApiCoreV1Namespace';
import { IoK8sApiCoreV1NamespaceCondition } from './ioK8sApiCoreV1NamespaceCondition';
import { IoK8sApiCoreV1NamespaceList } from './ioK8sApiCoreV1NamespaceList';
import { IoK8sApiCoreV1NamespaceSpec } from './ioK8sApiCoreV1NamespaceSpec';
import { IoK8sApiCoreV1NamespaceStatus } from './ioK8sApiCoreV1NamespaceStatus';
import { IoK8sApiCoreV1Node } from './ioK8sApiCoreV1Node';
import { IoK8sApiCoreV1NodeAddress } from './ioK8sApiCoreV1NodeAddress';
import { IoK8sApiCoreV1NodeAffinity } from './ioK8sApiCoreV1NodeAffinity';
import { IoK8sApiCoreV1NodeCondition } from './ioK8sApiCoreV1NodeCondition';
import { IoK8sApiCoreV1NodeConfigSource } from './ioK8sApiCoreV1NodeConfigSource';
import { IoK8sApiCoreV1NodeConfigStatus } from './ioK8sApiCoreV1NodeConfigStatus';
import { IoK8sApiCoreV1NodeDaemonEndpoints } from './ioK8sApiCoreV1NodeDaemonEndpoints';
import { IoK8sApiCoreV1NodeList } from './ioK8sApiCoreV1NodeList';
import { IoK8sApiCoreV1NodeSelector } from './ioK8sApiCoreV1NodeSelector';
import { IoK8sApiCoreV1NodeSelectorRequirement } from './ioK8sApiCoreV1NodeSelectorRequirement';
import { IoK8sApiCoreV1NodeSelectorTerm } from './ioK8sApiCoreV1NodeSelectorTerm';
import { IoK8sApiCoreV1NodeSpec } from './ioK8sApiCoreV1NodeSpec';
import { IoK8sApiCoreV1NodeStatus } from './ioK8sApiCoreV1NodeStatus';
import { IoK8sApiCoreV1NodeSystemInfo } from './ioK8sApiCoreV1NodeSystemInfo';
import { IoK8sApiCoreV1ObjectFieldSelector } from './ioK8sApiCoreV1ObjectFieldSelector';
import { IoK8sApiCoreV1ObjectReference } from './ioK8sApiCoreV1ObjectReference';
import { IoK8sApiCoreV1PersistentVolume } from './ioK8sApiCoreV1PersistentVolume';
import { IoK8sApiCoreV1PersistentVolumeClaim } from './ioK8sApiCoreV1PersistentVolumeClaim';
import { IoK8sApiCoreV1PersistentVolumeClaimCondition } from './ioK8sApiCoreV1PersistentVolumeClaimCondition';
import { IoK8sApiCoreV1PersistentVolumeClaimList } from './ioK8sApiCoreV1PersistentVolumeClaimList';
import { IoK8sApiCoreV1PersistentVolumeClaimSpec } from './ioK8sApiCoreV1PersistentVolumeClaimSpec';
import { IoK8sApiCoreV1PersistentVolumeClaimStatus } from './ioK8sApiCoreV1PersistentVolumeClaimStatus';
import { IoK8sApiCoreV1PersistentVolumeClaimTemplate } from './ioK8sApiCoreV1PersistentVolumeClaimTemplate';
import { IoK8sApiCoreV1PersistentVolumeClaimVolumeSource } from './ioK8sApiCoreV1PersistentVolumeClaimVolumeSource';
import { IoK8sApiCoreV1PersistentVolumeList } from './ioK8sApiCoreV1PersistentVolumeList';
import { IoK8sApiCoreV1PersistentVolumeSpec } from './ioK8sApiCoreV1PersistentVolumeSpec';
import { IoK8sApiCoreV1PersistentVolumeStatus } from './ioK8sApiCoreV1PersistentVolumeStatus';
import { IoK8sApiCoreV1PhotonPersistentDiskVolumeSource } from './ioK8sApiCoreV1PhotonPersistentDiskVolumeSource';
import { IoK8sApiCoreV1Pod } from './ioK8sApiCoreV1Pod';
import { IoK8sApiCoreV1PodAffinity } from './ioK8sApiCoreV1PodAffinity';
import { IoK8sApiCoreV1PodAffinityTerm } from './ioK8sApiCoreV1PodAffinityTerm';
import { IoK8sApiCoreV1PodAntiAffinity } from './ioK8sApiCoreV1PodAntiAffinity';
import { IoK8sApiCoreV1PodCondition } from './ioK8sApiCoreV1PodCondition';
import { IoK8sApiCoreV1PodDNSConfig } from './ioK8sApiCoreV1PodDNSConfig';
import { IoK8sApiCoreV1PodDNSConfigOption } from './ioK8sApiCoreV1PodDNSConfigOption';
import { IoK8sApiCoreV1PodIP } from './ioK8sApiCoreV1PodIP';
import { IoK8sApiCoreV1PodList } from './ioK8sApiCoreV1PodList';
import { IoK8sApiCoreV1PodOS } from './ioK8sApiCoreV1PodOS';
import { IoK8sApiCoreV1PodReadinessGate } from './ioK8sApiCoreV1PodReadinessGate';
import { IoK8sApiCoreV1PodSecurityContext } from './ioK8sApiCoreV1PodSecurityContext';
import { IoK8sApiCoreV1PodSpec } from './ioK8sApiCoreV1PodSpec';
import { IoK8sApiCoreV1PodStatus } from './ioK8sApiCoreV1PodStatus';
import { IoK8sApiCoreV1PodTemplate } from './ioK8sApiCoreV1PodTemplate';
import { IoK8sApiCoreV1PodTemplateList } from './ioK8sApiCoreV1PodTemplateList';
import { IoK8sApiCoreV1PodTemplateSpec } from './ioK8sApiCoreV1PodTemplateSpec';
import { IoK8sApiCoreV1PortStatus } from './ioK8sApiCoreV1PortStatus';
import { IoK8sApiCoreV1PortworxVolumeSource } from './ioK8sApiCoreV1PortworxVolumeSource';
import { IoK8sApiCoreV1PreferredSchedulingTerm } from './ioK8sApiCoreV1PreferredSchedulingTerm';
import { IoK8sApiCoreV1Probe } from './ioK8sApiCoreV1Probe';
import { IoK8sApiCoreV1ProjectedVolumeSource } from './ioK8sApiCoreV1ProjectedVolumeSource';
import { IoK8sApiCoreV1QuobyteVolumeSource } from './ioK8sApiCoreV1QuobyteVolumeSource';
import { IoK8sApiCoreV1RBDPersistentVolumeSource } from './ioK8sApiCoreV1RBDPersistentVolumeSource';
import { IoK8sApiCoreV1RBDVolumeSource } from './ioK8sApiCoreV1RBDVolumeSource';
import { IoK8sApiCoreV1ReplicationController } from './ioK8sApiCoreV1ReplicationController';
import { IoK8sApiCoreV1ReplicationControllerCondition } from './ioK8sApiCoreV1ReplicationControllerCondition';
import { IoK8sApiCoreV1ReplicationControllerList } from './ioK8sApiCoreV1ReplicationControllerList';
import { IoK8sApiCoreV1ReplicationControllerSpec } from './ioK8sApiCoreV1ReplicationControllerSpec';
import { IoK8sApiCoreV1ReplicationControllerStatus } from './ioK8sApiCoreV1ReplicationControllerStatus';
import { IoK8sApiCoreV1ResourceFieldSelector } from './ioK8sApiCoreV1ResourceFieldSelector';
import { IoK8sApiCoreV1ResourceQuota } from './ioK8sApiCoreV1ResourceQuota';
import { IoK8sApiCoreV1ResourceQuotaList } from './ioK8sApiCoreV1ResourceQuotaList';
import { IoK8sApiCoreV1ResourceQuotaSpec } from './ioK8sApiCoreV1ResourceQuotaSpec';
import { IoK8sApiCoreV1ResourceQuotaStatus } from './ioK8sApiCoreV1ResourceQuotaStatus';
import { IoK8sApiCoreV1ResourceRequirements } from './ioK8sApiCoreV1ResourceRequirements';
import { IoK8sApiCoreV1SELinuxOptions } from './ioK8sApiCoreV1SELinuxOptions';
import { IoK8sApiCoreV1ScaleIOPersistentVolumeSource } from './ioK8sApiCoreV1ScaleIOPersistentVolumeSource';
import { IoK8sApiCoreV1ScaleIOVolumeSource } from './ioK8sApiCoreV1ScaleIOVolumeSource';
import { IoK8sApiCoreV1ScopeSelector } from './ioK8sApiCoreV1ScopeSelector';
import { IoK8sApiCoreV1ScopedResourceSelectorRequirement } from './ioK8sApiCoreV1ScopedResourceSelectorRequirement';
import { IoK8sApiCoreV1SeccompProfile } from './ioK8sApiCoreV1SeccompProfile';
import { IoK8sApiCoreV1Secret } from './ioK8sApiCoreV1Secret';
import { IoK8sApiCoreV1SecretEnvSource } from './ioK8sApiCoreV1SecretEnvSource';
import { IoK8sApiCoreV1SecretKeySelector } from './ioK8sApiCoreV1SecretKeySelector';
import { IoK8sApiCoreV1SecretList } from './ioK8sApiCoreV1SecretList';
import { IoK8sApiCoreV1SecretProjection } from './ioK8sApiCoreV1SecretProjection';
import { IoK8sApiCoreV1SecretReference } from './ioK8sApiCoreV1SecretReference';
import { IoK8sApiCoreV1SecretVolumeSource } from './ioK8sApiCoreV1SecretVolumeSource';
import { IoK8sApiCoreV1SecurityContext } from './ioK8sApiCoreV1SecurityContext';
import { IoK8sApiCoreV1Service } from './ioK8sApiCoreV1Service';
import { IoK8sApiCoreV1ServiceAccount } from './ioK8sApiCoreV1ServiceAccount';
import { IoK8sApiCoreV1ServiceAccountList } from './ioK8sApiCoreV1ServiceAccountList';
import { IoK8sApiCoreV1ServiceAccountTokenProjection } from './ioK8sApiCoreV1ServiceAccountTokenProjection';
import { IoK8sApiCoreV1ServiceList } from './ioK8sApiCoreV1ServiceList';
import { IoK8sApiCoreV1ServicePort } from './ioK8sApiCoreV1ServicePort';
import { IoK8sApiCoreV1ServiceSpec } from './ioK8sApiCoreV1ServiceSpec';
import { IoK8sApiCoreV1ServiceStatus } from './ioK8sApiCoreV1ServiceStatus';
import { IoK8sApiCoreV1SessionAffinityConfig } from './ioK8sApiCoreV1SessionAffinityConfig';
import { IoK8sApiCoreV1StorageOSPersistentVolumeSource } from './ioK8sApiCoreV1StorageOSPersistentVolumeSource';
import { IoK8sApiCoreV1StorageOSVolumeSource } from './ioK8sApiCoreV1StorageOSVolumeSource';
import { IoK8sApiCoreV1Sysctl } from './ioK8sApiCoreV1Sysctl';
import { IoK8sApiCoreV1TCPSocketAction } from './ioK8sApiCoreV1TCPSocketAction';
import { IoK8sApiCoreV1Taint } from './ioK8sApiCoreV1Taint';
import { IoK8sApiCoreV1Toleration } from './ioK8sApiCoreV1Toleration';
import { IoK8sApiCoreV1TopologySelectorLabelRequirement } from './ioK8sApiCoreV1TopologySelectorLabelRequirement';
import { IoK8sApiCoreV1TopologySelectorTerm } from './ioK8sApiCoreV1TopologySelectorTerm';
import { IoK8sApiCoreV1TopologySpreadConstraint } from './ioK8sApiCoreV1TopologySpreadConstraint';
import { IoK8sApiCoreV1TypedLocalObjectReference } from './ioK8sApiCoreV1TypedLocalObjectReference';
import { IoK8sApiCoreV1Volume } from './ioK8sApiCoreV1Volume';
import { IoK8sApiCoreV1VolumeDevice } from './ioK8sApiCoreV1VolumeDevice';
import { IoK8sApiCoreV1VolumeMount } from './ioK8sApiCoreV1VolumeMount';
import { IoK8sApiCoreV1VolumeNodeAffinity } from './ioK8sApiCoreV1VolumeNodeAffinity';
import { IoK8sApiCoreV1VolumeProjection } from './ioK8sApiCoreV1VolumeProjection';
import { IoK8sApiCoreV1VsphereVirtualDiskVolumeSource } from './ioK8sApiCoreV1VsphereVirtualDiskVolumeSource';
import { IoK8sApiCoreV1WeightedPodAffinityTerm } from './ioK8sApiCoreV1WeightedPodAffinityTerm';
import { IoK8sApiCoreV1WindowsSecurityContextOptions } from './ioK8sApiCoreV1WindowsSecurityContextOptions';
import { IoK8sApiDiscoveryV1Endpoint } from './ioK8sApiDiscoveryV1Endpoint';
import { IoK8sApiDiscoveryV1EndpointConditions } from './ioK8sApiDiscoveryV1EndpointConditions';
import { IoK8sApiDiscoveryV1EndpointHints } from './ioK8sApiDiscoveryV1EndpointHints';
import { IoK8sApiDiscoveryV1EndpointPort } from './ioK8sApiDiscoveryV1EndpointPort';
import { IoK8sApiDiscoveryV1EndpointSlice } from './ioK8sApiDiscoveryV1EndpointSlice';
import { IoK8sApiDiscoveryV1EndpointSliceList } from './ioK8sApiDiscoveryV1EndpointSliceList';
import { IoK8sApiDiscoveryV1ForZone } from './ioK8sApiDiscoveryV1ForZone';
import { IoK8sApiDiscoveryV1beta1Endpoint } from './ioK8sApiDiscoveryV1beta1Endpoint';
import { IoK8sApiDiscoveryV1beta1EndpointConditions } from './ioK8sApiDiscoveryV1beta1EndpointConditions';
import { IoK8sApiDiscoveryV1beta1EndpointHints } from './ioK8sApiDiscoveryV1beta1EndpointHints';
import { IoK8sApiDiscoveryV1beta1EndpointPort } from './ioK8sApiDiscoveryV1beta1EndpointPort';
import { IoK8sApiDiscoveryV1beta1EndpointSlice } from './ioK8sApiDiscoveryV1beta1EndpointSlice';
import { IoK8sApiDiscoveryV1beta1EndpointSliceList } from './ioK8sApiDiscoveryV1beta1EndpointSliceList';
import { IoK8sApiDiscoveryV1beta1ForZone } from './ioK8sApiDiscoveryV1beta1ForZone';
import { IoK8sApiEventsV1Event } from './ioK8sApiEventsV1Event';
import { IoK8sApiEventsV1EventList } from './ioK8sApiEventsV1EventList';
import { IoK8sApiEventsV1EventSeries } from './ioK8sApiEventsV1EventSeries';
import { IoK8sApiEventsV1beta1Event } from './ioK8sApiEventsV1beta1Event';
import { IoK8sApiEventsV1beta1EventList } from './ioK8sApiEventsV1beta1EventList';
import { IoK8sApiEventsV1beta1EventSeries } from './ioK8sApiEventsV1beta1EventSeries';
import { IoK8sApiFlowcontrolV1beta1FlowDistinguisherMethod } from './ioK8sApiFlowcontrolV1beta1FlowDistinguisherMethod';
import { IoK8sApiFlowcontrolV1beta1FlowSchema } from './ioK8sApiFlowcontrolV1beta1FlowSchema';
import { IoK8sApiFlowcontrolV1beta1FlowSchemaCondition } from './ioK8sApiFlowcontrolV1beta1FlowSchemaCondition';
import { IoK8sApiFlowcontrolV1beta1FlowSchemaList } from './ioK8sApiFlowcontrolV1beta1FlowSchemaList';
import { IoK8sApiFlowcontrolV1beta1FlowSchemaSpec } from './ioK8sApiFlowcontrolV1beta1FlowSchemaSpec';
import { IoK8sApiFlowcontrolV1beta1FlowSchemaStatus } from './ioK8sApiFlowcontrolV1beta1FlowSchemaStatus';
import { IoK8sApiFlowcontrolV1beta1GroupSubject } from './ioK8sApiFlowcontrolV1beta1GroupSubject';
import { IoK8sApiFlowcontrolV1beta1LimitResponse } from './ioK8sApiFlowcontrolV1beta1LimitResponse';
import { IoK8sApiFlowcontrolV1beta1LimitedPriorityLevelConfiguration } from './ioK8sApiFlowcontrolV1beta1LimitedPriorityLevelConfiguration';
import { IoK8sApiFlowcontrolV1beta1NonResourcePolicyRule } from './ioK8sApiFlowcontrolV1beta1NonResourcePolicyRule';
import { IoK8sApiFlowcontrolV1beta1PolicyRulesWithSubjects } from './ioK8sApiFlowcontrolV1beta1PolicyRulesWithSubjects';
import { IoK8sApiFlowcontrolV1beta1PriorityLevelConfiguration } from './ioK8sApiFlowcontrolV1beta1PriorityLevelConfiguration';
import { IoK8sApiFlowcontrolV1beta1PriorityLevelConfigurationCondition } from './ioK8sApiFlowcontrolV1beta1PriorityLevelConfigurationCondition';
import { IoK8sApiFlowcontrolV1beta1PriorityLevelConfigurationList } from './ioK8sApiFlowcontrolV1beta1PriorityLevelConfigurationList';
import { IoK8sApiFlowcontrolV1beta1PriorityLevelConfigurationReference } from './ioK8sApiFlowcontrolV1beta1PriorityLevelConfigurationReference';
import { IoK8sApiFlowcontrolV1beta1PriorityLevelConfigurationSpec } from './ioK8sApiFlowcontrolV1beta1PriorityLevelConfigurationSpec';
import { IoK8sApiFlowcontrolV1beta1PriorityLevelConfigurationStatus } from './ioK8sApiFlowcontrolV1beta1PriorityLevelConfigurationStatus';
import { IoK8sApiFlowcontrolV1beta1QueuingConfiguration } from './ioK8sApiFlowcontrolV1beta1QueuingConfiguration';
import { IoK8sApiFlowcontrolV1beta1ResourcePolicyRule } from './ioK8sApiFlowcontrolV1beta1ResourcePolicyRule';
import { IoK8sApiFlowcontrolV1beta1ServiceAccountSubject } from './ioK8sApiFlowcontrolV1beta1ServiceAccountSubject';
import { IoK8sApiFlowcontrolV1beta1Subject } from './ioK8sApiFlowcontrolV1beta1Subject';
import { IoK8sApiFlowcontrolV1beta1UserSubject } from './ioK8sApiFlowcontrolV1beta1UserSubject';
import { IoK8sApiFlowcontrolV1beta2FlowDistinguisherMethod } from './ioK8sApiFlowcontrolV1beta2FlowDistinguisherMethod';
import { IoK8sApiFlowcontrolV1beta2FlowSchema } from './ioK8sApiFlowcontrolV1beta2FlowSchema';
import { IoK8sApiFlowcontrolV1beta2FlowSchemaCondition } from './ioK8sApiFlowcontrolV1beta2FlowSchemaCondition';
import { IoK8sApiFlowcontrolV1beta2FlowSchemaList } from './ioK8sApiFlowcontrolV1beta2FlowSchemaList';
import { IoK8sApiFlowcontrolV1beta2FlowSchemaSpec } from './ioK8sApiFlowcontrolV1beta2FlowSchemaSpec';
import { IoK8sApiFlowcontrolV1beta2FlowSchemaStatus } from './ioK8sApiFlowcontrolV1beta2FlowSchemaStatus';
import { IoK8sApiFlowcontrolV1beta2GroupSubject } from './ioK8sApiFlowcontrolV1beta2GroupSubject';
import { IoK8sApiFlowcontrolV1beta2LimitResponse } from './ioK8sApiFlowcontrolV1beta2LimitResponse';
import { IoK8sApiFlowcontrolV1beta2LimitedPriorityLevelConfiguration } from './ioK8sApiFlowcontrolV1beta2LimitedPriorityLevelConfiguration';
import { IoK8sApiFlowcontrolV1beta2NonResourcePolicyRule } from './ioK8sApiFlowcontrolV1beta2NonResourcePolicyRule';
import { IoK8sApiFlowcontrolV1beta2PolicyRulesWithSubjects } from './ioK8sApiFlowcontrolV1beta2PolicyRulesWithSubjects';
import { IoK8sApiFlowcontrolV1beta2PriorityLevelConfiguration } from './ioK8sApiFlowcontrolV1beta2PriorityLevelConfiguration';
import { IoK8sApiFlowcontrolV1beta2PriorityLevelConfigurationCondition } from './ioK8sApiFlowcontrolV1beta2PriorityLevelConfigurationCondition';
import { IoK8sApiFlowcontrolV1beta2PriorityLevelConfigurationList } from './ioK8sApiFlowcontrolV1beta2PriorityLevelConfigurationList';
import { IoK8sApiFlowcontrolV1beta2PriorityLevelConfigurationReference } from './ioK8sApiFlowcontrolV1beta2PriorityLevelConfigurationReference';
import { IoK8sApiFlowcontrolV1beta2PriorityLevelConfigurationSpec } from './ioK8sApiFlowcontrolV1beta2PriorityLevelConfigurationSpec';
import { IoK8sApiFlowcontrolV1beta2PriorityLevelConfigurationStatus } from './ioK8sApiFlowcontrolV1beta2PriorityLevelConfigurationStatus';
import { IoK8sApiFlowcontrolV1beta2QueuingConfiguration } from './ioK8sApiFlowcontrolV1beta2QueuingConfiguration';
import { IoK8sApiFlowcontrolV1beta2ResourcePolicyRule } from './ioK8sApiFlowcontrolV1beta2ResourcePolicyRule';
import { IoK8sApiFlowcontrolV1beta2ServiceAccountSubject } from './ioK8sApiFlowcontrolV1beta2ServiceAccountSubject';
import { IoK8sApiFlowcontrolV1beta2Subject } from './ioK8sApiFlowcontrolV1beta2Subject';
import { IoK8sApiFlowcontrolV1beta2UserSubject } from './ioK8sApiFlowcontrolV1beta2UserSubject';
import { IoK8sApiNetworkingV1HTTPIngressPath } from './ioK8sApiNetworkingV1HTTPIngressPath';
import { IoK8sApiNetworkingV1HTTPIngressRuleValue } from './ioK8sApiNetworkingV1HTTPIngressRuleValue';
import { IoK8sApiNetworkingV1IPBlock } from './ioK8sApiNetworkingV1IPBlock';
import { IoK8sApiNetworkingV1Ingress } from './ioK8sApiNetworkingV1Ingress';
import { IoK8sApiNetworkingV1IngressBackend } from './ioK8sApiNetworkingV1IngressBackend';
import { IoK8sApiNetworkingV1IngressClass } from './ioK8sApiNetworkingV1IngressClass';
import { IoK8sApiNetworkingV1IngressClassList } from './ioK8sApiNetworkingV1IngressClassList';
import { IoK8sApiNetworkingV1IngressClassParametersReference } from './ioK8sApiNetworkingV1IngressClassParametersReference';
import { IoK8sApiNetworkingV1IngressClassSpec } from './ioK8sApiNetworkingV1IngressClassSpec';
import { IoK8sApiNetworkingV1IngressList } from './ioK8sApiNetworkingV1IngressList';
import { IoK8sApiNetworkingV1IngressRule } from './ioK8sApiNetworkingV1IngressRule';
import { IoK8sApiNetworkingV1IngressServiceBackend } from './ioK8sApiNetworkingV1IngressServiceBackend';
import { IoK8sApiNetworkingV1IngressSpec } from './ioK8sApiNetworkingV1IngressSpec';
import { IoK8sApiNetworkingV1IngressStatus } from './ioK8sApiNetworkingV1IngressStatus';
import { IoK8sApiNetworkingV1IngressTLS } from './ioK8sApiNetworkingV1IngressTLS';
import { IoK8sApiNetworkingV1NetworkPolicy } from './ioK8sApiNetworkingV1NetworkPolicy';
import { IoK8sApiNetworkingV1NetworkPolicyEgressRule } from './ioK8sApiNetworkingV1NetworkPolicyEgressRule';
import { IoK8sApiNetworkingV1NetworkPolicyIngressRule } from './ioK8sApiNetworkingV1NetworkPolicyIngressRule';
import { IoK8sApiNetworkingV1NetworkPolicyList } from './ioK8sApiNetworkingV1NetworkPolicyList';
import { IoK8sApiNetworkingV1NetworkPolicyPeer } from './ioK8sApiNetworkingV1NetworkPolicyPeer';
import { IoK8sApiNetworkingV1NetworkPolicyPort } from './ioK8sApiNetworkingV1NetworkPolicyPort';
import { IoK8sApiNetworkingV1NetworkPolicySpec } from './ioK8sApiNetworkingV1NetworkPolicySpec';
import { IoK8sApiNetworkingV1ServiceBackendPort } from './ioK8sApiNetworkingV1ServiceBackendPort';
import { IoK8sApiNodeV1Overhead } from './ioK8sApiNodeV1Overhead';
import { IoK8sApiNodeV1RuntimeClass } from './ioK8sApiNodeV1RuntimeClass';
import { IoK8sApiNodeV1RuntimeClassList } from './ioK8sApiNodeV1RuntimeClassList';
import { IoK8sApiNodeV1Scheduling } from './ioK8sApiNodeV1Scheduling';
import { IoK8sApiNodeV1beta1Overhead } from './ioK8sApiNodeV1beta1Overhead';
import { IoK8sApiNodeV1beta1RuntimeClass } from './ioK8sApiNodeV1beta1RuntimeClass';
import { IoK8sApiNodeV1beta1RuntimeClassList } from './ioK8sApiNodeV1beta1RuntimeClassList';
import { IoK8sApiNodeV1beta1Scheduling } from './ioK8sApiNodeV1beta1Scheduling';
import { IoK8sApiPolicyV1Eviction } from './ioK8sApiPolicyV1Eviction';
import { IoK8sApiPolicyV1PodDisruptionBudget } from './ioK8sApiPolicyV1PodDisruptionBudget';
import { IoK8sApiPolicyV1PodDisruptionBudgetList } from './ioK8sApiPolicyV1PodDisruptionBudgetList';
import { IoK8sApiPolicyV1PodDisruptionBudgetSpec } from './ioK8sApiPolicyV1PodDisruptionBudgetSpec';
import { IoK8sApiPolicyV1PodDisruptionBudgetStatus } from './ioK8sApiPolicyV1PodDisruptionBudgetStatus';
import { IoK8sApiPolicyV1beta1AllowedCSIDriver } from './ioK8sApiPolicyV1beta1AllowedCSIDriver';
import { IoK8sApiPolicyV1beta1AllowedFlexVolume } from './ioK8sApiPolicyV1beta1AllowedFlexVolume';
import { IoK8sApiPolicyV1beta1AllowedHostPath } from './ioK8sApiPolicyV1beta1AllowedHostPath';
import { IoK8sApiPolicyV1beta1FSGroupStrategyOptions } from './ioK8sApiPolicyV1beta1FSGroupStrategyOptions';
import { IoK8sApiPolicyV1beta1HostPortRange } from './ioK8sApiPolicyV1beta1HostPortRange';
import { IoK8sApiPolicyV1beta1IDRange } from './ioK8sApiPolicyV1beta1IDRange';
import { IoK8sApiPolicyV1beta1PodDisruptionBudget } from './ioK8sApiPolicyV1beta1PodDisruptionBudget';
import { IoK8sApiPolicyV1beta1PodDisruptionBudgetList } from './ioK8sApiPolicyV1beta1PodDisruptionBudgetList';
import { IoK8sApiPolicyV1beta1PodDisruptionBudgetSpec } from './ioK8sApiPolicyV1beta1PodDisruptionBudgetSpec';
import { IoK8sApiPolicyV1beta1PodDisruptionBudgetStatus } from './ioK8sApiPolicyV1beta1PodDisruptionBudgetStatus';
import { IoK8sApiPolicyV1beta1PodSecurityPolicy } from './ioK8sApiPolicyV1beta1PodSecurityPolicy';
import { IoK8sApiPolicyV1beta1PodSecurityPolicyList } from './ioK8sApiPolicyV1beta1PodSecurityPolicyList';
import { IoK8sApiPolicyV1beta1PodSecurityPolicySpec } from './ioK8sApiPolicyV1beta1PodSecurityPolicySpec';
import { IoK8sApiPolicyV1beta1RunAsGroupStrategyOptions } from './ioK8sApiPolicyV1beta1RunAsGroupStrategyOptions';
import { IoK8sApiPolicyV1beta1RunAsUserStrategyOptions } from './ioK8sApiPolicyV1beta1RunAsUserStrategyOptions';
import { IoK8sApiPolicyV1beta1RuntimeClassStrategyOptions } from './ioK8sApiPolicyV1beta1RuntimeClassStrategyOptions';
import { IoK8sApiPolicyV1beta1SELinuxStrategyOptions } from './ioK8sApiPolicyV1beta1SELinuxStrategyOptions';
import { IoK8sApiPolicyV1beta1SupplementalGroupsStrategyOptions } from './ioK8sApiPolicyV1beta1SupplementalGroupsStrategyOptions';
import { IoK8sApiRbacV1AggregationRule } from './ioK8sApiRbacV1AggregationRule';
import { IoK8sApiRbacV1ClusterRole } from './ioK8sApiRbacV1ClusterRole';
import { IoK8sApiRbacV1ClusterRoleBinding } from './ioK8sApiRbacV1ClusterRoleBinding';
import { IoK8sApiRbacV1ClusterRoleBindingList } from './ioK8sApiRbacV1ClusterRoleBindingList';
import { IoK8sApiRbacV1ClusterRoleList } from './ioK8sApiRbacV1ClusterRoleList';
import { IoK8sApiRbacV1PolicyRule } from './ioK8sApiRbacV1PolicyRule';
import { IoK8sApiRbacV1Role } from './ioK8sApiRbacV1Role';
import { IoK8sApiRbacV1RoleBinding } from './ioK8sApiRbacV1RoleBinding';
import { IoK8sApiRbacV1RoleBindingList } from './ioK8sApiRbacV1RoleBindingList';
import { IoK8sApiRbacV1RoleList } from './ioK8sApiRbacV1RoleList';
import { IoK8sApiRbacV1RoleRef } from './ioK8sApiRbacV1RoleRef';
import { IoK8sApiRbacV1Subject } from './ioK8sApiRbacV1Subject';
import { IoK8sApiSchedulingV1PriorityClass } from './ioK8sApiSchedulingV1PriorityClass';
import { IoK8sApiSchedulingV1PriorityClassList } from './ioK8sApiSchedulingV1PriorityClassList';
import { IoK8sApiStorageV1CSIDriver } from './ioK8sApiStorageV1CSIDriver';
import { IoK8sApiStorageV1CSIDriverList } from './ioK8sApiStorageV1CSIDriverList';
import { IoK8sApiStorageV1CSIDriverSpec } from './ioK8sApiStorageV1CSIDriverSpec';
import { IoK8sApiStorageV1CSINode } from './ioK8sApiStorageV1CSINode';
import { IoK8sApiStorageV1CSINodeDriver } from './ioK8sApiStorageV1CSINodeDriver';
import { IoK8sApiStorageV1CSINodeList } from './ioK8sApiStorageV1CSINodeList';
import { IoK8sApiStorageV1CSINodeSpec } from './ioK8sApiStorageV1CSINodeSpec';
import { IoK8sApiStorageV1StorageClass } from './ioK8sApiStorageV1StorageClass';
import { IoK8sApiStorageV1StorageClassList } from './ioK8sApiStorageV1StorageClassList';
import { IoK8sApiStorageV1TokenRequest } from './ioK8sApiStorageV1TokenRequest';
import { IoK8sApiStorageV1VolumeAttachment } from './ioK8sApiStorageV1VolumeAttachment';
import { IoK8sApiStorageV1VolumeAttachmentList } from './ioK8sApiStorageV1VolumeAttachmentList';
import { IoK8sApiStorageV1VolumeAttachmentSource } from './ioK8sApiStorageV1VolumeAttachmentSource';
import { IoK8sApiStorageV1VolumeAttachmentSpec } from './ioK8sApiStorageV1VolumeAttachmentSpec';
import { IoK8sApiStorageV1VolumeAttachmentStatus } from './ioK8sApiStorageV1VolumeAttachmentStatus';
import { IoK8sApiStorageV1VolumeError } from './ioK8sApiStorageV1VolumeError';
import { IoK8sApiStorageV1VolumeNodeResources } from './ioK8sApiStorageV1VolumeNodeResources';
import { IoK8sApiStorageV1beta1CSIStorageCapacity } from './ioK8sApiStorageV1beta1CSIStorageCapacity';
import { IoK8sApiStorageV1beta1CSIStorageCapacityList } from './ioK8sApiStorageV1beta1CSIStorageCapacityList';
import { IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceColumnDefinition } from './ioK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceColumnDefinition';
import { IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceConversion } from './ioK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceConversion';
import { IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinition } from './ioK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinition';
import { IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionCondition } from './ioK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionCondition';
import { IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionList } from './ioK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionList';
import { IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionNames } from './ioK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionNames';
import { IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionSpec } from './ioK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionSpec';
import { IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionStatus } from './ioK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionStatus';
import { IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionVersion } from './ioK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionVersion';
import { IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresourceScale } from './ioK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresourceScale';
import { IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresources } from './ioK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresources';
import { IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceValidation } from './ioK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceValidation';
import { IoK8sApiextensionsApiserverPkgApisApiextensionsV1ExternalDocumentation } from './ioK8sApiextensionsApiserverPkgApisApiextensionsV1ExternalDocumentation';
import { IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaProps } from './ioK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaProps';
import { IoK8sApiextensionsApiserverPkgApisApiextensionsV1ServiceReference } from './ioK8sApiextensionsApiserverPkgApisApiextensionsV1ServiceReference';
import { IoK8sApiextensionsApiserverPkgApisApiextensionsV1ValidationRule } from './ioK8sApiextensionsApiserverPkgApisApiextensionsV1ValidationRule';
import { IoK8sApiextensionsApiserverPkgApisApiextensionsV1WebhookClientConfig } from './ioK8sApiextensionsApiserverPkgApisApiextensionsV1WebhookClientConfig';
import { IoK8sApiextensionsApiserverPkgApisApiextensionsV1WebhookConversion } from './ioK8sApiextensionsApiserverPkgApisApiextensionsV1WebhookConversion';
import { IoK8sApimachineryPkgApisMetaV1APIGroup } from './ioK8sApimachineryPkgApisMetaV1APIGroup';
import { IoK8sApimachineryPkgApisMetaV1APIGroupList } from './ioK8sApimachineryPkgApisMetaV1APIGroupList';
import { IoK8sApimachineryPkgApisMetaV1APIResource } from './ioK8sApimachineryPkgApisMetaV1APIResource';
import { IoK8sApimachineryPkgApisMetaV1APIResourceList } from './ioK8sApimachineryPkgApisMetaV1APIResourceList';
import { IoK8sApimachineryPkgApisMetaV1APIVersions } from './ioK8sApimachineryPkgApisMetaV1APIVersions';
import { IoK8sApimachineryPkgApisMetaV1Condition } from './ioK8sApimachineryPkgApisMetaV1Condition';
import { IoK8sApimachineryPkgApisMetaV1DeleteOptions } from './ioK8sApimachineryPkgApisMetaV1DeleteOptions';
import { IoK8sApimachineryPkgApisMetaV1DeleteOptionsV2 } from './ioK8sApimachineryPkgApisMetaV1DeleteOptionsV2';
import { IoK8sApimachineryPkgApisMetaV1GroupVersionForDiscovery } from './ioK8sApimachineryPkgApisMetaV1GroupVersionForDiscovery';
import { IoK8sApimachineryPkgApisMetaV1LabelSelector } from './ioK8sApimachineryPkgApisMetaV1LabelSelector';
import { IoK8sApimachineryPkgApisMetaV1LabelSelectorRequirement } from './ioK8sApimachineryPkgApisMetaV1LabelSelectorRequirement';
import { IoK8sApimachineryPkgApisMetaV1ListMeta } from './ioK8sApimachineryPkgApisMetaV1ListMeta';
import { IoK8sApimachineryPkgApisMetaV1ManagedFieldsEntry } from './ioK8sApimachineryPkgApisMetaV1ManagedFieldsEntry';
import { IoK8sApimachineryPkgApisMetaV1ObjectMeta } from './ioK8sApimachineryPkgApisMetaV1ObjectMeta';
import { IoK8sApimachineryPkgApisMetaV1ObjectMetaV2 } from './ioK8sApimachineryPkgApisMetaV1ObjectMetaV2';
import { IoK8sApimachineryPkgApisMetaV1OwnerReference } from './ioK8sApimachineryPkgApisMetaV1OwnerReference';
import { IoK8sApimachineryPkgApisMetaV1OwnerReferenceV2 } from './ioK8sApimachineryPkgApisMetaV1OwnerReferenceV2';
import { IoK8sApimachineryPkgApisMetaV1Preconditions } from './ioK8sApimachineryPkgApisMetaV1Preconditions';
import { IoK8sApimachineryPkgApisMetaV1ServerAddressByClientCIDR } from './ioK8sApimachineryPkgApisMetaV1ServerAddressByClientCIDR';
import { IoK8sApimachineryPkgApisMetaV1Status } from './ioK8sApimachineryPkgApisMetaV1Status';
import { IoK8sApimachineryPkgApisMetaV1StatusCause } from './ioK8sApimachineryPkgApisMetaV1StatusCause';
import { IoK8sApimachineryPkgApisMetaV1StatusDetails } from './ioK8sApimachineryPkgApisMetaV1StatusDetails';
import { IoK8sApimachineryPkgApisMetaV1StatusDetailsV2 } from './ioK8sApimachineryPkgApisMetaV1StatusDetailsV2';
import { IoK8sApimachineryPkgApisMetaV1StatusV2 } from './ioK8sApimachineryPkgApisMetaV1StatusV2';
import { IoK8sApimachineryPkgApisMetaV1WatchEvent } from './ioK8sApimachineryPkgApisMetaV1WatchEvent';
import { IoK8sApimachineryPkgVersionInfo } from './ioK8sApimachineryPkgVersionInfo';
import { IoK8sKubeAggregatorPkgApisApiregistrationV1APIService } from './ioK8sKubeAggregatorPkgApisApiregistrationV1APIService';
import { IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceCondition } from './ioK8sKubeAggregatorPkgApisApiregistrationV1APIServiceCondition';
import { IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceList } from './ioK8sKubeAggregatorPkgApisApiregistrationV1APIServiceList';
import { IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceSpec } from './ioK8sKubeAggregatorPkgApisApiregistrationV1APIServiceSpec';
import { IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceStatus } from './ioK8sKubeAggregatorPkgApisApiregistrationV1APIServiceStatus';
import { IoK8sKubeAggregatorPkgApisApiregistrationV1ServiceReference } from './ioK8sKubeAggregatorPkgApisApiregistrationV1ServiceReference';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
        "IoCertManagerAcmeV1ChallengeSpec.TypeEnum": IoCertManagerAcmeV1ChallengeSpec.TypeEnum,
        "IoCertManagerAcmeV1ChallengeSpecSolverDns01.CnameStrategyEnum": IoCertManagerAcmeV1ChallengeSpecSolverDns01.CnameStrategyEnum,
        "IoCertManagerAcmeV1ChallengeSpecSolverDns01AzureDNS.EnvironmentEnum": IoCertManagerAcmeV1ChallengeSpecSolverDns01AzureDNS.EnvironmentEnum,
        "IoCertManagerAcmeV1ChallengeStatus.StateEnum": IoCertManagerAcmeV1ChallengeStatus.StateEnum,
        "IoCertManagerAcmeV1OrderStatus.StateEnum": IoCertManagerAcmeV1OrderStatus.StateEnum,
        "IoCertManagerAcmeV1OrderStatusAuthorizationsInner.InitialStateEnum": IoCertManagerAcmeV1OrderStatusAuthorizationsInner.InitialStateEnum,
        "IoCertManagerV1CertificateRequestSpec.UsagesEnum": IoCertManagerV1CertificateRequestSpec.UsagesEnum,
        "IoCertManagerV1CertificateRequestStatusConditionsInner.StatusEnum": IoCertManagerV1CertificateRequestStatusConditionsInner.StatusEnum,
        "IoCertManagerV1CertificateSpec.UsagesEnum": IoCertManagerV1CertificateSpec.UsagesEnum,
        "IoCertManagerV1CertificateSpecAdditionalOutputFormatsInner.TypeEnum": IoCertManagerV1CertificateSpecAdditionalOutputFormatsInner.TypeEnum,
        "IoCertManagerV1CertificateSpecPrivateKey.AlgorithmEnum": IoCertManagerV1CertificateSpecPrivateKey.AlgorithmEnum,
        "IoCertManagerV1CertificateSpecPrivateKey.EncodingEnum": IoCertManagerV1CertificateSpecPrivateKey.EncodingEnum,
        "IoCertManagerV1CertificateSpecPrivateKey.RotationPolicyEnum": IoCertManagerV1CertificateSpecPrivateKey.RotationPolicyEnum,
        "IoCertManagerV1CertificateStatusConditionsInner.StatusEnum": IoCertManagerV1CertificateStatusConditionsInner.StatusEnum,
        "IoCertManagerV1ClusterIssuerSpecAcmeExternalAccountBinding.KeyAlgorithmEnum": IoCertManagerV1ClusterIssuerSpecAcmeExternalAccountBinding.KeyAlgorithmEnum,
        "IoCertManagerV1ClusterIssuerStatusConditionsInner.StatusEnum": IoCertManagerV1ClusterIssuerStatusConditionsInner.StatusEnum,
        "IoClastixKamajiV1alpha1DataStoreSpec.DriverEnum": IoClastixKamajiV1alpha1DataStoreSpec.DriverEnum,
        "IoClastixKamajiV1alpha1TenantControlPlaneSpecControlPlaneService.ServiceTypeEnum": IoClastixKamajiV1alpha1TenantControlPlaneSpecControlPlaneService.ServiceTypeEnum,
        "IoClastixKamajiV1alpha1TenantControlPlaneSpecKubernetes.AdmissionControllersEnum": IoClastixKamajiV1alpha1TenantControlPlaneSpecKubernetes.AdmissionControllersEnum,
        "IoClastixKamajiV1alpha1TenantControlPlaneSpecKubernetesKubelet.CgroupfsEnum": IoClastixKamajiV1alpha1TenantControlPlaneSpecKubernetesKubelet.CgroupfsEnum,
        "IoClastixKamajiV1alpha1TenantControlPlaneStatusAddonsKonnectivityServiceConditionsInner.StatusEnum": IoClastixKamajiV1alpha1TenantControlPlaneStatusAddonsKonnectivityServiceConditionsInner.StatusEnum,
        "IoClastixKamajiV1alpha1TenantControlPlaneStatusKubernetesResourcesVersion.StatusEnum": IoClastixKamajiV1alpha1TenantControlPlaneStatusKubernetesResourcesVersion.StatusEnum,
}

let typeMap: {[index: string]: any} = {
    "IoCertManagerAcmeV1Challenge": IoCertManagerAcmeV1Challenge,
    "IoCertManagerAcmeV1ChallengeList": IoCertManagerAcmeV1ChallengeList,
    "IoCertManagerAcmeV1ChallengeSpec": IoCertManagerAcmeV1ChallengeSpec,
    "IoCertManagerAcmeV1ChallengeSpecIssuerRef": IoCertManagerAcmeV1ChallengeSpecIssuerRef,
    "IoCertManagerAcmeV1ChallengeSpecSolver": IoCertManagerAcmeV1ChallengeSpecSolver,
    "IoCertManagerAcmeV1ChallengeSpecSolverDns01": IoCertManagerAcmeV1ChallengeSpecSolverDns01,
    "IoCertManagerAcmeV1ChallengeSpecSolverDns01AcmeDNS": IoCertManagerAcmeV1ChallengeSpecSolverDns01AcmeDNS,
    "IoCertManagerAcmeV1ChallengeSpecSolverDns01AcmeDNSAccountSecretRef": IoCertManagerAcmeV1ChallengeSpecSolverDns01AcmeDNSAccountSecretRef,
    "IoCertManagerAcmeV1ChallengeSpecSolverDns01Akamai": IoCertManagerAcmeV1ChallengeSpecSolverDns01Akamai,
    "IoCertManagerAcmeV1ChallengeSpecSolverDns01AzureDNS": IoCertManagerAcmeV1ChallengeSpecSolverDns01AzureDNS,
    "IoCertManagerAcmeV1ChallengeSpecSolverDns01AzureDNSClientSecretSecretRef": IoCertManagerAcmeV1ChallengeSpecSolverDns01AzureDNSClientSecretSecretRef,
    "IoCertManagerAcmeV1ChallengeSpecSolverDns01AzureDNSManagedIdentity": IoCertManagerAcmeV1ChallengeSpecSolverDns01AzureDNSManagedIdentity,
    "IoCertManagerAcmeV1ChallengeSpecSolverDns01CloudDNS": IoCertManagerAcmeV1ChallengeSpecSolverDns01CloudDNS,
    "IoCertManagerAcmeV1ChallengeSpecSolverDns01Cloudflare": IoCertManagerAcmeV1ChallengeSpecSolverDns01Cloudflare,
    "IoCertManagerAcmeV1ChallengeSpecSolverDns01CloudflareApiKeySecretRef": IoCertManagerAcmeV1ChallengeSpecSolverDns01CloudflareApiKeySecretRef,
    "IoCertManagerAcmeV1ChallengeSpecSolverDns01CloudflareApiTokenSecretRef": IoCertManagerAcmeV1ChallengeSpecSolverDns01CloudflareApiTokenSecretRef,
    "IoCertManagerAcmeV1ChallengeSpecSolverDns01Digitalocean": IoCertManagerAcmeV1ChallengeSpecSolverDns01Digitalocean,
    "IoCertManagerAcmeV1ChallengeSpecSolverDns01Rfc2136": IoCertManagerAcmeV1ChallengeSpecSolverDns01Rfc2136,
    "IoCertManagerAcmeV1ChallengeSpecSolverDns01Rfc2136TsigSecretSecretRef": IoCertManagerAcmeV1ChallengeSpecSolverDns01Rfc2136TsigSecretSecretRef,
    "IoCertManagerAcmeV1ChallengeSpecSolverDns01Route53": IoCertManagerAcmeV1ChallengeSpecSolverDns01Route53,
    "IoCertManagerAcmeV1ChallengeSpecSolverDns01Route53AccessKeyIDSecretRef": IoCertManagerAcmeV1ChallengeSpecSolverDns01Route53AccessKeyIDSecretRef,
    "IoCertManagerAcmeV1ChallengeSpecSolverDns01Route53SecretAccessKeySecretRef": IoCertManagerAcmeV1ChallengeSpecSolverDns01Route53SecretAccessKeySecretRef,
    "IoCertManagerAcmeV1ChallengeSpecSolverDns01Webhook": IoCertManagerAcmeV1ChallengeSpecSolverDns01Webhook,
    "IoCertManagerAcmeV1ChallengeSpecSolverHttp01": IoCertManagerAcmeV1ChallengeSpecSolverHttp01,
    "IoCertManagerAcmeV1ChallengeSpecSolverHttp01GatewayHTTPRoute": IoCertManagerAcmeV1ChallengeSpecSolverHttp01GatewayHTTPRoute,
    "IoCertManagerAcmeV1ChallengeSpecSolverHttp01GatewayHTTPRouteParentRefsInner": IoCertManagerAcmeV1ChallengeSpecSolverHttp01GatewayHTTPRouteParentRefsInner,
    "IoCertManagerAcmeV1ChallengeSpecSolverHttp01Ingress": IoCertManagerAcmeV1ChallengeSpecSolverHttp01Ingress,
    "IoCertManagerAcmeV1ChallengeSpecSolverHttp01IngressIngressTemplate": IoCertManagerAcmeV1ChallengeSpecSolverHttp01IngressIngressTemplate,
    "IoCertManagerAcmeV1ChallengeSpecSolverHttp01IngressIngressTemplateMetadata": IoCertManagerAcmeV1ChallengeSpecSolverHttp01IngressIngressTemplateMetadata,
    "IoCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplate": IoCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplate,
    "IoCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplateMetadata": IoCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplateMetadata,
    "IoCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplateSpec": IoCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplateSpec,
    "IoCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinity": IoCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinity,
    "IoCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityNodeAffinity": IoCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityNodeAffinity,
    "IoCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionInner": IoCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionInner,
    "IoCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionInnerPreference": IoCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionInnerPreference,
    "IoCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionInnerPreferenceMatchExpressionsInner": IoCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionInnerPreferenceMatchExpressionsInner,
    "IoCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution": IoCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution,
    "IoCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsInner": IoCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsInner,
    "IoCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAffinity": IoCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAffinity,
    "IoCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionInner": IoCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionInner,
    "IoCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionInnerPodAffinityTerm": IoCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionInnerPodAffinityTerm,
    "IoCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionInnerPodAffinityTermLabelSelector": IoCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionInnerPodAffinityTermLabelSelector,
    "IoCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionInnerPodAffinityTermLabelSelectorMatchExpressionsInner": IoCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionInnerPodAffinityTermLabelSelectorMatchExpressionsInner,
    "IoCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionInnerPodAffinityTermNamespaceSelector": IoCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionInnerPodAffinityTermNamespaceSelector,
    "IoCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionInner": IoCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionInner,
    "IoCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAntiAffinity": IoCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAntiAffinity,
    "IoCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplateSpecTolerationsInner": IoCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplateSpecTolerationsInner,
    "IoCertManagerAcmeV1ChallengeSpecSolverSelector": IoCertManagerAcmeV1ChallengeSpecSolverSelector,
    "IoCertManagerAcmeV1ChallengeStatus": IoCertManagerAcmeV1ChallengeStatus,
    "IoCertManagerAcmeV1Order": IoCertManagerAcmeV1Order,
    "IoCertManagerAcmeV1OrderList": IoCertManagerAcmeV1OrderList,
    "IoCertManagerAcmeV1OrderSpec": IoCertManagerAcmeV1OrderSpec,
    "IoCertManagerAcmeV1OrderSpecIssuerRef": IoCertManagerAcmeV1OrderSpecIssuerRef,
    "IoCertManagerAcmeV1OrderStatus": IoCertManagerAcmeV1OrderStatus,
    "IoCertManagerAcmeV1OrderStatusAuthorizationsInner": IoCertManagerAcmeV1OrderStatusAuthorizationsInner,
    "IoCertManagerAcmeV1OrderStatusAuthorizationsInnerChallengesInner": IoCertManagerAcmeV1OrderStatusAuthorizationsInnerChallengesInner,
    "IoCertManagerV1Certificate": IoCertManagerV1Certificate,
    "IoCertManagerV1CertificateList": IoCertManagerV1CertificateList,
    "IoCertManagerV1CertificateRequest": IoCertManagerV1CertificateRequest,
    "IoCertManagerV1CertificateRequestList": IoCertManagerV1CertificateRequestList,
    "IoCertManagerV1CertificateRequestSpec": IoCertManagerV1CertificateRequestSpec,
    "IoCertManagerV1CertificateRequestSpecIssuerRef": IoCertManagerV1CertificateRequestSpecIssuerRef,
    "IoCertManagerV1CertificateRequestStatus": IoCertManagerV1CertificateRequestStatus,
    "IoCertManagerV1CertificateRequestStatusConditionsInner": IoCertManagerV1CertificateRequestStatusConditionsInner,
    "IoCertManagerV1CertificateSpec": IoCertManagerV1CertificateSpec,
    "IoCertManagerV1CertificateSpecAdditionalOutputFormatsInner": IoCertManagerV1CertificateSpecAdditionalOutputFormatsInner,
    "IoCertManagerV1CertificateSpecIssuerRef": IoCertManagerV1CertificateSpecIssuerRef,
    "IoCertManagerV1CertificateSpecKeystores": IoCertManagerV1CertificateSpecKeystores,
    "IoCertManagerV1CertificateSpecKeystoresJks": IoCertManagerV1CertificateSpecKeystoresJks,
    "IoCertManagerV1CertificateSpecKeystoresJksPasswordSecretRef": IoCertManagerV1CertificateSpecKeystoresJksPasswordSecretRef,
    "IoCertManagerV1CertificateSpecKeystoresPkcs12": IoCertManagerV1CertificateSpecKeystoresPkcs12,
    "IoCertManagerV1CertificateSpecKeystoresPkcs12PasswordSecretRef": IoCertManagerV1CertificateSpecKeystoresPkcs12PasswordSecretRef,
    "IoCertManagerV1CertificateSpecPrivateKey": IoCertManagerV1CertificateSpecPrivateKey,
    "IoCertManagerV1CertificateSpecSecretTemplate": IoCertManagerV1CertificateSpecSecretTemplate,
    "IoCertManagerV1CertificateSpecSubject": IoCertManagerV1CertificateSpecSubject,
    "IoCertManagerV1CertificateStatus": IoCertManagerV1CertificateStatus,
    "IoCertManagerV1CertificateStatusConditionsInner": IoCertManagerV1CertificateStatusConditionsInner,
    "IoCertManagerV1ClusterIssuer": IoCertManagerV1ClusterIssuer,
    "IoCertManagerV1ClusterIssuerList": IoCertManagerV1ClusterIssuerList,
    "IoCertManagerV1ClusterIssuerSpec": IoCertManagerV1ClusterIssuerSpec,
    "IoCertManagerV1ClusterIssuerSpecAcme": IoCertManagerV1ClusterIssuerSpecAcme,
    "IoCertManagerV1ClusterIssuerSpecAcmeExternalAccountBinding": IoCertManagerV1ClusterIssuerSpecAcmeExternalAccountBinding,
    "IoCertManagerV1ClusterIssuerSpecAcmeExternalAccountBindingKeySecretRef": IoCertManagerV1ClusterIssuerSpecAcmeExternalAccountBindingKeySecretRef,
    "IoCertManagerV1ClusterIssuerSpecAcmePrivateKeySecretRef": IoCertManagerV1ClusterIssuerSpecAcmePrivateKeySecretRef,
    "IoCertManagerV1ClusterIssuerSpecAcmeSolversInner": IoCertManagerV1ClusterIssuerSpecAcmeSolversInner,
    "IoCertManagerV1ClusterIssuerSpecCa": IoCertManagerV1ClusterIssuerSpecCa,
    "IoCertManagerV1ClusterIssuerSpecSelfSigned": IoCertManagerV1ClusterIssuerSpecSelfSigned,
    "IoCertManagerV1ClusterIssuerSpecVault": IoCertManagerV1ClusterIssuerSpecVault,
    "IoCertManagerV1ClusterIssuerSpecVaultAuth": IoCertManagerV1ClusterIssuerSpecVaultAuth,
    "IoCertManagerV1ClusterIssuerSpecVaultAuthAppRole": IoCertManagerV1ClusterIssuerSpecVaultAuthAppRole,
    "IoCertManagerV1ClusterIssuerSpecVaultAuthAppRoleSecretRef": IoCertManagerV1ClusterIssuerSpecVaultAuthAppRoleSecretRef,
    "IoCertManagerV1ClusterIssuerSpecVaultAuthKubernetes": IoCertManagerV1ClusterIssuerSpecVaultAuthKubernetes,
    "IoCertManagerV1ClusterIssuerSpecVaultAuthKubernetesSecretRef": IoCertManagerV1ClusterIssuerSpecVaultAuthKubernetesSecretRef,
    "IoCertManagerV1ClusterIssuerSpecVaultAuthTokenSecretRef": IoCertManagerV1ClusterIssuerSpecVaultAuthTokenSecretRef,
    "IoCertManagerV1ClusterIssuerSpecVaultCaBundleSecretRef": IoCertManagerV1ClusterIssuerSpecVaultCaBundleSecretRef,
    "IoCertManagerV1ClusterIssuerSpecVenafi": IoCertManagerV1ClusterIssuerSpecVenafi,
    "IoCertManagerV1ClusterIssuerSpecVenafiCloud": IoCertManagerV1ClusterIssuerSpecVenafiCloud,
    "IoCertManagerV1ClusterIssuerSpecVenafiCloudApiTokenSecretRef": IoCertManagerV1ClusterIssuerSpecVenafiCloudApiTokenSecretRef,
    "IoCertManagerV1ClusterIssuerSpecVenafiTpp": IoCertManagerV1ClusterIssuerSpecVenafiTpp,
    "IoCertManagerV1ClusterIssuerSpecVenafiTppCredentialsRef": IoCertManagerV1ClusterIssuerSpecVenafiTppCredentialsRef,
    "IoCertManagerV1ClusterIssuerStatus": IoCertManagerV1ClusterIssuerStatus,
    "IoCertManagerV1ClusterIssuerStatusAcme": IoCertManagerV1ClusterIssuerStatusAcme,
    "IoCertManagerV1ClusterIssuerStatusConditionsInner": IoCertManagerV1ClusterIssuerStatusConditionsInner,
    "IoCertManagerV1Issuer": IoCertManagerV1Issuer,
    "IoCertManagerV1IssuerList": IoCertManagerV1IssuerList,
    "IoCertManagerV1IssuerSpec": IoCertManagerV1IssuerSpec,
    "IoCertManagerV1IssuerStatus": IoCertManagerV1IssuerStatus,
    "IoClastixKamajiV1alpha1DataStore": IoClastixKamajiV1alpha1DataStore,
    "IoClastixKamajiV1alpha1DataStoreList": IoClastixKamajiV1alpha1DataStoreList,
    "IoClastixKamajiV1alpha1DataStoreSpec": IoClastixKamajiV1alpha1DataStoreSpec,
    "IoClastixKamajiV1alpha1DataStoreSpecBasicAuth": IoClastixKamajiV1alpha1DataStoreSpecBasicAuth,
    "IoClastixKamajiV1alpha1DataStoreSpecBasicAuthPassword": IoClastixKamajiV1alpha1DataStoreSpecBasicAuthPassword,
    "IoClastixKamajiV1alpha1DataStoreSpecBasicAuthPasswordSecretReference": IoClastixKamajiV1alpha1DataStoreSpecBasicAuthPasswordSecretReference,
    "IoClastixKamajiV1alpha1DataStoreSpecTlsConfig": IoClastixKamajiV1alpha1DataStoreSpecTlsConfig,
    "IoClastixKamajiV1alpha1DataStoreSpecTlsConfigCertificateAuthority": IoClastixKamajiV1alpha1DataStoreSpecTlsConfigCertificateAuthority,
    "IoClastixKamajiV1alpha1DataStoreSpecTlsConfigClientCertificate": IoClastixKamajiV1alpha1DataStoreSpecTlsConfigClientCertificate,
    "IoClastixKamajiV1alpha1DataStoreStatus": IoClastixKamajiV1alpha1DataStoreStatus,
    "IoClastixKamajiV1alpha1TenantControlPlane": IoClastixKamajiV1alpha1TenantControlPlane,
    "IoClastixKamajiV1alpha1TenantControlPlaneList": IoClastixKamajiV1alpha1TenantControlPlaneList,
    "IoClastixKamajiV1alpha1TenantControlPlaneSpec": IoClastixKamajiV1alpha1TenantControlPlaneSpec,
    "IoClastixKamajiV1alpha1TenantControlPlaneSpecAddons": IoClastixKamajiV1alpha1TenantControlPlaneSpecAddons,
    "IoClastixKamajiV1alpha1TenantControlPlaneSpecAddonsCoreDNS": IoClastixKamajiV1alpha1TenantControlPlaneSpecAddonsCoreDNS,
    "IoClastixKamajiV1alpha1TenantControlPlaneSpecAddonsKonnectivity": IoClastixKamajiV1alpha1TenantControlPlaneSpecAddonsKonnectivity,
    "IoClastixKamajiV1alpha1TenantControlPlaneSpecAddonsKonnectivityAgent": IoClastixKamajiV1alpha1TenantControlPlaneSpecAddonsKonnectivityAgent,
    "IoClastixKamajiV1alpha1TenantControlPlaneSpecAddonsKonnectivityServer": IoClastixKamajiV1alpha1TenantControlPlaneSpecAddonsKonnectivityServer,
    "IoClastixKamajiV1alpha1TenantControlPlaneSpecAddonsKonnectivityServerResources": IoClastixKamajiV1alpha1TenantControlPlaneSpecAddonsKonnectivityServerResources,
    "IoClastixKamajiV1alpha1TenantControlPlaneSpecAddonsKubeProxy": IoClastixKamajiV1alpha1TenantControlPlaneSpecAddonsKubeProxy,
    "IoClastixKamajiV1alpha1TenantControlPlaneSpecControlPlane": IoClastixKamajiV1alpha1TenantControlPlaneSpecControlPlane,
    "IoClastixKamajiV1alpha1TenantControlPlaneSpecControlPlaneDeployment": IoClastixKamajiV1alpha1TenantControlPlaneSpecControlPlaneDeployment,
    "IoClastixKamajiV1alpha1TenantControlPlaneSpecControlPlaneDeploymentAdditionalMetadata": IoClastixKamajiV1alpha1TenantControlPlaneSpecControlPlaneDeploymentAdditionalMetadata,
    "IoClastixKamajiV1alpha1TenantControlPlaneSpecControlPlaneDeploymentAffinity": IoClastixKamajiV1alpha1TenantControlPlaneSpecControlPlaneDeploymentAffinity,
    "IoClastixKamajiV1alpha1TenantControlPlaneSpecControlPlaneDeploymentExtraArgs": IoClastixKamajiV1alpha1TenantControlPlaneSpecControlPlaneDeploymentExtraArgs,
    "IoClastixKamajiV1alpha1TenantControlPlaneSpecControlPlaneDeploymentResources": IoClastixKamajiV1alpha1TenantControlPlaneSpecControlPlaneDeploymentResources,
    "IoClastixKamajiV1alpha1TenantControlPlaneSpecControlPlaneDeploymentResourcesApiServer": IoClastixKamajiV1alpha1TenantControlPlaneSpecControlPlaneDeploymentResourcesApiServer,
    "IoClastixKamajiV1alpha1TenantControlPlaneSpecControlPlaneDeploymentTopologySpreadConstraintsInner": IoClastixKamajiV1alpha1TenantControlPlaneSpecControlPlaneDeploymentTopologySpreadConstraintsInner,
    "IoClastixKamajiV1alpha1TenantControlPlaneSpecControlPlaneDeploymentTopologySpreadConstraintsInnerLabelSelector": IoClastixKamajiV1alpha1TenantControlPlaneSpecControlPlaneDeploymentTopologySpreadConstraintsInnerLabelSelector,
    "IoClastixKamajiV1alpha1TenantControlPlaneSpecControlPlaneIngress": IoClastixKamajiV1alpha1TenantControlPlaneSpecControlPlaneIngress,
    "IoClastixKamajiV1alpha1TenantControlPlaneSpecControlPlaneService": IoClastixKamajiV1alpha1TenantControlPlaneSpecControlPlaneService,
    "IoClastixKamajiV1alpha1TenantControlPlaneSpecKubernetes": IoClastixKamajiV1alpha1TenantControlPlaneSpecKubernetes,
    "IoClastixKamajiV1alpha1TenantControlPlaneSpecKubernetesKubelet": IoClastixKamajiV1alpha1TenantControlPlaneSpecKubernetesKubelet,
    "IoClastixKamajiV1alpha1TenantControlPlaneSpecNetworkProfile": IoClastixKamajiV1alpha1TenantControlPlaneSpecNetworkProfile,
    "IoClastixKamajiV1alpha1TenantControlPlaneStatus": IoClastixKamajiV1alpha1TenantControlPlaneStatus,
    "IoClastixKamajiV1alpha1TenantControlPlaneStatusAddons": IoClastixKamajiV1alpha1TenantControlPlaneStatusAddons,
    "IoClastixKamajiV1alpha1TenantControlPlaneStatusAddonsCoreDNS": IoClastixKamajiV1alpha1TenantControlPlaneStatusAddonsCoreDNS,
    "IoClastixKamajiV1alpha1TenantControlPlaneStatusAddonsKonnectivity": IoClastixKamajiV1alpha1TenantControlPlaneStatusAddonsKonnectivity,
    "IoClastixKamajiV1alpha1TenantControlPlaneStatusAddonsKonnectivityAgent": IoClastixKamajiV1alpha1TenantControlPlaneStatusAddonsKonnectivityAgent,
    "IoClastixKamajiV1alpha1TenantControlPlaneStatusAddonsKonnectivityCertificate": IoClastixKamajiV1alpha1TenantControlPlaneStatusAddonsKonnectivityCertificate,
    "IoClastixKamajiV1alpha1TenantControlPlaneStatusAddonsKonnectivityConfigMap": IoClastixKamajiV1alpha1TenantControlPlaneStatusAddonsKonnectivityConfigMap,
    "IoClastixKamajiV1alpha1TenantControlPlaneStatusAddonsKonnectivityKubeconfig": IoClastixKamajiV1alpha1TenantControlPlaneStatusAddonsKonnectivityKubeconfig,
    "IoClastixKamajiV1alpha1TenantControlPlaneStatusAddonsKonnectivityService": IoClastixKamajiV1alpha1TenantControlPlaneStatusAddonsKonnectivityService,
    "IoClastixKamajiV1alpha1TenantControlPlaneStatusAddonsKonnectivityServiceConditionsInner": IoClastixKamajiV1alpha1TenantControlPlaneStatusAddonsKonnectivityServiceConditionsInner,
    "IoClastixKamajiV1alpha1TenantControlPlaneStatusAddonsKonnectivityServiceLoadBalancer": IoClastixKamajiV1alpha1TenantControlPlaneStatusAddonsKonnectivityServiceLoadBalancer,
    "IoClastixKamajiV1alpha1TenantControlPlaneStatusAddonsKonnectivityServiceLoadBalancerIngressInner": IoClastixKamajiV1alpha1TenantControlPlaneStatusAddonsKonnectivityServiceLoadBalancerIngressInner,
    "IoClastixKamajiV1alpha1TenantControlPlaneStatusAddonsKonnectivityServiceLoadBalancerIngressInnerPortsInner": IoClastixKamajiV1alpha1TenantControlPlaneStatusAddonsKonnectivityServiceLoadBalancerIngressInnerPortsInner,
    "IoClastixKamajiV1alpha1TenantControlPlaneStatusCertificates": IoClastixKamajiV1alpha1TenantControlPlaneStatusCertificates,
    "IoClastixKamajiV1alpha1TenantControlPlaneStatusCertificatesEtcd": IoClastixKamajiV1alpha1TenantControlPlaneStatusCertificatesEtcd,
    "IoClastixKamajiV1alpha1TenantControlPlaneStatusCertificatesEtcdApiServer": IoClastixKamajiV1alpha1TenantControlPlaneStatusCertificatesEtcdApiServer,
    "IoClastixKamajiV1alpha1TenantControlPlaneStatusCertificatesEtcdCa": IoClastixKamajiV1alpha1TenantControlPlaneStatusCertificatesEtcdCa,
    "IoClastixKamajiV1alpha1TenantControlPlaneStatusCertificatesSa": IoClastixKamajiV1alpha1TenantControlPlaneStatusCertificatesSa,
    "IoClastixKamajiV1alpha1TenantControlPlaneStatusKubeadmPhase": IoClastixKamajiV1alpha1TenantControlPlaneStatusKubeadmPhase,
    "IoClastixKamajiV1alpha1TenantControlPlaneStatusKubeadmPhaseBootstrapToken": IoClastixKamajiV1alpha1TenantControlPlaneStatusKubeadmPhaseBootstrapToken,
    "IoClastixKamajiV1alpha1TenantControlPlaneStatusKubeadmconfig": IoClastixKamajiV1alpha1TenantControlPlaneStatusKubeadmconfig,
    "IoClastixKamajiV1alpha1TenantControlPlaneStatusKubeconfig": IoClastixKamajiV1alpha1TenantControlPlaneStatusKubeconfig,
    "IoClastixKamajiV1alpha1TenantControlPlaneStatusKubernetesResources": IoClastixKamajiV1alpha1TenantControlPlaneStatusKubernetesResources,
    "IoClastixKamajiV1alpha1TenantControlPlaneStatusKubernetesResourcesDeployment": IoClastixKamajiV1alpha1TenantControlPlaneStatusKubernetesResourcesDeployment,
    "IoClastixKamajiV1alpha1TenantControlPlaneStatusKubernetesResourcesDeploymentConditionsInner": IoClastixKamajiV1alpha1TenantControlPlaneStatusKubernetesResourcesDeploymentConditionsInner,
    "IoClastixKamajiV1alpha1TenantControlPlaneStatusKubernetesResourcesIngress": IoClastixKamajiV1alpha1TenantControlPlaneStatusKubernetesResourcesIngress,
    "IoClastixKamajiV1alpha1TenantControlPlaneStatusKubernetesResourcesIngressLoadBalancer": IoClastixKamajiV1alpha1TenantControlPlaneStatusKubernetesResourcesIngressLoadBalancer,
    "IoClastixKamajiV1alpha1TenantControlPlaneStatusKubernetesResourcesIngressLoadBalancerIngressInner": IoClastixKamajiV1alpha1TenantControlPlaneStatusKubernetesResourcesIngressLoadBalancerIngressInner,
    "IoClastixKamajiV1alpha1TenantControlPlaneStatusKubernetesResourcesIngressLoadBalancerIngressInnerPortsInner": IoClastixKamajiV1alpha1TenantControlPlaneStatusKubernetesResourcesIngressLoadBalancerIngressInnerPortsInner,
    "IoClastixKamajiV1alpha1TenantControlPlaneStatusKubernetesResourcesVersion": IoClastixKamajiV1alpha1TenantControlPlaneStatusKubernetesResourcesVersion,
    "IoClastixKamajiV1alpha1TenantControlPlaneStatusStorage": IoClastixKamajiV1alpha1TenantControlPlaneStatusStorage,
    "IoClastixKamajiV1alpha1TenantControlPlaneStatusStorageCertificate": IoClastixKamajiV1alpha1TenantControlPlaneStatusStorageCertificate,
    "IoClastixKamajiV1alpha1TenantControlPlaneStatusStorageConfig": IoClastixKamajiV1alpha1TenantControlPlaneStatusStorageConfig,
    "IoClastixKamajiV1alpha1TenantControlPlaneStatusStorageSetup": IoClastixKamajiV1alpha1TenantControlPlaneStatusStorageSetup,
    "IoK8sApiAdmissionregistrationV1MutatingWebhook": IoK8sApiAdmissionregistrationV1MutatingWebhook,
    "IoK8sApiAdmissionregistrationV1MutatingWebhookConfiguration": IoK8sApiAdmissionregistrationV1MutatingWebhookConfiguration,
    "IoK8sApiAdmissionregistrationV1MutatingWebhookConfigurationList": IoK8sApiAdmissionregistrationV1MutatingWebhookConfigurationList,
    "IoK8sApiAdmissionregistrationV1RuleWithOperations": IoK8sApiAdmissionregistrationV1RuleWithOperations,
    "IoK8sApiAdmissionregistrationV1ServiceReference": IoK8sApiAdmissionregistrationV1ServiceReference,
    "IoK8sApiAdmissionregistrationV1ValidatingWebhook": IoK8sApiAdmissionregistrationV1ValidatingWebhook,
    "IoK8sApiAdmissionregistrationV1ValidatingWebhookConfiguration": IoK8sApiAdmissionregistrationV1ValidatingWebhookConfiguration,
    "IoK8sApiAdmissionregistrationV1ValidatingWebhookConfigurationList": IoK8sApiAdmissionregistrationV1ValidatingWebhookConfigurationList,
    "IoK8sApiAdmissionregistrationV1WebhookClientConfig": IoK8sApiAdmissionregistrationV1WebhookClientConfig,
    "IoK8sApiAppsV1ControllerRevision": IoK8sApiAppsV1ControllerRevision,
    "IoK8sApiAppsV1ControllerRevisionList": IoK8sApiAppsV1ControllerRevisionList,
    "IoK8sApiAppsV1DaemonSet": IoK8sApiAppsV1DaemonSet,
    "IoK8sApiAppsV1DaemonSetCondition": IoK8sApiAppsV1DaemonSetCondition,
    "IoK8sApiAppsV1DaemonSetList": IoK8sApiAppsV1DaemonSetList,
    "IoK8sApiAppsV1DaemonSetSpec": IoK8sApiAppsV1DaemonSetSpec,
    "IoK8sApiAppsV1DaemonSetStatus": IoK8sApiAppsV1DaemonSetStatus,
    "IoK8sApiAppsV1DaemonSetUpdateStrategy": IoK8sApiAppsV1DaemonSetUpdateStrategy,
    "IoK8sApiAppsV1Deployment": IoK8sApiAppsV1Deployment,
    "IoK8sApiAppsV1DeploymentCondition": IoK8sApiAppsV1DeploymentCondition,
    "IoK8sApiAppsV1DeploymentList": IoK8sApiAppsV1DeploymentList,
    "IoK8sApiAppsV1DeploymentSpec": IoK8sApiAppsV1DeploymentSpec,
    "IoK8sApiAppsV1DeploymentStatus": IoK8sApiAppsV1DeploymentStatus,
    "IoK8sApiAppsV1DeploymentStrategy": IoK8sApiAppsV1DeploymentStrategy,
    "IoK8sApiAppsV1ReplicaSet": IoK8sApiAppsV1ReplicaSet,
    "IoK8sApiAppsV1ReplicaSetCondition": IoK8sApiAppsV1ReplicaSetCondition,
    "IoK8sApiAppsV1ReplicaSetList": IoK8sApiAppsV1ReplicaSetList,
    "IoK8sApiAppsV1ReplicaSetSpec": IoK8sApiAppsV1ReplicaSetSpec,
    "IoK8sApiAppsV1ReplicaSetStatus": IoK8sApiAppsV1ReplicaSetStatus,
    "IoK8sApiAppsV1RollingUpdateDaemonSet": IoK8sApiAppsV1RollingUpdateDaemonSet,
    "IoK8sApiAppsV1RollingUpdateDeployment": IoK8sApiAppsV1RollingUpdateDeployment,
    "IoK8sApiAppsV1RollingUpdateStatefulSetStrategy": IoK8sApiAppsV1RollingUpdateStatefulSetStrategy,
    "IoK8sApiAppsV1StatefulSet": IoK8sApiAppsV1StatefulSet,
    "IoK8sApiAppsV1StatefulSetCondition": IoK8sApiAppsV1StatefulSetCondition,
    "IoK8sApiAppsV1StatefulSetList": IoK8sApiAppsV1StatefulSetList,
    "IoK8sApiAppsV1StatefulSetPersistentVolumeClaimRetentionPolicy": IoK8sApiAppsV1StatefulSetPersistentVolumeClaimRetentionPolicy,
    "IoK8sApiAppsV1StatefulSetSpec": IoK8sApiAppsV1StatefulSetSpec,
    "IoK8sApiAppsV1StatefulSetStatus": IoK8sApiAppsV1StatefulSetStatus,
    "IoK8sApiAppsV1StatefulSetUpdateStrategy": IoK8sApiAppsV1StatefulSetUpdateStrategy,
    "IoK8sApiAuthenticationV1BoundObjectReference": IoK8sApiAuthenticationV1BoundObjectReference,
    "IoK8sApiAuthenticationV1TokenRequest": IoK8sApiAuthenticationV1TokenRequest,
    "IoK8sApiAuthenticationV1TokenRequestSpec": IoK8sApiAuthenticationV1TokenRequestSpec,
    "IoK8sApiAuthenticationV1TokenRequestStatus": IoK8sApiAuthenticationV1TokenRequestStatus,
    "IoK8sApiAuthenticationV1TokenReview": IoK8sApiAuthenticationV1TokenReview,
    "IoK8sApiAuthenticationV1TokenReviewSpec": IoK8sApiAuthenticationV1TokenReviewSpec,
    "IoK8sApiAuthenticationV1TokenReviewStatus": IoK8sApiAuthenticationV1TokenReviewStatus,
    "IoK8sApiAuthenticationV1UserInfo": IoK8sApiAuthenticationV1UserInfo,
    "IoK8sApiAuthorizationV1LocalSubjectAccessReview": IoK8sApiAuthorizationV1LocalSubjectAccessReview,
    "IoK8sApiAuthorizationV1NonResourceAttributes": IoK8sApiAuthorizationV1NonResourceAttributes,
    "IoK8sApiAuthorizationV1NonResourceRule": IoK8sApiAuthorizationV1NonResourceRule,
    "IoK8sApiAuthorizationV1ResourceAttributes": IoK8sApiAuthorizationV1ResourceAttributes,
    "IoK8sApiAuthorizationV1ResourceRule": IoK8sApiAuthorizationV1ResourceRule,
    "IoK8sApiAuthorizationV1SelfSubjectAccessReview": IoK8sApiAuthorizationV1SelfSubjectAccessReview,
    "IoK8sApiAuthorizationV1SelfSubjectAccessReviewSpec": IoK8sApiAuthorizationV1SelfSubjectAccessReviewSpec,
    "IoK8sApiAuthorizationV1SelfSubjectRulesReview": IoK8sApiAuthorizationV1SelfSubjectRulesReview,
    "IoK8sApiAuthorizationV1SelfSubjectRulesReviewSpec": IoK8sApiAuthorizationV1SelfSubjectRulesReviewSpec,
    "IoK8sApiAuthorizationV1SubjectAccessReview": IoK8sApiAuthorizationV1SubjectAccessReview,
    "IoK8sApiAuthorizationV1SubjectAccessReviewSpec": IoK8sApiAuthorizationV1SubjectAccessReviewSpec,
    "IoK8sApiAuthorizationV1SubjectAccessReviewStatus": IoK8sApiAuthorizationV1SubjectAccessReviewStatus,
    "IoK8sApiAuthorizationV1SubjectRulesReviewStatus": IoK8sApiAuthorizationV1SubjectRulesReviewStatus,
    "IoK8sApiAutoscalingV1CrossVersionObjectReference": IoK8sApiAutoscalingV1CrossVersionObjectReference,
    "IoK8sApiAutoscalingV1HorizontalPodAutoscaler": IoK8sApiAutoscalingV1HorizontalPodAutoscaler,
    "IoK8sApiAutoscalingV1HorizontalPodAutoscalerList": IoK8sApiAutoscalingV1HorizontalPodAutoscalerList,
    "IoK8sApiAutoscalingV1HorizontalPodAutoscalerSpec": IoK8sApiAutoscalingV1HorizontalPodAutoscalerSpec,
    "IoK8sApiAutoscalingV1HorizontalPodAutoscalerStatus": IoK8sApiAutoscalingV1HorizontalPodAutoscalerStatus,
    "IoK8sApiAutoscalingV1Scale": IoK8sApiAutoscalingV1Scale,
    "IoK8sApiAutoscalingV1ScaleSpec": IoK8sApiAutoscalingV1ScaleSpec,
    "IoK8sApiAutoscalingV1ScaleStatus": IoK8sApiAutoscalingV1ScaleStatus,
    "IoK8sApiAutoscalingV1ScaleV2": IoK8sApiAutoscalingV1ScaleV2,
    "IoK8sApiAutoscalingV2ContainerResourceMetricSource": IoK8sApiAutoscalingV2ContainerResourceMetricSource,
    "IoK8sApiAutoscalingV2ContainerResourceMetricStatus": IoK8sApiAutoscalingV2ContainerResourceMetricStatus,
    "IoK8sApiAutoscalingV2CrossVersionObjectReference": IoK8sApiAutoscalingV2CrossVersionObjectReference,
    "IoK8sApiAutoscalingV2ExternalMetricSource": IoK8sApiAutoscalingV2ExternalMetricSource,
    "IoK8sApiAutoscalingV2ExternalMetricStatus": IoK8sApiAutoscalingV2ExternalMetricStatus,
    "IoK8sApiAutoscalingV2HPAScalingPolicy": IoK8sApiAutoscalingV2HPAScalingPolicy,
    "IoK8sApiAutoscalingV2HPAScalingRules": IoK8sApiAutoscalingV2HPAScalingRules,
    "IoK8sApiAutoscalingV2HorizontalPodAutoscaler": IoK8sApiAutoscalingV2HorizontalPodAutoscaler,
    "IoK8sApiAutoscalingV2HorizontalPodAutoscalerBehavior": IoK8sApiAutoscalingV2HorizontalPodAutoscalerBehavior,
    "IoK8sApiAutoscalingV2HorizontalPodAutoscalerCondition": IoK8sApiAutoscalingV2HorizontalPodAutoscalerCondition,
    "IoK8sApiAutoscalingV2HorizontalPodAutoscalerList": IoK8sApiAutoscalingV2HorizontalPodAutoscalerList,
    "IoK8sApiAutoscalingV2HorizontalPodAutoscalerSpec": IoK8sApiAutoscalingV2HorizontalPodAutoscalerSpec,
    "IoK8sApiAutoscalingV2HorizontalPodAutoscalerStatus": IoK8sApiAutoscalingV2HorizontalPodAutoscalerStatus,
    "IoK8sApiAutoscalingV2MetricIdentifier": IoK8sApiAutoscalingV2MetricIdentifier,
    "IoK8sApiAutoscalingV2MetricSpec": IoK8sApiAutoscalingV2MetricSpec,
    "IoK8sApiAutoscalingV2MetricStatus": IoK8sApiAutoscalingV2MetricStatus,
    "IoK8sApiAutoscalingV2MetricTarget": IoK8sApiAutoscalingV2MetricTarget,
    "IoK8sApiAutoscalingV2MetricValueStatus": IoK8sApiAutoscalingV2MetricValueStatus,
    "IoK8sApiAutoscalingV2ObjectMetricSource": IoK8sApiAutoscalingV2ObjectMetricSource,
    "IoK8sApiAutoscalingV2ObjectMetricStatus": IoK8sApiAutoscalingV2ObjectMetricStatus,
    "IoK8sApiAutoscalingV2PodsMetricSource": IoK8sApiAutoscalingV2PodsMetricSource,
    "IoK8sApiAutoscalingV2PodsMetricStatus": IoK8sApiAutoscalingV2PodsMetricStatus,
    "IoK8sApiAutoscalingV2ResourceMetricSource": IoK8sApiAutoscalingV2ResourceMetricSource,
    "IoK8sApiAutoscalingV2ResourceMetricStatus": IoK8sApiAutoscalingV2ResourceMetricStatus,
    "IoK8sApiAutoscalingV2beta1ContainerResourceMetricSource": IoK8sApiAutoscalingV2beta1ContainerResourceMetricSource,
    "IoK8sApiAutoscalingV2beta1ContainerResourceMetricStatus": IoK8sApiAutoscalingV2beta1ContainerResourceMetricStatus,
    "IoK8sApiAutoscalingV2beta1CrossVersionObjectReference": IoK8sApiAutoscalingV2beta1CrossVersionObjectReference,
    "IoK8sApiAutoscalingV2beta1ExternalMetricSource": IoK8sApiAutoscalingV2beta1ExternalMetricSource,
    "IoK8sApiAutoscalingV2beta1ExternalMetricStatus": IoK8sApiAutoscalingV2beta1ExternalMetricStatus,
    "IoK8sApiAutoscalingV2beta1HorizontalPodAutoscaler": IoK8sApiAutoscalingV2beta1HorizontalPodAutoscaler,
    "IoK8sApiAutoscalingV2beta1HorizontalPodAutoscalerCondition": IoK8sApiAutoscalingV2beta1HorizontalPodAutoscalerCondition,
    "IoK8sApiAutoscalingV2beta1HorizontalPodAutoscalerList": IoK8sApiAutoscalingV2beta1HorizontalPodAutoscalerList,
    "IoK8sApiAutoscalingV2beta1HorizontalPodAutoscalerSpec": IoK8sApiAutoscalingV2beta1HorizontalPodAutoscalerSpec,
    "IoK8sApiAutoscalingV2beta1HorizontalPodAutoscalerStatus": IoK8sApiAutoscalingV2beta1HorizontalPodAutoscalerStatus,
    "IoK8sApiAutoscalingV2beta1MetricSpec": IoK8sApiAutoscalingV2beta1MetricSpec,
    "IoK8sApiAutoscalingV2beta1MetricStatus": IoK8sApiAutoscalingV2beta1MetricStatus,
    "IoK8sApiAutoscalingV2beta1ObjectMetricSource": IoK8sApiAutoscalingV2beta1ObjectMetricSource,
    "IoK8sApiAutoscalingV2beta1ObjectMetricStatus": IoK8sApiAutoscalingV2beta1ObjectMetricStatus,
    "IoK8sApiAutoscalingV2beta1PodsMetricSource": IoK8sApiAutoscalingV2beta1PodsMetricSource,
    "IoK8sApiAutoscalingV2beta1PodsMetricStatus": IoK8sApiAutoscalingV2beta1PodsMetricStatus,
    "IoK8sApiAutoscalingV2beta1ResourceMetricSource": IoK8sApiAutoscalingV2beta1ResourceMetricSource,
    "IoK8sApiAutoscalingV2beta1ResourceMetricStatus": IoK8sApiAutoscalingV2beta1ResourceMetricStatus,
    "IoK8sApiAutoscalingV2beta2ContainerResourceMetricSource": IoK8sApiAutoscalingV2beta2ContainerResourceMetricSource,
    "IoK8sApiAutoscalingV2beta2ContainerResourceMetricStatus": IoK8sApiAutoscalingV2beta2ContainerResourceMetricStatus,
    "IoK8sApiAutoscalingV2beta2CrossVersionObjectReference": IoK8sApiAutoscalingV2beta2CrossVersionObjectReference,
    "IoK8sApiAutoscalingV2beta2ExternalMetricSource": IoK8sApiAutoscalingV2beta2ExternalMetricSource,
    "IoK8sApiAutoscalingV2beta2ExternalMetricStatus": IoK8sApiAutoscalingV2beta2ExternalMetricStatus,
    "IoK8sApiAutoscalingV2beta2HPAScalingPolicy": IoK8sApiAutoscalingV2beta2HPAScalingPolicy,
    "IoK8sApiAutoscalingV2beta2HPAScalingRules": IoK8sApiAutoscalingV2beta2HPAScalingRules,
    "IoK8sApiAutoscalingV2beta2HorizontalPodAutoscaler": IoK8sApiAutoscalingV2beta2HorizontalPodAutoscaler,
    "IoK8sApiAutoscalingV2beta2HorizontalPodAutoscalerBehavior": IoK8sApiAutoscalingV2beta2HorizontalPodAutoscalerBehavior,
    "IoK8sApiAutoscalingV2beta2HorizontalPodAutoscalerCondition": IoK8sApiAutoscalingV2beta2HorizontalPodAutoscalerCondition,
    "IoK8sApiAutoscalingV2beta2HorizontalPodAutoscalerList": IoK8sApiAutoscalingV2beta2HorizontalPodAutoscalerList,
    "IoK8sApiAutoscalingV2beta2HorizontalPodAutoscalerSpec": IoK8sApiAutoscalingV2beta2HorizontalPodAutoscalerSpec,
    "IoK8sApiAutoscalingV2beta2HorizontalPodAutoscalerStatus": IoK8sApiAutoscalingV2beta2HorizontalPodAutoscalerStatus,
    "IoK8sApiAutoscalingV2beta2MetricIdentifier": IoK8sApiAutoscalingV2beta2MetricIdentifier,
    "IoK8sApiAutoscalingV2beta2MetricSpec": IoK8sApiAutoscalingV2beta2MetricSpec,
    "IoK8sApiAutoscalingV2beta2MetricStatus": IoK8sApiAutoscalingV2beta2MetricStatus,
    "IoK8sApiAutoscalingV2beta2MetricTarget": IoK8sApiAutoscalingV2beta2MetricTarget,
    "IoK8sApiAutoscalingV2beta2MetricValueStatus": IoK8sApiAutoscalingV2beta2MetricValueStatus,
    "IoK8sApiAutoscalingV2beta2ObjectMetricSource": IoK8sApiAutoscalingV2beta2ObjectMetricSource,
    "IoK8sApiAutoscalingV2beta2ObjectMetricStatus": IoK8sApiAutoscalingV2beta2ObjectMetricStatus,
    "IoK8sApiAutoscalingV2beta2PodsMetricSource": IoK8sApiAutoscalingV2beta2PodsMetricSource,
    "IoK8sApiAutoscalingV2beta2PodsMetricStatus": IoK8sApiAutoscalingV2beta2PodsMetricStatus,
    "IoK8sApiAutoscalingV2beta2ResourceMetricSource": IoK8sApiAutoscalingV2beta2ResourceMetricSource,
    "IoK8sApiAutoscalingV2beta2ResourceMetricStatus": IoK8sApiAutoscalingV2beta2ResourceMetricStatus,
    "IoK8sApiBatchV1CronJob": IoK8sApiBatchV1CronJob,
    "IoK8sApiBatchV1CronJobList": IoK8sApiBatchV1CronJobList,
    "IoK8sApiBatchV1CronJobSpec": IoK8sApiBatchV1CronJobSpec,
    "IoK8sApiBatchV1CronJobStatus": IoK8sApiBatchV1CronJobStatus,
    "IoK8sApiBatchV1Job": IoK8sApiBatchV1Job,
    "IoK8sApiBatchV1JobCondition": IoK8sApiBatchV1JobCondition,
    "IoK8sApiBatchV1JobList": IoK8sApiBatchV1JobList,
    "IoK8sApiBatchV1JobSpec": IoK8sApiBatchV1JobSpec,
    "IoK8sApiBatchV1JobStatus": IoK8sApiBatchV1JobStatus,
    "IoK8sApiBatchV1JobTemplateSpec": IoK8sApiBatchV1JobTemplateSpec,
    "IoK8sApiBatchV1UncountedTerminatedPods": IoK8sApiBatchV1UncountedTerminatedPods,
    "IoK8sApiBatchV1beta1CronJob": IoK8sApiBatchV1beta1CronJob,
    "IoK8sApiBatchV1beta1CronJobList": IoK8sApiBatchV1beta1CronJobList,
    "IoK8sApiBatchV1beta1CronJobSpec": IoK8sApiBatchV1beta1CronJobSpec,
    "IoK8sApiBatchV1beta1CronJobStatus": IoK8sApiBatchV1beta1CronJobStatus,
    "IoK8sApiBatchV1beta1JobTemplateSpec": IoK8sApiBatchV1beta1JobTemplateSpec,
    "IoK8sApiCertificatesV1CertificateSigningRequest": IoK8sApiCertificatesV1CertificateSigningRequest,
    "IoK8sApiCertificatesV1CertificateSigningRequestCondition": IoK8sApiCertificatesV1CertificateSigningRequestCondition,
    "IoK8sApiCertificatesV1CertificateSigningRequestList": IoK8sApiCertificatesV1CertificateSigningRequestList,
    "IoK8sApiCertificatesV1CertificateSigningRequestSpec": IoK8sApiCertificatesV1CertificateSigningRequestSpec,
    "IoK8sApiCertificatesV1CertificateSigningRequestStatus": IoK8sApiCertificatesV1CertificateSigningRequestStatus,
    "IoK8sApiCoordinationV1Lease": IoK8sApiCoordinationV1Lease,
    "IoK8sApiCoordinationV1LeaseList": IoK8sApiCoordinationV1LeaseList,
    "IoK8sApiCoordinationV1LeaseSpec": IoK8sApiCoordinationV1LeaseSpec,
    "IoK8sApiCoreV1AWSElasticBlockStoreVolumeSource": IoK8sApiCoreV1AWSElasticBlockStoreVolumeSource,
    "IoK8sApiCoreV1Affinity": IoK8sApiCoreV1Affinity,
    "IoK8sApiCoreV1AttachedVolume": IoK8sApiCoreV1AttachedVolume,
    "IoK8sApiCoreV1AzureDiskVolumeSource": IoK8sApiCoreV1AzureDiskVolumeSource,
    "IoK8sApiCoreV1AzureFilePersistentVolumeSource": IoK8sApiCoreV1AzureFilePersistentVolumeSource,
    "IoK8sApiCoreV1AzureFileVolumeSource": IoK8sApiCoreV1AzureFileVolumeSource,
    "IoK8sApiCoreV1Binding": IoK8sApiCoreV1Binding,
    "IoK8sApiCoreV1CSIPersistentVolumeSource": IoK8sApiCoreV1CSIPersistentVolumeSource,
    "IoK8sApiCoreV1CSIVolumeSource": IoK8sApiCoreV1CSIVolumeSource,
    "IoK8sApiCoreV1Capabilities": IoK8sApiCoreV1Capabilities,
    "IoK8sApiCoreV1CephFSPersistentVolumeSource": IoK8sApiCoreV1CephFSPersistentVolumeSource,
    "IoK8sApiCoreV1CephFSVolumeSource": IoK8sApiCoreV1CephFSVolumeSource,
    "IoK8sApiCoreV1CinderPersistentVolumeSource": IoK8sApiCoreV1CinderPersistentVolumeSource,
    "IoK8sApiCoreV1CinderVolumeSource": IoK8sApiCoreV1CinderVolumeSource,
    "IoK8sApiCoreV1ClientIPConfig": IoK8sApiCoreV1ClientIPConfig,
    "IoK8sApiCoreV1ComponentCondition": IoK8sApiCoreV1ComponentCondition,
    "IoK8sApiCoreV1ComponentStatus": IoK8sApiCoreV1ComponentStatus,
    "IoK8sApiCoreV1ComponentStatusList": IoK8sApiCoreV1ComponentStatusList,
    "IoK8sApiCoreV1ConfigMap": IoK8sApiCoreV1ConfigMap,
    "IoK8sApiCoreV1ConfigMapEnvSource": IoK8sApiCoreV1ConfigMapEnvSource,
    "IoK8sApiCoreV1ConfigMapKeySelector": IoK8sApiCoreV1ConfigMapKeySelector,
    "IoK8sApiCoreV1ConfigMapList": IoK8sApiCoreV1ConfigMapList,
    "IoK8sApiCoreV1ConfigMapNodeConfigSource": IoK8sApiCoreV1ConfigMapNodeConfigSource,
    "IoK8sApiCoreV1ConfigMapProjection": IoK8sApiCoreV1ConfigMapProjection,
    "IoK8sApiCoreV1ConfigMapVolumeSource": IoK8sApiCoreV1ConfigMapVolumeSource,
    "IoK8sApiCoreV1Container": IoK8sApiCoreV1Container,
    "IoK8sApiCoreV1ContainerImage": IoK8sApiCoreV1ContainerImage,
    "IoK8sApiCoreV1ContainerPort": IoK8sApiCoreV1ContainerPort,
    "IoK8sApiCoreV1ContainerState": IoK8sApiCoreV1ContainerState,
    "IoK8sApiCoreV1ContainerStateRunning": IoK8sApiCoreV1ContainerStateRunning,
    "IoK8sApiCoreV1ContainerStateTerminated": IoK8sApiCoreV1ContainerStateTerminated,
    "IoK8sApiCoreV1ContainerStateWaiting": IoK8sApiCoreV1ContainerStateWaiting,
    "IoK8sApiCoreV1ContainerStatus": IoK8sApiCoreV1ContainerStatus,
    "IoK8sApiCoreV1DaemonEndpoint": IoK8sApiCoreV1DaemonEndpoint,
    "IoK8sApiCoreV1DownwardAPIProjection": IoK8sApiCoreV1DownwardAPIProjection,
    "IoK8sApiCoreV1DownwardAPIVolumeFile": IoK8sApiCoreV1DownwardAPIVolumeFile,
    "IoK8sApiCoreV1DownwardAPIVolumeSource": IoK8sApiCoreV1DownwardAPIVolumeSource,
    "IoK8sApiCoreV1EmptyDirVolumeSource": IoK8sApiCoreV1EmptyDirVolumeSource,
    "IoK8sApiCoreV1EndpointAddress": IoK8sApiCoreV1EndpointAddress,
    "IoK8sApiCoreV1EndpointPort": IoK8sApiCoreV1EndpointPort,
    "IoK8sApiCoreV1EndpointSubset": IoK8sApiCoreV1EndpointSubset,
    "IoK8sApiCoreV1Endpoints": IoK8sApiCoreV1Endpoints,
    "IoK8sApiCoreV1EndpointsList": IoK8sApiCoreV1EndpointsList,
    "IoK8sApiCoreV1EnvFromSource": IoK8sApiCoreV1EnvFromSource,
    "IoK8sApiCoreV1EnvVar": IoK8sApiCoreV1EnvVar,
    "IoK8sApiCoreV1EnvVarSource": IoK8sApiCoreV1EnvVarSource,
    "IoK8sApiCoreV1EphemeralContainer": IoK8sApiCoreV1EphemeralContainer,
    "IoK8sApiCoreV1EphemeralVolumeSource": IoK8sApiCoreV1EphemeralVolumeSource,
    "IoK8sApiCoreV1Event": IoK8sApiCoreV1Event,
    "IoK8sApiCoreV1EventList": IoK8sApiCoreV1EventList,
    "IoK8sApiCoreV1EventSeries": IoK8sApiCoreV1EventSeries,
    "IoK8sApiCoreV1EventSource": IoK8sApiCoreV1EventSource,
    "IoK8sApiCoreV1ExecAction": IoK8sApiCoreV1ExecAction,
    "IoK8sApiCoreV1FCVolumeSource": IoK8sApiCoreV1FCVolumeSource,
    "IoK8sApiCoreV1FlexPersistentVolumeSource": IoK8sApiCoreV1FlexPersistentVolumeSource,
    "IoK8sApiCoreV1FlexVolumeSource": IoK8sApiCoreV1FlexVolumeSource,
    "IoK8sApiCoreV1FlockerVolumeSource": IoK8sApiCoreV1FlockerVolumeSource,
    "IoK8sApiCoreV1GCEPersistentDiskVolumeSource": IoK8sApiCoreV1GCEPersistentDiskVolumeSource,
    "IoK8sApiCoreV1GRPCAction": IoK8sApiCoreV1GRPCAction,
    "IoK8sApiCoreV1GitRepoVolumeSource": IoK8sApiCoreV1GitRepoVolumeSource,
    "IoK8sApiCoreV1GlusterfsPersistentVolumeSource": IoK8sApiCoreV1GlusterfsPersistentVolumeSource,
    "IoK8sApiCoreV1GlusterfsVolumeSource": IoK8sApiCoreV1GlusterfsVolumeSource,
    "IoK8sApiCoreV1HTTPGetAction": IoK8sApiCoreV1HTTPGetAction,
    "IoK8sApiCoreV1HTTPHeader": IoK8sApiCoreV1HTTPHeader,
    "IoK8sApiCoreV1HostAlias": IoK8sApiCoreV1HostAlias,
    "IoK8sApiCoreV1HostPathVolumeSource": IoK8sApiCoreV1HostPathVolumeSource,
    "IoK8sApiCoreV1ISCSIPersistentVolumeSource": IoK8sApiCoreV1ISCSIPersistentVolumeSource,
    "IoK8sApiCoreV1ISCSIVolumeSource": IoK8sApiCoreV1ISCSIVolumeSource,
    "IoK8sApiCoreV1KeyToPath": IoK8sApiCoreV1KeyToPath,
    "IoK8sApiCoreV1Lifecycle": IoK8sApiCoreV1Lifecycle,
    "IoK8sApiCoreV1LifecycleHandler": IoK8sApiCoreV1LifecycleHandler,
    "IoK8sApiCoreV1LimitRange": IoK8sApiCoreV1LimitRange,
    "IoK8sApiCoreV1LimitRangeItem": IoK8sApiCoreV1LimitRangeItem,
    "IoK8sApiCoreV1LimitRangeList": IoK8sApiCoreV1LimitRangeList,
    "IoK8sApiCoreV1LimitRangeSpec": IoK8sApiCoreV1LimitRangeSpec,
    "IoK8sApiCoreV1LoadBalancerIngress": IoK8sApiCoreV1LoadBalancerIngress,
    "IoK8sApiCoreV1LoadBalancerStatus": IoK8sApiCoreV1LoadBalancerStatus,
    "IoK8sApiCoreV1LocalObjectReference": IoK8sApiCoreV1LocalObjectReference,
    "IoK8sApiCoreV1LocalVolumeSource": IoK8sApiCoreV1LocalVolumeSource,
    "IoK8sApiCoreV1NFSVolumeSource": IoK8sApiCoreV1NFSVolumeSource,
    "IoK8sApiCoreV1Namespace": IoK8sApiCoreV1Namespace,
    "IoK8sApiCoreV1NamespaceCondition": IoK8sApiCoreV1NamespaceCondition,
    "IoK8sApiCoreV1NamespaceList": IoK8sApiCoreV1NamespaceList,
    "IoK8sApiCoreV1NamespaceSpec": IoK8sApiCoreV1NamespaceSpec,
    "IoK8sApiCoreV1NamespaceStatus": IoK8sApiCoreV1NamespaceStatus,
    "IoK8sApiCoreV1Node": IoK8sApiCoreV1Node,
    "IoK8sApiCoreV1NodeAddress": IoK8sApiCoreV1NodeAddress,
    "IoK8sApiCoreV1NodeAffinity": IoK8sApiCoreV1NodeAffinity,
    "IoK8sApiCoreV1NodeCondition": IoK8sApiCoreV1NodeCondition,
    "IoK8sApiCoreV1NodeConfigSource": IoK8sApiCoreV1NodeConfigSource,
    "IoK8sApiCoreV1NodeConfigStatus": IoK8sApiCoreV1NodeConfigStatus,
    "IoK8sApiCoreV1NodeDaemonEndpoints": IoK8sApiCoreV1NodeDaemonEndpoints,
    "IoK8sApiCoreV1NodeList": IoK8sApiCoreV1NodeList,
    "IoK8sApiCoreV1NodeSelector": IoK8sApiCoreV1NodeSelector,
    "IoK8sApiCoreV1NodeSelectorRequirement": IoK8sApiCoreV1NodeSelectorRequirement,
    "IoK8sApiCoreV1NodeSelectorTerm": IoK8sApiCoreV1NodeSelectorTerm,
    "IoK8sApiCoreV1NodeSpec": IoK8sApiCoreV1NodeSpec,
    "IoK8sApiCoreV1NodeStatus": IoK8sApiCoreV1NodeStatus,
    "IoK8sApiCoreV1NodeSystemInfo": IoK8sApiCoreV1NodeSystemInfo,
    "IoK8sApiCoreV1ObjectFieldSelector": IoK8sApiCoreV1ObjectFieldSelector,
    "IoK8sApiCoreV1ObjectReference": IoK8sApiCoreV1ObjectReference,
    "IoK8sApiCoreV1PersistentVolume": IoK8sApiCoreV1PersistentVolume,
    "IoK8sApiCoreV1PersistentVolumeClaim": IoK8sApiCoreV1PersistentVolumeClaim,
    "IoK8sApiCoreV1PersistentVolumeClaimCondition": IoK8sApiCoreV1PersistentVolumeClaimCondition,
    "IoK8sApiCoreV1PersistentVolumeClaimList": IoK8sApiCoreV1PersistentVolumeClaimList,
    "IoK8sApiCoreV1PersistentVolumeClaimSpec": IoK8sApiCoreV1PersistentVolumeClaimSpec,
    "IoK8sApiCoreV1PersistentVolumeClaimStatus": IoK8sApiCoreV1PersistentVolumeClaimStatus,
    "IoK8sApiCoreV1PersistentVolumeClaimTemplate": IoK8sApiCoreV1PersistentVolumeClaimTemplate,
    "IoK8sApiCoreV1PersistentVolumeClaimVolumeSource": IoK8sApiCoreV1PersistentVolumeClaimVolumeSource,
    "IoK8sApiCoreV1PersistentVolumeList": IoK8sApiCoreV1PersistentVolumeList,
    "IoK8sApiCoreV1PersistentVolumeSpec": IoK8sApiCoreV1PersistentVolumeSpec,
    "IoK8sApiCoreV1PersistentVolumeStatus": IoK8sApiCoreV1PersistentVolumeStatus,
    "IoK8sApiCoreV1PhotonPersistentDiskVolumeSource": IoK8sApiCoreV1PhotonPersistentDiskVolumeSource,
    "IoK8sApiCoreV1Pod": IoK8sApiCoreV1Pod,
    "IoK8sApiCoreV1PodAffinity": IoK8sApiCoreV1PodAffinity,
    "IoK8sApiCoreV1PodAffinityTerm": IoK8sApiCoreV1PodAffinityTerm,
    "IoK8sApiCoreV1PodAntiAffinity": IoK8sApiCoreV1PodAntiAffinity,
    "IoK8sApiCoreV1PodCondition": IoK8sApiCoreV1PodCondition,
    "IoK8sApiCoreV1PodDNSConfig": IoK8sApiCoreV1PodDNSConfig,
    "IoK8sApiCoreV1PodDNSConfigOption": IoK8sApiCoreV1PodDNSConfigOption,
    "IoK8sApiCoreV1PodIP": IoK8sApiCoreV1PodIP,
    "IoK8sApiCoreV1PodList": IoK8sApiCoreV1PodList,
    "IoK8sApiCoreV1PodOS": IoK8sApiCoreV1PodOS,
    "IoK8sApiCoreV1PodReadinessGate": IoK8sApiCoreV1PodReadinessGate,
    "IoK8sApiCoreV1PodSecurityContext": IoK8sApiCoreV1PodSecurityContext,
    "IoK8sApiCoreV1PodSpec": IoK8sApiCoreV1PodSpec,
    "IoK8sApiCoreV1PodStatus": IoK8sApiCoreV1PodStatus,
    "IoK8sApiCoreV1PodTemplate": IoK8sApiCoreV1PodTemplate,
    "IoK8sApiCoreV1PodTemplateList": IoK8sApiCoreV1PodTemplateList,
    "IoK8sApiCoreV1PodTemplateSpec": IoK8sApiCoreV1PodTemplateSpec,
    "IoK8sApiCoreV1PortStatus": IoK8sApiCoreV1PortStatus,
    "IoK8sApiCoreV1PortworxVolumeSource": IoK8sApiCoreV1PortworxVolumeSource,
    "IoK8sApiCoreV1PreferredSchedulingTerm": IoK8sApiCoreV1PreferredSchedulingTerm,
    "IoK8sApiCoreV1Probe": IoK8sApiCoreV1Probe,
    "IoK8sApiCoreV1ProjectedVolumeSource": IoK8sApiCoreV1ProjectedVolumeSource,
    "IoK8sApiCoreV1QuobyteVolumeSource": IoK8sApiCoreV1QuobyteVolumeSource,
    "IoK8sApiCoreV1RBDPersistentVolumeSource": IoK8sApiCoreV1RBDPersistentVolumeSource,
    "IoK8sApiCoreV1RBDVolumeSource": IoK8sApiCoreV1RBDVolumeSource,
    "IoK8sApiCoreV1ReplicationController": IoK8sApiCoreV1ReplicationController,
    "IoK8sApiCoreV1ReplicationControllerCondition": IoK8sApiCoreV1ReplicationControllerCondition,
    "IoK8sApiCoreV1ReplicationControllerList": IoK8sApiCoreV1ReplicationControllerList,
    "IoK8sApiCoreV1ReplicationControllerSpec": IoK8sApiCoreV1ReplicationControllerSpec,
    "IoK8sApiCoreV1ReplicationControllerStatus": IoK8sApiCoreV1ReplicationControllerStatus,
    "IoK8sApiCoreV1ResourceFieldSelector": IoK8sApiCoreV1ResourceFieldSelector,
    "IoK8sApiCoreV1ResourceQuota": IoK8sApiCoreV1ResourceQuota,
    "IoK8sApiCoreV1ResourceQuotaList": IoK8sApiCoreV1ResourceQuotaList,
    "IoK8sApiCoreV1ResourceQuotaSpec": IoK8sApiCoreV1ResourceQuotaSpec,
    "IoK8sApiCoreV1ResourceQuotaStatus": IoK8sApiCoreV1ResourceQuotaStatus,
    "IoK8sApiCoreV1ResourceRequirements": IoK8sApiCoreV1ResourceRequirements,
    "IoK8sApiCoreV1SELinuxOptions": IoK8sApiCoreV1SELinuxOptions,
    "IoK8sApiCoreV1ScaleIOPersistentVolumeSource": IoK8sApiCoreV1ScaleIOPersistentVolumeSource,
    "IoK8sApiCoreV1ScaleIOVolumeSource": IoK8sApiCoreV1ScaleIOVolumeSource,
    "IoK8sApiCoreV1ScopeSelector": IoK8sApiCoreV1ScopeSelector,
    "IoK8sApiCoreV1ScopedResourceSelectorRequirement": IoK8sApiCoreV1ScopedResourceSelectorRequirement,
    "IoK8sApiCoreV1SeccompProfile": IoK8sApiCoreV1SeccompProfile,
    "IoK8sApiCoreV1Secret": IoK8sApiCoreV1Secret,
    "IoK8sApiCoreV1SecretEnvSource": IoK8sApiCoreV1SecretEnvSource,
    "IoK8sApiCoreV1SecretKeySelector": IoK8sApiCoreV1SecretKeySelector,
    "IoK8sApiCoreV1SecretList": IoK8sApiCoreV1SecretList,
    "IoK8sApiCoreV1SecretProjection": IoK8sApiCoreV1SecretProjection,
    "IoK8sApiCoreV1SecretReference": IoK8sApiCoreV1SecretReference,
    "IoK8sApiCoreV1SecretVolumeSource": IoK8sApiCoreV1SecretVolumeSource,
    "IoK8sApiCoreV1SecurityContext": IoK8sApiCoreV1SecurityContext,
    "IoK8sApiCoreV1Service": IoK8sApiCoreV1Service,
    "IoK8sApiCoreV1ServiceAccount": IoK8sApiCoreV1ServiceAccount,
    "IoK8sApiCoreV1ServiceAccountList": IoK8sApiCoreV1ServiceAccountList,
    "IoK8sApiCoreV1ServiceAccountTokenProjection": IoK8sApiCoreV1ServiceAccountTokenProjection,
    "IoK8sApiCoreV1ServiceList": IoK8sApiCoreV1ServiceList,
    "IoK8sApiCoreV1ServicePort": IoK8sApiCoreV1ServicePort,
    "IoK8sApiCoreV1ServiceSpec": IoK8sApiCoreV1ServiceSpec,
    "IoK8sApiCoreV1ServiceStatus": IoK8sApiCoreV1ServiceStatus,
    "IoK8sApiCoreV1SessionAffinityConfig": IoK8sApiCoreV1SessionAffinityConfig,
    "IoK8sApiCoreV1StorageOSPersistentVolumeSource": IoK8sApiCoreV1StorageOSPersistentVolumeSource,
    "IoK8sApiCoreV1StorageOSVolumeSource": IoK8sApiCoreV1StorageOSVolumeSource,
    "IoK8sApiCoreV1Sysctl": IoK8sApiCoreV1Sysctl,
    "IoK8sApiCoreV1TCPSocketAction": IoK8sApiCoreV1TCPSocketAction,
    "IoK8sApiCoreV1Taint": IoK8sApiCoreV1Taint,
    "IoK8sApiCoreV1Toleration": IoK8sApiCoreV1Toleration,
    "IoK8sApiCoreV1TopologySelectorLabelRequirement": IoK8sApiCoreV1TopologySelectorLabelRequirement,
    "IoK8sApiCoreV1TopologySelectorTerm": IoK8sApiCoreV1TopologySelectorTerm,
    "IoK8sApiCoreV1TopologySpreadConstraint": IoK8sApiCoreV1TopologySpreadConstraint,
    "IoK8sApiCoreV1TypedLocalObjectReference": IoK8sApiCoreV1TypedLocalObjectReference,
    "IoK8sApiCoreV1Volume": IoK8sApiCoreV1Volume,
    "IoK8sApiCoreV1VolumeDevice": IoK8sApiCoreV1VolumeDevice,
    "IoK8sApiCoreV1VolumeMount": IoK8sApiCoreV1VolumeMount,
    "IoK8sApiCoreV1VolumeNodeAffinity": IoK8sApiCoreV1VolumeNodeAffinity,
    "IoK8sApiCoreV1VolumeProjection": IoK8sApiCoreV1VolumeProjection,
    "IoK8sApiCoreV1VsphereVirtualDiskVolumeSource": IoK8sApiCoreV1VsphereVirtualDiskVolumeSource,
    "IoK8sApiCoreV1WeightedPodAffinityTerm": IoK8sApiCoreV1WeightedPodAffinityTerm,
    "IoK8sApiCoreV1WindowsSecurityContextOptions": IoK8sApiCoreV1WindowsSecurityContextOptions,
    "IoK8sApiDiscoveryV1Endpoint": IoK8sApiDiscoveryV1Endpoint,
    "IoK8sApiDiscoveryV1EndpointConditions": IoK8sApiDiscoveryV1EndpointConditions,
    "IoK8sApiDiscoveryV1EndpointHints": IoK8sApiDiscoveryV1EndpointHints,
    "IoK8sApiDiscoveryV1EndpointPort": IoK8sApiDiscoveryV1EndpointPort,
    "IoK8sApiDiscoveryV1EndpointSlice": IoK8sApiDiscoveryV1EndpointSlice,
    "IoK8sApiDiscoveryV1EndpointSliceList": IoK8sApiDiscoveryV1EndpointSliceList,
    "IoK8sApiDiscoveryV1ForZone": IoK8sApiDiscoveryV1ForZone,
    "IoK8sApiDiscoveryV1beta1Endpoint": IoK8sApiDiscoveryV1beta1Endpoint,
    "IoK8sApiDiscoveryV1beta1EndpointConditions": IoK8sApiDiscoveryV1beta1EndpointConditions,
    "IoK8sApiDiscoveryV1beta1EndpointHints": IoK8sApiDiscoveryV1beta1EndpointHints,
    "IoK8sApiDiscoveryV1beta1EndpointPort": IoK8sApiDiscoveryV1beta1EndpointPort,
    "IoK8sApiDiscoveryV1beta1EndpointSlice": IoK8sApiDiscoveryV1beta1EndpointSlice,
    "IoK8sApiDiscoveryV1beta1EndpointSliceList": IoK8sApiDiscoveryV1beta1EndpointSliceList,
    "IoK8sApiDiscoveryV1beta1ForZone": IoK8sApiDiscoveryV1beta1ForZone,
    "IoK8sApiEventsV1Event": IoK8sApiEventsV1Event,
    "IoK8sApiEventsV1EventList": IoK8sApiEventsV1EventList,
    "IoK8sApiEventsV1EventSeries": IoK8sApiEventsV1EventSeries,
    "IoK8sApiEventsV1beta1Event": IoK8sApiEventsV1beta1Event,
    "IoK8sApiEventsV1beta1EventList": IoK8sApiEventsV1beta1EventList,
    "IoK8sApiEventsV1beta1EventSeries": IoK8sApiEventsV1beta1EventSeries,
    "IoK8sApiFlowcontrolV1beta1FlowDistinguisherMethod": IoK8sApiFlowcontrolV1beta1FlowDistinguisherMethod,
    "IoK8sApiFlowcontrolV1beta1FlowSchema": IoK8sApiFlowcontrolV1beta1FlowSchema,
    "IoK8sApiFlowcontrolV1beta1FlowSchemaCondition": IoK8sApiFlowcontrolV1beta1FlowSchemaCondition,
    "IoK8sApiFlowcontrolV1beta1FlowSchemaList": IoK8sApiFlowcontrolV1beta1FlowSchemaList,
    "IoK8sApiFlowcontrolV1beta1FlowSchemaSpec": IoK8sApiFlowcontrolV1beta1FlowSchemaSpec,
    "IoK8sApiFlowcontrolV1beta1FlowSchemaStatus": IoK8sApiFlowcontrolV1beta1FlowSchemaStatus,
    "IoK8sApiFlowcontrolV1beta1GroupSubject": IoK8sApiFlowcontrolV1beta1GroupSubject,
    "IoK8sApiFlowcontrolV1beta1LimitResponse": IoK8sApiFlowcontrolV1beta1LimitResponse,
    "IoK8sApiFlowcontrolV1beta1LimitedPriorityLevelConfiguration": IoK8sApiFlowcontrolV1beta1LimitedPriorityLevelConfiguration,
    "IoK8sApiFlowcontrolV1beta1NonResourcePolicyRule": IoK8sApiFlowcontrolV1beta1NonResourcePolicyRule,
    "IoK8sApiFlowcontrolV1beta1PolicyRulesWithSubjects": IoK8sApiFlowcontrolV1beta1PolicyRulesWithSubjects,
    "IoK8sApiFlowcontrolV1beta1PriorityLevelConfiguration": IoK8sApiFlowcontrolV1beta1PriorityLevelConfiguration,
    "IoK8sApiFlowcontrolV1beta1PriorityLevelConfigurationCondition": IoK8sApiFlowcontrolV1beta1PriorityLevelConfigurationCondition,
    "IoK8sApiFlowcontrolV1beta1PriorityLevelConfigurationList": IoK8sApiFlowcontrolV1beta1PriorityLevelConfigurationList,
    "IoK8sApiFlowcontrolV1beta1PriorityLevelConfigurationReference": IoK8sApiFlowcontrolV1beta1PriorityLevelConfigurationReference,
    "IoK8sApiFlowcontrolV1beta1PriorityLevelConfigurationSpec": IoK8sApiFlowcontrolV1beta1PriorityLevelConfigurationSpec,
    "IoK8sApiFlowcontrolV1beta1PriorityLevelConfigurationStatus": IoK8sApiFlowcontrolV1beta1PriorityLevelConfigurationStatus,
    "IoK8sApiFlowcontrolV1beta1QueuingConfiguration": IoK8sApiFlowcontrolV1beta1QueuingConfiguration,
    "IoK8sApiFlowcontrolV1beta1ResourcePolicyRule": IoK8sApiFlowcontrolV1beta1ResourcePolicyRule,
    "IoK8sApiFlowcontrolV1beta1ServiceAccountSubject": IoK8sApiFlowcontrolV1beta1ServiceAccountSubject,
    "IoK8sApiFlowcontrolV1beta1Subject": IoK8sApiFlowcontrolV1beta1Subject,
    "IoK8sApiFlowcontrolV1beta1UserSubject": IoK8sApiFlowcontrolV1beta1UserSubject,
    "IoK8sApiFlowcontrolV1beta2FlowDistinguisherMethod": IoK8sApiFlowcontrolV1beta2FlowDistinguisherMethod,
    "IoK8sApiFlowcontrolV1beta2FlowSchema": IoK8sApiFlowcontrolV1beta2FlowSchema,
    "IoK8sApiFlowcontrolV1beta2FlowSchemaCondition": IoK8sApiFlowcontrolV1beta2FlowSchemaCondition,
    "IoK8sApiFlowcontrolV1beta2FlowSchemaList": IoK8sApiFlowcontrolV1beta2FlowSchemaList,
    "IoK8sApiFlowcontrolV1beta2FlowSchemaSpec": IoK8sApiFlowcontrolV1beta2FlowSchemaSpec,
    "IoK8sApiFlowcontrolV1beta2FlowSchemaStatus": IoK8sApiFlowcontrolV1beta2FlowSchemaStatus,
    "IoK8sApiFlowcontrolV1beta2GroupSubject": IoK8sApiFlowcontrolV1beta2GroupSubject,
    "IoK8sApiFlowcontrolV1beta2LimitResponse": IoK8sApiFlowcontrolV1beta2LimitResponse,
    "IoK8sApiFlowcontrolV1beta2LimitedPriorityLevelConfiguration": IoK8sApiFlowcontrolV1beta2LimitedPriorityLevelConfiguration,
    "IoK8sApiFlowcontrolV1beta2NonResourcePolicyRule": IoK8sApiFlowcontrolV1beta2NonResourcePolicyRule,
    "IoK8sApiFlowcontrolV1beta2PolicyRulesWithSubjects": IoK8sApiFlowcontrolV1beta2PolicyRulesWithSubjects,
    "IoK8sApiFlowcontrolV1beta2PriorityLevelConfiguration": IoK8sApiFlowcontrolV1beta2PriorityLevelConfiguration,
    "IoK8sApiFlowcontrolV1beta2PriorityLevelConfigurationCondition": IoK8sApiFlowcontrolV1beta2PriorityLevelConfigurationCondition,
    "IoK8sApiFlowcontrolV1beta2PriorityLevelConfigurationList": IoK8sApiFlowcontrolV1beta2PriorityLevelConfigurationList,
    "IoK8sApiFlowcontrolV1beta2PriorityLevelConfigurationReference": IoK8sApiFlowcontrolV1beta2PriorityLevelConfigurationReference,
    "IoK8sApiFlowcontrolV1beta2PriorityLevelConfigurationSpec": IoK8sApiFlowcontrolV1beta2PriorityLevelConfigurationSpec,
    "IoK8sApiFlowcontrolV1beta2PriorityLevelConfigurationStatus": IoK8sApiFlowcontrolV1beta2PriorityLevelConfigurationStatus,
    "IoK8sApiFlowcontrolV1beta2QueuingConfiguration": IoK8sApiFlowcontrolV1beta2QueuingConfiguration,
    "IoK8sApiFlowcontrolV1beta2ResourcePolicyRule": IoK8sApiFlowcontrolV1beta2ResourcePolicyRule,
    "IoK8sApiFlowcontrolV1beta2ServiceAccountSubject": IoK8sApiFlowcontrolV1beta2ServiceAccountSubject,
    "IoK8sApiFlowcontrolV1beta2Subject": IoK8sApiFlowcontrolV1beta2Subject,
    "IoK8sApiFlowcontrolV1beta2UserSubject": IoK8sApiFlowcontrolV1beta2UserSubject,
    "IoK8sApiNetworkingV1HTTPIngressPath": IoK8sApiNetworkingV1HTTPIngressPath,
    "IoK8sApiNetworkingV1HTTPIngressRuleValue": IoK8sApiNetworkingV1HTTPIngressRuleValue,
    "IoK8sApiNetworkingV1IPBlock": IoK8sApiNetworkingV1IPBlock,
    "IoK8sApiNetworkingV1Ingress": IoK8sApiNetworkingV1Ingress,
    "IoK8sApiNetworkingV1IngressBackend": IoK8sApiNetworkingV1IngressBackend,
    "IoK8sApiNetworkingV1IngressClass": IoK8sApiNetworkingV1IngressClass,
    "IoK8sApiNetworkingV1IngressClassList": IoK8sApiNetworkingV1IngressClassList,
    "IoK8sApiNetworkingV1IngressClassParametersReference": IoK8sApiNetworkingV1IngressClassParametersReference,
    "IoK8sApiNetworkingV1IngressClassSpec": IoK8sApiNetworkingV1IngressClassSpec,
    "IoK8sApiNetworkingV1IngressList": IoK8sApiNetworkingV1IngressList,
    "IoK8sApiNetworkingV1IngressRule": IoK8sApiNetworkingV1IngressRule,
    "IoK8sApiNetworkingV1IngressServiceBackend": IoK8sApiNetworkingV1IngressServiceBackend,
    "IoK8sApiNetworkingV1IngressSpec": IoK8sApiNetworkingV1IngressSpec,
    "IoK8sApiNetworkingV1IngressStatus": IoK8sApiNetworkingV1IngressStatus,
    "IoK8sApiNetworkingV1IngressTLS": IoK8sApiNetworkingV1IngressTLS,
    "IoK8sApiNetworkingV1NetworkPolicy": IoK8sApiNetworkingV1NetworkPolicy,
    "IoK8sApiNetworkingV1NetworkPolicyEgressRule": IoK8sApiNetworkingV1NetworkPolicyEgressRule,
    "IoK8sApiNetworkingV1NetworkPolicyIngressRule": IoK8sApiNetworkingV1NetworkPolicyIngressRule,
    "IoK8sApiNetworkingV1NetworkPolicyList": IoK8sApiNetworkingV1NetworkPolicyList,
    "IoK8sApiNetworkingV1NetworkPolicyPeer": IoK8sApiNetworkingV1NetworkPolicyPeer,
    "IoK8sApiNetworkingV1NetworkPolicyPort": IoK8sApiNetworkingV1NetworkPolicyPort,
    "IoK8sApiNetworkingV1NetworkPolicySpec": IoK8sApiNetworkingV1NetworkPolicySpec,
    "IoK8sApiNetworkingV1ServiceBackendPort": IoK8sApiNetworkingV1ServiceBackendPort,
    "IoK8sApiNodeV1Overhead": IoK8sApiNodeV1Overhead,
    "IoK8sApiNodeV1RuntimeClass": IoK8sApiNodeV1RuntimeClass,
    "IoK8sApiNodeV1RuntimeClassList": IoK8sApiNodeV1RuntimeClassList,
    "IoK8sApiNodeV1Scheduling": IoK8sApiNodeV1Scheduling,
    "IoK8sApiNodeV1beta1Overhead": IoK8sApiNodeV1beta1Overhead,
    "IoK8sApiNodeV1beta1RuntimeClass": IoK8sApiNodeV1beta1RuntimeClass,
    "IoK8sApiNodeV1beta1RuntimeClassList": IoK8sApiNodeV1beta1RuntimeClassList,
    "IoK8sApiNodeV1beta1Scheduling": IoK8sApiNodeV1beta1Scheduling,
    "IoK8sApiPolicyV1Eviction": IoK8sApiPolicyV1Eviction,
    "IoK8sApiPolicyV1PodDisruptionBudget": IoK8sApiPolicyV1PodDisruptionBudget,
    "IoK8sApiPolicyV1PodDisruptionBudgetList": IoK8sApiPolicyV1PodDisruptionBudgetList,
    "IoK8sApiPolicyV1PodDisruptionBudgetSpec": IoK8sApiPolicyV1PodDisruptionBudgetSpec,
    "IoK8sApiPolicyV1PodDisruptionBudgetStatus": IoK8sApiPolicyV1PodDisruptionBudgetStatus,
    "IoK8sApiPolicyV1beta1AllowedCSIDriver": IoK8sApiPolicyV1beta1AllowedCSIDriver,
    "IoK8sApiPolicyV1beta1AllowedFlexVolume": IoK8sApiPolicyV1beta1AllowedFlexVolume,
    "IoK8sApiPolicyV1beta1AllowedHostPath": IoK8sApiPolicyV1beta1AllowedHostPath,
    "IoK8sApiPolicyV1beta1FSGroupStrategyOptions": IoK8sApiPolicyV1beta1FSGroupStrategyOptions,
    "IoK8sApiPolicyV1beta1HostPortRange": IoK8sApiPolicyV1beta1HostPortRange,
    "IoK8sApiPolicyV1beta1IDRange": IoK8sApiPolicyV1beta1IDRange,
    "IoK8sApiPolicyV1beta1PodDisruptionBudget": IoK8sApiPolicyV1beta1PodDisruptionBudget,
    "IoK8sApiPolicyV1beta1PodDisruptionBudgetList": IoK8sApiPolicyV1beta1PodDisruptionBudgetList,
    "IoK8sApiPolicyV1beta1PodDisruptionBudgetSpec": IoK8sApiPolicyV1beta1PodDisruptionBudgetSpec,
    "IoK8sApiPolicyV1beta1PodDisruptionBudgetStatus": IoK8sApiPolicyV1beta1PodDisruptionBudgetStatus,
    "IoK8sApiPolicyV1beta1PodSecurityPolicy": IoK8sApiPolicyV1beta1PodSecurityPolicy,
    "IoK8sApiPolicyV1beta1PodSecurityPolicyList": IoK8sApiPolicyV1beta1PodSecurityPolicyList,
    "IoK8sApiPolicyV1beta1PodSecurityPolicySpec": IoK8sApiPolicyV1beta1PodSecurityPolicySpec,
    "IoK8sApiPolicyV1beta1RunAsGroupStrategyOptions": IoK8sApiPolicyV1beta1RunAsGroupStrategyOptions,
    "IoK8sApiPolicyV1beta1RunAsUserStrategyOptions": IoK8sApiPolicyV1beta1RunAsUserStrategyOptions,
    "IoK8sApiPolicyV1beta1RuntimeClassStrategyOptions": IoK8sApiPolicyV1beta1RuntimeClassStrategyOptions,
    "IoK8sApiPolicyV1beta1SELinuxStrategyOptions": IoK8sApiPolicyV1beta1SELinuxStrategyOptions,
    "IoK8sApiPolicyV1beta1SupplementalGroupsStrategyOptions": IoK8sApiPolicyV1beta1SupplementalGroupsStrategyOptions,
    "IoK8sApiRbacV1AggregationRule": IoK8sApiRbacV1AggregationRule,
    "IoK8sApiRbacV1ClusterRole": IoK8sApiRbacV1ClusterRole,
    "IoK8sApiRbacV1ClusterRoleBinding": IoK8sApiRbacV1ClusterRoleBinding,
    "IoK8sApiRbacV1ClusterRoleBindingList": IoK8sApiRbacV1ClusterRoleBindingList,
    "IoK8sApiRbacV1ClusterRoleList": IoK8sApiRbacV1ClusterRoleList,
    "IoK8sApiRbacV1PolicyRule": IoK8sApiRbacV1PolicyRule,
    "IoK8sApiRbacV1Role": IoK8sApiRbacV1Role,
    "IoK8sApiRbacV1RoleBinding": IoK8sApiRbacV1RoleBinding,
    "IoK8sApiRbacV1RoleBindingList": IoK8sApiRbacV1RoleBindingList,
    "IoK8sApiRbacV1RoleList": IoK8sApiRbacV1RoleList,
    "IoK8sApiRbacV1RoleRef": IoK8sApiRbacV1RoleRef,
    "IoK8sApiRbacV1Subject": IoK8sApiRbacV1Subject,
    "IoK8sApiSchedulingV1PriorityClass": IoK8sApiSchedulingV1PriorityClass,
    "IoK8sApiSchedulingV1PriorityClassList": IoK8sApiSchedulingV1PriorityClassList,
    "IoK8sApiStorageV1CSIDriver": IoK8sApiStorageV1CSIDriver,
    "IoK8sApiStorageV1CSIDriverList": IoK8sApiStorageV1CSIDriverList,
    "IoK8sApiStorageV1CSIDriverSpec": IoK8sApiStorageV1CSIDriverSpec,
    "IoK8sApiStorageV1CSINode": IoK8sApiStorageV1CSINode,
    "IoK8sApiStorageV1CSINodeDriver": IoK8sApiStorageV1CSINodeDriver,
    "IoK8sApiStorageV1CSINodeList": IoK8sApiStorageV1CSINodeList,
    "IoK8sApiStorageV1CSINodeSpec": IoK8sApiStorageV1CSINodeSpec,
    "IoK8sApiStorageV1StorageClass": IoK8sApiStorageV1StorageClass,
    "IoK8sApiStorageV1StorageClassList": IoK8sApiStorageV1StorageClassList,
    "IoK8sApiStorageV1TokenRequest": IoK8sApiStorageV1TokenRequest,
    "IoK8sApiStorageV1VolumeAttachment": IoK8sApiStorageV1VolumeAttachment,
    "IoK8sApiStorageV1VolumeAttachmentList": IoK8sApiStorageV1VolumeAttachmentList,
    "IoK8sApiStorageV1VolumeAttachmentSource": IoK8sApiStorageV1VolumeAttachmentSource,
    "IoK8sApiStorageV1VolumeAttachmentSpec": IoK8sApiStorageV1VolumeAttachmentSpec,
    "IoK8sApiStorageV1VolumeAttachmentStatus": IoK8sApiStorageV1VolumeAttachmentStatus,
    "IoK8sApiStorageV1VolumeError": IoK8sApiStorageV1VolumeError,
    "IoK8sApiStorageV1VolumeNodeResources": IoK8sApiStorageV1VolumeNodeResources,
    "IoK8sApiStorageV1beta1CSIStorageCapacity": IoK8sApiStorageV1beta1CSIStorageCapacity,
    "IoK8sApiStorageV1beta1CSIStorageCapacityList": IoK8sApiStorageV1beta1CSIStorageCapacityList,
    "IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceColumnDefinition": IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceColumnDefinition,
    "IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceConversion": IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceConversion,
    "IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinition": IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinition,
    "IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionCondition": IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionCondition,
    "IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionList": IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionList,
    "IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionNames": IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionNames,
    "IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionSpec": IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionSpec,
    "IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionStatus": IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionStatus,
    "IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionVersion": IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionVersion,
    "IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresourceScale": IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresourceScale,
    "IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresources": IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresources,
    "IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceValidation": IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceValidation,
    "IoK8sApiextensionsApiserverPkgApisApiextensionsV1ExternalDocumentation": IoK8sApiextensionsApiserverPkgApisApiextensionsV1ExternalDocumentation,
    "IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaProps": IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaProps,
    "IoK8sApiextensionsApiserverPkgApisApiextensionsV1ServiceReference": IoK8sApiextensionsApiserverPkgApisApiextensionsV1ServiceReference,
    "IoK8sApiextensionsApiserverPkgApisApiextensionsV1ValidationRule": IoK8sApiextensionsApiserverPkgApisApiextensionsV1ValidationRule,
    "IoK8sApiextensionsApiserverPkgApisApiextensionsV1WebhookClientConfig": IoK8sApiextensionsApiserverPkgApisApiextensionsV1WebhookClientConfig,
    "IoK8sApiextensionsApiserverPkgApisApiextensionsV1WebhookConversion": IoK8sApiextensionsApiserverPkgApisApiextensionsV1WebhookConversion,
    "IoK8sApimachineryPkgApisMetaV1APIGroup": IoK8sApimachineryPkgApisMetaV1APIGroup,
    "IoK8sApimachineryPkgApisMetaV1APIGroupList": IoK8sApimachineryPkgApisMetaV1APIGroupList,
    "IoK8sApimachineryPkgApisMetaV1APIResource": IoK8sApimachineryPkgApisMetaV1APIResource,
    "IoK8sApimachineryPkgApisMetaV1APIResourceList": IoK8sApimachineryPkgApisMetaV1APIResourceList,
    "IoK8sApimachineryPkgApisMetaV1APIVersions": IoK8sApimachineryPkgApisMetaV1APIVersions,
    "IoK8sApimachineryPkgApisMetaV1Condition": IoK8sApimachineryPkgApisMetaV1Condition,
    "IoK8sApimachineryPkgApisMetaV1DeleteOptions": IoK8sApimachineryPkgApisMetaV1DeleteOptions,
    "IoK8sApimachineryPkgApisMetaV1DeleteOptionsV2": IoK8sApimachineryPkgApisMetaV1DeleteOptionsV2,
    "IoK8sApimachineryPkgApisMetaV1GroupVersionForDiscovery": IoK8sApimachineryPkgApisMetaV1GroupVersionForDiscovery,
    "IoK8sApimachineryPkgApisMetaV1LabelSelector": IoK8sApimachineryPkgApisMetaV1LabelSelector,
    "IoK8sApimachineryPkgApisMetaV1LabelSelectorRequirement": IoK8sApimachineryPkgApisMetaV1LabelSelectorRequirement,
    "IoK8sApimachineryPkgApisMetaV1ListMeta": IoK8sApimachineryPkgApisMetaV1ListMeta,
    "IoK8sApimachineryPkgApisMetaV1ManagedFieldsEntry": IoK8sApimachineryPkgApisMetaV1ManagedFieldsEntry,
    "IoK8sApimachineryPkgApisMetaV1ObjectMeta": IoK8sApimachineryPkgApisMetaV1ObjectMeta,
    "IoK8sApimachineryPkgApisMetaV1ObjectMetaV2": IoK8sApimachineryPkgApisMetaV1ObjectMetaV2,
    "IoK8sApimachineryPkgApisMetaV1OwnerReference": IoK8sApimachineryPkgApisMetaV1OwnerReference,
    "IoK8sApimachineryPkgApisMetaV1OwnerReferenceV2": IoK8sApimachineryPkgApisMetaV1OwnerReferenceV2,
    "IoK8sApimachineryPkgApisMetaV1Preconditions": IoK8sApimachineryPkgApisMetaV1Preconditions,
    "IoK8sApimachineryPkgApisMetaV1ServerAddressByClientCIDR": IoK8sApimachineryPkgApisMetaV1ServerAddressByClientCIDR,
    "IoK8sApimachineryPkgApisMetaV1Status": IoK8sApimachineryPkgApisMetaV1Status,
    "IoK8sApimachineryPkgApisMetaV1StatusCause": IoK8sApimachineryPkgApisMetaV1StatusCause,
    "IoK8sApimachineryPkgApisMetaV1StatusDetails": IoK8sApimachineryPkgApisMetaV1StatusDetails,
    "IoK8sApimachineryPkgApisMetaV1StatusDetailsV2": IoK8sApimachineryPkgApisMetaV1StatusDetailsV2,
    "IoK8sApimachineryPkgApisMetaV1StatusV2": IoK8sApimachineryPkgApisMetaV1StatusV2,
    "IoK8sApimachineryPkgApisMetaV1WatchEvent": IoK8sApimachineryPkgApisMetaV1WatchEvent,
    "IoK8sApimachineryPkgVersionInfo": IoK8sApimachineryPkgVersionInfo,
    "IoK8sKubeAggregatorPkgApisApiregistrationV1APIService": IoK8sKubeAggregatorPkgApisApiregistrationV1APIService,
    "IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceCondition": IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceCondition,
    "IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceList": IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceList,
    "IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceSpec": IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceSpec,
    "IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceStatus": IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceStatus,
    "IoK8sKubeAggregatorPkgApisApiregistrationV1ServiceReference": IoK8sKubeAggregatorPkgApisApiregistrationV1ServiceReference,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
