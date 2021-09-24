// getElementsBiggerThanViewport
export const getElementsBiggerThanViewport = () => {
  const docWidth = document.documentElement.offsetWidth
  return [...document.querySelectorAll('*')].filter((el) => el.offsetWidth > docWidth)
}

// test