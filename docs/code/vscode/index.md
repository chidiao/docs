# VScode

<!--@include: ./shortcut.md-->

## 报错

### 禁止运行脚本

管理员身份运行 vscode

```bash
# 执行
set-ExecutionPolicy RemoteSigned

# 查验
get-ExecutionPolicy
# Restricted
# RemoteSigned
```

## 设置

### Auto Closing

自动闭合标签括号等，默认

### Linked Editing

闭合标签同步修改

### Word Wrap

文字换行，视觉换行，实际不换行

```json
{
  "editor.wordWrap": "wordWrapColumn",
  "editor.wordWrapColumn": 120
}
```
