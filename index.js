require('dotenv').config();
const{ Client,IntentsBitField, ActivityType } = require ('discord.js');

const client = new Client({  
    intents : [
        IntentsBitField.Flags.Guilds, 
        IntentsBitField.Flags.GuildMembers, 
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ]
})

client.on('ready', (c) => {
    console.log(` ⭐️ ${c.user.tag} is now online and ready to use ⭐️ `)

    client.user.setActivity({
        name:"your mom",
        type: ActivityType.Playing,
        //url : '',
    })
    
});

client.on('messageCreate', (message) => {
   // if (message.author.tag) return console.log(message) ;
   /* if (message.mentions.has(client.user)) {
        console.log(message.content);
     }*/

    if (message.author.bot) {
        return;
     }

    //console.log(message.content);

    if (message.content === "hello")
        message.reply("hello sweetie "); 
   
     
} );

client.on('interactionCreate', (interaction)=>{
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'hey'){
        interaction.reply({ content : 'oh hey there big boii ', ephemeral : false });
    };

    if (interaction.commandName === 'add'){
        const number1 = interaction.options.get('first-number').value;
        const number2 = interaction.options.get('seconde-number').value;
        interaction.reply(`the sum is ${number1+number2}`);
    }

    

}
), 



client.login(process.env.TOKEN);

