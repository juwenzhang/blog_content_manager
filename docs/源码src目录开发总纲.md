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