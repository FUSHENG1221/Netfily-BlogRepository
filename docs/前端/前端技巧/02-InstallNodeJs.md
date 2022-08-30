---
id: InstallNodeJs
title: 安装Node.Js和NPM
tags: 
  - node.js
  - npm
---

## 先来了解一下Node.js和NPM吧

### Node.js

简单的说, Node.js 就是运行在服务端的JavaScript。他为前端程序员提供了友好的支持。对于不懂像 PHP、Python 或 Ruby 等动态编程后端开发语言，然后想创建自己的服务的前端程序员，Node.js 是一个非常好的选择。

### NPM

NPM是随同NodeJS一起安装的包管理工具，能解决NodeJS代码部署上的很多问题，常见的使用场景有以下几种：

1. 允许用户从NPM服务器下载别人编写的第三方包到本地使用。
2. 允许用户从NPM服务器下载并安装别人编写的命令行程序到本地使用。
3. 允许用户将自己编写的包或命令行程序上传到NPM服务器供别人使用。

也就是说，安装了NodeJs自然而然就部署了npm。

## 下载并安装NodeJs

首先去[node官网](https://nodejs.org/zh-cn/)下载最新版本的LTS（长期支持稳定）版本，下载下来后，双击安装包，一步一步安装即可；

![](https://fusheng1221.oss-cn-beijing.aliyuncs.com/fusheng-001-img/20220809213623.png)

:::info 安装注意事项
选择安装路径：（建议安装在D盘）

![](https://fusheng1221.oss-cn-beijing.aliyuncs.com/fusheng-001-img/20220809213826.png)

选择“添加到环境变量”（这个很重要）

![](https://fusheng1221.oss-cn-beijing.aliyuncs.com/fusheng-001-img/20220809213826.png)
:::

## npm环境配置

:::note
**说明**：这里的环境配置主要配置的是npm安装的全局模块所在的路径，以及缓存cache的路径，之所以要配置，是因为以后在执行类似：npm install package [-g]（后面的可选参数-g，g代表global全局安装的意思）的安装语句时，会将安装的模块安装到【C:\Users\用户名\AppData\Roaming\npm】路径中，占C盘空间。

**例如**：我希望将全局模块所在路径和缓存路径放在我node.js安装的文件夹中，则在我安装nodejs的文件夹下面创建两个文件夹`node_global`及`node_cache`如下图。
:::

1、 找到nodejs 安装的位置，在node_modeles同级目录新增两个文件夹 （如下图所示）

![](https://fusheng1221.oss-cn-beijing.aliyuncs.com/fusheng-001-img/20220809215945.png)

2、 创建完两个空文件夹之后，打开cmd命令窗口，分别输入以下命令：

```js
// 设置执行npm install package -g 的安装位置
npm config set prefix "D:\NodeJs\node_global"
// 设置缓存位置
npm config set cache "D:\NodeJs\node_cache"
```

![](https://fusheng1221.oss-cn-beijing.aliyuncs.com/fusheng-001-img/20220809221035.png)

3、 右键我的电脑点开属性

![](https://fusheng1221.oss-cn-beijing.aliyuncs.com/fusheng-001-img/20220809221229.png)

4、 高级系统设置 ——> 高级 ——> 环境变量

![](https://fusheng1221.oss-cn-beijing.aliyuncs.com/fusheng-001-img/20220809221418.png)

5、 系统变量下面点击新建

![](https://fusheng1221.oss-cn-beijing.aliyuncs.com/fusheng-001-img/20220809222003.png)

6、 添加变量名NODE_PATH 和变量值（nodejs安装位置的node_modules文件夹）

![](https://fusheng1221.oss-cn-beijing.aliyuncs.com/fusheng-001-img/3f475a555fb6359b2b12e1fef96909d.jpg)

7、 再找到用户变量中的Path并进入

![](https://fusheng1221.oss-cn-beijing.aliyuncs.com/fusheng-001-img/20220809222355.png)

8、 按图中所示执行对应操作

![](https://fusheng1221.oss-cn-beijing.aliyuncs.com/fusheng-001-img/20220809222655.png)
![](https://fusheng1221.oss-cn-beijing.aliyuncs.com/fusheng-001-img/20220809222807.png)

9、 到这里npm的环境就配置完毕了~

## 检查配置

安装完成后，需要检查是否正常：

在windows开始图标上右键，打开PowerShell：

![](https://fusheng1221.oss-cn-beijing.aliyuncs.com/fusheng-001-img/20220809214503.png)

分别输入下面的指令。
检查环境变量配置：

```
echo %PATH% 
```

检查node版本：

```
node -v
```
检查npm：

```
npm -v
```

如果如下图，说明一切正常：

![](https://fusheng1221.oss-cn-beijing.aliyuncs.com/fusheng-001-img/20220809223144.png)

![](https://fusheng1221.oss-cn-beijing.aliyuncs.com/fusheng-001-img/20220809223530.png)

![](https://fusheng1221.oss-cn-beijing.aliyuncs.com/fusheng-001-img/20220809223752.png)

:::info 参考文章链接
1、[nodejs下载安装、npm环境配置、yarn下载与环境配置](https://blog.csdn.net/qq_44738350/article/details/117909398?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522166005307616781432957769%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&request_id=166005307616781432957769&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~top_click~default-2-117909398-null-null.142^v40^new_blog_pos_by_title,185^v2^control&utm_term=nodejs%E5%AE%89%E8%A3%85%E5%8F%8A%E7%8E%AF%E5%A2%83%E9%85%8D%E7%BD%AEnpm&spm=1018.2226.3001.4187)

2、https://www.cnblogs.com/liluxiang/p/9592003.html
:::

:::note 
其中部分照片引用于网络，若有侵权，可删。
:::