module.exports = {
  name: "ping",
  description: "Ping!",
  execute(msg) {
    msg.reply("pong");
    msg.channel.send("pong");
  },
};

