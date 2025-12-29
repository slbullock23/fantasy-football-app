const API_BASE = "http://localhost:4000/api";

export async function apiFetch<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const res = await fetch(`${API_BASE}${endpoint}`, {
    headers: { "Content-Type": "application/json", ...(options.headers || {}) },
    ...options
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || "API request failed");
  }

  return res.json();
}