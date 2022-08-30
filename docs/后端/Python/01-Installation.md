---
id: Installation
title: 安装 Python及Python IDE
tags: 
  - Python
---

## 下载Python的exe文件

点击进入[Python官网](https://www.python.org/)。  

点击Downloads。

![](https://fusheng1221.oss-cn-beijing.aliyuncs.com/fusheng-001-img/78b5c1e65fd5c1ee19b7e802aa572e6.jpg)

点击Download Python 3.10.6。（即最新版本的Python）

![](https://fusheng1221.oss-cn-beijing.aliyuncs.com/fusheng-001-img/de02225fb78b440e941bb71776672a2.jpg)

:::tip
3.9版本（包括3.9）以上的无法在win7上安装。
:::

下载完成后，找到下载好的`exe文件`，点击开始安装。

![](https://fusheng1221.oss-cn-beijing.aliyuncs.com/fusheng-001-img/15a85dffb8379de56924ef04cfba5e3.jpg)

## 安装Python流程

### 安装路径选项

​ `Install Now` ：默认安装（直接安装在C盘，并且勾选所有组件并下载）

`​ Customize installation`：自定安装（可选择安装路径和组件）

​ Install launcher for all users(recommended) （默认勾选）

​ Add Python to PATH （一定要勾选，添加Python解释器的安装路径到系统变量，目的：为了操作系统更快的找到Python解释器）

![](https://fusheng1221.oss-cn-beijing.aliyuncs.com/fusheng-001-img/3a862aa06afc8d115c94943c66c5144.jpg)

### 可选功能

|   名称    |   作用    |
|   :--:  |   :--:  |
|Documentation	|安装Python官方文档|
|Pip	|安装Python包管理器，可下载安装Python包|
|tcl/tk and IDLE	|安装TK库和IDLE编辑器（开发环境）|
|Python test suite	|安装标准库和测试套件|
|Py launcher	|py 尾缀文件都以python解释器执行|
|For all users	|所有用户都可使用|

勾选全部选项。

![](https://fusheng1221.oss-cn-beijing.aliyuncs.com/fusheng-001-img/da24d0112bacfff996274bc6a5e6c94.jpg)

### 高级功能

|   名称    |   作用    |
|   :--:  |   :--:  |
|Install for all users	|所有用户都可使用|
|Associate files with Python (requires the py launcher)	|将 py文件和python关联（需要python启动器）|
|Create shortcuts for installed application	|为应用程序创建快捷方式|
|Add Python to envirounment variables	|添加Python到虚拟环境|
|Precompile standard library	|预编译标准库|
|后两个都是Debug相关工具	|有pycharm这个IDE就不需要了|

![](https://fusheng1221.oss-cn-beijing.aliyuncs.com/fusheng-001-img/eaeefbb4952aa31282bed79c3add948.jpg)

### 安装完成

点击“Disable path length limit”（“关闭路径长度”），在弹出来的窗口点击“是”。

![](https://fusheng1221.oss-cn-beijing.aliyuncs.com/fusheng-001-img/662540e9d4722b01a56f4c3d0d36e4a.jpg)

如此，安装完成。

![](https://fusheng1221.oss-cn-beijing.aliyuncs.com/fusheng-001-img/4e69cf9ef7387b20525af05d757a61c.jpg)

### 验证是否安装成功

按win+R进入运行，输入cmd。

![](https://fusheng1221.oss-cn-beijing.aliyuncs.com/fusheng-001-img/734e8e1da18d13cce6352a51362feef.jpg)

输入python并回车。

如下图就是安装成功了。（会显示安装的版本）

![](https://fusheng1221.oss-cn-beijing.aliyuncs.com/fusheng-001-img/3b7e5df03a3060b3dacf511b96a438b.jpg)

## Pycharm下载与安装

 PyCharm是一种`Python IDE`（Integrated Development Environment，集成开发环境）。

 进入[PyCharm下载网站](https://www.jetbrains.com/pycharm/)，我们会看到如下界面：随便点击一个Download就可以。

 ![](https://fusheng1221.oss-cn-beijing.aliyuncs.com/fusheng-001-img/20220814134527.png)

 如下图，根据自己电脑的操作系统进行选择。
 
`professional` ：专业版，收费，功能更强；  
`community` ：社区版，免费，足够使用，*推荐*

![](https://fusheng1221.oss-cn-beijing.aliyuncs.com/fusheng-001-img/20220814135033.png)

找到下载好的.exe文件后，双击运行安装包，点击Next。

![](https://fusheng1221.oss-cn-beijing.aliyuncs.com/fusheng-001-img/20220814135557.png)

选择安装路径，点击Next。

![](https://fusheng1221.oss-cn-beijing.aliyuncs.com/fusheng-001-img/20220814135640.png)

勾上环境必选项，然后选择Next。

![](https://fusheng1221.oss-cn-beijing.aliyuncs.com/fusheng-001-img/20220814140043.png)

直接点击下载。

![](https://fusheng1221.oss-cn-beijing.aliyuncs.com/fusheng-001-img/20220814140244.png)

点击Finish和稍后重启。

![](https://fusheng1221.oss-cn-beijing.aliyuncs.com/fusheng-001-img/20220814140438.png)

双击桌面Pycharm图标，勾选同意，点击Continue下一步。

![](https://fusheng1221.oss-cn-beijing.aliyuncs.com/fusheng-001-img/20220814140655.png)

选择`Don't send`。

![](https://fusheng1221.oss-cn-beijing.aliyuncs.com/fusheng-001-img/20220814140756.png)

## PyCharm基本使用

### 创建工程

先点击Projects，再点击New Project。

![](https://fusheng1221.oss-cn-beijing.aliyuncs.com/fusheng-001-img/20220814143222.png)

![](https://fusheng1221.oss-cn-beijing.aliyuncs.com/fusheng-001-img/20220814143546.png)

关于上图的一些名词解释：

|   名词(从上到下)    |   解释    |
|   :--:    |   :--:    |
|Location（第一个）|Python代码的存放地址|
|New environment using|将创建新的虚拟机环境|
|Location（第二个）|虚拟环境存放路径|
|Base interpreter|本地Python解释器路径|
|Inheritglobal site-packages|包全局共享|
|Make available to all projects|向所有项目提供|
|Previously configured interpreter|现有配置解释器|
|Interpreter|本地Python解释器路径|
|Create a main.py welcome script|创建脚本测试|

设置Python代码存放地址->使用现有Python解释器->添加解释器

![](https://fusheng1221.oss-cn-beijing.aliyuncs.com/fusheng-001-img/20220814145233.png)

![](https://fusheng1221.oss-cn-beijing.aliyuncs.com/fusheng-001-img/ceb7d08f92d63e5594e9c82aaa291df.png)

配置完成，点击创建工程。

![](https://fusheng1221.oss-cn-beijing.aliyuncs.com/fusheng-001-img/20220814145916.png)

### 在工程中新建python文件

方法一：右键工程->选择`New`（新建）->选择`Python File`（Python文件）->输入文件名即可

![](https://fusheng1221.oss-cn-beijing.aliyuncs.com/fusheng-001-img/a89f8413cda0c9b5f53139d34cf9264.jpg)

方法二：在最上方工具栏中点击`File`（文件）->选择`New`（新建）->选择`Python File`（Python文件）->输入文件名即可

![](https://fusheng1221.oss-cn-beijing.aliyuncs.com/fusheng-001-img/20220814150858.png)

![](https://fusheng1221.oss-cn-beijing.aliyuncs.com/fusheng-001-img/20220814151915.png)

### 运行文件

1、在需要运行的文件页面鼠标右键，点击run（/运行）'XXXX'（XXXX为需要运行的文件名）。此方法适用于任何python文件。

![](https://fusheng1221.oss-cn-beijing.aliyuncs.com/fusheng-001-img/20220814151410.png)

2、点击如图运行配置，将`main`更改为`Current File`（当前文件），再点击图中的绿色小三角形，即可运行当前页面的Python文件。

![](https://fusheng1221.oss-cn-beijing.aliyuncs.com/fusheng-001-img/20220814151529.png)

### PyCharm汉化步骤

找到左上角File（文件），点击Setting…（设置）

![](https://fusheng1221.oss-cn-beijing.aliyuncs.com/fusheng-001-img/20220814153104.png)

点击 Plugins（插件） ，进入界面，搜索框搜索 chinese , 出现下图所示的插件，进行下载安装。

![](https://fusheng1221.oss-cn-beijing.aliyuncs.com/fusheng-001-img/20220814153215.png)

重启PyCharm软件，即可看到汉化的页面。

![](https://fusheng1221.oss-cn-beijing.aliyuncs.com/fusheng-001-img/20220814160648.png)

### 修改主题

默认是黑色主题。  
要修改主题的话，可以在页面右上角，点击“齿轮”。  
然后点击“设置”。

![](https://fusheng1221.oss-cn-beijing.aliyuncs.com/fusheng-001-img/20220814161458.png)

选择想要的主题。  
当鼠标处在某一主题上时，可以预览效果。

![](https://fusheng1221.oss-cn-beijing.aliyuncs.com/fusheng-001-img/20220814162030.png)

### 修改默认字体和大小

打开`设置`->点击`编译器`->点击`字体`->修改字体类型以及字体大小。  
右边可以在修改的同时观看修改后的效果图。

![](https://fusheng1221.oss-cn-beijing.aliyuncs.com/fusheng-001-img/20220814162350.png)

### 通过快捷键快速设置字体大小

打开`设置`->在搜索框内输入`增加`->鼠标右键点开编辑器操作中的“在所有编辑器中增加字体大小”->选择添加鼠标快捷键

![](https://fusheng1221.oss-cn-beijing.aliyuncs.com/fusheng-001-img/20220814180915.png)

按Ctrl+鼠标滚轮向上，即可设置好增加字体大小快捷键。

![](https://fusheng1221.oss-cn-beijing.aliyuncs.com/fusheng-001-img/20220814181213.png)

相反地，再在`设置`的搜索框内输入`减小`>鼠标右键点开编辑器操作中的“在所有编辑器中减小字体大小”->选择添加鼠标快捷键

![](https://fusheng1221.oss-cn-beijing.aliyuncs.com/fusheng-001-img/20220814181524.png)

按Ctrl+鼠标滚轮向下，即可设置好减小字体大小快捷键。

![](https://fusheng1221.oss-cn-beijing.aliyuncs.com/fusheng-001-img/20220814181541.png)

如此操作完成后，之后就可以通过Ctrl键和鼠标滚轮调节字体大小。

:::tip
此操作无法改变字体类型，需要改变字体类型请参考上述`修改默认字体和大小`。
:::

### 下载翻译插件

翻译插件有利于我们在写代码的时候，可以将我们不认识的单词或者注释进行翻译，便于我们理解代码。

点击进入设置中的插件->在搜索框内输入“`translation`”->安装下图中一样的翻译插件

![](https://fusheng1221.oss-cn-beijing.aliyuncs.com/fusheng-001-img/20220814182628.png)

`使用方法`：选中需要翻译的文字，鼠标右键，点击翻译即可。

![](https://fusheng1221.oss-cn-beijing.aliyuncs.com/fusheng-001-img/20220814182959.png)

![](https://fusheng1221.oss-cn-beijing.aliyuncs.com/fusheng-001-img/20220814183129.png)

### 常用快捷键

|   快捷键  |   作用    |
|   :--:    |   :--:    |
|ctrl+alt+s|打开软件设置|
|ctrl+d|复制当前行代码|
|shfit+alt+上/下|将当前行代码上移/下移|
|ctrl+shfit+f10|运行当前代码文件|
|shfit+f6|重命名文件（需要先选中文件）|
|ctrl+a|全选|
|ctrl+c/v/x|复制/粘贴/剪切|
|ctrl+f|搜索|

:::note
有的电脑对于含f1~f12的快捷键，需要同时按下fn键。
:::

---

:::info 参考文章
1、[CSDN_壬杰_Python安装教程-史上最强](https://blog.csdn.net/weixin_49237144/article/details/122915089?ops_request_misc=&request_id=&biz_id=102&utm_term=python%E5%AE%89%E8%A3%85&utm_medium=distribute.pc_search_result.none-task-blog-2~all~sobaiduweb~default-1-122915089.nonecase&spm=1018.2226.3001.4187)

2、[CSDN_壬杰_Pycharm下载与安装教程](https://blog.csdn.net/weixin_49237144/article/details/124918253)

:::
