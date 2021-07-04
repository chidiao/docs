# 跨域

## 同源策略



## 跨域

### VueCli 生产环境跨域

```js
// vue.config.js
module.exports = {
  devServer: {
    port: 8080,
    proxy: {
      '/api': {
        target: 'https://m.maoyan.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}

// axios.js
const baseURL = process.env.NODE_ENV == 'development' ? '/api' : 'https://m.maoyan.com'
```



### CORS 跨域

CORS是一个W3C标准，全称是"跨域资源共享"（Cross-origin resource sharing）。

CORS需要浏览器和服务器同时支持。目前，所有浏览器都支持该功能，IE除外。

整个CORS通信过程，都是浏览器自动完成，不需要用户参与。对于开发者来说，CORS通信与同源的AJAX通信没有差别，代码完全一样。浏览器一旦发现AJAX请求跨源，就会自动添加一些附加的头信息，有时还会多出一次附加的请求，但用户不会有感觉。

因此，实现CORS通信的关键是服务器。只要服务器实现了CORS接口，就可以跨源通信。



### JSONP 跨域
