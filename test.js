var data = [
  {id: 1,
    children: [ {
      id: 12,
      children: [
          {id: 121, children: [{id: 3232, children: [{id: 321}]}]}
      ] },
    { id: 13,
      children: [
          {id: 131, children: [{id: 3232, children: [{id: 321}]}]}
      ] },
    { id: 14,
      children: [
          {id: 141, children: [{id: 3232, children: [{id: 321}]}]}
      ] } ]
  }, {
    id: 2,
    children: [ {
      id: 22,
      children: [
          {id: 221, children: [{id: 3232, children: [{id: 321}]}]}
      ] },
    { id: 23,
      children: [
          {id: 231, children: [{id: 3232, children: [{id: 321}]}]}
      ] },
    { id: 24,
      children: [
          {id: 241, children: [{id: 3232, children: [{id: 321}]}]}
      ] }
    ] }
]

function stack (data) {
  let queue = [...data]
  console.time('while')
  let count = 0
  while (queue.length) {
    count++
    let cur = queue.shift()
    if (cur.children) {
      queue.push(...cur.children)
    }
  }
  console.log('while', count)
  console.timeEnd('while')
}

var num = 0
function queue (list) {
  list.map(item => {
    num++
    item.children && queue(item.children)
  })
}
stack(data)

console.time('digui')
queue(data)
console.log('digui', num)
console.timeEnd('digui')
