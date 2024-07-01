# Label

通过嵌套绑定

<label class="flex items-center space-x-2">
  <div>Click me</div>
  <input type="radio" name="tab" />
</label>

```html
<label class="flex items-center space-x-2">
  <div>Click me</div>
  <input type="radio" name="tab" />
</label>
```

通过 for 和 id 绑定

<div class="flex items-center space-x-2">
  <label for="tab">Click me</label>
  <input type="radio" id="tab" name="tab" />
</div>

```html
<div class="flex items-center space-x-2">
  <label for="tab">Click me</label>
  <input type="radio" id="tab" name="tab" />
</div>
```
