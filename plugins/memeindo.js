let fetch = require('node-fetch')
let handler = async (m, { text }) => {
  let url = await fetch('https://api.zeks.xyz/api/memeindo?apikey=caliph_71')
  let barbar = await url.json()
await conn.sendButtonImg(m.chat, barbar.result, '*MEME INDO*', wm, 'NEXT', '.memeindo',m, 0, { thumbnail: await (await fetch(url)).buffer() })
}
handler.help = ['memeindo']
handler.tags = ['fun']
handler.command = /^(memeindo)$/i
handler.limit = false

module.exports = handler
