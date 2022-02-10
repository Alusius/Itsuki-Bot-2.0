const dir = [
  'https://file.io/657BjOg4aGoI',
  'https://file.io/AL0q5mlQSxqR',
  'https://file.io/BjqlkEFTmmn4',
  'https://file.io/i2PGiE1BW9EL',
  'https://file.io/Et7oPlFM6PZu',
  'https://file.io/YnpjrWxqDhgM'
];
let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, dir[Math.floor(Math.random() * dir.length)], 'dadu.webp', '', m)
}
handler.help = ['dadu']
handler.tags = ['sticker', 'fun']
handler.command = /^dadu$/i

module.exports = handler
