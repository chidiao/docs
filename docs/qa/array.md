# Array

## 数组去重

- new Set()

  ```js
  let set = new Set(arr)
  let result = Array.from(set)

  // Set 值的集合，每个值只出现一次
  ```

- 遍历

  ```js
  let result = []

  arr.forEach((item) => {
    if (!result.includes(item)) {
      result.push(item)
    }
  })
  ```

- 筛选

  ```js
  let result = arr.filter((item, index) => {
    return arr.indexOf(item) === index
  })
  ```
