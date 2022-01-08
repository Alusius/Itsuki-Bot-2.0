const dir = [
  'https://file.io/WG9Zro11P8Nd',
  'https://file.io/XjpTNo5S2TEg',
  'https://file.io/ozPfYRnBiTWY',
  'https://file.io/ZUEIZzcLr4xY',
  'https://file.io/Ckt14JpmbmAH',
  'https://file.io/Rw9Eh1Prsem2'
];
let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, dir[Math.floor(Math.random() * dir.length)], 'dadu.webp', '', m)
}
handler.help = ['dadu']
handler.tags = ['sticker', 'fun']
handler.command = /^dadu$/i

module.exports = handler
