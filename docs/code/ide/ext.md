# 常用插件

## 项目相关

### Prettier

[Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

代码格式化工具，统一代码风格，支持保存自动格式化。

### UnoCSS

[UnoCSS](https://marketplace.visualstudio.com/items?itemName=antfu.unocss)

UnoCSS 原子化 CSS 的编辑器支持，提示、补全与高亮。

[插件文档](https://unocss.dev/integrations/vscode)

需 `uno.config.ts` 才会生效，找不到配置时插件自动禁用。

### EasyLess

[EasyLess](https://marketplace.visualstudio.com/items?itemName=mrcrowl.easy-less)

Less 编译插件，保存时生成同名 CSS 文件。

```json
{
  "less.compile": {
    "compress": false, // 默认不压缩
    "sourceMap": false, // 默认不生成
    "out": true // 是否生成同名 css 文件，a.less => a.css
  }
}
```

关闭自动生成后，可在 less 文件里通过注释单独指定：

```less
// out: "style.css", compress: true, sourceMap: false
```

### i18n Ally

[i18n Ally](https://marketplace.visualstudio.com/items?itemName=lokalise.i18n-ally)

国际化（i18n）支持，展示、补全翻译 key 等。需配置语言包路径才生效。

```json
{
  "i18n-ally.sourceLanguage": "en",
  "i18n-ally.displayLanguage": "en",
  "i18n-ally.localesPaths": ["locales"],
  "i18n-ally.enabledFrameworks": ["vue"],
  "i18n-ally.keystyle": "flat"
}
```

## 效率工具

### GitLens

[GitLens — Git supercharged](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)

Git 增强，提供行内 blame、文件/行历史、提交对比、CodeLens 等。

### Live Server

[Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

启动本地开发服务器，静态/动态页面实时刷新。

### Code Runner

[Code Runner](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner)

一键运行多种语言的代码片段/文件。

### Version Lens

[Version Lens](https://marketplace.visualstudio.com/items?itemName=pflannery.vscode-versionlens)

用 CodeLens 显示 package 依赖的最新版本。

### Typora: Open in Typora

[Typora: Open in Typora](https://marketplace.visualstudio.com/items?itemName=typora.typora-open-in-typora)

右键将 Markdown 文件在 Typora 中打开。
