/**
 * 生成用于https://github.com/Rock-Candy-Tea/hexo-circle-of-friends项目的json格式数据
 * @param friendList {{avatar:String,description:String,link:String,feed:String,name:String,subSuffix?:String,banSub?:Boolean}[]} 友链列表
 * @returns
 */
function index(friendList) {
  const result = []
  friendList.forEach((friend) => {
    if (!friend.banSub) {
      const friendInfo = [
        friend.name,
        friend.feed || friend.link,
        friend.avatar
      ]
      if (friend.subSuffix) {
        friendInfo.push(friend.subSuffix)
      }
      result.push(friendInfo)
    }
  })
  return { friends: result }
}

module.exports = index
