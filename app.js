const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
const Discord  = require("discord.js");
const bot = new Discord.Client();
const axios = require('axios')
const {  MessageEmbed} =  require("discord.js");

require("dotenv").config();
const fetch = require("node-fetch");
const dotenv = require("dotenv");
const  ms    = require("ms");
const googleIt = require('google-it')
const smartestchatbot = require('smartestchatbot')
const scb = new smartestchatbot.Client();
const Math = require('math.js');

// const randomanime = require('random-anime');
const request = require ("request");
const ButtonPages = require("discord-button-pages");
const delay = require('delay');
const ytsr = require('ytsr')
const got = require('got');
const {MessageButton , MessageActionRow, createMessageComponentCollector} =  require("discord-buttons");
const disbut =   require("discord-buttons");


disbut(bot);

const wait = require('util').promisify(setTimeout);
const moment = require('moment');
const Request = require('node-superfetch');

bot.commands = new Discord.Collection();
const db = require('quick.db');
const format = require(`humanize-duration`);
const map = new Discord.Collection();

const fs = require ("fs");

const config = require("./auth.json")
const {prefix} = require("./auth.json")


bot.on('ready', () => {
  
  console.log('Zyn initialized!');
  const servers =  bot.guilds.cache.size
    const users =  bot.users.cache.size
    
    console.log(`Bot is now online and serving in ${servers} servers`)
    //This will display "Playing in <servers> servers!"

	bot.user.setActivity(`+help` , {
		type: 'PLAYING' ,
	})
});



function doMagic8BallVoodoo() {
    var rand = [':8ball: Absolutly.', ':8ball: Absolutly not.', ':8ball: It is true.', ':8ball: Impossible.', ':8ball: Of course.', ':8ball: I do not think so.', ':8ball: It is true.', ':8ball: It is not true.', ':8ball: I am very undoubtful of that.', ':8ball: I am very doubtful of that.', ':8ball: Sources point to no.', ':8ball: Theories prove it.', ':8ball: Reply hazy try again', ':8ball: Ask again later', ':8ball: Better not tell you now', ':8ball: Cannot predict now', ':8ball: Concentrate and ask again', ':8ball: LMFAO not even in dreams', ':8ball: hahaha You are dumb', ':8ball:You dont have grey matter jackass', ':8ball: Lets see whats in your fortune today dumbass !' , ':8ball: Ahh atleast not today', ':8ball: Never ever' ];

    return rand[Math.floor(Math.random()*rand.length)];
}



function coinToss() {
    var rand = ['You flipped the coin, it lands on tails.', 'I flipped the coin, it lands on tails.', 'You flipped the coin, it lands on heads.', 'I flipped the coin, it lands on heads.'];
    return rand[Math.floor(Math.random()*rand.length)];
}
function Roast() {
     var rand = ['Accept it Nikhil is so pro' ];
     return rand[Math.floor(Math.random()*rand.length)];
}
 function parseMilliseconds(milliseconds) {
	if (typeof milliseconds !== 'number') {
		throw new TypeError('Expected a number');
	}

	const roundTowardsZero = milliseconds > 0 ? Math.floor : Math.ceil;

	return {
		days: roundTowardsZero(milliseconds / 86400000),
		hours: roundTowardsZero(milliseconds / 3600000) % 24,
		minutes: roundTowardsZero(milliseconds / 60000) % 60,
		seconds: roundTowardsZero(milliseconds / 1000) % 60,
		milliseconds: roundTowardsZero(milliseconds) % 1000,
		microseconds: roundTowardsZero(milliseconds * 1000) % 1000,
		nanoseconds: roundTowardsZero(milliseconds * 1e6) % 1000
	};
}
bot.on('clickButton', (button) => {
const message = button.message;
if(button.id === "button1") {
  const embed1 = new Discord.MessageEmbed()
   .setTitle("😆Fun Commands")
   .setColor("#B3346C")
   .setDescription("`ping              - Shows if bot is online or not `,\n`google[content]   - fetch 9-10top results from google e.g. !google alan\n                     walker songs, true`,\n`say               - Whatever you ask it  `,\n `8ball             - Starts 8ball`,\n`meme              - shows you random meme`\n`server            - shows server info`,\n`info              - Shows info of user`,\n`quote             - Sends a random quote`,\n`weather[cityname] - shows weather of a city e.g. !weather london, true`,\n `avatar            - Shows you the avatar`,\n`fakevirus         - Send a virus to mentioned user`")
 message.edit({embed: embed1})
}

else if ( button.id === "button2") {
 const embed3 = new Discord.MessageEmbed()
    .setTitle("🔨Moderation Commands")
    .setColor("#B3346C")
    .setDescription("`kick              - kicks the user from server`,\n `ban               - bans a user from server`,\n `purge             - clears the given amount of messages`,\n `private[#channel] - make channel private`,\n `lock              - locks a channel e.g. zyn-lock[#channel], true`,\n `unlock            - unlocks the channel`")
    message.edit({embed:embed3})
}


else if (button.id === "normal") {
const quotes = [
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela", 
    "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking. - Steve Jobs", 
    "Life is what happens when you're busy making other plans. - John Lennon", 
    "It is during our darkest moments that we must focus to see the light. - Aristotle",
    "Only a life lived for others is a life worthwhile. - Albert Einstein",
    "An unexamined life is not worth living. - Socrates",
    "Live as if you were to die tomorrow. Learn as if you were to live forever. - Mahatma Gandhi",
    "That which does not kill us makes us stronger. - Friedrich Nietzsche",
    "Strive not to be a success, but rather to be of value. - Albert Einstein",
    "The growth of wisdom may be gauged accurately by the decline of ill-temper. - Friedrich Nietzsche",
    "Waste no more time arguing about what a good man should be. Be one. - Marcus Aurelius",
    "Happiness and freedom begin with one principle. Some things are within your control and some are not. - Epictetus",
    "Difficulties strengthen the mind as labor does the body. - Seneca The Younger",
    "Good actions give strength to ourselves and inspire good actions in others. - Plato",
    "They can conquer who believe they can. - Virgil",
    "Everything you can imagine is real. - Pablo Picasso",
    "Where there is love there is life. - Mahatma Gandhi",
    "Monsters are real, and ghosts are real too. They live inside us, and sometimes, they win. - Stephen King",
    "We are but dust and shadow. - Horace",
    "Hard work conquers all. - Virgil",
    "Art is long, life is short. - Hippocrates",
    "Applaud, my friends, the comedy is over! - Augustus",
    "The beginnings of all things are small. - Cicero",
    "Freedom is not worth having if it does not include the freedom to make mistakes. - Mahatma Gandhi",
    "Some faults may claim forgiveness. - Horace",
    "We don’t make mistakes, just happy little accidents. - Bob Ross",
    "It began as a mistake. - Charles Bukowski",
    "Who is allowed to make mistakes, makes fewer mistakes. - Ovid",
    "What cannot be resolved, it is cut. - Alexander The Great",
    "Let our advance worrying become advance thinking and planning. - Winston Churchill",
    "Throw off your worries when you throw off your clothes at night. - Napoleon",
    "He who fears being conquered is certain of defeat. - Napoleon",
    "An appeaser is one who feeds a crocodile, hoping it will eat him last. - Winston Churchill",
    "The fear of death follows from the fear of life. A man who lives fully is prepared to die at any time. - Mark Twain",
    "There are several good protections against temptations, but the surest is cowardice. - Mark Twain",
    "I would rather die of passion than of boredom. - Vincent Van Gogh",
    "Every hero becomes a bore at last. - Ralph Waldo Emerson",
    "Some people never go crazy. What truly horrible lives they must live. - Charles Bukowski",
    "Everything influences me, nothing changes me. - Salvador Dali",
    "Always the same. - Cicero",
    "You may break your heart, but men will still go on as before. - Marcus Aurelius",
    "To do nothing is sometimes a good remedy. - Hippocrates",
    "States as great engines move slowly. - Francis Bacon",
    "Nature is a labyrinth in which the very haste you move with will make you lose your way. - Francis Bacon",
    "Nature does not make leaps. - Aristotle",
    "To kill time is not murder, it's suicide. - William James",
    "Time is money. - Benjamin Franklin",
    "Eternity is in love with the productions of time. - William Blake",
    "A man that is young in years may be old in hours if he have lost no time. - Francis Bacon",
    "My favorite things in life don’t cost any money. It’s really clear that the most precious resource we all have is time. - Steve Jobs",
    "Truth was the only daughter of Time. - Leonardo da Vinci",
    "If you love life, don’t waste time, for time is what life is made up of. - Bruce Lee",
    "Where is my watch? - Salvador Dali",   
    "Use time sparingly. - Chilon of Sparta",
    "What is true, is true only for one time and only for one place. - T.S. Eliot",
    "Whatever is done well enough is done quickly enough. - Augustus",
    "It's not worth doing something unless you were doing something that someone, somewhere, would much rather you weren't doing. - Terry Pratchett",
    "What is said is done. - Latin phrase",
    "Each man delights in the work that suits him best. - Homer",
    "You don't have to talk about what you're doing beforehand. This will be seen anyway. - Marcus Aurelius",
    "Beginnings are usually scary, and endings are usually sad, but its everything in between that makes it all worth living. - Bob Marley",
    "Good things are difficult. - Ancient Greek phrase",
    "I came, I saw, I won. - Julius Caesar",
    "In most cases men willingly believe what they wish. - Julius Caesar",
    "Give me a museum and I'll fill it. - Pablo Picasso"
    ]
 
        
 let object = Object.keys(quotes)
        let randomQuote = Math.floor(Math.random() * object.length)
        
        let quote = quotes[randomQuote]

        const embed = new Discord.MessageEmbed()
        .setAuthor(`📜 Quote `)
        .setColor('#FF00A6')
        .setDescription(`${quote}`)
        message.edit({embed: embed});
    }







 button.reply.defer(); 
 
});

