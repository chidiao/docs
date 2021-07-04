# lodash

## random

```bash
yarn add lodash.random
```

```js
random([lower=0], [upper=1], [floating])

random(0, 5)
random(1.2, 5.2)
// 两个数之间的随机数，两个整数就随机整数，有浮点数就随机浮点数

random(5)
// 一个数表示 该数到0之间

random(5, true)
// 第三个参数指定随机数为浮点数
```



### 扩展