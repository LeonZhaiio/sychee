const fs = require('fs');
const chalk = require('chalk');
/*
 * Create By Sych
 * Follow https://github.com/sychdev
 * Whatsapp : https://whatsapp.com/channel/0029Vb0v3F71yT264EejzJ3e
 */
//~~~~~~~~~~~~< GLOBAL SETTINGS >~~~~~~~~~~~~\\
//settings owner di ./setown.js
global.packname = ''
global.owner = ["6287824856453"]
global.botnum = ["6287824856453"]
global.author = ''
global.owname = ''
global.botname = ''
global.themeemoji = '🪀'
global.f = '> '
global.n = '`'
global.videoMenu = fs.readFileSync('./sychMedia/menu/a46ab7fa39338b1f54d5a.mp4');
global.listv = ['⛏', '●', '■', '✿', '▲', 'ଳ', 'ϟ', '✶', '➤', '✦', '✧', '△', '❀', '⋆𖦹', '□', '𖤓', 'ᨒ', '◇', '𖣂', '々', '〆', 'ᯓ★', '꩜', '✮']
global.emot = ['🌱', '🌻', '🌞', '❄️', '🌿', '💫', '⭐', '🍃', '🔥', '⚡', '🫧', '🌵', '🪺', '🪨', '🪵', '🌪️', '🍄']
global.tempatDB = 'database.json'
global.pairing_code = true
global.fake = {
    tmenu: 'https://fantox-cosplay-api.onrender.com',
	texz: `${botname}`,
	anonim: 'https://fantox-cosplay-api.onrender.com',
	thumbnailUrl: 'https://fantox-cosplay-api.onrender.com',
	thumbnail: 'https://fantox-cosplay-api.onrender.com',
	docs: fs.readFileSync('./src/media/fake.pdf'),
	listfakedocs: ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/pdf'],
}
global.my = {
	yt: '',
	gh: '',
	gc: 'https://chat.whatsapp.com/ElU3i2J4EkOF9czValHog0',
	ch: '120363383347233294@newsletter',
}
global.limit = {
	free: 999,
	premium: 999,
	vip: 'VIP'
}
global.uang = {
	free: 100000,
	premium: 1000000,
	vip: 10000000
}
global.mess = {
	key0: 'Apikey mu telah habis silahkan kunjungi\nhttps://my.hitori.pw',
	owner: 'lu bkn owner',
	admin: 'lu bkn atmin',
	botAdmin: 'gw bkn atmin bro',
	group: 'cma buat grup aj',
	private: 'cm di prvt cht',
	prem: 'lu bkn user premium',
	wait: 'bentar duluu',
	error: 'eror bro!',
	done: 'udh lunas yh'
}
global.APIs = {
	hitori: 'https://my.hitori.pw/api',
}
global.APIKeys = {
	'https://my.hitori.pw/api': 'htrkey-awokawok',
}
//~~~~~~~~~~~~~~~< PROCESS >~~~~~~~~~~~~~~~\\
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});
