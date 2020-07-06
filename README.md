# 诸葛工程基础架构

## 项目构建
项目引用了私服包 **@jd/op-vue-ui**，私服地址 [http://npm.m.jd.com/](http://npm.m.jd.com/)，项目初始化时，推荐安装私有客户端jnpm来替代npm进行私有库的安装

### 下载依赖
```
npm install
```

### 下载jd私服包依赖
```
jnpm install @jd/op-vue-ui
```

### 编译并热启动开发环境
```
npm run dev
```
### 编译打包开发测试环境
```
npm run dev-build
```

### 编译调用代理测试环境
```
npm run dev-test
```

### 编译调用本地代理测试环境
```
npm run dev-test-host
```

### 编译打包生产环境
```
npm run build
```

### 根据eslint规则提示和修复文件
```
npm run lint
```

### 跑单元测试
```
npm run test:unit
```

####脚手架中使用到的技术
* JavaScript框架 [Vue 2.x](https://cn.vuejs.org/v2/guide/installation.html)
* JavaScript标准 [ES6](http://es6.ruanyifeng.com/)
* Vue路由管理 [Vue Router](https://router.vuejs.org/)
* Vue状态管理 [Vuex](https://vuex.vuejs.org/)
* 基于的脚手架版本 [Vue CLI 3](https://cli.vuejs.org/zh/guide/)
* 项目构建工具 [Webpack](https://webpack.docschina.org)
* 前端UI库 [iView](https://www.iviewui.com/)
* 国际化方案 [vue-i18n](http://kazupon.github.io/vue-i18n/)
* 前端数据mock方案 [mockjs](http://mockjs.com/)
* 前端代码规范(standard标准) [eslint](http://eslint.cn/docs/rules/)
* 前后端http交互API [axios](https://github.com/axios/axios)
* 图表组件库推荐(基于echarts和vue2封装) [v-charts](https://v-charts.js.org/#/)


### master 分支 
**单页面应用**

```
+-- public
|   +-- favicon.ico
|   +-- index.html  默认的模板文件，将零智需要的js，css引入到这里
+-- src
|   +-- assets		可放入静态资源
|   +-- components	公共组件
|   +-- i18n		国际化
|   +-- mock		前端mock数据
|   +-- request		请求模块
|   +-- router		router统一管理
|   +-- store		store
|   +-- utils		工具
|   +-- views		具体的页面
|   +-- App.vue		入口vue
|   +-- main.js		入口js文件
+-- tests			前端测试模块
|   +-- unit
+-- .browserslistrc
+-- .env.development	开发环境配置文件，运行run命令时会加载此文件
+-- .env.production		线上环境配置文件，运行build命令会加载此文件
+-- .eslintrc.js
+-- .postcssrc.js
+-- babel.config.js
+-- package-lock.json
+-- package.json
+-- vue.config.js  webpack的配置文件，相关配置可以写在这里
```