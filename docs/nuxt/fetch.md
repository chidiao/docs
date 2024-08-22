# Fetch

::: code-group

```ts [http.ts]
interface ResType<T> {
  code?: number
  message?: string
  data?: T
}

const BASE_URL = 'BASE_URL'

export default defineNuxtPlugin((nuxtApp) => {
  const http = $fetch.create({
    baseURL: BASE_URL,
    onRequest: ({ options }) => {
      const userStore = useUserStore()
      options.headers = new Headers(options.headers)
      userStore.userInfo?.token && options.headers.set('Authorization', userStore.userInfo.token)
    },
    onResponse: ({ response }) => {
      if (response._data?.code === 0) {
        return response._data
      } else {
        const toast = useToast()
        toast.add({ title: response._data?.message })
        throw new Error(response._data?.message)
      }
    }
  })

  return {
    provide: {
      http: {
        get: <T>(url: string, opts?: any): Promise<ResType<T>> => http(url, { method: 'GET', ...opts }),
        post: <T>(url: string, body?: any, opts?: any): Promise<ResType<T>> =>
          http(url, { method: 'POST', body, ...opts }),
        put: <T>(url: string, body?: any, opts?: any): Promise<ResType<T>> =>
          http(url, { method: 'PUT', body, ...opts }),
        delete: <T>(url: string, body?: any, opts?: any): Promise<ResType<T>> =>
          http(url, { method: 'DELETE', body, ...opts })
      }
    }
  }
})
```

:::
