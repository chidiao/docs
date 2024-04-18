# CORS

Cross-Origin Resource Sharing

CORS 是一套机制，用于浏览器校验跨域请求

它的基本理念是：

只要服务器明确表示允许，则校验通过

服务器明确拒绝或没有表示，则校验不通过

CORS 将请求分为两类：`简单请求` 和 `预检请求`

## 简单请求

同时满足以下三个条件：

- 请求方法为：`GET` `HEAD` `POST`
- 头部字段满足 CORS 安全规范：`headers`
- 请求头的 Content-Type 为：`text/plain` `multipart/form-data` `application/x-www-form-urlencoded`

请求过程：

1. 浏览器 => 服务器

   ```
   ...
   Origin: http://chidiao.xin
   ```

2. 服务器 => 浏览器

   ```
   ...
   Access-Control-Allow-Origin: http://chidiao.xin

   ...
   Access-Control-Allow-Origin: *
   ```

## 预检请求

请求过程：

1. 浏览器 => 服务器。发送预检请求 `OPTIONS`

```
...
Access-Control-Request-Headers:	a, b, content-type
Access-Control-Request-Methods:	POST
Origin: http://chidiao.xin
```

2. 服务器 => 浏览器。是否放行

```
...
Access-Control-Allow-Headers:	a, b, content-type
Access-Control-Allow-Methods:	POST
Access-Control-Allow-Origin: http://chidiao.xin
Access-Control-Max-Age: 86400
```

3. 通过后，浏览器发送真实请求，和简单请求一致

::: tip

对于跨域简单请求，如果不允许跨域，响应会被浏览器拦截，使得 JavaScript 代码无法访问它，而不是服务器不响应数据。

对于跨域预检请求，只是用于校验是否允许跨域，并不会返回实际数据。只有后续的真实请求才会返回实际数据。

:::
