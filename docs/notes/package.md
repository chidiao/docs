# package

## npm

### 配置

```bash
# 安装cnpm
npm i cnpm -g --registry=https://registry.npm.taobao.org

# 替换源
npm config get registry
npm config set registry https://registry.npm.taobao.org
npm config set registry https://registry.npmjs.org

# 全局列表
npm list -g --depth 0

# 登录
npm login

# 废弃/移交
npm deprecate example "no longer supported"
npm owner add npm example
npm owner rm someone example
```



## yarn

### 配置

```bash
# 安装
npm i yarn -g

# 替换源
yarn config get registry
yarn config set registry https://registry.npm.taobao.org
yarn config set registry https://registry.yarnpkg.com
```

