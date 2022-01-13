let handler = async (m, { conn, text }) => {
  conn.sendBut(m.chat, `${pickRandom(['Ho oh','Sepertinya Begitu','Kayaknya','Kayaknya nggak','Nggak','Nggak mungkin'])}
`.trim(), wm, 'pencet', '.sendal', m, m.mentionedJid ? {
  contextInfo: {
    mentionedJid: m.mentionedJid
  }
} : {})
}
handler.help = ['apakah <teks>?']
handler.tags = ['kerang']
handler.customPrefix = /(\?$)/
handler.command = /^apakah$/i
handler.owner = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
