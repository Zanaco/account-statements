export const deserialize = <T = unknown>(object: T): T =>
  JSON.parse(JSON.stringify(object))

export const querify = (object: Record<string, any>) =>
  Object.keys(object)
    .reduce((a, k) => {
      a.push(`${k}=${encodeURIComponent(object[k])}`)
      return a
    }, [] as string[])
    .join('&')