bot.on('message',  msg => {

  if (!msg.content.startsWith(config.prefix)) return;
  if (msg.channel.type == "dm")  return;
  if (msg.author.bot) return;
 

  let command = msg.content.split(" ")[0];
  command = command.slice(config.prefix.length);
  console.log(command);


  let args = msg.content.split(" ").slice(1);

 if (command === "aliases") {
   
let embed = new Discord.MessageEmbed()
      .setColor("RED")
      .setTitle("Here is a list of aliases of commands!")
      
      .setDescription("1. 8ball<8b> \n 2.weather[cityname]<w[cityname]> \n 3.avatar<av>\n 4.google<g>\n 5.fakevirus<fv>")
msg.channel.send(embed)

  
}
else  if ( command === "avatar" || command === "av") {
       if(msg.mentions.users.size){
            let member=msg.mentions.users.first()
        if(member){
           let embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setAuthor(member.tag, member.displayAvatarURL())
            .setDescription(`[Avatar URL Link](${member.displayAvatarURL()})`)
            .setImage(member.displayAvatarURL())
            
            
            msg.channel.send(embed)
            
        }
    }
       else{
   let embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setAuthor(msg.author.tag, msg.author.displayAvatarURL())
        .setDescription(`[Avatar URL Link](${msg.author.displayAvatarURL()})`)
        .setImage(msg.author.displayAvatarURL({dynamic : true}))
         msg.channel.send(embed)
     }
  }

else if (command ==="sc") {
   let servers =  bot.guilds.cache.size
    let users =  bot.users.cache.size
    
    msg.channel.send(`Bot is now online and serving in ${servers} servers`)
}
 else if (command === "say") {
     msg.delete();
     msg.channel.send(args.join(" "));
  }

 else if (command === "ping") {
    msg.channel.send("Pong! (hold on, processing latency...)").then(m => m.edit(`Pong! (Current latency is ${m.createdTimestamp - msg.createdTimestamp}ms, while the API Latency is ${Math.round(bot.ping)}ms)`) );
  }

 else if (command === "pong") {
     msg.channel.send("Ping! (hold on, processing latency...)").then(m => m.edit(`Ping! (Current latency is ${m.createdTimestamp - msg.createdTimestamp}ms, while the API Latency is ${Math.round(bot.ping)}ms)`) );

  }
  

   
else if ( command === "angry") {
 const imagesAngry = [
            "https://media.giphy.com/media/9w9Z2ZOxcbs1a/giphy.gif",
            "https://media.giphy.com/media/nnIfvLqA2SbuGr3VAL/giphy.gif",
            "https://media.giphy.com/media/U77FFxuyoIPvHEIgkq/giphy.gif",
            "https://media.giphy.com/media/RMUKZW6Wmy2mk/giphy.gif",
            "https://media.giphy.com/media/eoZOuZVqMg240/giphy.gif",
            "https://media.giphy.com/media/11raneDZtruZlm/giphy.gif",
            "https://media.giphy.com/media/F14PSwQhrjQ9a/giphy.gif",
            "https://media.giphy.com/media/3ohjUOpLsuAoBuryp2/giphy.gif",
            "https://media.giphy.com/media/aNFT7eG2rIKK715uLk/giphy.gif",
            "https://media1.tenor.com/images/83d3206895a105f1733c7a220cf1fc1f/tenor.gif?itemid=14725928",
            "https://media1.tenor.com/images/cfbc067a1445d5baa5ca36cc2642a6c4/tenor.gif?itemid=5664724",
            "https://media.tenor.com/images/e53395c983ab83a7b46737e13fd8addb/tenor.gif",
            "https://media1.tenor.com/images/395888c0e70dd23c5a7bc76122f80088/tenor.gif?itemid=5169671",
            "https://media1.tenor.com/images/08035897f5dfbf24add1a88aeeedb5ae/tenor.gif?itemid=16278176",
            "https://media1.tenor.com/images/380b96c755c9d0855a784c8f51e1515f/tenor.gif?itemid=7885147"
        ]
 let member = msg.mentions.users.first();
 const randomImage = imagesAngry[Math.floor(Math.random() * imagesAngry.length)];
        if(member){
            let embed = new Discord.MessageEmbed()
            .setTitle(`Watch out ${member.username} maybe ${msg.author.username} is angry! 🤬`)
            .setColor('#8b0000')
            .setImage(randomImage)
            .setTimestamp()
            msg.channel.send(embed);
        } else {
            msg.channel.send('❌ | Tag a user and get angry on him ');
        }
    }
else if ( command === "blush") {
const imagesBlush = [
            "https://media1.tenor.com/images/84307582253a96e4552d20e3ecef3a33/tenor.gif?itemid=5531498",
            "https://media1.tenor.com/images/cbfd2a06c6d350e19a0c173dec8dccde/tenor.gif?itemid=15727535",
            "https://media1.tenor.com/images/4c03573f06a1bd8841976abdafd16d26/tenor.gif?itemid=15711893",
            "https://media1.tenor.com/images/ad0fbaa8dd27994a8fbab2ab86122c7f/tenor.gif?itemid=13658383",
            "https://media1.tenor.com/images/fc6b82c2c8c045a0b1e6fc91294292c5/tenor.gif?itemid=6215889",
            "https://media1.tenor.com/images/4f270d2727e514056ae63f155ba0cef2/tenor.gif?itemid=13045709",
            "https://media1.tenor.com/images/b10159104084d5ecc1585559ed3e551f/tenor.gif?itemid=11034212",
            "https://media1.tenor.com/images/0b7ef52a4a898735077c7d9886132d5d/tenor.gif?itemid=13159550",
            "https://media1.tenor.com/images/a7e87466022015e036c06c3927c251f9/tenor.gif?itemid=8971744",
            "https://media1.tenor.com/images/c118281cf06513a78e2fdc731db48c1b/tenor.gif?itemid=12942783",
            "https://media1.tenor.com/images/1796f5f2469c4777cadf2a1ab57c6c0d/tenor.gif?itemid=9768769",
            "https://media1.tenor.com/images/90b854ed578721e98f830cd4a84ddbd4/tenor.gif?itemid=18113807",
            "https://media1.tenor.com/images/cd2b092cc8559d663bad5917a184744d/tenor.gif?itemid=15759499",
            "https://media1.tenor.com/images/7fb373e1ea280a01616bdd5323f2ad4e/tenor.gif?itemid=19908156",
            "https://media1.tenor.com/images/e9a24474179b4939c48087a533603426/tenor.gif?itemid=20210060",
            "https://media.giphy.com/media/HPI9m7McNPGN2/giphy.gif",
            "https://media.giphy.com/media/T3Vvyi6SHJtXW/giphy.gif",
            "https://media.giphy.com/media/UrPxdGW62TDtS/giphy.gif"
        ]
let member = msg.mentions.users.first();
const randomImage = imagesBlush[Math.floor(Math.random() * imagesBlush.length)];
        if(member){
            let embed = new Discord.MessageEmbed()
            .setTitle(`${msg.author.username} blushed at ${member.username} 😳`)
            .setColor('#11ff99')
            .setImage(randomImage)
            .setTimestamp()
            msg.channel.send(embed);
        } else {
            msg.channel.send('❌ | On whom you are blushing at <:TomStare:853276994350350377>');
        }
    }
else if ( command === "pout") {
const imagesPout = [
            "https://media.giphy.com/media/TEJe85dPYW0Uw/giphy.gif",
            "https://media.giphy.com/media/X3VrxPijowGC4/giphy.gif",
            "https://media1.tenor.com/images/dfec7d2c203c08f5c6d0ddb82c3dda6f/tenor.gif?itemid=12942766",
            "https://media1.tenor.com/images/b25c3211c622490eef77f8878f2c8fc8/tenor.gif?itemid=16058457",
            "https://media1.tenor.com/images/2aedb9ff34aa111c5789004d22d05a78/tenor.gif?itemid=12144903",
            "https://media1.tenor.com/images/9a6ec326cf3d89ff87a509fbdf2ad5bb/tenor.gif?itemid=17524635",
            "https://media1.tenor.com/images/b3896a1b2f467cad24840634b0d0043d/tenor.gif?itemid=10932049",
            "https://media1.tenor.com/images/f9eecb39244e76c0a098f8ab8f6d00f1/tenor.gif?itemid=17382934",
            "https://media1.tenor.com/images/10e2dd1fb3447338fa9e51d1628789e0/tenor.gif?itemid=6181670",
            "https://media1.tenor.com/images/58a30820fccfd4e5501a10108979f313/tenor.gif?itemid=20005684",
            "https://media1.tenor.com/images/3ea7b9f018307d99cb8d1eada8c8cdd3/tenor.gif?itemid=5960653",
            "https://media1.tenor.com/images/c34238844c45e028417bb4e7b818acef/tenor.gif?itemid=17725106",
            "https://media1.tenor.com/images/d9f9d99b73d599112ceabb0c71eb3185/tenor.gif?itemid=19383389",
        ]
        let member = msg.mentions.users.first();
        const randomImage = imagesPout[Math.floor(Math.random() * imagesPout.length)];
        if(member){
            let embed = new Discord.MessageEmbed()
            .setTitle(`${msg.author.username} seems to pouts at ${member.username} 🥺`)
            .setColor('#f582ae')
            .setImage(randomImage)
            .setTimestamp()
            msg.channel.send(embed);
        }
        else {
            msg.channel.send('❌ | Tag someone to show your crocodile tears 🥱');
        }
    }
else if ( command === "pat") {
const imagesPat = [
            "https://media1.tenor.com/images/da8f0e8dd1a7f7db5298bda9cc648a9a/tenor.gif?itemid=12018819",
            "https://media1.tenor.com/images/f5176d4c5cbb776e85af5dcc5eea59be/tenor.gif?itemid=5081286",
            "https://media1.tenor.com/images/f41b3974036070fd1c498acf17a3a42e/tenor.gif?itemid=14751753",
            "https://media1.tenor.com/images/55df4c5fb33f3cd05b2f1ac417e050d9/tenor.gif?itemid=6238142",
            "https://media1.tenor.com/images/93ccdbf8da129c4fdf8a74a73fb34f17/tenor.gif?itemid=14809730",
            "https://media1.tenor.com/images/90712ed3a99db973ec92383a3c6a8767/tenor.gif?itemid=14043105",
            "https://media1.tenor.com/images/005e8df693c0f59e442b0bf95c22d0f5/tenor.gif?itemid=10947495",
            "https://media1.tenor.com/images/d7c326bd43776f1e0df6f63956230eb4/tenor.gif?itemid=17187002",
            "https://media1.tenor.com/images/2b3ddd79058842ccb9c1fc6acea0bcaa/tenor.gif?itemid=16243971",
            "https://media1.tenor.com/images/9bf3e710f33cae1eed1962e7520f9cf3/tenor.gif?itemid=13236885",
            "https://media1.tenor.com/images/0a35a0cc82d3b613086e0f420a94c2ad/tenor.gif?itemid=15779012",
            "https://media1.tenor.com/images/29cc23294c5b85186f7c68c2db4c0d3a/tenor.gif?itemid=20129769",
            "https://media1.tenor.com/images/8331ba63516b37eb6987dcd45c4c0f66/tenor.gif?itemid=11780508",
            "https://media1.tenor.com/images/143a887b46092bd880997119ecf09681/tenor.gif?itemid=15177421",
            "https://media1.tenor.com/images/8d8c95710c8031bb903ff422c81b8cba/tenor.gif?itemid=17435031",
            "https://media1.tenor.com/images/04f19642fb2c5fac067d4e737cc65262/tenor.gif?itemid=17863262",
            "https://media1.tenor.com/images/14668b53f2b7dfca47d70ff219817ff6/tenor.gif?itemid=18764332",
            "https://media1.tenor.com/images/f3d6899f6a49711f5b00f006d3739378/tenor.gif?itemid=19836590",
            "https://media1.tenor.com/images/1e8e613527e76da3caa87181120a9bd9/tenor.gif?itemid=19389750",
            "https://media1.tenor.com/images/3f28bb73946f3091552e083eb72859a8/tenor.gif?itemid=20637980"
        ]
let member = msg.mentions.users.first();
const randomImage = imagesPat[Math.floor(Math.random() * imagesPat.length)];
 if(member){
            let embed = new Discord.MessageEmbed()
            .setTitle(`Aww ${msg.author.username} patted ${member.username}! 😚`)
            .setColor('#8a2be2')
            .setImage(randomImage)
            .setTimestamp()
            msg.channel.send(embed);
        } else {
            msg.channel.send('❌ | Please specify someone');
        }
    }
 else if (command === "slap") {
    const imagesSlap = [
            "https://media.giphy.com/media/xUNd9HZq1itMkiK652/giphy.gif",
            "https://media.giphy.com/media/xUO4t2gkWBxDi/giphy.gif",
            "https://media.giphy.com/media/Zau0yrl17uzdK/giphy.gif",
            "https://media.giphy.com/media/k1uYB5LvlBZqU/giphy.gif",
            "https://media.giphy.com/media/tX29X2Dx3sAXS/giphy.gif",
            "https://media.giphy.com/media/6Fad0loHc6Cbe/giphy.gif",
            "https://media.giphy.com/media/RXGNsyRb1hDJm/giphy.gif",
            "http://i1280.photobucket.com/albums/a489/Lilyfied/Anime%20Gif/slapgif_zps5164a18e.gif",
            "https://media1.tenor.com/images/1c986c555ed0b645670596d978c88f6e/tenor.gif?itemid=13142581",
            "https://media1.tenor.com/images/74db8b0b64e8d539aebebfbb2094ae84/tenor.gif?itemid=15144612",
            "https://media1.tenor.com/images/74db8b0b64e8d539aebebfbb2094ae84/tenor.gif?itemid=15144612",
            "https://media1.tenor.com/images/6885c7676d8645bf2891138564159713/tenor.gif?itemid=4436362",
            "https://media1.tenor.com/images/b221fb3f50f0e15b3ace6a2b87ad0ffa/tenor.gif?itemid=8576304",
            "https://media1.tenor.com/images/477821d58203a6786abea01d8cf1030e/tenor.gif?itemid=7958720",
            "https://media1.tenor.com/images/0860d681fbe7ad04a2f39735ab939176/tenor.gif?itemid=13642334",
            "https://media1.tenor.com/images/efb03686f6194d7ede283f35807d4442/tenor.gif?itemid=20280731",
            "https://media1.tenor.com/images/10e77248b56ff4d874c3d0f14cfcad17/tenor.gif?itemid=18965728",
            "https://media1.tenor.com/images/f619012e2ec268d73ecfb89af5a8fb51/tenor.gif?itemid=8562186",
            "https://media1.tenor.com/images/45e7f853b25443ffeb86262405c1fc7a/tenor.gif?itemid=16049280",
            "https://media1.tenor.com/images/b797dce439faddabca83352b2c2de550/tenor.gif?itemid=17897223",
            "https://media1.tenor.com/images/6138bdbf998fde7638b8362499ac5427/tenor.gif?itemid=11829035",
            "https://media1.tenor.com/images/13e3bc4bef72b4e2338cfb16e736d68e/tenor.gif?itemid=17787694",
            "https://media1.tenor.com/images/9179deae71e70c6573d3176287e4a4fe/tenor.gif?itemid=16762854",
            "https://media1.tenor.com/images/1ba1ea1786f0b03912b1c9138dac707c/tenor.gif?itemid=5738394",
            "https://media1.tenor.com/images/153b2f1bfd3c595c920ce60f1553c5f7/tenor.gif?itemid=10936993"
        ]
let member = msg.mentions.users.first();
const randomImage = imagesSlap[Math.floor(Math.random() * imagesSlap.length)];
if(member){
            let embed = new Discord.MessageEmbed()
            .setTitle(`Ouch ${msg.author.username} slapped ${member.username}! 😣`)
            .setColor('#F39C12')
            .setImage(randomImage)
            .setTimestamp()
            msg.channel.send(embed);
        } else {
            msg.channel.send('❌ | Ok you got slapped by your partner. Now tag a user moron.');
        }
    }
 

 else if (command === "8ball" || command ==="8b") {
    msg.channel.send(doMagic8BallVoodoo())
  }
  

  else if (command === "kiss") {
    let member = msg.mentions.users.first();
const imagesKiss = [
            "https://media1.tenor.com/images/503bb007a3c84b569153dcfaaf9df46a/tenor.gif?itemid=17382412",
            "https://media1.tenor.com/images/ea9a07318bd8400fbfbd658e9f5ecd5d/tenor.gif?itemid=12612515",
            "https://media1.tenor.com/images/02d9cae34993e48ab5bb27763d5ca2fa/tenor.gif?itemid=4874618",
            "https://media1.tenor.com/images/4b5d5afd747fe053ed79317628aac106/tenor.gif?itemid=5649376",
            "https://media1.tenor.com/images/ef4a0bcb6e42189dc12ee55e0d479c54/tenor.gif?itemid=12143127",
            "https://media1.tenor.com/images/e76e640bbbd4161345f551bb42e6eb13/tenor.gif?itemid=4829336",
            "https://media1.tenor.com/images/632a3db90c6ecd87f1242605f92120c7/tenor.gif?itemid=5608449",
            "https://media1.tenor.com/images/f34f73decaef049f9354b27984dfb09c/tenor.gif?itemid=14958166",
            "https://media1.tenor.com/images/693602b39a071644cebebdce7c459142/tenor.gif?itemid=6206552",
            "https://media1.tenor.com/images/1306732d3351afe642c9a7f6d46f548e/tenor.gif?itemid=6155670",
            "https://media1.tenor.com/images/37633f0b8d39daf70a50f69293e303fc/tenor.gif?itemid=13344412",
            "https://media.giphy.com/media/bGm9FuBCGg4SY/giphy.gif",
            "https://media.giphy.com/media/11rWoZNpAKw8w/giphy.gif",
            "https://media.giphy.com/media/kdLyU5mq9mGfm/giphy.gif",
            "https://media.giphy.com/media/jR22gdcPiOLaE/giphy.gif",
            "https://acegif.com/wp-content/uploads/anime-kiss-6.gif"
        ]
const randomImage = imagesKiss[Math.floor(Math.random() * imagesKiss.length)];
        if(member){
            let embed = new Discord.MessageEmbed()
            .setTitle(`${msg.author.username} kissed ${member.username}! 😍`)
            .setColor('#8E44AD')
            .setImage(randomImage)
            .setTimestamp()
            msg.channel.send(embed);
        } else {
            msg.channel.send('❌ | You kissing air dumbo!! Tag someone.');
        }
    }
else if ( command === "punch") {
 const imagesPunch = [
            "https://media.giphy.com/media/3ohc1292yKn6Z1saGs/giphy.gif",
            "https://media.giphy.com/media/1Bgr0VaRnx3pCZbaJa/giphy.gif",
            "https://media.giphy.com/media/11HeubLHnQJSAU/giphy.gif",
            "https://media.giphy.com/media/wcIT7dQ5yWbDO/giphy.gif",
            "https://media.giphy.com/media/ahMaehFrEx2BG/giphy.gif",
            "https://media.giphy.com/media/vxXLJxa2gDaord2eib/giphy.gif",
            "https://media.giphy.com/media/YJDmc88k7ttao/giphy.gif",
            "https://media1.tenor.com/images/a7a67336a11b60d292179be1246240c9/tenor.gif?itemid=17175633",
            "https://media1.tenor.com/images/2487a7679b3d7d23cadcd51381635467/tenor.gif?itemid=11451829",
            "https://media1.tenor.com/images/55507aea306782b916659085fc062909/tenor.gif?itemid=8932977",
            "https://media1.tenor.com/images/ee3f2a6939a68df9563a7374f131fd96/tenor.gif?itemid=14210784",
            "https://media1.tenor.com/images/2e36b49b3d26d1e2fe014e5d4c1dbc75/tenor.gif?itemid=15580060",
            "https://media1.tenor.com/images/517f63ce5ffc6426bddd17d7413ebaca/tenor.gif?itemid=5247335",
            "https://media1.tenor.com/images/b82427b0507d43afb17a6c9ddddfa0a9/tenor.gif?itemid=4903584",
            "https://media1.tenor.com/images/175cf269b6df62b75a5d25a0ed45e954/tenor.gif?itemid=20976942",
            "https://media1.tenor.com/images/40b2cf4b167e88d116993a9989e338a4/tenor.gif?itemid=20921161",
            "https://media1.tenor.com/images/d3eec32b0f4acefdc2ffeada1491c984/tenor.gif?itemid=17502714",
            "https://media1.tenor.com/images/ea1cbdb502d575ac8688caebce996a90/tenor.gif?itemid=13777334",
        ]
let member = msg.mentions.users.first();
const randomImage = imagesPunch[Math.floor(Math.random() * imagesPunch.length)];
        if(member){
            let embed = new Discord.MessageEmbed()
            .setTitle(`${msg.author.username} punched ${member.username}! 😡`)
            .setColor('#9bddff')
            .setImage(randomImage)
            .setTimestamp()
            msg.channel.send(embed);
        }else { 
            msg.channel.send('❌ | Please specify someone');
        }
    }
 else if ( command  === "hug") {

     const imagesHug = [
            "https://media.giphy.com/media/u9BxQbM5bxvwY/giphy.gif",
            "https://media.giphy.com/media/PHZ7v9tfQu0o0/giphy.gif",
            "https://media.giphy.com/media/3bqtLDeiDtwhq/giphy.gif",
            "https://media.giphy.com/media/LIqFOpO9Qh0uA/giphy.gif",
            "https://media.giphy.com/media/QFPoctlgZ5s0E/giphy.gif",
            "https://media.giphy.com/media/lrr9rHuoJOE0w/giphy.gif",
            "https://media.giphy.com/media/od5H3PmEG5EVq/giphy.gif",
            "https://media.giphy.com/media/ZQN9jsRWp1M76/giphy.gif",
            "https://media.giphy.com/media/du8yT5dStTeMg/giphy.gif",
            "https://acegif.com/wp-content/gif/anime-hug-59.gif",
            "https://acegif.com/wp-content/gif/anime-hug-38.gif",
            "https://acegif.com/wp-content/gif/anime-hug-86.gif",
            "https://acegif.com/wp-content/gif/anime-hug-14.gif",
            "https://acegif.com/wp-content/gif/anime-hug-3.gif",
            "https://acegif.com/wp-content/gif/anime-hug-84.gif",
            "https://acegif.com/wp-content/gif/anime-hug-36.gif",
            "https://acegif.com/wp-content/gif/anime-hug-45.gif",
            
        ]
let member = msg.mentions.users.first();
let randomImage = imagesHug[Math.floor(Math.random() * imagesHug.length)];
if(member){
            let embed = new Discord.MessageEmbed()
            .setTitle(`${msg.author.username} hugs ${member.username}! 🥰`)
            .setColor('#4CAF50')
            .setImage(randomImage)
            .setTimestamp()
            msg.channel.send(embed);
        }else {
            msg.channel.send('❌ | Who are you hugging jackass?');
        }
    }




  
 

 else if (command === "cointoss") {
    msg.channel.send(coinToss())
  }
 else if (command === "roast") {
     let targetMember = msg.mentions.members.first();
    if(!targetMember) return msg.reply('Ok you have more dicks in your head. Now tag a user dumbass.');
     msg.channel.send(Roast())
   }

  
 else if (command === "server") {

	let roles = msg.guild.roles.cache.sort((a, b) => b.position - a.position).map(role => role.name);
        let members = msg.guild.members.cache;
        let channels = msg.guild.channels.cache;
        let embed = new Discord.MessageEmbed()
   .setTitle(`Server Information - ${msg.guild.name}`)
        .setThumbnail(msg.guild.iconURL())
        .setColor('#117791')
        .addField("<a:flame:914448780122783754> General Information", [
            `• **Name**: ${msg.guild.name}`,
            `• **Server ID**: ${msg.guild.id}`,
            `• **Owner**: <@${msg.guild.ownerID}>`,
            `• **Server Created**: ${moment(msg.guild.createdTimestamp).format('LL LTS')}`, 
        ])
        .addField('<a:flame:914448780122783754> Member Information',[
            `• **Users**: ${msg.guild.memberCount}`,
            `• **Bots**: ${members.filter(m => m.user.bot).size}`,
        ])

        .addField('<a:flame:914448780122783754> Channel Information', [
            `• **Channels**: ${msg.guild.channels.cache.size}`,
            `• **Text Channels**: ${channels.filter(ch => ch.type === "text").size}`,
            `• **Voice Channels**: ${channels.filter(ch => ch.type === "voice").size}`,
        ])

       
        msg.channel.send(embed)
    }
else if ( command === "info" ){
  const user = msg.mentions.users.first() || msg.author;
        const member = msg.guild.members.cache.get(user.id);
 let embed = new Discord.MessageEmbed()
        .setTitle(`User Information - ${user.username}`)
        .setThumbnail(user.displayAvatarURL({ dynamic: true }))
        .setColor('#660077')
        .addField("<a:loading:914450825458380810> Informations", [
            `• **Name**: ${user.tag}`,
            `• **User ID**: ${user.id}`,
            `• **Nickname**: ${member.nickname || 'None'}`,
            `• **Is Bot**: ${user.bot}`,
            `• **Created At**: ${moment(member.user.createdTimestamp).format('LL LTS')}`,
            `• **Joined At**: ${moment(member.joinedAt).format('LL LTS')}`,
        ])
        msg.channel.send(embed)
    }

else if (command === "uptime") {
  let channel = msg.channel;
    msg.delete();

    let totalSeconds = (bot.uptime / 1000);
    totalSeconds %= 86400;
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);

    let uptimeEmbed = new Discord.MessageEmbed()
    .setDescription(`${bot.user.username} Bot Uptime`)
    .setColor("#e56b00")
    .addField("Hours", hours)
    .addField("Minutes", minutes)
    .setTimestamp()
    .setFooter(`Lavet`)
    
    channel.send(uptimeEmbed).then(msg => msg.delete({ timeout: 5000 })).catch(console.error);
}


else if ( command === "purge") {
    const amount = msg.content.split(" ")[1];
    if(!amount)
    {
        msg.reply(`<amount>`);
        return;
    }
     if(!msg.member.hasPermission("MANAGE_MESSAGES"))
     {
        msg.channel.send('You have no permissions to do that');
        return;
     }
    msg.channel.bulkDelete(amount).catch(err => {
            console.error(err);
            msg.channel.send('You can only delete messages for less than 14 days');
        });
    

}       
          
else if ( command === "ban") {

  if(!msg.member.hasPermission("BAN_MEMBERS")) return msg.channel.send('You can\'t use that!')
        if(!msg.guild.me.hasPermission("BAN_MEMBERS")) return msg.channel.send('I don\'t have the right permissions.')
 const member = msg.mentions.members.first() 
  

        if(!args[0]) return msg.channel.send('Please specify a user');

        if(!member) return msg.channel.send('Can\'t seem to find this user. Sorry \'bout that :/');
        if(!member.bannable) return msg.channel.send('❌This user can\'t be banned. It is either because they are a mod/admin, or their role is higher than mine.');

        if(member.id === msg.author.id) return msg.channel.send('Bruh, you can\'t ban yourself!');

        let reason = args.slice(1).join(" ");

        if(!reason) reason = 'Unspecified';

        member.ban({reason: 'your reason here' }).catch(err => { 
          msg.channel.send('Something went wrong')
            console.log(err)
        })
  let banembed = new Discord.MessageEmbed()
        .setTitle('<a:ban:914445759091453992> Member banned')
        .setThumbnail(member.user.displayAvatarURL())
        .addField('User Banned', member)
        .addField('Kicked by', msg.author)
        .addField('Reason', reason)
        .setFooter('Time kicked', bot.user.displayAvatarURL())
        .setTimestamp()
        .setColor("#323296")
        msg.channel.send(banembed);


 } 

else if ( command === "kick") {
  const member = msg.mentions.members.first()
if(!msg.member.hasPermission('KICK_MEMBERS')) {
            msg.channel.send('You don\'t permissions to do that');
            return;
        }
 let mentionMember = msg.mentions.members.first();
        //If user dont mention a member, that show him this error msg
        if(!mentionMember) {
            msg.channel.send('Whom you are kicking dumbass!!Mention someone.');
            return;
        }
 if(!mentionMember.kickable) {
            msg.channel.send('❌This user can\'t be kicked. It is either because they are a mod/admin, or their role is higher than mine');
            return;
        }
 if(member.id === msg.author.id) return msg.channel.send('Bruh, you can\'t kick yourself!');
 
let reason = args.slice(1).join(" ");

        if(!reason) reason = 'Unspecified';

        member.kick({reason: 'your reason here' }).catch(err => { 
          msg.channel.send('Something went wrong')
            console.log(err)
        })
let kickembed = new Discord.MessageEmbed()
        .setTitle('<:fired:914445759229866015> Member kicked')
        .setThumbnail(member.user.displayAvatarURL())
        .addField('User Kicked', member)
        .addField('Kicked by', msg.author)
        .addField('Reason', reason)
        .setFooter('Time kicked', bot.user.displayAvatarURL())
        .setTimestamp()
        .setColor("#323296")
        msg.channel.send(kickembed);


 } 
else if ( command === "private") {
 const channel =
 bot.channels.cache.find(
  (channel) => channel.name == `#${args.slice(0).join('-')}`
 ) || bot.channels.cache.get(args[0].match(/<#(\d+)>/)[1]);
if(!msg.member.hasPermission('MANAGE_CHANNELS')) {
            msg.channel.send('You don\'t permissions to do that!!');
            return;
        }
if (!channel) {
 console.log(channel);
 return msg.reply('Please provide a channel name/id!');
}



if (!channel.permissionsFor(msg.guild.roles.everyone).has('VIEW_CHANNEL')) {
 const errorEmbed = new Discord.MessageEmbed()
  .setDescription(
   `❌ \`VIEW_CHANNEL\` for \`${channel.name}\` is already disabled.`
  )
  .setColor('RED');
 return msg.channel.send(errorEmbed);
}
channel
 .updateOverwrite(channel.guild.roles.everyone, { VIEW_CHANNEL: false })
 .then(() => {
  const msgEmbed = new Discord.MessageEmbed()
   .setDescription(`<a:tick:914447808843644948> The channel\`${channel.name}\` has been set to private.`)
   .setColor('GREEN');
  msg.channel.send(msgEmbed);
 })
 .catch((error) => {
  console.log(error);
  const errorEmbed = new Discord.MessageEmbed()
   .setDescription(`❌ Unable to lock \`${channel.name}\`.`)
   .setColor('RED');
  msg.channel.send(errorEmbed);
 });
}
  else if ( command === "lock") {
 const channel =
 bot.channels.cache.find(
  (channel) => channel.name == `#${args.slice(0).join('-')}`
 ) || bot.channels.cache.get(args[0].match(/<#(\d+)>/)[1]);
if(!msg.member.hasPermission('MANAGE_CHANNELS')) {
            msg.channel.send('You don\'t permissions to do that!!');
            return;
        }
if (!channel) {
 console.log(channel);
 return msg.reply('Please provide a channel name/id!');
}



if (!channel.permissionsFor(msg.guild.roles.everyone).has('SEND_MESSAGES')) {
 const errorEmbed = new Discord.MessageEmbed()
  .setDescription(
   `❌ \`SEND_MESSAGES\` for \`${channel.name}\` is already disabled.`
  )
  .setColor('RED');
 return msg.channel.send(errorEmbed);
}
channel
 .updateOverwrite(channel.guild.roles.everyone, { SEND_MESSAGES: false })
 .then(() => {
  const msgEmbed = new Discord.MessageEmbed()
   .setDescription(`🔒 The channel\`${channel.name}\` has been locked.`)
   .setColor('GREEN');
  msg.channel.send(msgEmbed);
 })
 .catch((error) => {
  console.log(error);
  const errorEmbed = new Discord.MessageEmbed()
   .setDescription(`❌ Unable to lock \`${channel.name}\`.`)
   .setColor('RED');
  msg.channel.send(errorEmbed);
 });
} 
else if ( command === "unlock") {
 const channel =
 bot.channels.cache.find(
  (channel) => channel.name == `#${args.slice(0).join('-')}`
 ) || bot.channels.cache.get(args[0].match(/<#(\d+)>/)[1]);
if(!msg.member.hasPermission('MANAGE_CHANNELS')) {
            msg.channel.send('You don\'t permissions to do that!!');
            return;
        }
if (!channel) {
 console.log(channel);
 return msg.reply('Please provide a channel name/id!');
}




channel
 .updateOverwrite(channel.guild.roles.everyone, { SEND_MESSAGES: true })
 .then(() => {
  const msgEmbed = new Discord.MessageEmbed()
   .setDescription(`🔓 The channel\`${channel.name}\` has been unlocked.`)
   .setColor('GREEN');
  msg.channel.send(msgEmbed);
 })
 .catch((error) => {
  console.log(error);
  const errorEmbed = new Discord.MessageEmbed()
   .setDescription(`❌ Unable to unlock \`${channel.name}\`.`)
   .setColor('RED');
  msg.channel.send(errorEmbed);
 });
} 
else if (command === "howgay") {
let member = msg.mentions.users.first();

        let random = Math.floor(Math.random() * 101);
 
  if(member){
            const embed = new Discord.MessageEmbed()
            .setTitle('Results')
            .setDescription(`${member.username} is ${random}% gay <a:gay:914451425612943382>`)
            .setColor('#FF00A6')
    
            msg.channel.send(embed);
       }else {
            const embed = new Discord.MessageEmbed()
            .setTitle('Results')
            .setDescription(`${msg.author.username} is ${random}% gay <a:gay:914451425612943382>`)
            .setColor('#FF00A6')
           msg.channel.send(embed);
         }
    }
 else if ( command === "ranime") {
 
        let anime = randomanime.anime()
        let member = msg.author;

        const embed = new Discord.MessageEmbed()
        .setTitle(`Image for ${member.username}`)
        .setImage(anime)
        .setColor("RANDOM")

        msg.channel.send(embed);
    }


 else if (command === "weather"||  command === "w") {
      const exampleEmbed = (
	temp,
	maxTemp,
	minTemp,
	pressure,
	humidity,
	wind,
	cloudness,
	icon,
	author,
	profile,
	cityName,
	country
) =>
	new Discord.MessageEmbed()
		.setColor('RANDOM')
		.setAuthor(`Hello, ${author}`, profile)
		.setTitle(`There is ${temp}\u00B0 C in ${cityName}, ${country}`)
		.addField(`Maximum Temperature:`, `${maxTemp}\u00B0 C`, true)
		.addField(`Minimum Temperature:`, `${minTemp}\u00B0 C`, true)
		.addField(`Humidity:`, `${humidity} %`, true)
		.addField(`Wind Speed:`, `${wind} m/s`, true)
		.addField(`Pressure:`, `${pressure} hpa`, true)
		.addField(`Cloudiness:`, `${cloudness}`, true)
		.setThumbnail(`http://openweathermap.org/img/w/${icon}.png`)

                .setFooter('Enjoy!!');
        axios
            .get(
                `https://api.openweathermap.org/data/2.5/weather?q=${args}&units=metric&appid=${process.env.API_TOKEN}`
            )
            .then(response => {
                let apiData = response;
                let currentTemp = Math.ceil(apiData.data.main.temp)
                let maxTemp = apiData.data.main.temp_max;
                let minTemp = apiData.data.main.temp_min;
                let humidity = apiData.data.main.humidity;
                let wind = apiData.data.wind.speed;
                let author = msg.author.username
                let profile = msg.author.displayAvatarURL
                let icon = apiData.data.weather[0].icon
                let cityName = args
                let country = apiData.data.sys.country
                let pressure = apiData.data.main.pressure;
                let cloudness = apiData.data.weather[0].description;
                msg.channel.send(exampleEmbed(currentTemp, maxTemp, minTemp, pressure, humidity, wind, cloudness, icon, author, profile, cityName, country));
            }).catch(err => {
                msg.react('😪')
                
           
          
    
 })
}

else if (command === "help") {
const embed  = new Discord.MessageEmbed()
 .setAuthor(msg.author.tag)
 .setTitle("Thankyou for using help command.")
 .setColor("RED")
 .setDescription("Click on any of the category given below to view its commands.\n **Note**- Use '+' as prefix and all the commands are case sensitive")
 
 const button1 = new disbut.MessageButton()
        .setStyle('green')
        .setLabel("Fun")
        .setID("button1") 
        
 const button2 = new disbut.MessageButton()
      .setStyle('green')
        .setLabel("Moderation")
        .setID("button2")
 
 let row = new disbut.MessageActionRow()
  .addComponents(button1, button2);
msg.channel.send(null, {embed: embed , components: [row]}).then(msg => {
                    setTimeout(function() {
                        msg.edit(null, { embed: embed , components:[]})
                    }, 120000);
})

}

    
else if ( command === "quote") {

const quotes = [ "If you love life, don’t waste time, for time is what life is made up of. - Bruce Lee",
    "Where is my watch? - Salvador Dali",   
    "Use time sparingly. - Chilon of Sparta",
    "What is true, is true only for one time and only for one place. - T.S. Eliot",
    "Whatever is done well enough is done quickly enough. - Augustus",
    "It's not worth doing something unless you were doing something that someone, somewhere, would much rather you weren't doing. - Terry Pratchett",
    "What is said is done. - Latin phrase",
    "Each man delights in the work that suits him best. - Homer",
    "You don't have to talk about what you're doing beforehand. This will be seen anyway. - Marcus Aurelius",
    "Beginnings are usually scary, and endings are usually sad, but its everything in between that makes it all worth living. - Bob Marley",
    "Good things are difficult. - Ancient Greek phrase",
    "I came, I saw, I won. - Julius Caesar",
    "In most cases men willingly believe what they wish. - Julius Caesar",
    "Give me a museum and I'll fill it. - Pablo Picasso"
    ]
 let object = Object.keys(quotes)
        let randomQuote = Math.floor(Math.random() * object.length)
        
        let quote = quotes[randomQuote]

 const embed = new Discord.MessageEmbed()
     .setAuthor(msg.author.tag)
     .setTitle("📜 Quotes")
     .setColor("#8FBC8F")
     .setDescription("**Normal**- Gives you normal quote. \n **Anime** - Give quotes by anime characters.")
const embed1 = new Discord.MessageEmbed()
     .setAuthor(msg.author.tag)
     .setTitle("Thankyou for using quote command")
     .setColor("#8FBC8F")
     .setDescription(`${quote}`)
 const normal = new disbut.MessageButton()
        .setStyle('green')
        .setLabel("Normal")
        .setID("normal")
        
const anime = new disbut.MessageButton()
        .setStyle('green')
        .setLabel("Anime")
        .setID("anime")

let row = new disbut.MessageActionRow()
  .addComponents(normal, anime);
 
 
 msg.channel.send(null, {embed: embed ,components: [row]}).then(msg => {
                    setTimeout(function() {
                        msg.edit(null, { embed: embed1 , components:[]})
                    }, 10000);


})
}

else if (command === "meme") {
    const embed = new Discord.MessageEmbed();
	got('https://www.reddit.com/r/programmingmemes/.json')
		.then(response => {
			const [list] = JSON.parse(response.body);
			const [post] = list.data.children;

			const permalink = post.data.permalink;
			const memeUrl = `https://reddit.com${permalink}`;
			const memeImage = post.data.url;
			const memeTitle = post.data.title;
			const memeUpvotes = post.data.ups;
			const memeNumComments = post.data.num_comments;

			embed.setTitle(`${memeTitle}`);
			embed.setURL(`${memeUrl}`);
			embed.setColor('RANDOM');
			embed.setImage(memeImage);
			embed.setFooter(`👍 ${memeUpvotes} 💬 ${memeNumComments}`);

 
 
 msg.channel.send(embed)
		})
		.catch(console.error);


  }


else if ( command === "google" || command === "g") {
const embed = new Discord.MessageEmbed()
        .setTitle("<a:google:914452617915138058> Here are some search results. <a:google:914452617915138058>")
        .setColor("#000000")
        .setTimestamp()
googleIt({'query': args.join(' ')}).then(results => {
        results.forEach(function(item, index) { 
            embed.addField((index + 1) + ": " + item.title, "<" + item.link + ">");
        })
 msg.channel.send(embed);
    }).catch(e => {
        // any possible errors that might have occurred (like no Internet connection)
    })
}


else if (command === "fakevirus" || command === "fv") {
    let virusname = args.join(' ');
    if (virusname < 1) {
      return msg.channel.send('Please type in a name for the virus')
    }
    msg.channel.send({
      embed: new Discord.MessageEmbed().setTitle('Loading ' + virusname + "...").setColor(0xFF0000)
    }).then(msg => {
    setTimeout(function () {
      msg.edit({
        embed: new Discord.MessageEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓ ] - 1%').setColor(0xFF0000)
      })
    }, 1000)
    setTimeout(function () {
      msg.edit({
        embed: new Discord.MessageEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓ ] / 2%').setColor(0xFF0000)
      })
    }, 2000)
    setTimeout(function () {
      msg.edit({
        embed: new Discord.MessageEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓ ] - 2%').setColor(0xFF0000)
      })
    }, 3000)
    setTimeout(function () {
      msg.edit({
        embed: new Discord.MessageEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓ ] \ 2%').setColor(0xFF0000)
      })
    }, 4000)
    setTimeout(function () {
      msg.edit({
        embed: new Discord.MessageEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓ ] - 28%').setColor(0xFF0000)
      })
    }, 5000)
    setTimeout(function () {
      msg.edit({
        embed: new Discord.MessageEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓ ] / 28%').setColor(0xFF0000)
      })
    }, 6000)


    setTimeout(function () {
      msg.edit({
        embed: new Discord.MessageEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓ ] - 78%').setColor(0xFF0000)
      })
    }, 7000)
    setTimeout(function () {
      msg.edit({
        embed: new Discord.MessageEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓ ] \ 78%').setColor(0xFF0000)
      })
    }, 8000)
    setTimeout(function () {
      msg.edit({
        embed: new Discord.MessageEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓ ] - 78%').setColor(0xFF0000)
      })
    }, 9000)

    setTimeout(function () {
      msg.edit({
        embed: new Discord.MessageEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓ ] / 96%').setColor(0xFF0000)
      })
    }, 10000)
    setTimeout(function () {
      msg.edit({
        embed: new Discord.MessageEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] - 96%').setColor(0xFF0000)
      })
    }, 11000)
    setTimeout(function () {
      msg.edit({
        embed: new Discord.MessageEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] \ 96%').setColor(0xFF0000)
      })
    }, 12000)
    setTimeout(function () {
      msg.edit({
        embed: new Discord.MessageEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] - 96%').setColor(0xFF0000)
      })
    }, 13000)
    setTimeout(function () {
      msg.edit({
        embed: new Discord.MessageEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] / 96%').setColor(0xFF0000)
      })
    }, 14000)

    setTimeout(function () {
      msg.edit({
        embed: new Discord.MessageEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] - 99%').setColor(0xFF0000)
      })
    }, 15000)
    setTimeout(function () {
      msg.edit({
        embed: new Discord.MessageEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 96%').setColor(0xFF0000)
      })
    }, 16000)


    setTimeout(function () {
      msg.edit({
        embed: new Discord.MessageEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] - 100%').setColor(0xFF0000)
      })
    }, 17000)
    setTimeout(function () {
      msg.edit({
        embed: new Discord.MessageEmbed().setTitle('[' + virusname + ']: Stealing Token...').setColor(0xFF0000)
      })
    }, 19000)
    setTimeout(function () {
      msg.edit({
        embed: new Discord.MessageEmbed().setTitle('[' + virusname + ']: Uploading Token to sql://localhost:8080/encrypted_' + virusname + ".key").setColor(0xFF0000)
      })
    }, 22000)
    setTimeout(function () {
      msg.edit({
        embed: new Discord.MessageEmbed().setTitle('[' + virusname + ']: Uploaded! Initiating explosion in 5...').setColor(0xFF0000)
      })
    }, 25000)
    setTimeout(function () {
      msg.edit({
        embed: new Discord.MessageEmbed().setTitle('[' + virusname + ']: Uploaded! Initiating explosion in 4...').setColor(0xFF0000)
      })
    }, 26000)
    setTimeout(function () {
      msg.edit({
        embed: new Discord.MessageEmbed().setTitle('[' + virusname + ']: Uploaded! Initiating explosion in 3...').setColor(0xFF0000)
      })
    }, 27000)
    setTimeout(function () {
      msg.edit({
        embed: new Discord.MessageEmbed().setTitle('[' + virusname + ']: Uploaded! Initiating explosion in 2...').setColor(0xFF0000)
      })
    }, 28000)
    setTimeout(function () {
      msg.edit({
        embed: new Discord.MessageEmbed().setTitle('[' + virusname + ']: Uploaded! Initiating explosion in 1...').setColor(0xFF0000)
      })
    }, 29000)
    setTimeout(function () {
      msg.edit(':boom: :boom: :boom: :boom: :boom: :boom: :boom: :boom: :boom:')
    }, 30000)

}).catch(console.error)

  }


});




bot.login(process.env.TOKEN);
