---
id: BasicGrammar
title: Python基础语法
tags: 
  - Python
---

## Python 注释

注释作用：

1. 注释可用于解释 Python 代码。
2. 注释可用于提高代码的可读性。
3. 在测试代码时，可以使用注释来阻止执行。

### 创建注释

注释以 ＃ 开头，Python 将忽略它们：

```py title="单行注释示例"
#This is a comment
print("Hello, World!")
```

### 多行注释

Python 实际上没有多行注释的语法。  
要添加多行注释，您可以为每行插入一个 `＃`：

```py title="多行注释示例1"
#This is a comment
#written in
#more than just one line
print("Hello, World!")
```

或者，以不完全符合预期的方式，您可以使用多行字符串。  
由于 Python 将忽略未分配给变量的字符串文字，因此您可以在代码中添加多行字符串（三引号），并在其中添加注释：

```py title="多行注释示例2"
"""
This is a comment
written in 
more than just one line
"""
print("Hello, World!")
```

只要字符串未分配给变量，Python 就会读取代码，然后忽略它，这样您就已经完成了多行注释。

## Python 缩进

缩进指的是代码行开头的空格。  
在其他编程语言中，代码缩进仅出于可读性的考虑，而 Python 中的缩进非常重要。  
Python 使用缩进来指示代码块。

如果省略缩进，Python 会出错：

```py title="错误示例"
if 5 > 2:
print("Five is greater than two!")
#没有缩进，因此错误
```

缩进可以使用`tab`键或者空格实现，空格数取决于程序员，但至少需要一个。

:::tip 注意事项
*同一代码块*中使用**相同数量**的空格进行缩进，否则 Python 会出错：

```py title="错误示例"
if 5 > 2:
 print("Five is greater than two!") 
        print("Five is greater than two!")
#第2行和第3行属于同一代码块，但两行缩进不一致，因此错误
```

```py title="正确示例"
if 5 > 2:
 print("Five is greater than two!") 
 print("Five is greater than two!")
#此时第2行和第3行缩进一致
```
:::

## Python 变量

### 创建变量

变量是存放数据值的容器。  
与其他编程语言不同，Python 没有声明变量的命令。  
首次为其赋值时，才会创建变量。

变量不需要使用任何特定类型声明，甚至可以在设置后更改其类型。

```py title="创建变量示例1"
x = 5 # x is of type int整型
x = "Steve" # x is now of type str字符串类型
print(x)
# 输出Steve
```

### 变量名称

变量可以使用短名称（如 x 和 y）或更具描述性的名称（如`age`年龄、`carname`汽车名字、`total_volume`总体积）。

Python 变量**命名规则**：

1. 变量名必须以`字母`或`下划线`字符开头
2. 变量名称不能以数字开头
3. 变量名只能包含字母、数字字符和下划线（A-z、0-9 和 _）
4. 变量名称**区分大小写**（age、Age 和 AGE 是三个不同的变量）

### 向多个变量赋值

Python 允许您在一行中为多个变量赋值：

```py title="向多个变量赋值示例1"
x, y, z = "Orange", "Banana", "Cherry"
print(x)# Orange
print(y)# Banana
print(z)# Cherry
```

在一行中为多个变量分配相同的值：

```py title="向多个变量赋值示例2"
x = y = z = "Orange"
print(x)#Orange
print(y)#Orange
print(z)#Orange
```

### 输出变量

Python 的 `print` 语句通常用于输出变量。  
如需结合文本和变量，Python 使用 `+` 字符：

```py title="输出变量示例1"
x = "awesome"
print("Python is " + x)#Python is awesome
```

### 全局变量

在函数外部创建的变量称为*全局变量*。  
全局变量可以被函数内部和外部的每个人使用。

```py title="全局变量示例1"
#在函数外部创建变量，并在函数内部使用它
x = "awesome"

def myfunc():
  print("Python is " + x)

myfunc()
# 结果：Python is awesome
```

:::tip 
如果在函数内部创建具有相同名称的变量，则该变量将是局部变量，并且只能在函数内部使用。具有相同名称的全局变量将保留原样，并拥有原始值。

```py title="全局变量示例2"
x = "awesome"

def myfunc():
  x = "fantastic"
  print("Python is " + x)

myfunc()#Python is fantastic

print("Python is " + x)#Python is awesome
```
:::

### global 关键字

通常，在函数内部创建变量时，该变量是局部变量，只能在该函数内部使用。  
要在函数内部创建全局变量，可以使用 global 关键字。

```py title="global 关键字示例1"
def myfunc():
  global x
  x = "fantastic"

myfunc()

print("Python is " + x)#Python is fantastic
```

如果要在函数内部更改全局变量，可以使用 global 关键字。

```py title="global 关键字示例2"
x = "awesome"

def myfunc():
  global x
  x = "fantastic"

myfunc()

print("Python is " + x)#Python is fantastic
```

## Python 数据类型

### 内置数据类型

