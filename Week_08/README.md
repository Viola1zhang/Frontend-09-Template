# 1. 浏览器总论|浏览器工作原理总论

#### 浏览器架构

- URL (http)=> HTML (parse)=> DOM (css computing) => DOM with css (layout) => DOM with position (render) =>Bitmap
- 整个的过程就是从 URL 转换为 Bitmap 的过程，先发送请求到服务器，然后服务器返回 HTML，浏览器解析 HTML，然后构建 DOM 树，计算 CSS 属性，然后进行排版，最后渲染成位图，然后经过操作系统或硬件的 API 完成视图的显示。

# 2.状态机 | 有限状态

#### 有限状态机

- 每一个状态都是一个机器

  - 在每一个机器里，我们可以做计算，存储，输出等

  - 所有的这些机器接受的输入都是一致的

  - 状态机的每一个机器本身没有状态，如果我们用函数表示的话，它应该是纯函数(无副作用)

- 每一个机器知道下一个状态

  - 每个机器都有确定的下一个状态(Moore)
  - 每个机器根据输入决定下一个状态(Mealy)

#### JS 中的有限状态机(Mealy)

```
//每个函数是一个状态
function state(input) //函数参数就是输入
{
		//在函数中，可以自由地编写代码，处理每个状态的逻辑
		return next; //返回值作为下一个状态
}
/////以下是调用///
while(input){
	//获取输入
	state = state(input); //吧状态机的返回值作为下一个状态
}
```



# 3.状态机 |不使用状态机处理字符串（一）

#### 使用有限状态机处理字符串

- 在一个字符串中找到字符“a"

- ```
  function match(str){
      for(let c of str){
          if( c == "a"){
              return true;
          }
          
      }
      return false;
  }
  match("I am a person ");
  ```


# 4.状态机 |不使用状态机处理字符串（二）

#### 使用有限状态机处理字符串

- 在一个字符串中找到字符“ab"

  ```
  function matchab(str){
      let foundA= false;
      for(let c of str){
          if(c == "a"){
              foundA = true;
          }else if(foundA && c == "b"){
              return true;
          }else{
              return false;
          }
      }
  
  }
  matchab("abcs");
  ```

  

# 5.状态机 |不使用状态机处理字符串（三）

#### 使用有限状态机处理字符串

- 在一个字符串中找到字符“abcdef"

  

```
function matchabcedf(str){
    let foundA = false;
    let foundB = false;
    let foundC = false;
    let foundD = false;
    let foundE = false;

    for(let c of str){
        if(c == 'a'){
            foundA = true;
        }else if(foundA && c == 'b'){
            foundB = true;
        }else if(foundB && c == 'c'){
            foundC = true;
        }else if(foundC && c == 'd'){
            foundD = true;
        }else if(foundD && c == 'e'){
            foundE = true;
        }else if(foundE && c=='f'){
            return true;
        }else{
            foundA = false;
            foundB = false;
            foundC = false;
            foundD = false;
            foundE =false;
        }
    }
    return false;

}

console.log(matchabcedf('asabcdefdfdf'));
```



# 6.状态机 |使用状态机处理字符串（一）

```
function match(str){
    let state = start;
    for(let c of str){
        state = state(c);
    }

    return state === end;
}

function start(c){
    if( c === "a"){
        return foundA;
    }else{
        return start;
    }
}

function end(c){
    return end;
}
function foundA(c){
    if(c === "b"){
        return foundB;
    }else{
        return start(c);
    }
}

function foundB(c){
    if(c === "c"){
        return foundC;
    }else{
        return start;
    }
}

function foundC(c){
    if(c === "d"){
        return foundD;
    }else{
        return start(c);
    }
}

function foundD(c){
    if(c === "e"){
        return foundE;
    }else{
        return start(c);
    }
}

function foundE(c){
    if(c==="f"){
        return end;
    }else{
        return start(c);
    }
}

console.log(match("i mabcaabcdef"));
```



# 7.状态机 |使用状态机处理字符串（二）

```
function match(str){
    let state = start;
    for(let c of str){
        state = state(c);
    }

    return state === end;
}

function start(c){
    if( c === "a"){
        return foundA;
    }else{
        return start;
    }
}

function end(c){
    return end;
}
function foundA(c){
    if(c === "b"){
        return foundB;
    }else{
        return start(c);
    }
}

function foundB(c){
    if(c === "c"){
        return foundC;
    }else{
        return start(c);
    }
}

function foundC(c){
    if(c === "a"){
        return foundA2;
    }else{
        return start(c);
    }
}

function foundA2(c){
    if(c === "b"){
        return foundB2;
    }else{
        return start(c);
    }
}

function foundB2(c){
    if(c==="x"){
        return end;
    }else{
        return foundB(c);
    }
}

console.log(match("abcabcabx"));
```



# 8. HTTP请求 | HTTP的协议解析

#### ISO-OSI七层网络模型

|   应用   | HTTP        | require("http") |
| :------: | ----------- | --------------- |
|   表示   | HTTP        |                 |
|   会话   | HTTP        |                 |
|   传输   | TCP         | require("net")  |
|   网络   | Intenet     |                 |
| 数据链路 | 4G/5G/Wi-Fi |                 |
|  物理层  | 4G/5G/Wi-Fi |                 |

