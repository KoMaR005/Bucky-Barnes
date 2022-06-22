/**
   * Made By Fandyyy 🕴️
   * Subscribe FBOTZ YT
   * Follow https://instagram.com/_nzrlafndi
   * Follow https://github.com/FBOTZ-YT
*/

const fs = require('fs')
const chalk = require('chalk')

//Ubah Disini
global.ownerNumber = ['79773452127','79773452127','0']
global.ownerName = '☣ⒹⓞⓃ ⓀⓞⓂⓐⓇ☣'
global.packname = 'Bucky Barnes'
global.author = 'Whatsapp Bot 2022'
global.prefa = ['','!','.','#','!'] //Ilangin Prefix Yang '' Kalau Gamau No Prefix
global.sessionName = 'sesi'

//Message Nya Ubah Disini
global.mess = {
admin: 'Ты не админ!',
botAdmin: 'Бот не администратор!',
botOwner: 'Ты не мой владелец!',
group: 'Только Группа!',
private: 'Только приватный чат',
wait: 'Загрузка...',
done: 'Выполнено!'
}

//Sesuaikan
global.thumb = fs.readFileSync('./media/ichi.jpeg')
global.donasi = fs.readFileSync('./media/donasi.jpg')
global.thumbnail = fs.readFileSync('./media/ichi.mp4')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})
