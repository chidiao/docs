# String

字符串是不可更改的，唯一途径就是重写覆盖

```ts
let name: string = 'john'
```



## 属性

```js
// length
str.length

// 可访问，但不可修改
str[0]
```

## 遍历

```js
for (let char of str) {
  console.log(char)
}
```

## 方法

```js
// 去空格
str.trim()

// 重复
str.repeat(n)

// 拆分数组
str.split(sub)
```

## 大小写

```js
str.toUpperCase()
str.toLowerCase()

str[0].toUpperCase()
str[0].toLowerCase()
```

## 查找

在字符串中查找子字符串的位置(索引)，或判断是存在性

```js
// indexOf
str.indexOf(sub, pos)

// includes
str.includes(sub, pos)

// start or end
str.startsWith(sub)
str.endsWith(sub)
```

## 截取

从指定位置截取字符串

从开始到结束，不包括 `end`

`slice` 支持负数，更加灵活，因此只用这个就够了

`substring` 把负数视为 0

`substr` 支持负数，不够正统

```js
// slice => [start, end)
str.slice(start, end)

// substring => [start, end)
str.substring(start, end)

// substr
str.substr(start, length)
```
