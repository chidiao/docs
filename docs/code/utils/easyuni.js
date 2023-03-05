export class Router {
  goto(url, type) {
    const _type = this.getRouteType(type)
    const promise = new Promise((reolve, reject) => {
      uni[_type]({
        url,
        success: reolve,
        fail: reject
      })
    })

    return promise
  }

  goBack(delta = 1) {
    uni.navigateBack({ delta })
  }

  getRouteType(type = 'navigateTo') {
    const fullType = ['navigateTo', 'redirectTo', 'reLaunch', 'switchTab']
    const shotType = ['to', 'redirect', 'launch', 'tab']

    if (fullType.includes(type)) {
      return type
    } else if (shotType.includes(type)) {
      return fullType[shotType.indexOf(type)]
    } else {
      return 'navigateTo'
    }
  }
}

export const route = new Router()
export const goto = route.goto
export const goBack = route.goBack
