## vite + vue3 + ts + github-action 注意事项
* 为了保证我们的部署后的子路由和我们的仓库名称一致的话需要进行修改的是
  * 路由创建的时候修改我们的 base 域名吧，默认是我们的域名的根下的
  * 修改 vite.config.ts 中的配置文件，base 配置，和路由同样的呐

## webpack 注意事项
* 还是需要进行修改我们的创建路由的时候的配置吧
* 配置 output.publicPath 为我们的子路径吧
* 配置 package.json 中的 homepage 为我们的访问链接吧