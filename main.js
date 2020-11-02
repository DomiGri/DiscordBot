require("dotenv").config();
const Discord = require("discord.js");
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;
const PREFIX = String("Franco?");
bot.commands = new Discord.Collection();
const botCommands = require("./commands");

const commandFiles = fs
  .readdirSync("./commands/")
  .filter((file) => file.endsWith(".js"));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);

  client.commands.set(command.name, command);
}

Object.keys(botCommands).map((key) => {
  bot.commands.set(botCommands[key].name, botCommands[key]);
});

bot.on("ready", () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on("message", (msg) => {
  const args = msg.content.slice(PREFIX.length).split(/ +/);
  const command = args.shift().toLowerCase();
  console.info(
    `Called command: ${command}` + `||Author is: ${msg.author.role}`
  );

  if (!bot.commands.has(command)) return;
  else if (msg.author.bot) return;
  else if (!msg.content.startsWith(PREFIX)) return;
  else
    try {
      bot.commands.get(command).execute(msg, args);
    } catch (error) {
      console.error(error);
      msg.reply("there was an error trying to execute that command!");
    }
});
bot.login(TOKEN);

