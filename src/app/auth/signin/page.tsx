"use client";

import { useSession } from "@/auth/client";
import { useLogin } from "@/auth/client/hooks";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { z } from "zod";
import { ClastixLogo } from "../../../components/clastix/logos/logo";
import { TextField } from "../../../components/forms/text-field";
import { ZodForm } from "../../../components/zod-form/form";
import { TRPCClientError } from "@trpc/client";
import clsx from "clsx";
import {Button} from "@/components/ui/Button";

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
    <div className="flex min-h-screen w-screen flex-col py-12 sm:px-6 lg:px-8">
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-background-modalPanel px-4 py-8 shadow sm:rounded-lg sm:px-10">
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
  const login = useLogin();

  return (
    <ZodForm
      schema={LoginSchema}
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={async (values) => {
        try {
          await login(values.email, values.password)
        } catch (error) {
          if (error instanceof TRPCClientError) {
            return { login: error.message };
          }
          return { login: "unknown error" };
        }
      }}
    >
      {({ handleSubmit, dirtySinceLastSubmit, submitErrors, submitting }) => {
        return (
          <form onSubmit={handleSubmit}>
            <TextField name="email" label="Email" className="bg-background-input"/>
            <TextField name="password" label="Password" type="password" />
            <Button label={'Sign In'} fullWidth={true} loading={submitting} type={"submit"}/>
            <div className="h-12 text-sm text-red-400">
              {!dirtySinceLastSubmit && submitErrors?.login && (
                <p className="my-4 rounded bg-red-400 py-2 text-center text-white ring-2 ring-red-600">
                  {submitErrors.login}
                </p>
              )}
            </div>
          </form>
        );
      }}
    </ZodForm>
  );
};
