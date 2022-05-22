const moment = require('moment-timezone');
const menu = (prefix, pushname) => {
	var tim = new Date().getHours(), salam = tim > 2 && tim < 4 ? "Daybreak" : tim < 11 ? "Morning" : tim < 16 ? "Afternoon" : tim < 19 ? "Evening" : "Night"
	let p = 0
	return `◄͜͡❂Bucky Barnes✪

Good ${salam} ${pushname}, ДОБРОЕ ВРЕМЯ СУТОК! :)

*📚 Всего команд : 135*
*🪀 Владелец* : @${configs.ownerList[0].split('@')[0]}
*🖊️ Prefix* : Multi
*⏰ Время* : ${moment().utcOffset('1000').format('YYYY-MM-DD HH:mm:ss')} WIB
*💌 Rest API's* : https://zeks.me

*ТОЛЬКО ДЛЯ АДМИНОВ*
⿻${prefix}группа _открыть|закрыть_
⿻${prefix}антис сылка _вкл|выкл_
⿻${prefix}анти внимание _вкл|выкл_
⿻${prefix}анти просмотр один раз _вкл|выкл_
⿻${prefix}приветствие _вкл|выкл_
⿻${prefix}покинул _вкл|выкл_
⿻${prefix}сменить иконку группы _замена Иконки_
⿻${prefix}сменить имя группы _текст_
⿻${prefix}установить описание группы _текст_
⿻${prefix}скрыть тег _текст_
⿻${prefix}дать админа _@_
⿻${prefix}снять админа _@_
⿻${prefix}удалить _@tag_
⿻${prefix}добавить _номер без+_
⿻${prefix}внимание
⿻${prefix}ссылка группы
⿻${prefix}отозвать ссылку

*ЗАГРУЗЧИК*
⿻${prefix}воспроизвести _запрос_
⿻${prefix}воспроизвести видео _запрос_
⿻${prefix}youtubedl _запрос_
⿻${prefix}ytmp3 _link_
⿻${prefix}ytmp4 _link_
⿻${prefix}инстаграм сторис_имя пользователя_
⿻${prefix}инстаграм _ссылка_
⿻${prefix}Джукс _песня_

*СТИКЕРЫ*
⿻${prefix}стикер wm _пак|автор_
⿻${prefix}взять наклейку _пак|автор_
⿻${prefix}на изображение _ответить стикер_
⿻${prefix}на гиф _ответить стикер_
⿻${prefix}semoji _emoji_
⿻${prefix}стикерфаир
⿻${prefix}наклейка без бг
⿻${prefix}стикер гиф
⿻${prefix}стикер

*АНИМЭ*
⿻${prefix}аниме _запрос_
⿻${prefix}манга _запрос_
⿻${prefix}чара _запрос_
⿻${prefix}вайфу

*ОБРАЗОВАНИЕ*
⿻${prefix}записывать _текст_
⿻${prefix}умный _запрос_
⿻${prefix}kbbi _запрос_
⿻${prefix}википедия _запрос_

*ПОИСКОВИК*
⿻${prefix}playstore _apk_
⿻${prefix}happymod _apk_
⿻${prefix}инстаграм пользователь _имя пользователя_
⿻${prefix}igstalk _username_
⿻${prefix}ютуб поиск _запрос_
⿻${prefix}ютуб плейлист _запрос_
⿻${prefix}ютуб канал _ссылка_
⿻${prefix}shoope _product_
⿻${prefix}spotify _song_
⿻${prefix}gsmarena _hp_
⿻${prefix}поиск музыки _replyAudio_
⿻${prefix}Обои _запрос_
⿻${prefix}pinterest _query_
⿻${prefix}гугл изображения _запрос_
⿻${prefix}jagokata _kata_

*ГОРОСКОП*
⿻${prefix}jodoh _kamu|dia_
⿻${prefix}значение имени _имя_
⿻${prefix}значение сна _сон_

*СЛУЧАЙНЫЙ*
⿻${prefix}fml
⿻${prefix}randomquran
⿻${prefix}мем
⿻${prefix}черный юмор
⿻${prefix}тяжелоедыхание
⿻${prefix}никэпеп
⿻${prefix}цитаты
⿻${prefix}эстетическое фото

*СОЗДАТЕЛЬ ТЕКСТА*
⿻${prefix}логотипволка _текст1|текст2_
⿻${prefix}логотипмстителя _текст1|текст2_
⿻${prefix}phlogo _text1|text2_
⿻${prefix}логотипmarvel _текст1|текст2_
⿻${prefix}gtext _text1|text2_
⿻${prefix}pubgлоготип _текст1|текст2_
⿻${prefix}снеграйт _текст1|текст2_
⿻${prefix}акварель _текст1|текст2_
⿻${prefix}harta _text_
⿻${prefix}thundertext _text_
⿻${prefix}огненныйтекст _текст_
⿻${prefix}glowtext _text_
⿻${prefix}smoketext _text_
⿻${prefix}lithgtext _text_
⿻${prefix}flowertext _text_
⿻${prefix}bнеон _текст_
⿻${prefix}матрица _текст_
⿻${prefix}волнолом _текст_
⿻${prefix}gнеон _текст_
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
⿻${prefix}naruto _text_
⿻${prefix}крестлоготип _текст_
⿻${prefix}cslogo _text_
⿻${prefix}crismes _text_

*СОЗДАТЕЛЬ ИЗОБРАЖЕНИЙ*
⿻${prefix}розыск _текст1|текст2|текст3|@_
⿻${prefix}календарь _ответ изображение / @_
⿻${prefix}рисунок _ответ изображение / @_
⿻${prefix}эскиз _ответ изображение / @_

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
⿻${prefix}стикерменю
⿻${prefix}владелец
⿻${prefix}лимит
⿻${prefix}инфо
⿻${prefix}listvn

*ВЛАДЕЛЕЦ*
⿻${prefix}сменить изображение профиля _ответ изображение_
⿻${prefix}eval _text_
⿻${prefix}term _code_
⿻${prefix}заблокировать _@tag_
⿻${prefix}разблокировать _@tag_
⿻${prefix}вступить _ссылка_
⿻${prefix}bc _text_
⿻${prefix}addvn _replyAudio/vn_
⿻${prefix}delvn _name_
⿻${prefix}премиум дать _@
⿻${prefix}премиум удалить _@
⿻${prefix}премиум лист
⿻${prefix}отчистить все
⿻${prefix}сбросить лимит
⿻${prefix}личный
⿻${prefix}публичный
`
}

const ingfo = `Этот бот сдается в аренду Цена:
1 неделя: 250 р
1 месяц: 1000 р
постоянный: 2000 р
ЕСЛИ ИНТЕРЕСНО НАПИШИТЕ #владелец
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
