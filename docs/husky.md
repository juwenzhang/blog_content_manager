# husky 的基本配置
* 这个是前端工程化的一个重要的步骤之一
* 这个就和我们的前端的工程化有一定的关系和联系了吧
* 主要的就是为我们的开发流程中每一步进行对应的赋能操作吧

## 前端工程化流程中我们需要做的有哪些呐
* eslint + prettier + commitlint + lint-staged + git-hooks + i18n 等等的配置吧
* 同时还需要具备我们的代码的 code review 的检查吧
  * husky 可以帮助我们实现的是在 git 操作的每个阶段实现进行自动化的执行某些特定的操作吧
  * vue 在进行配置的话就直接使用我们的 format prettier 来实现代码的规范型吧，因为 eslint 对 vue 的文件命名有一定的要求的呐
    * 这个问题在一个成体项目中很难在进行修改了呐
    * 'vue/multi-word-component-names': 'off',
      'vue/valid-template-root': 'off', 
    * 如果在 vue 中使用的话，将上面的两个功能给 off 了吧
    * 配合我们的 commitlint commitizen eslint prettier stylelint lint-stage 结合配合使用吧
    * npx commitizen init cz-conventional-changelog -D --save-exact