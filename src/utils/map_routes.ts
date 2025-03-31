import type { RouteType } from '@/types/RouteType.ts'
import { useRouter } from 'vue-router'

export function mapPathToMenu<T>(
  path: string,
  localRoutes: RouteType[],
): T | undefined | null | RouteType {
  for (const route of localRoutes) {
    if (route.path === path) {
      return route
    }
  }
}

export function mapPathToBreadcrumbs<T>(
  MenuData: Record<string, { name: string; url: string }>[],
): T | Array<{ name: string; url: string; title: string }> {
  const router = useRouter()?.getRoutes()
  const breadcrumbs: Array<{ name: string; url: string; title: string }> = []
  for (const key in MenuData) {
    for (const index in MenuData[key]) {
      if (router?.find((item) => item.path === MenuData[key][index].url)) {
        breadcrumbs.push({
          name: MenuData[key][index].name,
          url: MenuData[key][index].url,
          title: key,
        })
      }
    }
  }
  return breadcrumbs
}

export const mapLocalRoutesToRouter = <T>(
  localRoutes: RouteType[],
  router: ReturnType<typeof useRouter>,
): T | void => {
  for (const route of localRoutes) {
    router.addRoute('home', route)
  }
}
