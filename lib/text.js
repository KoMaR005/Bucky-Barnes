const moment = require('moment-timezone');
const menu = (prefix, pushname) => {
	var tim = new Date().getHours(), salam = tim > 2 && tim < 4 ? "Daybreak" : tim < 11 ? "Morning" : tim < 16 ? "Afternoon" : tim < 19 ? "Evening" : "Night"
	let p = 0
	return `◄͜͡❂Bucky Barnes✪

Good ${salam} ${pushname}, ДОБРОЕ ВРЕМЯ СУТОК! :)

*📚 Всего команд : 137*
*🪀 Владелец* : @${configs.ownerList[0].split('@')[0]}
*🖊️ Prefix* : Multi
*⏰ Time* : ${moment().utcOffset('1000').format('YYYY-MM-DD HH:mm:ss')} WIB
*💌 Rest API's* : https://zeks.me

*ТОЛЬКО АДМИНЫ*
⿻${prefix}Группа _ОТКР|ЗАКР_
⿻${prefix}АнтиСсылка _ВКЛ|ВЫКЛ⿻
⿻${prefix}Антипросмотр _ВКЛ|ВЫКЛ_
⿻${prefix}Приветствие _ВКЛ|ВЫКЛ_
⿻${prefix}Покинул _ВКЛ|ВЫКЛ_
⿻${prefix}setgroupicon _replyImage_
⿻${prefix}setgroupname _text_
⿻${prefix}setgroupdesc _text_
⿻${prefix}hidetag _text_
⿻${prefix}ДатьАдмина _@tag_
⿻${prefix}СнятьАдмина _@tag_
⿻${prefix}Удалить _@tag_
⿻${prefix}Добавить _номер без +_
⿻${prefix}getpp _@tag_
⿻${prefix}Внимание
⿻${prefix}СсылкаГруппы
⿻${prefix}ОтозватьСсылку
⿻${prefix}leave

*ЗАГРУЗКИ*
⿻${prefix}play _query_
⿻${prefix}playvid _query_
⿻${prefix}youtubedl _query_
⿻${prefix}ytmp3 _link_
⿻${prefix}ytmp4 _link_
⿻${prefix}igstory _username_
⿻${prefix}ig _link_
⿻${prefix}joox _song_

*СТИКЕРЫ*
⿻${prefix}СтикерВм _pack|author_
⿻${prefix}ВзятьНаклейку _pack|author_
⿻${prefix}toimg _replySticker_
⿻${prefix}togif _replySticker_
⿻${prefix}semoji _emoji_
⿻${prefix}ОгненыйСтикер
⿻${prefix}stickernobg
⿻${prefix}СтикерГиф
⿻${prefix}Стикер

*АНИМЭ*
⿻${prefix}anime _query_
⿻${prefix}manga _query_
⿻${prefix}chara _query_
⿻${prefix}waifu

*ОБРАЗОВАНИЕ*
⿻${prefix}nulis _text_
⿻${prefix}brainly _query_
⿻${prefix}kbbi _query_
⿻${prefix}wiki _query_

*ПОИСК*
⿻${prefix}playstore _apk_
⿻${prefix}happymod _apk_
⿻${prefix}iguser _username_
⿻${prefix}igstalk _username_
⿻${prefix}ytsearch _query_
⿻${prefix}ytplaylist _query_
⿻${prefix}ytchannel _channel_
⿻${prefix}shoope _product_
⿻${prefix}spotify _song_
⿻${prefix}gsmarena _hp_
⿻${prefix}searchmusic _replyAudio_
⿻${prefix}wallpaper _query_
⿻${prefix}pinterest _query_
⿻${prefix}googleimage _query_
⿻${prefix}jagokata _kata_

*ГОРОСКОП*
⿻${prefix}jodoh _kamu|dia_
⿻${prefix}artinama _nama_
⿻${prefix}artimimpi _mimpi_

*РАЗНОЕ*
⿻${prefix}fml
⿻${prefix}randomquran
⿻${prefix}meme
⿻${prefix}darkjoke
⿻${prefix}pantun
⿻${prefix}nickepep
⿻${prefix}quotes
⿻${prefix}estetikpic

*СОЗДАТЕЛЬ ТЕКСТА*
⿻${prefix}wolflogo _text1|text2_
⿻${prefix}logoaveng _text1|text2_
⿻${prefix}phlogo _text1|text2_
⿻${prefix}marvellogo _text1|text2_
⿻${prefix}gtext _text1|text2_
⿻${prefix}pubglogo _text1|text2_
⿻${prefix}snowwrite _text1|text2_
⿻${prefix}watercolour _text1|text2_
⿻${prefix}harta _text_
⿻${prefix}thundertext _text_
⿻${prefix}flametext _text_
⿻${prefix}glowtext _text_
⿻${prefix}smoketext _text_
⿻${prefix}lithgtext _text_
⿻${prefix}flowertext _text_
⿻${prefix}bneon _text_
⿻${prefix}Матрица _text_
⿻${prefix}breakwall _text_
⿻${prefix}GНеон _text_
⿻${prefix}dropwater _text_
⿻${prefix}tfire _text_
⿻${prefix}sandw _text_
⿻${prefix}epep _text_
⿻${prefix}gplaybutton _text_
⿻${prefix}splaybutton _text_
⿻${prefix}text3dbox _text_
⿻${prefix}text3d _text_
⿻${prefix}logobp _text_
⿻${prefix}leavest _text_
⿻${prefix}tlight _text_
⿻${prefix}Наруто _text_
⿻${prefix}КроссФаирЛого _text_
⿻${prefix}КСлого _text_
⿻${prefix}crismes _text_

*СОЗДАТЕЛЬ ИЗОБРАЖЕНИЙ*
⿻${prefix}missing _text1|text2|text3|@tag_
⿻${prefix}Календарь _replyImage / @tag_
⿻${prefix}drawing _replyImage / @tag_
⿻${prefix}sketch _replyImage / @tag_

*ДРУГОЕ*
⿻${prefix}tomp3 _replyVideo_
⿻${prefix}removebg _replyImage / @tag_
⿻${prefix}tts _code|text_
⿻${prefix}qrencode _text_
⿻${prefix}barcode _text_
⿻${prefix}jadwalsholat _daerah_
⿻${prefix}jadwaltv _channel_
⿻${prefix}tebakgambar

*ИНФОРМАЦИЯ*
⿻${prefix}stickermenu
⿻${prefix}Владелец
⿻${prefix}limit
⿻${prefix}info
⿻${prefix}listvn

*ВЛАДЕЛЕЦ*
⿻${prefix}setpp _replyImage_
⿻${prefix}eval _text_
⿻${prefix}term _code_
⿻${prefix}block _@tag_
⿻${prefix}unblock _@tag_
⿻${prefix}join _link_
⿻${prefix}bc _text_
⿻${prefix}addvn _replyAudio/vn_
⿻${prefix}delvn _name_
⿻${prefix}premium add _@tag_
⿻${prefix}premium del _@tag_
⿻${prefix}premium list
⿻${prefix}clearall
⿻${prefix}resetlimit
⿻${prefix}self
⿻${prefix}Публичный
`
}

