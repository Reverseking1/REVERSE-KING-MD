// https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L

const {
  smd,
  sleep
  } = require('../lib'),teddyM = {"smd" : "asta" }

smd(
  {
    pattern: "channel", 
    react: "🐉", 
    desc: "Displays a styled welcome message with information and a link", 
    category: "info",
    filename: __filename,
  },
  async (m) => {
    try {
      // The styled welcome message content
      const welcomeMessage = `
╔══✪〘 *𝑹𝑬𝑽𝑬𝑹𝑺𝑬•𝑲𝑰𝑵𝑮 𝘽𝙊𝙏𝙕 ⁱⁿᶜ* 〙✪══╗

┏━━━━━━━━━━━━━┓
┃ ✪ *Home of:*
┃
┃ ➤  BOT GIVEAWAY 🎁
┃ ➤  SCRIPT GIVEAWAY 📜
┃ ➤  PANEL GIVEAWAY 🖥️
┃ ➤  FAKE NUMBER GIVEAWAY 📞
┃ ➤  BOT DEVELOPERS 💻
┃ ➤  FREE COURSES 🎓
┃ ➤  HACKED APPS 🛠️
┗━━━━━━━━━━━━━┛

⚡ *And so much more!* ⚡
🔗 Click the link ASAP:

🌐 《https://whatsapp.com/channel/0029Vao11A529758tTEQZo1e 》

╚══════════════════════════╝
      `;

      // Send the styled welcome message
      await m.send(welcomeMessage, { quoted: m });
      
    } catch (e) {
      // Handle any errors
      m.error(`${e}\n\nCommand: welcome`, e, false);
    }
  }
);