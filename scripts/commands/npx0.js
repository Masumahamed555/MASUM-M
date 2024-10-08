const fs = require("fs");
module.exports = {
  config:{
  name: "npx0",
        version: "1.0.1",
        prefix: false,
  permssion: 0,
  credits: "farhan", 
  description: "Fun",
  category: "no prefix",
  usages: "😒",
        cooldowns: 5, 
},

handleEvent: async function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  const content = event.body ? event.body : '';
  const body = content.toLowerCase();
  const axios = require('axios')
  const NAYAN = ['https://i.imgur.com/iyNLH0u.mp4','https://i.imgur.com/EjW7Bv3.mp4','https://i.imgur.com/ZPn0wuP.mp4','https://i.imgur.com/npfw648.mp4','https://i.imgur.com/hc52oYZ.mp4','https://i.imgur.com/jDk9HOF.mp4']
    var rndm = NAYAN[Math.floor(Math.random() * NAYAN.length)];
const media = (
    await axios.get(
      `${rndm}`,
      { responseType: 'stream' }
    )
  ).data;

  if (body.indexOf("🙀")==0 || body.indexOf("💥")==0 || body.indexOf("💋")==0 || body.indexOf("🥵")==0 || body.indexOf("🫦")==0 || body.indexOf("👅")==0 || body.indexOf("🙊")==0 || body.indexOf("🫦")==0 || body.indexOf("😗")==0 || body.indexOf("🫦")==0 || body.indexOf("🔪")==0 || body.indexOf("😯")==0 || body.indexOf("📉")==0 || body.indexOf("🤡")==0 || body.indexOf("🍎")==0 || body.indexOf("🥵")==0 || body.indexOf("🧺")==0 || body.indexOf("👀")==0 || body.indexOf("👏")==0 || body.indexOf("🤝")==0 || body.indexOf("🤷‍♂️")==0  || body.indexOf("🫡")==0 || body.indexOf("✉️")==0 || body.indexOf("👑")==0 || body.indexOf("📤")==0 || body.indexOf("💋")==0 || body.indexOf("😫")==0 || body.indexOf("😮‍💨")==0 || body.indexOf("🫥")==0 || body.indexOf("🕛")==0 || body.indexOf("🫦")==0 || body.indexOf("💉")==0 || body.indexOf("🤷‍♀️")==0 || body.indexOf("🤕")==0 || body.indexOf("📧")==0 || body.indexOf("🫦")==0 || body.indexOf("🥵")==0 || body.indexOf("😖")==0 || body.indexOf("💥")==0 || body.indexOf("👿")==0 || body.indexOf("💍")==0 || body.indexOf("⚒️")==0 || body.indexOf("👅")==0 || body.indexOf("👀")==0 || body.indexOf("🤦‍♂️")==0 || body.indexOf("🥵")==0 || body.indexOf("🙆‍♂️")==0 || body.indexOf("🙆‍♀️")==0 || body.indexOf("💏")==0 || body.indexOf("🗣️")==0 || body.indexOf("🫂")==0 || body.indexOf("🐒")==0 || body.indexOf("📡")==0 || body.indexOf("🏵️")==0 || body.indexOf("🌹")==0 || body.indexOf("🥵")==0 || body.indexOf("👀")==0 || body.indexOf("💋")==0 || body.indexOf("⭐")==0 || body.indexOf("💌")==0 || body.indexOf("💊")==0 || body.indexOf("⌛")==0 || body.indexOf("🔔")==0 || body.indexOf("📢")==0 || body.indexOf("🔍")==0 || body.indexOf("🔐")==0 || body.indexOf("🥵")==0 || body.indexOf("🫦")==0) {
    var msg = {
        body: "•❊ ༅༎🩵𝐁𝐨𝐰 𝐱'𝐚𝐧𝐬🪽༎༅ ❊\n⋆⃝🥵উ্ঁফ্ঁফ্ঁ কি্ঁ বৃ্ঁষ্টি্ঁ𝄞⋆⃝🙄","⃟≛⃝🦋মু্ঁইৃঁ✮আ্ঁই্ঁসা্ঁ প্ঁড়্ঁছি্ঁ","⎯͢চু্ঁম্মা্ঁ দি্ঁও্ঁ👌কি্ঁন্তু্ঁ কা্ঁম্ঁর্ঁ দি্ঁও্ঁ না্ঁ ফি্ঁও্ঁ⎯.🥵"
        attachment: media
      }
      api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🖤", event.messageID, (err) => {}, true)
    }
  },
  start: function({ nayan }) {
  }
}
