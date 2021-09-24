# Snippets

## Dom

<<< @/\_utils/dom.js

## Scroll

<<< @/\_utils/scroll.js

## Form

<<< @/\_utils/form.js

## Function

<<< @/\_utils/function.js

## 三级联动

[china-division](https://github.com/modood/Administrative-divisions-of-China)

[cascader-address-options.js](https://gist.github.com/afc163/7582f35654fd03d5be7009444345ea17)

```js
import provinces from 'china-division/dist/provinces.json'
import cities from 'china-division/dist/cities.json'
import areas from 'china-division/dist/areas.json'

areas.forEach((area) => {
  const matchCity = cities.filter((city) => city.code === area.cityCode)[0]
  if (matchCity) {
    matchCity.children = matchCity.children || []
    matchCity.children.push({
      label: area.name,
      value: area.code
    })
  }
})

cities.forEach((city) => {
  const matchProvince = provinces.filter((province) => province.code === city.provinceCode)[0]
  if (matchProvince) {
    matchProvince.children = matchProvince.children || []
    matchProvince.children.push({
      label: city.name,
      value: city.code,
      children: city.children
    })
  }
})

const options = provinces.map((province) => ({
  label: province.name,
  value: province.code,
  children: province.children
}))

export default options
```

## 更多

[30s](https://www.30secondsofcode.org/)

[lodash](https://lodash.com/)

[简单的二维码](https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=hello)

[微信公众平台如何实现支付宝支付](https://opensupport.alipay.com/support/helpcenter/93/201602621887)
