# String

### 大小写

```js
str.toUpperCase()
str.toLowerCase()

str[0].toUpperCase()
str[0].toLowerCase()
```



## 查找

### indexOf()

```js
str.indexOf(substr, pos)
str.lastIndexOf(substr, pos)

// 返回 索引 或 -1
```



### includes()

```js
str.includes(substr)
str.startsWith(substr)
str.endsWith(substr)

// 返回 true/false
```



## 截取

| 方法                  | 方式             | 参数          |
| --------------------- | ---------------- | ------------- |
| slice(start, end)     | [start, end)     | 可以负数      |
| substring(start, end) | [start, end)     | 负值代表0     |
| substr(start, length) | [start, +length] | start可以负数 |



## 其他

### str.trim()

### str.repeat(n)