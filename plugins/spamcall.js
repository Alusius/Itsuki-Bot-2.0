let fetch = require('node-fetch')

let handler = async(m, { conn, text }) => {

  if (!text) return conn.reply(m.chat, `Harap Masukan nomor target tanpa awalan 0
contoh: 

.spamcall 087123456789
Contoh SALAH❌!

.spamcall 87123456789
Contoh BENAR✅`, m)

  await m.reply('Menghubungi...')
    let res = await fetch(`https://caliphapi.com/api/spamcall?no=${text}&apikey=ELYASXD`)
    let json = await res.json()
    if (res.status !== 200) throw await res.text()
    if (!json.status) throw json
    let hasil = `${json.result}
`

    m.reply(hasil)
}
handler.help = ['spamcall'].map(v => v + ' <no target>')
handler.tags = ['premium']
handler.command = /^(spamcall)$/i
handler.limit = true
handler.premium = true

module.exports = handler
