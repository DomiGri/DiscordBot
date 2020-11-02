module.exports = {
  name: "purge",
  description: "Purge!",
  execute(msg) {
    if (!msg.memeber.roles.cache.has("712399235567321172")) {
      msg.channel.sendMessage(
        `Sorry, you don't have the permission to execute the command: ${msg.content}`
      );
      console.log(
        `Sorry, you don't have the permission to execute the command: ${msg.content}`
      );
      return;
    } else if (
      !msg.channel.permissionsFor(bot.user).hasPermission("MANAGE_MESSAGES")
    ) {
      msg.channel.sendMessage(
        `Sorry, I don't have the permission to execute the command: ${msg.content}`
      );
      console.log(
        `Sorry, I don't have the permission to execute the command: ${msg.content}`
      );
      return;
    } else if (
      msg.channel.type == "text"
    ) {
      msg.channel.fetchMessages().then((messages) => {
        msg.channel.bulkDelete(messages);
        messagesDeleted = messages.array().length; // number of messages deleted

        // Logging the number of messages deleted on both the channel and console.
        msg.channel.sendMessage(
          `Deletion of messages successful. Total messages deleted: ${messagesDeleted}`
        );
        console.log(
          `Deletion of messages successful. Total messages deleted: ${messagesDeleted}`
        );
      });
    }
  },
};
