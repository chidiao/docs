# Text Overflow

## 单行文本溢出

三个属性通常要搭配使用，缺一不可

<Demo>
  <div class="w-96 truncate">
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus rem dicta beatae, nostrum itaque molestiae
    voluptatum nesciunt, debitis fugit, aut pariatur ea suscipit error possimus sequi non ullam veritatis placeat.
  </div>
</Demo>

```scss
.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
```

## 多行文本溢出

因为使用了 `-webkit-box` ，占用了 `display` ，再使用其他布局 `flex` `grid` 等就会失效

<Demo>
  <div class="w-96 line-clamp-3">
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus rem dicta beatae, nostrum itaque molestiae
    voluptatum nesciunt, debitis fugit, aut pariatur ea suscipit error possimus sequi non ullam veritatis placeat.
  </div>
</Demo>

```scss
.line-clamp-3 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}
```
