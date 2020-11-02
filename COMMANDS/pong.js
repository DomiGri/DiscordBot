module.exports = {
  name: "pong",
  description: "Pong!",
  execute(msg) {
    msg.reply("ping");
    msg.channel.send("ping");
  },
};

