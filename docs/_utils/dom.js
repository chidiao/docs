// 获取超出视口的元素
export const getElementsBiggerThanViewport = () => {
  const docWidth = document.documentElement.offsetWidth
  return [...document.querySelectorAll('*')].filter((el) => el.offsetWidth > docWidth)
}

// test
