# Windows

## 常见问题

### vscode 禁止运行脚本

```bash
# 管理员身份运行命令
set-ExecutionPolicy RemoteSigned
```

## 系统设置

**LTSC 激活**

```bash
slmgr -ipk M7XTQ-FN8P6-TTKYV-9D4CC-J462D

slmgr -skms kms.03k.org

slmgr -ato

slmgr -dlv
```

**专业版密钥**

```bash
J4P26-7BNFR-4XMBW-4MH29-8QKTY
```

**Win11 任务栏透明**

```bash
regedit
HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Themes\Personalize

EnableTransparency
0 不透明
1 默认模糊
2 全透明

SystemUsesLightTheme
0	深色
1 默认
```

## 邮箱

**POP3**

客户端只能获取查看

**IMAP**

客户端与服务端数据操作互相同步

**Exchange**

能同步邮件、日历、联系人、日志等等
