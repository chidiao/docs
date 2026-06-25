# SEO

**SEO的本质是‘如何让搜索引擎爬虫更高效、更准确地理解页面内容，并提升用户体验’。**

## 基础优化

### 语义化html

```html
<title></title>
<h1></h1>

<nav></nav>
<main></main>

<article></article>

<img alt />
<a href title />
```

### 元数据

权重降低，过时手段

```html
<meta name="keywords" content="seo" />

<meta name="keywords" content="seo" />
```

### 结构化数据

```html
<script type="application/ld+json"></script>
```

```js
{
  "@context": "https://schema.org",   // 固定！告诉爬虫我用的是哪个标准
  "@type": "Product",                 // 固定！告诉爬虫这是商品
  "name": "机械键盘",                 // 固定！商品名称
  "description": "青轴机械手感...",    // 固定！商品描述
  "image": "https://xxx.jpg",         // 固定！商品图片
  "sku": "KB-2026-001",              // 固定！库存单位
  "offers": {                        // 固定！价格信息
    "@type": "Offer",
    "price": "199",
    "priceCurrency": "CNY"
  },
  "aggregateRating": {               // 固定！评分
    "@type": "AggregateRating",
    "ratingValue": "4.5",
    "reviewCount": "886"
  }
}
```

### url 规范化

让URL本身就包含关键词

```
https://www.xxx.com/news?aid=3847&cat=2&page=1&sort=desc&utm_source=weixin
↓
https://www.xxx.com/news/frontend-seo-skills
```

## 构建优化

Nuxt 的两个hook本质效果同上

```vue
<script setup>
// ✅ useSeoMeta：负责 SEO 相关的 meta（标题、描述、OG、Twitter）
useSeoMeta({
  title: '前端面试SEO指南',
  description: '2026最新攻略',
  ogTitle: '前端面试SEO指南',
  ogImage: 'https://xxx.com/cover.jpg'
})

// ✅ useHead：负责其他 head 配置（JSON-LD、canonical、link 等）
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        /* 结构化数据 */
      })
    }
  ],
  link: [{ rel: 'canonical', href: 'https://xxx.com/seo-guide' }]
})
</script>
```

## 平台优化

### sitemap

把所有页面的 URL 汇总成一个 XML 文件，提交给搜索引擎

### url 提交

```js
<script>
  (function() {
    var bp = document.createElement('script');
    bp.src = '//push.zhanzhang.baidu.com/push.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(bp, s);
  })();
</script>
```

### robots.txt 优化

屏蔽不需要爬取的部分，只保留需要爬取的部分，不浪费爬虫预算
