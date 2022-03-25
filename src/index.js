const yaml = require('js-yaml')
const fs = require('fs')
const { fcirclePlugin } = require('./plugins/index.js')
let friendFiles = []
const result = {}
const files = fs.readdirSync('./data')
const linkList = []
files.forEach(function (item, index) {
  // 压缩或者bese文件是没有相对应的页面的,这里做排除
  if (item.indexOf('.yml') !== -1) {
    friendFiles.push(item)
  }
})
const sortKey = process.env.sortKey || ''
/**
 * 排序
 */
sortKey.split(',').forEach((key) => {
  if (key) {
    result[key] = null
  }
})

friendFiles.forEach((item) => {
  const name = item.split('.')
  const content = yaml.load(fs.readFileSync(`./data/${item}`, 'utf8'))
  linkList.push(...content.link_list)
  content.link_list = content.link_list.filter((item) => {
    if (!item.disable) return item
  })
  if (content.link_list.length > 0) {
    result[name[0]] = content
  }
})

if (!fs.existsSync('./dist')) {
  fs.mkdirSync('./dist')
}

const fcircleData = fcirclePlugin(linkList)
fs.writeFileSync('./dist/index.json', JSON.stringify(result))
fs.writeFileSync('./dist/fcircle.json', JSON.stringify(fcircleData))
