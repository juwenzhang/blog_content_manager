import type { Component } from 'vue'

export interface RouteType {
  name?: string
  path: string
  component: () => Promise<Component>
  children?: RouteType[]
  meta?: {
    title?: string
    icon?: string
    hidden?: boolean
  }
}
