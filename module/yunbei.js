module.exports = (query, request) => {
  const data = {}
  // /api/point/today/get
  return request('POST', `https://music.163.com/api/point/signed/get`, data, {
    crypto: 'weapi',
    cookie: query.cookie,
    realIP: query.realIP,
  })
}
