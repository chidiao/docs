# SSE

## 流式数据

浏览器环境中，axios ajax xhr 是无法实现流式处理的。

node环境中，axios 只是勉强支持。

### $fetch

```js
let abortController = null

async function getStream() {
  abortController = new AbortController()

  try {
    const stream = await $fetch('/api/stream', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: { query: 'hello' },
      responseType: 'stream',
      signal: abortController.signal
    })

    const reader = stream.pipeThrough(new TextDecoderStream()).getReader()

    await processStreamReader(reader, (data) => {
      console.log(data)
    })
  } catch (err) {
    if (err.name === 'AbortError') {
      // abort
    } else {
      // err
    }
  }
}

function abortFetchStream() {
  if (abortController) {
    abortController.abort()
    abortController = null
  }
}
```

### fetch

```js
const response = await fetch('/api/stream', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ query: 'hello' }),
  signal: abortController.signal
})

if (!response.ok) {
  throw new Error(`HTTP ${response.status}`)
}

const reader = response.body.pipeThrough(new TextDecoderStream()).getReader()
```

### reader

```js
const reader = stream.pipeThrough(new TextDecoderStream()).getReader()
// Uint8Array → 字符串
// 拿到字符串流的 reader

const { value } = await reader.read()
// 拿到的 value 是字符串
```

```js
const reader = stream.getReader()
// 拿到的是 Uint8Array 流

const decoder = new TextDecoder()

const { value } = await reader.read()
const text = decoder.decode(value)
// 每次都要手动解码
```

```js
async function processStreamReader(reader, onMessage, delimiter = '\n\n') {
  let buffer = ''

  while (true) {
    const { value, done } = await reader.read()
    if (done) break

    buffer += value
    const parts = buffer.split(delimiter)
    buffer = parts.pop() || ''

    for (const part of parts) {
      if (part.trim()) {
        try {
          const data = JSON.parse(part)
          onMessage(data)
        } catch (e) {
          console.warn('JSON 解析失败:', part)
        }
      }
    }
  }
}
```
