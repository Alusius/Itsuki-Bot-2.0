const free = 2500
const prem = 5000
let handler = async (m, { conn, usedPrefix, isPrems }) => {
  if (db.data.users[m.sender].level < 1) conn.sendBut(m.chat, `Naikkan level kamu dengar mengetikkan\n${usedPrefix}levelup`, wm, 'Naikkan Level', '.levelup', m)
  let time = db.data.users[m.sender].lastclaim + 86400000
  if (new Date - db.data.users[m.sender].lastclaim < 86400000) conn.sendBut(m.chat, `Kamu sudah mengklaim klaim harian hari ini\ntunggu selama ${msToTime(time - new Date())} lagi`, wm, 'ok', 'ok', m)
  db.data.users[m.sender].exp += isPrems ? prem * db.data.users[m.sender].level : free * db.data.users[m.sender].level
  conn.sendBut(m.chat, `+${isPrems ? prem * db.data.users[m.sender].level : free * db.data.users[m.sender].level} XP\n\nsemakin tinggi level, semakin tinggi juga XP yang didapat`, wm, 'Beli Limit', '.buy',m)
  db.data.users[m.sender].lastclaim = new Date * 1
}
handler.help = ['claim']
handler.tags = ['xp']
handler.command = /^(daily|claim)$/i

handler.fail = null
handler.exp = 0

module.exports = handler

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return hours + " jam " + minutes + " menit"
}
