---
id: aliyunImg
title: 利用阿里云图床+PicGo插入图片
tags:
  - 阿里云图床
  - PicGo
---

## 引言

### 什么是图床

`云服务器`图床原理:  
![云服务器图床原理](https://fusheng1221.oss-cn-beijing.aliyuncs.com/fusheng-001-img/20220806175149.png "云服务器图床原理")
图床就是一个专门用来存放图片，同时允许图片对外链接的网上空间。可以把它理解为一个远程仓库，每一张图床里的图片都有一个自己的url，在联网环境中，我们可以通过图片对应的url访问到该图片。

### 为什么使用阿里云OSS图床

**1、markdown图片多平台使用问题**  
经常用markdown写博客的小伙伴一定遇到过这种问题，在本地用markdown编辑器编写文章，但是将文章上传到自己搭建的网站上或者csdn、博客园等平台上，文章中的图片都没法加载。  
这是由于我们markdown对于嵌入图片的语法代码是：  
```js
  ![图片alt]（图片地址 "图片名称"）
```
我们在本地编写的博客图片地址是我们本机中的文件目录地址，所以只有在我们本地才能看到这张图片。  
因此，我们需要一个图床来存放我们的图片，并将图片地址更换为图床返回的url。  
**2、阿里云OSS使用起来更稳定**  
PicGo还支持免费的，如sm.ms图床。而通过PicGo+gitee建立图床使用体验并不友好。原因主要有以下三点：  
1. 上传速度满，需要等待；  
2. 上传次数有限制；  
3. 可能有外链防护，把博客上传到 csdn中，通过该图床的外链仍然加载不出图片。  

阿里云对象存储OSS上传速度快，没有上传次数限制。


## 建立个人图床（阿里云对象存储OSS）


### 开通OSS

  1、前往[阿里云官网](https://www.aliyun.com/)，进行注册或者登录。
![](https://fusheng1221.oss-cn-beijing.aliyuncs.com/fusheng-001-img/2befd7763c10ef3d9ca78622900f25d.jpg)

选择对象存储OSS服务。
![](https://fusheng1221.oss-cn-beijing.aliyuncs.com/fusheng-001-img/20220807105756.png)

点击折扣套餐。
![](https://fusheng1221.oss-cn-beijing.aliyuncs.com/fusheng-001-img/85a7558b59d12776d95b0d168c18e19.jpg)
按图购买对象存储OSS资源包，一年仅需9元，还是十分便宜的。
![](https://fusheng1221.oss-cn-beijing.aliyuncs.com/fusheng-001-img/20220807114311.png)

支付成功后，点击管理控制台进入对象存储控制台。
![](https://fusheng1221.oss-cn-beijing.aliyuncs.com/fusheng-001-img/20220807114837.png)

### 创建Bucket

1、进入对象存储控制台后，点击左侧Bucket列表，创建Bucket。
![](https://fusheng1221.oss-cn-beijing.aliyuncs.com/fusheng-001-img/20220807115058.png)

2、**进行Bucket配置**

区域就近原则，选择离你比较近的地方。

**读写权限一定要选择`公共读`**，不然无法访问。
![](https://fusheng1221.oss-cn-beijing.aliyuncs.com/fusheng-001-img/20220807115923.png)
![](https://fusheng1221.oss-cn-beijing.aliyuncs.com/fusheng-001-img/20220807120328.png)

点击确定，我们的Bucket就创建完成了。

### 创建用户AccessKey

1、右上角头像→AccessKey管理
![](https://fusheng1221.oss-cn-beijing.aliyuncs.com/fusheng-001-img/20220807120612.png)

由于我们的图床并不需要那么高的权限，所以为了安全起见，我们选择使用子用户AccessKey即可。
![](https://fusheng1221.oss-cn-beijing.aliyuncs.com/fusheng-001-img/20220807120721.png)

2、创建子用户
![](https://fusheng1221.oss-cn-beijing.aliyuncs.com/fusheng-001-img/20220807120942.png)

填好子用户信息。

**一定要勾选`Open API调用访问`这一选项**，否则将无法进行后续`创建子用户AccessKey`的操作。
![](https://fusheng1221.oss-cn-beijing.aliyuncs.com/fusheng-001-img/20220807121219.png)

3、子用户授权
![](https://fusheng1221.oss-cn-beijing.aliyuncs.com/fusheng-001-img/20220807121954.png)

4、创建子用户AccessKey

进入新建好的用户中，点击创建AccessKey。
![](https://fusheng1221.oss-cn-beijing.aliyuncs.com/fusheng-001-img/20220807122444.png)
![](https://fusheng1221.oss-cn-beijing.aliyuncs.com/fusheng-001-img/20220807122555.png)

然后会弹出如下窗口。
![](https://fusheng1221.oss-cn-beijing.aliyuncs.com/fusheng-001-img/20220807122823.png)

:::tip
建议**下载csv文件**或者**点击复制**以记录下记住你的`accessKeyId`和`accessKeySecret`，后续会用到。
:::

### 获取地域结点信息

打开创建的bucket列表，如图，只需要复制oss-cn-beijing即可，不需要后面的.aliyuncs.com。

后续会使用到该信息。
![](https://fusheng1221.oss-cn-beijing.aliyuncs.com/fusheng-001-img/20220807123859.png)

## 安装并配置PicGo


### 安装PicGo

  在Github中下载[PicGo](https://github.com/Molunerfinn/PicGo/releases)，并点击安装。

:::tip

下载最新正式版本的`PicGo`，现在最新下载版本是`2.3.0`。

:::

选择`仅为我安装`，下一步。
![](https://fusheng1221.oss-cn-beijing.aliyuncs.com/fusheng-001-img/20220807124109.png)
选择安装路径。
![](https://fusheng1221.oss-cn-beijing.aliyuncs.com/fusheng-001-img/20220807124331.png)
安装完成。
![](https://fusheng1221.oss-cn-beijing.aliyuncs.com/fusheng-001-img/20220807124412.png)
确认隐私协议。
![](https://fusheng1221.oss-cn-beijing.aliyuncs.com/fusheng-001-img/20220807124433.png)

### 配置PicGo

在电脑桌面右下角的PicGo图标打开软件。
![](https://fusheng1221.oss-cn-beijing.aliyuncs.com/fusheng-001-img/116e498b4daad1826f58399b8bbb5d6.jpg)

在图床设置里面选择阿里云OSS。
![](https://fusheng1221.oss-cn-beijing.aliyuncs.com/fusheng-001-img/59c3e80c31a7e7190032fb7696d1362.jpg)
![](https://fusheng1221.oss-cn-beijing.aliyuncs.com/fusheng-001-img/24da456241ad783e8f3ea99e8117ffc.jpg)

依照以下步骤填写信息：

1. 设定`Keyld`：填写刚刚获得的AccessKeyID

2. 设定`KeySecret`：填写AccessKeyIDSecret

3. 设定储存空间名：填写`bucket`名称，这里填写的是bucket名称，不是浏览器里的域名。

4. 确认存储区域：填写你的地域节点，注意复制的格式。

5. 指定存储路径：其实就是自定义一个文件夹的名字，以/结尾，它会自动在你的bucket里面创建一个文件夹，并把图片上传进去。

![](https://fusheng1221.oss-cn-beijing.aliyuncs.com/fusheng-001-img/20220807125130.png)

全部填写完成，就可以点击确定了，也可以将阿里云OSS设置为我们的默认图床。

:::tip 参考文章链接

[https://www.wkeyu.cn/169.html](https://www.wkeyu.cn/169.html)

:::