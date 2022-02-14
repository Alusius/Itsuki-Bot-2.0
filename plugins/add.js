let handler = async (m, { conn, text, participants }) => {
if(!text && !m.quoted) throw 'masukkan nomor yang ingin di tambahkan'

let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'

await conn.groupParticipantsUpdate(m.chat, [users], 'add').catch(console.log)
}
handler.help = ['add','+'].map(v => 'o' + v + ' @user')
handler.tags = ['owner']
handler.command = /^(oadd|o\+)$/i

handler.owner = false
handler.group = true
handler.botAdmin = true


module.exports = handler
