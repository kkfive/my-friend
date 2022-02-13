/**
 * 数据迁移脚本
 */
const { default: axios } = require('axios')
const yaml = require('js-yaml')
const fs = require('fs')
/**
 * 获取友联地址
 * @param {String}} url 友联json地址
 * @returns
 */
const getData = async (url) => {
  return (await axios.get(url)).data
}

/**
 * 分离处理数据
 * @param {Object} data
 */
const splitData = (data) => {
  const giteeList = data.gitee
  const githubList = data.github
  const allList = [...giteeList, ...githubList]
  const result = {}
  allList.forEach((friend) => {
    if (friend.label.length >= 1) {
      const labelName = friend.label[0].name
      const item = {
        avatar: friend.body.avatar,
        description: friend.body.descr,
        link: friend.body.link,
        name: friend.body.name,
        theme: {
          style: friend.body.card_style || 'default',
          siteImage: friend.body.screenshot
        }
      }
      if (result[labelName]) {
        result[labelName].push(item)
      } else {
        result[labelName] = [item]
      }
    }
  })
  return result
}

const init = async () => {
  const res = await getData(
    'https://api.ccknbc.vercel.app/api/github?repo=%27blogroll%27&user=%27ccknbc-actions%27&branch=%27blogroll%27&path=%27blogroll.json%27'
  )
  const friendObj = splitData(res)
  const allLabelList = Object.keys(friendObj)
  allLabelList.forEach((labelName, index) => {
    const res = yaml.dump({
      class_name: labelName,
      class_desc: '',
      link_list: friendObj[labelName]
    })
    fs.writeFileSync(`./data/${index}.yml`, res)
  })
}
init()
