# 插件

## swipe-action

滑动操作可能还是官方的好用

[swipe](https://ext.dcloud.net.cn/plugin?id=181)

```html
<uni-swipe-action>
  <uni-swipe-action-item v-for="i in list" :key="i.id" :right-options="options" @click="onClick(i.id, $event)">
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
    options: [
      {
        text: '取消',
        style: {
          backgroundColor: '#007aff'
        }
      },
      {
        text: '确认',
        style: {
          backgroundColor: '#dd524d'
        }
      }
    ]
  },
  methods: {
    onClick(id, e) {
      let handle = e.content.text
    }
  }
}
```

## image-tools

图像转换工具，可用于图像和 base64 的转换

[插件地址](https://ext.dcloud.net.cn/plugin?id=123)

```js
import { pathToBase64, base64ToPath } from '@/utils/image-tools/index.js'

pathToBase64(path)
  .then((base64) => {
    console.log(base64)
  })
  .catch((err) => {
    console.log(err)
  })

base64ToPath(base64)
  .then((path) => {
    console.log(path)
  })
  .catch((err) => {
    console.log(err)
  })
```

::: tip 提示
uniapp base64 图片不显示，是字符串太长传输中加入回车导致
正则去除回车换行符，就可以正常显示

```js
let result = source.replace(/[\r\n]/g, '')
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
      success: (res) => {
        this.$msg(res)
      },
      error: (e) => {
        this.$msg(e)
      }
    })
  }
}

// 全局
Vue.prototype.$copy = uniCopy
```

# uView

## 组件

### 导航栏

[api](https://uviewui.com/components/navbar.html#api)

```html
<u-navbar title="我的"></u-navbar>
```

```js
const opt = {
  isBack: true,
  backIconColor: '#606266',
  backIconSize: '30',
  backText: '',
  title: '',
  titleColor: '#606266',
  zIndex: '980',
  background: { background: '#fff' },
  borderBottom: true,
  isFixed: false,
  immersive: false
}
```

### 模态框

[api](https://uviewui.com/components/modal.html#api)

```html
<u-modal v-model="show" content="Are you OK?"></u-modal>
```

```js
const opt = {
  zIndex: 1075,
  title: '提示',
  showTitle: true,
  showConfirmButton: true,
  showCancelButton: false,
  zoom: true,
  maskCloseAble: false,
  negativeTop: 0
}
```

## 模板

### 支付键盘

```html
<u-keyboard
  ref="uKeyboard"
  mode="number"
  :mask="true"
  :mask-close-able="false"
  :dot-enabled="false"
  v-model="payPop"
  :safe-area-inset-bottom="true"
  :tooltip="false"
  @change="onChange"
  @backspace="onBackspace"
>
  <view class="pay-pop">
    <view class="money">
      <text class="lg">1.00</text><text>元</text>
      <view class="close" @tap="showPop(false)">
        <u-icon name="close" color="#333333" size="28"></u-icon>
      </view>
    </view>
    <view class="ipt">
      <u-message-input
        mode="box"
        :maxlength="6"
        :dot-fill="true"
        v-model="password"
        :disabled-keyboard="true"
      ></u-message-input>
    </view>
    <view class="tips">支付键盘</view>
  </view>
</u-keyboard>
```

```js
const data = {
  payPop: false,
  password: ''
}

const methods = {
  onChange(val) {
    if (this.password.length < 6) {
      this.password += val
    }

    if (this.password.length >= 6) {
      this.pay()
    }
  },
  onBackspace(e) {
    if (this.password.length > 0) {
      this.password = this.password.substring(0, this.password.length - 1)
    }
  },
  pay() {
    // dosomething
  },
  showPop(flag = true) {
    this.password = ''
    this.payPop = flag
  }
}
```

```scss
.pay-pop {
  .money {
    font-size: 20rpx;
    color: #ff9900;
    position: relative;
    padding: 20rpx;
    text-align: center;

    .lg {
      font-size: 80rpx;
    }

    .close {
      position: absolute;
      padding: 10rpx;
      top: 20rpx;
      right: 20rpx;
      line-height: 28rpx;
      font-size: 28rpx;
    }
  }

  .ipt {
    display: flex;
    justify-content: center;
  }

  .tips {
    padding: 10rpx 0;
    text-align: center;
    color: #909399;
  }
}
```

### 验证码

[api](https://uviewui.com/components/verificationCode.html#api)

```html
<u-verification-code :seconds="60" ref="uCode" @change="codeChange"></u-verification-code>

<u-button @click="getCode">{{tips}}</u-button>
```

```js
const data = {
  tips: '获取验证码'
}

const methods = {
  codeChange(e) {
    this.tips = e
  },
  getCode() {
    if (this.$refs.uCode.canGetCode) {
      uni.showLoading({
        title: '正在获取验证码'
      })
      this.$u.post('/api', data).then((res) => {
        uni.hideLoading()
        this.$u.toast('验证码已发送')
        this.$refs.uCode.start()
      })
    } else {
      this.$u.toast('请稍后再试')
    }
  }
}
```

### 标签页

```html
<u-tabs :list="tabs" :is-scroll="false" :current="current" @change="change"></u-tabs>

<view class="item" v-for="i in list[current].data" :key="i.id"></view>

<u-loadmore :status="list[current].status" bg-color="#fff"></u-loadmore>
```

```js
const data = {
  tabs: [{ name: 'list1' }, { name: 'list2' }],
  current: 0,
  list: [
    {
      type: 0,
      page: 1,
      data: [],
      status: 'loadmore'
    },
    {
      type: 1,
      page: 1,
      data: [],
      status: 'loadmore'
    }
  ]
}

const methods = {
  change(index) {
    this.current = index
    this.getData(true)
  },
  getData(clear = false) {
    let target = this.list[this.current]
    if (clear) {
      target.page = 1
      target.data = []
      target.status = 'loadmore'
    }
    if (target.status == 'nomore') return

    // 获取数据
    target.status = 'loading'
    this.$u
      .get('/api', {
        type: target.type,
        page: target.page
      })
      .then((res) => {
        let { data, lastpage } = res.data.result
        target.data = [...target.data, ...result]
        if (target.page == lastpage) {
          target.status = 'nomore'
        } else {
          target.status = 'loadmore'
          target.page++
        }
      })
  }
}
```

## new

### 上传图片

```html
<u-upload
  :action="$store.state.uploadUrl"
  upload-text="上传图片"
  max-count="9"
  :header="{Authorization: 'Bearer ' + this.$store.state.token}"
  :form-data="{type: 'logo'}"
  @on-success="uploadSuccess"
></u-upload>
```

```js
uploadSuccess(e) {
  console.log(e)
}
```
