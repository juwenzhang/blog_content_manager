interface HomeData {
  layout: string,
  redirect: string,
}

export const homeData: Partial<HomeData> = {
  layout: '退出登录',
  redirect: '/login'
}