#### TCP与IP的一些基础知识

- 流
- 端口
- require('net')
- 包
- IP地址
- libnet/libpcap

#### HTTP

- Request
- Response

# 9.HTTP请求 |服务端环境准备

#### 用Node.js 写一个小服务端

```
const http = require('http');

http.createServer((request,response) =>{
    let body = [];
    request.on('error',(err) =>{
        console.error(err);
    }).on('data',(chunk) =>{
        body.push(chunk.toString());
    }).on('end',() =>{
        body = Buffer.concat(body).toString();
        console.log("body:",body);
        response.writeHead(200,{'Content-Type':'text/html'});
        response.end(' Hello World\n');
    });
}).listen(8088);

console.log("server started");
```

#### HTTP协议

- 文本型协议
- Request

- Request line - POST/HTTP/1.1

- Heads - HOST:127.0.0.1

  ​			   Content-Type:application/x-www-form-urlencoded

  ​				

- body - field1=aaa&code=x%3D1

# 10.HTTP请求|实现一个HTTP的请求

#### 第一步HTTP请求总结

- 设计一个HTTP请求的类

- content type是一个必要的字段，要有默认值

- body 是KV格式

- 不同的content-type影响body的格式

  ```
  const net = require("net");
  
  class Request {
      constructor(options){
          this.method = options.method || "GET";
          this.host = options.host;
          this.port = options.port || 80;
          this.path = options.path || "/";
          this.body = options.body || {};
          this.headers = options.headers || {};
          if(!this.headers["Content-Type"]){
              this.headers["Content-Type"] = "application/x-www-form-urlencoded";
          }
  
          if(this.headers["Content-Type"] === "application/json"){
              this.bodyText = JSON.stringify(this.body);
          }else if(this.headers["Content-Type"] === "application/x-www-form-urlencoded"){
              this.bodyText = Object.keys(this.body).map(key => `${key}=${encodeURIComponent(this.body[key])}`).join('&');
          }
  
          this.headers["Content-Length"] = this.bodyText.length
      }
  
      send(){
          return new promises((resolve, reject) =>{
  
          });
      }
  }
  
  void async function(){
      let request = new Request({
          method: "POST",
          host:"127.0.0.1",
          port:"8088",
          path:"/",
          headers: {
              ["X-Foo2"]: "customed"
          },
          body: {
              name:"winter"
          }
      });
  
      let response = await request.isReloadNavigation();
  
      console.log(response)
  }
  ```

  

# 11.HTTP请求 | send 函数的编写，了解response格式

#### 第二步 send 函数总结

- 在request的构造器中收集必要的信息
- 设计一个send函数，把请求真实的送到服务器
- send 函数应该是异步的，所以返回Promise

```
const net = require("net");

class Request {
    constructor(options){
        this.method = options.method || "GET";
        this.host = options.host;
        this.port = options.port || 80;
        this.path = options.path || "/";
        this.body = options.body || {};
        this.headers = options.headers || {};
        if(!this.headers["Content-Type"]){
            this.headers["Content-Type"] = "application/x-www-form-urlencoded";
        }

        if(this.headers["Content-Type"] === "application/json"){
            this.bodyText = JSON.stringify(this.body);
        }else if(this.headers["Content-Type"] === "application/x-www-form-urlencoded"){
            this.bodyText = Object.keys(this.body).map(key => `${key}=${encodeURIComponent(this.body[key])}`).join('&');
        }

        this.headers["Content-Length"] = this.bodyText.length
    }

    send(){
        return new promises((resolve, reject) =>{
            //逐步收到信息，所以用ResponseParser而不是Response类
            const parse = new ResponseParser;
            resolve("")

        });
    }
}

class ResponseParser{
    constructor(){       
    }
    //设计一个receive接口
    receive(string){
        for(let i = 0; i < string.length; i++){
            this.receiveChar(string.charAt(i));
        }
    }

    receiveChar(char){
        //状态机代码
    }
}

void async function(){
    let request = new Request({
        method: "POST",
        host:"127.0.0.1",
        port:"8088",
        path:"/",
        headers: {
            ["X-Foo2"]: "customed"
        },
        body: {
            name:"winter"
        }
    });

    let response = await request.isReloadNavigation();

    console.log(response)
}
```

#### Resonpse格式

- status line 

  - HTTP/1.1 200 OK

- headers

  - Content-Type:text/html
  - Date:Mon, 23 Dec 2019 06:46:19 GMT
  - Connection: keep-alive
  - Transfer-Ecoding; chunked

- 空行

- body

  26

  <html><body>Hello World</body></html>

  0

# 12.HTTP请求 |发送请求

#### 第三步发送请求

- 设计支持已有的connection或者新建connection

- 收到数据传给parse
- 根据parse的状态resolve Promise

# 13. HTTP请求 | response解析

#### 第四步 ResponseParser总结

- Response必须分段构造，所以需要用一个ResponseParser“装配”
- ResponseParser分段处理ResponseText,我们用状态机分析文本的结构

# 14. HTTP请求 | response body的解析

#### 第五步 BodyParse总结

- Response的body可能根据Content-Type有不同的结构，因此会采用子Parser的结构解决问题

- 以TrunkedBody为例，我们同样用状态机来处理Body的格式

  