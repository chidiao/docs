# Git

## 快速配置

```bash
# 全局配置
git config --global user.name "孙颖洲"
git config --global user.email "sunyz94123@qq.com"

# 生成SSH公钥
ssh-keygen -t rsa -C 'chidiao'

# 测试公钥
ssh -T git@gitee.com
```

注意：生成公钥设置的参数并不是邮箱地址，只是公钥的名字，可以随意指定

## 快速上手

```bash
# 初始化仓库
git init

# 提交修改到暂存区
git add .

# 提交暂存区到仓库
git commit -m 'init'

# 配置远程仓库
git remote add origin git@gitee.com:chidiao/study.git

# 推送到远程仓库
git push -u origin master
```

## 使用手册

```bash
# 查看远程仓库
git remote -v

# 添加远程仓库
git remote add <shortname> <url>
git remote add one 1st.git
git remote add two 2nd.git

# 移除远程仓库
git remote remove <shortname>
git remote remove laji

# 拉取
git fetch <remote>
git fetch origin

# 推送
git push <remote> <branch>
git push origin master

# 默认
git push -u origin master
git push
```
