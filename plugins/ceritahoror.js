let fetch = require('node-fetch')
let handler = async (m, { conn, command }) => {
  let res = await fetch('https://x-restapi.herokuapp.com/api/random-cehor?apikey=BETA')
  if (res.status != 200) throw await res.text()
  let json = await res.json()
  if (!json.status) throw json
conn.sendFile(m.chat, json.thumb, 'news.jpeg', `
_*${json.judul}*_
_${json.desc}_
`.trim(),m)
}
handler.help = ['ceritahorror', 'ceritahantu']
handler.tags = ['fun']
handler.command = /^ceritahoror|ceritahorror|ceritahantu$/i


module.exports = handler
