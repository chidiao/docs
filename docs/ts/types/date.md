# Date

[Date](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date)

[Dayjs](/utils/dayjs)

内置对象

构造函数有四种基本形式

```js
new Date()
new Date(value)
new Date(dateString)
new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds)

// 当前时间
let now = new Date()
```

## GET

```js
let now = new Date()

// 年份
now.getFullYear()

// 月份索引 0-11
now.getMonth()

// 日期 1-31
now.getDate()

// 周天 0-6
now.getDay()

// 时间戳
now.getTime()

// 获取时分秒
now.getHours()
now.getMinutes()
now.getSeconds()
now.getMilliseconds()
```
