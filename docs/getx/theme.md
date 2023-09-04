# Theme

## Theme

```dart
Widget build(BuildContext context) {
  return GetMaterialApp(
    theme: ThemeData.light(),
    darkTheme: ThemeData.dark(),
    themeMode: ThemeMode.system,
  );
}

void changeThemeMode() {
  Get.isDarkMode
      ? Get.changeThemeMode(ThemeMode.dark)
      : Get.changeThemeMode(ThemeMode.light);
}
```

### theme

亮色模式下的主题，接收一个 `ThemeData` 值

### darkTheme

暗色模式下的主题，接收一个 `ThemeData` 值

### themeMode

主题模式，是一个枚举类型，包括：

- `ThemeMode.light`
- `ThemeMode.dark`
- `ThemeMode.system`

## ThemeData

## 其他

当我想要在组件内定义主题变量并适配主题模式

```dart
BoxDecoration(
  color: isDark ? Colors.black : Colors.white,
)
```

👇这种方式不具有响应性，值会更新，但不会触发组件重绘

对于切换主题后需要重新打开的页面，响不响应性都无所谓

```dart
bool isDark = Get.isDarkMode == ThemeMode.dark;
```

👇这种方式才具有响应性，但是可能更消耗性能

必要时手动触发重绘吧

```dart
bool isDark = Theme.of(context).brightness == Brightness.dark;
```
