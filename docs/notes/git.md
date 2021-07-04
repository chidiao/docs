# git

## 本地

### 全局

```bash
git config --global user.name 'chidiao'
git config --global user.email 'sunyz94123@qq.com'
```



### 开始

```bash
git init
```



### 发布

```bash
# 添加
git add filename
git add .
git add *

# 发布版本
git commit -m '1st'

# 查看状态
git status

# 比较改动
git diff xxx
```



### 回滚

```bash
# 记录
git log
git log --pretty=oneline
git reflog

# 穿梭
git reset --hard commit_id
git reset --hard HEAD^
git reset --hard HEAD~100
```

`commit_id` 只需要简写前几位就够了

`HEAD` 是当前版本。 `HEAD^` `HEAD^^` `HEAD~100` 上一个，上两个，上一百个。



### 撤销

```bash
# 放弃工作区的修改
git checkout -- filename
```



### 删除

```bash
# 删除
git rm filename
```



## 远程

### 密钥

```bash
ssh-keygen -t rsa -C 'sunyz94123@qq.com'
```



### 同步

```bash
# 查勘
git remote -v

# 添加
git remote add sss sss.git
git remote add bbb bbb.git
git remote add origin xxx.git

# 删除
git remote remove origin

# 推送
git push origin master

# 设置默认
git push -u origin master

# 默认推送
git push

# 克隆
git clone xxx.git
```

`git push -u origin master` 之后 `git push` 等同于 `git push origin master` 



## 分支

### 操作

```bash
# 查看
git branch

# 创建
git branch name

# 切换
git switch name

# 创建并切换
git switch -c name

# 合并某分支到当前分支
git merge name

# 删除
git branch -d name
```



## gitee

### 全局设置

```bash
git config --global user.name "chidiao"
git config --global user.email "sunyz94123@qq.com"
```



### 创建仓库

```bash
mkdir test
cd test
git init
touch README.md
git add README.md
git commit -m "first commit"
git remote add origin git@gitee.com:chidiao/test.git
git push -u origin master
```



### 已有仓库

```bash
cd existing_git_repo
git remote add origin git@gitee.com:chidiao/test.git
git push -u origin master
```



### 回滚

```bash
git reset --hard xxx
git push -f

# 回滚本地版本
# 强制push
```

