let handler = async (m, { conn }) => {
await m.reply(global.wait)
  conn.sendFile(m.chat, 'https://api.xteam.xyz/randomimage/jahy?apikey=d81ce7556c32afe3', 'Wangy.js', 'Wangy wangy wangy', m)
}
handler.help = ['jahy']
handler.tags = ['nsfw']
handler.command = /^(jahy)$/i
handler.premium = true

module.exports = handler
