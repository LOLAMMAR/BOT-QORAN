const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

require("dotenv").config();
const Discord = require("discord.js");
const client = new Discord.Client({ intents: 131071});
client.on("ready",() =>{
    console.log("I'm Online")
})

const { joinVoiceChannel, createAudioPlayer, createAudioResource } = require('@discordjs/voice');

client.on("messageCreate", message => {
const mentionPrefix = `<@!${client.user.id}>`;
const Only = message.content.slice(mentionPrefix.length).trim().split(/ +/);
const command = Only.shift().toLowerCase();
if(command === "quran"){

if(!message.member.voice.channel){
return message.channel.send({content:"يجب عليك الدخول الي روم صوتي أولا"})
}

let row = new Discord.ActionRowBuilder()
.addComponents(
new Discord.StringSelectMenuBuilder()
.setCustomId('select')
.setPlaceholder('قم بالاختيار هنا')
.addOptions(
{
label: 'سوره الفاتحة',
description: 'راشد المشاري',
value: '1',
},
{
label: ' سورة البقرة',
description: 'راشد المشاري',
value: '2',
},              
{
label: 'سورة آل عمران',
description: 'راشد المشاري',
value: '3',
},              
{
label: 'سورة النساء',
description: 'راشد المشاري',
value: '4',
},              
{
label: 'سورة المائدة',
description: 'راشد المشاري',
value: '5',
},              
{
label: 'سورة الأنعام',
description: 'راشد المشاري',
value: '6',
},              
{
label: 'سورة الأعراف',
description: 'راشد المشاري',
value: '7',
},              
{
label: 'سورة الأنفال',
description: 'راشد المشاري',
value: '8',
},              
{
label: 'سورة التوبة',
description: 'راشد المشاري',
value: '9',
},              
{
label: 'سورة يونس',
description: 'راشد المشاري',
value: '10',
},              
{
label: 'سورة هود',
description: 'راشد المشاري',
value: '11',
},             
{
label: 'سورة يوسف',
description: 'راشد المشاري',
value: '12',
},              
{
label: 'سورة الرعد',
description: 'راشد المشاري',
value: '13',
},              
{
label: 'سورة إبراهيم',
description: 'راشد المشاري',
value: '14',
},              
{
label: 'سورة الحجر',
description: 'راشد المشاري',
value: '15',
},              
{
label: 'سورة النحل',
description: 'راشد المشاري',
value: '16',
},              
{
label: 'سورة الإسراء',
description: 'راشد المشاري',
value: '17',
},              
{
label: 'سورة الكهف',
description: 'راشد المشاري',
value: '18',
},
{
label: 'سورة مريم',
description: 'راشد المشاري',
value: '19',
},
{
label: 'سورة طه',
description: 'راشد المشاري',
value: '20',
},
{
label: 'سورة الأنبياء',
description: 'راشد المشاري',
value: '21',
},
{
label: 'سورة الحج',
description: 'راشد المشاري',
value: '22',
},
{
label: 'سورة المؤمنون',
description: 'راشد المشاري',
value: '23',
},
{
label: 'سورة النور',
description: 'راشد المشاري',
value: '24',
},
{
label: 'سورة الفرقان',
description: 'راشد المشاري',
value: '25',
},     
),
)
let row2 = new Discord.ActionRowBuilder()
.addComponents(
new Discord.StringSelectMenuBuilder()
.setCustomId('select2')
.setPlaceholder('قم بالاختيار هنا')
.addOptions(
{
label: 'سورة الشعراء',
description: 'راشد المشاري',
value: '26',
},
{
label: 'سورة النمل',
description: 'راشد المشاري',
value: '27',
},
{
label: 'سورة القصص',
description: 'راشد المشاري',
value: '28',
},
{
label: 'سورة العنكبوت',
description: 'راشد المشاري',
value: '29',
},
{
label: 'سورة الروم',
description: 'راشد المشاري',
value: '30',
},
{
label: 'سورة لقمان',
description: 'راشد المشاري',
value: '31',
},
{
label: 'سورة السجدة',
description: 'راشد المشاري',
value: '32',
},
{
label: 'سورة الأحزاب',
description: 'راشد المشاري',
value: '33',
},
{
label: 'سورة سبأ',
description: 'راشد المشاري',
value: '34',
},
{
label: 'سورة فاطر',
description: 'راشد المشاري',
value: '35',
},
{
label: 'سورة يس',
description: 'راشد المشاري',
value: '36',
},
{
label: 'سورة الصافات',
description: 'راشد المشاري',
value: '37',
},
{
label: 'سورة ص',
description: 'راشد المشاري',
value: '38',
},
{
label: 'سورة الزمر',
description: 'راشد المشاري',
value: '39',
},
{
label: 'سورة غافر',
description: 'راشد المشاري',
value: '40',
},
{
label: 'سورة فصلت',
description: 'راشد المشاري',
value: '41',
},
{
label: 'سورة الشورى',
description: 'راشد المشاري',
value: '42',
},
{
label: 'سورة الزخرف',
description: 'راشد المشاري',
value: '43',
},
{
label: 'سورة الدخان',
description: 'راشد المشاري',
value: '44',
},
{
label: 'سورة الجاثية',
description: 'راشد المشاري',
value: '45',
},
{
label: 'سورة الأحقاف',
description: 'راشد المشاري',
value: '46',
},
{
label: 'سورة محمد',
description: 'راشد المشاري',
value: '47',
},
{
label: 'سورة الفتح',
description: 'راشد المشاري',
value: '48',
},
{
label: "سورة الحجرات",
description: 'راشد المشاري',
value: '49',
},
{
label: 'سورة ق',
description: 'راشد المشاري',
value: '50',
},

)
)
let row3 = new Discord.ActionRowBuilder()
.addComponents(
new Discord.StringSelectMenuBuilder()
.setCustomId('select3')
.setPlaceholder('قم بالاختيار هنا')
.addOptions(
{
label: 'سورة الذاريات',
description: 'راشد المشاري',
value: '51',
},
{
label: 'سورة الطور',
description: 'راشد المشاري',
value: '52',
},
{
label: 'سورة النجم',
description: 'راشد المشاري',
value: '53',
},
{
label: 'سورة القمر',
description: 'راشد المشاري',
value: '54',
},
{
label: 'سورة الرحمن',
description: 'راشد المشاري',
value: '55',
},
{
label: 'سورة الواقعة',
description: 'راشد المشاري',
value: '56',
},
{
label: 'سورة الحديد',
description: 'راشد المشاري',
value: '57',
},
{
label: 'سورة المجادلة',
description: 'راشد المشاري',
value: '58',
},
{
label: 'سورة الحشر',
description: 'راشد المشاري',
value: '59',
},
{
label: 'سورة الممتحنة',
description: 'راشد المشاري',
value: '60',
},
{
label:'سورة الصف',
description: 'راشد المشاري',
value: '61',
},
{
label: 'سورة الجمعة',
description: 'راشد المشاري',
value: '62',
},
{
label: 'سورة المنافقون',
description: 'راشد المشاري',
value: '63',
},
{
label: 'سورة التغابن',
description: 'راشد المشاري',
value: '64',
},
{
label: 'سورة الطلاق',
description: 'راشد المشاري',
value: '65',
},
{
label: 'سورة التحريم',
description: 'راشد المشاري',
value: '66',
},
{
label: 'سورة الملك',
description: 'راشد المشاري',
value: '67',
},
{
label: 'سورة القلم',
description: 'راشد المشاري',
value: '68',
},
{
label: 'سورة الحاقة',
description: 'راشد المشاري',
value: '69',
},
{
label: 'سورة المعارج',
description: 'راشد المشاري',
value: '70',
},
{
label: 'سورة نوح',
description: 'راشد المشاري',
value: '71',
},
{
label: 'سورة الجن',
description: 'راشد المشاري',
value: '72',
},
{
label: 'سورة المزمل',
description: 'راشد المشاري',
value: '73',
},
{
label: 'سورة المدثر',
description: 'راشد المشاري',
value: '74',
},
{
label: 'سورة القيامة',
description: 'راشد المشاري',
value: '75',
},

)
)     
let row4 = new Discord.ActionRowBuilder()
.addComponents(
new Discord.StringSelectMenuBuilder()
.setCustomId('select4')
.setPlaceholder('قم بالاختيار هنا')
.addOptions(
{
label: 'سورة الإنسان',
description: 'راشد المشاري',
value: '76',
},
{
label: 'سورة المرسلات',
description: 'راشد المشاري',
value: '77',
},
{
label: 'سورة النبأ',
description: 'راشد المشاري',
value: '78',
},
{
label: 'سورة النازعات',
description: 'راشد المشاري',
value: '79',
},
{
label: 'سورة عبس',
description: 'راشد المشاري',
value: '80',
},
{
label: 'سورة التكوير',
description: 'راشد المشاري',
value: '81',
},
{
label: 'سورة الانفطار',
description: 'راشد المشاري',
value: '82',
},
{
label: 'سورة المطففين',
description: 'راشد المشاري',
value: '83',
},
{
label: 'سورة الانشقاق',
description: 'راشد المشاري',
value: '84',
},
{
label: 'سورة البروج',
description: 'راشد المشاري',
value: '85',
},
{
label: 'سورة الطارق',
description: 'راشد المشاري',
value: '86',
},
{
label: 'سورة الأعلى',
description: 'راشد المشاري',
value: '87',
},
{
label: 'سورة الغاشية',
description: 'راشد المشاري',
value: '88',
},
{
label: 'سورة الفجر',
description: 'راشد المشاري',
value: '89',
},
{
label: 'سورة البلد',
description: 'راشد المشاري',
value: '90',
},
{
label: 'سورة الشمس',
description: 'راشد المشاري',
value: '91',
},
{
label: 'سورة الليل',
description: 'راشد المشاري',
value: '92',
},
{
label: 'سورة الضحى',
description: 'راشد المشاري',
value: '93',
},
{
label: 'سورة الشرح',
description: 'راشد المشاري',
value: '94',
},
{
label: 'سورة التين',
description: 'راشد المشاري',
value: '95',
},
{
label: 'سورة العلق',
description: 'راشد المشاري',
value: '96',
},
{
label: 'سورة القدر',
description: 'راشد المشاري',
value: '97',
},
{
label: 'سورة البينة',
description: 'راشد المشاري',
value: '98',
},
{
label: 'سورة الزلزلة',
description: 'راشد المشاري',
value: '99',
},
{
label: 'سورة العاديات',
description: 'راشد المشاري',
value: '100',
},

)
)
let row5 = new Discord.ActionRowBuilder()
.addComponents(
new Discord.StringSelectMenuBuilder()
.setCustomId('select5')
.setPlaceholder('قم بالاختيار هنا')
.addOptions(
{
label: 'سورة القارعة',
description: 'راشد المشاري',
value: '101',
},
{
label: 'سورة التكاثر',
description: 'راشد المشاري',
value: '102',
},
{
label: 'سورة العصر',
description: 'راشد المشاري',
value: '103',
},
{
label: 'سورة الهمزة',
description: 'راشد المشاري',
value: '104',
},
{
label: 'سورة الفيل',
description: 'راشد المشاري',
value: '105',
},
{
label: 'سورة قريش',
description: 'راشد المشاري',
value: '106',
},
{
label: 'سورة الماعون',
description: 'راشد المشاري',
value: '107',
},
{
label: 'سورة الكوثر',
description: 'راشد المشاري',
value: '108',
},
{
label: 'سورة الكافرون',
description: 'راشد المشاري',
value: '109',
},
{
label: 'سورة النصر',
description: 'راشد المشاري',
value: '110',
},
{
label: 'سورة المسد',
description: 'راشد المشاري',
value: '111',
},
{
label: 'سورة الإخلاص',
description: 'راشد المشاري',
value: '112',
},
{
label: 'سورة الفلق',
description: 'راشد المشاري',
value: '113',
},
{
label: 'سورة الناس',
description: 'راشد المشاري',
value: '114',
}, 
)
)
message.reply({content:`
آځتࢪ السّوࢪة التي تࢪيدهۛآ آن تشِتغل في آلࢪومِ آلصِوتي.

- __**ملاحظة**__ : كل خيار من الاسفل يحتوي على 25 سورة و بالمجموع يكون هنالك 114 سورة.
`,components:[row,row2,row3,row4,row5]})
}
})
client.on("interactionCreate", async interaction => {
if(interaction.customId === "select"){
const th = interaction.values[0]
if (th === '1') {
  const connection = joinVoiceChannel({
    channelId: interaction.member.voice.channel.id,
    guildId: interaction.guild.id,
    adapterCreator: interaction.guild.voiceAdapterCreator,
  });
  
  const player = createAudioPlayer();
  const resource = createAudioResource('https://server8.mp3quran.net/afs/001.mp3');
  player.play(resource);
  connection.subscribe(player);
  const resumeButton = new Discord.ButtonBuilder()
  .setCustomId('resume')
  .setLabel('Resume')       
  .setEmoji("▶️")  
  .setStyle(Discord.ButtonStyle.Primary);
  
  const pauseButton = new Discord.ButtonBuilder()
    .setCustomId('pause')
    .setLabel('Pause')
    .setEmoji('⏸️')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const stopButton = new Discord.ButtonBuilder()
    .setCustomId('stop')
    .setLabel('Stop')
    .setEmoji('🛑')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const row = new Discord.ActionRowBuilder().addComponents(
    resumeButton,
    pauseButton,
    stopButton,
  );
  
  interaction.reply({
    content: `
تم تشغيل سوره **الفاتحة** في روم صوتي ${interaction.member.voice.channel}
- لايقاف او استكمال التشغيل قم بالتنقل بين الازرار ادناه. `,
    ephemeral: true,
    components: [row],
  });
  
  const filter = (i) =>
    i.customId === 'pause' ||
    i.customId === 'stop' ||
    i.customId === 'resume'
  const collector = interaction.channel.createMessageComponentCollector({filter});
  
  collector.on('collect', async (i) => {
    if (i.customId === 'pause') {
      player.pause();
      await i.update({ content: 'تم إيقاف الصوت', components: [row] });
    } else if (i.customId === 'stop') {
      player.stop();
      await i.update({ content: 'تم تعطيل الصوت', components: [row] });
    } else if (i.customId === 'resume') {
      player.unpause();
      await i.update({ content: 'تم اعاده تشغيل الصوت', components: [row] });
    }
  });
  
  
}
if (th === '2') {
const connection = joinVoiceChannel({
channelId: interaction.member.voice.channel.id,
guildId: interaction.guild.id,
adapterCreator: interaction.guild.voiceAdapterCreator,
});
const player = createAudioPlayer();
const resource = createAudioResource('https://server8.mp3quran.net/afs/002.mp3');
player.play(resource);
connection.subscribe(player)
const resumeButton = new Discord.ButtonBuilder()
.setCustomId('resume')
.setLabel('Resume')       
.setEmoji("▶️")  
.setStyle(Discord.ButtonStyle.Primary);

const pauseButton = new Discord.ButtonBuilder()
  .setCustomId('pause')
  .setLabel('Pause')
  .setEmoji('⏸️')
  .setStyle(Discord.ButtonStyle.Danger);

const stopButton = new Discord.ButtonBuilder()
  .setCustomId('stop')
  .setLabel('Stop')
  .setEmoji('🛑')
  .setStyle(Discord.ButtonStyle.Danger);

const row = new Discord.ActionRowBuilder().addComponents(
  resumeButton,
  pauseButton,
  stopButton,
);
interaction.reply({content:`
تم تشغيل سوره **البقره** في روم صوتي ${interaction.member.voice.channel}
- لايقاف او استكمال التشغيل قم بالتنقل بين الازرار ادناه. `,
ephemeral:true,components: [row]})
const filter = (i) =>
i.customId === 'pause' ||
i.customId === 'stop' ||
i.customId === 'resume'
const collector = interaction.channel.createMessageComponentCollector({filter});

collector.on('collect', async (i) => {
if (i.customId === 'pause') {
  player.pause();
  await i.update({ content: 'تم إيقاف الصوت', components: [row] });
} else if (i.customId === 'stop') {
  player.stop();
  await i.update({ content: 'تم تعطيل الصوت', components: [row] });
} else if (i.customId === 'resume') {
  player.unpause();
  await i.update({ content: 'تم اعاده تشغيل الصوت', components: [row] });
}
});
}
if (th === '3') {
const connection = joinVoiceChannel({
channelId: interaction.member.voice.channel.id,
guildId: interaction.guild.id,
adapterCreator: interaction.guild.voiceAdapterCreator,
});
const player = createAudioPlayer();
const resource = createAudioResource('https://server8.mp3quran.net/afs/003.mp3');
player.play(resource);
connection.subscribe(player)
const resumeButton = new Discord.ButtonBuilder()
.setCustomId('resume')
.setLabel('Resume')       
.setEmoji("▶️")  
.setStyle(Discord.ButtonStyle.Primary);

const pauseButton = new Discord.ButtonBuilder()
  .setCustomId('pause')
  .setLabel('Pause')
  .setEmoji('⏸️')
  .setStyle(Discord.ButtonStyle.Danger);

const stopButton = new Discord.ButtonBuilder()
  .setCustomId('stop')
  .setLabel('Stop')
  .setEmoji('🛑')
  .setStyle(Discord.ButtonStyle.Danger);

const row = new Discord.ActionRowBuilder().addComponents(
  resumeButton,
  pauseButton,
  stopButton,
);
interaction.reply({content:`
 تم تشغيل سوره **آل عمران** في روم صوتي${interaction.member.voice.channel}
- لايقاف او استكمال التشغيل قم بالتنقل بين الازرار ادناه.`,ephemeral:true,components: [row],})
const filter = (i) =>
i.customId === 'pause' ||
i.customId === 'stop' ||
i.customId === 'resume'
const collector = interaction.channel.createMessageComponentCollector({filter});

collector.on('collect', async (i) => {
if (i.customId === 'pause') {
  player.pause();
  await i.update({ content: 'تم إيقاف الصوت', components: [row] });
} else if (i.customId === 'stop') {
  player.stop();
  await i.update({ content: 'تم تعطيل الصوت', components: [row] });
} else if (i.customId === 'resume') {
  player.unpause();
  await i.update({ content: 'تم اعاده تشغيل الصوت', components: [row] });
}
});
}
if (th === '4') {
const connection = joinVoiceChannel({
channelId: interaction.member.voice.channel.id,
guildId: interaction.guild.id,
adapterCreator: interaction.guild.voiceAdapterCreator,
});
const player = createAudioPlayer();
const resource = createAudioResource('https://server8.mp3quran.net/afs/004.mp3');
player.play(resource);
connection.subscribe(player)
const resumeButton = new Discord.ButtonBuilder()
.setCustomId('resume')
.setLabel('Resume')       
.setEmoji("▶️")  
.setStyle(Discord.ButtonStyle.Primary);

const pauseButton = new Discord.ButtonBuilder()
  .setCustomId('pause')
  .setLabel('Pause')
  .setEmoji('⏸️')
  .setStyle(Discord.ButtonStyle.Danger);

const stopButton = new Discord.ButtonBuilder()
  .setCustomId('stop')
  .setLabel('Stop')
  .setEmoji('🛑')
  .setStyle(Discord.ButtonStyle.Danger);

const row = new Discord.ActionRowBuilder().addComponents(
  resumeButton,
  pauseButton,
  stopButton,
);
interaction.reply({content:`
تم تشغيل سوره **النساء** في روم صوتي${interaction.member.voice.channel}
- لايقاف او استكمال التشغيل قم بالتنقل بين الازرار ادناه.`,ephemeral:true,components: [row]})
const filter = (i) =>
i.customId === 'pause' ||
i.customId === 'stop' ||
i.customId === 'resume'
const collector = interaction.channel.createMessageComponentCollector({filter});

collector.on('collect', async (i) => {
if (i.customId === 'pause') {
  player.pause();
  await i.update({ content: 'تم إيقاف الصوت', components: [row] });
} else if (i.customId === 'stop') {
  player.stop();
  await i.update({ content: 'تم تعطيل الصوت', components: [row] });
} else if (i.customId === 'resume') {
  player.unpause();
  await i.update({ content: 'تم اعاده تشغيل الصوت', components: [row] });
}
});
}
if (th === '5') {
const connection = joinVoiceChannel({
channelId: interaction.member.voice.channel.id,
guildId: interaction.guild.id,
adapterCreator: interaction.guild.voiceAdapterCreator,
});
const player = createAudioPlayer();
const resource = createAudioResource('https://server8.mp3quran.net/afs/005.mp3');
player.play(resource);
connection.subscribe(player)
  const resumeButton = new Discord.ButtonBuilder()
  .setCustomId('resume')
  .setLabel('Resume')       
  .setEmoji("▶️")  
  .setStyle(Discord.ButtonStyle.Primary);
  
  const pauseButton = new Discord.ButtonBuilder()
    .setCustomId('pause')
    .setLabel('Pause')
    .setEmoji('⏸️')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const stopButton = new Discord.ButtonBuilder()
    .setCustomId('stop')
    .setLabel('Stop')
    .setEmoji('🛑')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const row = new Discord.ActionRowBuilder().addComponents(
    resumeButton,
    pauseButton,
    stopButton,
  );
interaction.reply({content:`تم تشغيل سوره **المائدة** في روم صوتي${interaction.member.voice.channel}
- لايقاف او استكمال التشغيل قم بالتنقل بين الازرار ادناه.`,ephemeral:true,components: [row]})
const filter = (i) =>
i.customId === 'pause' ||
i.customId === 'stop' ||
i.customId === 'resume'
const collector = interaction.channel.createMessageComponentCollector({filter});

collector.on('collect', async (i) => {
if (i.customId === 'pause') {
  player.pause();
  await i.update({ content: 'تم إيقاف الصوت', components: [row] });
} else if (i.customId === 'stop') {
  player.stop();
  await i.update({ content: 'تم تعطيل الصوت', components: [row] });
} else if (i.customId === 'resume') {
  player.unpause();
  await i.update({ content: 'تم اعاده تشغيل الصوت', components: [row] });
}
});
}if (th === '6') {
const connection = joinVoiceChannel({
channelId: interaction.member.voice.channel.id,
guildId: interaction.guild.id,
adapterCreator: interaction.guild.voiceAdapterCreator,
});
const player = createAudioPlayer();
const resource = createAudioResource('https://server8.mp3quran.net/afs/006.mp3');
player.play(resource);
connection.subscribe(player)
  const resumeButton = new Discord.ButtonBuilder()
  .setCustomId('resume')
  .setLabel('Resume')       
  .setEmoji("▶️")  
  .setStyle(Discord.ButtonStyle.Primary);
  
  const pauseButton = new Discord.ButtonBuilder()
    .setCustomId('pause')
    .setLabel('Pause')
    .setEmoji('⏸️')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const stopButton = new Discord.ButtonBuilder()
    .setCustomId('stop')
    .setLabel('Stop')
    .setEmoji('🛑')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const row = new Discord.ActionRowBuilder().addComponents(
    resumeButton,
    pauseButton,
    stopButton,
  );
interaction.reply({content:`تم تشغيل سوره **الأنعام** في روم صوتي${interaction.member.voice.channel}
- لايقاف او استكمال التشغيل قم بالتنقل بين الازرار ادناه.`,ephemeral:true,components: [row]})
const filter = (i) =>
i.customId === 'pause' ||
i.customId === 'stop' ||
i.customId === 'resume'
const collector = interaction.channel.createMessageComponentCollector({filter});

collector.on('collect', async (i) => {
if (i.customId === 'pause') {
  player.pause();
  await i.update({ content: 'تم إيقاف الصوت', components: [row] });
} else if (i.customId === 'stop') {
  player.stop();
  await i.update({ content: 'تم تعطيل الصوت', components: [row] });
} else if (i.customId === 'resume') {
  player.unpause();
  await i.update({ content: 'تم اعاده تشغيل الصوت', components: [row] });
}
});
}if (th === '7') {
const connection = joinVoiceChannel({
channelId: interaction.member.voice.channel.id,
guildId: interaction.guild.id,
adapterCreator: interaction.guild.voiceAdapterCreator,
});
const player = createAudioPlayer();
const resource = createAudioResource('https://server8.mp3quran.net/afs/007.mp3');
player.play(resource);
connection.subscribe(player)
  const resumeButton = new Discord.ButtonBuilder()
  .setCustomId('resume')
  .setLabel('Resume')       
  .setEmoji("▶️")  
  .setStyle(Discord.ButtonStyle.Primary);
  
  const pauseButton = new Discord.ButtonBuilder()
    .setCustomId('pause')
    .setLabel('Pause')
    .setEmoji('⏸️')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const stopButton = new Discord.ButtonBuilder()
    .setCustomId('stop')
    .setLabel('Stop')
    .setEmoji('🛑')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const row = new Discord.ActionRowBuilder().addComponents(
    resumeButton,
    pauseButton,
    stopButton,
  );
interaction.reply({content:`تم تشغيل سوره **الأعراف** في روم صوتي${interaction.member.voice.channel}
- لايقاف او استكمال التشغيل قم بالتنقل بين الازرار ادناه.`,ephemeral:true,components: [row]})
const filter = (i) =>
i.customId === 'pause' ||
i.customId === 'stop' ||
i.customId === 'resume'
const collector = interaction.channel.createMessageComponentCollector({filter});

collector.on('collect', async (i) => {
if (i.customId === 'pause') {
  player.pause();
  await i.update({ content: 'تم إيقاف الصوت', components: [row] });
} else if (i.customId === 'stop') {
  player.stop();
  await i.update({ content: 'تم تعطيل الصوت', components: [row] });
} else if (i.customId === 'resume') {
  player.unpause();
  await i.update({ content: 'تم اعاده تشغيل الصوت', components: [row] });
}
});
}if (th === '8') {
const connection = joinVoiceChannel({
channelId: interaction.member.voice.channel.id,
guildId: interaction.guild.id,
adapterCreator: interaction.guild.voiceAdapterCreator,
});
const player = createAudioPlayer();
const resource = createAudioResource('https://server8.mp3quran.net/afs/008.mp3');
player.play(resource);
connection.subscribe(player)
const resumeButton = new Discord.ButtonBuilder()
.setCustomId('resume')
.setLabel('Resume')       
.setEmoji("▶️")  
.setStyle(Discord.ButtonStyle.Primary);

const pauseButton = new Discord.ButtonBuilder()
  .setCustomId('pause')
  .setLabel('Pause')
  .setEmoji('⏸️')
  .setStyle(Discord.ButtonStyle.Danger);

const stopButton = new Discord.ButtonBuilder()
  .setCustomId('stop')
  .setLabel('Stop')
  .setEmoji('🛑')
  .setStyle(Discord.ButtonStyle.Danger);

const row = new Discord.ActionRowBuilder().addComponents(
  resumeButton,
  pauseButton,
  stopButton,
);
interaction.reply({content:`تم تشغيل سوره **الأنفال** في في روم صوتي${interaction.member.voice.channel}
- لايقاف او استكمال التشغيل قم بالتنقل بين الازرار ادناه.`,ephemeral:true,components: [row]})
const filter = (i) =>
i.customId === 'pause' ||
i.customId === 'stop' ||
i.customId === 'resume'
const collector = interaction.channel.createMessageComponentCollector({filter});

collector.on('collect', async (i) => {
if (i.customId === 'pause') {
  player.pause();
  await i.update({ content: 'تم إيقاف الصوت', components: [row] });
} else if (i.customId === 'stop') {
  player.stop();
  await i.update({ content: 'تم تعطيل الصوت', components: [row] });
} else if (i.customId === 'resume') {
  player.unpause();
  await i.update({ content: 'تم اعاده تشغيل الصوت', components: [row] });
}
});
}if (th === '9') {
const connection = joinVoiceChannel({
channelId: interaction.member.voice.channel.id,
guildId: interaction.guild.id,
adapterCreator: interaction.guild.voiceAdapterCreator,
});
const player = createAudioPlayer();
const resource = createAudioResource('https://server8.mp3quran.net/afs/009.mp3');
player.play(resource);
connection.subscribe(player)
const resumeButton = new Discord.ButtonBuilder()
.setCustomId('resume')
.setLabel('Resume')       
.setEmoji("▶️")  
.setStyle(Discord.ButtonStyle.Primary);

const pauseButton = new Discord.ButtonBuilder()
  .setCustomId('pause')
  .setLabel('Pause')
  .setEmoji('⏸️')
  .setStyle(Discord.ButtonStyle.Danger);

const stopButton = new Discord.ButtonBuilder()
  .setCustomId('stop')
  .setLabel('Stop')
  .setEmoji('🛑')
  .setStyle(Discord.ButtonStyle.Danger);

const row = new Discord.ActionRowBuilder().addComponents(
  resumeButton,
  pauseButton,
  stopButton,
);
interaction.reply({content:`تم تشغيل سوره **التوبة** في روم صوتي${interaction.member.voice.channel}
`,ephemeral:true,components: [row]})
const filter = (i) =>
i.customId === 'pause' ||
i.customId === 'stop' ||
i.customId === 'resume'
const collector = interaction.channel.createMessageComponentCollector({filter});

collector.on('collect', async (i) => {
if (i.customId === 'pause') {
  player.pause();
  await i.update({ content: 'تم إيقاف الصوت', components: [row] });
} else if (i.customId === 'stop') {
  player.stop();
  await i.update({ content: 'تم تعطيل الصوت', components: [row] });
} else if (i.customId === 'resume') {
  player.unpause();
  await i.update({ content: 'تم اعاده تشغيل الصوت', components: [row] });
}
});
}if (th === '10') {
const connection = joinVoiceChannel({
channelId: interaction.member.voice.channel.id,
guildId: interaction.guild.id,
adapterCreator: interaction.guild.voiceAdapterCreator,
});
const player = createAudioPlayer();
const resource = createAudioResource('https://server8.mp3quran.net/afs/010.mp3');
player.play(resource);
connection.subscribe(player)
const resumeButton = new Discord.ButtonBuilder()
.setCustomId('resume')
.setLabel('Resume')       
.setEmoji("▶️")  
.setStyle(Discord.ButtonStyle.Primary);

const pauseButton = new Discord.ButtonBuilder()
  .setCustomId('pause')
  .setLabel('Pause')
  .setEmoji('⏸️')
  .setStyle(Discord.ButtonStyle.Danger);

const stopButton = new Discord.ButtonBuilder()
  .setCustomId('stop')
  .setLabel('Stop')
  .setEmoji('🛑')
  .setStyle(Discord.ButtonStyle.Danger);

const row = new Discord.ActionRowBuilder().addComponents(
  resumeButton,
  pauseButton,
  stopButton,
);
interaction.reply({content:`تم تشغيل سوره **يونس** في روم صوتي${interaction.member.voice.channel}
- لايقاف او استكمال التشغيل قم بالتنقل بين الازرار ادناه.`,ephemeral:true,components: [row]})
const filter = (i) =>
i.customId === 'pause' ||
i.customId === 'stop' ||
i.customId === 'resume'
const collector = interaction.channel.createMessageComponentCollector({filter});

collector.on('collect', async (i) => {
if (i.customId === 'pause') {
  player.pause();
  await i.update({ content: 'تم إيقاف الصوت', components: [row] });
} else if (i.customId === 'stop') {
  player.stop();
  await i.update({ content: 'تم تعطيل الصوت', components: [row] });
} else if (i.customId === 'resume') {
  player.unpause();
  await i.update({ content: 'تم اعاده تشغيل الصوت', components: [row] });
}
});
}if (th === '11') {
const connection = joinVoiceChannel({
channelId: interaction.member.voice.channel.id,
guildId: interaction.guild.id,
adapterCreator: interaction.guild.voiceAdapterCreator,
});
const player = createAudioPlayer();
const resource = createAudioResource('https://server8.mp3quran.net/afs/011.mp3');
player.play(resource);
connection.subscribe(player)
const resumeButton = new Discord.ButtonBuilder()
.setCustomId('resume')
.setLabel('Resume')       
.setEmoji("▶️")  
.setStyle(Discord.ButtonStyle.Primary);

const pauseButton = new Discord.ButtonBuilder()
  .setCustomId('pause')
  .setLabel('Pause')
  .setEmoji('⏸️')
  .setStyle(Discord.ButtonStyle.Danger);

const stopButton = new Discord.ButtonBuilder()
  .setCustomId('stop')
  .setLabel('Stop')
  .setEmoji('🛑')
  .setStyle(Discord.ButtonStyle.Danger);

const row = new Discord.ActionRowBuilder().addComponents(
  resumeButton,
  pauseButton,
  stopButton,
);
interaction.reply({content:`تم تشغيل سوره **هود** في روم صوتي${interaction.member.voice.channel}
- لايقاف او استكمال التشغيل قم بالتنقل بين الازرار ادناه.`,ephemeral:true,components: [row]})
const filter = (i) =>
i.customId === 'pause' ||
i.customId === 'stop' ||
i.customId === 'resume'
const collector = interaction.channel.createMessageComponentCollector({filter});

collector.on('collect', async (i) => {
if (i.customId === 'pause') {
  player.pause();
  await i.update({ content: 'تم إيقاف الصوت', components: [row] });
} else if (i.customId === 'stop') {
  player.stop();
  await i.update({ content: 'تم تعطيل الصوت', components: [row] });
} else if (i.customId === 'resume') {
  player.unpause();
  await i.update({ content: 'تم اعاده تشغيل الصوت', components: [row] });
}
});
}if (th === '12') {
const connection = joinVoiceChannel({
channelId: interaction.member.voice.channel.id,
guildId: interaction.guild.id,
adapterCreator: interaction.guild.voiceAdapterCreator,
});
const player = createAudioPlayer();
const resource = createAudioResource('https://server8.mp3quran.net/afs/012.mp3');
player.play(resource);
connection.subscribe(player)
  const resumeButton = new Discord.ButtonBuilder()
  .setCustomId('resume')
  .setLabel('Resume')       
  .setEmoji("▶️")  
  .setStyle(Discord.ButtonStyle.Primary);
  
  const pauseButton = new Discord.ButtonBuilder()
    .setCustomId('pause')
    .setLabel('Pause')
    .setEmoji('⏸️')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const stopButton = new Discord.ButtonBuilder()
    .setCustomId('stop')
    .setLabel('Stop')
    .setEmoji('🛑')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const row = new Discord.ActionRowBuilder().addComponents(
    resumeButton,
    pauseButton,
    stopButton,
  );
interaction.reply({content:`تم تشغيل سوره **يوسف** في روم صوتي${interaction.member.voice.channel}
- لايقاف او استكمال التشغيل قم بالتنقل بين الازرار ادناه.`,ephemeral:true,components: [row]})
const filter = (i) =>
i.customId === 'pause' ||
i.customId === 'stop' ||
i.customId === 'resume'
const collector = interaction.channel.createMessageComponentCollector({filter});

collector.on('collect', async (i) => {
if (i.customId === 'pause') {
  player.pause();
  await i.update({ content: 'تم إيقاف الصوت', components: [row] });
} else if (i.customId === 'stop') {
  player.stop();
  await i.update({ content: 'تم تعطيل الصوت', components: [row] });
} else if (i.customId === 'resume') {
  player.unpause();
  await i.update({ content: 'تم اعاده تشغيل الصوت', components: [row] });
}
});
}if (th === '13') {
const connection = joinVoiceChannel({
channelId: interaction.member.voice.channel.id,
guildId: interaction.guild.id,
adapterCreator: interaction.guild.voiceAdapterCreator,
});
const player = createAudioPlayer();
const resource = createAudioResource('https://server8.mp3quran.net/afs/013.mp3');
player.play(resource);
connection.subscribe(player)
const resumeButton = new Discord.ButtonBuilder()
.setCustomId('resume')
.setLabel('Resume')       
.setEmoji("▶️")  
.setStyle(Discord.ButtonStyle.Primary);

const pauseButton = new Discord.ButtonBuilder()
  .setCustomId('pause')
  .setLabel('Pause')
  .setEmoji('⏸️')
  .setStyle(Discord.ButtonStyle.Danger);

const stopButton = new Discord.ButtonBuilder()
  .setCustomId('stop')
  .setLabel('Stop')
  .setEmoji('🛑')
  .setStyle(Discord.ButtonStyle.Danger);

const row = new Discord.ActionRowBuilder().addComponents(
  resumeButton,
  pauseButton,
  stopButton,
);
interaction.reply({content:`تم تشغيل سوره **الرعد** في روم صوتي${interaction.member.voice.channel}
- لايقاف او استكمال التشغيل قم بالتنقل بين الازرار ادناه.`,ephemeral:true,components: [row]})
const filter = (i) =>
i.customId === 'pause' ||
i.customId === 'stop' ||
i.customId === 'resume'
const collector = interaction.channel.createMessageComponentCollector({filter});

collector.on('collect', async (i) => {
if (i.customId === 'pause') {
  player.pause();
  await i.update({ content: 'تم إيقاف الصوت', components: [row] });
} else if (i.customId === 'stop') {
  player.stop();
  await i.update({ content: 'تم تعطيل الصوت', components: [row] });
} else if (i.customId === 'resume') {
  player.unpause();
  await i.update({ content: 'تم اعاده تشغيل الصوت', components: [row] });
}
});
}if (th === '14') {
const connection = joinVoiceChannel({
channelId: interaction.member.voice.channel.id,
guildId: interaction.guild.id,
adapterCreator: interaction.guild.voiceAdapterCreator,
});
const player = createAudioPlayer();
const resource = createAudioResource('https://server8.mp3quran.net/afs/014.mp3');
player.play(resource);
connection.subscribe(player)
  const resumeButton = new Discord.ButtonBuilder()
  .setCustomId('resume')
  .setLabel('Resume')       
  .setEmoji("▶️")  
  .setStyle(Discord.ButtonStyle.Primary);
  
  const pauseButton = new Discord.ButtonBuilder()
    .setCustomId('pause')
    .setLabel('Pause')
    .setEmoji('⏸️')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const stopButton = new Discord.ButtonBuilder()
    .setCustomId('stop')
    .setLabel('Stop')
    .setEmoji('🛑')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const row = new Discord.ActionRowBuilder().addComponents(
    resumeButton,
    pauseButton,
    stopButton,
  );
interaction.reply({content:`تم تشغيل سوره **إبراهيم** في روم صوتي${interaction.member.voice.channel}
- لايقاف او استكمال التشغيل قم بالتنقل بين الازرار ادناه.`,ephemeral:true,components: [row]})
const filter = (i) =>
i.customId === 'pause' ||
i.customId === 'stop' ||
i.customId === 'resume'
const collector = interaction.channel.createMessageComponentCollector({filter});

collector.on('collect', async (i) => {
if (i.customId === 'pause') {
  player.pause();
  await i.update({ content: 'تم إيقاف الصوت', components: [row] });
} else if (i.customId === 'stop') {
  player.stop();
  await i.update({ content: 'تم تعطيل الصوت', components: [row] });
} else if (i.customId === 'resume') {
  player.unpause();
  await i.update({ content: 'تم اعاده تشغيل الصوت', components: [row] });
}
});
}
if (th === '15') {
const connection = joinVoiceChannel({
channelId: interaction.member.voice.channel.id,
guildId: interaction.guild.id,
adapterCreator: interaction.guild.voiceAdapterCreator,
});
const player = createAudioPlayer();
const resource = createAudioResource('https://server8.mp3quran.net/afs/015.mp3');
player.play(resource);
connection.subscribe(player)
const resumeButton = new Discord.ButtonBuilder()
.setCustomId('resume')
.setLabel('Resume')       
.setEmoji("▶️")  
.setStyle(Discord.ButtonStyle.Primary);

const pauseButton = new Discord.ButtonBuilder()
  .setCustomId('pause')
  .setLabel('Pause')
  .setEmoji('⏸️')
  .setStyle(Discord.ButtonStyle.Danger);

const stopButton = new Discord.ButtonBuilder()
  .setCustomId('stop')
  .setLabel('Stop')
  .setEmoji('🛑')
  .setStyle(Discord.ButtonStyle.Danger);

const row = new Discord.ActionRowBuilder().addComponents(
  resumeButton,
  pauseButton,
  stopButton,
);
interaction.reply({content:`تم تشغيل سوره **الحجر** في روم صوتي${interaction.member.voice.channel}
- لايقاف او استكمال التشغيل قم بالتنقل بين الازرار ادناه.`,ephemeral:true,components: [row]})
const filter = (i) =>
i.customId === 'pause' ||
i.customId === 'stop' ||
i.customId === 'resume'
const collector = interaction.channel.createMessageComponentCollector({filter});

collector.on('collect', async (i) => {
if (i.customId === 'pause') {
  player.pause();
  await i.update({ content: 'تم إيقاف الصوت', components: [row] });
} else if (i.customId === 'stop') {
  player.stop();
  await i.update({ content: 'تم تعطيل الصوت', components: [row] });
} else if (i.customId === 'resume') {
  player.unpause();
  await i.update({ content: 'تم اعاده تشغيل الصوت', components: [row] });
}
});
}
if (th === '16') {
const connection = joinVoiceChannel({
channelId: interaction.member.voice.channel.id,
guildId: interaction.guild.id,
adapterCreator: interaction.guild.voiceAdapterCreator,
});
const player = createAudioPlayer();
const resource = createAudioResource('https://server8.mp3quran.net/afs/016.mp3');
player.play(resource);
connection.subscribe(player)
const resumeButton = new Discord.ButtonBuilder()
.setCustomId('resume')
.setLabel('Resume')       
.setEmoji("▶️")  
.setStyle(Discord.ButtonStyle.Primary);

const pauseButton = new Discord.ButtonBuilder()
  .setCustomId('pause')
  .setLabel('Pause')
  .setEmoji('⏸️')
  .setStyle(Discord.ButtonStyle.Danger);

const stopButton = new Discord.ButtonBuilder()
  .setCustomId('stop')
  .setLabel('Stop')
  .setEmoji('🛑')
  .setStyle(Discord.ButtonStyle.Danger);

const row = new Discord.ActionRowBuilder().addComponents(
  resumeButton,
  pauseButton,
  stopButton,
);
interaction.reply({content:`تم تشغيل سوره **النحل** في روم صوتي${interaction.member.voice.channel} 
- لايقاف او استكمال التشغيل قم بالتنقل بين الازرار ادناه.`,ephemeral:true,components: [row]})
const filter = (i) =>
i.customId === 'pause' ||
i.customId === 'stop' ||
i.customId === 'resume'
const collector = interaction.channel.createMessageComponentCollector({filter});

collector.on('collect', async (i) => {
if (i.customId === 'pause') {
  player.pause();
  await i.update({ content: 'تم إيقاف الصوت', components: [row] });
} else if (i.customId === 'stop') {
  player.stop();
  await i.update({ content: 'تم تعطيل الصوت', components: [row] });
} else if (i.customId === 'resume') {
  player.unpause();
  await i.update({ content: 'تم اعاده تشغيل الصوت', components: [row] });
}
});
}
if (th === '17') {
const connection = joinVoiceChannel({
channelId: interaction.member.voice.channel.id,
guildId: interaction.guild.id,
adapterCreator: interaction.guild.voiceAdapterCreator,
});
const player = createAudioPlayer();
const resource = createAudioResource('https://server8.mp3quran.net/afs/017.mp3');
player.play(resource);
connection.subscribe(player)
  const resumeButton = new Discord.ButtonBuilder()
  .setCustomId('resume')
  .setLabel('Resume')       
  .setEmoji("▶️")  
  .setStyle(Discord.ButtonStyle.Primary);
  
  const pauseButton = new Discord.ButtonBuilder()
    .setCustomId('pause')
    .setLabel('Pause')
    .setEmoji('⏸️')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const stopButton = new Discord.ButtonBuilder()
    .setCustomId('stop')
    .setLabel('Stop')
    .setEmoji('🛑')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const row = new Discord.ActionRowBuilder().addComponents(
    resumeButton,
    pauseButton,
    stopButton,
  );
interaction.reply({content:`تم تشغيل سوره **الإسراء** في روم صوتي${interaction.member.voice.channel}
- لايقاف او استكمال التشغيل قم بالتنقل بين الازرار ادناه.`,ephemeral:true,components: [row]})
const filter = (i) =>
i.customId === 'pause' ||
i.customId === 'stop' ||
i.customId === 'resume'
const collector = interaction.channel.createMessageComponentCollector({filter});

collector.on('collect', async (i) => {
if (i.customId === 'pause') {
  player.pause();
  await i.update({ content: 'تم إيقاف الصوت', components: [row] });
} else if (i.customId === 'stop') {
  player.stop();
  await i.update({ content: 'تم تعطيل الصوت', components: [row] });
} else if (i.customId === 'resume') {
  player.unpause();
  await i.update({ content: 'تم اعاده تشغيل الصوت', components: [row] });
}
});
}
if (th === '18') {
const connection = joinVoiceChannel({
channelId: interaction.member.voice.channel.id,
guildId: interaction.guild.id,
adapterCreator: interaction.guild.voiceAdapterCreator,
});
const player = createAudioPlayer();
const resource = createAudioResource('https://server8.mp3quran.net/afs/018.mp3');
player.play(resource);
connection.subscribe(player)
  const resumeButton = new Discord.ButtonBuilder()
  .setCustomId('resume')
  .setLabel('Resume')       
  .setEmoji("▶️")  
  .setStyle(Discord.ButtonStyle.Primary);
  
  const pauseButton = new Discord.ButtonBuilder()
    .setCustomId('pause')
    .setLabel('Pause')
    .setEmoji('⏸️')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const stopButton = new Discord.ButtonBuilder()
    .setCustomId('stop')
    .setLabel('Stop')
    .setEmoji('🛑')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const row = new Discord.ActionRowBuilder().addComponents(
    resumeButton,
    pauseButton,
    stopButton,
  );
interaction.reply({content:`تم تشغيل سوره **الكهف** في روم صوتي${interaction.member.voice.channel}|
- لايقاف او استكمال التشغيل قم بالتنقل بين الازرار ادناه.`,ephemeral:true,components: [row]})
const filter = (i) =>
i.customId === 'pause' ||
i.customId === 'stop' ||
i.customId === 'resume'
const collector = interaction.channel.createMessageComponentCollector({filter});

collector.on('collect', async (i) => {
if (i.customId === 'pause') {
  player.pause();
  await i.update({ content: 'تم إيقاف الصوت', components: [row] });
} else if (i.customId === 'stop') {
  player.stop();
  await i.update({ content: 'تم تعطيل الصوت', components: [row] });
} else if (i.customId === 'resume') {
  player.unpause();
  await i.update({ content: 'تم اعاده تشغيل الصوت', components: [row] });
}
});
}
if (th === '19') {
const connection = joinVoiceChannel({
channelId: interaction.member.voice.channel.id,
guildId: interaction.guild.id,
adapterCreator: interaction.guild.voiceAdapterCreator,
});
const player = createAudioPlayer();
const resource = createAudioResource('https://server8.mp3quran.net/afs/019.mp3');
player.play(resource);
connection.subscribe(player)
const resumeButton = new Discord.ButtonBuilder()
.setCustomId('resume')
.setLabel('Resume')       
.setEmoji("▶️")  
.setStyle(Discord.ButtonStyle.Primary);

const pauseButton = new Discord.ButtonBuilder()
  .setCustomId('pause')
  .setLabel('Pause')
  .setEmoji('⏸️')
  .setStyle(Discord.ButtonStyle.Danger);

const stopButton = new Discord.ButtonBuilder()
  .setCustomId('stop')
  .setLabel('Stop')
  .setEmoji('🛑')
  .setStyle(Discord.ButtonStyle.Danger);

const row = new Discord.ActionRowBuilder().addComponents(
  resumeButton,
  pauseButton,
  stopButton,
);
interaction.reply({content:`تم تشغيل سوره **مريم** في روم صوتي${interaction.member.voice.channel}
- لايقاف او استكمال التشغيل قم بالتنقل بين الازرار ادناه.`,ephemeral:true,components: [row]})
const filter = (i) =>
i.customId === 'pause' ||
i.customId === 'stop' ||
i.customId === 'resume'
const collector = interaction.channel.createMessageComponentCollector({filter});

collector.on('collect', async (i) => {
if (i.customId === 'pause') {
  player.pause();
  await i.update({ content: 'تم إيقاف الصوت', components: [row] });
} else if (i.customId === 'stop') {
  player.stop();
  await i.update({ content: 'تم تعطيل الصوت', components: [row] });
} else if (i.customId === 'resume') {
  player.unpause();
  await i.update({ content: 'تم اعاده تشغيل الصوت', components: [row] });
}
});
}
if (th === '20') {
const connection = joinVoiceChannel({
channelId: interaction.member.voice.channel.id,
guildId: interaction.guild.id,
adapterCreator: interaction.guild.voiceAdapterCreator,
});
const player = createAudioPlayer();
const resource = createAudioResource('https://server8.mp3quran.net/afs/020.mp3');
player.play(resource);
connection.subscribe(player)
  const resumeButton = new Discord.ButtonBuilder()
  .setCustomId('resume')
  .setLabel('Resume')       
  .setEmoji("▶️")  
  .setStyle(Discord.ButtonStyle.Primary);
  
  const pauseButton = new Discord.ButtonBuilder()
    .setCustomId('pause')
    .setLabel('Pause')
    .setEmoji('⏸️')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const stopButton = new Discord.ButtonBuilder()
    .setCustomId('stop')
    .setLabel('Stop')
    .setEmoji('🛑')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const row = new Discord.ActionRowBuilder().addComponents(
    resumeButton,
    pauseButton,
    stopButton,
  );
interaction.reply({content:`تم تشغيل سوره **طه** في روم صوتي${interaction.member.voice.channel}
- لايقاف او استكمال التشغيل قم بالتنقل بين الازرار ادناه.`,ephemeral:true,components: [row]})
const filter = (i) =>
i.customId === 'pause' ||
i.customId === 'stop' ||
i.customId === 'resume'
const collector = interaction.channel.createMessageComponentCollector({filter});

collector.on('collect', async (i) => {
if (i.customId === 'pause') {
  player.pause();
  await i.update({ content: 'تم إيقاف الصوت', components: [row] });
} else if (i.customId === 'stop') {
  player.stop();
  await i.update({ content: 'تم تعطيل الصوت', components: [row] });
} else if (i.customId === 'resume') {
  player.unpause();
  await i.update({ content: 'تم اعاده تشغيل الصوت', components: [row] });
}
});
}
if (th === '21') {
const connection = joinVoiceChannel({
channelId: interaction.member.voice.channel.id,
guildId: interaction.guild.id,
adapterCreator: interaction.guild.voiceAdapterCreator,
});
const player = createAudioPlayer();
const resource = createAudioResource('https://server8.mp3quran.net/afs/021.mp3');
player.play(resource);
connection.subscribe(player)
const resumeButton = new Discord.ButtonBuilder()
.setCustomId('resume')
.setLabel('Resume')       
.setEmoji("▶️")  
.setStyle(Discord.ButtonStyle.Primary);

const pauseButton = new Discord.ButtonBuilder()
  .setCustomId('pause')
  .setLabel('Pause')
  .setEmoji('⏸️')
  .setStyle(Discord.ButtonStyle.Danger);

const stopButton = new Discord.ButtonBuilder()
  .setCustomId('stop')
  .setLabel('Stop')
  .setEmoji('🛑')
  .setStyle(Discord.ButtonStyle.Danger);

const row = new Discord.ActionRowBuilder().addComponents(
  resumeButton,
  pauseButton,
  stopButton,
);
interaction.reply({content:`تم تشغيل سوره **الأنبياء** في روم صوتي${interaction.member.voice.channel}
- لايقاف او استكمال التشغيل قم بالتنقل بين الازرار ادناه.`,ephemeral:true,components: [row]})
const filter = (i) =>
i.customId === 'pause' ||
i.customId === 'stop' ||
i.customId === 'resume'
const collector = interaction.channel.createMessageComponentCollector({filter});

collector.on('collect', async (i) => {
if (i.customId === 'pause') {
  player.pause();
  await i.update({ content: 'تم إيقاف الصوت', components: [row] });
} else if (i.customId === 'stop') {
  player.stop();
  await i.update({ content: 'تم تعطيل الصوت', components: [row] });
} else if (i.customId === 'resume') {
  player.unpause();
  await i.update({ content: 'تم اعاده تشغيل الصوت', components: [row] });
}
});
}
if (th === '22') {
const connection = joinVoiceChannel({
channelId: interaction.member.voice.channel.id,
guildId: interaction.guild.id,
adapterCreator: interaction.guild.voiceAdapterCreator,
});
const player = createAudioPlayer();
const resource = createAudioResource('https://server8.mp3quran.net/afs/022.mp3');
player.play(resource);
connection.subscribe(player)
  const resumeButton = new Discord.ButtonBuilder()
  .setCustomId('resume')
  .setLabel('Resume')       
  .setEmoji("▶️")  
  .setStyle(Discord.ButtonStyle.Primary);
  
  const pauseButton = new Discord.ButtonBuilder()
    .setCustomId('pause')
    .setLabel('Pause')
    .setEmoji('⏸️')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const stopButton = new Discord.ButtonBuilder()
    .setCustomId('stop')
    .setLabel('Stop')
    .setEmoji('🛑')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const row = new Discord.ActionRowBuilder().addComponents(
    resumeButton,
    pauseButton,
    stopButton,
  );
interaction.reply({content:`تم تشغيل سوره **الحج** في روم صوتي ${interaction.member.voice.channel}
- لايقاف او استكمال التشغيل قم بالتنقل بين الازرار ادناه.`,ephemeral:true,components: [row]})
const filter = (i) =>
i.customId === 'pause' ||
i.customId === 'stop' ||
i.customId === 'resume'
const collector = interaction.channel.createMessageComponentCollector({filter});

collector.on('collect', async (i) => {
if (i.customId === 'pause') {
  player.pause();
  await i.update({ content: 'تم إيقاف الصوت', components: [row] });
} else if (i.customId === 'stop') {
  player.stop();
  await i.update({ content: 'تم تعطيل الصوت', components: [row] });
} else if (i.customId === 'resume') {
  player.unpause();
  await i.update({ content: 'تم اعاده تشغيل الصوت', components: [row] });
}
});
}
if (th === '23') {
const connection = joinVoiceChannel({
channelId: interaction.member.voice.channel.id,
guildId: interaction.guild.id,
adapterCreator: interaction.guild.voiceAdapterCreator,
});
const player = createAudioPlayer();
const resource = createAudioResource('https://server8.mp3quran.net/afs/023.mp3');
player.play(resource);
connection.subscribe(player)
  const resumeButton = new Discord.ButtonBuilder()
  .setCustomId('resume')
  .setLabel('Resume')       
  .setEmoji("▶️")  
  .setStyle(Discord.ButtonStyle.Primary);
  
  const pauseButton = new Discord.ButtonBuilder()
    .setCustomId('pause')
    .setLabel('Pause')
    .setEmoji('⏸️')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const stopButton = new Discord.ButtonBuilder()
    .setCustomId('stop')
    .setLabel('Stop')
    .setEmoji('🛑')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const row = new Discord.ActionRowBuilder().addComponents(
    resumeButton,
    pauseButton,
    stopButton,
  );
interaction.reply({content:`تم تشغيل سوره **المؤمنون** في روم صوتي${interaction.member.voice.channel}
- لايقاف او استكمال التشغيل قم بالتنقل بين الازرار ادناه.`,ephemeral:true,components: [row]})
const filter = (i) =>
i.customId === 'pause' ||
i.customId === 'stop' ||
i.customId === 'resume'
const collector = interaction.channel.createMessageComponentCollector({filter});

collector.on('collect', async (i) => {
if (i.customId === 'pause') {
  player.pause();
  await i.update({ content: 'تم إيقاف الصوت', components: [row] });
} else if (i.customId === 'stop') {
  player.stop();
  await i.update({ content: 'تم تعطيل الصوت', components: [row] });
} else if (i.customId === 'resume') {
  player.unpause();
  await i.update({ content: 'تم اعاده تشغيل الصوت', components: [row] });
}
});
}
if (th === '24') {
const connection = joinVoiceChannel({
channelId: interaction.member.voice.channel.id,
guildId: interaction.guild.id,
adapterCreator: interaction.guild.voiceAdapterCreator,
});
const player = createAudioPlayer();
const resource = createAudioResource('https://server8.mp3quran.net/afs/024.mp3');
player.play(resource);
connection.subscribe(player)
const resumeButton = new Discord.ButtonBuilder()
.setCustomId('resume')
.setLabel('Resume')       
.setEmoji("▶️")  
.setStyle(Discord.ButtonStyle.Primary);

const pauseButton = new Discord.ButtonBuilder()
  .setCustomId('pause')
  .setLabel('Pause')
  .setEmoji('⏸️')
  .setStyle(Discord.ButtonStyle.Danger);

const stopButton = new Discord.ButtonBuilder()
  .setCustomId('stop')
  .setLabel('Stop')
  .setEmoji('🛑')
  .setStyle(Discord.ButtonStyle.Danger);

const row = new Discord.ActionRowBuilder().addComponents(
  resumeButton,
  pauseButton,
  stopButton,
);
interaction.reply({content:`تم تشغيل سوره **النور** في روم صوتي${interaction.member.voice.channel}
- لايقاف او استكمال التشغيل قم بالتنقل بين الازرار ادناه.`,ephemeral:true,components: [row]})
const filter = (i) =>
i.customId === 'pause' ||
i.customId === 'stop' ||
i.customId === 'resume'
const collector = interaction.channel.createMessageComponentCollector({filter});

collector.on('collect', async (i) => {
if (i.customId === 'pause') {
  player.pause();
  await i.update({ content: 'تم إيقاف الصوت', components: [row] });
} else if (i.customId === 'stop') {
  player.stop();
  await i.update({ content: 'تم تعطيل الصوت', components: [row] });
} else if (i.customId === 'resume') {
  player.unpause();
  await i.update({ content: 'تم اعاده تشغيل الصوت', components: [row] });
}
});
}
if (th === '25') {
const connection = joinVoiceChannel({
channelId: interaction.member.voice.channel.id,
guildId: interaction.guild.id,
adapterCreator: interaction.guild.voiceAdapterCreator,
});
const player = createAudioPlayer();
const resource = createAudioResource('https://server8.mp3quran.net/afs/025.mp3');
player.play(resource);
connection.subscribe(player)
  const resumeButton = new Discord.ButtonBuilder()
  .setCustomId('resume')
  .setLabel('Resume')       
  .setEmoji("▶️")  
  .setStyle(Discord.ButtonStyle.Primary);
  
  const pauseButton = new Discord.ButtonBuilder()
    .setCustomId('pause')
    .setLabel('Pause')
    .setEmoji('⏸️')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const stopButton = new Discord.ButtonBuilder()
    .setCustomId('stop')
    .setLabel('Stop')
    .setEmoji('🛑')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const row = new Discord.ActionRowBuilder().addComponents(
    resumeButton,
    pauseButton,
    stopButton,
  );
interaction.reply({content:`تم تشغيل سوره **الفرقان** في روم صوتي${interaction.member.voice.channel}
- لايقاف او استكمال التشغيل قم بالتنقل بين الازرار ادناه.`,ephemeral:true,components: [row]})
const filter = (i) =>
i.customId === 'pause' ||
i.customId === 'stop' ||
i.customId === 'resume'
const collector = interaction.channel.createMessageComponentCollector({filter});

collector.on('collect', async (i) => {
if (i.customId === 'pause') {
  player.pause();
  await i.update({ content: 'تم إيقاف الصوت', components: [row] });
} else if (i.customId === 'stop') {
  player.stop();
  await i.update({ content: 'تم تعطيل الصوت', components: [row] });
} else if (i.customId === 'resume') {
  player.unpause();
  await i.update({ content: 'تم اعاده تشغيل الصوت', components: [row] });
}
});
}
}else
if(interaction.customId === "select2"){
let th2 = interaction.values[0]
if (th2 === '26') {
const connection = joinVoiceChannel({
channelId: interaction.member.voice.channel.id,
guildId: interaction.guild.id,
adapterCreator: interaction.guild.voiceAdapterCreator,
});
const player = createAudioPlayer();
const resource = createAudioResource('https://server8.mp3quran.net/afs/026.mp3');
player.play(resource);
connection.subscribe(player)
const resumeButton = new Discord.ButtonBuilder()
.setCustomId('resume')
.setLabel('Resume')       
.setEmoji("▶️")  
.setStyle(Discord.ButtonStyle.Primary);

const pauseButton = new Discord.ButtonBuilder()
  .setCustomId('pause')
  .setLabel('Pause')
  .setEmoji('⏸️')
  .setStyle(Discord.ButtonStyle.Danger);

const stopButton = new Discord.ButtonBuilder()
  .setCustomId('stop')
  .setLabel('Stop')
  .setEmoji('🛑')
  .setStyle(Discord.ButtonStyle.Danger);

const row = new Discord.ActionRowBuilder().addComponents(
  resumeButton,
  pauseButton,
  stopButton,
);
interaction.reply({content:`تم تشغيل سوره **الشعراء** في روم صوتي${interaction.member.voice.channel}
- لايقاف او استكمال التشغيل قم بالتنقل بين الازرار ادناه.`,ephemeral:true,components: [row]})
const filter = (i) =>
i.customId === 'pause' ||
i.customId === 'stop' ||
i.customId === 'resume'
const collector = interaction.channel.createMessageComponentCollector({filter});

collector.on('collect', async (i) => {
if (i.customId === 'pause') {
  player.pause();
  await i.update({ content: 'تم إيقاف الصوت', components: [row] });
} else if (i.customId === 'stop') {
  player.stop();
  await i.update({ content: 'تم تعطيل الصوت', components: [row] });
} else if (i.customId === 'resume') {
  player.unpause();
  await i.update({ content: 'تم اعاده تشغيل الصوت', components: [row] });
}
});
}
if (th2 === '27') {
const connection = joinVoiceChannel({
channelId: interaction.member.voice.channel.id,
guildId: interaction.guild.id,
adapterCreator: interaction.guild.voiceAdapterCreator,
});
const player = createAudioPlayer();
const resource = createAudioResource('https://server8.mp3quran.net/afs/027.mp3');
player.play(resource);
connection.subscribe(player)
const resumeButton = new Discord.ButtonBuilder()
.setCustomId('resume')
.setLabel('Resume')       
.setEmoji("▶️")  
.setStyle(Discord.ButtonStyle.Primary);

const pauseButton = new Discord.ButtonBuilder()
  .setCustomId('pause')
  .setLabel('Pause')
  .setEmoji('⏸️')
  .setStyle(Discord.ButtonStyle.Danger);

const stopButton = new Discord.ButtonBuilder()
  .setCustomId('stop')
  .setLabel('Stop')
  .setEmoji('🛑')
  .setStyle(Discord.ButtonStyle.Danger);

const row = new Discord.ActionRowBuilder().addComponents(
  resumeButton,
  pauseButton,
  stopButton,
);
interaction.reply({content:`تم تشغيل سوره **النمل** في روم صوتي${interaction.member.voice.channel}
- لايقاف او استكمال التشغيل قم بالتنقل بين الازرار ادناه.`,ephemeral:true,components: [row]})
const filter = (i) =>
i.customId === 'pause' ||
i.customId === 'stop' ||
i.customId === 'resume'
const collector = interaction.channel.createMessageComponentCollector({filter});

collector.on('collect', async (i) => {
if (i.customId === 'pause') {
  player.pause();
  await i.update({ content: 'تم إيقاف الصوت', components: [row] });
} else if (i.customId === 'stop') {
  player.stop();
  await i.update({ content: 'تم تعطيل الصوت', components: [row] });
} else if (i.customId === 'resume') {
  player.unpause();
  await i.update({ content: 'تم اعاده تشغيل الصوت', components: [row] });
}
});
}
if (th2 === '28') {
const connection = joinVoiceChannel({
channelId: interaction.member.voice.channel.id,
guildId: interaction.guild.id,
adapterCreator: interaction.guild.voiceAdapterCreator,
});
const player = createAudioPlayer();
const resource = createAudioResource('https://server8.mp3quran.net/afs/028.mp3');
player.play(resource);
connection.subscribe(player)
const resumeButton = new Discord.ButtonBuilder()
.setCustomId('resume')
.setLabel('Resume')       
.setEmoji("▶️")  
.setStyle(Discord.ButtonStyle.Primary);

const pauseButton = new Discord.ButtonBuilder()
  .setCustomId('pause')
  .setLabel('Pause')
  .setEmoji('⏸️')
  .setStyle(Discord.ButtonStyle.Danger);

const stopButton = new Discord.ButtonBuilder()
  .setCustomId('stop')
  .setLabel('Stop')
  .setEmoji('🛑')
  .setStyle(Discord.ButtonStyle.Danger);

const row = new Discord.ActionRowBuilder().addComponents(
  resumeButton,
  pauseButton,
  stopButton,
);
interaction.reply({content:`تم تشغيل سوره **القصص** في روم صوتي${interaction.member.voice.channel}
- لايقاف او استكمال التشغيل قم بالتنقل بين الازرار ادناه.`,ephemeral:true,components: [row]})
const filter = (i) =>
i.customId === 'pause' ||
i.customId === 'stop' ||
i.customId === 'resume'
const collector = interaction.channel.createMessageComponentCollector({filter});

collector.on('collect', async (i) => {
if (i.customId === 'pause') {
  player.pause();
  await i.update({ content: 'تم إيقاف الصوت', components: [row] });
} else if (i.customId === 'stop') {
  player.stop();
  await i.update({ content: 'تم تعطيل الصوت', components: [row] });
} else if (i.customId === 'resume') {
  player.unpause();
  await i.update({ content: 'تم اعاده تشغيل الصوت', components: [row] });
}
});
}
if (th2 === '29') {
const connection = joinVoiceChannel({
channelId: interaction.member.voice.channel.id,
guildId: interaction.guild.id,
adapterCreator: interaction.guild.voiceAdapterCreator,
});
const player = createAudioPlayer();
const resource = createAudioResource('https://server8.mp3quran.net/afs/029.mp3');
player.play(resource);
connection.subscribe(player)
  const resumeButton = new Discord.ButtonBuilder()
  .setCustomId('resume')
  .setLabel('Resume')       
  .setEmoji("▶️")  
  .setStyle(Discord.ButtonStyle.Primary);
  
  const pauseButton = new Discord.ButtonBuilder()
    .setCustomId('pause')
    .setLabel('Pause')
    .setEmoji('⏸️')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const stopButton = new Discord.ButtonBuilder()
    .setCustomId('stop')
    .setLabel('Stop')
    .setEmoji('🛑')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const row = new Discord.ActionRowBuilder().addComponents(
    resumeButton,
    pauseButton,
    stopButton,
  );
interaction.reply({content:`تم تشغيل سوره **العنكبوت** في روم صوتي${interaction.member.voice.channel}
- لايقاف او استكمال التشغيل قم بالتنقل بين الازرار ادناه.`,ephemeral:true,components: [row]})
const filter = (i) =>
i.customId === 'pause' ||
i.customId === 'stop' ||
i.customId === 'resume'
const collector = interaction.channel.createMessageComponentCollector({filter});

collector.on('collect', async (i) => {
if (i.customId === 'pause') {
  player.pause();
  await i.update({ content: 'تم إيقاف الصوت', components: [row] });
} else if (i.customId === 'stop') {
  player.stop();
  await i.update({ content: 'تم تعطيل الصوت', components: [row] });
} else if (i.customId === 'resume') {
  player.unpause();
  await i.update({ content: 'تم اعاده تشغيل الصوت', components: [row] });
}
});
}
if (th2 === '30') {
const connection = joinVoiceChannel({
channelId: interaction.member.voice.channel.id,
guildId: interaction.guild.id,
adapterCreator: interaction.guild.voiceAdapterCreator,
});
const player = createAudioPlayer();
const resource = createAudioResource('https://server8.mp3quran.net/afs/030.mp3');
player.play(resource);
connection.subscribe(player)
  const resumeButton = new Discord.ButtonBuilder()
  .setCustomId('resume')
  .setLabel('Resume')       
  .setEmoji("▶️")  
  .setStyle(Discord.ButtonStyle.Primary);
  
  const pauseButton = new Discord.ButtonBuilder()
    .setCustomId('pause')
    .setLabel('Pause')
    .setEmoji('⏸️')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const stopButton = new Discord.ButtonBuilder()
    .setCustomId('stop')
    .setLabel('Stop')
    .setEmoji('🛑')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const row = new Discord.ActionRowBuilder().addComponents(
    resumeButton,
    pauseButton,
    stopButton,
  );
interaction.reply({content:`تم تشغيل سوره **الروم** في روم صوتي${interaction.member.voice.channel}
- لايقاف او استكمال التشغيل قم بالتنقل بين الازرار ادناه.`,ephemeral:true,components: [row]})
const filter = (i) =>
i.customId === 'pause' ||
i.customId === 'stop' ||
i.customId === 'resume'
const collector = interaction.channel.createMessageComponentCollector({filter});

collector.on('collect', async (i) => {
if (i.customId === 'pause') {
  player.pause();
  await i.update({ content: 'تم إيقاف الصوت', components: [row] });
} else if (i.customId === 'stop') {
  player.stop();
  await i.update({ content: 'تم تعطيل الصوت', components: [row] });
} else if (i.customId === 'resume') {
  player.unpause();
  await i.update({ content: 'تم اعاده تشغيل الصوت', components: [row] });
}
});
}
if (th2 === '31') {
const connection = joinVoiceChannel({
channelId: interaction.member.voice.channel.id,
guildId: interaction.guild.id,
adapterCreator: interaction.guild.voiceAdapterCreator,
});
const player = createAudioPlayer();
const resource = createAudioResource('https://server8.mp3quran.net/afs/031.mp3');
player.play(resource);
connection.subscribe(player)
  const resumeButton = new Discord.ButtonBuilder()
  .setCustomId('resume')
  .setLabel('Resume')       
  .setEmoji("▶️")  
  .setStyle(Discord.ButtonStyle.Primary);
  
  const pauseButton = new Discord.ButtonBuilder()
    .setCustomId('pause')
    .setLabel('Pause')
    .setEmoji('⏸️')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const stopButton = new Discord.ButtonBuilder()
    .setCustomId('stop')
    .setLabel('Stop')
    .setEmoji('🛑')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const row = new Discord.ActionRowBuilder().addComponents(
    resumeButton,
    pauseButton,
    stopButton,
  );
interaction.reply({content:`تم تشغيل سوره **لقمان** في روم صوتي${interaction.member.voice.channel}
- لايقاف او استكمال التشغيل قم بالتنقل بين الازرار ادناه.`,ephemeral:true,components: [row]})
const filter = (i) =>
i.customId === 'pause' ||
i.customId === 'stop' ||
i.customId === 'resume'
const collector = interaction.channel.createMessageComponentCollector({filter});

collector.on('collect', async (i) => {
if (i.customId === 'pause') {
  player.pause();
  await i.update({ content: 'تم إيقاف الصوت', components: [row] });
} else if (i.customId === 'stop') {
  player.stop();
  await i.update({ content: 'تم تعطيل الصوت', components: [row] });
} else if (i.customId === 'resume') {
  player.unpause();
  await i.update({ content: 'تم اعاده تشغيل الصوت', components: [row] });
}
});
}
if (th2 === '32') {
const connection = joinVoiceChannel({
channelId: interaction.member.voice.channel.id,
guildId: interaction.guild.id,
adapterCreator: interaction.guild.voiceAdapterCreator,
});
const player = createAudioPlayer();
const resource = createAudioResource('https://server8.mp3quran.net/afs/032.mp3');
player.play(resource);
connection.subscribe(player)
const resumeButton = new Discord.ButtonBuilder()
.setCustomId('resume')
.setLabel('Resume')       
.setEmoji("▶️")  
.setStyle(Discord.ButtonStyle.Primary);

const pauseButton = new Discord.ButtonBuilder()
  .setCustomId('pause')
  .setLabel('Pause')
  .setEmoji('⏸️')
  .setStyle(Discord.ButtonStyle.Danger);

const stopButton = new Discord.ButtonBuilder()
  .setCustomId('stop')
  .setLabel('Stop')
  .setEmoji('🛑')
  .setStyle(Discord.ButtonStyle.Danger);

const row = new Discord.ActionRowBuilder().addComponents(
  resumeButton,
  pauseButton,
  stopButton,
);
interaction.reply({content:`تم تشغيل سوره **السجدة** في روم صوتي${interaction.member.voice.channel}
- لايقاف او استكمال التشغيل قم بالتنقل بين الازرار ادناه.`,ephemeral:true,components: [row]})
const filter = (i) =>
i.customId === 'pause' ||
i.customId === 'stop' ||
i.customId === 'resume'
const collector = interaction.channel.createMessageComponentCollector({filter});

collector.on('collect', async (i) => {
if (i.customId === 'pause') {
  player.pause();
  await i.update({ content: 'تم إيقاف الصوت', components: [row] });
} else if (i.customId === 'stop') {
  player.stop();
  await i.update({ content: 'تم تعطيل الصوت', components: [row] });
} else if (i.customId === 'resume') {
  player.unpause();
  await i.update({ content: 'تم اعاده تشغيل الصوت', components: [row] });
}
});
}
if (th2 === '33') {
const connection = joinVoiceChannel({
channelId: interaction.member.voice.channel.id,
guildId: interaction.guild.id,
adapterCreator: interaction.guild.voiceAdapterCreator,
});
const player = createAudioPlayer();
const resource = createAudioResource('https://server8.mp3quran.net/afs/033.mp3');
player.play(resource);
connection.subscribe(player)
  const resumeButton = new Discord.ButtonBuilder()
  .setCustomId('resume')
  .setLabel('Resume')       
  .setEmoji("▶️")  
  .setStyle(Discord.ButtonStyle.Primary);
  
  const pauseButton = new Discord.ButtonBuilder()
    .setCustomId('pause')
    .setLabel('Pause')
    .setEmoji('⏸️')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const stopButton = new Discord.ButtonBuilder()
    .setCustomId('stop')
    .setLabel('Stop')
    .setEmoji('🛑')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const row = new Discord.ActionRowBuilder().addComponents(
    resumeButton,
    pauseButton,
    stopButton,
  );
interaction.reply({content:`تم تشغيل سوره **الأحزاب** في روم صوتي${interaction.member.voice.channel}
- لايقاف او استكمال التشغيل قم بالتنقل بين الازرار ادناه.`,ephemeral:true,components: [row]})
const filter = (i) =>
i.customId === 'pause' ||
i.customId === 'stop' ||
i.customId === 'resume'
const collector = interaction.channel.createMessageComponentCollector({filter});

collector.on('collect', async (i) => {
if (i.customId === 'pause') {
  player.pause();
  await i.update({ content: 'تم إيقاف الصوت', components: [row] });
} else if (i.customId === 'stop') {
  player.stop();
  await i.update({ content: 'تم تعطيل الصوت', components: [row] });
} else if (i.customId === 'resume') {
  player.unpause();
  await i.update({ content: 'تم اعاده تشغيل الصوت', components: [row] });
}
});
}
if (th2 === '34') {
const connection = joinVoiceChannel({
channelId: interaction.member.voice.channel.id,
guildId: interaction.guild.id,
adapterCreator: interaction.guild.voiceAdapterCreator,
});
const player = createAudioPlayer();
const resource = createAudioResource('https://server8.mp3quran.net/afs/034.mp3');
player.play(resource);
connection.subscribe(player)
const resumeButton = new Discord.ButtonBuilder()
.setCustomId('resume')
.setLabel('Resume')       
.setEmoji("▶️")  
.setStyle(Discord.ButtonStyle.Primary);

const pauseButton = new Discord.ButtonBuilder()
  .setCustomId('pause')
  .setLabel('Pause')
  .setEmoji('⏸️')
  .setStyle(Discord.ButtonStyle.Danger);

const stopButton = new Discord.ButtonBuilder()
  .setCustomId('stop')
  .setLabel('Stop')
  .setEmoji('🛑')
  .setStyle(Discord.ButtonStyle.Danger);

const row = new Discord.ActionRowBuilder().addComponents(
  resumeButton,
  pauseButton,
  stopButton,
);
interaction.reply({content:`تم تشغيل سوره **سبأ** في روم صوتي${interaction.member.voice.channel}
- لايقاف او استكمال التشغيل قم بالتنقل بين الازرار ادناه.`,ephemeral:true,components: [row]})
const filter = (i) =>
i.customId === 'pause' ||
i.customId === 'stop' ||
i.customId === 'resume'
const collector = interaction.channel.createMessageComponentCollector({filter});

collector.on('collect', async (i) => {
if (i.customId === 'pause') {
  player.pause();
  await i.update({ content: 'تم إيقاف الصوت', components: [row] });
} else if (i.customId === 'stop') {
  player.stop();
  await i.update({ content: 'تم تعطيل الصوت', components: [row] });
} else if (i.customId === 'resume') {
  player.unpause();
  await i.update({ content: 'تم اعاده تشغيل الصوت', components: [row] });
}
});
}
if (th2 === '35') {
const connection = joinVoiceChannel({
channelId: interaction.member.voice.channel.id,
guildId: interaction.guild.id,
adapterCreator: interaction.guild.voiceAdapterCreator,
});
const player = createAudioPlayer();
const resource = createAudioResource('https://server8.mp3quran.net/afs/035.mp3');
player.play(resource);
connection.subscribe(player)
  const resumeButton = new Discord.ButtonBuilder()
  .setCustomId('resume')
  .setLabel('Resume')       
  .setEmoji("▶️")  
  .setStyle(Discord.ButtonStyle.Primary);
  
  const pauseButton = new Discord.ButtonBuilder()
    .setCustomId('pause')
    .setLabel('Pause')
    .setEmoji('⏸️')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const stopButton = new Discord.ButtonBuilder()
    .setCustomId('stop')
    .setLabel('Stop')
    .setEmoji('🛑')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const row = new Discord.ActionRowBuilder().addComponents(
    resumeButton,
    pauseButton,
    stopButton,
  );
interaction.reply({content:`تم تشغيل سوره **فاطر** في روم صوتي${interaction.member.voice.channel}
- لايقاف او استكمال التشغيل قم بالتنقل بين الازرار ادناه.`,ephemeral:true,components: [row]})
const filter = (i) =>
i.customId === 'pause' ||
i.customId === 'stop' ||
i.customId === 'resume'
const collector = interaction.channel.createMessageComponentCollector({filter});

collector.on('collect', async (i) => {
if (i.customId === 'pause') {
  player.pause();
  await i.update({ content: 'تم إيقاف الصوت', components: [row] });
} else if (i.customId === 'stop') {
  player.stop();
  await i.update({ content: 'تم تعطيل الصوت', components: [row] });
} else if (i.customId === 'resume') {
  player.unpause();
  await i.update({ content: 'تم اعاده تشغيل الصوت', components: [row] });
}
});
}
if (th2 === '36') {
const connection = joinVoiceChannel({
channelId: interaction.member.voice.channel.id,
guildId: interaction.guild.id,
adapterCreator: interaction.guild.voiceAdapterCreator,
});
const player = createAudioPlayer();
const resource = createAudioResource('https://server8.mp3quran.net/afs/036.mp3');
player.play(resource);
connection.subscribe(player)
const resumeButton = new Discord.ButtonBuilder()
.setCustomId('resume')
.setLabel('Resume')       
.setEmoji("▶️")  
.setStyle(Discord.ButtonStyle.Primary);

const pauseButton = new Discord.ButtonBuilder()
  .setCustomId('pause')
  .setLabel('Pause')
  .setEmoji('⏸️')
  .setStyle(Discord.ButtonStyle.Danger);

const stopButton = new Discord.ButtonBuilder()
  .setCustomId('stop')
  .setLabel('Stop')
  .setEmoji('🛑')
  .setStyle(Discord.ButtonStyle.Danger);

const row = new Discord.ActionRowBuilder().addComponents(
  resumeButton,
  pauseButton,
  stopButton,
);
interaction.reply({content:`تم تشغيل سوره **يس** في روم صوتي${interaction.member.voice.channel}
- لايقاف او استكمال التشغيل قم بالتنقل بين الازرار ادناه.`,ephemeral:true,components: [row]})
const filter = (i) =>
i.customId === 'pause' ||
i.customId === 'stop' ||
i.customId === 'resume'
const collector = interaction.channel.createMessageComponentCollector({filter});

collector.on('collect', async (i) => {
if (i.customId === 'pause') {
  player.pause();
  await i.update({ content: 'تم إيقاف الصوت', components: [row] });
} else if (i.customId === 'stop') {
  player.stop();
  await i.update({ content: 'تم تعطيل الصوت', components: [row] });
} else if (i.customId === 'resume') {
  player.unpause();
  await i.update({ content: 'تم اعاده تشغيل الصوت', components: [row] });
}
});
}
if (th2 === '37') {
const connection = joinVoiceChannel({
channelId: interaction.member.voice.channel.id,
guildId: interaction.guild.id,
adapterCreator: interaction.guild.voiceAdapterCreator,
});
const player = createAudioPlayer();
const resource = createAudioResource('https://server8.mp3quran.net/afs/037.mp3');
player.play(resource);
connection.subscribe(player)
  const resumeButton = new Discord.ButtonBuilder()
  .setCustomId('resume')
  .setLabel('Resume')       
  .setEmoji("▶️")  
  .setStyle(Discord.ButtonStyle.Primary);
  
  const pauseButton = new Discord.ButtonBuilder()
    .setCustomId('pause')
    .setLabel('Pause')
    .setEmoji('⏸️')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const stopButton = new Discord.ButtonBuilder()
    .setCustomId('stop')
    .setLabel('Stop')
    .setEmoji('🛑')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const row = new Discord.ActionRowBuilder().addComponents(
    resumeButton,
    pauseButton,
    stopButton,
  );
interaction.reply({content:`تم تشغيل سوره **الصافات** في روم صوتي${interaction.member.voice.channel}
- لايقاف او استكمال التشغيل قم بالتنقل بين الازرار ادناه.`,ephemeral:true,components: [row]})
const filter = (i) =>
i.customId === 'pause' ||
i.customId === 'stop' ||
i.customId === 'resume'
const collector = interaction.channel.createMessageComponentCollector({filter});

collector.on('collect', async (i) => {
if (i.customId === 'pause') {
  player.pause();
  await i.update({ content: 'تم إيقاف الصوت', components: [row] });
} else if (i.customId === 'stop') {
  player.stop();
  await i.update({ content: 'تم تعطيل الصوت', components: [row] });
} else if (i.customId === 'resume') {
  player.unpause();
  await i.update({ content: 'تم اعاده تشغيل الصوت', components: [row] });
}
});
}if (th2 === '38') {
const connection = joinVoiceChannel({
channelId: interaction.member.voice.channel.id,
guildId: interaction.guild.id,
adapterCreator: interaction.guild.voiceAdapterCreator,
});
const player = createAudioPlayer();
const resource = createAudioResource('https://server8.mp3quran.net/afs/038.mp3');
player.play(resource);
connection.subscribe(player)
  const resumeButton = new Discord.ButtonBuilder()
  .setCustomId('resume')
  .setLabel('Resume')       
  .setEmoji("▶️")  
  .setStyle(Discord.ButtonStyle.Primary);
  
  const pauseButton = new Discord.ButtonBuilder()
    .setCustomId('pause')
    .setLabel('Pause')
    .setEmoji('⏸️')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const stopButton = new Discord.ButtonBuilder()
    .setCustomId('stop')
    .setLabel('Stop')
    .setEmoji('🛑')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const row = new Discord.ActionRowBuilder().addComponents(
    resumeButton,
    pauseButton,
    stopButton,
  );
interaction.reply({content:`تم تشغيل سوره **ص** في روم صوتي${interaction.member.voice.channel}
- لايقاف او استكمال التشغيل قم بالتنقل بين الازرار ادناه.`,ephemeral:true,components: [row]})
const filter = (i) =>
i.customId === 'pause' ||
i.customId === 'stop' ||
i.customId === 'resume'
const collector = interaction.channel.createMessageComponentCollector({filter});

collector.on('collect', async (i) => {
if (i.customId === 'pause') {
  player.pause();
  await i.update({ content: 'تم إيقاف الصوت', components: [row] });
} else if (i.customId === 'stop') {
  player.stop();
  await i.update({ content: 'تم تعطيل الصوت', components: [row] });
} else if (i.customId === 'resume') {
  player.unpause();
  await i.update({ content: 'تم اعاده تشغيل الصوت', components: [row] });
}
});
}if (th2 === '39') {
const connection = joinVoiceChannel({
channelId: interaction.member.voice.channel.id,
guildId: interaction.guild.id,
adapterCreator: interaction.guild.voiceAdapterCreator,
});
const player = createAudioPlayer();
const resource = createAudioResource('https://server8.mp3quran.net/afs/039.mp3');
player.play(resource);
connection.subscribe(player)
  const resumeButton = new Discord.ButtonBuilder()
  .setCustomId('resume')
  .setLabel('Resume')       
  .setEmoji("▶️")  
  .setStyle(Discord.ButtonStyle.Primary);
  
  const pauseButton = new Discord.ButtonBuilder()
    .setCustomId('pause')
    .setLabel('Pause')
    .setEmoji('⏸️')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const stopButton = new Discord.ButtonBuilder()
    .setCustomId('stop')
    .setLabel('Stop')
    .setEmoji('🛑')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const row = new Discord.ActionRowBuilder().addComponents(
    resumeButton,
    pauseButton,
    stopButton,
  );
interaction.reply({content:`تم تشغيل سوره **الزمر** في روم صوتي${interaction.member.voice.channel}
- لايقاف او استكمال التشغيل قم بالتنقل بين الازرار ادناه.`,ephemeral:true})
const filter = (i) =>
i.customId === 'pause' ||
i.customId === 'stop' ||
i.customId === 'resume'
const collector = interaction.channel.createMessageComponentCollector({filter});

collector.on('collect', async (i) => {
if (i.customId === 'pause') {
  player.pause();
  await i.update({ content: 'تم إيقاف الصوت', components: [row] });
} else if (i.customId === 'stop') {
  player.stop();
  await i.update({ content: 'تم تعطيل الصوت', components: [row] });
} else if (i.customId === 'resume') {
  player.unpause();
  await i.update({ content: 'تم اعاده تشغيل الصوت', components: [row] });
}
});
}if (th2 === '40') {
const connection = joinVoiceChannel({
channelId: interaction.member.voice.channel.id,
guildId: interaction.guild.id,
adapterCreator: interaction.guild.voiceAdapterCreator,
});
const player = createAudioPlayer();
const resource = createAudioResource('https://server8.mp3quran.net/afs/040.mp3');
player.play(resource);
connection.subscribe(player)
  const resumeButton = new Discord.ButtonBuilder()
  .setCustomId('resume')
  .setLabel('Resume')       
  .setEmoji("▶️")  
  .setStyle(Discord.ButtonStyle.Primary);
  
  const pauseButton = new Discord.ButtonBuilder()
    .setCustomId('pause')
    .setLabel('Pause')
    .setEmoji('⏸️')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const stopButton = new Discord.ButtonBuilder()
    .setCustomId('stop')
    .setLabel('Stop')
    .setEmoji('🛑')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const row = new Discord.ActionRowBuilder().addComponents(
    resumeButton,
    pauseButton,
    stopButton,
  );
interaction.reply({content:`تم تشغيل سوره **غامر** في روم صوتي${interaction.member.voice.channel}
- لايقاف او استكمال التشغيل قم بالتنقل بين الازرار ادناه.`,ephemeral:true,components: [row]})
const filter = (i) =>
i.customId === 'pause' ||
i.customId === 'stop' ||
i.customId === 'resume'
const collector = interaction.channel.createMessageComponentCollector({filter});

collector.on('collect', async (i) => {
if (i.customId === 'pause') {
  player.pause();
  await i.update({ content: 'تم إيقاف الصوت', components: [row] });
} else if (i.customId === 'stop') {
  player.stop();
  await i.update({ content: 'تم تعطيل الصوت', components: [row] });
} else if (i.customId === 'resume') {
  player.unpause();
  await i.update({ content: 'تم اعاده تشغيل الصوت', components: [row] });
}
});
}if (th2 === '41') {
const connection = joinVoiceChannel({
channelId: interaction.member.voice.channel.id,
guildId: interaction.guild.id,
adapterCreator: interaction.guild.voiceAdapterCreator,
});
const player = createAudioPlayer();
const resource = createAudioResource('https://server8.mp3quran.net/afs/041.mp3');
player.play(resource);
connection.subscribe(player)
const resumeButton = new Discord.ButtonBuilder()
.setCustomId('resume')
.setLabel('Resume')       
.setEmoji("▶️")  
.setStyle(Discord.ButtonStyle.Primary);

const pauseButton = new Discord.ButtonBuilder()
  .setCustomId('pause')
  .setLabel('Pause')
  .setEmoji('⏸️')
  .setStyle(Discord.ButtonStyle.Danger);

const stopButton = new Discord.ButtonBuilder()
  .setCustomId('stop')
  .setLabel('Stop')
  .setEmoji('🛑')
  .setStyle(Discord.ButtonStyle.Danger);

const row = new Discord.ActionRowBuilder().addComponents(
  resumeButton,
  pauseButton,
  stopButton,
);
interaction.reply({content:`تم تشغيل سوره **فصلت** في روم صوتي${interaction.member.voice.channel}
- لايقاف او استكمال التشغيل قم بالتنقل بين الازرار ادناه.`,ephemeral:true,components: [row]})
const filter = (i) =>
i.customId === 'pause' ||
i.customId === 'stop' ||
i.customId === 'resume'
const collector = interaction.channel.createMessageComponentCollector({filter});

collector.on('collect', async (i) => {
if (i.customId === 'pause') {
  player.pause();
  await i.update({ content: 'تم إيقاف الصوت', components: [row] });
} else if (i.customId === 'stop') {
  player.stop();
  await i.update({ content: 'تم تعطيل الصوت', components: [row] });
} else if (i.customId === 'resume') {
  player.unpause();
  await i.update({ content: 'تم اعاده تشغيل الصوت', components: [row] });
}
});
}if (th2 === '42') {
const connection = joinVoiceChannel({
channelId: interaction.member.voice.channel.id,
guildId: interaction.guild.id,
adapterCreator: interaction.guild.voiceAdapterCreator,
});
const player = createAudioPlayer();
const resource = createAudioResource('https://server8.mp3quran.net/afs/042.mp3');
player.play(resource);
connection.subscribe(player)
  const resumeButton = new Discord.ButtonBuilder()
  .setCustomId('resume')
  .setLabel('Resume')       
  .setEmoji("▶️")  
  .setStyle(Discord.ButtonStyle.Primary);
  
  const pauseButton = new Discord.ButtonBuilder()
    .setCustomId('pause')
    .setLabel('Pause')
    .setEmoji('⏸️')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const stopButton = new Discord.ButtonBuilder()
    .setCustomId('stop')
    .setLabel('Stop')
    .setEmoji('🛑')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const row = new Discord.ActionRowBuilder().addComponents(
    resumeButton,
    pauseButton,
    stopButton,
  );
interaction.reply({content:`تم تشغيل سوره **الشوري** في روم صوتي${interaction.member.voice.channel}
- لايقاف او استكمال التشغيل قم بالتنقل بين الازرار ادناه.`,ephemeral:true,components: [row]})
const filter = (i) =>
i.customId === 'pause' ||
i.customId === 'stop' ||
i.customId === 'resume'
const collector = interaction.channel.createMessageComponentCollector({filter});

collector.on('collect', async (i) => {
if (i.customId === 'pause') {
  player.pause();
  await i.update({ content: 'تم إيقاف الصوت', components: [row] });
} else if (i.customId === 'stop') {
  player.stop();
  await i.update({ content: 'تم تعطيل الصوت', components: [row] });
} else if (i.customId === 'resume') {
  player.unpause();
  await i.update({ content: 'تم اعاده تشغيل الصوت', components: [row] });
}
});
}if (th2 === '43') {
const connection = joinVoiceChannel({
channelId: interaction.member.voice.channel.id,
guildId: interaction.guild.id,
adapterCreator: interaction.guild.voiceAdapterCreator,
});
const player = createAudioPlayer();
const resource = createAudioResource('https://server8.mp3quran.net/afs/043.mp3');
player.play(resource);
connection.subscribe(player)
const resumeButton = new Discord.ButtonBuilder()
.setCustomId('resume')
.setLabel('Resume')       
.setEmoji("▶️")  
.setStyle(Discord.ButtonStyle.Primary);

const pauseButton = new Discord.ButtonBuilder()
  .setCustomId('pause')
  .setLabel('Pause')
  .setEmoji('⏸️')
  .setStyle(Discord.ButtonStyle.Danger);

const stopButton = new Discord.ButtonBuilder()
  .setCustomId('stop')
  .setLabel('Stop')
  .setEmoji('🛑')
  .setStyle(Discord.ButtonStyle.Danger);

const row = new Discord.ActionRowBuilder().addComponents(
  resumeButton,
  pauseButton,
  stopButton,
);
interaction.reply({content:`تم تشغيل سوره **الزخرف** في روم صوتي${interaction.member.voice.channel}
- لايقاف او استكمال التشغيل قم بالتنقل بين الازرار ادناه.`,ephemeral:true,components: [row]})
const filter = (i) =>
i.customId === 'pause' ||
i.customId === 'stop' ||
i.customId === 'resume'
const collector = interaction.channel.createMessageComponentCollector({filter});

collector.on('collect', async (i) => {
if (i.customId === 'pause') {
  player.pause();
  await i.update({ content: 'تم إيقاف الصوت', components: [row] });
} else if (i.customId === 'stop') {
  player.stop();
  await i.update({ content: 'تم تعطيل الصوت', components: [row] });
} else if (i.customId === 'resume') {
  player.unpause();
  await i.update({ content: 'تم اعاده تشغيل الصوت', components: [row] });
}
});
}if (th2 === '44') {
const connection = joinVoiceChannel({
channelId: interaction.member.voice.channel.id,
guildId: interaction.guild.id,
adapterCreator: interaction.guild.voiceAdapterCreator,
});
const player = createAudioPlayer();
const resource = createAudioResource('https://server8.mp3quran.net/afs/044.mp3');
player.play(resource);
connection.subscribe(player)
  const resumeButton = new Discord.ButtonBuilder()
  .setCustomId('resume')
  .setLabel('Resume')       
  .setEmoji("▶️")  
  .setStyle(Discord.ButtonStyle.Primary);
  
  const pauseButton = new Discord.ButtonBuilder()
    .setCustomId('pause')
    .setLabel('Pause')
    .setEmoji('⏸️')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const stopButton = new Discord.ButtonBuilder()
    .setCustomId('stop')
    .setLabel('Stop')
    .setEmoji('🛑')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const row = new Discord.ActionRowBuilder().addComponents(
    resumeButton,
    pauseButton,
    stopButton,
  );
interaction.reply({content:`تم تشغيل سوره **الدخان** في روم صوتي${interaction.member.voice.channel}
- لايقاف او استكمال التشغيل قم بالتنقل بين الازرار ادناه.`,ephemeral:true,components: [row]})
const filter = (i) =>
i.customId === 'pause' ||
i.customId === 'stop' ||
i.customId === 'resume'
const collector = interaction.channel.createMessageComponentCollector({filter});

collector.on('collect', async (i) => {
if (i.customId === 'pause') {
  player.pause();
  await i.update({ content: 'تم إيقاف الصوت', components: [row] });
} else if (i.customId === 'stop') {
  player.stop();
  await i.update({ content: 'تم تعطيل الصوت', components: [row] });
} else if (i.customId === 'resume') {
  player.unpause();
  await i.update({ content: 'تم اعاده تشغيل الصوت', components: [row] });
}
});
}if (th2 === '45') {
const connection = joinVoiceChannel({
channelId: interaction.member.voice.channel.id,
guildId: interaction.guild.id,
adapterCreator: interaction.guild.voiceAdapterCreator,
});
const player = createAudioPlayer();
const resource = createAudioResource('https://server8.mp3quran.net/afs/045.mp3');
player.play(resource);
connection.subscribe(player)
  const resumeButton = new Discord.ButtonBuilder()
  .setCustomId('resume')
  .setLabel('Resume')       
  .setEmoji("▶️")  
  .setStyle(Discord.ButtonStyle.Primary);
  
  const pauseButton = new Discord.ButtonBuilder()
    .setCustomId('pause')
    .setLabel('Pause')
    .setEmoji('⏸️')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const stopButton = new Discord.ButtonBuilder()
    .setCustomId('stop')
    .setLabel('Stop')
    .setEmoji('🛑')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const row = new Discord.ActionRowBuilder().addComponents(
    resumeButton,
    pauseButton,
    stopButton,
  );
interaction.reply({content:`تم تشغيل سوره **الجاثية** في روم صوتي${interaction.member.voice.channel}
- لايقاف او استكمال التشغيل قم بالتنقل بين الازرار ادناه.`,ephemeral:true,components: [row]})
const filter = (i) =>
i.customId === 'pause' ||
i.customId === 'stop' ||
i.customId === 'resume'
const collector = interaction.channel.createMessageComponentCollector({filter});

collector.on('collect', async (i) => {
if (i.customId === 'pause') {
  player.pause();
  await i.update({ content: 'تم إيقاف الصوت', components: [row] });
} else if (i.customId === 'stop') {
  player.stop();
  await i.update({ content: 'تم تعطيل الصوت', components: [row] });
} else if (i.customId === 'resume') {
  player.unpause();
  await i.update({ content: 'تم اعاده تشغيل الصوت', components: [row] });
}
});
}if (th2 === '46') {
const connection = joinVoiceChannel({
channelId: interaction.member.voice.channel.id,
guildId: interaction.guild.id,
adapterCreator: interaction.guild.voiceAdapterCreator,
});
const player = createAudioPlayer();
const resource = createAudioResource('https://server8.mp3quran.net/afs/046.mp3');
player.play(resource);
connection.subscribe(player)
const resumeButton = new Discord.ButtonBuilder()
.setCustomId('resume')
.setLabel('Resume')       
.setEmoji("▶️")  
.setStyle(Discord.ButtonStyle.Primary);

const pauseButton = new Discord.ButtonBuilder()
  .setCustomId('pause')
  .setLabel('Pause')
  .setEmoji('⏸️')
  .setStyle(Discord.ButtonStyle.Danger);

const stopButton = new Discord.ButtonBuilder()
  .setCustomId('stop')
  .setLabel('Stop')
  .setEmoji('🛑')
  .setStyle(Discord.ButtonStyle.Danger);

const row = new Discord.ActionRowBuilder().addComponents(
  resumeButton,
  pauseButton,
  stopButton,
);
interaction.reply({content:`تم تشغيل سوره **الأحقاف** في روم صوتي${interaction.member.voice.channel}
- لايقاف او استكمال التشغيل قم بالتنقل بين الازرار ادناه.`,ephemeral:true,components: [row]})
const filter = (i) =>
i.customId === 'pause' ||
i.customId === 'stop' ||
i.customId === 'resume'
const collector = interaction.channel.createMessageComponentCollector({filter});

collector.on('collect', async (i) => {
if (i.customId === 'pause') {
  player.pause();
  await i.update({ content: 'تم إيقاف الصوت', components: [row] });
} else if (i.customId === 'stop') {
  player.stop();
  await i.update({ content: 'تم تعطيل الصوت', components: [row] });
} else if (i.customId === 'resume') {
  player.unpause();
  await i.update({ content: 'تم اعاده تشغيل الصوت', components: [row] });
}
});
}if (th2 === '47') {
const connection = joinVoiceChannel({
channelId: interaction.member.voice.channel.id,
guildId: interaction.guild.id,
adapterCreator: interaction.guild.voiceAdapterCreator,
});
const player = createAudioPlayer();
const resource = createAudioResource('https://server8.mp3quran.net/afs/047.mp3');
player.play(resource);
connection.subscribe(player)
const resumeButton = new Discord.ButtonBuilder()
.setCustomId('resume')
.setLabel('Resume')       
.setEmoji("▶️")  
.setStyle(Discord.ButtonStyle.Primary);

const pauseButton = new Discord.ButtonBuilder()
  .setCustomId('pause')
  .setLabel('Pause')
  .setEmoji('⏸️')
  .setStyle(Discord.ButtonStyle.Danger);

const stopButton = new Discord.ButtonBuilder()
  .setCustomId('stop')
  .setLabel('Stop')
  .setEmoji('🛑')
  .setStyle(Discord.ButtonStyle.Danger);

const row = new Discord.ActionRowBuilder().addComponents(
  resumeButton,
  pauseButton,
  stopButton,
);
interaction.reply({content:`تم تشغيل سوره **محمد** في روم صوتي${interaction.member.voice.channel}
- لايقاف او استكمال التشغيل قم بالتنقل بين الازرار ادناه.`,ephemeral:true,components: [row]})
const filter = (i) =>
i.customId === 'pause' ||
i.customId === 'stop' ||
i.customId === 'resume'
const collector = interaction.channel.createMessageComponentCollector({filter});

collector.on('collect', async (i) => {
if (i.customId === 'pause') {
  player.pause();
  await i.update({ content: 'تم إيقاف الصوت', components: [row] });
} else if (i.customId === 'stop') {
  player.stop();
  await i.update({ content: 'تم تعطيل الصوت', components: [row] });
} else if (i.customId === 'resume') {
  player.unpause();
  await i.update({ content: 'تم اعاده تشغيل الصوت', components: [row] });
}
});
}if (th2 === '48') {
const connection = joinVoiceChannel({
channelId: interaction.member.voice.channel.id,
guildId: interaction.guild.id,
adapterCreator: interaction.guild.voiceAdapterCreator,
});
const player = createAudioPlayer();
const resource = createAudioResource('https://server8.mp3quran.net/afs/048.mp3');
player.play(resource);
connection.subscribe(player)
  const resumeButton = new Discord.ButtonBuilder()
  .setCustomId('resume')
  .setLabel('Resume')       
  .setEmoji("▶️")  
  .setStyle(Discord.ButtonStyle.Primary);
  
  const pauseButton = new Discord.ButtonBuilder()
    .setCustomId('pause')
    .setLabel('Pause')
    .setEmoji('⏸️')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const stopButton = new Discord.ButtonBuilder()
    .setCustomId('stop')
    .setLabel('Stop')
    .setEmoji('🛑')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const row = new Discord.ActionRowBuilder().addComponents(
    resumeButton,
    pauseButton,
    stopButton,
  );
interaction.reply({content:`تم تشغيل سوره **الفتح** في روم صوتي${interaction.member.voice.channel}
- لايقاف او استكمال التشغيل قم بالتنقل بين الازرار ادناه.`,ephemeral:true,components: [row]})
const filter = (i) =>
i.customId === 'pause' ||
i.customId === 'stop' ||
i.customId === 'resume'
const collector = interaction.channel.createMessageComponentCollector({filter});

collector.on('collect', async (i) => {
if (i.customId === 'pause') {
  player.pause();
  await i.update({ content: 'تم إيقاف الصوت', components: [row] });
} else if (i.customId === 'stop') {
  player.stop();
  await i.update({ content: 'تم تعطيل الصوت', components: [row] });
} else if (i.customId === 'resume') {
  player.unpause();
  await i.update({ content: 'تم اعاده تشغيل الصوت', components: [row] });
}
});
}if (th2 === '49') {
const connection = joinVoiceChannel({
channelId: interaction.member.voice.channel.id,
guildId: interaction.guild.id,
adapterCreator: interaction.guild.voiceAdapterCreator,
});
const player = createAudioPlayer();
const resource = createAudioResource('https://server8.mp3quran.net/afs/049.mp3');
player.play(resource);
connection.subscribe(player)
  const resumeButton = new Discord.ButtonBuilder()
  .setCustomId('resume')
  .setLabel('Resume')       
  .setEmoji("▶️")  
  .setStyle(Discord.ButtonStyle.Primary);
  
  const pauseButton = new Discord.ButtonBuilder()
    .setCustomId('pause')
    .setLabel('Pause')
    .setEmoji('⏸️')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const stopButton = new Discord.ButtonBuilder()
    .setCustomId('stop')
    .setLabel('Stop')
    .setEmoji('🛑')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const row = new Discord.ActionRowBuilder().addComponents(
    resumeButton,
    pauseButton,
    stopButton,
  );
interaction.reply({content:`تم تشغيل سوره **الحجرات** في روم صوتي${interaction.member.voice.channel}
- لايقاف او استكمال التشغيل قم بالتنقل بين الازرار ادناه.`,ephemeral:true,components: [row]})
const filter = (i) =>
i.customId === 'pause' ||
i.customId === 'stop' ||
i.customId === 'resume'
const collector = interaction.channel.createMessageComponentCollector({filter});

collector.on('collect', async (i) => {
if (i.customId === 'pause') {
  player.pause();
  await i.update({ content: 'تم إيقاف الصوت', components: [row] });
} else if (i.customId === 'stop') {
  player.stop();
  await i.update({ content: 'تم تعطيل الصوت', components: [row] });
} else if (i.customId === 'resume') {
  player.unpause();
  await i.update({ content: 'تم اعاده تشغيل الصوت', components: [row] });
}
});
}if (th2 === '50') {
const connection = joinVoiceChannel({
channelId: interaction.member.voice.channel.id,
guildId: interaction.guild.id,
adapterCreator: interaction.guild.voiceAdapterCreator,
});
const player = createAudioPlayer();
const resource = createAudioResource('https://server8.mp3quran.net/afs/050.mp3');
player.play(resource);
connection.subscribe(player)
  const resumeButton = new Discord.ButtonBuilder()
  .setCustomId('resume')
  .setLabel('Resume')       
  .setEmoji("▶️")  
  .setStyle(Discord.ButtonStyle.Primary);
  
  const pauseButton = new Discord.ButtonBuilder()
    .setCustomId('pause')
    .setLabel('Pause')
    .setEmoji('⏸️')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const stopButton = new Discord.ButtonBuilder()
    .setCustomId('stop')
    .setLabel('Stop')
    .setEmoji('🛑')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const row = new Discord.ActionRowBuilder().addComponents(
    resumeButton,
    pauseButton,
    stopButton,
  );
interaction.reply({content:`تم تشغيل سوره **ق** في روم صوتي${interaction.member.voice.channel}
- لايقاف او استكمال التشغيل قم بالتنقل بين الازرار ادناه.`,ephemeral:true,components: [row]})
const filter = (i) =>
i.customId === 'pause' ||
i.customId === 'stop' ||
i.customId === 'resume'
const collector = interaction.channel.createMessageComponentCollector({filter});

collector.on('collect', async (i) => {
if (i.customId === 'pause') {
  player.pause();
  await i.update({ content: 'تم إيقاف الصوت', components: [row] });
} else if (i.customId === 'stop') {
  player.stop();
  await i.update({ content: 'تم تعطيل الصوت', components: [row] });
} else if (i.customId === 'resume') {
  player.unpause();
  await i.update({ content: 'تم اعاده تشغيل الصوت', components: [row] });
}
});
}
}
if(interaction.customId === "select3"){
let th3 = interaction.values[0]
if (th3 === '51') {
const connection = joinVoiceChannel({
channelId: interaction.member.voice.channel.id,
guildId: interaction.guild.id,
adapterCreator: interaction.guild.voiceAdapterCreator,
});
const player = createAudioPlayer();
const resource = createAudioResource('https://server8.mp3quran.net/afs/051.mp3');
player.play(resource);
connection.subscribe(player)
  const resumeButton = new Discord.ButtonBuilder()
  .setCustomId('resume')
  .setLabel('Resume')       
  .setEmoji("▶️")  
  .setStyle(Discord.ButtonStyle.Primary);
  
  const pauseButton = new Discord.ButtonBuilder()
    .setCustomId('pause')
    .setLabel('Pause')
    .setEmoji('⏸️')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const stopButton = new Discord.ButtonBuilder()
    .setCustomId('stop')
    .setLabel('Stop')
    .setEmoji('🛑')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const row = new Discord.ActionRowBuilder().addComponents(
    resumeButton,
    pauseButton,
    stopButton,
  );
interaction.reply({content:`تم تشغيل سوره **الذاريات** في روم صوتي${interaction.member.voice.channel}
- لايقاف او استكمال التشغيل قم بالتنقل بين الازرار ادناه.`,ephemeral:true,components: [row]})
const filter = (i) =>
i.customId === 'pause' ||
i.customId === 'stop' ||
i.customId === 'resume'
const collector = interaction.channel.createMessageComponentCollector({filter});

collector.on('collect', async (i) => {
if (i.customId === 'pause') {
  player.pause();
  await i.update({ content: 'تم إيقاف الصوت', components: [row] });
} else if (i.customId === 'stop') {
  player.stop();
  await i.update({ content: 'تم تعطيل الصوت', components: [row] });
} else if (i.customId === 'resume') {
  player.unpause();
  await i.update({ content: 'تم اعاده تشغيل الصوت', components: [row] });
}
});
}
if (th3 === '52') {
const connection = joinVoiceChannel({
channelId: interaction.member.voice.channel.id,
guildId: interaction.guild.id,
adapterCreator: interaction.guild.voiceAdapterCreator,
});
const player = createAudioPlayer();
const resource = createAudioResource('https://server8.mp3quran.net/afs/052.mp3');
player.play(resource);
connection.subscribe(player)
const resumeButton = new Discord.ButtonBuilder()
.setCustomId('resume')
.setLabel('Resume')       
.setEmoji("▶️")  
.setStyle(Discord.ButtonStyle.Primary);

const pauseButton = new Discord.ButtonBuilder()
  .setCustomId('pause')
  .setLabel('Pause')
  .setEmoji('⏸️')
  .setStyle(Discord.ButtonStyle.Danger);

const stopButton = new Discord.ButtonBuilder()
  .setCustomId('stop')
  .setLabel('Stop')
  .setEmoji('🛑')
  .setStyle(Discord.ButtonStyle.Danger);

const row = new Discord.ActionRowBuilder().addComponents(
  resumeButton,
  pauseButton,
  stopButton,
);
interaction.reply({content:`تم تشغيل سوره **الطور** في روم صوتي${interaction.member.voice.channel}
- لايقاف او استكمال التشغيل قم بالتنقل بين الازرار ادناه.`,ephemeral:true,components: [row]})
const filter = (i) =>
i.customId === 'pause' ||
i.customId === 'stop' ||
i.customId === 'resume'
const collector = interaction.channel.createMessageComponentCollector({filter});

collector.on('collect', async (i) => {
if (i.customId === 'pause') {
  player.pause();
  await i.update({ content: 'تم إيقاف الصوت', components: [row] });
} else if (i.customId === 'stop') {
  player.stop();
  await i.update({ content: 'تم تعطيل الصوت', components: [row] });
} else if (i.customId === 'resume') {
  player.unpause();
  await i.update({ content: 'تم اعاده تشغيل الصوت', components: [row] });
}
});
}
if (th3 === '53') {
const connection = joinVoiceChannel({
channelId: interaction.member.voice.channel.id,
guildId: interaction.guild.id,
adapterCreator: interaction.guild.voiceAdapterCreator,
});
const player = createAudioPlayer();
const resource = createAudioResource('https://server8.mp3quran.net/afs/053.mp3');
player.play(resource);
connection.subscribe(player)
  const resumeButton = new Discord.ButtonBuilder()
  .setCustomId('resume')
  .setLabel('Resume')       
  .setEmoji("▶️")  
  .setStyle(Discord.ButtonStyle.Primary);
  
  const pauseButton = new Discord.ButtonBuilder()
    .setCustomId('pause')
    .setLabel('Pause')
    .setEmoji('⏸️')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const stopButton = new Discord.ButtonBuilder()
    .setCustomId('stop')
    .setLabel('Stop')
    .setEmoji('🛑')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const row = new Discord.ActionRowBuilder().addComponents(
    resumeButton,
    pauseButton,
    stopButton,
  );
interaction.reply({content:`تم تشغيل سوره **النجم** في روم صوتي${interaction.member.voice.channel}
- لايقاف او استكمال التشغيل قم بالتنقل بين الازرار ادناه.`,ephemeral:true,components: [row]})
const filter = (i) =>
i.customId === 'pause' ||
i.customId === 'stop' ||
i.customId === 'resume'
const collector = interaction.channel.createMessageComponentCollector({filter});

collector.on('collect', async (i) => {
if (i.customId === 'pause') {
  player.pause();
  await i.update({ content: 'تم إيقاف الصوت', components: [row] });
} else if (i.customId === 'stop') {
  player.stop();
  await i.update({ content: 'تم تعطيل الصوت', components: [row] });
} else if (i.customId === 'resume') {
  player.unpause();
  await i.update({ content: 'تم اعاده تشغيل الصوت', components: [row] });
}
});
}
if (th3 === '54') {
const connection = joinVoiceChannel({
channelId: interaction.member.voice.channel.id,
guildId: interaction.guild.id,
adapterCreator: interaction.guild.voiceAdapterCreator,
});
const player = createAudioPlayer();
const resource = createAudioResource('https://server8.mp3quran.net/afs/054.mp3');
player.play(resource);
connection.subscribe(player)
  const resumeButton = new Discord.ButtonBuilder()
  .setCustomId('resume')
  .setLabel('Resume')       
  .setEmoji("▶️")  
  .setStyle(Discord.ButtonStyle.Primary);
  
  const pauseButton = new Discord.ButtonBuilder()
    .setCustomId('pause')
    .setLabel('Pause')
    .setEmoji('⏸️')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const stopButton = new Discord.ButtonBuilder()
    .setCustomId('stop')
    .setLabel('Stop')
    .setEmoji('🛑')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const row = new Discord.ActionRowBuilder().addComponents(
    resumeButton,
    pauseButton,
    stopButton,
  );
interaction.reply({content:`تم تشغيل سوره **القمر** في روم صوتي${interaction.member.voice.channel}
- لايقاف او استكمال التشغيل قم بالتنقل بين الازرار ادناه.`,ephemeral:true,components: [row]})
const filter = (i) =>
i.customId === 'pause' ||
i.customId === 'stop' ||
i.customId === 'resume'
const collector = interaction.channel.createMessageComponentCollector({filter});

collector.on('collect', async (i) => {
if (i.customId === 'pause') {
  player.pause();
  await i.update({ content: 'تم إيقاف الصوت', components: [row] });
} else if (i.customId === 'stop') {
  player.stop();
  await i.update({ content: 'تم تعطيل الصوت', components: [row] });
} else if (i.customId === 'resume') {
  player.unpause();
  await i.update({ content: 'تم اعاده تشغيل الصوت', components: [row] });
}
});
}
if (th3 === '55') {
const connection = joinVoiceChannel({
channelId: interaction.member.voice.channel.id,
guildId: interaction.guild.id,
adapterCreator: interaction.guild.voiceAdapterCreator,
});
const player = createAudioPlayer();
const resource = createAudioResource('https://server8.mp3quran.net/afs/055.mp3');
player.play(resource);
connection.subscribe(player)
  const resumeButton = new Discord.ButtonBuilder()
  .setCustomId('resume')
  .setLabel('Resume')       
  .setEmoji("▶️")  
  .setStyle(Discord.ButtonStyle.Primary);
  
  const pauseButton = new Discord.ButtonBuilder()
    .setCustomId('pause')
    .setLabel('Pause')
    .setEmoji('⏸️')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const stopButton = new Discord.ButtonBuilder()
    .setCustomId('stop')
    .setLabel('Stop')
    .setEmoji('🛑')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const row = new Discord.ActionRowBuilder().addComponents(
    resumeButton,
    pauseButton,
    stopButton,
  );
interaction.reply({content:`تم تشغيل سوره **الرحمن** في روم صوتي${interaction.member.voice.channel}
- لايقاف او استكمال التشغيل قم بالتنقل بين الازرار ادناه.`,ephemeral:true,components: [row]})
const filter = (i) =>
i.customId === 'pause' ||
i.customId === 'stop' ||
i.customId === 'resume'
const collector = interaction.channel.createMessageComponentCollector({filter});

collector.on('collect', async (i) => {
if (i.customId === 'pause') {
  player.pause();
  await i.update({ content: 'تم إيقاف الصوت', components: [row] });
} else if (i.customId === 'stop') {
  player.stop();
  await i.update({ content: 'تم تعطيل الصوت', components: [row] });
} else if (i.customId === 'resume') {
  player.unpause();
  await i.update({ content: 'تم اعاده تشغيل الصوت', components: [row] });
}
});
}
if (th3 === '56') {
const connection = joinVoiceChannel({
channelId: interaction.member.voice.channel.id,
guildId: interaction.guild.id,
adapterCreator: interaction.guild.voiceAdapterCreator,
});
const player = createAudioPlayer();
const resource = createAudioResource('https://server8.mp3quran.net/afs/056.mp3');
player.play(resource);
connection.subscribe(player)
  const resumeButton = new Discord.ButtonBuilder()
  .setCustomId('resume')
  .setLabel('Resume')       
  .setEmoji("▶️")  
  .setStyle(Discord.ButtonStyle.Primary);
  
  const pauseButton = new Discord.ButtonBuilder()
    .setCustomId('pause')
    .setLabel('Pause')
    .setEmoji('⏸️')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const stopButton = new Discord.ButtonBuilder()
    .setCustomId('stop')
    .setLabel('Stop')
    .setEmoji('🛑')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const row = new Discord.ActionRowBuilder().addComponents(
    resumeButton,
    pauseButton,
    stopButton,
  );
interaction.reply({content:`تم تشغيل سوره **الواقعة** في روم صوتي${interaction.member.voice.channel}
- لايقاف او استكمال التشغيل قم بالتنقل بين الازرار ادناه.`,ephemeral:true,components: [row]})
const filter = (i) =>
i.customId === 'pause' ||
i.customId === 'stop' ||
i.customId === 'resume'
const collector = interaction.channel.createMessageComponentCollector({filter});

collector.on('collect', async (i) => {
if (i.customId === 'pause') {
  player.pause();
  await i.update({ content: 'تم إيقاف الصوت', components: [row] });
} else if (i.customId === 'stop') {
  player.stop();
  await i.update({ content: 'تم تعطيل الصوت', components: [row] });
} else if (i.customId === 'resume') {
  player.unpause();
  await i.update({ content: 'تم اعاده تشغيل الصوت', components: [row] });
}
});
}
if (th3 === '57') {
const connection = joinVoiceChannel({
channelId: interaction.member.voice.channel.id,
guildId: interaction.guild.id,
adapterCreator: interaction.guild.voiceAdapterCreator,
});
const player = createAudioPlayer();
const resource = createAudioResource('https://server8.mp3quran.net/afs/057.mp3');
player.play(resource);
connection.subscribe(player)
  const resumeButton = new Discord.ButtonBuilder()
  .setCustomId('resume')
  .setLabel('Resume')       
  .setEmoji("▶️")  
  .setStyle(Discord.ButtonStyle.Primary);
  
  const pauseButton = new Discord.ButtonBuilder()
    .setCustomId('pause')
    .setLabel('Pause')
    .setEmoji('⏸️')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const stopButton = new Discord.ButtonBuilder()
    .setCustomId('stop')
    .setLabel('Stop')
    .setEmoji('🛑')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const row = new Discord.ActionRowBuilder().addComponents(
    resumeButton,
    pauseButton,
    stopButton,
  );
interaction.reply({content:`تم تشغيل سوره **الحديد** في روم صوتي${interaction.member.voice.channel}
- لايقاف او استكمال التشغيل قم بالتنقل بين الازرار ادناه.`,ephemeral:true,components: [row]})
const filter = (i) =>
i.customId === 'pause' ||
i.customId === 'stop' ||
i.customId === 'resume'
const collector = interaction.channel.createMessageComponentCollector({filter});

collector.on('collect', async (i) => {
if (i.customId === 'pause') {
  player.pause();
  await i.update({ content: 'تم إيقاف الصوت', components: [row] });
} else if (i.customId === 'stop') {
  player.stop();
  await i.update({ content: 'تم تعطيل الصوت', components: [row] });
} else if (i.customId === 'resume') {
  player.unpause();
  await i.update({ content: 'تم اعاده تشغيل الصوت', components: [row] });
}
});
}
if (th3 === '58') {
const connection = joinVoiceChannel({
channelId: interaction.member.voice.channel.id,
guildId: interaction.guild.id,
adapterCreator: interaction.guild.voiceAdapterCreator,
});
const player = createAudioPlayer();
const resource = createAudioResource('https://server8.mp3quran.net/afs/058.mp3');
player.play(resource);
connection.subscribe(player)
const resumeButton = new Discord.ButtonBuilder()
.setCustomId('resume')
.setLabel('Resume')       
.setEmoji("▶️")  
.setStyle(Discord.ButtonStyle.Primary);

const pauseButton = new Discord.ButtonBuilder()
  .setCustomId('pause')
  .setLabel('Pause')
  .setEmoji('⏸️')
  .setStyle(Discord.ButtonStyle.Danger);

const stopButton = new Discord.ButtonBuilder()
  .setCustomId('stop')
  .setLabel('Stop')
  .setEmoji('🛑')
  .setStyle(Discord.ButtonStyle.Danger);

const row = new Discord.ActionRowBuilder().addComponents(
  resumeButton,
  pauseButton,
  stopButton,
);
interaction.reply({content:`تم تشغيل سوره **المجادلة** في روم صوتي${interaction.member.voice.channel}
- لايقاف او استكمال التشغيل قم بالتنقل بين الازرار ادناه.`,ephemeral:true,components: [row]})
const filter = (i) =>
i.customId === 'pause' ||
i.customId === 'stop' ||
i.customId === 'resume'
const collector = interaction.channel.createMessageComponentCollector({filter});

collector.on('collect', async (i) => {
if (i.customId === 'pause') {
  player.pause();
  await i.update({ content: 'تم إيقاف الصوت', components: [row] });
} else if (i.customId === 'stop') {
  player.stop();
  await i.update({ content: 'تم تعطيل الصوت', components: [row] });
} else if (i.customId === 'resume') {
  player.unpause();
  await i.update({ content: 'تم اعاده تشغيل الصوت', components: [row] });
}
});
}
if (th3 === '59') {
const connection = joinVoiceChannel({
channelId: interaction.member.voice.channel.id,
guildId: interaction.guild.id,
adapterCreator: interaction.guild.voiceAdapterCreator,
});
const player = createAudioPlayer();
const resource = createAudioResource('https://server8.mp3quran.net/afs/059.mp3');
player.play(resource);
connection.subscribe(player)
  const resumeButton = new Discord.ButtonBuilder()
  .setCustomId('resume')
  .setLabel('Resume')       
  .setEmoji("▶️")  
  .setStyle(Discord.ButtonStyle.Primary);
  
  const pauseButton = new Discord.ButtonBuilder()
    .setCustomId('pause')
    .setLabel('Pause')
    .setEmoji('⏸️')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const stopButton = new Discord.ButtonBuilder()
    .setCustomId('stop')
    .setLabel('Stop')
    .setEmoji('🛑')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const row = new Discord.ActionRowBuilder().addComponents(
    resumeButton,
    pauseButton,
    stopButton,
  );
interaction.reply({content:`تم تشغيل سوره **الحشر** في روم صوتي${interaction.member.voice.channel}
- لايقاف او استكمال التشغيل قم بالتنقل بين الازرار ادناه.`,ephemeral:true,components: [row]})
const filter = (i) =>
i.customId === 'pause' ||
i.customId === 'stop' ||
i.customId === 'resume'
const collector = interaction.channel.createMessageComponentCollector({filter});

collector.on('collect', async (i) => {
if (i.customId === 'pause') {
  player.pause();
  await i.update({ content: 'تم إيقاف الصوت', components: [row] });
} else if (i.customId === 'stop') {
  player.stop();
  await i.update({ content: 'تم تعطيل الصوت', components: [row] });
} else if (i.customId === 'resume') {
  player.unpause();
  await i.update({ content: 'تم اعاده تشغيل الصوت', components: [row] });
}
});
}
if (th3 === '60') {
const connection = joinVoiceChannel({
channelId: interaction.member.voice.channel.id,
guildId: interaction.guild.id,
adapterCreator: interaction.guild.voiceAdapterCreator,
});
const player = createAudioPlayer();
const resource = createAudioResource('https://server8.mp3quran.net/afs/060.mp3');
player.play(resource);
connection.subscribe(player)
  const resumeButton = new Discord.ButtonBuilder()
  .setCustomId('resume')
  .setLabel('Resume')       
  .setEmoji("▶️")  
  .setStyle(Discord.ButtonStyle.Primary);
  
  const pauseButton = new Discord.ButtonBuilder()
    .setCustomId('pause')
    .setLabel('Pause')
    .setEmoji('⏸️')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const stopButton = new Discord.ButtonBuilder()
    .setCustomId('stop')
    .setLabel('Stop')
    .setEmoji('🛑')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const row = new Discord.ActionRowBuilder().addComponents(
    resumeButton,
    pauseButton,
    stopButton,
  );
interaction.reply({content:`تم تشغيل سوره **الممتحنة** في روم صوتي${interaction.member.voice.channel}
- لايقاف او استكمال التشغيل قم بالتنقل بين الازرار ادناه.`,ephemeral:true,components: [row]})
const filter = (i) =>
i.customId === 'pause' ||
i.customId === 'stop' ||
i.customId === 'resume'
const collector = interaction.channel.createMessageComponentCollector({filter});

collector.on('collect', async (i) => {
if (i.customId === 'pause') {
  player.pause();
  await i.update({ content: 'تم إيقاف الصوت', components: [row] });
} else if (i.customId === 'stop') {
  player.stop();
  await i.update({ content: 'تم تعطيل الصوت', components: [row] });
} else if (i.customId === 'resume') {
  player.unpause();
  await i.update({ content: 'تم اعاده تشغيل الصوت', components: [row] });
}
});
}
if (th3 === '61') {
const connection = joinVoiceChannel({
channelId: interaction.member.voice.channel.id,
guildId: interaction.guild.id,
adapterCreator: interaction.guild.voiceAdapterCreator,
});
const player = createAudioPlayer();
const resource = createAudioResource('https://server8.mp3quran.net/afs/061.mp3');
player.play(resource);
connection.subscribe(player)
const resumeButton = new Discord.ButtonBuilder()
.setCustomId('resume')
.setLabel('Resume')       
.setEmoji("▶️")  
.setStyle(Discord.ButtonStyle.Primary);

const pauseButton = new Discord.ButtonBuilder()
  .setCustomId('pause')
  .setLabel('Pause')
  .setEmoji('⏸️')
  .setStyle(Discord.ButtonStyle.Danger);

const stopButton = new Discord.ButtonBuilder()
  .setCustomId('stop')
  .setLabel('Stop')
  .setEmoji('🛑')
  .setStyle(Discord.ButtonStyle.Danger);

const row = new Discord.ActionRowBuilder().addComponents(
  resumeButton,
  pauseButton,
  stopButton,
);
interaction.reply({content:`تم تشغيل سوره **الصف** في روم صوتي${interaction.member.voice.channel}
- لايقاف او استكمال التشغيل قم بالتنقل بين الازرار ادناه.`,ephemeral:true,components: [row]})
const filter = (i) =>
i.customId === 'pause' ||
i.customId === 'stop' ||
i.customId === 'resume'
const collector = interaction.channel.createMessageComponentCollector({filter});

collector.on('collect', async (i) => {
if (i.customId === 'pause') {
  player.pause();
  await i.update({ content: 'تم إيقاف الصوت', components: [row] });
} else if (i.customId === 'stop') {
  player.stop();
  await i.update({ content: 'تم تعطيل الصوت', components: [row] });
} else if (i.customId === 'resume') {
  player.unpause();
  await i.update({ content: 'تم اعاده تشغيل الصوت', components: [row] });
}
});
}
if (th3 === '62') {
const connection = joinVoiceChannel({
channelId: interaction.member.voice.channel.id,
guildId: interaction.guild.id,
adapterCreator: interaction.guild.voiceAdapterCreator,
});
const player = createAudioPlayer();
const resource = createAudioResource('https://server8.mp3quran.net/afs/062.mp3');
player.play(resource);
connection.subscribe(player)
  const resumeButton = new Discord.ButtonBuilder()
  .setCustomId('resume')
  .setLabel('Resume')       
  .setEmoji("▶️")  
  .setStyle(Discord.ButtonStyle.Primary);
  
  const pauseButton = new Discord.ButtonBuilder()
    .setCustomId('pause')
    .setLabel('Pause')
    .setEmoji('⏸️')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const stopButton = new Discord.ButtonBuilder()
    .setCustomId('stop')
    .setLabel('Stop')
    .setEmoji('🛑')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const row = new Discord.ActionRowBuilder().addComponents(
    resumeButton,
    pauseButton,
    stopButton,
  );
interaction.reply({content:`تم تشغيل سوره **الجمعة** في روم صوتي${interaction.member.voice.channel}
- لايقاف او استكمال التشغيل قم بالتنقل بين الازرار ادناه.`,ephemeral:true,components: [row]})
const filter = (i) =>
i.customId === 'pause' ||
i.customId === 'stop' ||
i.customId === 'resume'
const collector = interaction.channel.createMessageComponentCollector({filter});

collector.on('collect', async (i) => {
if (i.customId === 'pause') {
  player.pause();
  await i.update({ content: 'تم إيقاف الصوت', components: [row] });
} else if (i.customId === 'stop') {
  player.stop();
  await i.update({ content: 'تم تعطيل الصوت', components: [row] });
} else if (i.customId === 'resume') {
  player.unpause();
  await i.update({ content: 'تم اعاده تشغيل الصوت', components: [row] });
}
});
}
if (th3 === '63') {
const connection = joinVoiceChannel({
channelId: interaction.member.voice.channel.id,
guildId: interaction.guild.id,
adapterCreator: interaction.guild.voiceAdapterCreator,
});
const player = createAudioPlayer();
const resource = createAudioResource('https://server8.mp3quran.net/afs/063.mp3');
player.play(resource);
connection.subscribe(player)
const resumeButton = new Discord.ButtonBuilder()
.setCustomId('resume')
.setLabel('Resume')       
.setEmoji("▶️")  
.setStyle(Discord.ButtonStyle.Primary);

const pauseButton = new Discord.ButtonBuilder()
  .setCustomId('pause')
  .setLabel('Pause')
  .setEmoji('⏸️')
  .setStyle(Discord.ButtonStyle.Danger);

const stopButton = new Discord.ButtonBuilder()
  .setCustomId('stop')
  .setLabel('Stop')
  .setEmoji('🛑')
  .setStyle(Discord.ButtonStyle.Danger);

const row = new Discord.ActionRowBuilder().addComponents(
  resumeButton,
  pauseButton,
  stopButton,
);
interaction.reply({content:`تم تشغيل سوره **المنافقون** في روم صوتي${interaction.member.voice.channel}
- لايقاف او استكمال التشغيل قم بالتنقل بين الازرار ادناه.`,ephemeral:true,components: [row]})
const filter = (i) =>
i.customId === 'pause' ||
i.customId === 'stop' ||
i.customId === 'resume'
const collector = interaction.channel.createMessageComponentCollector({filter});

collector.on('collect', async (i) => {
if (i.customId === 'pause') {
  player.pause();
  await i.update({ content: 'تم إيقاف الصوت', components: [row] });
} else if (i.customId === 'stop') {
  player.stop();
  await i.update({ content: 'تم تعطيل الصوت', components: [row] });
} else if (i.customId === 'resume') {
  player.unpause();
  await i.update({ content: 'تم اعاده تشغيل الصوت', components: [row] });
}
});
}
if (th3 === '64') {
const connection = joinVoiceChannel({
channelId: interaction.member.voice.channel.id,
guildId: interaction.guild.id,
adapterCreator: interaction.guild.voiceAdapterCreator,
});
const player = createAudioPlayer();
const resource = createAudioResource('https://server8.mp3quran.net/afs/064.mp3');
player.play(resource);
connection.subscribe(player)
  const resumeButton = new Discord.ButtonBuilder()
  .setCustomId('resume')
  .setLabel('Resume')       
  .setEmoji("▶️")  
  .setStyle(Discord.ButtonStyle.Primary);
  
  const pauseButton = new Discord.ButtonBuilder()
    .setCustomId('pause')
    .setLabel('Pause')
    .setEmoji('⏸️')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const stopButton = new Discord.ButtonBuilder()
    .setCustomId('stop')
    .setLabel('Stop')
    .setEmoji('🛑')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const row = new Discord.ActionRowBuilder().addComponents(
    resumeButton,
    pauseButton,
    stopButton,
  );
interaction.reply({content:`تم تشغيل سوره **التغابن** في روم صوتي${interaction.member.voice.channel}
- لايقاف او استكمال التشغيل قم بالتنقل بين الازرار ادناه.`,ephemeral:true,components: [row]})
const filter = (i) =>
i.customId === 'pause' ||
i.customId === 'stop' ||
i.customId === 'resume'
const collector = interaction.channel.createMessageComponentCollector({filter});

collector.on('collect', async (i) => {
if (i.customId === 'pause') {
  player.pause();
  await i.update({ content: 'تم إيقاف الصوت', components: [row] });
} else if (i.customId === 'stop') {
  player.stop();
  await i.update({ content: 'تم تعطيل الصوت', components: [row] });
} else if (i.customId === 'resume') {
  player.unpause();
  await i.update({ content: 'تم اعاده تشغيل الصوت', components: [row] });
}
});
}
if (th3 === '65') {
const connection = joinVoiceChannel({
channelId: interaction.member.voice.channel.id,
guildId: interaction.guild.id,
adapterCreator: interaction.guild.voiceAdapterCreator,
});
const player = createAudioPlayer();
const resource = createAudioResource('https://server8.mp3quran.net/afs/065.mp3');
player.play(resource);
connection.subscribe(player)
const resumeButton = new Discord.ButtonBuilder()
.setCustomId('resume')
.setLabel('Resume')       
.setEmoji("▶️")  
.setStyle(Discord.ButtonStyle.Primary);

const pauseButton = new Discord.ButtonBuilder()
  .setCustomId('pause')
  .setLabel('Pause')
  .setEmoji('⏸️')
  .setStyle(Discord.ButtonStyle.Danger);

const stopButton = new Discord.ButtonBuilder()
  .setCustomId('stop')
  .setLabel('Stop')
  .setEmoji('🛑')
  .setStyle(Discord.ButtonStyle.Danger);

const row = new Discord.ActionRowBuilder().addComponents(
  resumeButton,
  pauseButton,
  stopButton,
);
interaction.reply({content:`تم تشغيل سوره **الطلاق** في روم صوتي${interaction.member.voice.channel}
- لايقاف او استكمال التشغيل قم بالتنقل بين الازرار ادناه.`,ephemeral:true,components: [row]})
const filter = (i) =>
i.customId === 'pause' ||
i.customId === 'stop' ||
i.customId === 'resume'
const collector = interaction.channel.createMessageComponentCollector({filter});

collector.on('collect', async (i) => {
if (i.customId === 'pause') {
  player.pause();
  await i.update({ content: 'تم إيقاف الصوت', components: [row] });
} else if (i.customId === 'stop') {
  player.stop();
  await i.update({ content: 'تم تعطيل الصوت', components: [row] });
} else if (i.customId === 'resume') {
  player.unpause();
  await i.update({ content: 'تم اعاده تشغيل الصوت', components: [row] });
}
});
}
if (th3 === '66') {
const connection = joinVoiceChannel({
channelId: interaction.member.voice.channel.id,
guildId: interaction.guild.id,
adapterCreator: interaction.guild.voiceAdapterCreator,
});
const player = createAudioPlayer();
const resource = createAudioResource('https://server8.mp3quran.net/afs/066.mp3');
player.play(resource);
connection.subscribe(player)
const resumeButton = new Discord.ButtonBuilder()
.setCustomId('resume')
.setLabel('Resume')       
.setEmoji("▶️")  
.setStyle(Discord.ButtonStyle.Primary);

const pauseButton = new Discord.ButtonBuilder()
  .setCustomId('pause')
  .setLabel('Pause')
  .setEmoji('⏸️')
  .setStyle(Discord.ButtonStyle.Danger);

const stopButton = new Discord.ButtonBuilder()
  .setCustomId('stop')
  .setLabel('Stop')
  .setEmoji('🛑')
  .setStyle(Discord.ButtonStyle.Danger);

const row = new Discord.ActionRowBuilder().addComponents(
  resumeButton,
  pauseButton,
  stopButton,
);
interaction.reply({content:`تم تشغيل سوره **التحريم** في روم صوتي${interaction.member.voice.channel}
- لايقاف او استكمال التشغيل قم بالتنقل بين الازرار ادناه.`,ephemeral:true,components: [row]})
const filter = (i) =>
i.customId === 'pause' ||
i.customId === 'stop' ||
i.customId === 'resume'
const collector = interaction.channel.createMessageComponentCollector({filter});

collector.on('collect', async (i) => {
if (i.customId === 'pause') {
  player.pause();
  await i.update({ content: 'تم إيقاف الصوت', components: [row] });
} else if (i.customId === 'stop') {
  player.stop();
  await i.update({ content: 'تم تعطيل الصوت', components: [row] });
} else if (i.customId === 'resume') {
  player.unpause();
  await i.update({ content: 'تم اعاده تشغيل الصوت', components: [row] });
}
});
}
if (th3 === '67') {
const connection = joinVoiceChannel({
channelId: interaction.member.voice.channel.id,
guildId: interaction.guild.id,
adapterCreator: interaction.guild.voiceAdapterCreator,
});
const player = createAudioPlayer();
const resource = createAudioResource('https://server8.mp3quran.net/afs/067.mp3');
player.play(resource);
connection.subscribe(player)
  const resumeButton = new Discord.ButtonBuilder()
  .setCustomId('resume')
  .setLabel('Resume')       
  .setEmoji("▶️")  
  .setStyle(Discord.ButtonStyle.Primary);
  
  const pauseButton = new Discord.ButtonBuilder()
    .setCustomId('pause')
    .setLabel('Pause')
    .setEmoji('⏸️')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const stopButton = new Discord.ButtonBuilder()
    .setCustomId('stop')
    .setLabel('Stop')
    .setEmoji('🛑')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const row = new Discord.ActionRowBuilder().addComponents(
    resumeButton,
    pauseButton,
    stopButton,
  );
interaction.reply({content:`تم تشغيل سوره **الملك** في روم صوتي${interaction.member.voice.channel}
- لايقاف او استكمال التشغيل قم بالتنقل بين الازرار ادناه.`,ephemeral:true,components: [row]})
const filter = (i) =>
i.customId === 'pause' ||
i.customId === 'stop' ||
i.customId === 'resume'
const collector = interaction.channel.createMessageComponentCollector({filter});

collector.on('collect', async (i) => {
if (i.customId === 'pause') {
  player.pause();
  await i.update({ content: 'تم إيقاف الصوت', components: [row] });
} else if (i.customId === 'stop') {
  player.stop();
  await i.update({ content: 'تم تعطيل الصوت', components: [row] });
} else if (i.customId === 'resume') {
  player.unpause();
  await i.update({ content: 'تم اعاده تشغيل الصوت', components: [row] });
}
});
}
if (th3 === '68') {
const connection = joinVoiceChannel({
channelId: interaction.member.voice.channel.id,
guildId: interaction.guild.id,
adapterCreator: interaction.guild.voiceAdapterCreator,
});
const player = createAudioPlayer();
const resource = createAudioResource('https://server8.mp3quran.net/afs/068.mp3');
player.play(resource);
connection.subscribe(player)
  const resumeButton = new Discord.ButtonBuilder()
  .setCustomId('resume')
  .setLabel('Resume')       
  .setEmoji("▶️")  
  .setStyle(Discord.ButtonStyle.Primary);
  
  const pauseButton = new Discord.ButtonBuilder()
    .setCustomId('pause')
    .setLabel('Pause')
    .setEmoji('⏸️')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const stopButton = new Discord.ButtonBuilder()
    .setCustomId('stop')
    .setLabel('Stop')
    .setEmoji('🛑')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const row = new Discord.ActionRowBuilder().addComponents(
    resumeButton,
    pauseButton,
    stopButton,
  );
interaction.reply({content:`تم تشغيل سوره **القلم** في روم صوتي${interaction.member.voice.channel}
- لايقاف او استكمال التشغيل قم بالتنقل بين الازرار ادناه.`,ephemeral:true,components: [row]})
const filter = (i) =>
i.customId === 'pause' ||
i.customId === 'stop' ||
i.customId === 'resume'
const collector = interaction.channel.createMessageComponentCollector({filter});

collector.on('collect', async (i) => {
if (i.customId === 'pause') {
  player.pause();
  await i.update({ content: 'تم إيقاف الصوت', components: [row] });
} else if (i.customId === 'stop') {
  player.stop();
  await i.update({ content: 'تم تعطيل الصوت', components: [row] });
} else if (i.customId === 'resume') {
  player.unpause();
  await i.update({ content: 'تم اعاده تشغيل الصوت', components: [row] });
}
});
}
if (th3 === '69') {
const connection = joinVoiceChannel({
channelId: interaction.member.voice.channel.id,
guildId: interaction.guild.id,
adapterCreator: interaction.guild.voiceAdapterCreator,
});
const player = createAudioPlayer();
const resource = createAudioResource('https://server8.mp3quran.net/afs/069.mp3');
player.play(resource);
connection.subscribe(player)
  const resumeButton = new Discord.ButtonBuilder()
  .setCustomId('resume')
  .setLabel('Resume')       
  .setEmoji("▶️")  
  .setStyle(Discord.ButtonStyle.Primary);
  
  const pauseButton = new Discord.ButtonBuilder()
    .setCustomId('pause')
    .setLabel('Pause')
    .setEmoji('⏸️')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const stopButton = new Discord.ButtonBuilder()
    .setCustomId('stop')
    .setLabel('Stop')
    .setEmoji('🛑')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const row = new Discord.ActionRowBuilder().addComponents(
    resumeButton,
    pauseButton,
    stopButton,
  );
interaction.reply({content:`تم تشغيل سوره **الحاقة** في روم صوتي${interaction.member.voice.channel}
- لايقاف او استكمال التشغيل قم بالتنقل بين الازرار ادناه.`,ephemeral:true,components: [row]})
const filter = (i) =>
i.customId === 'pause' ||
i.customId === 'stop' ||
i.customId === 'resume'
const collector = interaction.channel.createMessageComponentCollector({filter});

collector.on('collect', async (i) => {
if (i.customId === 'pause') {
  player.pause();
  await i.update({ content: 'تم إيقاف الصوت', components: [row] });
} else if (i.customId === 'stop') {
  player.stop();
  await i.update({ content: 'تم تعطيل الصوت', components: [row] });
} else if (i.customId === 'resume') {
  player.unpause();
  await i.update({ content: 'تم اعاده تشغيل الصوت', components: [row] });
}
});
}
if (th3 === '70') {
const connection = joinVoiceChannel({
channelId: interaction.member.voice.channel.id,
guildId: interaction.guild.id,
adapterCreator: interaction.guild.voiceAdapterCreator,
});
const player = createAudioPlayer();
const resource = createAudioResource('https://server8.mp3quran.net/afs/070.mp3');
player.play(resource);
connection.subscribe(player)
  const resumeButton = new Discord.ButtonBuilder()
  .setCustomId('resume')
  .setLabel('Resume')       
  .setEmoji("▶️")  
  .setStyle(Discord.ButtonStyle.Primary);
  
  const pauseButton = new Discord.ButtonBuilder()
    .setCustomId('pause')
    .setLabel('Pause')
    .setEmoji('⏸️')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const stopButton = new Discord.ButtonBuilder()
    .setCustomId('stop')
    .setLabel('Stop')
    .setEmoji('🛑')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const row = new Discord.ActionRowBuilder().addComponents(
    resumeButton,
    pauseButton,
    stopButton,
  );
interaction.reply({content:`تم تشغيل سوره **المعارج** في روم صوتي${interaction.member.voice.channel}
- لايقاف او استكمال التشغيل قم بالتنقل بين الازرار ادناه.`,ephemeral:true,components: [row]})
const filter = (i) =>
i.customId === 'pause' ||
i.customId === 'stop' ||
i.customId === 'resume'
const collector = interaction.channel.createMessageComponentCollector({filter});

collector.on('collect', async (i) => {
if (i.customId === 'pause') {
  player.pause();
  await i.update({ content: 'تم إيقاف الصوت', components: [row] });
} else if (i.customId === 'stop') {
  player.stop();
  await i.update({ content: 'تم تعطيل الصوت', components: [row] });
} else if (i.customId === 'resume') {
  player.unpause();
  await i.update({ content: 'تم اعاده تشغيل الصوت', components: [row] });
}
});
}
if (th3 === '71') {
const connection = joinVoiceChannel({
channelId: interaction.member.voice.channel.id,
guildId: interaction.guild.id,
adapterCreator: interaction.guild.voiceAdapterCreator,
});
const player = createAudioPlayer();
const resource = createAudioResource('https://server8.mp3quran.net/afs/071.mp3');
player.play(resource);
connection.subscribe(player)
  const resumeButton = new Discord.ButtonBuilder()
  .setCustomId('resume')
  .setLabel('Resume')       
  .setEmoji("▶️")  
  .setStyle(Discord.ButtonStyle.Primary);
  
  const pauseButton = new Discord.ButtonBuilder()
    .setCustomId('pause')
    .setLabel('Pause')
    .setEmoji('⏸️')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const stopButton = new Discord.ButtonBuilder()
    .setCustomId('stop')
    .setLabel('Stop')
    .setEmoji('🛑')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const row = new Discord.ActionRowBuilder().addComponents(
    resumeButton,
    pauseButton,
    stopButton,
  );
interaction.reply({content:`تم تشغيل سوره **نوح** في روم صوتي${interaction.member.voice.channel}
- لايقاف او استكمال التشغيل قم بالتنقل بين الازرار ادناه.`,ephemeral:true,components: [row]})
const filter = (i) =>
i.customId === 'pause' ||
i.customId === 'stop' ||
i.customId === 'resume'
const collector = interaction.channel.createMessageComponentCollector({filter});

collector.on('collect', async (i) => {
if (i.customId === 'pause') {
  player.pause();
  await i.update({ content: 'تم إيقاف الصوت', components: [row] });
} else if (i.customId === 'stop') {
  player.stop();
  await i.update({ content: 'تم تعطيل الصوت', components: [row] });
} else if (i.customId === 'resume') {
  player.unpause();
  await i.update({ content: 'تم اعاده تشغيل الصوت', components: [row] });
}
});
}
if (th3 === '72') {
const connection = joinVoiceChannel({
channelId: interaction.member.voice.channel.id,
guildId: interaction.guild.id,
adapterCreator: interaction.guild.voiceAdapterCreator,
});
const player = createAudioPlayer();
const resource = createAudioResource('https://server8.mp3quran.net/afs/072.mp3');
player.play(resource);
connection.subscribe(player)
  const resumeButton = new Discord.ButtonBuilder()
  .setCustomId('resume')
  .setLabel('Resume')       
  .setEmoji("▶️")  
  .setStyle(Discord.ButtonStyle.Primary);
  
  const pauseButton = new Discord.ButtonBuilder()
    .setCustomId('pause')
    .setLabel('Pause')
    .setEmoji('⏸️')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const stopButton = new Discord.ButtonBuilder()
    .setCustomId('stop')
    .setLabel('Stop')
    .setEmoji('🛑')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const row = new Discord.ActionRowBuilder().addComponents(
    resumeButton,
    pauseButton,
    stopButton,
  );
interaction.reply({content:`تم تشغيل سوره **الجن** في روم صوتي${interaction.member.voice.channel}
- لايقاف او استكمال التشغيل قم بالتنقل بين الازرار ادناه.`,ephemeral:true,components: [row]})
const filter = (i) =>
i.customId === 'pause' ||
i.customId === 'stop' ||
i.customId === 'resume'
const collector = interaction.channel.createMessageComponentCollector({filter});

collector.on('collect', async (i) => {
if (i.customId === 'pause') {
  player.pause();
  await i.update({ content: 'تم إيقاف الصوت', components: [row] });
} else if (i.customId === 'stop') {
  player.stop();
  await i.update({ content: 'تم تعطيل الصوت', components: [row] });
} else if (i.customId === 'resume') {
  player.unpause();
  await i.update({ content: 'تم اعاده تشغيل الصوت', components: [row] });
}
});
}
if (th3 === '73') {
const connection = joinVoiceChannel({
channelId: interaction.member.voice.channel.id,
guildId: interaction.guild.id,
adapterCreator: interaction.guild.voiceAdapterCreator,
});
const player = createAudioPlayer();
const resource = createAudioResource('https://server8.mp3quran.net/afs/073.mp3');
player.play(resource);
connection.subscribe(player)
const resumeButton = new Discord.ButtonBuilder()
.setCustomId('resume')
.setLabel('Resume')       
.setEmoji("▶️")  
.setStyle(Discord.ButtonStyle.Primary);

const pauseButton = new Discord.ButtonBuilder()
  .setCustomId('pause')
  .setLabel('Pause')
  .setEmoji('⏸️')
  .setStyle(Discord.ButtonStyle.Danger);

const stopButton = new Discord.ButtonBuilder()
  .setCustomId('stop')
  .setLabel('Stop')
  .setEmoji('🛑')
  .setStyle(Discord.ButtonStyle.Danger);

const row = new Discord.ActionRowBuilder().addComponents(
  resumeButton,
  pauseButton,
  stopButton,
);
interaction.reply({content:`تم تشغيل سوره **المزمل** في روم صوتي${interaction.member.voice.channel}
- لايقاف او استكمال التشغيل قم بالتنقل بين الازرار ادناه.`,ephemeral:true,components: [row]})
const filter = (i) =>
i.customId === 'pause' ||
i.customId === 'stop' ||
i.customId === 'resume'
const collector = interaction.channel.createMessageComponentCollector({filter});

collector.on('collect', async (i) => {
if (i.customId === 'pause') {
  player.pause();
  await i.update({ content: 'تم إيقاف الصوت', components: [row] });
} else if (i.customId === 'stop') {
  player.stop();
  await i.update({ content: 'تم تعطيل الصوت', components: [row] });
} else if (i.customId === 'resume') {
  player.unpause();
  await i.update({ content: 'تم اعاده تشغيل الصوت', components: [row] });
}
});
}
if (th3 === '74') {
const connection = joinVoiceChannel({
channelId: interaction.member.voice.channel.id,
guildId: interaction.guild.id,
adapterCreator: interaction.guild.voiceAdapterCreator,
});
const player = createAudioPlayer();
const resource = createAudioResource('https://server8.mp3quran.net/afs/074.mp3');
player.play(resource);
connection.subscribe(player)
  const resumeButton = new Discord.ButtonBuilder()
  .setCustomId('resume')
  .setLabel('Resume')       
  .setEmoji("▶️")  
  .setStyle(Discord.ButtonStyle.Primary);
  
  const pauseButton = new Discord.ButtonBuilder()
    .setCustomId('pause')
    .setLabel('Pause')
    .setEmoji('⏸️')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const stopButton = new Discord.ButtonBuilder()
    .setCustomId('stop')
    .setLabel('Stop')
    .setEmoji('🛑')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const row = new Discord.ActionRowBuilder().addComponents(
    resumeButton,
    pauseButton,
    stopButton,
  );
interaction.reply({content:`تم تشغيل سوره **المدثر** في روم صوتي${interaction.member.voice.channel}
- لايقاف او استكمال التشغيل قم بالتنقل بين الازرار ادناه.`,ephemeral:true,components: [row]})
const filter = (i) =>
i.customId === 'pause' ||
i.customId === 'stop' ||
i.customId === 'resume'
const collector = interaction.channel.createMessageComponentCollector({filter});

collector.on('collect', async (i) => {
if (i.customId === 'pause') {
  player.pause();
  await i.update({ content: 'تم إيقاف الصوت', components: [row] });
} else if (i.customId === 'stop') {
  player.stop();
  await i.update({ content: 'تم تعطيل الصوت', components: [row] });
} else if (i.customId === 'resume') {
  player.unpause();
  await i.update({ content: 'تم اعاده تشغيل الصوت', components: [row] });
}
});
}
if (th3 === '75') {
const connection = joinVoiceChannel({
channelId: interaction.member.voice.channel.id,
guildId: interaction.guild.id,
adapterCreator: interaction.guild.voiceAdapterCreator,
});
const player = createAudioPlayer();
const resource = createAudioResource('https://server8.mp3quran.net/afs/075.mp3');
player.play(resource);
connection.subscribe(player)
const resumeButton = new Discord.ButtonBuilder()
.setCustomId('resume')
.setLabel('Resume')       
.setEmoji("▶️")  
.setStyle(Discord.ButtonStyle.Primary);

const pauseButton = new Discord.ButtonBuilder()
  .setCustomId('pause')
  .setLabel('Pause')
  .setEmoji('⏸️')
  .setStyle(Discord.ButtonStyle.Danger);

const stopButton = new Discord.ButtonBuilder()
  .setCustomId('stop')
  .setLabel('Stop')
  .setEmoji('🛑')
  .setStyle(Discord.ButtonStyle.Danger);

const row = new Discord.ActionRowBuilder().addComponents(
  resumeButton,
  pauseButton,
  stopButton,
);
interaction.reply({content:`تم تشغيل سوره **القيامة** في روم صوتي${interaction.member.voice.channel}
- لايقاف او استكمال التشغيل قم بالتنقل بين الازرار ادناه.`,ephemeral:true,components: [row]})
const filter = (i) =>
i.customId === 'pause' ||
i.customId === 'stop' ||
i.customId === 'resume'
const collector = interaction.channel.createMessageComponentCollector({filter});

collector.on('collect', async (i) => {
if (i.customId === 'pause') {
  player.pause();
  await i.update({ content: 'تم إيقاف الصوت', components: [row] });
} else if (i.customId === 'stop') {
  player.stop();
  await i.update({ content: 'تم تعطيل الصوت', components: [row] });
} else if (i.customId === 'resume') {
  player.unpause();
  await i.update({ content: 'تم اعاده تشغيل الصوت', components: [row] });
}
});
}
}
if(interaction.customId === "select4"){
let th4 = interaction.values[0]
if (th4 === '76') {
const connection = joinVoiceChannel({
channelId: interaction.member.voice.channel.id,
guildId: interaction.guild.id,
adapterCreator: interaction.guild.voiceAdapterCreator,
});
const player = createAudioPlayer();
const resource = createAudioResource('https://server8.mp3quran.net/afs/076.mp3');
player.play(resource);
connection.subscribe(player)
  const resumeButton = new Discord.ButtonBuilder()
  .setCustomId('resume')
  .setLabel('Resume')       
  .setEmoji("▶️")  
  .setStyle(Discord.ButtonStyle.Primary);
  
  const pauseButton = new Discord.ButtonBuilder()
    .setCustomId('pause')
    .setLabel('Pause')
    .setEmoji('⏸️')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const stopButton = new Discord.ButtonBuilder()
    .setCustomId('stop')
    .setLabel('Stop')
    .setEmoji('🛑')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const row = new Discord.ActionRowBuilder().addComponents(
    resumeButton,
    pauseButton,
    stopButton,
  );
interaction.reply({content:`تم تشغيل سوره **الإنسان** في روم صوتي${interaction.member.voice.channel}
- لايقاف او استكمال التشغيل قم بالتنقل بين الازرار ادناه.`,ephemeral:true,components: [row]})
const filter = (i) =>
i.customId === 'pause' ||
i.customId === 'stop' ||
i.customId === 'resume'
const collector = interaction.channel.createMessageComponentCollector({filter});

collector.on('collect', async (i) => {
if (i.customId === 'pause') {
  player.pause();
  await i.update({ content: 'تم إيقاف الصوت', components: [row] });
} else if (i.customId === 'stop') {
  player.stop();
  await i.update({ content: 'تم تعطيل الصوت', components: [row] });
} else if (i.customId === 'resume') {
  player.unpause();
  await i.update({ content: 'تم اعاده تشغيل الصوت', components: [row] });
}
});
}
if (th4 === '77') {
const connection = joinVoiceChannel({
channelId: interaction.member.voice.channel.id,
guildId: interaction.guild.id,
adapterCreator: interaction.guild.voiceAdapterCreator,
});
const player = createAudioPlayer();
const resource = createAudioResource('https://server8.mp3quran.net/afs/077.mp3');
player.play(resource);
connection.subscribe(player)
const resumeButton = new Discord.ButtonBuilder()
.setCustomId('resume')
.setLabel('Resume')       
.setEmoji("▶️")  
.setStyle(Discord.ButtonStyle.Primary);

const pauseButton = new Discord.ButtonBuilder()
  .setCustomId('pause')
  .setLabel('Pause')
  .setEmoji('⏸️')
  .setStyle(Discord.ButtonStyle.Danger);

const stopButton = new Discord.ButtonBuilder()
  .setCustomId('stop')
  .setLabel('Stop')
  .setEmoji('🛑')
  .setStyle(Discord.ButtonStyle.Danger);

const row = new Discord.ActionRowBuilder().addComponents(
  resumeButton,
  pauseButton,
  stopButton,
);
interaction.reply({content:`تم تشغيل سوره **المرسلات** في روم صوتي${interaction.member.voice.channel}
- لايقاف او استكمال التشغيل قم بالتنقل بين الازرار ادناه.`,ephemeral:true,components: [row]})
const filter = (i) =>
i.customId === 'pause' ||
i.customId === 'stop' ||
i.customId === 'resume'
const collector = interaction.channel.createMessageComponentCollector({filter});

collector.on('collect', async (i) => {
if (i.customId === 'pause') {
  player.pause();
  await i.update({ content: 'تم إيقاف الصوت', components: [row] });
} else if (i.customId === 'stop') {
  player.stop();
  await i.update({ content: 'تم تعطيل الصوت', components: [row] });
} else if (i.customId === 'resume') {
  player.unpause();
  await i.update({ content: 'تم اعاده تشغيل الصوت', components: [row] });
}
});
}
if (th4 === '78') {
const connection = joinVoiceChannel({
channelId: interaction.member.voice.channel.id,
guildId: interaction.guild.id,
adapterCreator: interaction.guild.voiceAdapterCreator,
});
const player = createAudioPlayer();
const resource = createAudioResource('https://server8.mp3quran.net/afs/078.mp3');
player.play(resource);
connection.subscribe(player)
  const resumeButton = new Discord.ButtonBuilder()
  .setCustomId('resume')
  .setLabel('Resume')       
  .setEmoji("▶️")  
  .setStyle(Discord.ButtonStyle.Primary);
  
  const pauseButton = new Discord.ButtonBuilder()
    .setCustomId('pause')
    .setLabel('Pause')
    .setEmoji('⏸️')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const stopButton = new Discord.ButtonBuilder()
    .setCustomId('stop')
    .setLabel('Stop')
    .setEmoji('🛑')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const row = new Discord.ActionRowBuilder().addComponents(
    resumeButton,
    pauseButton,
    stopButton,
  );
interaction.reply({content:`تم تشغيل سوره **النبأ** في روم صوتي${interaction.member.voice.channel}
- لايقاف او استكمال التشغيل قم بالتنقل بين الازرار ادناه.`,ephemeral:true,components: [row]})
const filter = (i) =>
i.customId === 'pause' ||
i.customId === 'stop' ||
i.customId === 'resume'
const collector = interaction.channel.createMessageComponentCollector({filter});

collector.on('collect', async (i) => {
if (i.customId === 'pause') {
  player.pause();
  await i.update({ content: 'تم إيقاف الصوت', components: [row] });
} else if (i.customId === 'stop') {
  player.stop();
  await i.update({ content: 'تم تعطيل الصوت', components: [row] });
} else if (i.customId === 'resume') {
  player.unpause();
  await i.update({ content: 'تم اعاده تشغيل الصوت', components: [row] });
}
});
}
if (th4 === '79') {
const connection = joinVoiceChannel({
channelId: interaction.member.voice.channel.id,
guildId: interaction.guild.id,
adapterCreator: interaction.guild.voiceAdapterCreator,
});
const player = createAudioPlayer();
const resource = createAudioResource('https://server8.mp3quran.net/afs/079.mp3');
player.play(resource);
connection.subscribe(player)
  const resumeButton = new Discord.ButtonBuilder()
  .setCustomId('resume')
  .setLabel('Resume')       
  .setEmoji("▶️")  
  .setStyle(Discord.ButtonStyle.Primary);
  
  const pauseButton = new Discord.ButtonBuilder()
    .setCustomId('pause')
    .setLabel('Pause')
    .setEmoji('⏸️')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const stopButton = new Discord.ButtonBuilder()
    .setCustomId('stop')
    .setLabel('Stop')
    .setEmoji('🛑')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const row = new Discord.ActionRowBuilder().addComponents(
    resumeButton,
    pauseButton,
    stopButton,
  );
interaction.reply({content:`تم تشغيل سوره **النازعات** في روم صوتي${interaction.member.voice.channel}
- لايقاف او استكمال التشغيل قم بالتنقل بين الازرار ادناه.`,ephemeral:true,components: [row]})
const filter = (i) =>
i.customId === 'pause' ||
i.customId === 'stop' ||
i.customId === 'resume'
const collector = interaction.channel.createMessageComponentCollector({filter});

collector.on('collect', async (i) => {
if (i.customId === 'pause') {
  player.pause();
  await i.update({ content: 'تم إيقاف الصوت', components: [row] });
} else if (i.customId === 'stop') {
  player.stop();
  await i.update({ content: 'تم تعطيل الصوت', components: [row] });
} else if (i.customId === 'resume') {
  player.unpause();
  await i.update({ content: 'تم اعاده تشغيل الصوت', components: [row] });
}
});
}
if (th4 === '80') {
const connection = joinVoiceChannel({
channelId: interaction.member.voice.channel.id,
guildId: interaction.guild.id,
adapterCreator: interaction.guild.voiceAdapterCreator,
});
const player = createAudioPlayer();
const resource = createAudioResource('https://server8.mp3quran.net/afs/080.mp3');
player.play(resource);
connection.subscribe(player)
  const resumeButton = new Discord.ButtonBuilder()
  .setCustomId('resume')
  .setLabel('Resume')       
  .setEmoji("▶️")  
  .setStyle(Discord.ButtonStyle.Primary);
  
  const pauseButton = new Discord.ButtonBuilder()
    .setCustomId('pause')
    .setLabel('Pause')
    .setEmoji('⏸️')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const stopButton = new Discord.ButtonBuilder()
    .setCustomId('stop')
    .setLabel('Stop')
    .setEmoji('🛑')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const row = new Discord.ActionRowBuilder().addComponents(
    resumeButton,
    pauseButton,
    stopButton,
  );
interaction.reply({content:`تم تشغيل سوره **عبس** في روم صوتي${interaction.member.voice.channel}
- لايقاف او استكمال التشغيل قم بالتنقل بين الازرار ادناه.`,ephemeral:true,components: [row]})
const filter = (i) =>
i.customId === 'pause' ||
i.customId === 'stop' ||
i.customId === 'resume'
const collector = interaction.channel.createMessageComponentCollector({filter});

collector.on('collect', async (i) => {
if (i.customId === 'pause') {
  player.pause();
  await i.update({ content: 'تم إيقاف الصوت', components: [row] });
} else if (i.customId === 'stop') {
  player.stop();
  await i.update({ content: 'تم تعطيل الصوت', components: [row] });
} else if (i.customId === 'resume') {
  player.unpause();
  await i.update({ content: 'تم اعاده تشغيل الصوت', components: [row] });
}
});
}
if (th4 === '81') {
const connection = joinVoiceChannel({
channelId: interaction.member.voice.channel.id,
guildId: interaction.guild.id,
adapterCreator: interaction.guild.voiceAdapterCreator,
});
const player = createAudioPlayer();
const resource = createAudioResource('https://server8.mp3quran.net/afs/081.mp3');
player.play(resource);
connection.subscribe(player)
  const resumeButton = new Discord.ButtonBuilder()
  .setCustomId('resume')
  .setLabel('Resume')       
  .setEmoji("▶️")  
  .setStyle(Discord.ButtonStyle.Primary);
  
  const pauseButton = new Discord.ButtonBuilder()
    .setCustomId('pause')
    .setLabel('Pause')
    .setEmoji('⏸️')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const stopButton = new Discord.ButtonBuilder()
    .setCustomId('stop')
    .setLabel('Stop')
    .setEmoji('🛑')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const row = new Discord.ActionRowBuilder().addComponents(
    resumeButton,
    pauseButton,
    stopButton,
  );
interaction.reply({content:`تم تشغيل سوره **التكوير** في روم صوتي${interaction.member.voice.channel}
- لايقاف او استكمال التشغيل قم بالتنقل بين الازرار ادناه.`,ephemeral:true,components: [row]})
const filter = (i) =>
i.customId === 'pause' ||
i.customId === 'stop' ||
i.customId === 'resume'
const collector = interaction.channel.createMessageComponentCollector({filter});

collector.on('collect', async (i) => {
if (i.customId === 'pause') {
  player.pause();
  await i.update({ content: 'تم إيقاف الصوت', components: [row] });
} else if (i.customId === 'stop') {
  player.stop();
  await i.update({ content: 'تم تعطيل الصوت', components: [row] });
} else if (i.customId === 'resume') {
  player.unpause();
  await i.update({ content: 'تم اعاده تشغيل الصوت', components: [row] });
}
});
}
if (th4 === '82') {
const connection = joinVoiceChannel({
channelId: interaction.member.voice.channel.id,
guildId: interaction.guild.id,
adapterCreator: interaction.guild.voiceAdapterCreator,
});
const player = createAudioPlayer();
const resource = createAudioResource('https://server8.mp3quran.net/afs/082.mp3');
player.play(resource);
connection.subscribe(player)
  const resumeButton = new Discord.ButtonBuilder()
  .setCustomId('resume')
  .setLabel('Resume')       
  .setEmoji("▶️")  
  .setStyle(Discord.ButtonStyle.Primary);
  
  const pauseButton = new Discord.ButtonBuilder()
    .setCustomId('pause')
    .setLabel('Pause')
    .setEmoji('⏸️')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const stopButton = new Discord.ButtonBuilder()
    .setCustomId('stop')
    .setLabel('Stop')
    .setEmoji('🛑')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const row = new Discord.ActionRowBuilder().addComponents(
    resumeButton,
    pauseButton,
    stopButton,
  );
interaction.reply({content:`تم تشغيل سوره **الانفطار** في روم صوتي${interaction.member.voice.channel}
- لايقاف او استكمال التشغيل قم بالتنقل بين الازرار ادناه.`,ephemeral:true,components: [row]})
const filter = (i) =>
i.customId === 'pause' ||
i.customId === 'stop' ||
i.customId === 'resume'
const collector = interaction.channel.createMessageComponentCollector({filter});

collector.on('collect', async (i) => {
if (i.customId === 'pause') {
  player.pause();
  await i.update({ content: 'تم إيقاف الصوت', components: [row] });
} else if (i.customId === 'stop') {
  player.stop();
  await i.update({ content: 'تم تعطيل الصوت', components: [row] });
} else if (i.customId === 'resume') {
  player.unpause();
  await i.update({ content: 'تم اعاده تشغيل الصوت', components: [row] });
}
});
}
if (th4 === '83') {
const connection = joinVoiceChannel({
channelId: interaction.member.voice.channel.id,
guildId: interaction.guild.id,
adapterCreator: interaction.guild.voiceAdapterCreator,
});
const player = createAudioPlayer();
const resource = createAudioResource('https://server8.mp3quran.net/afs/083.mp3');
player.play(resource);
connection.subscribe(player)
const resumeButton = new Discord.ButtonBuilder()
.setCustomId('resume')
.setLabel('Resume')       
.setEmoji("▶️")  
.setStyle(Discord.ButtonStyle.Primary);

const pauseButton = new Discord.ButtonBuilder()
  .setCustomId('pause')
  .setLabel('Pause')
  .setEmoji('⏸️')
  .setStyle(Discord.ButtonStyle.Danger);

const stopButton = new Discord.ButtonBuilder()
  .setCustomId('stop')
  .setLabel('Stop')
  .setEmoji('🛑')
  .setStyle(Discord.ButtonStyle.Danger);

const row = new Discord.ActionRowBuilder().addComponents(
  resumeButton,
  pauseButton,
  stopButton,
);
interaction.reply({content:`تم تشغيل سوره **المطففين** في روم صوتي${interaction.member.voice.channel}
- لايقاف او استكمال التشغيل قم بالتنقل بين الازرار ادناه.`,ephemeral:true,components: [row]})
const filter = (i) =>
i.customId === 'pause' ||
i.customId === 'stop' ||
i.customId === 'resume'
const collector = interaction.channel.createMessageComponentCollector({filter});

collector.on('collect', async (i) => {
if (i.customId === 'pause') {
  player.pause();
  await i.update({ content: 'تم إيقاف الصوت', components: [row] });
} else if (i.customId === 'stop') {
  player.stop();
  await i.update({ content: 'تم تعطيل الصوت', components: [row] });
} else if (i.customId === 'resume') {
  player.unpause();
  await i.update({ content: 'تم اعاده تشغيل الصوت', components: [row] });
}
});
}
if (th4 === '84') {
const connection = joinVoiceChannel({
channelId: interaction.member.voice.channel.id,
guildId: interaction.guild.id,
adapterCreator: interaction.guild.voiceAdapterCreator,
});
const player = createAudioPlayer();
const resource = createAudioResource('https://server8.mp3quran.net/afs/084.mp3');
player.play(resource);
connection.subscribe(player)
  const resumeButton = new Discord.ButtonBuilder()
  .setCustomId('resume')
  .setLabel('Resume')       
  .setEmoji("▶️")  
  .setStyle(Discord.ButtonStyle.Primary);
  
  const pauseButton = new Discord.ButtonBuilder()
    .setCustomId('pause')
    .setLabel('Pause')
    .setEmoji('⏸️')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const stopButton = new Discord.ButtonBuilder()
    .setCustomId('stop')
    .setLabel('Stop')
    .setEmoji('🛑')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const row = new Discord.ActionRowBuilder().addComponents(
    resumeButton,
    pauseButton,
    stopButton,
  );
interaction.reply({content:`تم تشغيل سوره **الانشقاق** في روم صوتي${interaction.member.voice.channel}
- لايقاف او استكمال التشغيل قم بالتنقل بين الازرار ادناه.`,ephemeral:true,components: [row]})
const filter = (i) =>
i.customId === 'pause' ||
i.customId === 'stop' ||
i.customId === 'resume'
const collector = interaction.channel.createMessageComponentCollector({filter});

collector.on('collect', async (i) => {
if (i.customId === 'pause') {
  player.pause();
  await i.update({ content: 'تم إيقاف الصوت', components: [row] });
} else if (i.customId === 'stop') {
  player.stop();
  await i.update({ content: 'تم تعطيل الصوت', components: [row] });
} else if (i.customId === 'resume') {
  player.unpause();
  await i.update({ content: 'تم اعاده تشغيل الصوت', components: [row] });
}
});
}
if (th4 === '85') {
const connection = joinVoiceChannel({
channelId: interaction.member.voice.channel.id,
guildId: interaction.guild.id,
adapterCreator: interaction.guild.voiceAdapterCreator,
});
const player = createAudioPlayer();
const resource = createAudioResource('https://server8.mp3quran.net/afs/085.mp3');
player.play(resource);
connection.subscribe(player)
  const resumeButton = new Discord.ButtonBuilder()
  .setCustomId('resume')
  .setLabel('Resume')       
  .setEmoji("▶️")  
  .setStyle(Discord.ButtonStyle.Primary);
  
  const pauseButton = new Discord.ButtonBuilder()
    .setCustomId('pause')
    .setLabel('Pause')
    .setEmoji('⏸️')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const stopButton = new Discord.ButtonBuilder()
    .setCustomId('stop')
    .setLabel('Stop')
    .setEmoji('🛑')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const row = new Discord.ActionRowBuilder().addComponents(
    resumeButton,
    pauseButton,
    stopButton,
  );
interaction.reply({content:`تم تشغيل سوره **البروج** في روم صوتي${interaction.member.voice.channel}
- لايقاف او استكمال التشغيل قم بالتنقل بين الازرار ادناه.`,ephemeral:true,components: [row]})
const filter = (i) =>
i.customId === 'pause' ||
i.customId === 'stop' ||
i.customId === 'resume'
const collector = interaction.channel.createMessageComponentCollector({filter});

collector.on('collect', async (i) => {
if (i.customId === 'pause') {
  player.pause();
  await i.update({ content: 'تم إيقاف الصوت', components: [row] });
} else if (i.customId === 'stop') {
  player.stop();
  await i.update({ content: 'تم تعطيل الصوت', components: [row] });
} else if (i.customId === 'resume') {
  player.unpause();
  await i.update({ content: 'تم اعاده تشغيل الصوت', components: [row] });
}
});
}
if (th4 === '86') {
const connection = joinVoiceChannel({
channelId: interaction.member.voice.channel.id,
guildId: interaction.guild.id,
adapterCreator: interaction.guild.voiceAdapterCreator,
});
const player = createAudioPlayer();
const resource = createAudioResource('https://server8.mp3quran.net/afs/086.mp3');
player.play(resource);
connection.subscribe(player)
  const resumeButton = new Discord.ButtonBuilder()
  .setCustomId('resume')
  .setLabel('Resume')       
  .setEmoji("▶️")  
  .setStyle(Discord.ButtonStyle.Primary);
  
  const pauseButton = new Discord.ButtonBuilder()
    .setCustomId('pause')
    .setLabel('Pause')
    .setEmoji('⏸️')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const stopButton = new Discord.ButtonBuilder()
    .setCustomId('stop')
    .setLabel('Stop')
    .setEmoji('🛑')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const row = new Discord.ActionRowBuilder().addComponents(
    resumeButton,
    pauseButton,
    stopButton,
  );
interaction.reply({content:`تم تشغيل سوره **الطارق** في روم صوتي${interaction.member.voice.channel}
- لايقاف او استكمال التشغيل قم بالتنقل بين الازرار ادناه.`,ephemeral:true,components: [row]})
const filter = (i) =>
i.customId === 'pause' ||
i.customId === 'stop' ||
i.customId === 'resume'
const collector = interaction.channel.createMessageComponentCollector({filter});

collector.on('collect', async (i) => {
if (i.customId === 'pause') {
  player.pause();
  await i.update({ content: 'تم إيقاف الصوت', components: [row] });
} else if (i.customId === 'stop') {
  player.stop();
  await i.update({ content: 'تم تعطيل الصوت', components: [row] });
} else if (i.customId === 'resume') {
  player.unpause();
  await i.update({ content: 'تم اعاده تشغيل الصوت', components: [row] });
}
});
}
if (th4 === '87') {
const connection = joinVoiceChannel({
channelId: interaction.member.voice.channel.id,
guildId: interaction.guild.id,
adapterCreator: interaction.guild.voiceAdapterCreator,
});
const player = createAudioPlayer();
const resource = createAudioResource('https://server8.mp3quran.net/afs/087.mp3');
player.play(resource);
connection.subscribe(player)
  const resumeButton = new Discord.ButtonBuilder()
  .setCustomId('resume')
  .setLabel('Resume')       
  .setEmoji("▶️")  
  .setStyle(Discord.ButtonStyle.Primary);
  
  const pauseButton = new Discord.ButtonBuilder()
    .setCustomId('pause')
    .setLabel('Pause')
    .setEmoji('⏸️')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const stopButton = new Discord.ButtonBuilder()
    .setCustomId('stop')
    .setLabel('Stop')
    .setEmoji('🛑')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const row = new Discord.ActionRowBuilder().addComponents(
    resumeButton,
    pauseButton,
    stopButton,
  );
interaction.reply({content:`تم تشغيل سوره **الأعلى** في روم صوتي${interaction.member.voice.channel}
- لايقاف او استكمال التشغيل قم بالتنقل بين الازرار ادناه.`,ephemeral:true,components: [row]})
const filter = (i) =>
i.customId === 'pause' ||
i.customId === 'stop' ||
i.customId === 'resume'
const collector = interaction.channel.createMessageComponentCollector({filter});

collector.on('collect', async (i) => {
if (i.customId === 'pause') {
  player.pause();
  await i.update({ content: 'تم إيقاف الصوت', components: [row] });
} else if (i.customId === 'stop') {
  player.stop();
  await i.update({ content: 'تم تعطيل الصوت', components: [row] });
} else if (i.customId === 'resume') {
  player.unpause();
  await i.update({ content: 'تم اعاده تشغيل الصوت', components: [row] });
}
});
}
if (th4 === '88') {
const connection = joinVoiceChannel({
channelId: interaction.member.voice.channel.id,
guildId: interaction.guild.id,
adapterCreator: interaction.guild.voiceAdapterCreator,
});
const player = createAudioPlayer();
const resource = createAudioResource('https://server8.mp3quran.net/afs/088.mp3');
player.play(resource);
connection.subscribe(player)
  const resumeButton = new Discord.ButtonBuilder()
  .setCustomId('resume')
  .setLabel('Resume')       
  .setEmoji("▶️")  
  .setStyle(Discord.ButtonStyle.Primary);
  
  const pauseButton = new Discord.ButtonBuilder()
    .setCustomId('pause')
    .setLabel('Pause')
    .setEmoji('⏸️')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const stopButton = new Discord.ButtonBuilder()
    .setCustomId('stop')
    .setLabel('Stop')
    .setEmoji('🛑')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const row = new Discord.ActionRowBuilder().addComponents(
    resumeButton,
    pauseButton,
    stopButton,
  );
interaction.reply({content:`تم تشغيل سوره **الغاشية** في روم صوتي${interaction.member.voice.channel}
- لايقاف او استكمال التشغيل قم بالتنقل بين الازرار ادناه.`,ephemeral:true,components: [row]})
const filter = (i) =>
i.customId === 'pause' ||
i.customId === 'stop' ||
i.customId === 'resume'
const collector = interaction.channel.createMessageComponentCollector({filter});

collector.on('collect', async (i) => {
if (i.customId === 'pause') {
  player.pause();
  await i.update({ content: 'تم إيقاف الصوت', components: [row] });
} else if (i.customId === 'stop') {
  player.stop();
  await i.update({ content: 'تم تعطيل الصوت', components: [row] });
} else if (i.customId === 'resume') {
  player.unpause();
  await i.update({ content: 'تم اعاده تشغيل الصوت', components: [row] });
}
});
}
if (th4 === '89') {
const connection = joinVoiceChannel({
channelId: interaction.member.voice.channel.id,
guildId: interaction.guild.id,
adapterCreator: interaction.guild.voiceAdapterCreator,
});
const player = createAudioPlayer();
const resource = createAudioResource('https://server8.mp3quran.net/afs/089.mp3');
player.play(resource);
connection.subscribe(player)
const resumeButton = new Discord.ButtonBuilder()
.setCustomId('resume')
.setLabel('Resume')       
.setEmoji("▶️")  
.setStyle(Discord.ButtonStyle.Primary);

const pauseButton = new Discord.ButtonBuilder()
  .setCustomId('pause')
  .setLabel('Pause')
  .setEmoji('⏸️')
  .setStyle(Discord.ButtonStyle.Danger);

const stopButton = new Discord.ButtonBuilder()
  .setCustomId('stop')
  .setLabel('Stop')
  .setEmoji('🛑')
  .setStyle(Discord.ButtonStyle.Danger);

const row = new Discord.ActionRowBuilder().addComponents(
  resumeButton,
  pauseButton,
  stopButton,
);
interaction.reply({content:`تم تشغيل سوره **الفجر** في روم صوتي${interaction.member.voice.channel}
- لايقاف او استكمال التشغيل قم بالتنقل بين الازرار ادناه.`,ephemeral:true,components: [row]})
const filter = (i) =>
i.customId === 'pause' ||
i.customId === 'stop' ||
i.customId === 'resume'
const collector = interaction.channel.createMessageComponentCollector({filter});

collector.on('collect', async (i) => {
if (i.customId === 'pause') {
  player.pause();
  await i.update({ content: 'تم إيقاف الصوت', components: [row] });
} else if (i.customId === 'stop') {
  player.stop();
  await i.update({ content: 'تم تعطيل الصوت', components: [row] });
} else if (i.customId === 'resume') {
  player.unpause();
  await i.update({ content: 'تم اعاده تشغيل الصوت', components: [row] });
}
});
}
if (th4 === '90') {
const connection = joinVoiceChannel({
channelId: interaction.member.voice.channel.id,
guildId: interaction.guild.id,
adapterCreator: interaction.guild.voiceAdapterCreator,
});
const player = createAudioPlayer();
const resource = createAudioResource('https://server8.mp3quran.net/afs/090.mp3');
player.play(resource);
connection.subscribe(player)
  const resumeButton = new Discord.ButtonBuilder()
  .setCustomId('resume')
  .setLabel('Resume')       
  .setEmoji("▶️")  
  .setStyle(Discord.ButtonStyle.Primary);
  
  const pauseButton = new Discord.ButtonBuilder()
    .setCustomId('pause')
    .setLabel('Pause')
    .setEmoji('⏸️')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const stopButton = new Discord.ButtonBuilder()
    .setCustomId('stop')
    .setLabel('Stop')
    .setEmoji('🛑')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const row = new Discord.ActionRowBuilder().addComponents(
    resumeButton,
    pauseButton,
    stopButton,
  );
interaction.reply({content:`تم تشغيل سوره **البلد** في روم صوتي${interaction.member.voice.channel}
- لايقاف او استكمال التشغيل قم بالتنقل بين الازرار ادناه.`,ephemeral:true,components: [row]})
const filter = (i) =>
i.customId === 'pause' ||
i.customId === 'stop' ||
i.customId === 'resume'
const collector = interaction.channel.createMessageComponentCollector({filter});

collector.on('collect', async (i) => {
if (i.customId === 'pause') {
  player.pause();
  await i.update({ content: 'تم إيقاف الصوت', components: [row] });
} else if (i.customId === 'stop') {
  player.stop();
  await i.update({ content: 'تم تعطيل الصوت', components: [row] });
} else if (i.customId === 'resume') {
  player.unpause();
  await i.update({ content: 'تم اعاده تشغيل الصوت', components: [row] });
}
});
}
if (th4 === '91') {
const connection = joinVoiceChannel({
channelId: interaction.member.voice.channel.id,
guildId: interaction.guild.id,
adapterCreator: interaction.guild.voiceAdapterCreator,
});
const player = createAudioPlayer();
const resource = createAudioResource('https://server8.mp3quran.net/afs/091.mp3');
player.play(resource);
connection.subscribe(player)
const resumeButton = new Discord.ButtonBuilder()
.setCustomId('resume')
.setLabel('Resume')       
.setEmoji("▶️")  
.setStyle(Discord.ButtonStyle.Primary);

const pauseButton = new Discord.ButtonBuilder()
  .setCustomId('pause')
  .setLabel('Pause')
  .setEmoji('⏸️')
  .setStyle(Discord.ButtonStyle.Danger);

const stopButton = new Discord.ButtonBuilder()
  .setCustomId('stop')
  .setLabel('Stop')
  .setEmoji('🛑')
  .setStyle(Discord.ButtonStyle.Danger);

const row = new Discord.ActionRowBuilder().addComponents(
  resumeButton,
  pauseButton,
  stopButton,
);
interaction.reply({content:`تم تشغيل سوره **الشمس** في روم صوتي${interaction.member.voice.channel}
- لايقاف او استكمال التشغيل قم بالتنقل بين الازرار ادناه.`,ephemeral:true,components: [row]})
const filter = (i) =>
i.customId === 'pause' ||
i.customId === 'stop' ||
i.customId === 'resume'
const collector = interaction.channel.createMessageComponentCollector({filter});

collector.on('collect', async (i) => {
if (i.customId === 'pause') {
  player.pause();
  await i.update({ content: 'تم إيقاف الصوت', components: [row] });
} else if (i.customId === 'stop') {
  player.stop();
  await i.update({ content: 'تم تعطيل الصوت', components: [row] });
} else if (i.customId === 'resume') {
  player.unpause();
  await i.update({ content: 'تم اعاده تشغيل الصوت', components: [row] });
}
});
}
if (th4 === '92') {
const connection = joinVoiceChannel({
channelId: interaction.member.voice.channel.id,
guildId: interaction.guild.id,
adapterCreator: interaction.guild.voiceAdapterCreator,
});
const player = createAudioPlayer();
const resource = createAudioResource('https://server8.mp3quran.net/afs/092.mp3');
player.play(resource);
connection.subscribe(player)
  const resumeButton = new Discord.ButtonBuilder()
  .setCustomId('resume')
  .setLabel('Resume')       
  .setEmoji("▶️")  
  .setStyle(Discord.ButtonStyle.Primary);
  
  const pauseButton = new Discord.ButtonBuilder()
    .setCustomId('pause')
    .setLabel('Pause')
    .setEmoji('⏸️')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const stopButton = new Discord.ButtonBuilder()
    .setCustomId('stop')
    .setLabel('Stop')
    .setEmoji('🛑')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const row = new Discord.ActionRowBuilder().addComponents(
    resumeButton,
    pauseButton,
    stopButton,
  );
interaction.reply({content:`تم تشغيل سوره **اليل** في روم صوتي${interaction.member.voice.channel}
- لايقاف او استكمال التشغيل قم بالتنقل بين الازرار ادناه.`,ephemeral:true,components: [row]})
const filter = (i) =>
i.customId === 'pause' ||
i.customId === 'stop' ||
i.customId === 'resume'
const collector = interaction.channel.createMessageComponentCollector({filter});

collector.on('collect', async (i) => {
if (i.customId === 'pause') {
  player.pause();
  await i.update({ content: 'تم إيقاف الصوت', components: [row] });
} else if (i.customId === 'stop') {
  player.stop();
  await i.update({ content: 'تم تعطيل الصوت', components: [row] });
} else if (i.customId === 'resume') {
  player.unpause();
  await i.update({ content: 'تم اعاده تشغيل الصوت', components: [row] });
}
});
}
if (th4 === '93') {
const connection = joinVoiceChannel({
channelId: interaction.member.voice.channel.id,
guildId: interaction.guild.id,
adapterCreator: interaction.guild.voiceAdapterCreator,
});
const player = createAudioPlayer();
const resource = createAudioResource('https://server8.mp3quran.net/afs/093.mp3');
player.play(resource);
connection.subscribe(player)
  const resumeButton = new Discord.ButtonBuilder()
  .setCustomId('resume')
  .setLabel('Resume')       
  .setEmoji("▶️")  
  .setStyle(Discord.ButtonStyle.Primary);
  
  const pauseButton = new Discord.ButtonBuilder()
    .setCustomId('pause')
    .setLabel('Pause')
    .setEmoji('⏸️')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const stopButton = new Discord.ButtonBuilder()
    .setCustomId('stop')
    .setLabel('Stop')
    .setEmoji('🛑')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const row = new Discord.ActionRowBuilder().addComponents(
    resumeButton,
    pauseButton,
    stopButton,
  );
interaction.reply({content:`تم تشغيل سوره **الضحي** في روم صوتي${interaction.member.voice.channel}
- لايقاف او استكمال التشغيل قم بالتنقل بين الازرار ادناه.`,ephemeral:true,components: [row]})
const filter = (i) =>
i.customId === 'pause' ||
i.customId === 'stop' ||
i.customId === 'resume'
const collector = interaction.channel.createMessageComponentCollector({filter});

collector.on('collect', async (i) => {
if (i.customId === 'pause') {
  player.pause();
  await i.update({ content: 'تم إيقاف الصوت', components: [row] });
} else if (i.customId === 'stop') {
  player.stop();
  await i.update({ content: 'تم تعطيل الصوت', components: [row] });
} else if (i.customId === 'resume') {
  player.unpause();
  await i.update({ content: 'تم اعاده تشغيل الصوت', components: [row] });
}
});
}
if (th4 === '94') {
const connection = joinVoiceChannel({
channelId: interaction.member.voice.channel.id,
guildId: interaction.guild.id,
adapterCreator: interaction.guild.voiceAdapterCreator,
});
const player = createAudioPlayer();
const resource = createAudioResource('https://server8.mp3quran.net/afs/094.mp3');
player.play(resource);
connection.subscribe(player)
  const resumeButton = new Discord.ButtonBuilder()
  .setCustomId('resume')
  .setLabel('Resume')       
  .setEmoji("▶️")  
  .setStyle(Discord.ButtonStyle.Primary);
  
  const pauseButton = new Discord.ButtonBuilder()
    .setCustomId('pause')
    .setLabel('Pause')
    .setEmoji('⏸️')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const stopButton = new Discord.ButtonBuilder()
    .setCustomId('stop')
    .setLabel('Stop')
    .setEmoji('🛑')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const row = new Discord.ActionRowBuilder().addComponents(
    resumeButton,
    pauseButton,
    stopButton,
  );
interaction.reply({content:`تم تشغيل سوره **الشرح** في روم صوتي${interaction.member.voice.channel}
- لايقاف او استكمال التشغيل قم بالتنقل بين الازرار ادناه.`,ephemeral:true,components: [row]})
const filter = (i) =>
i.customId === 'pause' ||
i.customId === 'stop' ||
i.customId === 'resume'
const collector = interaction.channel.createMessageComponentCollector({filter});

collector.on('collect', async (i) => {
if (i.customId === 'pause') {
  player.pause();
  await i.update({ content: 'تم إيقاف الصوت', components: [row] });
} else if (i.customId === 'stop') {
  player.stop();
  await i.update({ content: 'تم تعطيل الصوت', components: [row] });
} else if (i.customId === 'resume') {
  player.unpause();
  await i.update({ content: 'تم اعاده تشغيل الصوت', components: [row] });
}
});
}
if (th4 === '95') {
const connection = joinVoiceChannel({
channelId: interaction.member.voice.channel.id,
guildId: interaction.guild.id,
adapterCreator: interaction.guild.voiceAdapterCreator,
});
const player = createAudioPlayer();
const resource = createAudioResource('https://server8.mp3quran.net/afs/095.mp3');
player.play(resource);
connection.subscribe(player)
  const resumeButton = new Discord.ButtonBuilder()
  .setCustomId('resume')
  .setLabel('Resume')       
  .setEmoji("▶️")  
  .setStyle(Discord.ButtonStyle.Primary);
  
  const pauseButton = new Discord.ButtonBuilder()
    .setCustomId('pause')
    .setLabel('Pause')
    .setEmoji('⏸️')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const stopButton = new Discord.ButtonBuilder()
    .setCustomId('stop')
    .setLabel('Stop')
    .setEmoji('🛑')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const row = new Discord.ActionRowBuilder().addComponents(
    resumeButton,
    pauseButton,
    stopButton,
  );
interaction.reply({content:`تم تشغيل سوره **التين** في روم صوتي${interaction.member.voice.channel}
- لايقاف او استكمال التشغيل قم بالتنقل بين الازرار ادناه.`,ephemeral:true,components: [row]})
const filter = (i) =>
i.customId === 'pause' ||
i.customId === 'stop' ||
i.customId === 'resume'
const collector = interaction.channel.createMessageComponentCollector({filter});

collector.on('collect', async (i) => {
if (i.customId === 'pause') {
  player.pause();
  await i.update({ content: 'تم إيقاف الصوت', components: [row] });
} else if (i.customId === 'stop') {
  player.stop();
  await i.update({ content: 'تم تعطيل الصوت', components: [row] });
} else if (i.customId === 'resume') {
  player.unpause();
  await i.update({ content: 'تم اعاده تشغيل الصوت', components: [row] });
}
});
}
if (th4 === '96') {
const connection = joinVoiceChannel({
channelId: interaction.member.voice.channel.id,
guildId: interaction.guild.id,
adapterCreator: interaction.guild.voiceAdapterCreator,
});
const player = createAudioPlayer();
const resource = createAudioResource('https://server8.mp3quran.net/afs/096.mp3');
player.play(resource);
connection.subscribe(player)
  const resumeButton = new Discord.ButtonBuilder()
  .setCustomId('resume')
  .setLabel('Resume')       
  .setEmoji("▶️")  
  .setStyle(Discord.ButtonStyle.Primary);
  
  const pauseButton = new Discord.ButtonBuilder()
    .setCustomId('pause')
    .setLabel('Pause')
    .setEmoji('⏸️')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const stopButton = new Discord.ButtonBuilder()
    .setCustomId('stop')
    .setLabel('Stop')
    .setEmoji('🛑')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const row = new Discord.ActionRowBuilder().addComponents(
    resumeButton,
    pauseButton,
    stopButton,
  );
interaction.reply({content:`تم تشغيل سوره **العلق** في روم صوتي${interaction.member.voice.channel}
- لايقاف او استكمال التشغيل قم بالتنقل بين الازرار ادناه.`,ephemeral:true,components: [row]})
const filter = (i) =>
i.customId === 'pause' ||
i.customId === 'stop' ||
i.customId === 'resume'
const collector = interaction.channel.createMessageComponentCollector({filter});

collector.on('collect', async (i) => {
if (i.customId === 'pause') {
  player.pause();
  await i.update({ content: 'تم إيقاف الصوت', components: [row] });
} else if (i.customId === 'stop') {
  player.stop();
  await i.update({ content: 'تم تعطيل الصوت', components: [row] });
} else if (i.customId === 'resume') {
  player.unpause();
  await i.update({ content: 'تم اعاده تشغيل الصوت', components: [row] });
}
});
}
if (th4 === '97') {
const connection = joinVoiceChannel({
channelId: interaction.member.voice.channel.id,
guildId: interaction.guild.id,
adapterCreator: interaction.guild.voiceAdapterCreator,
});
const player = createAudioPlayer();
const resource = createAudioResource('https://server8.mp3quran.net/afs/097.mp3');
player.play(resource);
connection.subscribe(player)
const resumeButton = new Discord.ButtonBuilder()
.setCustomId('resume')
.setLabel('Resume')       
.setEmoji("▶️")  
.setStyle(Discord.ButtonStyle.Primary);

const pauseButton = new Discord.ButtonBuilder()
  .setCustomId('pause')
  .setLabel('Pause')
  .setEmoji('⏸️')
  .setStyle(Discord.ButtonStyle.Danger);

const stopButton = new Discord.ButtonBuilder()
  .setCustomId('stop')
  .setLabel('Stop')
  .setEmoji('🛑')
  .setStyle(Discord.ButtonStyle.Danger);

const row = new Discord.ActionRowBuilder().addComponents(
  resumeButton,
  pauseButton,
  stopButton,
);
interaction.reply({content:`تم تشغيل سوره **القدر** في روم صوتي${interaction.member.voice.channel}
- لايقاف او استكمال التشغيل قم بالتنقل بين الازرار ادناه.`,ephemeral:true,components: [row]})
const filter = (i) =>
i.customId === 'pause' ||
i.customId === 'stop' ||
i.customId === 'resume'
const collector = interaction.channel.createMessageComponentCollector({filter});

collector.on('collect', async (i) => {
if (i.customId === 'pause') {
  player.pause();
  await i.update({ content: 'تم إيقاف الصوت', components: [row] });
} else if (i.customId === 'stop') {
  player.stop();
  await i.update({ content: 'تم تعطيل الصوت', components: [row] });
} else if (i.customId === 'resume') {
  player.unpause();
  await i.update({ content: 'تم اعاده تشغيل الصوت', components: [row] });
}
});
}
if (th4 === '98') {
const connection = joinVoiceChannel({
channelId: interaction.member.voice.channel.id,
guildId: interaction.guild.id,
adapterCreator: interaction.guild.voiceAdapterCreator,
});
const player = createAudioPlayer();
const resource = createAudioResource('https://server8.mp3quran.net/afs/098.mp3');
player.play(resource);
connection.subscribe(player)
  const resumeButton = new Discord.ButtonBuilder()
  .setCustomId('resume')
  .setLabel('Resume')       
  .setEmoji("▶️")  
  .setStyle(Discord.ButtonStyle.Primary);
  
  const pauseButton = new Discord.ButtonBuilder()
    .setCustomId('pause')
    .setLabel('Pause')
    .setEmoji('⏸️')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const stopButton = new Discord.ButtonBuilder()
    .setCustomId('stop')
    .setLabel('Stop')
    .setEmoji('🛑')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const row = new Discord.ActionRowBuilder().addComponents(
    resumeButton,
    pauseButton,
    stopButton,
  );
interaction.reply({content:`تم تشغيل سوره **البينة** في روم صوتي${interaction.member.voice.channel}
- لايقاف او استكمال التشغيل قم بالتنقل بين الازرار ادناه.`,ephemeral:true,components: [row]})
const filter = (i) =>
i.customId === 'pause' ||
i.customId === 'stop' ||
i.customId === 'resume'
const collector = interaction.channel.createMessageComponentCollector({filter});

collector.on('collect', async (i) => {
if (i.customId === 'pause') {
  player.pause();
  await i.update({ content: 'تم إيقاف الصوت', components: [row] });
} else if (i.customId === 'stop') {
  player.stop();
  await i.update({ content: 'تم تعطيل الصوت', components: [row] });
} else if (i.customId === 'resume') {
  player.unpause();
  await i.update({ content: 'تم اعاده تشغيل الصوت', components: [row] });
}
});
}
if (th4 === '99') {
const connection = joinVoiceChannel({
channelId: interaction.member.voice.channel.id,
guildId: interaction.guild.id,
adapterCreator: interaction.guild.voiceAdapterCreator,
});
const player = createAudioPlayer();
const resource = createAudioResource('https://server8.mp3quran.net/afs/099.mp3');
player.play(resource);
connection.subscribe(player)
  const resumeButton = new Discord.ButtonBuilder()
  .setCustomId('resume')
  .setLabel('Resume')       
  .setEmoji("▶️")  
  .setStyle(Discord.ButtonStyle.Primary);
  
  const pauseButton = new Discord.ButtonBuilder()
    .setCustomId('pause')
    .setLabel('Pause')
    .setEmoji('⏸️')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const stopButton = new Discord.ButtonBuilder()
    .setCustomId('stop')
    .setLabel('Stop')
    .setEmoji('🛑')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const row = new Discord.ActionRowBuilder().addComponents(
    resumeButton,
    pauseButton,
    stopButton,
  );
interaction.reply({content:`تم تشغيل سوره **الزلزلة** في روم صوتي${interaction.member.voice.channel}
- لايقاف او استكمال التشغيل قم بالتنقل بين الازرار ادناه.`,ephemeral:true,components: [row]})
const filter = (i) =>
i.customId === 'pause' ||
i.customId === 'stop' ||
i.customId === 'resume'
const collector = interaction.channel.createMessageComponentCollector({filter});

collector.on('collect', async (i) => {
if (i.customId === 'pause') {
  player.pause();
  await i.update({ content: 'تم إيقاف الصوت', components: [row] });
} else if (i.customId === 'stop') {
  player.stop();
  await i.update({ content: 'تم تعطيل الصوت', components: [row] });
} else if (i.customId === 'resume') {
  player.unpause();
  await i.update({ content: 'تم اعاده تشغيل الصوت', components: [row] });
}
});
}
if (th4 === '100') {
const connection = joinVoiceChannel({
channelId: interaction.member.voice.channel.id,
guildId: interaction.guild.id,
adapterCreator: interaction.guild.voiceAdapterCreator,
});
const player = createAudioPlayer();
const resource = createAudioResource('https://server8.mp3quran.net/afs/100.mp3');
player.play(resource);
connection.subscribe(player)
  const resumeButton = new Discord.ButtonBuilder()
  .setCustomId('resume')
  .setLabel('Resume')       
  .setEmoji("▶️")  
  .setStyle(Discord.ButtonStyle.Primary);
  
  const pauseButton = new Discord.ButtonBuilder()
    .setCustomId('pause')
    .setLabel('Pause')
    .setEmoji('⏸️')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const stopButton = new Discord.ButtonBuilder()
    .setCustomId('stop')
    .setLabel('Stop')
    .setEmoji('🛑')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const row = new Discord.ActionRowBuilder().addComponents(
    resumeButton,
    pauseButton,
    stopButton,
  );
interaction.reply({content:`تم تشغيل سوره **العاديات** في روم صوتي${interaction.member.voice.channel}
- لايقاف او استكمال التشغيل قم بالتنقل بين الازرار ادناه.`,ephemeral:true,components: [row]})
const filter = (i) =>
i.customId === 'pause' ||
i.customId === 'stop' ||
i.customId === 'resume'
const collector = interaction.channel.createMessageComponentCollector({filter});

collector.on('collect', async (i) => {
if (i.customId === 'pause') {
  player.pause();
  await i.update({ content: 'تم إيقاف الصوت', components: [row] });
} else if (i.customId === 'stop') {
  player.stop();
  await i.update({ content: 'تم تعطيل الصوت', components: [row] });
} else if (i.customId === 'resume') {
  player.unpause();
  await i.update({ content: 'تم اعاده تشغيل الصوت', components: [row] });
}
});
}
}
if(interaction.customId === "select5"){
let th5 = interaction.values[0]
if (th5 === '101') {
const connection = joinVoiceChannel({
channelId: interaction.member.voice.channel.id,
guildId: interaction.guild.id,
adapterCreator: interaction.guild.voiceAdapterCreator,
});
const player = createAudioPlayer();
const resource = createAudioResource('https://server8.mp3quran.net/afs/101.mp3');
player.play(resource);
connection.subscribe(player)
  const resumeButton = new Discord.ButtonBuilder()
  .setCustomId('resume')
  .setLabel('Resume')       
  .setEmoji("▶️")  
  .setStyle(Discord.ButtonStyle.Primary);
  
  const pauseButton = new Discord.ButtonBuilder()
    .setCustomId('pause')
    .setLabel('Pause')
    .setEmoji('⏸️')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const stopButton = new Discord.ButtonBuilder()
    .setCustomId('stop')
    .setLabel('Stop')
    .setEmoji('🛑')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const row = new Discord.ActionRowBuilder().addComponents(
    resumeButton,
    pauseButton,
    stopButton,
  );
interaction.reply({content:`تم تشغيل سوره **القارعة** في روم صوتي${interaction.member.voice.channel}
- لايقاف او استكمال التشغيل قم بالتنقل بين الازرار ادناه.`,ephemeral:true,components: [row]})
const filter = (i) =>
i.customId === 'pause' ||
i.customId === 'stop' ||
i.customId === 'resume'
const collector = interaction.channel.createMessageComponentCollector({filter});

collector.on('collect', async (i) => {
if (i.customId === 'pause') {
  player.pause();
  await i.update({ content: 'تم إيقاف الصوت', components: [row] });
} else if (i.customId === 'stop') {
  player.stop();
  await i.update({ content: 'تم تعطيل الصوت', components: [row] });
} else if (i.customId === 'resume') {
  player.unpause();
  await i.update({ content: 'تم اعاده تشغيل الصوت', components: [row] });
}
});
}
if (th5 === '102') {
const connection = joinVoiceChannel({
channelId: interaction.member.voice.channel.id,
guildId: interaction.guild.id,
adapterCreator: interaction.guild.voiceAdapterCreator,
});
const player = createAudioPlayer();
const resource = createAudioResource('https://server8.mp3quran.net/afs/102.mp3');
player.play(resource);
connection.subscribe(player)
  const resumeButton = new Discord.ButtonBuilder()
  .setCustomId('resume')
  .setLabel('Resume')       
  .setEmoji("▶️")  
  .setStyle(Discord.ButtonStyle.Primary);
  
  const pauseButton = new Discord.ButtonBuilder()
    .setCustomId('pause')
    .setLabel('Pause')
    .setEmoji('⏸️')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const stopButton = new Discord.ButtonBuilder()
    .setCustomId('stop')
    .setLabel('Stop')
    .setEmoji('🛑')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const row = new Discord.ActionRowBuilder().addComponents(
    resumeButton,
    pauseButton,
    stopButton,
  );
interaction.reply({content:`تم تشغيل سوره **التكاثر** في روم صوتي${interaction.member.voice.channel}
- لايقاف او استكمال التشغيل قم بالتنقل بين الازرار ادناه.`,ephemeral:true,components: [row]})
const filter = (i) =>
i.customId === 'pause' ||
i.customId === 'stop' ||
i.customId === 'resume'
const collector = interaction.channel.createMessageComponentCollector({filter});

collector.on('collect', async (i) => {
if (i.customId === 'pause') {
  player.pause();
  await i.update({ content: 'تم إيقاف الصوت', components: [row] });
} else if (i.customId === 'stop') {
  player.stop();
  await i.update({ content: 'تم تعطيل الصوت', components: [row] });
} else if (i.customId === 'resume') {
  player.unpause();
  await i.update({ content: 'تم اعاده تشغيل الصوت', components: [row] });
}
});
}
if (th5 === '103') {
const connection = joinVoiceChannel({
channelId: interaction.member.voice.channel.id,
guildId: interaction.guild.id,
adapterCreator: interaction.guild.voiceAdapterCreator,
});
const player = createAudioPlayer();
const resource = createAudioResource('https://server8.mp3quran.net/afs/103.mp3');
player.play(resource);
connection.subscribe(player)
  const resumeButton = new Discord.ButtonBuilder()
  .setCustomId('resume')
  .setLabel('Resume')       
  .setEmoji("▶️")  
  .setStyle(Discord.ButtonStyle.Primary);
  
  const pauseButton = new Discord.ButtonBuilder()
    .setCustomId('pause')
    .setLabel('Pause')
    .setEmoji('⏸️')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const stopButton = new Discord.ButtonBuilder()
    .setCustomId('stop')
    .setLabel('Stop')
    .setEmoji('🛑')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const row = new Discord.ActionRowBuilder().addComponents(
    resumeButton,
    pauseButton,
    stopButton,
  );
interaction.reply({content:`تم تشغيل سوره **العصر** في روم صوتي${interaction.member.voice.channel}
- لايقاف او استكمال التشغيل قم بالتنقل بين الازرار ادناه.`,ephemeral:true,components: [row]})
const filter = (i) =>
i.customId === 'pause' ||
i.customId === 'stop' ||
i.customId === 'resume'
const collector = interaction.channel.createMessageComponentCollector({filter});

collector.on('collect', async (i) => {
if (i.customId === 'pause') {
  player.pause();
  await i.update({ content: 'تم إيقاف الصوت', components: [row] });
} else if (i.customId === 'stop') {
  player.stop();
  await i.update({ content: 'تم تعطيل الصوت', components: [row] });
} else if (i.customId === 'resume') {
  player.unpause();
  await i.update({ content: 'تم اعاده تشغيل الصوت', components: [row] });
}
});
}
if (th5 === '104') {
const connection = joinVoiceChannel({
channelId: interaction.member.voice.channel.id,
guildId: interaction.guild.id,
adapterCreator: interaction.guild.voiceAdapterCreator,
});
const player = createAudioPlayer();
const resource = createAudioResource('https://server8.mp3quran.net/afs/104.mp3');
player.play(resource);
connection.subscribe(player)
  const resumeButton = new Discord.ButtonBuilder()
  .setCustomId('resume')
  .setLabel('Resume')       
  .setEmoji("▶️")  
  .setStyle(Discord.ButtonStyle.Primary);
  
  const pauseButton = new Discord.ButtonBuilder()
    .setCustomId('pause')
    .setLabel('Pause')
    .setEmoji('⏸️')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const stopButton = new Discord.ButtonBuilder()
    .setCustomId('stop')
    .setLabel('Stop')
    .setEmoji('🛑')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const row = new Discord.ActionRowBuilder().addComponents(
    resumeButton,
    pauseButton,
    stopButton,
  );
interaction.reply({content:`تم تشغيل سوره **الهمزة** في روم صوتي${interaction.member.voice.channel}
- لايقاف او استكمال التشغيل قم بالتنقل بين الازرار ادناه.`,ephemeral:true,components: [row]})
const filter = (i) =>
i.customId === 'pause' ||
i.customId === 'stop' ||
i.customId === 'resume'
const collector = interaction.channel.createMessageComponentCollector({filter});

collector.on('collect', async (i) => {
if (i.customId === 'pause') {
  player.pause();
  await i.update({ content: 'تم إيقاف الصوت', components: [row] });
} else if (i.customId === 'stop') {
  player.stop();
  await i.update({ content: 'تم تعطيل الصوت', components: [row] });
} else if (i.customId === 'resume') {
  player.unpause();
  await i.update({ content: 'تم اعاده تشغيل الصوت', components: [row] });
}
});
}
if (th5 === '105') {
const connection = joinVoiceChannel({
channelId: interaction.member.voice.channel.id,
guildId: interaction.guild.id,
adapterCreator: interaction.guild.voiceAdapterCreator,
});
const player = createAudioPlayer();
const resource = createAudioResource('https://server8.mp3quran.net/afs/105.mp3');
player.play(resource);
connection.subscribe(player)
  const resumeButton = new Discord.ButtonBuilder()
  .setCustomId('resume')
  .setLabel('Resume')       
  .setEmoji("▶️")  
  .setStyle(Discord.ButtonStyle.Primary);
  
  const pauseButton = new Discord.ButtonBuilder()
    .setCustomId('pause')
    .setLabel('Pause')
    .setEmoji('⏸️')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const stopButton = new Discord.ButtonBuilder()
    .setCustomId('stop')
    .setLabel('Stop')
    .setEmoji('🛑')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const row = new Discord.ActionRowBuilder().addComponents(
    resumeButton,
    pauseButton,
    stopButton,
  );
interaction.reply({content:`تم تشغيل سوره **الفيل** في روم صوتي${interaction.member.voice.channel}
- لايقاف او استكمال التشغيل قم بالتنقل بين الازرار ادناه.`,ephemeral:true,components: [row]})
const filter = (i) =>
i.customId === 'pause' ||
i.customId === 'stop' ||
i.customId === 'resume'
const collector = interaction.channel.createMessageComponentCollector({filter});

collector.on('collect', async (i) => {
if (i.customId === 'pause') {
  player.pause();
  await i.update({ content: 'تم إيقاف الصوت', components: [row] });
} else if (i.customId === 'stop') {
  player.stop();
  await i.update({ content: 'تم تعطيل الصوت', components: [row] });
} else if (i.customId === 'resume') {
  player.unpause();
  await i.update({ content: 'تم اعاده تشغيل الصوت', components: [row] });
}
});
}
if (th5 === '106') {
const connection = joinVoiceChannel({
channelId: interaction.member.voice.channel.id,
guildId: interaction.guild.id,
adapterCreator: interaction.guild.voiceAdapterCreator,
});
const player = createAudioPlayer();
const resource = createAudioResource('https://server8.mp3quran.net/afs/106.mp3');
player.play(resource);
connection.subscribe(player)
  const resumeButton = new Discord.ButtonBuilder()
  .setCustomId('resume')
  .setLabel('Resume')       
  .setEmoji("▶️")  
  .setStyle(Discord.ButtonStyle.Primary);
  
  const pauseButton = new Discord.ButtonBuilder()
    .setCustomId('pause')
    .setLabel('Pause')
    .setEmoji('⏸️')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const stopButton = new Discord.ButtonBuilder()
    .setCustomId('stop')
    .setLabel('Stop')
    .setEmoji('🛑')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const row = new Discord.ActionRowBuilder().addComponents(
    resumeButton,
    pauseButton,
    stopButton,
  );
interaction.reply({content:`تم تشغيل سوره **قريش** في روم صوتي${interaction.member.voice.channel}
- لايقاف او استكمال التشغيل قم بالتنقل بين الازرار ادناه.`,ephemeral:true,components: [row]})
const filter = (i) =>
i.customId === 'pause' ||
i.customId === 'stop' ||
i.customId === 'resume'
const collector = interaction.channel.createMessageComponentCollector({filter});

collector.on('collect', async (i) => {
if (i.customId === 'pause') {
  player.pause();
  await i.update({ content: 'تم إيقاف الصوت', components: [row] });
} else if (i.customId === 'stop') {
  player.stop();
  await i.update({ content: 'تم تعطيل الصوت', components: [row] });
} else if (i.customId === 'resume') {
  player.unpause();
  await i.update({ content: 'تم اعاده تشغيل الصوت', components: [row] });
}
});
}
if (th5 === '107') {
const connection = joinVoiceChannel({
channelId: interaction.member.voice.channel.id,
guildId: interaction.guild.id,
adapterCreator: interaction.guild.voiceAdapterCreator,
});
const player = createAudioPlayer();
const resource = createAudioResource('https://server8.mp3quran.net/afs/107.mp3');
player.play(resource);
connection.subscribe(player)
  const resumeButton = new Discord.ButtonBuilder()
  .setCustomId('resume')
  .setLabel('Resume')       
  .setEmoji("▶️")  
  .setStyle(Discord.ButtonStyle.Primary);
  
  const pauseButton = new Discord.ButtonBuilder()
    .setCustomId('pause')
    .setLabel('Pause')
    .setEmoji('⏸️')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const stopButton = new Discord.ButtonBuilder()
    .setCustomId('stop')
    .setLabel('Stop')
    .setEmoji('🛑')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const row = new Discord.ActionRowBuilder().addComponents(
    resumeButton,
    pauseButton,
    stopButton,
  );
interaction.reply({content:`تم تشغيل سوره **الماعون** في روم صوتي${interaction.member.voice.channel}
- لايقاف او استكمال التشغيل قم بالتنقل بين الازرار ادناه.`,ephemeral:true,components: [row]})
const filter = (i) =>
i.customId === 'pause' ||
i.customId === 'stop' ||
i.customId === 'resume'
const collector = interaction.channel.createMessageComponentCollector({filter});

collector.on('collect', async (i) => {
if (i.customId === 'pause') {
  player.pause();
  await i.update({ content: 'تم إيقاف الصوت', components: [row] });
} else if (i.customId === 'stop') {
  player.stop();
  await i.update({ content: 'تم تعطيل الصوت', components: [row] });
} else if (i.customId === 'resume') {
  player.unpause();
  await i.update({ content: 'تم اعاده تشغيل الصوت', components: [row] });
}
});
}
if (th5 === '108') {
const connection = joinVoiceChannel({
channelId: interaction.member.voice.channel.id,
guildId: interaction.guild.id,
adapterCreator: interaction.guild.voiceAdapterCreator,
});
const player = createAudioPlayer();
const resource = createAudioResource('https://server8.mp3quran.net/afs/108.mp3');
player.play(resource);
connection.subscribe(player)
const resumeButton = new Discord.ButtonBuilder()
.setCustomId('resume')
.setLabel('Resume')       
.setEmoji("▶️")  
.setStyle(Discord.ButtonStyle.Primary);

const pauseButton = new Discord.ButtonBuilder()
  .setCustomId('pause')
  .setLabel('Pause')
  .setEmoji('⏸️')
  .setStyle(Discord.ButtonStyle.Danger);

const stopButton = new Discord.ButtonBuilder()
  .setCustomId('stop')
  .setLabel('Stop')
  .setEmoji('🛑')
  .setStyle(Discord.ButtonStyle.Danger);

const row = new Discord.ActionRowBuilder().addComponents(
  resumeButton,
  pauseButton,
  stopButton,
);
interaction.reply({content:`تم تشغيل سوره **الكوثر** في روم صوتي${interaction.member.voice.channel}
- لايقاف او استكمال التشغيل قم بالتنقل بين الازرار ادناه.`,ephemeral:true,components: [row]})
const filter = (i) =>
i.customId === 'pause' ||
i.customId === 'stop' ||
i.customId === 'resume'
const collector = interaction.channel.createMessageComponentCollector({filter});

collector.on('collect', async (i) => {
if (i.customId === 'pause') {
  player.pause();
  await i.update({ content: 'تم إيقاف الصوت', components: [row] });
} else if (i.customId === 'stop') {
  player.stop();
  await i.update({ content: 'تم تعطيل الصوت', components: [row] });
} else if (i.customId === 'resume') {
  player.unpause();
  await i.update({ content: 'تم اعاده تشغيل الصوت', components: [row] });
}
});
}
if (th5 === '109') {
const connection = joinVoiceChannel({
channelId: interaction.member.voice.channel.id,
guildId: interaction.guild.id,
adapterCreator: interaction.guild.voiceAdapterCreator,
});
const player = createAudioPlayer();
const resource = createAudioResource('https://server8.mp3quran.net/afs/109.mp3');
player.play(resource);
connection.subscribe(player)
  const resumeButton = new Discord.ButtonBuilder()
  .setCustomId('resume')
  .setLabel('Resume')       
  .setEmoji("▶️")  
  .setStyle(Discord.ButtonStyle.Primary);
  
  const pauseButton = new Discord.ButtonBuilder()
    .setCustomId('pause')
    .setLabel('Pause')
    .setEmoji('⏸️')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const stopButton = new Discord.ButtonBuilder()
    .setCustomId('stop')
    .setLabel('Stop')
    .setEmoji('🛑')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const row = new Discord.ActionRowBuilder().addComponents(
    resumeButton,
    pauseButton,
    stopButton,
  );
interaction.reply({content:`تم تشغيل سوره **الكافرون** في روم صوتي${interaction.member.voice.channel}
- لايقاف او استكمال التشغيل قم بالتنقل بين الازرار ادناه.`,ephemeral:true,components: [row]})
const filter = (i) =>
i.customId === 'pause' ||
i.customId === 'stop' ||
i.customId === 'resume'
const collector = interaction.channel.createMessageComponentCollector({filter});

collector.on('collect', async (i) => {
if (i.customId === 'pause') {
  player.pause();
  await i.update({ content: 'تم إيقاف الصوت', components: [row] });
} else if (i.customId === 'stop') {
  player.stop();
  await i.update({ content: 'تم تعطيل الصوت', components: [row] });
} else if (i.customId === 'resume') {
  player.unpause();
  await i.update({ content: 'تم اعاده تشغيل الصوت', components: [row] });
}
});
}
if (th5 === '110') {
const connection = joinVoiceChannel({
channelId: interaction.member.voice.channel.id,
guildId: interaction.guild.id,
adapterCreator: interaction.guild.voiceAdapterCreator,
});
const player = createAudioPlayer();
const resource = createAudioResource('https://server8.mp3quran.net/afs/110.mp3');
player.play(resource);
connection.subscribe(player)
  const resumeButton = new Discord.ButtonBuilder()
  .setCustomId('resume')
  .setLabel('Resume')       
  .setEmoji("▶️")  
  .setStyle(Discord.ButtonStyle.Primary);
  
  const pauseButton = new Discord.ButtonBuilder()
    .setCustomId('pause')
    .setLabel('Pause')
    .setEmoji('⏸️')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const stopButton = new Discord.ButtonBuilder()
    .setCustomId('stop')
    .setLabel('Stop')
    .setEmoji('🛑')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const row = new Discord.ActionRowBuilder().addComponents(
    resumeButton,
    pauseButton,
    stopButton,
  );
interaction.reply({content:`تم تشغيل سوره **النصر** في روم صوتي${interaction.member.voice.channel}
- لايقاف او استكمال التشغيل قم بالتنقل بين الازرار ادناه.`,ephemeral:true,components: [row]})
const filter = (i) =>
i.customId === 'pause' ||
i.customId === 'stop' ||
i.customId === 'resume'
const collector = interaction.channel.createMessageComponentCollector({filter});

collector.on('collect', async (i) => {
if (i.customId === 'pause') {
  player.pause();
  await i.update({ content: 'تم إيقاف الصوت', components: [row] });
} else if (i.customId === 'stop') {
  player.stop();
  await i.update({ content: 'تم تعطيل الصوت', components: [row] });
} else if (i.customId === 'resume') {
  player.unpause();
  await i.update({ content: 'تم اعاده تشغيل الصوت', components: [row] });
}
});
}
if (th5 === '111') {
const connection = joinVoiceChannel({
channelId: interaction.member.voice.channel.id,
guildId: interaction.guild.id,
adapterCreator: interaction.guild.voiceAdapterCreator,
});
const player = createAudioPlayer();
const resource = createAudioResource('https://server8.mp3quran.net/afs/111.mp3');
player.play(resource);
connection.subscribe(player)
  const resumeButton = new Discord.ButtonBuilder()
  .setCustomId('resume')
  .setLabel('Resume')       
  .setEmoji("▶️")  
  .setStyle(Discord.ButtonStyle.Primary);
  
  const pauseButton = new Discord.ButtonBuilder()
    .setCustomId('pause')
    .setLabel('Pause')
    .setEmoji('⏸️')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const stopButton = new Discord.ButtonBuilder()
    .setCustomId('stop')
    .setLabel('Stop')
    .setEmoji('🛑')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const row = new Discord.ActionRowBuilder().addComponents(
    resumeButton,
    pauseButton,
    stopButton,
  );
interaction.reply({content:`تم تشغيل سوره **المسد** في روم صوتي${interaction.member.voice.channel}
- لايقاف او استكمال التشغيل قم بالتنقل بين الازرار ادناه.`,ephemeral:true,components: [row]})
const filter = (i) =>
i.customId === 'pause' ||
i.customId === 'stop' ||
i.customId === 'resume'
const collector = interaction.channel.createMessageComponentCollector({filter});

collector.on('collect', async (i) => {
if (i.customId === 'pause') {
  player.pause();
  await i.update({ content: 'تم إيقاف الصوت', components: [row] });
} else if (i.customId === 'stop') {
  player.stop();
  await i.update({ content: 'تم تعطيل الصوت', components: [row] });
} else if (i.customId === 'resume') {
  player.unpause();
  await i.update({ content: 'تم اعاده تشغيل الصوت', components: [row] });
}
});
}
if (th5 === '112') {
const connection = joinVoiceChannel({
channelId: interaction.member.voice.channel.id,
guildId: interaction.guild.id,
adapterCreator: interaction.guild.voiceAdapterCreator,
});
const player = createAudioPlayer();
const resource = createAudioResource('https://server8.mp3quran.net/afs/112.mp3');
player.play(resource);
connection.subscribe(player)
  const resumeButton = new Discord.ButtonBuilder()
  .setCustomId('resume')
  .setLabel('Resume')       
  .setEmoji("▶️")  
  .setStyle(Discord.ButtonStyle.Primary);
  
  const pauseButton = new Discord.ButtonBuilder()
    .setCustomId('pause')
    .setLabel('Pause')
    .setEmoji('⏸️')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const stopButton = new Discord.ButtonBuilder()
    .setCustomId('stop')
    .setLabel('Stop')
    .setEmoji('🛑')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const row = new Discord.ActionRowBuilder().addComponents(
    resumeButton,
    pauseButton,
    stopButton,
  );
interaction.reply({content:`تم تشغيل سوره **الإخلاص** في روم صوتي${interaction.member.voice.channel}
- لايقاف او استكمال التشغيل قم بالتنقل بين الازرار ادناه.`,ephemeral:true,components: [row]})
const filter = (i) =>
i.customId === 'pause' ||
i.customId === 'stop' ||
i.customId === 'resume'
const collector = interaction.channel.createMessageComponentCollector({filter});

collector.on('collect', async (i) => {
if (i.customId === 'pause') {
  player.pause();
  await i.update({ content: 'تم إيقاف الصوت', components: [row] });
} else if (i.customId === 'stop') {
  player.stop();
  await i.update({ content: 'تم تعطيل الصوت', components: [row] });
} else if (i.customId === 'resume') {
  player.unpause();
  await i.update({ content: 'تم اعاده تشغيل الصوت', components: [row] });
}
});
}
if (th5 === '113') {
const connection = joinVoiceChannel({
channelId: interaction.member.voice.channel.id,
guildId: interaction.guild.id,
adapterCreator: interaction.guild.voiceAdapterCreator,
});
const player = createAudioPlayer();
const resource = createAudioResource('https://server8.mp3quran.net/afs/113.mp3');
player.play(resource);
connection.subscribe(player)
  const resumeButton = new Discord.ButtonBuilder()
  .setCustomId('resume')
  .setLabel('Resume')       
  .setEmoji("▶️")  
  .setStyle(Discord.ButtonStyle.Primary);
  
  const pauseButton = new Discord.ButtonBuilder()
    .setCustomId('pause')
    .setLabel('Pause')
    .setEmoji('⏸️')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const stopButton = new Discord.ButtonBuilder()
    .setCustomId('stop')
    .setLabel('Stop')
    .setEmoji('🛑')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const row = new Discord.ActionRowBuilder().addComponents(
    resumeButton,
    pauseButton,
    stopButton,
  );
interaction.reply({content:`تم تشغيل سوره **الفلق** في روم صوتي${interaction.member.voice.channel}
- لايقاف او استكمال التشغيل قم بالتنقل بين الازرار ادناه.`,ephemeral:true,components: [row]})
const filter = (i) =>
i.customId === 'pause' ||
i.customId === 'stop' ||
i.customId === 'resume'
const collector = interaction.channel.createMessageComponentCollector({filter});

collector.on('collect', async (i) => {
if (i.customId === 'pause') {
  player.pause();
  await i.update({ content: 'تم إيقاف الصوت', components: [row] });
} else if (i.customId === 'stop') {
  player.stop();
  await i.update({ content: 'تم تعطيل الصوت', components: [row] });
} else if (i.customId === 'resume') {
  player.unpause();
  await i.update({ content: 'تم اعاده تشغيل الصوت', components: [row] });
}
});
}
if (th5 === '114') {
const connection = joinVoiceChannel({
channelId: interaction.member.voice.channel.id,
guildId: interaction.guild.id,
adapterCreator: interaction.guild.voiceAdapterCreator,
});
const player = createAudioPlayer();
const resource = createAudioResource('https://server8.mp3quran.net/afs/114.mp3');
player.play(resource);
connection.subscribe(player)
  const resumeButton = new Discord.ButtonBuilder()
  .setCustomId('resume')
  .setLabel('Resume')       
  .setEmoji("▶️")  
  .setStyle(Discord.ButtonStyle.Primary);
  
  const pauseButton = new Discord.ButtonBuilder()
    .setCustomId('pause')
    .setLabel('Pause')
    .setEmoji('⏸️')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const stopButton = new Discord.ButtonBuilder()
    .setCustomId('stop')
    .setLabel('Stop')
    .setEmoji('🛑')
    .setStyle(Discord.ButtonStyle.Danger);
  
  const row = new Discord.ActionRowBuilder().addComponents(
    resumeButton,
    pauseButton,
    stopButton,
  );
interaction.reply({content:`تم تشغيل سوره **الناس** في روم صوتي${interaction.member.voice.channel}
- لايقاف او استكمال التشغيل قم بالتنقل بين الازرار ادناه.`,ephemeral:true,components: [row]})
const filter = (i) =>
i.customId === 'pause' ||
i.customId === 'stop' ||
i.customId === 'resume'
const collector = interaction.channel.createMessageComponentCollector({filter});

collector.on('collect', async (i) => {
if (i.customId === 'pause') {
  player.pause();
  await i.update({ content: 'تم إيقاف الصوت', components: [row] });
} else if (i.customId === 'stop') {
  player.stop();
  await i.update({ content: 'تم تعطيل الصوت', components: [row] });
} else if (i.customId === 'resume') {
  player.unpause();
  await i.update({ content: 'تم اعاده تشغيل الصوت', components: [row] });
}
});
}
}
})

process.on("unhandledRejection", error => {
return;
});
process.on("rejectionHandled", error => {
return;
});
process.on("uncaughtException", error => {
return;
});

client.login(process.env.token);