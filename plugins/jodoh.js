const fetch = require('node-fetch')
const { sticker } = require('../lib/sticker')
let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `contoh:\n${usedPrefix + command} elyas|dinda annisa`
    let [nama1, nama2] = text.split(/[&|.]/i)
    if (!nama1 || !nama2) throw `contoh:\n${usedPrefix + command} elyas|dinda annisa`

    let res = await fetch(global.API('zeks', '/api/primbonjodoh', { nama1, nama2 }, 'apikey'))
    if (res.status != 200) throw await `${res.status} ${res.statusText}`
    let json = await res.json()
    if (json.status) {
        let { nama1, nama2, thumb, positif, negatif } = json.result
        conn.sendbut(m.chat, `*MASIH KECIL GAUSAH JODOH JODOHAN*\n${read}\n\n\n*NTAR KALAU DITINGGALIN RASANYA SAKIT!*`.trim(),'', ':)', 'huuu')
    }
    else throw json

}
handler.help = ['jodoh'].map(v => v + ' <nama>|<nama doi>')
handler.tags = ['fun']
handler.command = /^(jodoh)$/i

handler.limit = true

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
let read = `${readMore}`
