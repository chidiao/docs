function User(name) {
  this.name = name

  function test() {
    console.log(this.name)
  }
}

User.prototype.type = 'people'

let user = new User('xiaobai')

console.log(user)
let arr = Object.keys(user)
console.log(arr)
