# 路由

## 开始

### 路由配置

::: code-group

```dart [main]
GetMaterialApp(
  getPages: Routes.pages,
  initialRoute: Routes.login,
  unknownRoute: Routes.notfound,
);

Get.to(Home());

Get.back();
```

```dart [routes]
class Routes {
  static const String login = '/login';
  static const String home = '/home';

  static final List<GetPage> pages = [
    GetPage(
      name: login,
      page: () => const LoginPage(),
      binding: LoginBinding(),
    ),
    GetPage(
      name: home,
      page: () => const HomePage(),
    ),
  ];
}
```

:::

### 命名路由

```dart
Get.toNamed('/login');
```

### 路由携带数据

接收任何数据类型

```dart
Get.toNamed(
  Routes.Order,
  arguments: {
    'id': 6,
    'page': 1,
    'size': 10,
  },
);

print(Get.arguments);
```

### 没有返回

```dart
// 移除一个路由记录
Get.off(Home());
Get.offNamed('/home');

// 移除所有路由记录
Get.offAll(Home());
Get.offAllNamed('/home');
```

### 返回携带数据

```dart
// 等待接收返回的数据
var data = await Get.to(Next());

// 返回并携带数据
Get.back(result: 'success');
```

### 动态 URL

```dart
GetPage(
  name: '/order/:id',
  page: () => OrderPage(),
);

Get.to('/order/6?page=1&size=10');

print(Get.parameters['id']);
print(Get.parameters['page']);
print(Get.parameters['size']);
```

### 中间件

## 交互

### SnackBar

### Dialog

### BottomSheet
