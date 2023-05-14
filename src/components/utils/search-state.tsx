import { env } from "@/env/client.mjs";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function useSearchState(
  name: string,
  defaultValue: string
): [string, (state: string) => void] {
  const s = useSearchParams();
  const router = useRouter();
  const path = usePathnameWithoutBasePath();
  const lsKey = `${path}#${name}`;
  const [state, setState] = useState(
    s!.get(name) || localStorage.getItem(lsKey) || defaultValue
  );

  useEffect(() => {
    const searchParams = new URLSearchParams(s!.toString());
    searchParams.set(name, state);
    localStorage.setItem(lsKey, state);
    router.push(`${path}?${searchParams.toString()}`);
  }, [state, path, s, name, lsKey, router]);

  return [state, setState];
}

function usePathnameWithoutBasePath() {
  let path = usePathname();
  if (
    env.NEXT_PUBLIC_BASE_PATH &&
    path?.startsWith(env.NEXT_PUBLIC_BASE_PATH)
  ) {
    path = path.replace(env.NEXT_PUBLIC_BASE_PATH, "");
  }
  return path;
}
