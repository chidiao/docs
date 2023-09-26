# Git

## 配置

```sh
# 全局配置
git config --global user.name "孙颖洲"
git config --global user.email "sunyz94123@qq.com"

# 生成公钥(公钥名是可以随意指定的)
ssh-keygen -t rsa -C 'mgb'

# 测试公钥
ssh -T git@gitee.com

# 配置远程仓库
git remote add origin sunyz.git

# 配置默认推送
git push -u origin master
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

## 回退

回退可以指定版本：

`HEAD` 当前版本，`HEAD^` 上一个，`HEAD^^` 上上个，`HEAD~100` 上 100 个。

也可以指定 `commit id` ，并不需要输完整。

```sh
# 查看记录
git log
git log --pretty=oneline

# 回退到指定版本
git reset --hard HEAD^
git reset --hard 1094a
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

## Error

**SSL certificate problem: unable to get local issuer certificate**

解决：关闭 `SSL` 验证

```sh
git config --global http.sslVerify false
```
