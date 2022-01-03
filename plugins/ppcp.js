let fetch = require('node-fetch')
let handler = async (m, { text }) => {
  let url = await fetch('https://erdwpe-api.herokuapp.com/randomimg/ppcouple')
  let barbar = await url.json()
await conn.sendFile(m.chat, barbar.male, '', 'cowo', m)
await conn.sendButtonImg(m.chat, barbar.female,'cewe', wm,'NEXT','.ppcp', m)
}
handler.help = ['ppcp', 'ppcouple']
handler.tags = ['fun']
handler.command = /^(ppcp|ppcouple)$/i
handler.private = false
handler.limit = false

module.exports = handler
