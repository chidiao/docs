// scrollToTop
export const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop)
    window.scrollTo(0, c - c / 8)
  }
}

// smoothScroll
export const smoothScroll = (element) =>
  document.querySelector(element).scrollIntoView({
    behavior: 'smooth'
  })

// onScrollStop
export const onScrollStop = (callback) => {
  let isScrolling
  window.addEventListener(
    'scroll',
    (e) => {
      clearTimeout(isScrolling)
      isScrolling = setTimeout(() => {
        callback()
      }, 150)
    },
    false
  )
}

// getScrollPosition
export const getScrollPosition = (el = window) => ({
  x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
  y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop
})

// elementIsVisibleInViewport
export const elementIsVisibleInViewport = (el, partiallyVisible = false) => {
  const { top, left, bottom, right } = el.getBoundingClientRect()
  const { innerHeight, innerWidth } = window
  return partiallyVisible
    ? ((top > 0 && top < innerHeight) || (bottom > 0 && bottom < innerHeight)) &&
        ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
    : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth
}

// bottomVisible
export const bottomVisible = () =>
  document.documentElement.clientHeight + window.scrollY >=
  (document.documentElement.scrollHeight || document.documentElement.clientHeight)
