import toast from "react-hot-toast";

export default async function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> {
  const res = await fetch(`https://api.github.com/${input}`, init)

  if (!res.ok) {
    const error: any = new Error('An error occurred while fetching the data.')
    // Attach extra info to the error object.
    error.info = await res.json()
    error.status = res.status
    toast.error('An error occurred while fetching the data.')
    throw error
  }
  return res.json()
}
