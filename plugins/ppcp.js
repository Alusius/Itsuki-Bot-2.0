let fetch = require("node-fetch")

let handler = async (m, { conn }) => {
  let res = await fetch(global.API('LeysCoder', '/api/ppcouple', {}, 'apikey'))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.status) throw json
  let x = json.result.female
  await conn.sendFile(m.chat, json.result.male, '', 'cowo', m)
  await conn.sendButtonImg(m.chat, x, 'cewe', wm, 'next', '.ppcp', m)
}
handler.help = ['ppcouple', 'ppcp']
handler.tags = ['internet']
handler.command = /^(pp(cp|couple))$/i

module.exports = handler
