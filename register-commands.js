require('dotenv').config();
const{ REST, Routes, ApplicationCommandOptionType } = require('discord.js');

const commands = [
    {
        name: 'hey',
        description: 'erm what the sigma ', 
    },
    {
      name: 'add',
      description: 'add a number from the options to another number',
      options: [
        {
            name : 'first-number',
            description : 'idfqjmdflmsqj',
            type: ApplicationCommandOptionType.Number,
            choices : [
                {
                    name : 'one',
                    value : 1,
                },
                {
                    name : 'two',
                    value : 2,
                },
                {
                    name : 'three',
                    value : 3,
                },
            ],
            required : true,
        },
        {
            name : 'seconde-number',
            description : 'hada le 2eme num',
            type: ApplicationCommandOptionType.Number,
           
            required : true,
        }
        
      ]
    },
   
];

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

( async ()=> {


    try {
        console.log('regestering the slash command ');
        await rest.put(
            Routes.applicationGuildCommands(
                process.env.CLIENT_ID,
                 process.env.GUILD_ID
                ),
            {body: commands}
        )
        console.log('just finished regestering the slash command successfully  ');

    } catch (error) {
        console.log(`there was an error ${error}`);
    }

})();
