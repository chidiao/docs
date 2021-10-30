# Day.js

## Date

内置对象，存储日期和时间，并提供了管理方法

**创建**

```js
// 无参数，当前时间
let now = new Date()

// 字符串，被解析
new Date(str)
let d = new Date('2017-01-26')

// 多参数
new Date(year, month, date, hours, minutes, seconds, ms)
```

**访问**

```js
// 获取年份
getFullYear()

// 获取月份 0-11
getMonth()

// 获取日期 1-31
getDate()

// 获取周几 0-6
getDay()

// 获取时间戳
getTime()

// 获取时分秒
getHours()
getMinutes()
getSeconds()
getMilliseconds()
```

## Day.js

[Day.js](https://dayjs.gitee.io/zh-CN/)

| 占位符 | 详情 | 关联        |
| ------ | ---- | ----------- |
| `Y`    | 年份 | getFullYear |
| `M`    | 月份 | getMonth    |
| `D`    | 日期 | getDate     |
| `d`    | 周几 | getDay      |
| `H`    | 时   | getHours    |
| `m`    | 分   | getMinutes  |
| `s`    | 秒   | getSeconds  |

```js
let now = dayjs().format('YYYY-MM-DD HH:mm:ss')
```

