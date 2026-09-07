# TypeScript

## interface 和 type 的区别？

**interface 接口**

主要用于定义对象机构，可以声明合并和扩展

- 只能描述 对象、函数、类，不能定义基本类型

- 可以重复声明，自动合并
- 可以继承和扩展，使用 extends 关键字
- 无法类型编程

**type 类型别名**

可以定义任何类型，基本类型、联合类型、元组，擅长计算和映射

- 任何类型

- 不支持合并，重复定义会报错
- 可以使用 & ，不如 extends 智能
- 有编程能力，可以使用 `in`、`keyof`、`infer`、`extends` 生成新类型

**使用场景**

- 公共 api ，组件 props ，使用 interface ，方便合并与扩展

- 联合类型，使用 type ，只有 type 支持
- 定义元组，只能使用 type
- 泛型/编程，使用 type ，如 `keyof` 、`typeof`
- class ，使用 interface ，
