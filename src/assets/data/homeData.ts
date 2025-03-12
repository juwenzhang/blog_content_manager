import {ADMIN_HOME_DATA, USER_HOME_DATA} from '@/constant'

type homeDataType = Record<string, Record<string, Array<{name:string, url:string}>>> | Record<string, []>

export const homeData: homeDataType = {
  [ADMIN_HOME_DATA]: {
    "系统总览": [
      {
        name: "核心技术",
        url: "/home/analysis/dashboard"
      },
      {
        name: "监控中心",
        url: "/home/analysis/overview"
      }
    ],
    "系统管理": [
      {
        name: "用户管理",
        url: "/home/system/user"
      },
      {
        name: "部门管理",
        url: "/home/system/department"
      },
      {
        name: "角色管理",
        url: "/home/system/role"
      },
      {
        name: "菜单管理",
        url: "/home/system/menu"
      },
    ],
    "商品管理": [
      {
        name: "商品分类",
        url: "/home/goods/category"
      },
      {
        name: "商品信息",
        url: "/home/goods/info"
      },
    ],
    "随便聊聊": [
      {
        name: "随便聊聊",
        url: "/home/chat/chat"
      },
      {
        name: "故事列表",
        url: "/home/chat/story"
      }
    ]
  },
  [USER_HOME_DATA]: {
    "系统总览": [
      {
        name: "核心技术",
        url: "/home/analysis/dashboard"
      },
      {
        name: "监控中心",
        url: "/home/analysis/overview"
      }
    ],
  }
}
