// 编辑歌单

module.exports = (query, request) => {
  query.cookie.os = 'pc'
  const data = {
    '/api/playlist/desc/update': `{"id":${query.id},"desc":"${query.desc}"}`,
    '/api/playlist/update/name': `{"id":${query.id},"name":"${query.name}"}`,
  }
  return request('POST', `https://music.163.com/weapi/batch`, data, {
    crypto: 'weapi',
    cookie: query.cookie,
    proxy: query.proxy,
    realIP: query.realIP,
  })
}
