const request = require('./util/request')

let obj = {}

const user_update = require('./module/user_update')
obj['user_update'] = function (data) {
  return user_update(data, request)
}

const user_subcount = require('./module/user_subcount')
obj['user_subcount'] = function (data) {
  return user_subcount(data, request)
}

const user_record = require('./module/user_record')
obj['user_record'] = function (data) {
  return user_record(data, request)
}

const user_playlist = require('./module/user_playlist')
obj['user_playlist'] = function (data) {
  return user_playlist(data, request)
}

const user_level = require('./module/user_level')
obj['user_level'] = function (data) {
  return user_level(data, request)
}

const user_follows = require('./module/user_follows')
obj['user_follows'] = function (data) {
  return user_follows(data, request)
}

const user_followeds = require('./module/user_followeds')
obj['user_followeds'] = function (data) {
  return user_followeds(data, request)
}

const user_event = require('./module/user_event')
obj['user_event'] = function (data) {
  return user_event(data, request)
}

const user_dj = require('./module/user_dj')
obj['user_dj'] = function (data) {
  return user_dj(data, request)
}

const user_detail = require('./module/user_detail')
obj['user_detail'] = function (data) {
  return user_detail(data, request)
}

const user_audio = require('./module/user_audio')
obj['user_audio'] = function (data) {
  return user_audio(data, request)
}

const toplist_detail = require('./module/toplist_detail')
obj['toplist_detail'] = function (data) {
  return toplist_detail(data, request)
}

const toplist_artist = require('./module/toplist_artist')
obj['toplist_artist'] = function (data) {
  return toplist_artist(data, request)
}

const toplist = require('./module/toplist')
obj['toplist'] = function (data) {
  return toplist(data, request)
}

const top_song = require('./module/top_song')
obj['top_song'] = function (data) {
  return top_song(data, request)
}

const top_playlist_highquality = require('./module/top_playlist_highquality')
obj['top_playlist_highquality'] = function (data) {
  return top_playlist_highquality(data, request)
}

const top_playlist = require('./module/top_playlist')
obj['top_playlist'] = function (data) {
  return top_playlist(data, request)
}

const top_list = require('./module/top_list')
obj['top_list'] = function (data) {
  return top_list(data, request)
}

const top_artists = require('./module/top_artists')
obj['top_artists'] = function (data) {
  return top_artists(data, request)
}

const top_album = require('./module/top_album')
obj['top_album'] = function (data) {
  return top_album(data, request)
}

const song_url = require('./module/song_url')
obj['song_url'] = function (data) {
  return song_url(data, request)
}

const song_detail = require('./module/song_detail')
obj['song_detail'] = function (data) {
  return song_detail(data, request)
}

const simi_song = require('./module/simi_song')
obj['simi_song'] = function (data) {
  return simi_song(data, request)
}

const simi_playlist = require('./module/simi_playlist')
obj['simi_playlist'] = function (data) {
  return simi_playlist(data, request)
}

const simi_artist = require('./module/simi_artist')
obj['simi_artist'] = function (data) {
  return simi_artist(data, request)
}

const search_suggest = require('./module/search_suggest')
obj['search_suggest'] = function (data) {
  return search_suggest(data, request)
}

const search_hot_detail = require('./module/search_hot_detail')
obj['search_hot_detail'] = function (data) {
  return search_hot_detail(data, request)
}

const search_default = require('./module/search_default')
obj['search_default'] = function (data) {
  return search_default(data, request)
}

const scrobble = require('./module/scrobble')
obj['scrobble'] = function (data) {
  return scrobble(data, request)
}

const resource_like = require('./module/resource_like')
obj['resource_like'] = function (data) {
  return resource_like(data, request)
}

const related_playlist = require('./module/related_playlist')
obj['related_playlist'] = function (data) {
  return related_playlist(data, request)
}

const register_cellphone = require('./module/register_cellphone')
obj['register_cellphone'] = function (data) {
  return register_cellphone(data, request)
}

const recommend_songs = require('./module/recommend_songs')
obj['recommend_songs'] = function (data) {
  return recommend_songs(data, request)
}

const recommend_resource = require('./module/recommend_resource')
obj['recommend_resource'] = function (data) {
  return recommend_resource(data, request)
}

const program_recommend = require('./module/program_recommend')
obj['program_recommend'] = function (data) {
  return program_recommend(data, request)
}

const playmode_intelligence_list = require('./module/playmode_intelligence_list')
obj['playmode_intelligence_list'] = function (data) {
  return playmode_intelligence_list(data, request)
}

const playlist_update = require('./module/playlist_update')
obj['playlist_update'] = function (data) {
  return playlist_update(data, request)
}

const playlist_tracks = require('./module/playlist_tracks')
obj['playlist_tracks'] = function (data) {
  return playlist_tracks(data, request)
}

const playlist_tags_update = require('./module/playlist_tags_update')
obj['playlist_tags_update'] = function (data) {
  return playlist_tags_update(data, request)
}

const playlist_subscribers = require('./module/playlist_subscribers')
obj['playlist_subscribers'] = function (data) {
  return playlist_subscribers(data, request)
}

