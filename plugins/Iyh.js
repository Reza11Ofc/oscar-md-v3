let fs = require('fs')
let handler = async (m) => {
let helloaine = fs.readFileSync('./mp3/iya.opus')
conn.sendFile(m.chat, helloaine, '', '', m, true)
}

handler.customPrefix = /^(Iy|iya|y|bot|EzaBot|EzaBot-MD)$/i
handler.command = new RegExp

handler.limit = true
handler.mods = false 
handler.premium = false
handler.group = false 
handler.private = false

module.exports = handler