const ingfo = `Этот бот сдается в аренду Цена:
1 неделя: 300
1 месяц: 1000
постоянный: 2000
ЕСЛИ ЗАИНТЕРЕСОВАЛ НАПИШИТЕ #Владелец
`

const listCode = `Kode bahasa jgviy tidak ada\n  Code       Bahasa\n    sq        Albanian\n    ar        Arabic\n    hy        Armenian\n    ca        Catalan\n    zh        Chinese\n    zh-cn     Chinese (China)\n    zh-tw     Chinese (Taiwan)\n    zh-yue    Chinese (Cantonese)\n    hr        Croatian\n    cs        Czech\n    da        Danish\n    nl        Dutch\n    en        English\n    en-au     English (Australia)\n    en-uk     English (United Kingdom)\n    en-us     English (United States)\n    eo        Esperanto\n    fi        Finnish\n    fr        French\n    de        German\n    el        Greek\n    ht        Haitian Creole\n    hi        Hindi\n    hu        Hungarian\n    is        Icelandic\n    id        Indonesian\n    it        Italian\n    ja        Japanese\n    ko        Korean\n    la        Latin\n    lv        Latvian\n    mk        Macedonian\n    no        Norwegian\n    pl        Polish\n    pt        Portuguese\n    pt-br     Portuguese (Brazil)\n    ro        Romanian\n    ru        Russian\n    sr        Serbian\n    sk        Slovak\n    es        Spanish\n    es-es     Spanish (Spain)\n    es-us     Spanish (United States)\n    sw        Swahili\n    sv        Swedish\n    ta        Tamil\n    th        Thai\n    tr        Turkish\n    vi        Vietnamese\n    cy        Welsh\n    `

const mess = {
             wait: 'Минуточку, пожалуйста',
			 group: 'Эту команду можно использовать только в группах!',
			 admin: 'Может использоваться только администратором!',
			 botAdmin: 'Эту команду можно использовать, только если бот является администратором группы',
			 limit: 'Срок действия вашего лимита истек, \n\nПримечание: лимит будет сбрасываться каждый раз В 00.00',
			 ownerOnly: 'Эта команда только для владельца!'
}

module.exports = {
	menu,
	ingfo,
	listCode,
	mess
}
