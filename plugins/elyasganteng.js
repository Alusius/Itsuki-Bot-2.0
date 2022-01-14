let fs = require('fs')
let handler = async (m) => {
let stc = fs.readFileSync('./media/boo.webp')
conn.sendFile(m.chat, stc, 0, 0, m)
}

handler.customPrefix = /^(huuu)$/i
handler.command = new RegExp

module.exports = handler
