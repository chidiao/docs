# Event

分配事件处理程序有三种方式

`onclick="..."` ：HTML 特性，内联的方式，很少用

`elem.onclick = function` ：DOM 属性，只能分配一个，单一程序很好用

`addEventListener` ：最灵活的方式

## addEventListener

```js
elem.addEventListener(event, handler)

elem.addEventListener('click', (event) => {
  let type = event.type
  let target = event.currentTarget
  console.log(`${type} at ${target}`)
})
```

## handleEvent

将一个对象作为 `handler` 时，会调用该对象的 `handleEvent` 方法

```js
let obj = {
  handleEvent(event) {
    let type = event.type
    let target = event.currentTarget
    console.log(`${type} at ${target}`)
  }
}

elem.addEventListener('click', obj)
```

## 冒泡

事件从目标元素，从下往上不断传递的过程

几乎所有事件都会冒泡

`event.target` ：引发事件的元素，目标元素

`event.currentTarget` ：处理事件的元素，绑定了处理程序的元素(this)

```js
event.stopPropagation()
```

捕获

从上往下的，与冒泡刚好相反的阶段

`捕获阶段` => `目标阶段` => `冒泡阶段`

## 事件委托
