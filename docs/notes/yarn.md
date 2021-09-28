# Package

## yarn

安装

```bash
npm i -g yarn
```

配置源

```bash
yarn config get registry
yarn config set registry https://registry.yarnpkg.com
yarn config set registry https://registry.npm.taobao.org

npm config get registry
npm config set registry https://registry.npmjs.org
npm config set registry https://registry.npm.taobao.org
```

命令手册

| yarn                       | npm                   |
| -------------------------- | --------------------- |
| yarn init                  | npm init              |
| yarn install               | npm install           |
| yarn add pkgname           | npm install pkgname   |
| yarn remove pkgname        | npm uninstall pkgname |
| yarn upgrade               | npm update            |
| yarn global add pkgname    | npm i -g pkgname      |
| yarn global remove pkgname | npm un -g pkgname     |
| yarn global                | npm ls -g --depth 0   |

## 问题

### npm(yarn): There appears to be trouble with your network connection.

问题：代理出现问题

解决： 删除代理

```bash
yarn config delete proxy

npm config rm proxy

npm config rm https-proxy
```
