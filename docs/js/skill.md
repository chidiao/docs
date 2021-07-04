# skill

## 多条件选择

```js
// if
function test(key) {
  if (key == 'a' || key == 'b') {
    console.log('it is ok')
  }
}

// includes
function test(key) {
  let keys = ['a', 'b', 'c', 'd']
  if (keys.includes(key)) {
    console.log('it is ok')
  }
}
```



## switch

```js
// switch
function test(key) {
  switch(key) {
    case 'red':
      return 'red'
    case: 'pink':
      return 'pink'
    case: 'white':
      return 'white'
    default:
      return 'black'
  }
}

// object
function test(key) {
  let tmp = {
    red: 'red',
    pink: 'pink',
    white: 'white'
  }
  return tmp[key] || 'black'
}

// map
function test(key) {
  let tmp = new Map()
  	.set('red', 'red')
  	.set('pink', 'pink')
  	.set('white', 'white')
  return tmp.get(key) || 'black'
}

// array
function test(key) {
  let tmp = [
    { key: 'red', value: 'red' },
    { key: 'pink', value: 'pink' },
    { key: 'white', value: 'white' }
  ]
  return tmp.filter(item => item.key == key).value || 'black'
}
```



## 尽早返回

