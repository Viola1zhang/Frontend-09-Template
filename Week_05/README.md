## Proxy 

1. proxy的用途
   - [ ] Proxy 对象用于创建一个对象的代理，从而实现基本操作的拦截和自定义（如属性查找、赋值、枚举、函数调用等）。
2. proxy的基本用法
   - [ ] 参数：target，handler
   - [ ] target：要使用 Proxy 包装的目标对象（可以是任何类型的对象，包括原生数组，函数，甚至另一个代理）。
   - [ ] handler：一个通常以函数作为属性的对象，各属性中的函数分别定义了在执行各种操作时代理 p 的行为。
3. proxy 的缺点
   - [ ] 用proxy 代码预期性会变差，是专门为底层库设计的一个特性

## CSSOM

1. 定义

   - [ ] CSSOM，即CSS Object Model，CSS对象模型，是对CSS样式表的对象化表示，同时还提供了相关API用来操作CSS样式。
   - [ ] 在W3C标准中，CSSOM包含两部分：
     - [ ] Model：描述样式表和规则的模型部分；
     - [ ] View：和元素视图相关的API部分。

2. Model和View原理

   - [ ] CSSOM Model
     - [ ] Model部分是CSSOM的本体，通常都是用HTML标签`style`或者`link`标签即可创建。
     - [ ] 在构建CSSOM树时，对于任何一个元素的最终样式，浏览器都会从适用于该节点的最上层节点开始，通过递归的方式不断向下合并更加具体的规则，最终得出完整的结果，这就是向下级联(Cascade)的含义。
   - [ ] CSSOM View
     - [ ] 可分成三个部分：窗口部分，滚动部分和布局部分，是CSSOM的核心。
     - [ ] 窗口API用于操作浏览器窗口的位置、尺寸等，但是出于安全考虑，这些API并不总起实际作用。
     - [ ] 滚动可分为视口滚动和元素滚动，它们之间既有相同，也有不同之处，监听滚动事件是一个常见的操作。
     - [ ] 布局API总体上使用的最多，借助它们可以轻松获特定元素的位置和尺寸信息，为进一步操作提供可能性。

   

## Range

1. 用途

   - [ ] Range 接口表示一个包含节点与文本节点的一部分的文档片段。

2. 创建方法

   - [ ] Document对象：Document.CreatRange();

3. 获取方法

   - [ ] Selection对象：getRangAt()。
   - [ ] 通过Document 对象的构造函数Range() 来获得。

4. Range 方法

   - [ ] Range.getBoundingClientRect() ：

     - [ ] 返回一个DOMRect 对象，该对象将范围中的内容包围起来；即该对象是一个将范围内的所有元素的边界矩形包围起来的矩形。
     - [ ] 此方法用于确定文本区域中选中的部分或光标的视窗坐标

   - [ ] Range.setStart(startNode, startOffset)

     - [ ] 用于设置Range 的开始位置

   - [ ] Range.setEnd(endNode, endOffset)

     - [ ] 用于设置Range 的结束位置

     

     

     

