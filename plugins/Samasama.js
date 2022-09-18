let fs = require('fs')
let handler = async (m) => {
let helloaine = fs.readFileSync('mp3/WhatsApp-Ptt-2021-03-10-at-20.35.07.opus')
conn.sendFile(m.chat, helloaine, '', '', m, true)
}

handler.customPrefix = /^(makasi|makasih|makaci|tq|ty|tyy|ok tq)$/i
handler.command = new RegExp

handler.limit = true
handler.mods = false 
handler.premium = false
handler.group = false 
handler.private = false

module.exports = handler
