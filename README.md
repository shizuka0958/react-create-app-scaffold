# 1. 环境准备

## 1.1 nodejs and npm

#### On Mac

> 1. Download package fron 'https://nodejs.org/en/'
> 2. install nodejs (Please use version 8.6)
> 3. 安装npm：`sudo npm install npm@5.3.0 -g`
> 4. 安装serve: `npm install -g serve`
> 5. Intsall electron binary (1.7.9): `npm install electron@1.7.9 -g`

After that You will get node version to be 8.6.xxx. To check it with commands:

```
electron --version
node --version
npm --version
```

#### On Windows



# 2. 运行

## 2.1 Setup

> 1. cd elreact
> 2. npm i
> 3. 以下三种运行方式任选一种即可



## 2.3 Run

四种运行模式（主要选择1，3， 4）

#### 2.3.1 开发

使用以下命令运行，结果显示在浏览器中 (端口号是 3008)：

```
npm run start
```

然后打开浏览器，输入：http://localhost:3008/



#### 2.3.2 编译后浏览器中运行 - 这个一般是用于开发测试使用的

```
npm run build
serve -s build
```

然后打开浏览器，输入：http://localhost:5000/



#### 2.3.3 不编译直接在electron中运行

```
npm run electron-dev
```



#### 2.3.2 编译后在electron中运行

```
npm run build
npm run electron
```



# 3. 设计

## 3.1 架构



# 4. 备注

这部分留作备注使用，一些链接以及一些程序设计时的注意事项。

## 4.1 本App用到的软件包

​	React: https://github.com/facebook/react/releases

​	redux: https://redux.js.org/docs

​	jquery: http://jquery.com/

​	socketio: https://socket.io/

​	ant-design:https://ant.design/docs/spec



## 4.3 规则

Redux：

> Things you should never do inside a reducer:
>
> - Mutate its arguments;
> - Perform side effects like API calls and routing transitions;
> - Call non-pure functions, e.g. Date.now() or Math.random().

