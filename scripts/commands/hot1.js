const fs = require("fs");
module.exports = {
  config:{
  name: "hot1",
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
  const NAYAN = ['https://i.imgur.com/Wowe6Cq.mp4','https://i.imgur.com/uJjxd5F.mp4','https://i.imgur.com/hq44A02.mp4','https://i.imgur.com/SwXaFnp.mp4','https://i.imgur.com/8utPdp9.mp4','https://i.imgur.com/2XjTs0g.mp4','https://i.imgur.com/tymNJZO.mp4']
    var rndm = NAYAN[Math.floor(Math.random() * NAYAN.length)];
const media = (
    await axios.get(
      `${rndm}`,
      { responseType: 'stream' }
    )
  ).data;

  if (body.indexOf("🫦")==0 || body.indexOf("")==0 || body.indexOf("")==0 || body.indexOf("hot")==0 || body.indexOf("")==0 || body.indexOf("")==0 || body.indexOf("")==0 || body.indexOf("")==0 || body.indexOf("")==0 || body.indexOf("")==0 || body.indexOf("")==0) {
    var msg = {
        body: "•❊ ༅༎🩵𝐁𝐨𝐰 𝐱'𝐚𝐧𝐬🪽༎༅ ❊\n⎯͢⎯⃝hot🫦🥵.! 🙂\n      🥵 _",
        attachment: media
      }
      api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🖤", event.messageID, (err) => {}, true)
    }
  },
  start: function({ nayan }) {
  }
}
