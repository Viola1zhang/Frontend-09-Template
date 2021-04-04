# 一、语言按语法分类

1. 非形式语言：中文，英文

2. 形式语言（乔姆斯基谱系）

   - 0 型 无限制文法
   - 1 型 上下文相关文法
   - 2型 上下文无关文法
   - 3型 正则文法

   

# 二、产生式

- 用尖括号括起来的名称来表示语法结构名

- 语法结构分成基础结构和需要用其他语法结构定义的复合结构

  - 基础结构称终结符
  - 复合结构称非终结符

- 引号和中间的字符表示终结符

- 可以有括号

- *表示重复多次

- |表示或

- +表示至少一次

- BNF表示四则运算

  <MultiplicativeExpression> ::=<number>|
  <MultiplicatveExpression>"*"<Number>|
  <MultiplicativeExpression>"/"<Number>|

  <AddtiveExpression> ::=<MultiplicativeExpression>|
  <AddtiveExpression>"+"<MultiplicativeExpression>|
  <AddtiveExpression>?"/"<MultiplicativeExpression>|

# 三、通过产生式理解乔姆斯基谱系

- 0型无限制文法
  - ？:: =?
- 1型上下文相关法 VB JavaScript Python
  - ?<A> ?::=? <B> ? 

- 2型上下文无关法
  - <A>::=?
- 3型正则文法（表达式）
  - <A>::=<A>?
  - <A>::=?<A> 不正确
- JavaScript 属于上下文相关文法

# 四、现代语言的特例

- C++中，*可能表示乘号或者指针，具体是哪个，取决星号前面的标示符是否被声明为类型
- VB中，<可能是小于号,也可能是XML直接量的开始，取决于当前位置是否可以接受XML直接量
- Python中，行首的Tab符和空格会根据上一行的行首空白以一定的规则被处理成虚拟终结符indent或者dedent
- JavaScript中，/可能是除号，也可能是正则表达式的开头，除理方式类似于VB，字符串模板中也需要特殊处理}，还有自动插入分号

## 语言的分类

- 形式语言-用途

  - 数据描述语言：JSON, HTML, XAML,SQL,CSS
  - 编程语言：C， C++, JavaScript, Java, Python,Ruby,Perl

- 形式语言-表达方式

  - 声明式语言：JSON,HTML,XAML,SQL,CSS,Lisp,Clojure,Haskell

  - 命令式语言：C， C++, JavaScript, C#, Java, Python,Ruby,Perl

    

# 五、编程语言的性质

## 图灵完备性

- - 命令式 -图灵机
    - goto
    - if和while
  - 声明式 -lambda
    - 递归

## 动态与静态

- 动态：
  - 在用户的设备/在线上服务器上
  - 产品运行时
  - Runtime
- 静态：
  - 在程序员的设备上
  - 产品开发时
  - Compiletime (编译时)

## 类型系统

- - 动态类型系统与静态类型系统
    - 动态类型系统（JavaScript）
    - 静态类型系统 C++

- [ ] - 强类型与弱类型
    - String + Number
    - String == Boolean

- [ ] - 复合类型
    - 结构体{ a:t1,b:t2}
    - 函数签名 参数类型（列表）和返回值类型 (T1,T2)=>T3
  - 子类型

- [ ] - 泛型-逆变/协变 

    - 协变:凡是能用Array<Parent> 的地方都能用Array<Child> 
    - 逆变:凡是能用Funtion<Child> 的地方都能用Funtion<Parent> 

    

# 六、一般命令式编程语言

- Atom

  - identifier
  - Literal

- Expression

  - Atom
  - Operator
  - Punctuator

- Statement

  - Expression
  - Keyword
  - Punctuator

- Structure

  - Function
  - Class
  - Process
  - Namespace
  - ....

- Program

  - Program

  - Module

  - Package

  - Library

    

# 七、JS类型-Number

- ### JS Types

  - Number
  - String
  - Boolean
  - Object
  - Null
  - Undefined
  - Symbol

  

  ## Number

  - IEEE 754 Double Float
    - Sign(1)
    - Exponent(11)
    - Fraction(52)
  - Grammar
    - DecimalLiteral
      - 0
      - 0.
      - .2
      - 1e3
    - BinaryIntegerLiteral
      - 0b111
    - OctalIntegerLiteral
      - 0o10
    - HexIntegerLiteral
      - 0xFF

# 八、JS类型-String

- Character
- Code Point
- Encoding
- ASCII
- Unicode
- UCS
- GB
  - GB2312
  - GBK(GB13000)
  - GB18030
- ISO-8895
- BIG5