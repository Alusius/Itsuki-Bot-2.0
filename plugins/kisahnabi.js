let moment = require('moment-timezone')
const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys-md')
let fs = require('fs')
let fetch = require('node-fetch')
let handler = async (m, {text}) => {
if (!text) return conn.reply(m.chat, 'Harap Masukan nama nabi\n\nContoh: .kisahnabi muhammad', m)
  let res = await fetch(`https://leyscoders-api.herokuapp.com/api/nabi?q=${text}&apikey=MIMINGANZ`)
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.result.image) throw json
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let user = global.db.data.users[who]
    let more = String.fromCharCode(8206)
    let readMore = more.repeat(4001)
let anu = `*── 「 KISAH NABI 」 ──*
▢ *Nabi*: ${json.result.nabi}
${readMore}
${json.result.kisah}`
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           hydratedContentText: anu,
           locationMessage: { 
           jpegThumbnail: await(await fetch(json.result.image)).buffer() }, 
           hydratedFooterText: wm,
           hydratedButtons: [{
             urlButton: {
               displayText: '📍instagram',
               url: instagram
               }
               
             }]
         }
       }
     }), { userJid: m.sender, quoted: m });
    //conn.reply(m.chat, text.trim(), m)
    return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
}
handler.help = ['kisahnabi'].map(v => v + ' <nama nabi>')
handler.tags = ['islam']
handler.command = /^(kisahnabi)$/i

module.exports = handler
