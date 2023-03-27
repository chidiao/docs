# uniui

## navBar

[navBar](https://uniapp.dcloud.net.cn/component/uniui/uni-nav-bar.html)

- 默认高度 `44px`
- `z-index: 998`

```html
<!-- 文本 -->
<uni-nav-bar leftText="返回" rightText="设置" title="标题"></uni-nav-bar>

<!-- 图标 -->
<uni-nav-bar leftIcon="left" rightIcon="cart" title="标题"></uni-nav-bar>

<!-- 颜色 -->
<uni-nav-bar color="#fff" backgroundColor="#000" title="标题"></uni-nav-bar>

<!-- 事件 -->
<uni-nav-bar @clickLeft="onClick" @clickRight="onClick" title="标题"></uni-nav-bar>
```

插槽

- `v-slot` 只能配合 `template` 使用，官方文档是错误的
- 使用插槽就不能用 `title` 属性了，插槽内容有默认宽度，但没有样式

```html
<uni-nav-bar>
  <view>标题</view>
  <template v-slot:left>left</template>
  <template v-slot:right>right</template>
</uni-nav-bar>

<uni-nav-bar>
  <view>标题</view>
  <block slot="left">left</block>
  <block slot="right">right</block>
</uni-nav-bar>
```

补充

```scss
.status-bar {
  width: 100%;
  height: var(--status-bar-height);
  background: transparent;
}
```

