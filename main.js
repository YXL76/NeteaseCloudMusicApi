const request = require('./util/request')

let obj = {}

const weblog = require('./module/weblog')
obj['weblog'] = function (data) {
  return weblog(data, request)
}

const video_url = require('./module/video_url')
obj['video_url'] = function (data) {
  return video_url(data, request)
}

const video_timeline_recommend = require('./module/video_timeline_recommend')
obj['video_timeline_recommend'] = function (data) {
  return video_timeline_recommend(data, request)
}

const video_timeline_all = require('./module/video_timeline_all')
obj['video_timeline_all'] = function (data) {
  return video_timeline_all(data, request)
}

const video_sub = require('./module/video_sub')
obj['video_sub'] = function (data) {
  return video_sub(data, request)
}

const video_group_list = require('./module/video_group_list')
obj['video_group_list'] = function (data) {
  return video_group_list(data, request)
}

const video_group = require('./module/video_group')
obj['video_group'] = function (data) {
  return video_group(data, request)
}

const video_detail_info = require('./module/video_detail_info')
obj['video_detail_info'] = function (data) {
  return video_detail_info(data, request)
}

const video_detail = require('./module/video_detail')
obj['video_detail'] = function (data) {
  return video_detail(data, request)
}

const video_category_list = require('./module/video_category_list')
obj['video_category_list'] = function (data) {
  return video_category_list(data, request)
}

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

const user_cloud_detail = require('./module/user_cloud_detail')
obj['user_cloud_detail'] = function (data) {
  return user_cloud_detail(data, request)
}

const user_cloud_del = require('./module/user_cloud_del')
obj['user_cloud_del'] = function (data) {
  return user_cloud_del(data, request)
}

