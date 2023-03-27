class User {
  a() {
    console.log('a')
    this.b()
  }

  b() {
    console.log('b')
  }
}

let u = new User()
u.a()
