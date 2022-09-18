let fs = require('fs')
let handler = async (m) => {
let helloaine = fs.readFileSync('mp3/Loli-Saying-Onii-Chan-Sound.opus')
conn.sendFile(m.chat, helloaine, '', '', m, true)
}

handler.customPrefix = /^(Onichan|Oniichan|oni|chan|onii|can|onican|oniican)$/i
handler.command = new RegExp

handler.limit = true
handler.mods = false 
handler.premium = false
handler.group = false 
handler.private = false

module.exports = handler
