// 数组切片
export const arrayChunk = (array, size = 1) => {
  let _array = [...array]
  let result = []

  while (_array.length) {
    result.push(_array.splice(0, size))
  }

  return result
}
