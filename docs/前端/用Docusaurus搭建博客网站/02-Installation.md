---
id: Installation
title: 安装 Docusaurus
tags: 
  - React
  - Docusaurus
---

## 安装或检查Node.js

Docusaurus要求您的电脑配置有Node.js `v16.14` 或以上版本，如果你没有安装Nodejs，请参考[安装Node.js和NPM](https://wq-fusheng.vercel.app/docs/%E5%89%8D%E7%AB%AF/%E5%89%8D%E7%AB%AF%E6%8A%80%E5%B7%A7/InstallNodeJs)。

然后打开cmd检查安装情况：

```
node -v
npm -v
```

如果呈现了v16.14以上版本，就说明Node.js部署好了。

## 安装Docusaurus

使用命令行工具可以帮助你快速简单地安装 Docusaurus 并搭建网站框架。新建一个空文件夹并cd这个文件夹，执行下面的指令，它会创建一个包含模板文件的新目录。（操作提示，在文件夹空白处按住上档键Shift和鼠标右键，打开PowerShell窗口，并且请准备好Ladder）。

![](https://fusheng1221.oss-cn-beijing.aliyuncs.com/fusheng-001-img/20220809224954.png)

```
npm init docusaurus
```

接着，根据命令窗口提示，输入信息，创建项目。

![](https://fusheng1221.oss-cn-beijing.aliyuncs.com/fusheng-001-img/20220809225002.png)

选择`classic`。

如果你不想使用TypeScript作为脚本语言，请输入`N`。

![](https://fusheng1221.oss-cn-beijing.aliyuncs.com/fusheng-001-img/20220809225008.png)

选择`npm`为包管理器。

  - 初始化项目需要一段时间。

安装完成。

![](https://fusheng1221.oss-cn-beijing.aliyuncs.com/fusheng-001-img/20220809225045.png)

## 查看目录结构

在上述过程中，我们将项目命名为了`myblog`，那么文件夹工程如下：

```
myblog
├── blog    // 存放博客
│   ├── 2019-05-28-hola.md  // 必须以时间-名称命名
│   ├── 2019-05-29-hello-world.md
│   └── 2020-05-30-welcome.md
├── docs    // 存放笔记文档
│   ├── doc1.md // 以名称命名
│   ├── doc2.md
│   ├── doc3.md
│   └── mdx.md
├── node_modules    // 依赖文件夹
├── src // 代码控制文件
│   ├── css 
│   │   └── custom.css  // 全局样式文件，可覆盖默认的样式
│   └── pages
│       ├── styles.module.css   // 主页样式文件
│       └── index.js    // 主页文件
├── static  // 资源存放
│   └── img
├── docusaurus.config.js    // 博客设置文件
├── package.json    // 包管理文件
├── README.md   // Readme文件
└── sidebars.js // 侧边管理文件（自动生成）
```

![](https://fusheng1221.oss-cn-beijing.aliyuncs.com/fusheng-001-img/20220809225345.png)

## 运行项目

使用Visual Studio工程打开`myblog`文件夹。

  - 拉起终端，输入下面的指令，运行代码。

```
npm start
```

![](https://fusheng1221.oss-cn-beijing.aliyuncs.com/fusheng-001-img/20220809225500.png)

运行成功：

![](https://fusheng1221.oss-cn-beijing.aliyuncs.com/fusheng-001-img/20220809225505.png)

运行结果：

![](https://fusheng1221.oss-cn-beijing.aliyuncs.com/fusheng-001-img/20220809225550.png)

这样就完成了！