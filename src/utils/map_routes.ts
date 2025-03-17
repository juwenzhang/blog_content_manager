import type { RouteType } from '@/types/RouteType.ts'
import { useRouter } from 'vue-router'

export function mapPathToMenu(path: string, localRoutes: RouteType[]) {
  for(const route of localRoutes) {
    if (route.path === path) {
      return route
    }
  }
}

export function mapPathToBreadcrumbs(
  MenuData: Record<string,{name:string, url:string}>[])
    :Array<{name:string, url: string, title: string}> {
  const router = useRouter()?.getRoutes()
  const breadcrumbs:Array<{name:string, url: string, title: string}> = []
  for(const key in MenuData) {
    for(const index in MenuData[key]) {
      if (router?.find(item => item.path === MenuData[key][index].url)) {
        breadcrumbs.push({
          name: MenuData[key][index].name,
          url: MenuData[key][index].url,
          title: key
        })
      }
    }
  }
  return breadcrumbs
}

export const mapLocalRoutesToRouter = (localRoutes: RouteType[], router: ReturnType<typeof useRouter>) => {
  console.log(router)
  for(const route of localRoutes) {
    router.addRoute('home', route)
  }
}
