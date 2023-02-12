# Windows

## LTSC 激活

```bash
slmgr -ipk M7XTQ-FN8P6-TTKYV-9D4CC-J462D

slmgr -skms kms.03k.org

slmgr -ato

slmgr -dlv
```

## 隐藏系统文件夹

打开注册表。`Win + R` 输入 `regedit`

目录：两处都要修改

```sh
# 32
HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\FolderDescriptions\

# 64
HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Microsoft\Windows\CurrentVersion\Explorer\FolderDescriptions\
```

文件夹

```sh
# 桌面
{B4BFCC3A-DB2C-424C-B029-7FE99A87C641}

# 文档
{f42ee2d3-909f-4907-8871-4c22fc0bf756}

# 下载
{7d83ee9b-2244-4e70-b1f5-5393042af1e4}

# 音乐
{a0c69a99-21c8-4671-8703-7934162fcf1d}

# 图片
{0ddd015d-b06c-45d5-8c4c-f59713854639}

# 视频
{35286a68-3c57-41a1-bbb1-0eae73d76c95}

# 3D
{31C0DD25-9439-4F12-BF41-7FF4EDA38722}
```

在每个目录下新建 `PropertyBag` 文件夹，新建/修改字符串值 `ThisPCPolicy` 为 `Hide`
