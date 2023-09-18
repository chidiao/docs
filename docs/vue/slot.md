# Slot

### 默认插槽

```html
<div class="my-btn">
  <slot></slot>
</div>

<MyBtn>Click Me</MyBtn>
```

### 具名插槽

```html
<div class="icon-btn">
  <slot name="icon"></slot>

  <slot></slot>
</div>
```

```html
<IconBtn>
  <template #icon>
    <div>Icon</div>
  </template>

  <div>Default</div>
</IconBtn>
```

### 作用域插槽

插槽内容想要调用组件数据，组件向插槽传递

具名

```html
<slot name="info" :balance="99"></slot>

<MyWallet>
  <template #info="infoProps"> {{ infoProps.balance }} </template>

  <template #info="{ balance }"> {{ balance }} </template>
</MyWallet>
```

默认

```html
<MyWallet v-slot="slotProps"></MyWallet>

<MyWallet>
  <template #default="slotProps"></template>
</MyWallet>
```

### 动态插槽?
