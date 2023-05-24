# 路由

## 普通路由

```dart
Navigator.of(context).push(
  MaterialPageRoute(
  	builder: (context) => const OrderPage(),
  ),
);
```

## 命名路由

不建议使用命名路由

```dart
@override
Widget build(BuildContext context) {
  return MaterialApp(
    initialRoute: '/',
    routes: {
      '/': (context) => HomePage(),
      '/A': (context) => PageA(),
      '/B': (context) => PageB(),
      '/C': (context) => PageC(),
    },
  );
}
```

```dart
Navigator.of(context).pushNamed("/A");
```

### home

home 参数和根路由，配置一个

```dart
@override
Widget build(BuildContext context) {
  return MaterialApp(
    routes: {
      // '/': (context) => HomePage(),
    },
    home: HomePage(),
  );
}
```

