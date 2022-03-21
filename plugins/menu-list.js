//UNTUK PENGGUNA WHATSAPP BUSSINES
//GUNAKAN MENU KE 2 YAH
//MOHON MAAF SEBELUMNYA
let { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys-md')
let levelling = require('../lib/levelling')
let fs = require('fs')
const util = require('util')
const os = require('os')
let path = require('path')
let { createHash} = require('crypto')
let fetch = require('node-fetch')
let { perfomance } = require('perf_hooks')
let moment = require('moment-timezone')
const defaultMenu = {
  before:`
╭────❑ *MENU* ❑────
❑────❑ %me
│✾ Version: %version
│✾ Library: Baileys-MD
│✾ Mode: ${global.opts['self'] ? 'Self' : 'publik'}
│✾ Runtime: %uptime
╰❑
╭────❑「 INFO 」❑────
${informasibot}
╰────
%readmore`.trimStart(),
  header: '┌─〔 %category 〕',
  body: '├ %cmd %islimit %isPremium',
  footer: '└────\n',
  after: ``,
}

let handler = async (m, { conn, usedPrefix: _p, args, command }) => {
  let tags
  let teks = `${args[0]}`.toLowerCase()
  let arrayMenu = ['all', 'absen', 'rpg', 'anime', 'downloader', 'game', 'fun', 'xp', 'github', 'group', 'image', 'quotes', 'admin', 'info', 'internet', 'islam', 'kerang', 'maker', 'owner', 'suara', 'premium', 'quotes', 'info', 'stalk', 'shortlink', 'sticker', 'tools']
  if (!arrayMenu.includes(teks)) teks = '404'
  if (teks == 'all') tags = {
  'main': '*MENU UTAMA*',
  'advanced': '*ADVANCED*',
  'absen': '*MENU ABSEN*',
  'anime': '*MENU ANIME*',
  'sticker': '*MENU CONVERT*',
  'downloader': '*MENU DOWNLOADER*',
  'xp': '*MENU EXP*',
  'fun': '*MENU FUN*',
  'game': '*MENU GAME*',
  'github': '*MENU GITHUB*',
  'group': '*MENU GROUP*',
  'image': '*MENU IMAGE*',
  'info': '*MENU INFO*',
  'internet': '*INTERNET*',
  'islam' : '*MENU ISLAMI*',
  'kerang': '*MENU KERANG*',
  'maker': '*MENU MAKER*',
  'owner': '*MENU OWNER*',
  'Pengubah Suara': '*PENGUBAH SUARA*',
  'premium': '*PREMIUM MENU*',
  'quotes' : '*MENU QUOTES*',
  'rpg': '*MENU RPG*',
  'stalk': '*MENU STALK*',
  'shortlink': '*SHORT LINK',
  'tools': '*MENU TOOLS*',
  'vote': '*MENU VOTING*',
  }
  if (teks == 'absen') tags = {
    'absen': 'MENU ABSEN',
    'vote': '*MENU VOTING*',
  }
  if (teks == 'anime') tags = {
  'anime': '*MENU ANIME*',
  }
  if (teks == 'sticker') tags = {
  'sticker': '*MENU CONVERT*',
  }
  if (teks == 'downloader') tags = {
  'downloader': '*MENU DOWNLOADER*',
  }
  if (teks == 'xp') tags = {
  'xp': '*MENU EXP*',
  }
  if (teks == 'fun') tags = {
  'fun': '*MENU FUN*',
  }
  if (teks == 'game') tags = {
  'game': '*MENU GAME*',
  }
  if (teks == 'github') tags = {
  'github': '*MENU GITHUB*',
  }
  if (teks == 'group') tags = {
  'group': '*MENU GROUP*',
  }
  if (teks == 'image') tags = {
  'image': '*MENU IMAGE*',
  }
  if (teks == 'info') tags = {
  'info': '*MENU INFO*',
  }
  if (teks == 'internet') tags = {
  'internet': '*INTERNET*',
  }
  if (teks == 'islam') tags = {
  'islam' : '*MENU ISLAMI*',
  }
  if (teks == 'kerang') tags = {
  'kerang': '*MENU KERANG*',
  }
  if (teks == 'maker') tags = {
  'maker': '*MENU MAKER*',
  }
  if (teks == 'owner') tags = {
    'owner': 'Owner',
    'host': 'Host',
    'advanced': 'Advanced'
  }
  if (teks == 'suara') tags = {
  'Pengubah Suara': '*PENGUBAH SUARA*',
  }
  if (teks == 'premium') tags = {
  'premium': '*PREMIUM MENU*',
  }
  if (teks == 'quotes') tags = {
  'quotes' : '*MENU QUOTES*',
  }
  if (teks == 'rpg') tags = {
  'rpg': '*MENU RPG*',
  }
  if (teks == 'stalk') tags = {
  'stalk': '*MENU STALK*',
  }
  if (teks == 'shortlink') tags = {
  'shortlink': '*SHORT LINK',
  }
  if (teks == 'tools') tags = {
  'tools': '*MENU TOOLS*',
  }

  try {
    let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))
    let { exp, limit, level, role, registered } = global.db.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let name = await conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let waktuwib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
let tulisan = `
${ucapan()} ${name}. Have a great day！
Terimakasih Atas Kunjungan Anda`.trim()
let sangek = `Berikut adalah list Menu Bot. klik pada "Click Here!" untuk melihat list menu.`

let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
    return {
      help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
      tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
      prefix: 'customPrefix' in plugin,
      limit: plugin.limit,
      premium: plugin.premium,
      enabled: !plugin.disabled,
    }
  })
    if (teks == '404') {
        const template = generateWAMessageFromContent(m.key.remoteJid, proto.Message.fromObject({
        listMessage: {
            title: `*Hai* ${name}👋`,
            description: `${ucapan()}\n*SILAHKAN PILIH MENU*\n*DI BAWAH YA*`,
            buttonText: 'LIST MENU',
            listType: 1,
            footerText: "",
            mtype: 'listMessage',
            sections: [
              {
                "rows": [{
                  "title": `Pemilik Bot`,
                  "description": "👤owner ganteng disini👤",
                  "rowId": `.owner`
                },{
                  "title": "INFO BOT",
                  "description": "informasi bot🔍",
                  "rowId": `${_p}? info`
                }],
                "title": "Informasi Bot"
              }, {
                "rows": [{
                  "title": `SEMUA PERINTAH`,
                  "description": "Semua fitur bisa dilihat disini🗿👍",
                  "rowId": '.menu2'
                  }, {
                  "title": "ABSEN & VOTING",
                  "description": "Untuk absen dan voting di dalam Grub🗒️",
                  "rowId": `${_p}? absen`
                }, {
                  "title": "ANIME MENU",
                  "description": "Fitur Buat Kaum Wibu🗿🙏",
                  "rowId": `${_p}? anime`
                }, {
                  "title": "STICKER & CONVERTER",
                  "description": "Fitur untuk membuat stiker whatsapp🍭",
                  "rowId": `${_p}? sticker`
                }, {
                  "title": "DOWNLOADER MENU",
                  "description": "Fitur untuk mendownload sesuatu▶️🎵",
                  "rowId": `${_p}? downloader`
                }, {
                  "title": "EXP & LIMIT",
                  "description": "Cek profilmu di datatbase bot!🥇",
                  "rowId": `${_p}? xp`
                }, {
                  "title": "FUN MENU",
                  "description": "Buat seru seruan🤡",
                  "rowId": `${_p}? fun`
                }, {
                  "title": "GAME MENU",
                  "description": "fitur untuk main game di dalam bot🎮",
                  "rowId": `${_p}? game`
                }, {
                  "title": "GITHUB MENU",
                  "description": "Untuk pengguna github🐱",
                  "rowId": `${_p}? github`
                }, {
                  "title": "GROUP MENU",
                  "description": "Hanya bisa di gunakan di dalam grup👥",
                  "rowId": `${_p}? group`
                }, {
                  "title": "IMAGE MENU",
                  "description": "Fitur untuk mencari gambar🖼️",
                  "rowId": `${_p}? image`
                }, {
                  "title": "INTERNET MENU",
                  "description": "fitur untuk searching🔎",
                  "rowId": `${_p}? internet`
                }, {
                  "title": "ISLAM MENU",
                  "description": "Islamic menu🕌",
                  "rowId": `${_p}? islam`
                }, {
                  "title": "KERANG AJAIB",
                  "description": "bertanya kepada kerang?!🤔",
                  "rowId": `${_p}? kerang`
                }, {
                  "title": "MAKER MENU",
                  "description": "Fitur untuk membuat gambar dan logo🙊",
                  "rowId": `${_p}? maker`
                }, {
                  "title": "OWNER MENU",
                  "description": "Fitur Khusus Buat Owner Ganteng👻",
                  "rowId": `${_p}? owner`
                }, {
                  "title": "PENGUBAH SUARA",
                  "description": "Fitur untuk mengubah suara🎤",
                  "rowId": `${_p}? suara`
                }, {
                  "title": "PREMIUM MENU",
                  "description": "Khusus pengguna premium!🤴",
                  "rowId": `${_p}? premium`
                }, {
                  "title": "QUOTES MENU",
                  "description": "Buat nyari kata kata🗣️",
                  "rowId": `${_p}? quotes`
                },{
                  "title": "STALKER MENU",
                  "description": "Stalking sosmed🧐",
                  "rowId": `${_p}? stalk`
                }, {
                  "title": "SHORT LINK",
                  "description": "Untuk memperpendek Link🔗",
                  "rowId": `${_p}? shortlink`
                }, {
                  "title": "TOOLS MENU",
                  "description": "Futur alat🧰",
                  "rowId": `${_p}? tools`
                }
                  ],
                "title": "LIST MENU"
              }
            ], "contextInfo": {
              "stanzaId": m.key.id,
              "participant": m.sender,
              "quotedMessage": m.message
            }
    }}), { userJid: m.participant || m.key.remoteJid, quoted: m });
    return await conn.relayMessage(
        m.key.remoteJid,
        template.message,
        { messageId: template.key.id }
    )
    }
    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let plugin of help)
        if (plugin.tags && plugin.tags.includes(tag))
          if (plugin.help) groups[tag].push(plugin)
    }
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Dipersembahkan oleh https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
        before,
        ...Object.keys(tags).map(tag => {
          return header.replace(/%category/g, tags[tag]) + '\n' + [
            ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
              return menu.help.map(help => {
                return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                  .replace(/%islimit/g, menu.limit ? '🅛' : '')
                  .replace(/%isPremium/g, menu.premium ? '🅟' : '')
                  .trim()
              }).join('\n')
            }),
            footer
          ].join('\n')
        }),
        after
      ].join('\n')
      text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.user.name,
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      name,
      ucapan: ucapan(),
      name, weton, week, date, dateIslamic, time,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    let pp = fs.readFileSync('./src/welcome.jpg')
    await conn.sendHButtonLoc(m.chat,pp, text.trim(), '🅛=limit 🅟=premium', "📍Instagram", instagram, `Kembali Ke List Menu`, `.menu`, m)
} catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
}
handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(menu|help|\?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 3

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  res = "Selamat dinihari🌃"
  if (time >= 4) {
    res = "Selamat pagi🏞️"
  }
  if (time > 10) {
    res = "Selamat siang🏙️"
  }
  if (time >= 15) {
    res = "Selamat sore🌇"
  }
  if (time >= 18) {
    res = "Selamat malam🌌"
  }
  return res
}
