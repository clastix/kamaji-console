"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { SVGProps, useEffect } from "react";
import { z } from "zod";
import { ClastixLogo } from "../../../components/clastix/logos/logo";
import { ZodForm } from "../../../components/zod-form/form";
import { TextField } from "../../../components/forms/text-field";

export type SignInErrorTypes =
  | "Signin"
  | "OAuthSignin"
  | "OAuthCallback"
  | "OAuthCreateAccount"
  | "EmailCreateAccount"
  | "Callback"
  | "OAuthAccountNotLinked"
  | "EmailSignin"
  | "CredentialsSignin"
  | "SessionRequired"
  | "default";

const errors: Record<SignInErrorTypes, string> = {
  Signin: "Prova a loggarti con un metodo differente.",
  OAuthSignin: "Prova a loggarti con un metodo differente.",
  OAuthCallback: "Prova a loggarti con un metodo differente.",
  OAuthCreateAccount: "Prova a loggarti con un metodo differente.",
  EmailCreateAccount: "Prova a loggarti con un metodo differente.",
  Callback: "Prova a loggarti con un metodo differente.",
  OAuthAccountNotLinked:
    "Sembra che hai già effettuato il login con un altro medoto. Per confermare, utilizza il metodo di login originale!",
  EmailSignin: "Errore nell'invio della mail.",
  CredentialsSignin:
    "Errore nel Login. Controlla i dati che hai inserito e riprova.",
  SessionRequired: "Perfavore effettua il login per accedere a questa pagina.",
  default: "Non riesco a fare il login.",
};

export default function SignIn() {
  const { status } = useSession();
  const router = useRouter();
  const query = useSearchParams();

  useEffect(() => {
    if (status === "authenticated") {
      const url = query?.get("callbackUrl") || "/";
      router.push(url);
    }
  }, [status, router, query]);

  if (status !== "unauthenticated") {
    return null;
  }

  const error = query?.get("error") as SignInErrorTypes | undefined;

  return (
    <div className="flex min-h-screen w-screen flex-col  bg-gray-100 py-12 sm:px-6 lg:px-8">
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
          <div className="mb-10 sm:mx-auto sm:w-full sm:max-w-md">
            <ClastixLogo className="m-auto w-32" />
          </div>
          {error && <p className="mb-4 text-center">{errors[error]}</p>}
          <div className="mt-0 space-y-6">
            <div>
              <SignInWithCredentials />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(5),
});

const SignInWithCredentials = () => {
  return (
    <ZodForm
      schema={LoginSchema}
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={async (values) => {
        const res = await signIn("credentials", { ...values, redirect: false });
        if (res?.error) {
          return { login: res.error };
        }
      }}
    >
      {({
        handleSubmit,
        hasValidationErrors,
        hasSubmitErrors,
        dirtySinceLastSubmit,
        errors,
        submitErrors,
      }) => {
        return (
          <form onSubmit={handleSubmit}>
            <TextField name="email" label="Email" />
            <TextField name="password" label="Password" type="password" />
            <div className="text-sm text-red-400">
              <span> {!dirtySinceLastSubmit && submitErrors?.login}</span>
            </div>
            <button
              type="submit"
              className="btn-primary btn w-full"
              disabled={
                hasValidationErrors ||
                (hasSubmitErrors && !dirtySinceLastSubmit)
              }
            >
              Sign In
            </button>
          </form>
        );
      }}
    </ZodForm>
  );
};
