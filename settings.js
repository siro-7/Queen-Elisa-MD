/*
 █▀▀█ █░▒█ █▀▀▀ █▀▀▀ █▄░▒█       █▀▀▀ █░░░ ▀█▀ █▀▀▀█ █▀▀█      
 █░▒█ █░▒█ █▀▀▀ █▀▀▀ █▒█▒█       █▀▀▀ █░░░ ░█░ ▀▀▀▄▄ █▄▄█      
 ▀▀█▄ ▀▄▄▀ █▄▄▄ █▄▄▄ █░░▀█       █▄▄▄ █▄▄█ ▄█▄ █▄▄▄█ █░▒█      


 █░░▒█   ▄█░
 ▒█▒█░   ░█░
 ░▀▄▀░   ▄█▄
 
 siro bot
 𝙋𝙪𝙗𝙡𝙞𝙘 𝘿𝙖𝙩𝙚 - 2022 / 07 / 24
 شكرا لاستخدامك البوت الخاص بي

*/



const fs = require('fs')
const chalk = require('chalk')

//global api
global.fbapi = 'dd79-1aeb-21a3' // Facebook download 2 api

global.APIs = {
	zenz: 'https://zenzapi.xyz', 
}
global.APIKeys = {
	'https://zenzapi.xyz': '01ABEB1E11', //Kalau habis beli sendiri
}

//other
global.owner = ['78586848937'] 
global.pemilik = ['84921619585'] 
global.premium = ['84921228172'] 
global.pengguna = 'siro queen' 
global.botnma = 'Siro Queen'
global.ownernma = 'Siro Bot' 
global.packname = 'Siro Queen Sticker' 
global.author = 'Siro Bot' 
global.sessionName = 'session'
global.prefa = ['#'] 
global.sp = '🔵'
// Alive massage ,┓─━═━━╃✧⊰💎⊱✧╄━━═━─┏
مرحباً عزيزي أنا سيرو بــــ🤖ـــوت

↲ 「  شكراً لاستخدامك لي」

↲ 「  كل ماعليك هو طلب الأوامر」

↲ 「  وأنا سأنفذ طلبك بكل سرور」
━────⊹⊱✙⊰⊹────━
*⇄《رقم صانع البوت 》⇄*

↲ 「https://wa.me/+79586848937」

┛─━═━━╃✧⊰💎⊱✧╄━━═━─┗ 
global.alivelogo = https://telegra.ph/Siro-Bot-07-24
global.alive =`Hello i am alive now

Download song type .yt 
Thanks fro using...`
// Welcome massage  اهلا بك عزيزتي انرتنا
global.welcome = اهلا بك عزيزتي اتمنى ان تحظي بوقت جميل معنا
🌀 Thanks For siro bot
✾ Some bugs fixing
😼♥️
`

global.sendwelcome = `add`
// Good bye شكرا لوجودك معنا الى اللقاء
global.sendgoodbye = `remove`
// Caption 
global.cap = `© 𝐆𝐞𝐧𝐞𝐫𝐚𝐭𝐞𝐝 𝐁𝐲 siro bot 𝐌𝐃`
global.mess = {
    success: '✅ Done!',
    admin: 'you must be admin to use this cmd!',
    botAdmin: 'Bot must be admin neh!',
    owner: 'This cmd is for Elisa bot owner only',
    group: 'oooh sorry this cmd is for groups only!',
    private: 'goossssh it can only used in dms!',
    bot: 'This cmd  its only for the bot host',
    wait: 'Wait Elisa bot processing ',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
global.limitawal = {
    premium: "Infinity", 
    free: 90 
}
    global.rpg = {
        darahawal: 100,
        besiawal: 15,
        goldawal: 10,
        emeraldawal: 5,
        umpanawal: 5,
        potionawal: 1
     }    

global.thumb = fs.readFileSync('./image/Elisa.jpg')
global.imgalive = fs.readFileSync('./image/Elisa.jpg')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
