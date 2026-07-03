interface Record { count: number; resetAt: number }
const store = new Map<string, Record>()

export function rateLimit(key: string, max: number, windowMs: number) {
  const now = Date.now()
  // Simple GC — purge if store grows large
  if (store.size > 5000) {
    for (const [k, v] of store) if (now > v.resetAt) store.delete(k)
  }
  const rec = store.get(key)
  if (!rec || now > rec.resetAt) {
    store.set(key, { count: 1, resetAt: now + windowMs })
    return { allowed: true, remaining: max - 1 }
  }
  if (rec.count >= max) return { allowed: false, remaining: 0 }
  rec.count++
  return { allowed: true, remaining: max - rec.count }
}
