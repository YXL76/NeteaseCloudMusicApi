// 歌曲详情

module.exports = (query, request) => {
  const data = {
    c: '[' + query.ids.map((id) => '{"id":' + id + '}').join(',') + ']',
    ids: '[' + query.ids.join(',') + ']',
  }
  return request('POST', 'https://music.163.com/weapi/v3/song/detail', data, {
    crypto: 'weapi',
    cookie: query.cookie,
    realIP: query.realIP,
  })
}
