export function isPlainObject(v: unknown): v is object {
    return typeof v === 'object' && !(v instanceof Array)
}

export function merge<T>(current: T, update: Partial<T>): T {
    if (update instanceof Array) {
        return (update as any) as T
    }

    if (isPlainObject(current) && isPlainObject(update)) {
        return (Object.entries(update).reduce(
            (prev, [k, v]) => {
                if (k in prev) {
                    prev[k] = merge(prev[k], v as T)
                } else {
                    prev[k] = v
                }
                return prev
            },
            { ...current } as Record<string, unknown>
        ) as any) as T
    }

    return update as T

}