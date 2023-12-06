# Node.js

```sh
node -v
```

## yarn

安装

```sh
npm i -g yarn
```

配置源

```sh
yarn config get registry
yarn config set registry https://registry.yarnpkg.com
yarn config set registry https://registry.npm.taobao.org

npm config get registry
npm config set registry https://registry.npmjs.org
npm config set registry https://registry.npm.taobao.org
```

环境变量

```sh
yarn global bin

# 环境变量 Path 添加其路径
# C:\Users\Sunyz\AppData\Local\Yarn\bin
```

命令

| yarn                         | npm                             |
| ---------------------------- | ------------------------------- |
| yarn init                    | npm init                        |
| yarn install                 | npm install                     |
| yarn add [pkgname]           | npm install [pkgname]           |
| yarn remove [pkgname]        | npm uninstall [pkgname]         |
| yarn upgrade                 | npm update                      |
| yarn global add [pkgname]    | npm install -global [pkgname]   |
| yarn global remove [pkgname] | npm uninstall -global [pkgname] |
| yarn global list             | npm list -global --depth 0      |

## 排错

## node

**There appears to be trouble with your network connection.**

问题：代理出现问题

解决：删除代理

```sh
yarn config delete proxy

npm config rm proxy

npm config rm https-proxy
```

**The engine "node" is incompatible with this module.**

问题：node版本不兼容

解决：忽略检查

```sh
yarn config set ignore-engines true
```

## git

**SSL certificate problem: unable to get local issuer certificate**

解决：关闭 `SSL` 验证

```sh
git config --global http.sslVerify false
```

