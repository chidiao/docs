# Proxy

本地代理规则

`proxy` 里的地址应该是测试环境的 `baseURL`

::: code-group

```js [http.js]
const baseURL = '/api'

// '/api/login' √
// 'localhost:8080/api/login' ×
// 'http://192.168.x.x/api/login' ×
```

```js [config.js]
{
  devServer: {
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://chidiao.xin',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  }
}
```

:::
