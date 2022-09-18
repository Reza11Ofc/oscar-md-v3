let fs = require('fs')
let handler = async (m) => {
let helloaine = fs.readFileSync('mp3/PTT-20211218-WA0243.opus')
conn.sendFile(m.chat, helloaine, '', '', m, true)
}

handler.customPrefix = /^(ilopyu|iloveyou|i love you|lopyu|ilovyu|loveyou|loveyou|love|❤|i lopyu)$/i
handler.command = new RegExp

handler.limit = true
handler.mods = false 
handler.premium = false
handler.group = false 
handler.private = false

module.exports = handler
