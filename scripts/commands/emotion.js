module.exports.config = {
  name: "emotion",
  version: "1.0.0",
  permission: 0,
  credits: "ArYan",
  description: "Random sad video",
  prefix: true,
  category: "Media",
  usages: "video",
  cooldowns: 5,
  dependencies: {
    "axios": "",
    "fs-extra": "",
    "request": ""
  }
};

module.exports.run = async ({ api, event, args, client, Users, Threads, __GLOBAL, Currencies }) => {
  const axios = global.nodemodule["axios"];
  const request = global.nodemodule["request"];
  const fs = global.nodemodule["fs-extra"];

  var hi = ["☞ 𝐌𝐀𝐒𝐔𝐌 𝐀𝐇𝐀𝐌𝐄𝐃 ❉"];
  var know = hi[Math.floor(Math.random() * hi.length)];

  var link = [
    "https://i.imgur.com/IhT6xtH.mp4",
    "https://i.imgur.com/JZeqvsN.mp4",
    "https://i.imgur.com/MHyXN9m.mp4",
    "https://i.imgur.com/GcUPeMq.mp4",
    "https://i.imgur.com/EysLrZz.mp4",
    "https://i.imgur.com/gayq1jy.mp4",
    "https://i.imgur.com/wELGbKj.mp4",
    "https://i.imgur.com/VXUAgpO.mp4",
    "https://i.imgur.com/9B8Moga.mp4"
  ];

  var callback = () => {
    api.sendMessage({ body: `「 ${know} 」`, attachment: fs.createReadStream(__dirname + "/cache/15.mp4") }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/15.mp4"));
  };

  return request({ url: encodeURI(link[Math.floor(Math.random() * link.length)]), encoding: null }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      fs.writeFile(__dirname + "/cache/15.mp4", body, "binary", callback);
    }
  });
};
