# GetX

[get](https://pub.dev/packages/get)

## 路由

### 普通路由

```dart
Get.to(OrderDetailsPage());

// 官方推荐
Get.to(() => OrderDetailsPage());
```

携带参数

```dart
Get.to(() => OrderDetailsPage(), arguments: {'id': id});

// page
print(Get.arguments);
print(Get.arguments['id']);
```

### 命名路由

```dart
Get.toNamed('/orderDetails?id=6');
Get.toNamed('/orderDetails', arguments: {'id': id});
```

路由注册

```dart
class Routes {
  static const home = '/home';
  static const orderList = '/orderList';
  static const orderDetails = '/orderDetails';

  static final List<GetPage> getPages = [
    GetPage(name: home, page: () => HomePage()),
    GetPage(name: orderList, page: () => OrderListPage()),
    GetPage(name: orderDetails, page: () => OrderDetailsPage()),
  ];
}
```

路由配置

```dart
@override
  Widget build(BuildContext context) {
    return GetMaterialApp(
      initialRoute: Routes.home,
      getPages: Routes.getPages,
    );
  }
```
