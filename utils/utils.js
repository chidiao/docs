// 获取URL参数
export const getURLParameters = (url = location.search) =>
  (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(
    (a, v) => ((a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1)), a),
    {}
  )

// 复制到剪切板
export const copyToClipboard = (str) => {
  const el = document.createElement('textarea')
  el.value = str
  el.setAttribute('readonly', '')
  el.style.position = 'absolute'
  el.style.left = '-9999px'
  document.body.appendChild(el)
  const selected = document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false
  el.select()
  document.execCommand('copy')
  document.body.removeChild(el)
  if (selected) {
    document.getSelection().removeAllRanges()
    document.getSelection().addRange(selected)
  }
}

// 获取form数据对象
export const formToObject = (form) =>
  Array.from(new FormData(form)).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: value
    }),
    {}
  )

// 返回宽度大于视口容器的元素
export const getElementsBiggerThanViewport = () => {
  const docWidth = document.documentElement.offsetWidth
  return [...document.querySelectorAll('*')].filter((el) => el.offsetWidth > docWidth)
}

// getScrollPosition
export const getScrollPosition = (el = window) => ({
  x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
  y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop
})

// 是否划到浏览器底部，浏览器底部是否可见
export const bottomVisible = () =>
  document.documentElement.clientHeight + window.scrollY >=
  (document.documentElement.scrollHeight || document.documentElement.clientHeight)

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

// onClickOutside
export const onClickOutside = (element, callback) => {
  document.addEventListener('click', (e) => {
    if (!element.contains(e.target)) callback()
  })
}

// 元素是否在视口可见
export const elementIsVisibleInViewport = (el, partiallyVisible = false) => {
  const { top, left, bottom, right } = el.getBoundingClientRect()
  const { innerHeight, innerWidth } = window
  return partiallyVisible
    ? ((top > 0 && top < innerHeight) || (bottom > 0 && bottom < innerHeight)) &&
        ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
    : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth
}

// isBrowser
export const isBrowser = () => ![typeof window, typeof document].includes('undefined')

// isNode
export const isNode = () => typeof process !== 'undefined' && !!process.versions && !!process.versions.node

// 节流
export const throttle = (fn, wait) => {
  let inThrottle, lastFn, lastTime
  return function () {
    const context = this,
      args = arguments
    if (!inThrottle) {
      fn.apply(context, args)
      lastTime = Date.now()
      inThrottle = true
    } else {
      clearTimeout(lastFn)
      lastFn = setTimeout(function () {
        if (Date.now() - lastTime >= wait) {
          fn.apply(context, args)
          lastTime = Date.now()
        }
      }, Math.max(wait - (Date.now() - lastTime), 0))
    }
  }
}

// 防抖
export const debounce = (fn, ms = 0) => {
  let timeoutId
  return function (...args) {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => fn.apply(this, args), ms)
  }
}
