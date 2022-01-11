//Bikin APIKEY SENDIRI YA BANG
//BIAR GW GAK BOROS
let fetch = require('node-fetch')

let handler = async(m, { conn, text }) => {

  if (!text) return conn.reply(m.chat, 'Harap Masukan nama apk', m)

  await m.reply('Searching...')
    let res = await fetch(`https://api.dhnjing.xyz/api/apk/happymod?apps=${text}&apikey=ac2b8e84eee24a3e7000`)
    let json = await res.json()
    if (res.status !== 200) throw await res.text()
    if (!json.status) throw json
    let thumb = await (await fetch(json.result[0].apps_thumb)).buffer()
    let hasil = `*── 「 HAPPY MOD 」 ──*

▢ *NAMA*: ${json.result[0].apps_name}
▢ *RATING*: ${json.result[0].apps_rate}
▢ *LINK*:  
${json.result[0].apps_linkdl}
`

    conn.sendFile(m.chat, thumb, 'playstore.jpg', hasil, m)
}
handler.help = ['happymod'].map(v => v + ' <nama apk>')
handler.tags = ['internet']
handler.command = /^(happymod)$/i
handler.limit = true

module.exports = handler