const user_cloud = require('./module/user_cloud')
obj['user_cloud'] = function (data) {
  return user_cloud(data, request)
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

const top_mv = require('./module/top_mv')
obj['top_mv'] = function (data) {
  return top_mv(data, request)
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

const song_order_update = require('./module/song_order_update')
obj['song_order_update'] = function (data) {
  return song_order_update(data, request)
}

const song_detail = require('./module/song_detail')
obj['song_detail'] = function (data) {
  return song_detail(data, request)
}

const simi_user = require('./module/simi_user')
obj['simi_user'] = function (data) {
  return simi_user(data, request)
}

const simi_song = require('./module/simi_song')
obj['simi_song'] = function (data) {
  return simi_song(data, request)
}

const simi_playlist = require('./module/simi_playlist')
obj['simi_playlist'] = function (data) {
  return simi_playlist(data, request)
}

const simi_mv = require('./module/simi_mv')
obj['simi_mv'] = function (data) {
  return simi_mv(data, request)
}

const simi_artist = require('./module/simi_artist')
obj['simi_artist'] = function (data) {
  return simi_artist(data, request)
}

const share_resource = require('./module/share_resource')
obj['share_resource'] = function (data) {
  return share_resource(data, request)
}

const setting = require('./module/setting')
obj['setting'] = function (data) {
  return setting(data, request)
}

const send_text = require('./module/send_text')
obj['send_text'] = function (data) {
  return send_text(data, request)
}

const send_playlist = require('./module/send_playlist')
obj['send_playlist'] = function (data) {
  return send_playlist(data, request)
}

const search_suggest = require('./module/search_suggest')
obj['search_suggest'] = function (data) {
  return search_suggest(data, request)
}

const search_multimatch = require('./module/search_multimatch')
obj['search_multimatch'] = function (data) {
  return search_multimatch(data, request)
}

const search_hot_detail = require('./module/search_hot_detail')
obj['search_hot_detail'] = function (data) {
  return search_hot_detail(data, request)
}

const search_hot = require('./module/search_hot')
obj['search_hot'] = function (data) {
  return search_hot(data, request)
}

const search_default = require('./module/search_default')
obj['search_default'] = function (data) {
  return search_default(data, request)
}

const search = require('./module/search')
obj['search'] = function (data) {
  return search(data, request)
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

const related_allvideo = require('./module/related_allvideo')
obj['related_allvideo'] = function (data) {
  return related_allvideo(data, request)
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

const rebind = require('./module/rebind')
obj['rebind'] = function (data) {
  return rebind(data, request)
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

const personalized_privatecontent_list = require('./module/personalized_privatecontent_list')
obj['personalized_privatecontent_list'] = function (data) {
  return personalized_privatecontent_list(data, request)
}

const personalized_privatecontent = require('./module/personalized_privatecontent')
obj['personalized_privatecontent'] = function (data) {
  return personalized_privatecontent(data, request)
}

const personalized_newsong = require('./module/personalized_newsong')
obj['personalized_newsong'] = function (data) {
  return personalized_newsong(data, request)
}

const personalized_mv = require('./module/personalized_mv')
obj['personalized_mv'] = function (data) {
  return personalized_mv(data, request)
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

const mv_url = require('./module/mv_url')
obj['mv_url'] = function (data) {
  return mv_url(data, request)
}

const mv_sublist = require('./module/mv_sublist')
obj['mv_sublist'] = function (data) {
  return mv_sublist(data, request)
}

const mv_sub = require('./module/mv_sub')
obj['mv_sub'] = function (data) {
  return mv_sub(data, request)
}

const mv_first = require('./module/mv_first')
obj['mv_first'] = function (data) {
  return mv_first(data, request)
}

const mv_exclusive_rcmd = require('./module/mv_exclusive_rcmd')
obj['mv_exclusive_rcmd'] = function (data) {
  return mv_exclusive_rcmd(data, request)
}

const mv_detail_info = require('./module/mv_detail_info')
obj['mv_detail_info'] = function (data) {
  return mv_detail_info(data, request)
}

const mv_detail = require('./module/mv_detail')
obj['mv_detail'] = function (data) {
  return mv_detail(data, request)
}

const mv_all = require('./module/mv_all')
obj['mv_all'] = function (data) {
  return mv_all(data, request)
}

const msg_private_history = require('./module/msg_private_history')
obj['msg_private_history'] = function (data) {
  return msg_private_history(data, request)
}

const msg_private = require('./module/msg_private')
obj['msg_private'] = function (data) {
  return msg_private(data, request)
}

const msg_notices = require('./module/msg_notices')
obj['msg_notices'] = function (data) {
  return msg_notices(data, request)
}

const msg_forwards = require('./module/msg_forwards')
obj['msg_forwards'] = function (data) {
  return msg_forwards(data, request)
}

const msg_comments = require('./module/msg_comments')
obj['msg_comments'] = function (data) {
  return msg_comments(data, request)
}

const lyric = require('./module/lyric')
obj['lyric'] = function (data) {
  return lyric(data, request)
}

const logout = require('./module/logout')
obj['logout'] = function (data) {
  return logout(data, request)
}

const login_status = require('./module/login_status')
obj['login_status'] = function (data) {
  return login_status(data, request)
}

const login_refresh = require('./module/login_refresh')
obj['login_refresh'] = function (data) {
  return login_refresh(data, request)
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

const hot_topic = require('./module/hot_topic')
obj['hot_topic'] = function (data) {
  return hot_topic(data, request)
}

const homepage_dragon_ball = require('./module/homepage_dragon_ball')
obj['homepage_dragon_ball'] = function (data) {
  return homepage_dragon_ball(data, request)
}

const homepage_block_page = require('./module/homepage_block_page')
obj['homepage_block_page'] = function (data) {
  return homepage_block_page(data, request)
}

const history_recommend_songs_detail = require('./module/history_recommend_songs_detail')
obj['history_recommend_songs_detail'] = function (data) {
  return history_recommend_songs_detail(data, request)
}

const history_recommend_songs = require('./module/history_recommend_songs')
obj['history_recommend_songs'] = function (data) {
  return history_recommend_songs(data, request)
}

const follow = require('./module/follow')
obj['follow'] = function (data) {
  return follow(data, request)
}

const fm_trash = require('./module/fm_trash')
obj['fm_trash'] = function (data) {
  return fm_trash(data, request)
}

const event_forward = require('./module/event_forward')
obj['event_forward'] = function (data) {
  return event_forward(data, request)
}

const event_del = require('./module/event_del')
obj['event_del'] = function (data) {
  return event_del(data, request)
}

const event = require('./module/event')
obj['event'] = function (data) {
  return event(data, request)
}

const dj_toplist_popular = require('./module/dj_toplist_popular')
obj['dj_toplist_popular'] = function (data) {
  return dj_toplist_popular(data, request)
}

const dj_toplist_pay = require('./module/dj_toplist_pay')
obj['dj_toplist_pay'] = function (data) {
  return dj_toplist_pay(data, request)
}

const dj_toplist_newcomer = require('./module/dj_toplist_newcomer')
obj['dj_toplist_newcomer'] = function (data) {
  return dj_toplist_newcomer(data, request)
}

const dj_toplist_hours = require('./module/dj_toplist_hours')
obj['dj_toplist_hours'] = function (data) {
  return dj_toplist_hours(data, request)
}

const dj_toplist = require('./module/dj_toplist')
obj['dj_toplist'] = function (data) {
  return dj_toplist(data, request)
}

const dj_today_perfered = require('./module/dj_today_perfered')
obj['dj_today_perfered'] = function (data) {
  return dj_today_perfered(data, request)
}

const dj_sublist = require('./module/dj_sublist')
obj['dj_sublist'] = function (data) {
  return dj_sublist(data, request)
}

const dj_sub = require('./module/dj_sub')
obj['dj_sub'] = function (data) {
  return dj_sub(data, request)
}

const dj_recommend_type = require('./module/dj_recommend_type')
obj['dj_recommend_type'] = function (data) {
  return dj_recommend_type(data, request)
}

const dj_recommend = require('./module/dj_recommend')
obj['dj_recommend'] = function (data) {
  return dj_recommend(data, request)
}

const dj_radio_hot = require('./module/dj_radio_hot')
obj['dj_radio_hot'] = function (data) {
  return dj_radio_hot(data, request)
}

const dj_program_toplist_hours = require('./module/dj_program_toplist_hours')
obj['dj_program_toplist_hours'] = function (data) {
  return dj_program_toplist_hours(data, request)
}

const dj_program_toplist = require('./module/dj_program_toplist')
obj['dj_program_toplist'] = function (data) {
  return dj_program_toplist(data, request)
}

const dj_program_detail = require('./module/dj_program_detail')
obj['dj_program_detail'] = function (data) {
  return dj_program_detail(data, request)
}

const dj_program = require('./module/dj_program')
obj['dj_program'] = function (data) {
  return dj_program(data, request)
}

const dj_personalize_recommend = require('./module/dj_personalize_recommend')
obj['dj_personalize_recommend'] = function (data) {
  return dj_personalize_recommend(data, request)
}

const dj_paygift = require('./module/dj_paygift')
obj['dj_paygift'] = function (data) {
  return dj_paygift(data, request)
}

const dj_hot = require('./module/dj_hot')
obj['dj_hot'] = function (data) {
  return dj_hot(data, request)
}

const dj_detail = require('./module/dj_detail')
obj['dj_detail'] = function (data) {
  return dj_detail(data, request)
}

const dj_catelist = require('./module/dj_catelist')
obj['dj_catelist'] = function (data) {
  return dj_catelist(data, request)
}

const dj_category_recommend = require('./module/dj_category_recommend')
obj['dj_category_recommend'] = function (data) {
  return dj_category_recommend(data, request)
}

const dj_category_excludehot = require('./module/dj_category_excludehot')
obj['dj_category_excludehot'] = function (data) {
  return dj_category_excludehot(data, request)
}

const dj_banner = require('./module/dj_banner')
obj['dj_banner'] = function (data) {
  return dj_banner(data, request)
}

const digitalAlbum_purchased = require('./module/digitalAlbum_purchased')
obj['digitalAlbum_purchased'] = function (data) {
  return digitalAlbum_purchased(data, request)
}

const digitalAlbum_ordering = require('./module/digitalAlbum_ordering')
obj['digitalAlbum_ordering'] = function (data) {
  return digitalAlbum_ordering(data, request)
}

const daily_signin = require('./module/daily_signin')
obj['daily_signin'] = function (data) {
  return daily_signin(data, request)
}

const countries_code_list = require('./module/countries_code_list')
obj['countries_code_list'] = function (data) {
  return countries_code_list(data, request)
}

const comment_new = require('./module/comment_new')
obj['comment_new'] = function (data) {
  return comment_new(data, request)
}

const comment_video = require('./module/comment_video')
obj['comment_video'] = function (data) {
  return comment_video(data, request)
}

const comment_playlist = require('./module/comment_playlist')
obj['comment_playlist'] = function (data) {
  return comment_playlist(data, request)
}

const comment_mv = require('./module/comment_mv')
obj['comment_mv'] = function (data) {
  return comment_mv(data, request)
}

const comment_music = require('./module/comment_music')
obj['comment_music'] = function (data) {
  return comment_music(data, request)
}

const comment_like = require('./module/comment_like')
obj['comment_like'] = function (data) {
  return comment_like(data, request)
}

const comment_hotwall_list = require('./module/comment_hotwall_list')
obj['comment_hotwall_list'] = function (data) {
  return comment_hotwall_list(data, request)
}

const comment_hot = require('./module/comment_hot')
obj['comment_hot'] = function (data) {
  return comment_hot(data, request)
}

const comment_floor = require('./module/comment_floor')
obj['comment_floor'] = function (data) {
  return comment_floor(data, request)
}

const comment_event = require('./module/comment_event')
obj['comment_event'] = function (data) {
  return comment_event(data, request)
}

const comment_dj = require('./module/comment_dj')
obj['comment_dj'] = function (data) {
  return comment_dj(data, request)
}

const comment_album = require('./module/comment_album')
obj['comment_album'] = function (data) {
  return comment_album(data, request)
}

const comment = require('./module/comment')
obj['comment'] = function (data) {
  return comment(data, request)
}

const cloudsearch = require('./module/cloudsearch')
obj['cloudsearch'] = function (data) {
  return cloudsearch(data, request)
}

const check_music = require('./module/check_music')
obj['check_music'] = function (data) {
  return check_music(data, request)
}

const cellphone_existence_check = require('./module/cellphone_existence_check')
obj['cellphone_existence_check'] = function (data) {
  return cellphone_existence_check(data, request)
}

const captcha_verify = require('./module/captcha_verify')
obj['captcha_verify'] = function (data) {
  return captcha_verify(data, request)
}

const captcha_sent = require('./module/captcha_sent')
obj['captcha_sent'] = function (data) {
  return captcha_sent(data, request)
}

const batch = require('./module/batch')
obj['batch'] = function (data) {
  return batch(data, request)
}

const banner = require('./module/banner')
obj['banner'] = function (data) {
  return banner(data, request)
}

const artists = require('./module/artists')
obj['artists'] = function (data) {
  return artists(data, request)
}

const artist_top_song = require('./module/artist_top_song')
obj['artist_top_song'] = function (data) {
  return artist_top_song(data, request)
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

const artist_mv = require('./module/artist_mv')
obj['artist_mv'] = function (data) {
  return artist_mv(data, request)
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

const album_songsaleboard = require('./module/album_songsaleboard')
obj['album_songsaleboard'] = function (data) {
  return album_songsaleboard(data, request)
}

const album_newest = require('./module/album_newest')
obj['album_newest'] = function (data) {
  return album_newest(data, request)
}

const album_new = require('./module/album_new')
obj['album_new'] = function (data) {
  return album_new(data, request)
}

const album_list_style = require('./module/album_list_style')
obj['album_list_style'] = function (data) {
  return album_list_style(data, request)
}

const album_list = require('./module/album_list')
obj['album_list'] = function (data) {
  return album_list(data, request)
}

const album_detail_dynamic = require('./module/album_detail_dynamic')
obj['album_detail_dynamic'] = function (data) {
  return album_detail_dynamic(data, request)
}

const album_detail = require('./module/album_detail')
obj['album_detail'] = function (data) {
  return album_detail(data, request)
}

const album = require('./module/album')
obj['album'] = function (data) {
  return album(data, request)
}

const activate_init_profile = require('./module/activate_init_profile')
obj['activate_init_profile'] = function (data) {
  return activate_init_profile(data, request)
}

module.exports = obj
