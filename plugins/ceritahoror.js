let axios = require('axios')

let handler = async (m, { conn, usedPrefix, command }) => {
    let res = await axios.get(API('amel', '/ceritahantu', {}, 'apikey'))

    let json = res.data
    conn.sendBut(m.chat, json.data.judul, json.data.cerita, 'lagi', `${usedPrefix + command}`, m)
}
handler.help = ['ceritahantu']
handler.tags = ['fun']
handler.command = /^(ceritahantu)$/i

module.exports = handler
