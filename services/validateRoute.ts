export function isUrlValid(path: string): Promise<boolean> {
  const pathParts = path.split('/').filter((part) => part != '')
  return Promise.resolve(pathParts.length <= 1)
}
