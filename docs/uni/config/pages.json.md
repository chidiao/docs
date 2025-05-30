# pages.json

## pages

### pages

```json
{
  "pages": [
    {
      "path": "pages/index/index",
      "style": {}
    },
    {
      "path": "pages/login/login",
      "style": {},
      "needLogin": false
    }
  ]
}
```

### style

[style](https://uniapp.dcloud.net.cn/collocation/pages.html#style)

### needLogin

仅标记作用，路由中间件可能有用

## subPackages

分包可以放在根目录或 `pages` 里等任意位置

```json
{
  "pages": [],
  "subPackages": [
    // 方案一：适用于大型项目
    // 语义话，标准化
    // 路由和配置繁琐冗余
    {
      "root": "subPackages/user",
      "pages": [{ "path": "login", "path": "info", "path": "edit" }]
    },
    // 方案二：适用于中小型项目
    // 简洁灵活，pkgs可包含各种类型包，不局限于分包
    // 语义和层级关系不明确
    {
      "root": "pkgs/user",
      "pages": [{ "path": "login", "path": "info", "path": "edit" }]
    },
    // 方案三：适用于小型项目
    // 主包和分包统一放在pages目录
    {
      "root": "pages/user",
      "pages": [{ "path": "login", "path": "info", "path": "edit" }]
    },
    // 其他
    // 每个分包都包含pages等目录，更加繁琐，大型多人等项目酌情考虑
    {
      "root": "subPackages/user/pages"
    }
  ]
}
```

## preloadRule

分包预加载

```json
{
  "preloadRule": {
    "pages/index": {
      "network": "wifi",
      "packages": ["pkgs/shop"]
    },
    "pages/user": {
      "network": "all",
      "packages": ["pkgs/user", "pkgs/more"]
    }
  }
}

// network：网络环境，一律按all就行
// packages：可以是多个分包的root或name，name是可选属性
```

## style

[globalstyle](https://uniapp.dcloud.net.cn/collocation/pages.html#globalstyle) 和 [style](https://uniapp.dcloud.net.cn/collocation/pages.html#style)

前者为全局，后者为页面，后者会覆盖前者
