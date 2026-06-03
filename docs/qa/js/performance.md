# 性能优化

## 图片加载

图片通常是体积最大的资源。

### 体积优化

图片转换格式 **WebP** ，图片压缩，减少体积。

### 加载优化

原生懒加载，**Intersection Observer** 懒加载。

```html
<img loading="lazy" />

<img data-src="xxx.jpg" />
```

```js
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const img = entry.target
      img.src = img.dataset.src
      observer.unobserve(img)
    }
  })
})

document.querySelectorAll('img[data-src]').forEach((img) => observer.observe(img))
```

### 响应式优化

小屏幕加载小图，大屏幕加载大图，通过 srcset + sizes 实现。

```html
<template>
  <!-- 误区：无论是否显示，图片都会加载 -->
  <img src="/mb.jpg" class="block lg:hidden" />
  <img src="/pc.jpg" class="hidden lg:block" />
</template>
```

### 实际应用

NuxtImg

Skeleton

## 代码分割

SPA 应用路由懒加载，箭头函数动态导入页面组件。

组件或第三方库尽量按需导入。

## SSG

## 防抖节流

## 事件代理

## 内存释放

组件销毁时清理事件监听和定时器，

大数组大对象，闭包函数用完后手动解除引用，
