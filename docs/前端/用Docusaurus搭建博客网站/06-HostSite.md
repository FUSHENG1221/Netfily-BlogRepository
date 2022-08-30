---
id: HostSite
title: 托管你的站点
tags: 
  - Docusaurus
  - React
  - Vercel
---

## 创建仓库与分支

创建仓库时如下图设置后，点击`Create repository`。

![](https://fusheng1221.oss-cn-beijing.aliyuncs.com/fusheng-001-img/20220830094943.png)

创建成功！

![](https://fusheng1221.oss-cn-beijing.aliyuncs.com/fusheng-001-img/20220830095102.png)

然后创建一个新分支，名叫 `gh-pages`。

![](https://fusheng1221.oss-cn-beijing.aliyuncs.com/fusheng-001-img/20220830101454.png)

将 `Branch` 切换为刚刚创建的分支 `gh-pages` 。

![](https://fusheng1221.oss-cn-beijing.aliyuncs.com/fusheng-001-img/20220830101840.png)

完成创建仓库及分支🎊🎊

## Netlify部署

### 注册Netlify

进入[Netlify官网](https://www.netlify.com/)，点击右上角进行账户注册。这里推荐关联Github账号。

![](https://fusheng1221.oss-cn-beijing.aliyuncs.com/fusheng-001-img/20220829085037.png)

![](https://fusheng1221.oss-cn-beijing.aliyuncs.com/fusheng-001-img/20220829085127.png)

### 绑定仓库和构建

注册成功后，点击 `Skip this step for now`进入Netlify的主页,如下图。

![](https://fusheng1221.oss-cn-beijing.aliyuncs.com/fusheng-001-img/20220829090919.png)

在主页的Sites部分选择 `Import from Git`。

![](https://fusheng1221.oss-cn-beijing.aliyuncs.com/fusheng-001-img/20220829091049.png)

选择网站源码托管的代码仓库类型，支持Github、Gitlab、Bitbucket以及Azure DevOps，选择`GitHub`。

![](https://fusheng1221.oss-cn-beijing.aliyuncs.com/fusheng-001-img/20220830092853.png)

然后会进入Github的认证授权页面，点击`Authorize Netlify by Netlify`。

![](https://fusheng1221.oss-cn-beijing.aliyuncs.com/fusheng-001-img/20220830093014.png)

第一次使用需要在github中安装netlfy，点击`Configure the Netlify app on GitHub`。  
选择自己的github账户。

![](https://fusheng1221.oss-cn-beijing.aliyuncs.com/fusheng-001-img/cc8f83893aa911bacfa08eba516eaa4.jpg)

点击Install。

![](https://fusheng1221.oss-cn-beijing.aliyuncs.com/fusheng-001-img/57e753b2d9275f2b10d79ba9c5b2ab3.jpg)

安装完成后就可以看到github中的仓库了。然后在下方选择一个想要使用的仓库：

![](https://fusheng1221.oss-cn-beijing.aliyuncs.com/fusheng-001-img/20220830100441.png)

选择部署的用户以及分支，点击`Deploy site`。

![](https://fusheng1221.oss-cn-beijing.aliyuncs.com/fusheng-001-img/20220830114336.png)

构建成功。

![](https://fusheng1221.oss-cn-beijing.aliyuncs.com/fusheng-001-img/20220830114412.png)

### 自定义域名

点击“域设置(`Domain settings`)”

![](https://fusheng1221.oss-cn-beijing.aliyuncs.com/fusheng-001-img/20220830114431.png)

选择`Edit site name`。

![](https://fusheng1221.oss-cn-beijing.aliyuncs.com/fusheng-001-img/20220830114457.png)

修改名字时，域名会随之改变。

![](https://fusheng1221.oss-cn-beijing.aliyuncs.com/fusheng-001-img/20220830114538.png)

然后就能访问啦！🎉🎉