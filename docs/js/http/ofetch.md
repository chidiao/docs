# oFetch

一个 `$fetch` 封装

[request](https://github.com/57code/nuxt-app/blob/23-prisma/composables/request.ts)

```ts
type FetchType = typeof $fetch
type ReqType = Parameters<FetchType>[0]
type FetchOptions = Parameters<FetchType>[1]
```
