# necessary-mall

仿照必要商城界面
## 项目介绍
```shell
本项目是使用Vue构建，仿必要商城移动端界面
基于vant组件库开发
```
### 运行项目
1. 进入apimdh文件夹，打开终端命令行工具，安装依赖并运行虚拟服务器

```shell
cnpm install

node app.js
```

2. 在总文件夹内安装依赖：(当前文件夹名就是项目名)

```shell
cnpm install
```

3. 启动服务

```shell
npm run serve
```

### Vant组件库的使用
1. 引用组件
```shell
在main.js进行配置，按需引用；
如button的引用

import Vue from 'vue';
import { Button } from 'vant';

Vue.use(Button);
```
### sass的使用
1. 全局变量
```shell
在variables.scss设置全局变量；
在组件中即可在scss中直接使用
如
<style lang="scss">
.hello{
  background-color: $color;
}
</style>
```
2. 混合器声明
```shell
在mixin.scss设置全局混合器；
在组件中即可在scss中直接使用
如
<style lang="scss">
.hello{
  background-color: $color;
  @include hline(5px yellow dashed,20px)
}
</style>
```
```