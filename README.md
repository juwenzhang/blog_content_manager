## blog_content_manager
### 当前存在问题
* 当然该项目的话动态路由的数据管理还有一定的困难吧
* 因为开发初期的项目设计的存在，所以说现在的数据管理一团糟，但是动态路由的核心思想还是可以学习学习的
  * 难点就在于处理 localStorage 和 状态管理之间存在的些许问题吧
  * 开发中主要使用到的 api 含有我们的: 
    * useRouter().hasRoute() 判断是否存在路由
    * useRouter().addRoute() 动态添加路由
    * useRouter().removeRoute() 动态删除路由
    * useRoute().meta.isDynamicRoute 判断是否是动态路由
  * 为什么这里会有我们的 localStorage 缓存的参与呐？？
    * 主要的就是为了解决我们的页面刷新导致的一些动态路由缺失的问题吧