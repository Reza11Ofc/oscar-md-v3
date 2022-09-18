let fs = require('fs')
let handler = async (m) => {
let helloaine = fs.readFileSync('mp3/WhatsApp-Audio-2021-06-21-at-20.27.39.opus')
conn.sendFile(m.chat, helloaine, '', '', m, true)
}

handler.customPrefix = /^(bacot|bct|su|baka|peler)$/i
handler.command = new RegExp

handler.limit = true
handler.mods = false 
handler.premium = false
handler.group = false 
handler.private = false

module.exports = handler
