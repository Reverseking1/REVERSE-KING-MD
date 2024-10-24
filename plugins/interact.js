const { smd } = require("../lib");

// Command to send a greeting message
smd(
  {
    pattern: "hi", // Command trigger
    react: "👋", // Reaction emoji for the command
    desc: "Greet and introduce the bot", // Description of the command
    category: "greeting", // Category under which the command falls
    filename: __filename, // The current file's name
  },
  async (message) => {
    const response = `
🌟✨ **Hey, I'm 𝑹𝑬𝑽𝑬𝑹𝑺𝑬  𝑲𝑰𝑵𝑮!** ✨🌟
I'm a multipurpose bot developed by Reverse King.The best boss i've ever worked with. ge did this to suit your WhatsApp needs. 

👉 Please type *${prefix}menu* to see the bot menu!

❤ Made with love by Reverse King, thank you! 
`;

    const finalMessage = `${response}\n\n*powered by Reverse King*`; // Customize with your watermark

    await message.send(
      "https://i.ibb.co/QXbR0M0/IMG-2996.jpg", // Replace with your image URL
      { caption: finalMessage },
      "img",
      message
    );
  }
);

