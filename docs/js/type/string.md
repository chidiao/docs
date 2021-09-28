# String

## 属性

```js
let str = 'hello world'

str.length // 11
str[6] // 'w'
str[6].toUpperCase() // 'W'
str.toUpperCase() // 'HELLO WORLD'
```

## 方法

### toLowerCase()

小写

### toUpperCase()

大写

### indexOf()

```js
str.indexOf(substr, pos)
// 返回索引 或 -1
// 索引可以为0

str.lastIndexOf(substr, pos)
// 反向
```

### includes()

```js
str.includes(substr, pos)
// 返回 true/false
```

### startsWith()

```js
str.startsWith(substr)
// 返回 true/false
```

### endsWidth()

```js
str.endsWith(substr)
// 返回 true/false
```

### slice()

```
str.slice(start, end)
```

### substring()

```js
str.substring(start, end)
```

### trim()

删除前后空格

```js
str.trim()
```

### repeat()

重复 n 次

```
str.repeat(10)
```
