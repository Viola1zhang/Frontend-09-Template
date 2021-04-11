# JS 表达式|运算符和表达式

#### Expressions

- Member

  - a.b
  - a[b]
  - foo`string`
  - super.b
  - super['b']
  - new.target
  - new Foo()

- New

  - new Foo

- Call

  - foo()
  - super()
  - foo()['b']
  - foo().b
  - foo()`abc`
  - Example: new a()['b'] - new 出来一个a 对象之后访问b属性

- Left Handside & Right Handside

  - a.b =c; 正确
  - a+b =c ;错误

- Update

  - a ++
  - a --
  - -- a
  - ++ a

- unary

  - delete a.b
  - void foo() : void 运算符的作用是把后面的东西都变成undefined
  - typeof a
  - +a
  - -a
  - ~a: 位运算，把整数按位取反，如果不是整数，则强制转为整数
  - !a
  - await a ：单目运算

- Exponental

  - ** :右结合

- Multiplicative

  - */%

- Additive

  - +-

- Shift

  - << >> >>>

- Relationship

  - < > < = > = instanceof

    in

- Equality

  - ==
  - !=
  - ===
  - !==

- Bitwise

  - & ^ |

- Logical

  - &&
  - ||

- Conditional

  - ? : - 条件 ？条件为真的时候执行：条件为假的时候执行

#### Reference

- Object
- Key:可以是string,可以是symbol
- delete
- assign



# JS表达式 |类型转换

#### Type Conversion

- a+b
- "false" == false
- a[0] =1;

![](C:\Yu Zhang\Frontend homework\Frontend09\Frontend-09-Template\Week_07\typeconversion.png)

#### Unboxing

- ToPremitive
- toString vs valueOf
- Symbol.toPremitive



#### Boxing

| 类型    | 对象                    | 值          |
| ------- | ----------------------- | ----------- |
| Number  | new Number(1)           | 1           |
| String  | new String("a")         | "a"         |
| Boolean | new Boolean(true)       | true        |
| Symbol  | new Object(Symbol("a")) | Symbol("a") |

# JS语句|运行时相关概念

#### Statement

###### Grammar

- 简单语句
- 组合语句
- 声明

###### Runtime

- Completion Record
  - [[type]]:normal,break,continue,return, or throw
  - [[value]]:基本类型
  - [[target]]:label
- Lexical Environment

# JS语句 | 简单语句和复合语句

#### 简单语句

- ExpressionStatement
- EmptyStatement
- DebuggerStatement
- ThrowStatement
- ContinueStatement
- BreakStatement
- ReturnStatement

#### 复合语句

- BlockStatement

  - [[type]]:normal
  - [[value]]:--
  - [[target]]:--
  - {   }

- IfStatement

- SwitchStatement

- IterationStatement 

  - while (..)  ..
  - do .. while(..)
  - for( .. ; ..; ..) ..
  - for( .. in  ..) ..
  - for( .. of .. ) ..
  - for await ( of )
  - var
  - const/let
  - in

- WithStatement

- LabelledStatement

- TryStatement

  - try{ ..} catch( .. ){..} finally{..}

  - [[type]]:return
  - [[value]]: --
  - [[target]]:label

###### 标签，循环，break,continue

- LableStatement
- IterationStatement
- ContinueStatement
- BreakStatement
- SwitchStatement
- [[type]]: break continue
- [[value]]: --
- [[target]]: label

# JS语句 | 声明

#### 声明

- FunctionDeclaration

- GeneratorDeclaration

- AsyncFunctionDeclaration

- VariableStatement

- ClassDeclaration

- LexicalDeclaration 

  

- function

- function *

- async function 

- async function*

- var

- class

- const

- let

#### 预处理(pre-process)

- 所有的声明都有预处理机制，都能够把变量变成一个局部变量
- 区别是const 声明再声明之前使用的话，会抛错，并且错误是可以被try catch 处理的

#### 作用域

- var 的作用域是前后都有的，作用域是其所在的函数体
- const 的作用域在其所在的花括号

# JS 结构化 | 宏任务和微任务

#### JS执行粒度（运行时）

- 宏任务
- 微任务(Promise)
- 函数调用(Execution Context)
- 语句/声明(Completion Record)
- 表达式(Reference)
- 直接量/变量/this .....



#### 