let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Telkomsel: 0813-3195-4019
│ • Gopay: 0857-0461-7188
│ • Saweria: https://saweria.co/fian014
╰────
╭─「 Ingin Donasi? 」
│> Chat: Wa.me/6285704617188
╰────

╭─「 Ini #caranya 」
│*Cara Donasi*:
│1.) Beli ke pulsa/ konter terdekat semisal Indomaret
│2.) Bilang ke konter terdekat..
│"Beli pulsa telkomsel"
│3.)Dan terus masukkan nomor kami 081331954019
│4.) Jika sudah kirim bukti ... Terimakasih
│*Kalau tidak juga gak papa* 👍
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
