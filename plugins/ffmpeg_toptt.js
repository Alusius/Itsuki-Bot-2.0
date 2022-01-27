const { toPTT } = require('../lib/converter')
const { MessageType } = require('@adiwajshing/baileys')
let fs = require('fs')
let path = require('path')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
const Elys = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 1,
                            status: 990,
                            surface : 1,
                            message: `To Vn`, //Kasih namalu
                            orderTitle: 'ig: elyas_tzy',
                            thumbnail: fs.readFileSync('./src/Kurumiloli.png'), //Gambarnye
                            sellerJid: '0@s.whatsapp.net'
          
                          }
                        }
                      }
let handler = async (m, { conn, usedPrefix, command }) => {
  let q = m.quoted ? m.quoted : m
  let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
  if (!/video|audio/.test(mime)) throw `Balas audio yang ingin diubah ke voice note dengan caption *${usedPrefix + command}*`
  let media = await q.download()
  let audio = await toPTT(media, 'mp4')
  conn.sendMessage(m.chat, audio, MessageType.audio, {
    quoted: Elys,
    ptt: true
  })
}
handler.help = ['tovn (reply)']
handler.tags = ['audio']

handler.command = /^to(vn|(ptt)?)$/i

module.exports = handler
