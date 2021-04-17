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
            if(connection){
                connection.write(this.toString());
            //如果connection 不存在，create connection    
            }else{
                connection = net.createConnection({
                    host: this.host,
                    port: this.port
                },() =>{
                    connection.write(this.toString());
                })
            }
            //监听connection data
            connection.on('data',(data) =>{
                console.log(data.toString());
                parse.receive(data.toString());
                if(parse.isFinished){
                    resolve(parse.response);
                    connection.end();
                }
            });
            connection.on('error',(err) =>{
                reject(err);
                connection.end();
            })

        });
    }

    toString(){
        return `${this.method} ${this.path} HTTP/1.1\r
${Object.keys(this.headers).map(key => `${key}: ${this.headers[key]}`).join('\r\n')}\r
\r
${this.bodyText}`
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