require('dotenv').config();
const Discord = require("discord.js")
const options = { intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_VOICE_STATES", "GUILD_MESSAGES", "GUILD_MEMBERS"] };
const client = new Discord.Client(options)

client.on("messageCreate",async message=>{
    if(message.author.bot)return
})

client.on("ready",async ()=>{
    client.user.setActivity('非公式strifeビルド共有鯖', { type: 'WATCHING' })
    console.log(`[+] bot online`)
})

process.on('uncaughtException',(err) => {
    console.log(err)
});

client.login(process.env.token)