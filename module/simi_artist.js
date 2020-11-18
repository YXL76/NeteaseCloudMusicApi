// 相似歌手
const config = require('../util/config.json')
module.exports = (query, request) => {
  if (typeof query.cookie === 'string') {
    query.cookie = cookieToJson(query.cookie)
  }
  if (!('MUSIC_U' in query.cookie))
    query.cookie.MUSIC_A = config.anonymous_token
  const data = {
    artistid: query.id,
  }
  return request(
    'POST',
    `https://music.163.com/weapi/discovery/simiArtist`,
    data,
    {
      crypto: 'weapi',
      cookie: query.cookie,
      realIP: query.realIP,
    },
  )
}
