let fetch = require('node-fetch')

let handler = async(m, { conn, text }) => {

  if (!text) return conn.reply(m.chat, 'Harap Masukan nama nabi\n\nContoh: .kisahnabi muhammad', m)

  await m.reply('Searching...')
    let res = await fetch(`https://leyscoders-api.herokuapp.com/api/nabi?q=${text}&apikey=MIMINGANZ`)
    let json = await res.json()
    if (res.status !== 200) throw await res.text()
    if (!json.status) throw json
    let thumb = await (await fetch(json.result.image)).buffer()
    let hasil = `*── 「 KISAH NABI 」 ──*

▢ *Nabi*: ${json.result.nabi}
▢ *Kisah*:  
${json.result.kisah}
`

    conn.sendFile(m.chat, thumb, 'kisahnabi.jpg', hasil, m)
}
handler.help = ['kisahnabi'].map(v => v + ' <nama nabi>')
handler.tags = ['islam']
handler.command = /^(kisahnabi)$/i

module.exports = handler
