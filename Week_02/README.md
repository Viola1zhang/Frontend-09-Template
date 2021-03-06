## Week2 Notes

1. #### localStorage的用法

   `localStorage`理论上来说是永久有效的，即不主动清空的话就不会消失，即使保存的数据超出了浏览器所规定的大小，也不会把旧数据清空而只会报错.

   localstorage为标准的键值对（Key-Value,简称KV）数据类型，简单但也易扩展，只要以某种编码方式把想要存储进localstorage的对象给转化成字符串，就能轻松支持。

   由于浏览器的安全策略，localstorage是无法跨域的，也无法让子域名继承父域名的localstorage数据，这点跟cookies的差别还是蛮大的。

2. #### ES6Array.fill()函数的用法

   ES6为Array增加了fill()函数，使用制定的元素填充数组，其实就是用默认内容初始化数组。

3. #### JSON.stringify()与JSON.parse()的区别

   JSON.stringify()将对象a变成了字符串c，JSON.parse()将字符串c还原成对象a.

4. #### Queue和Stack的区别(队列和栈)

   Queue有两个口,那么就是先进新出,而Stack只有一个口,后进先出.

5. #### 广度优先遍历与最短路径

   广度优先遍历从某个顶点 v 出发，首先访问这个结点，并将其标记为已访问过，然后顺序访问结点v的所有未被访问的邻接点 {vi,..,vj} ，并将其标记为已访问过，然后将 {vi,...,vj} 中的每一个节点重复节点v的访问方法，直到所有结点都被访问完为止。