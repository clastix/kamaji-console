import type { UseQueryResult } from "@tanstack/react-query";

export function handleQuery<Type>(q: UseQueryResult<Type>) {
  if (q.isLoading) {
    return { Component: <p>loading...</p> };
  }
  if (q.error) {
    return { Component: <p>error</p> };
  }
  return { data: q.data };
}
