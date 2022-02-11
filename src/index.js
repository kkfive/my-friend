const yaml = require('js-yaml')
const fs = require('fs')
let friendFiles = []
const result = {}
const files = fs.readdirSync('../data')
files.forEach(function (item, index) {
  // 压缩或者bese文件是没有相对应的页面的,这里做排除
  if (item.indexOf('.yml') !== -1) {
    friendFiles.push(item)
  }
})

friendFiles.forEach((item) => {
  const name = item.split('.')
  result[name[0]] = yaml.load(fs.readFileSync(`../data/${item}`, 'utf8'))
})

fs.writeFileSync('../dist/index.json', JSON.stringify(result))
