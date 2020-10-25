module.exports = (query, request) => {
  const data = {}
  return request(
    'POST',
    `https://music.163.com/api/usertool/task/todo/query`,
    data,
    {
      crypto: 'weapi',
      cookie: query.cookie,
      realIP: query.realIP,
    },
  )
}
