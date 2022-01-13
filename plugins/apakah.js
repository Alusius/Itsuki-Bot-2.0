let handler = async (m, { conn, text }) => {
  conn.reply(m.chat, `${pickRandom(['Ya','Kayaknya','Mungkin','Mungkin tidak','Nggak','Gak mungkin'])}
`.trim(), m, m.mentionedJid ? {
  contextInfo: {
    mentionedJid: m.mentionedJid
  }
} : {})
}
handler.help = ['apakah <teks>?']
handler.tags = ['kerang']
handler.customPrefix = /(\?$)/
handler.command = /^apakah$/i

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
