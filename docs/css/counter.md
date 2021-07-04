# counter

```html
<ul>
  <li></li>
  <li></li>
  <li></li>
</ul>
```



```scss
ul {
  counter-reset: test 0;
}

li {
  counter-increment: test 1;
}

li::before {
  content: counter(test);
}
```



`reset` 定义计数器及初始值

`increment` 指定计数器及其步进值

`counter()` 计算结果值