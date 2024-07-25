export default async function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> {
  const res = await fetch(`https://api.github.com/${input}`, init)
  return res.json()
}