const playlist_subscribe = require('./module/playlist_subscribe')
obj['playlist_subscribe'] = function (data) {
  return playlist_subscribe(data, request)
}

const playlist_order_update = require('./module/playlist_order_update')
obj['playlist_order_update'] = function (data) {
  return playlist_order_update(data, request)
}

const playlist_name_update = require('./module/playlist_name_update')
obj['playlist_name_update'] = function (data) {
  return playlist_name_update(data, request)
}

const playlist_hot = require('./module/playlist_hot')
obj['playlist_hot'] = function (data) {
  return playlist_hot(data, request)
}

const playlist_highquality_tags = require('./module/playlist_highquality_tags')
obj['playlist_highquality_tags'] = function (data) {
  return playlist_highquality_tags(data, request)
}

const playlist_detail = require('./module/playlist_detail')
obj['playlist_detail'] = function (data) {
  return playlist_detail(data, request)
}

const playlist_desc_update = require('./module/playlist_desc_update')
obj['playlist_desc_update'] = function (data) {
  return playlist_desc_update(data, request)
}

const playlist_delete = require('./module/playlist_delete')
obj['playlist_delete'] = function (data) {
  return playlist_delete(data, request)
}

const playlist_create = require('./module/playlist_create')
obj['playlist_create'] = function (data) {
  return playlist_create(data, request)
}

const playlist_catlist = require('./module/playlist_catlist')
obj['playlist_catlist'] = function (data) {
  return playlist_catlist(data, request)
}

const personalized_newsong = require('./module/personalized_newsong')
obj['personalized_newsong'] = function (data) {
  return personalized_newsong(data, request)
}

const personalized_djprogram = require('./module/personalized_djprogram')
obj['personalized_djprogram'] = function (data) {
  return personalized_djprogram(data, request)
}

const personalized = require('./module/personalized')
obj['personalized'] = function (data) {
  return personalized(data, request)
}

const personal_fm = require('./module/personal_fm')
obj['personal_fm'] = function (data) {
  return personal_fm(data, request)
}

const lyric = require('./module/lyric')
obj['lyric'] = function (data) {
  return lyric(data, request)
}

const logout = require('./module/logout')
obj['logout'] = function (data) {
  return logout(data, request)
}

const login_cellphone = require('./module/login_cellphone')
obj['login_cellphone'] = function (data) {
  return login_cellphone(data, request)
}

const login = require('./module/login')
obj['login'] = function (data) {
  return login(data, request)
}

const likelist = require('./module/likelist')
obj['likelist'] = function (data) {
  return likelist(data, request)
}

const like = require('./module/like')
obj['like'] = function (data) {
  return like(data, request)
}

const follow = require('./module/follow')
obj['follow'] = function (data) {
  return follow(data, request)
}

const fm_trash = require('./module/fm_trash')
obj['fm_trash'] = function (data) {
  return fm_trash(data, request)
}

const daily_signin = require('./module/daily_signin')
obj['daily_signin'] = function (data) {
  return daily_signin(data, request)
}

const comment_new = require('./module/comment_new')
obj['comment_new'] = function (data) {
  return comment_new(data, request)
}

const comment_like = require('./module/comment_like')
obj['comment_like'] = function (data) {
  return comment_like(data, request)
}

const comment_hotwall_list = require('./module/comment_hotwall_list')
obj['comment_hotwall_list'] = function (data) {
  return comment_hotwall_list(data, request)
}

const comment_floor = require('./module/comment_floor')
obj['comment_floor'] = function (data) {
  return comment_floor(data, request)
}

const comment = require('./module/comment')
obj['comment'] = function (data) {
  return comment(data, request)
}

const cloudsearch = require('./module/cloudsearch')
obj['cloudsearch'] = function (data) {
  return cloudsearch(data, request)
}

const artists = require('./module/artists')
obj['artists'] = function (data) {
  return artists(data, request)
}

const artist_sublist = require('./module/artist_sublist')
obj['artist_sublist'] = function (data) {
  return artist_sublist(data, request)
}

const artist_sub = require('./module/artist_sub')
obj['artist_sub'] = function (data) {
  return artist_sub(data, request)
}

const artist_songs = require('./module/artist_songs')
obj['artist_songs'] = function (data) {
  return artist_songs(data, request)
}

const artist_list = require('./module/artist_list')
obj['artist_list'] = function (data) {
  return artist_list(data, request)
}

const artist_desc = require('./module/artist_desc')
obj['artist_desc'] = function (data) {
  return artist_desc(data, request)
}

const artist_album = require('./module/artist_album')
obj['artist_album'] = function (data) {
  return artist_album(data, request)
}

const album_sublist = require('./module/album_sublist')
obj['album_sublist'] = function (data) {
  return album_sublist(data, request)
}

const album_sub = require('./module/album_sub')
obj['album_sub'] = function (data) {
  return album_sub(data, request)
}

const album_newest = require('./module/album_newest')
obj['album_newest'] = function (data) {
  return album_newest(data, request)
}

const album = require('./module/album')
obj['album'] = function (data) {
  return album(data, request)
}

module.exports = obj
