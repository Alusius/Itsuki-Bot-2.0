let fetch = require('node-fetch')
let handler = async (m, { text }) => {
  let url = await fetch('https://api.zeks.xyz/api/memeindo?apikey=caliph_71')
  let barbar = await url.json()
conn.sendFile(m.chat, barbar.result, 'memeindo','*MEME INDO*', m)
}
handler.command = /^(memeindo)$/i
handler.private = false
handler.limit = false

module.exports = handler
