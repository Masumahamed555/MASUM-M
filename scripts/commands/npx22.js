const fs = require("fs");
module.exports = {
  config:{
	name: "npx22",
        version: "1.0.1",
        prefix: false,
	permssion: 0,
	credits: "Fahim", 
	description: "Fun",
	category: "no prefix",
	usages: "",
        cooldowns: 5, 
},

handleEvent: function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
  const content = event.body ? event.body : '';
  const body = content.toLowerCase();
	if (body.indexOf(" ")==0 || body.indexOf("🕵️‍♀️")==0 || body.indexOf("🙂")==0 || body.indexOf(" ")==0) {
		var msg = {
				body: "জান মন খারাপ করো আমি সব সময় তোমাকে ভালোবাসি-🙂",
				attachment: fs.createReadStream(__dirname + `/Nayan/1721891866438.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("✅", event.messageID, (err) => {}, true)
		}
	},
	start: function({ nayan }) {

  }
}
