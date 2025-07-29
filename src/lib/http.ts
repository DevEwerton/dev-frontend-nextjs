const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? "https://fakestoreapi.com";

type Opt = Omit<RequestInit, "body"> & { body?: unknown };

export async function http<T>(path: string, opt: Opt = {}): Promise<T> {
  const res = await fetch(`${BASE_URL}${path}`, {
    ...opt,
    headers: { "Content-Type": "application/json", ...(opt.headers || {}) },
    body: opt.body !== undefined ? JSON.stringify(opt.body) : undefined,
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return (await res.json()) as T;
}
