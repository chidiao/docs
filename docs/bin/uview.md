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
  background: {background:'#fff'},
  borderBottom: true,
  isFixed: false,
  immersive: false,
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
<u-keyboard ref="uKeyboard" mode="number" :mask="true" :mask-close-able="false" :dot-enabled="false"
 v-model="payPop" :safe-area-inset-bottom="true" :tooltip="false" @change="onChange" @backspace="onBackspace">
  <view class="pay-pop">
    <view class="money">
      <text class="lg">1.00</text><text>元</text>
      <view class="close" @tap="showPop(false)">
        <u-icon name="close" color="#333333" size="28"></u-icon>
      </view>
    </view>
    <view class="ipt">
      <u-message-input mode="box" :maxlength="6" :dot-fill="true" v-model="password" :disabled-keyboard="true"></u-message-input>
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
      this.password += val;
    }

    if (this.password.length >= 6) {
      this.pay();
    }
  },
  onBackspace(e) {
    if (this.password.length > 0) {
      this.password = this.password.substring(0, this.password.length - 1);
    }
  },
  pay() {
    // dosomething
  },
  showPop(flag = true) {
    this.password = '';
    this.payPop = flag;
  },
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
  tips: '获取验证码',
}

const methods = {
  codeChange(e) {
    this.tips = e
  },
  getCode() {
    if(this.$refs.uCode.canGetCode) {
      uni.showLoading({
        title: '正在获取验证码'
      })
      this.$u.post('/api', data).then(res => {
        uni.hideLoading();
        this.$u.toast('验证码已发送');
        this.$refs.uCode.start();
      })
    } else {
      this.$u.toast('请稍后再试');
    }
  },
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
  tabs: [
    { name: 'list1' },
    { name: 'list2' }
  ],
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
    this.current = index;
    this.getData(true);
  },
  getData(clear = false) {
    let target = this.list[this.current]
    if (clear) {
      target.page = 1
      target.data = []
      target.status = 'loadmore'
    }
    if (target.status=='nomore') return;

    // 获取数据
    target.status = 'loading'
    this.$u.get('/api', {
      type: target.type,
      page: target.page
    }).then(res => {
      let { data, lastpage } = res.data.result
      target.data = [...target.data, ...result]
      if (target.page==lastpage) {
        target.status = 'nomore'
      } else {
        target.status = 'loadmore'
        target.page ++
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



## 快速开始

### 基础配置

```js
// main.js
import uView from 'uview-ui'
Vue.use(uView)
```

```scss
// uni.scss
@import "@/uview-ui/theme.scss";

// App.vue
@import "@/uview-ui/index.scss";
```

```json
// page.json
{
  "easycom": {
    "^u-(.*)": "@/uview-ui/components/u-$1/u-$1.vue",
    "^uni-(.*)": "@/components/uni/uni-$1/uni-$1.vue",
    "^my-(.*)": "@/components/my/my-$1/my-$1.vue"
  },
}
```



### 网络配置

```js
// main.js
const app = new Vue({
  ...App
})

import uhttp from '@/utils/uhttp.js'
Vue.use(uhttp, app)
import uapi from '@/utils/uapi.js'
Vue.use(uapi, app)

app.$mount()
```



### uhttp

```js
// uhttp.js
const config = {
  baseUrl: '',
  method: 'POST',
  dataType: 'json',
  showLoading: true,
  loadingText: '请求中...',
  loadingTime: 800,
  originalData: false,
  loadingMask: true,
  header: {
    'content-type': 'application/json;charset=UTF-8'
  },
}

const install = (Vue, vm) => {
  Vue.prototype.$u.http.setConfig(config)

  // 请求拦截
  Vue.prototype.$u.http.interceptor.request = (config) => {
    if (token) {
      config.header.Authorization = 'Bearer ' + token
    } else {
      config.header.Authorization = ''
    }

    return config
  }

  // 响应拦截
  Vue.prototype.$u.http.interceptor.response = (res) => {
    if (true) {
      return res.data.result
    } else {
      vm.$u.toast('出了点小问题')
      return false
    }
  }
}

export default {
  install
}
```



### uapi

```js
// uapi.js
const install = (Vue, vm) => {
  let getInfo = async () => {
    let res = await vm.$u.get('/info')
    return res
  }

  let getInfoById = async (id) => {
    let res = await vm.$u.get('/info?id=' + id)
    return res
  }

  vm.$u.api = {
    getInfo,
    getInfoById
  };
}

export default {
  install
}
```

