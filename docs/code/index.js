async function msg(title) {
  console.log(title)

  await new Promise((resolve) => setTimeout(resolve, 5000))
  return
}

msg('test').then(() => console.log(123))
