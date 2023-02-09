# project-one

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```
### 接口地址
[https://www.showdoc.com.cn/jinducasey/8321036098744323]

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Nginx部署项目
1.先打包项目
2.打开nginx.conf文件，配置下面对应信息

location / {
            root   html;
            index  index.html index.htm;
            try_files $uri $uri/ @router;找在指定路径下的文件，如果不存在，则转给哪个文件执行
        }
    #vue项目路由不是真实存在的，要加上这段代码
location @router{
    rewrite ^.*$ /index.html last;
}