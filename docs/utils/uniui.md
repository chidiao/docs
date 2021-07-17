# 插件

## swipe-action

滑动操作可能还是官方的好用

[swipe](https://ext.dcloud.net.cn/plugin?id=181)

```html
<uni-swipe-action>
  <uni-swipe-action-item
    v-for="i in list" :key="i.id"
    :right-options="options"
    @click="onClick(i.id, $event)"
  >
    <view>item</view>
  </uni-swipe-action-item>
</uni-swipe-action>
```



```js
import uniSwipeAction from '../components/uni-swipe-action/uni-swipe-action.vue'
import uniSwipeActionItem from '../components/uni-swipe-action-item/uni-swipe-action-item.vue'

export default {
  components: {
    uniSwipeAction,
    uniSwipeActionItem
  },
  data() {
    options: [{
      text: '取消',
      style: {
        backgroundColor: '#007aff'
      }
    }, {
      text: '确认',
      style: {
        backgroundColor: '#dd524d'
      }
    }]
  },
  methods: {
    onClick(id, e) {
      let handle = e.content.text
    }
  },
}
```



## image-tools

图像转换工具，可用于图像和base64的转换

[插件地址](https://ext.dcloud.net.cn/plugin?id=123)

```js
import { pathToBase64, base64ToPath } from '@/utils/image-tools/index.js'

pathToBase64(path).then(base64 => {
  console.log(base64)
}).catch(err => {
  console.log(err)
})

base64ToPath(base64).then(path => {
  console.log(path)
}).catch(err => {
  console.log(err)
})
```



::: tip 提示
uniapp base64图片不显示，是字符串太长传输中加入回车导致
正则去除回车换行符，就可以正常显示
```js
let result = source.replace(/[\r\n]/g, "")
```
:::


## uni-copy

全端文本复制插件

[插件地址](https://ext.dcloud.net.cn/plugin?id=2295)

```js
import uniCopy from '@/utils/uni-copy.js'

// 直接调用
const methods = {
  copy(content) {
    uniCopy({
      content: content,
      success: res => {
        this.$msg(res)
      },
      error: e => {
        this.$msg(e)
      }
    })
  }
}

// 全局
Vue.prototype.$copy = uniCopy
```

