const fs = require("fs");
const Config = require("../config");
const { smd } = require("../lib");

// Define the runtime function (or import it if it's from another file)
function runtime(seconds) {
  const days = Math.floor(seconds / (3600 * 24));
  const hours = Math.floor((seconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);
  return `${days}d ${hours}h ${minutes}m ${secs}s`;
}

// Command definition for 'alive'
smd(
  {
    pattern: "alive", // Command trigger
    react: "🐉", // Reaction when the command is run
    desc: "Check bot's status, speed, and latency", // Command description
    category: "misc", // Command category
    filename: __filename, // Filename reference
  },
  async (message, client) => {
    const start = Date.now();
    
    // Simulate a task with a small delay
    await new Promise((resolve) => setTimeout(resolve, 100));

    const latency = Date.now() - start;

    // Final message with latency and speed
    const finalMessage = `
 *🐉𝑹𝑬𝑽𝑬𝑹𝑺𝑬 𝑲𝑰𝑵𝑮🐉 is Alive!*

*Latency:* ${latency}ms
*Speed:* Fast as a plane 🔥✈️

*=== •|🕷️| Powered by 🐉𝑹𝑬𝑽𝑬𝑹𝑺𝑬 𝑲𝑰𝑵𝑮🐉 |🕷️|• ===*
    `;

    // Image to be included with the message
    const imageUrl = "https://i.ibb.co/QXbR0M0/IMG-2996.jpg"; // Replace with your actual image URL

    // Send the image with the final message as caption
    await message.send(imageUrl, { caption: finalMessage }, "img", message);
  }
);
smd(
  {
    pattern: "about", // Command trigger
    react: "👇", // Reaction when the command is run
    desc: "Displays important bot and owner information", // Command description
    category: "misc", // Command category
    filename: __filename, // Filename reference
  },
  async (message) => {
    const owner = "REVERSEKING"; // Owner name
    const repoLink = "https://github.com/Reverseking1/REVERSE-KING-MD"; // Repository link
    const uptime = runtime(process.uptime()); // Get bot uptime
    const footer = "=== •|🕷️| Powered by 🐉𝑹𝑬𝑽𝑬𝑹𝑺𝑬 𝑲𝑰𝑵𝑮🐉 |🕷️|• ===";

    // Final message content
    const finalMessage = `
*🐉𝑹𝑬𝑽𝑬𝑹𝑺𝑬  𝑲𝑰𝑵𝑮🐉*

*Owner:* ${owner}
*Repository:* ${repoLink}
*Bot Uptime:* ${uptime}

*LONG LIVE 🐉𝑹𝑬𝑽𝑬𝑹𝑺𝑬 𝑲𝑰𝑵𝑮🐉*

${footer}
`;

    // Image to be included with the message
    const imageUrl = "https://i.ibb.co/QXbR0M0/IMG-2996.jpg"; // Replace with your actual image URL

    // Send the image with the final message as caption
    await message.send(imageUrl, { caption: finalMessage }, "img", message);
  }
);
smd(
  {
    pattern: "dev",
    alias: ["reverse"],
    react: "😈", // Reaction when the command is run
    desc: "Displays information about the developer", // Command description
    category: "misc", // Command category
    filename: __filename, // Filename reference
  },
  async (message) => {
    const name = "*ReverseKing 😈*";
    const age = "*18*";
    const occupation = "*Front-end Web Developer*";
    const hobby = "*Coding*";
    const contact = "*https://wa.me/233257514504*";
    const footer = "*=|🍀| Powered by 🐉𝑹𝑬𝑽𝑬𝑹𝑺𝑬 𝑲𝑰𝑵𝑮🐉 |🍀|=*";

    // Message content
    const finalMessage = `
👤 *Developer Info*

*Name:* ${name}
*Age:* ${age}
*Occupation:* ${occupation}
*Hobby:* ${hobby}
*Contact:* ${contact}

${footer}
    `;

    // Image to be included with the message
    const imageUrl = "https://i.ibb.co/QXbR0M0/IMG-2996.jpg"; // Replace with your actual image URL

    // Send the image with the final message as caption
    await message.send(imageUrl, { caption: finalMessage }, "img", message);
  }
);