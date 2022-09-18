let fs = require('fs')
let handler = async (m) => {
let helloaine = fs.readFileSync('mp3/WhatsApp-Ptt-2021-05-30-at-00.27.37.opus')
conn.sendFile(m.chat, helloaine, '', '', m, true)
}

handler.customPrefix = /^(Syg|sayang|syk|sayank|yang|synk|synk|yank|ayank|aynk|ayang|ayng|ayk|ayg|ayy)$/i
handler.command = new RegExp

handler.limit = true
handler.mods = false 
handler.premium = false
handler.group = false 
handler.private = false

module.exports = handler
