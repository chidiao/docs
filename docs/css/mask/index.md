# Mask

<script setup>
import MaskBase from './Base.vue'
import MaskImage from './Image.vue'
import MaskClip from './Clip.vue'
import GradientBorder from './GradientBorder.vue'
</script>

通过遮罩或裁切来使一个元素部分可见

透明 = 不可见

<MaskBase />

```css
.mask {
  mask-image: url('/svg/heart.svg');
}
```

## Mask Image

可以是图片，也可以是渐变或 svg

透明 = 不可见

<MaskImage />

```css
.mask {
  mask-image: linear-gradient(-90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 70%);
}

.mask {
  mask-image: url('/svg/heart.svg');
}
```

## Mask Clip

<MaskClip />

```scss
.box {
  background: blue;
  border: 16px solid black;
  padding: 16px;
}

.mask {
  mask-clip: content-box;
  mask-clip: padding-box;
  mask-clip: border-box;
  mask-clip: fill-box;
  mask-clip: stroke-box;
  mask-clip: view-box;
}
```

## Mask Composite

多个遮罩如何合并

顶层的遮罩(从前往后)加或减后边的遮罩

```scss
.mask {
  mask-composite: add; // 相加
  mask-composite: subtract; // 相减
  mask-composite: intersect; // 重叠部分
  mask-composite: exclude; // 不重叠部分
}
```

实现渐变 border

创建两个遮罩分别包含和不包含 `padding` 或 `border` ，然后将 `content` 部分的遮罩裁掉

<GradientBorder />

```scss
.mask {
  padding: 8px;
  background: linear-gradient(...);
  mask: linear-gradient(black 0 100%) content-box, linear-gradient(black 0 100%);
  mask-composite: subtract;
}
```
