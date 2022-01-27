const { MessageType } = require('@adiwajshing/baileys')

let handler = async(m, { conn, text }) => {
let [number, pesan] = text.split `|`

    if (!number) return conn.reply(m.chat, 'Silahkan masukan nomor yang akan dispam', m)
    if (!pesan) return conn.reply(m.chat, 'Silahkan masukan pesannya', m)
    if (text > 500) return conn.reply(m.chat, 'Teks Kepanjangan!', m)
    if (text.startsWith('+')) return conn.reply(m.chat, '[!] Tolong masukan Nomor dengan awalaan 62', m)
    if (text.startsWith('@')) return conn.reply(m.chat, '[!] Tolong masukan Nomor dengan awalaan 62', m)

    let korban = `${number}`
    var nomor = m.sender
    let spam1 = `*「 WA SPAMMER 」*\n\nDari : wa.me/${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${pesan}\n\n~By Elyas`
    

    conn.sendMessage(korban + '@s.whatsapp.net', spam1, MessageType.text)
    conn.sendMessage(korban + '@s.whatsapp.net', spam1, MessageType.text)
    conn.sendMessage(korban + '@s.whatsapp.net', spam1, MessageType.text)
    conn.sendMessage(korban + '@s.whatsapp.net', spam1, MessageType.text)
    conn.sendMessage(korban + '@s.whatsapp.net', spam1, MessageType.text)
    conn.sendMessage(korban + '@s.whatsapp.net', spam1, MessageType.text)
    conn.sendMessage(korban + '@s.whatsapp.net', spam1, MessageType.text)
    conn.sendMessage(korban + '@s.whatsapp.net', spam1, MessageType.text)
    conn.sendMessage(korban + '@s.whatsapp.net', spam1, MessageType.text)
    conn.sendMessage(korban + '@s.whatsapp.net', spam1, MessageType.text)

    let logs = `[!] Berhasil mengirim spam wa ke nomor ${korban} 10 kali`
    conn.reply(m.chat, logs, m)
}
handler.help = ['spam <nomor|pesan>', 'spamwa <nomor|pesan>']
handler.tags = ['premium', 'spam']
handler.command = /^(spam|spamwa)$/i
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false

module.exports = handler
