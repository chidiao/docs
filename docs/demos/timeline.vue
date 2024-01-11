<template>
  <div class="tl">
    <div class="t">2023</div>
    <div class="t">2022</div>
    <div class="t">2021</div>
    <div class="t">2020</div>
  </div>
</template>

<style lang="scss" scoped>
.t {
  padding: 4px 8px;
  position: relative;

  &::before,
  &::after {
    content: '';
    background: black;
    position: absolute;
    left: 0;
    top: 50%;
  }

  &::before {
    width: 8px;
    height: 8px;
    border-radius: 4px;
    transform: translate(-50%, -50%);
  }

  &::after {
    width: 1px;
    height: 100%;

    transform: translate(-50%, -50%);
  }

  &:first-of-type::after {
    height: 50%;
    transform: translate(-50%, 0);
  }

  &:last-of-type::after {
    height: 50%;
    top: 0;
    transform: translate(-50%, 0);
  }
}
</style>
