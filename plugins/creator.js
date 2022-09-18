const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let handler = async (m, {conn}) => {
const vcard = `BEGIN:VCARD
VERSION:3.0
N:;;;
FN: RezaOfc
item.ORG: RezaOfc
item1.TEL;waid=6289606790112:6289606790112@s.whatsapp.net
item1.X-ABLabel:owner selalu ada 
item2.YOUTUBE;type=INTERNET: https://youtube.com/channel/UCoUIE95oCiyo_Ps0l9rhcdw
item2.X-ABLabel:YOUTUBE
item3.ADR:;;Tokyo jepang;;;;
item3.X-ABADR:ac
item3.X-ABLabel:asal kota
item4.URL:https//github.com/RezaOfc
item4.X-ABLabel:Website
END:VCARD`
const sentMsg  = await conn.sendMessage(
    m.chat,
    { 
        contacts: { 
            displayName: 'OWNER BOT', 
            contacts: [{ vcard }]  
        }
    }
)
let jarot = 'https://telegra.ph/file/96fea9eabbc01a01926f6.jpg'
await conn.send3ButtonImg(m.chat, jarot, `*Hai kak @${m.sender.split('@')[0]} 👋,  Itu nomor owner gw…*`, '📮: jngn di spam kack', '𝙎𝙚𝙬𝙖', '.sewa', '𝘽𝙖𝙘𝙠', '.menu', '𝘿𝙤𝙣𝙖𝙨𝙞', '.donasi', sentMsg)}
handler.help = ['owner2', 'creator2']
handler.tags = ['info']

handler.command = /^(owner2|creator2)$/i

module.exports = handler
