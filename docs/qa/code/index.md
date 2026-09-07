# Code

## MVC 和 MVVM

Model 负责数据和业务逻辑

View 负责界面展示

Controller 负责用户交互和流程控制

ViewModel 通过**数据绑定**把 View 和 Model 连接起来

**MVC**

Controller 接收请求 → 调用 Model → 渲染整个 View

MVC 总是整页渲染

**API**

Controller 接收请求 → 调用 Model → 返回数据

API 的实现也是 Controller 完成的，但它跳过了 View，不属于 MVC

**Model**

Model 和前后端无关，各自有各自的 Model

Vue 的 Model 就是 data / pinia 里的数据

**ViewModel**

在 Vue 里，ViewModel 就是「组件实例」本身（也就是 `this`）。
