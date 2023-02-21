let tree = [
  {
    node: 2,
    children: [3, 9, 4]
  },
  {
    node: 7,
    children: [2]
  },
  {
    node: 3,
    children: [6]
  },
  {
    node: 4,
    children: [5]
  },
  {
    node: 5,
    children: [8]
  },
  {
    node: 10,
    children: [11]
  }
]

function test(tree) {
  // 替换 children
  function transformChildren(node) {
    if (node.exclude) {
      return
    }

    let { children } = node
    for (let i = 0; i < children.length; i++) {
      let _node = tree.find((item) => item.node == children[i])
      if (_node) {
        let idx = tree.findIndex((item) => item.node == children[i])
        children[i] = tree[idx]
        transformChildren(children[i])
        children[i].exclude = true
      } else {
        if (typeof children[i] == 'number') {
          children[i] = {
            node: children[i]
          }
        }
      }
    }
  }

  // 遍历 + 递归
  for (let i = 0; i < tree.length; i++) {
    transformChildren(tree[i])
  }

  // 替换后的 tree
  let _tree = tree.filter((item) => !item.exclude)

  // 获取 { node, depth }
  function getNode(node, depth = 0) {
    list.push({
      node: node.node,
      depth
    })
    if (node.children) {
      for (let child of node.children) {
        getNode(child, depth + 1)
      }
    }
  }

  // 得到 {node, depth} 数组
  let list = []
  for (let item of _tree) {
    getNode(item)
  }

  // 输出结果
  let maxDepth = Math.max(...list.map((item) => item.depth))
  let result = []
  for (let i = 0; i <= maxDepth; i++) {
    let _list = list.filter((item) => item.depth == i).map((node) => node.node)
    result.push(..._list)
  }

  console.log(result)
  return result
}

test(tree)
