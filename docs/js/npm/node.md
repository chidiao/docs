# Node.js

```sh
node -v
```

## NVM

### 安装

[nvm-windows](https://github.com/coreybutler/nvm-windows)

安装后，需要为每个版本单独安装全局工具，例如 yarn

### 使用

[nvm](https://github.com/nvm-sh/nvm)

```sh
nvm

# 列表
nvm list
nvm list available

# 安装
nvm install 18

# 卸载
nvm uninstall 18

# 切换
nvm use 18
```

## Yarn

### 安装

```sh
npm i -g yarn
```

### 配置源

```sh
yarn config get registry
yarn config set registry https://registry.yarnpkg.com
yarn config set registry https://registry.npmmirror.com

npm config get registry
npm config set registry https://registry.npmjs.org
npm config set registry https://registry.npmmirror.com
```

### 环境变量

```sh
yarn global bin

# C:\Users\Sunyz\AppData\Local\Yarn\bin
# 添加到你的环境变量里
```

### 命令

| yarn                    | npm                     |
| ----------------------- | ----------------------- |
| yarn init               | npm init                |
| yarn install            | npm install             |
| yarn add [pkg]          | npm install [pkg]       |
| yarn remove [pkg]       | npm uninstall [pkg]     |
| yarn upgrade            | npm update              |
| yarn global [mgt] [pkg] | npm [mgt] -global [pkg] |
| yarn global list        | npm list -global        |

## Error

**There appears to be trouble with your network connection.**

问题：代理出现问题

解决：删除代理

```sh
yarn config delete proxy

npm config rm proxy

npm config rm https-proxy
```

**The engine "node" is incompatible with this module.**

问题：node 版本不兼容

解决：忽略检查

```sh
yarn config set ignore-engines true
```
