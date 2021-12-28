const fs = require('fs')
const { exec } = require('child_process')

let handler = async (m, { conn, args, usedPrefix, text, command }) => {
    try {
      //  let q = m.quoted ? { message: { [m.quoted.mtype]: m.quoted } } : m
        //let mime = ((m.quoted ? m.quoted : m.msg).mimetype || '')
       // let media = await conn.downloadAndSaveMediaMessage(q)
         let q = m.quoted ? m.quoted : m 
         let mime = (q.msg || q).mimetype || ''
    let tes = await q.download()
    conn.sendFile(m.chat, tes, 'ok.mp3', null, m, false, { duration : args[0] })
    } catch (e) {
        throw e
    }
}
handler.help = ['detikvn','detikvideo','detikaudio'].map(v => v + '<reply media>')
handler.tags = ['tools']
handler.command = /^detik(vn|audio|video)$/i

module.exports = handler