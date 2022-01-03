let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('*Wait ngab*\nProses...')
  let res = `https://melcanz.com/kaneki?nama=${response}&apikey=dUtJxxvp`
  conn.sendFile(m.chat, res, 'kaneki.jpg', `Sudah jadi`, m, false)
}
handler.help = ['logokaneki'].map(v => v + ' <teks>')
handler.tags = ['maker']
handler.command = /^(logokaneki)$/i
handler.limit = true
handler.register = false

module.exports = handler
