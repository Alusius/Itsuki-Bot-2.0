<p align="center">
<img src="https://telegra.ph/file/bc1416bbf142da0bdc3b1.jpg" alt="EBOT MD" width="250"/>


</p>
<p align="center">
<a href="#"><img title="EBOT MD" src="https://img.shields.io/badge/GANTI SESSIONNYA DULU SEBELUM PAKAI-red?colorA=%255ff0000&colorB=%23017e40&style=for-the-badge"></a>
</p>
<p align="center">
</p>
<p align="center">
<a href="https://github.com/Paquito1923/elyasmd"><img title="Followers" src="https://img.shields.io/github/followers/Paquito1923?color=blue&style=flat-square"></a>
<a href="https://github.com/Paquito1923/elyasmd"><img title="Stars" src="https://img.shields.io/github/stars/Paquito1923/elyasmd?color=red&style=flat-square"></a>
<a href="https://github.com/Paquito1923/elyasmd/network/members"><img title="Forks" src="https://img.shields.io/github/forks/Paquito1923/elyasmd?color=red&style=flat-square"></a>
<a href="https://github.com/Paquito1923/elyasmdwatchers"><img title="Watching" src="https://img.shields.io/github/watchers/Paquito1923/elyasmd?label=Watchers&color=blue&style=flat-square"></a>
</p>

---

# Ebot Whatsapp MD
## Information
> EBOT whatsapp using a Baileys library.
> Jika kamu menemukan semacam bug, harap untuk dimaklumi sementara
>
> • NOTE: Pastikan Jaringan kalian lancar dan device kalian bagus:v, 
> 
> • Kalo pake termux mungkin bakal lama respon nya, saya sarankan pake heroku
> 
> • Kalo mau nambah fitur buat file baru [disini](https://github.com/ilmanhdyt/ShiraoriBOT-Md/tree/Multi-Device/plugins) *Contoh* tebakgambar.js


<h3 align="center">Made by :</h3>
<p align="center">
  </a href="https://github.com/ilmanhdyt"><img src="https://github.com/Paquito1923.png?size=128" height="128" width="128" /></a>
  </a href="https://github.com/ilmanhdyt"><img src="https://github.com/ilmanhdyt.png?size=128" height="128" width="128" /></a>
  <a href="https://github.com/BochilGaming"><img src="https://github.com/BochilGaming.png?size=128" height="128" width="128" /></a>
</p>

## How To Change Menu Display
----
### Gif Menu Display
```ts
 let message = await prepareWAMessageMedia({ video: fs.readFileSync('./media/menu.mp4'), gifPlayback: true }, { upload: conn.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           videoMessage: message.videoMessage,
           hydratedContentText: text.trim(),
           hydratedFooterText: wm,
           hydratedButtons: [{
```

### Image Menu Display
```ts
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./media/elyas.jpg')}, { upload: conn.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           imageMessage: message.imageMessage,
           hydratedContentText: text.trim(),
           hydratedFooterText: wm,
           hydratedButtons: [{
```

### Location Menu Display
```ts
 const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           hydratedContentText: text.trim(),
           locationMessage: { 
           jpegThumbnail: fs.readFileSync('./media/elyas.jpg') },
           hydratedFooterText: wm,
           hydratedButtons: [{       
```

### Video Menu Display
```ts
let message = await prepareWAMessageMedia({ video: fs.readFileSync('./media/menu.mp4')}, { upload: conn.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           videoMessage: message.videoMessage,
           hydratedContentText: text.trim(),
           hydratedFooterText: wm,
           hydratedButtons: [{           	
```
----           


## HOW TO CONNECT TO MONGODB WHEN RUN IN HEROKU

* Create account and database in mongodb atlas [`watch here`](https://youtu.be/rPqRyYJmx2g)
* when you already have a database, you just need to take mongourl
* Put mongourl in Procfile `web: node . --db 'mongourl'`
* Example `worker: node . --db 'mongodb+srv://Paquito1923:<password>@cluster0.wwdwr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'`


## UNTUK PENGGUNA WINDOWS/VPS/RDP

* Unduh & Instal Git [`Klik Disini`](https://git-scm.com/downloads)
* Unduh & Instal NodeJS [`Klik Disini`](https://nodejs.org/en/download)
* Unduh & Instal FFmpeg [`Klik Disini`](https://ffmpeg.org/download.html) (**Jangan Lupa Tambahkan FFmpeg ke variabel lingkungan PATH**)
* Unduh & Instal ImageMagick [`Klik Disini`](https://imagemagick.org/script/download.php)

```bash
git clone https://github.com/Paquito1923/elyasmd
cd elyasmd
npm install
npm update
npm index
```

---------

## UNTUK PENGGUNA TERMUX
```bash
pkg update && pkg upgrade
pkg install git
pkg install nodejs
pkg install ffmpeg
pkg install imagemagick
pkg install yarn
git clone https://github.com/Paquito1923/elyasmd
cd elyasmd
yarn
rm -rf session.data.json
node .
```

## UNTUK PENGGUNA HEROKU

### Instal Buildpack
* heroku/nodejs
* https://github.com/jonathanong/heroku-buildpack-ffmpeg-latest.git
* https://github.com/DuckyTeam/heroku-buildpack-imagemagick.git*

## Installing the FFmpeg for Windows
* Unduh salah satu versi FFmpeg yang tersedia dengan mengklik [di sini](https://www.gyan.dev/ffmpeg/builds/).
* Extract file ke `C:\` path.
* Ganti nama folder yang telah di-extract menjadi `ffmpeg`.
* Run Command Prompt as Administrator.
* Jalankan perintah berikut::
```cmd
> setx /m PATH "C:\ffmpeg\bin;%PATH%"
```
Jika berhasil, akan memberikanmu pesan seperti: `SUCCESS: specified value was saved`.
* Sekarang setelah Anda menginstal FFmpeg, verifikasi bahwa itu berhasil dengan menjalankan perintah ini untuk melihat versi:
```cmd
> ffmpeg -version
```

# Thanks to
 [![Nurutomo](https://github.com/Nurutomo.png?size=150)](https://github.com/Nurutomo) | [![Ilman](https://github.com/ariffb25.png?size=200)](https://github.com/ariffb25) | [![Istikmal](https://github.com/Alfarqun.png?size=70)](https://github.com/Alfarqun)
----|----|----
[Nurutomo](https://github.com/Nurutomo) | [Ariffb](https://github.com/ariffb25) | [f](https://github.com/Alfarqun)
 Author | suhu | suhu
