let fetch = require('node-fetch')

let handler = async(m, { conn, text }) => {

  if (!text) return conn.reply(m.chat, 'Harap Masukan nama hero', m)

  await m.reply('Searching...')
    let res = await fetch(`https://caliphapi.com/api/playstore/search?apikey=wVLiUzSa&q=${text}`)
    let json = await res.json()
    if (res.status !== 200) throw await res.text()
    if (!json.status) throw json
    let thumb = await (await fetch(json.result[0].icon)).buffer()
    let hasil = `*── 「 PLAY STORE 」 ──*

▢ *NAMA*: ${json.result[0].title}
▢ *APP ID*: ${json.result[0].appId}
▢ *DEVELOPER*: ${json.result[0].developer}
▢ *STATUS*: ${json.result[0].priceText}
▢ *HARGA*: ${json.result[0].price}
▢ *RATING*: ${json.result[0].scoreText}
▢ *DESKRIPSI*: ${json.result[0].summary}
▢ *LINK*:  
${json.result[0].url}
`

    conn.sendFile(m.chat, thumb, 'playstore.jpg', hasil, m)
}
handler.help = ['playstore'].map(v => v + ' <nama apk>')
handler.tags = ['internet']
handler.command = /^(playstore)$/i
handler.limit = true

module.exports = handler
