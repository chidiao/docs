# CSS

## BFC

BFC 是块级格式化上下文，一个独立的渲染区域，内部与外部互不影响（布局）。

**触发方式**

- html
- float: left / right
- position: absolute / fixed
- display: flex / grid 相关
- overflow: 不为 visible
- display: flow-root 最优解，无副作用

**应用场景**

BFC 主要解决 **"内部元素影响外部"** 或 **"外部影响内部"** 的问题

- 子元素浮动，父元素高度塌陷

  ```css
  .parent {
    overflow: hidden; /* 或 auto, flow-root */
  }
  ```

- 兄弟元素 margin 折叠

  给其中一个元素，再套一层 BFC 容器。

## 盒模型

是描述页面中每个元素所占空间的概念。

**盒模型 = content + padding + border + margin**

把所有元素都堪称一个 矩形盒子，通过 css 来控制元素的尺寸、边距、边框、填充。

盒模型分两种：

content-box 和 border-box

开发用 border-box，省心
