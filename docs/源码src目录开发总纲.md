## src 目录
* 该目录主要是我们的源代码区域的
  * 内部的分化肯定也是需要有一定的规范的
  * 这样后可以帮助我们的实现的就是更加规范的开发吧

## 分化把板块
* src/components/
  * 存放的是我们的项目通用组件的封装
* src/assets/
  * 存放的是我们的静态资源的目录
* src/router/
  * npm install vue-router 
  * 项目的路由配置
* src/stores/
  * 项目的状态管理的配置
  * npm install pinia | npm install vuex
* src/utils/
  * 项目公共工具配置
* src/views/
  * 项目中的路由组件
* src/servers/
  * 项目服务器请求数据配置
  * npm install axios | npm install vue-axios
* src/types/
  * ts 文件声明模块
* src/hooks/
  * hooks 封装
* src/plugins/
  * 插件
* src/main.ts
  * 总文件配置

## 了解 RBAC 设计模型
* RBAC 设计模型
  * R roles 角色
  * A access 访问
  * B based 基础
  * C control 控制
* 对于我们的一个后端来说这个模型是必须知晓以及知道的呐
  * 后端数据库的设计的话
    * 用户表
    * 角色表
    * 权限表

## 动态路由注册
* 就是一个我们的路由注册的一个亮点了吧
  * 实现的就是我们的根据用户的基本的权限进行动态的注册我们的路由呢，
  * 这样就可以实现我们的根据不同的用户实现具备访问不同页面的权限控制吧
* 实现动态路由的方式含有
  * 根据角色role的动态路由管理（可以进行使用）
    * 这种用法弊端的就是每次增加一个角色的时候就会含有很多的 key-value 键值对来实现维护我们的项目了吧
  * 根据菜单menu的动态路由管理吧（最佳实现方案）
    * 通过我们的不同用户的菜单进行动态的注册我们的动态路由了吧，这个就是我们的基于菜单的动态路由管理吧
* 对于实现我们的动态路由的话，我们会使用到的特性就是
  * import.meta.glob() 来实现获取得到我们需要注册的文件路径吧