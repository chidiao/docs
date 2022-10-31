class Star {
  constructor(name) {
    this.name = name
  }

  sing() {
    console.log('唱')
  }
}

class Kun extends Star {
  dance() {
    console.log('跳')
  }
}

let cxk = new Kun('蔡徐坤')
