# FlexBox

### Margin

利用 `margin` 来模拟实现 `justify-self`

左右对齐

<div class="w-full flex space-x-2 text-xs text-white">
  <div class="p-4 bg-blue-500 rounded">left</div>
  <div class="p-4 bg-blue-500 rounded">left</div>
  <div class="p-4 bg-blue-500 rounded" style="margin-right: auto">left</div>
  <div class="p-4 bg-blue-500 rounded">right</div>
  <div class="p-4 bg-blue-500 rounded">right</div>
</div>

```html{4}
<div class="flex-row justify-start">
  <div class="item">left</div>
  <div class="item">left</div>
  <div class="item" style="margin-right: auto">left</div>
  <div class="item">right</div>
  <div class="item">right</div>
</div>
```

左中右对齐

<div class="w-full flex justify-start  space-x-2 text-xs text-white">
  <div class="p-4 bg-blue-500 rounded">left</div>
  <div class="p-4 bg-blue-500 rounded">left</div>
  <div class="p-4 bg-blue-500 rounded" style="margin: 0 auto">center</div>
  <div class="p-4 bg-blue-500 rounded">right</div>
  <div class="p-4 bg-blue-500 rounded">right</div>
</div>

```html{4}
<div class="flex-row justify-start">
  <div class="item">left</div>
  <div class="item">left</div>
  <div class="item" style="margin: 0 auto">center</div>
  <div class="item">right</div>
  <div class="item">right</div>
</div>
```