在编程中，数据类型是一个重要的概念。  
变量可以存储不同类型的数据，并且不同类型可以执行不同的操作。  
在这些类别中，Python 默认拥有以下内置数据类型：

|内置数据类型|包含种类|
|   :--:    |   :--:    |
|文本类型|	str（字符串类型）|
|数值类型|	int（整型）, float（浮点型）, complex（复数类型：形如A+Bj，j为虚部）|
|序列类型|	list（列表）, tuple（元组）, range|
|映射类型|	dict|
|集合类型|	set（集合）, frozenset|
|布尔类型|	bool（布尔）|
|二进制类型|	bytes, bytearray, memoryview|

### 获取数据类型

可以使用 `type() 函数`获取任何对象的数据类型：

```py title="获取数据类型示例1"
x = 10
print(type(x))
#<class 'int'>
```

### 设置数据类型

在 Python 中，当为变量赋值时，会设置数据类型：

|   示例	|   数据类型    |
|   :--:    |   :--:    |	
|x = "Hello World"	|str	|
|x = 29	|int	|
|x = 29.5	|float	|
|x = 1j	|complex	|
|x = ["apple", "banana", "cherry"]	|list	|
|x = ("apple", "banana", "cherry")	|tuple	|
|x = range(6)	|range	|
|x = {"name" : "Bill", "age" : 63}	|dict	|
|x = {"apple", "banana", "cherry"}	|set	|
|x = frozenset({"apple", "banana", "cherry"})	|frozenset	|
|x = True	|bool	|
|x = b"Hello"	|bytes|	
|x = bytearray(5)	|bytearray	|
|x = memoryview(bytes(5))	|memoryview|

### 设定特定的数据类型

如果希望指定数据类型，则可以使用以下构造函数：

|   示例	|   数据类型    |
|   :--:    |   :--:    |	
|x = str("Hello World")	|str	|
|x = int(29)	|int	|
|x = float(29.5)	|float	|
|x = complex(1j)	|complex	|
|x = list(("apple", "banana", "cherry"))	|list	|
|x = tuple(("apple", "banana", "cherry"))	|tuple	|
|x = range(6)	|range	|
|x = dict(name="Bill", age=36)	|dict	|
|x = set(("apple", "banana", "cherry"))	|set	|
|x = frozenset({"apple", "banana", "cherry"})	|frozenset	|
|x = bool(5)	|bool	|
|x = bytes(5)	|bytes|	
|x = bytearray(5)	|bytearray	|
|x = memoryview(bytes(5))	|memoryview|

## Python 运算符

### 算术运算符

|运算符	|名称	|实例	|
|:--:|:--:|:--:|
|+	|   加	|x + y      (3+2=5)	|
|-	|   减	|x - y      (3-2=1)	|
|*	|   乘	|x * y      (3*2=6)	|
|/	|   除	|x / y      (3/2=1.5)	|
|%	|   取模	|x %        y(3%2=1)	|
|**	|   幂	|`x ** y`     (3**2=3的平方=9)	|
|//	|   地板除（取整除）	|x // y     (3//2=1)|

### 赋值运算符

