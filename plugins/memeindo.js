let fetch = require('node-fetch')
let handler = async (m, { text }) => {
  let url = await fetch('https://api.zeks.xyz/api/memeindo?apikey=caliph_71')
  let barbar = await url.json()
conn.sendButtonImg(m.chat, barbar.result,'*MEME INDO*', wm,'NEXT','.memeindo', m)
}
handler.help = ['memeindo']
handler.tags = ['fun']
handler.command = /^(memeindo)$/i
handler.private = false
handler.limit = false

module.exports = handler
