# Git

## Remote

### 设置远程仓库

```sh
# 添加仓库
git remote add <name> <url>

# 主仓库（origin）
git remote add origin <url>

# 多个仓库
git remote add another <url>

# 修改地址
git remote set-url <name> <url>

# 移除仓库
git remote remove <name>

# 查看仓库信息
git remote
git remote -v
```

### 推送远程仓库

```sh
# 推送本地 A 到远程 A
git push origin A
git push origin A:A

# 推送本地 A 到远程 B
git push origin A:B

# 该命令与当前所在哪个分支没有关系
# 必须同时指定本地和远程分支名，只写一个为简写
```

### 分支和推送

```sh
# main 分支
git checkout main

# 设置 main → origin/main
git push -u origin main

# 推送 main → origin/main
git push

# 每个分支需要单独配置上游
git checkout dev
git push
# ❌ fatal: The current branch dev has no upstream branch.

# dev 分支
git checkout dev

# 设置 dev → origin/dev
git push -u origin dev

# 推送 dev → origin/dev
git push

# 查看配置的上游信息
git branch -vv
```

## 配置公钥

```sh
# 全局配置
git config --global user.name "孙颖洲"
git config --global user.email "sunyz94123@qq.com"

# 生成公钥（公钥名是可以随意指定的）
ssh-keygen -t rsa -C 'rmb'

# 测试公钥
ssh -T git@gitee.com
```

## 覆盖远程分支

```sh
# 强制覆盖分支
git push origin <branch> --force

# 1.把旧代码备份
git push origin main:bak

# 2.强制推送新代码及记录
git push origin main:main --force
```

## 提交规范

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

一个简单的项目脚手架，只克隆最新代码，而不是整个仓库（不包含git记录）

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

### Connection reset by 20.205.243.166 port 22

ssh 可能需要重新授权（该方案并不确切，可以尝试）

```sh
ssh -T -p 443 git@ssh.github.com
```

```
The authenticity of host '[ssh.github.com]:443 ([20.205.243.160]:443)' can't be established.
ED25519 key fingerprint is SHA256:+DiY3wvvV6TuJJhbpZisF/zLDA0zPMSvHdkr4UvCOqU.
This host key is known by the following other names/addresses:
    C:\Users\Sunyz/.ssh/known_hosts:1: github.com
Are you sure you want to continue connecting (yes/no/[fingerprint])? yes
Warning: Permanently added '[ssh.github.com]:443' (ED25519) to the list of known hosts.
Hi chidiao! You've successfully authenticated, but GitHub does not provide shell access.
```
