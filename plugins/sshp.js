let fetch = require('node-fetch')
let handler = async (m, { conn, command, args }) => {
  if (args[0] === 'Nekopoi.care') {
      conn.reply(m.chat, '*Tobat woy*', m)
      reject
  }
  if (args[0] === 'Nhentai.net') {
      conn.reply(m.chat, '*Tobat woy*', m)
      reject
  }
  let full = /f$/i.test(command)
  if (!args[0]) return conn.reply(m.chat, 'Tidak ada url', m)
  let url = /https?:\/\//.test(args[0]) ? args[0] : 'https://' + args[0]
  let ss = await (await fetch('https://hadi-api.herokuapp.com/api/ssweb?url=' + encodeURIComponent(url) + '&device=phone&full=on')).buffer()
  conn.sendFile(m.chat, ss, 'screenshot.png', url, m)
}
handler.help = ['sshandphone', 'sshp'].map(v => v + ' <url>')
handler.tags = ['internet']
handler.command = /^ss(handphone)?hp?$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler