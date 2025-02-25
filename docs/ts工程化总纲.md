### 前期介绍
* 创建 vue + ts 项目
    * 基于 webpack 的 vue-cli 实现创建项目
        * vue create project_name
    * 基于 vite 的创建 vue 项目流程
        * npm create vite@latest
        * npm init vite@latest
        * npm init vue@latest
* vite 的vue 项目的目录结构
    * .vscode/extension.json
        * 推荐我们安装vscode 的插件
        * 这个是对于 vscode 开发用户者的推荐吧
    * node_modules/
        * 就是我们的存放依赖的地方
    * public/
        * 存放的是我们的站点图标，来自于ui部门的设计吧
    * src/
        * 源代码的存储地方
    * .gitignore
        * 提交代码的时候需要忽略的玩意
    * env.d.ts
        * 类型声明文件吧
        * 类型模块的声明吧
    * index.html
        * 就是我们的 index.html 模板
    * package.json 和 package.lock.json
        * 就是我们的依赖图
    * README.md
        * 就是我们的阅读文档
    * vite.config.ts
        * 类似于我们的 webpack.config.ts 吧
        * 就是实现的是对我们的 vite 进行配置的
    * tsconfig.json
        * 分开的两个
            * tsconfig.app.json
                * 前端 app 的 tsconfig 的配置
            * tsconfig.node.json
                * ssr 服务端的 tsconfig 的配置
        * 可以直接合成为一个 tsconfig.config.json
        * 所以说对于我们的后面的修改配置文件的话
            * 不能够直接修改我们的 tsconfig.json
            * 我们需要的是进行配置我们的
                * tsconfig.app.json
                * tsconfig.node.json
                * tsconfig.config.json
            * 是直接进行修改的这些文件吧，不能够直接修改我们的 tsconfig.json 的呐
    * 依赖缓存清除
        * npm cache clean --force

### 配置项目规范脚手架配置
* .editorconfig
    * 有助于为不同的 idea 编辑器实现维护一致的代码风格
* .prettierrc.json | .prettierrc.ts | .prettierignore
    * 代码格式化配置
* eslint.config.js | eslint.config.ts | eslintrc.js | eslintrc.ts
    * 代码质量的检测，统一规范，跟着官网配置即可
* husky 配置
    * git 提交规范的时候的操作
* commitlint 配置
* stylelint 配置
* vite 配置
* env.d.ts 别名模块配置