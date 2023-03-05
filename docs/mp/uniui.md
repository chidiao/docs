# uniui

## navBar

[navBar](https://uniapp.dcloud.net.cn/component/uniui/uni-nav-bar.html)

::: code-group

```html [base]
<!-- base -->
<uni-nav-bar left-icon="left" title="我的" fixed></uni-nav-bar>

<!-- text -->
<uni-nav-bar left-text="返回" title="我的" right-text="设置"></uni-nav-bar>

<!-- click -->
<uni-nav-bar @clickLeft="onClick" @clickRight="onClick"></uni-nav-bar>

<!-- slot -->
<uni-nav-bar>
  <view>我的</view>
  <block slot="left">left</block>
  <block slot="right">right</block>
</uni-nav-bar>
```

```html [custom]
<!-- 自定义导航栏 -->
<uni-nav-bar :border="false" fixed>
  <view class="nav-bar-title">我的</view>
  <block slot="left">
    <image class="nav-bar-icon" src="" mode="scaleToFill" />
  </block>
  <block slot="right">
    <image class="nav-bar-icon" src="" mode="scaleToFill" />
  </block>
</uni-nav-bar>
```

```scss [scss]
// 自定义导航栏
.nav-bar-title {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 36rpx;
  color: #000;

  &.white {
    color: #fff;
  }
}

.nav-bar-icon {
  --size: 48rpx;

  width: var(--size);
  height: var(--size);
  object-fit: cover;
}
```

:::
