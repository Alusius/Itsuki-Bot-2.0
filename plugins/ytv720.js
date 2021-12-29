let limit = 1024
let fetch = require('node-fetch')
const { servers, yt720p } = require('../lib/y2mate')
let handler = async (m, { conn, args, isPrems, isOwner, usedPrefix, command }) => {
  if (!args || !args[0]) throw 'uhm... urlnya mana?'
  let chat = global.db.data.chats[m.chat]
  let server = (args[1] || servers[0]).toLowerCase() 
  try {
    let { dl_link, thumb, title, filesize, filesizeF } = await yt720p(args[0], servers.includes(server) ? server : servers[0])
    let isLimit = (isPrems || isOwner ? 99 : limit) * 1024 < filesize
    m.reply(isLimit ? `Ukuran File: ${filesizeF}\nUkuran file diatas ${limit} MB, download sendiri disini: ${await shortlink(dl_link)}\n\nUntuk bisa di download oleh bot tanpa batas silahkan berlangganan premium` : global.wait)
    let _thumb = {}
    try { _thumb = { thumbnail: await (await fetch(thumb)).buffer() } }
    catch (e) { }
    if (!isLimit) conn.sendFile(m.chat, dl_link, '', `
*Judul:* ${title}
*Ukuran File:* ${filesizeF}
*Source:* ${await shortlink(dl_link)}
  `.trim(), m, 0, {
      ..._thumb,
      asDocument: chat.useDocument
    })
  } catch (e) {
    return await m.reply('Server Error')
}
handler.help = ['mp4', 'v', ''].map(v => 'yt' + v + ` <url> [server: ${servers.join(', ')}]`)
handler.tags = ['downloader']
handler.command = /^ytk?$/i
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = 5

module.exports = handler

async function shortlink(url){
isurl = /https?:\/\//.test(url)
return isurl ? (await require('axios').get('https://tinyurl.com/api-create.php?url='+encodeURIComponent(url))).data : ''}