![](https://fusheng1221.oss-cn-beijing.aliyuncs.com/fusheng-001-img/20220815173813.png)
<!-- |运算符	        |实例	        |等同于	        |
|:--:|:--:|:--:|
|=	            |x = 5	        |x = 5	        |
|+=	            |x += 3	        |x = x + 3	    |
|-=	            |x -= 3	        |x = x - 3	    |
|*=	            |x *= 3	        |x = x * 3	|
|/=	            |x /= 3	        |x = x / 3	|
|%=	            |x %= 3	        |x = x % 3	|
|//=	        |x //= 3	    |    x = x // 3	|
|**=	        |x **= 3 	    |x = x ** 3	|
|&=	            |x &= 3	        |x = x & 3	|
|```|=```       |```x |= 3	```   |```x = x | 3	```|
|^=	            |x ^= 3	        |x = x ^ 3	|
|>>=	        |x >>= 3	    |    x = x >> 3	|
|<<=	        |x <<= 3	    |    x = x << 3| -->

:::info 后五个赋值运算符描述
`&=`： 与赋值运算符  
`|=`：或赋值运算符  
`^=`：异或赋值运算符  
`>>=`：右移赋值运算符  
`<<=`：左移赋值运算符  

|   运算符  |   描述    |
|   :--:    |   :--:    | 
|与赋值运算符|复合赋值运算符，将左边操作数指定变量按照右边数值按位**相与**后，再赋值给左边操作数指定变量|
|或赋值运算符|复合赋值运算符，将左边操作数指定变量按照右边数值按位**或**后，再赋值给左边操作数指定变量|
|异或赋值运算符|复合赋值运算符，将左边操作数指定变量按照右边数值按位**异或**后，再赋值给左边操作数指定变量|
|右移赋值运算符|复合赋值运算符，将左边操作数指定变量按照右边数值**右移若干位**后，再赋值给左边操作数指定变量|
|左移赋值运算符|复合赋值运算符，将左边操作数指定变量按照右边数值**左移若干位**后，再赋值给左边操作数指定变量|

具体详情类似于后续讲述的`位运算符`，有不解之处可以前往查看。

:::


### 比较运算符

|运算符|	    名称	    |    实例	   |
|:--:|:--:|:--:|
|==	       | 等于	        |x == y	   |
|!=	        |不等于	        |x != y	   |
|>	      |  大于	       | x > y	   |
|<	      |  小于	       | x < y	   |
|>=	      |  大于或等于	    |x >= y	   |
|<=	        |小于或等于	   | x <= y     |

:::info 注意
`==`是等于的含义，`=`是赋值的含义，两者使用时须区分，勿搞混！
:::

### 逻辑运算符

逻辑运算符用于组合条件语句。  
以下假设变量 a 为 10, b为 20(非0即为true):

|运算符	|逻辑表达式	|描述	|实例|
|:--:|:--:|:--:|:--:|
|and	|`x and y`	|布尔"与" - 如果 x 为 False，x and y 返回 x 的值，否则返回 y 的计算值。	|`(a and b)` 返回 20。|
|or	|`x or y`	|布尔"或" - 如果 x 是 True，它返回 x 的值，否则它返回 y 的计算值。|	`(a or b)` 返回 10。|
|not	|`not x`|	布尔"非" - 如果 x 为 True，返回 False 。如果 x 为 False，它返回 True。|	`not(a and b)` 返回 False|

### 身份运算符

身份运算符用于比较对象，不是比较它们是否相等，但如果它们实际上是同一个对象，则具有相同的内存位置。 

|运算符	|描述|	实例|
|:--:|:--:|:--:|
|is	|`is` 是判断两个标识符是不是引用自一个对象|	`x is y`, 类似 id(x) == id(y) , 如果引用的是同一个对象则返回 True，否则返回 False|
|is not	|`is not` 是判断两个标识符是不是引用自不同对象|	`x is not y `， 类似 id(x) != id(y)。如果引用的不是同一个对象则返回结果 True，否则返回 False。|

:::tip
 id() 函数用于获取对象内存地址。返回对象的内存地址。
:::

:::info `is` 与 `==` 区别

`is` 用于判断两个变量引用对象是否为同一个， `==` 用于判断引用变量的值是否相等。
:::

### 成员运算符

成员资格运算符用于测试序列是否在对象中出现。

|运算符	|描述	|实例|
|:--:|:--:|:--:|
|`in`	|如果在指定的序列中找到值返回 True，否则返回 False。	|x 在 y 序列中 , 如果 x 在 y 序列中返回 True。|
|`not in`	|如果在指定的序列中没有找到值返回 True，否则返回 False。	|x 不在 y 序列中 , 如果 x 不在 y 序列中返回 True。|

### 位运算符

按位运算符是把数字看作二进制来进行计算的。Python中的按位运算法则如下：  
下表中变量 a 为 60，b 为 13,二进制格式如下：

```
a = 0011 1100
b = 0000 1101

-----------------

a&b = 0000 1100
a|b = 0011 1101(其中`|`为或运算符符号)
a^b = 0011 0001
~a  = 1100 0011
```

|运算符	|描述	|实例|
|:--:|:--:|:--:|
|&	|按位与运算符：参与运算的两个值,如果两个相应位都为1,则该位的结果为1,否则为0|	`(a & b)` 输出结果 12 ，二进制解释： 0000 1100|
|或	|按位或运算符：只要对应的二个二进位有一个为1时，结果位就为1。	|`(a 或 b) `输出结果 61 ，二进制解释： 0011 1101|
|^	|按位异或运算符：当两对应的二进位相异时，结果为1	|`(a ^ b)` 输出结果 49 ，二进制解释： 0011 0001|
|~	|按位取反运算符：对数据的每个二进制位取反,即把1变为0,把0变为1。~x 类似于 -x-1	|`(~a )` 输出结果 -61 ，二进制解释： 1100 0011， 在一个有符号二进制数的补码形式。|
|<<|	左移动运算符：运算数的各二进位全部左移若干位，由"<<"右边的数指定移动的位数，高位丢弃，低位补0。|	`a << 2 `输出结果 240 ，二进制解释： 1111 0000|
|>>|	右移动运算符：把">>"左边的运算数的各二进位全部右移若干位，">>"右边的数指定移动的位数	|`a >> 2` 输出结果 15 ，二进制解释： 0000 1111|

### 运算符优先级

以下表格列出了*从最高到最低优先级*的所有运算符， 相同单元格内的运算符具有相同优先级。   
运算符均指二元运算，除非特别指出。   
相同单元格内的运算符从左至右分组（除了*幂运算*是从右至左分组）：

![](https://fusheng1221.oss-cn-beijing.aliyuncs.com/fusheng-001-img/20220818220158.png)












```py title="示例1"

```

