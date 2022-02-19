/*let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
  if (!args[0]) throw 'Uhm...url nya mana?'
  let res = await fetch(global.API('xteam', '/dl/tiktok', {
    url: args[0]
  }, 'APIKEY'))
  if (res.status !== 200) throw await res.text()
  let json = await res.json()
  if (!json.status) throw json
  let url = json.server_1 || json.info[0].videoUrl || ''
  if (!url) throw 'Gagal mengambil url download'
  let txt = json.info[0].text
  for (let hashtag of json.info[0].hashtags) txt = txt.replace(hashtag, '*$&*')
  await conn.sendFile(m.chat, url, 'tiktok.mp4', `
▶ ${json.info[0].playCount} Views
❤ ${json.info[0].diggCount} Likes
🔁 ${json.info[0].shareCount} Shares
💬 ${json.info[0].commentCount} Comments
🎵 ${json.info[0].musicMeta.musicName} by ${json.info[0].musicMeta.musicAuthor}
- *By:* ${json.info[0].authorMeta.nickName} (${json.info[0].authorMeta.name})
- *Desc:*
${txt}
  `.trim(), m)
}
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tik(tok)?(dl)?)$/i
module.exports = handler*/

/*let fetch = require('node-fetch')
let handler = async (m, { conn, args, command, usedPrefix }) => {
  if (!args[0]) throw `Gunakan format: ${usedPrefix}${command} https://tiktokxxxx`
  let { video, description, music, author } = await tiktok(args[0])
  let url = video.no_watermark || video.with_watermark || video.no_watermark_raw || music
  if (!url) throw 'Gagal mengambil url download'
  await conn.sendFile(m.chat, url, 'tiktok.mp4', `
- *By:* ${author.nickname} (${author.unique_id})
- *Desc:*
${description}
`.trim(), m)
}
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tik(tok)?(dl)?)$/i
module.exports = handler
const axios = require('axios')
async function tiktok(url) {
  try {
    let results = {}
    if (/v[tm]\.tiktok\.com/g.test(url)) {
      let res = await axios.get(url)
      url = res.request.res.responseUrl
    }
    let key = await axios.get(`https://api.snaptik.site/video-key?video_url=${url}`)
    key = JSON.parse(JSON.stringify(key.data, null, 2))
    if (key.status !== 'success') throw key
    let data = await axios.get(`https://api.snaptik.site/video-details-by-key?key=${key.data.key}`)
    data = JSON.parse(JSON.stringify(data.data, null, 2))
    if (data.status !== 'success') throw data
    results = {
      author: { ...data.data.author },
      description: data.data.description,
      video: {
        with_watermark: `https://api.snaptik.site/download?key=${data.data.video.with_watermark}&type=video`,
        no_watermark: `https://api.snaptik.site/download?key=${data.data.video.no_watermark}&type=video`,
        no_watermark_raw: data.data.video.no_watermark_raw
      },
      music: `https://api.snaptik.site/download?key=${data.data.music}&type=music`
    }
    return results
  } catch (e) {
    throw 'Mungkin video private?!'
  }
}*/
const hxz = require("hxz-api")
let handler = async(m,{text, conn}) => {

let p = await  hxz.ttdownloader(text)
const { nowm, wm, audio } = p
conn.sendFile(m.chat, wm, null, 'dengan watermark', m)
}
handler.command = ['tiktokwm']
module.exports = handler
