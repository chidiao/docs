# Git

## 配置

```sh
# 全局配置
git config --global user.name "孙颖洲"
git config --global user.email "sunyz94123@qq.com"

# 生成公钥(公钥名是可以随意指定的)
ssh-keygen -t rsa -C 'rmb'

# 测试公钥
ssh -T git@gitee.com

# 配置远程仓库
git remote add origin sunyz.git

# 配置默认推送
git push -u origin main
```

## 提交

```sh
# 初始化仓库
git init

# 查看修改状态
git status

# 产看修改内容
git diff

# 撤销修改(工作区)
git checkout -- <file>

# 提交修改到暂存区
git add <file>
git add .

# 从暂存区撤销提交
git restore <file>

# 提交暂存区到仓库
git commit -m <msg>
git commit -m 'init'
```

删除文件

删除工作区中的文件，版本库中仍存有文件，提交到暂存，同步修改。

使用 `git rm` 等效于，删除加提交到暂存。

```sh
1. <delete> <file>
2. git add <file>
3. git commit -m 'del'

1. git rm <file>
2. git commit -m 'del'
```

## 回滚

`HEAD` 当前版本，`HEAD^` 上一个，`HEAD^^` 上上个，`HEAD~100` 上 100 个

产看记录

```sh
# 查看记录
git log
git log --pretty=oneline
```

本地回滚

```sh
# 回滚到指定commit
git reset --hard 82102bb0894419d5bf374093351692d148b0edc6
git reset --hard 82102bb

# 回滚到上个commit或多个
git reset --hard HEAD^
```

覆盖远程

```sh
# 强制推送到远程
git push origin HEAD --force
git push --force
```

## 远程

```sh
# 查看远程仓库
git remote -v

# 添加远程仓库
git remote add <name> <url>
git remote add test test.git

# 移除远程仓库
git remote remove <name>
git remote remove test

# 拉取
git fetch <remote>
git fetch origin

# 推送
git push <remote> <branch>
git push origin master

# 配置默认推送
git push -u origin master
git push

# 克隆
git clone <url> <name>
```

## 分支

## 规范

commit 主题

- `feat` : 新增功能
- `fix` : 修复 bug
- `docs` : 文档变更
- `style` : 代码风格变动（不影响代码逻辑）
- `refactor` : 代码重构
- `perf` : 性能优化
- `test` : 添加或修改测试
- `chore` : 杂项（构建过程或辅助工具变更）
- `build` : 构建系统或外部依赖变更
- `ci` : 持续集成配置变更
- `revert` : 回滚

## Degit

[degit](https://github.com/Rich-Harris/degit)

一个简单的项目脚手架，只克隆最新代码，而不是整个仓库

```sh
yarn global add degit
```

```sh
# 克隆某个分支
degit https://github.com/nuxt/starter#v3 myapp
degit https://github.com/nuxt/starter#ui myapp
```

## Error

### SSL certificate problem

`SSL certificate problem: unable to get local issuer certificate`

解决：关闭 `SSL` 验证

```sh
git config --global http.sslVerify false
```

### Failed to connet to port 443

`Failed to connect to github.com port 443`

解决：配置代理和梯子代理一致

```sh
git config --global http.proxy 127.0.0.1:7890
git config --global https.proxy 127.0.0.1:7890
```
