let fs = require('fs')
let handler = async (m) => {
let helloaine = fs.readFileSync('mp3/WhatsApp-Audio-2021-03-18-at-21.37.59.opus')
conn.sendFile(m.chat, helloaine, '', '', m, true)
}

handler.customPrefix = /^(p|pp|ppp|pppp|ppppp|pppppp|ppppppp)$/i
handler.command = new RegExp

handler.limit = true
handler.mods = false 
handler.premium = false
handler.group = false 
handler.private = false

module.exports = handler
