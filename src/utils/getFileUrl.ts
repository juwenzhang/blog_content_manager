export function getFileUrl<T>(fileName: string, importConfig:string):T {
  return new URL(fileName, importConfig as string) as unknown as T
}
