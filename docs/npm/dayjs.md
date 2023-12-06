# Dayjs

[Date](/ts/types/date)

[Dayjs](https://dayjs.gitee.io/zh-CN/)

```sh
yarn add dayjs
```

## 解析

将不同格式的时间转换为 dayjs 的时间对象

```js
let now = dayjs()

// Date
dayjs(new Date())

// 字符串
dayjs('2018-04-04T16:00:00.000Z')

// 字符串 + 格式
dayjs('12-25-1995', 'MM-DD-YYYY')
```

## GET

```js
let now = dayjs()

now.get('year')
now.get('month')
now.get('date')
now.get('day')
now.get('hour')
now.get('minute')
now.get('second')
now.get('millisecond')

now.year()
now.month()
now.date()
```

## SET

```js
let now = dayjs()

now.set('year', 2000).set('month', 1).set('date', 1)

now.year(2000)
now.month(1)
now.date(1)
```

## 显示

格式化，用指定格式来显示时间

```js
let now = dayjs()

let date = now.format('YYYY-MM-DD HH:mm:ss')
```

| 占位符 | 描述  | Dayjs    | Date        |
| ------ | ----- | -------- | ----------- |
| `Y`    | 年    | `year`   | getFullYear |
| `M`    | 月    | `month`  | getMonth    |
| `D`    | 日/月 | `date`   | getDate     |
| `d`    | 天/周 | `day`    | getDay      |
| `H`    | 时    | `hour`   | getHours    |
| `m`    | 分    | `minute` | getMinutes  |
| `s`    | 秒    | `second` | getSeconds  |
