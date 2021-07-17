# antdv

## Form

### 重要方法

#### getFieldDecorator(id, options)

### Form.Item

一个 Label 对应多个 Input 问题

一个 Item 只允许绑定一个 Field(decorator)，但是 Item 是可以嵌套使用的

```vue
<template>
  <a-form-item label="城市">
    <a-form-item>
      <a-input v-decorator="['province']"></a-input>
    </a-form-item>
    <a-form-item>
      <a-input v-decorator="['city']"></a-input>
    </a-form-item>
    <a-form-item>
      <a-input v-decorator="['region']"></a-input>
    </a-form-item>
  </a-form-item>
</template>
```

## Table

### 开始

基础模板

```vue
<template>
  <a-table :columns="cols" :data-source="list" row-key="id">
    <span slot="action" slot-scope="id, row">
      <a-button>{{ row.id }}</a-button>
    </span>
  </a-table>
</template>
```

表属性

```js
const tb = {
  bordered: true,
  size: 'small',
  ...
}
```

配置列

```js
const cols = [
  {
    title: 'name',
    dataIndex: 'name'
  },
  {
    title: 'action',
    dataIndex: 'id',
    key: 'action',
    scopedSlots: { customRender: 'action' }
  }
]
```

列属性

```js
const col = {
  title: 'gender',
  dataIndex: 'gender',
  width: 200,
  align: 'center',
  key: 'key', // 区分重复dataIndex
  ellipsis: true, // 省略
  filters: [
    { text: '男', value: 1 },
    { text: '女', value: 0 }
  ]
}
```

### 分页模板

```vue
<template>
  <a-table
    :columns="cols"
    :data-source="list"
    row-key="id"
    :pagination="pagination"
    :loading="loading"
    @change="handleTableChange"
  >
  </a-table>
</template>
```

分页配置

```js
const data = {
  cols,
  list: [],
  pagination: {},
  loading: false
}

const methods = {
  handleTableChange(pagination, filters, sorter) {
    let pager = { ...this.pagination }
    pager.current = pagination.current
    this.pagination = pager

    this.getTableData({
      pageNum: pager.current,
      pageSize: 15
    })
  },
  getTableData(params = {}) {
    this.loading = true

    request({
      ...params
    }).then((res) => {
      let { list, pageNum, pageSize, total } = res.data
      let pager = { ...this.pagination }
      pager.current = pageNum
      pager.pageSize = pageSize
      pager.total = total

      this.pagination = pager
      this.list = list
      this.loading = false
    })
  }
}
```

### 编辑行

### 双击行

`customRow`

对行进行单/双击等操作

```html
<a-table :custom-row="(row, index) => onRow(row, index)"></a-table>
```

```js
const methods = {
  onRow(row, index) {
    return {
      props: {
        // 属性
      },
      on: {
        click: (event) => {},
        dblclick: (event) => {},
        contextmenu: (event) => {},
        mouseenter: (event) => {},
        mouseleave: (event) => {}
      }
    }
  }
}
```

### 多选操作
