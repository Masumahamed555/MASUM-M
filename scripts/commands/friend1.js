const fs = require("fs");
module.exports = {
  config:{
  name: "friend1",
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
  const NAYAN = ['https://i.imgur.com/iyNLH0u.mp4','https://i.imgur.com/3HVPluM.mp4','https://i.imgur.com/jE1VSA2.mp4']
    var rndm = NAYAN[Math.floor(Math.random() * NAYAN.length)];
const media = (
    await axios.get(
      `${rndm}`,
      { responseType: 'stream' }
    )
  ).data;

  if (body.indexOf("🤍")==0 || body.indexOf("🤝")==0 || body.indexOf("🫶")==0 ||body.indexOf("☺️")==0) {
    var msg = {
        body: "•❊ ༅⎯͢🩷𝐌𝐀𝐒𝐔𝐌🩷 ❊\n⎯͢𝗕𝗘𝗦𝗧 𝗙𝗥𝗜𝗘𝗡𝗗💘👩🏻‍🤝‍👩🏼🤝_",
        attachment: media
      }
      api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🖤", event.messageID, (err) => {}, true)
    }
  },
  start: function({ nayan }) {
  }
}
