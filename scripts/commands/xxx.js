module.exports.config = {
  name: "xxx",
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

  var hi = ["❊ 🥵XxxxX🥵 ❊"];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [
    "https://drive.google.com/uc?id=1Z-6qll7ACq8Ka1pKpnC3guGcXU0gNvoL",
    "https://drive.google.com/uc?id=1ZG-BJq7pP4oh93U6tHIKuYvZ8XiidlCV"
  ];

  var callback = () => {
    api.sendMessage({ body: `「 ${know} 」`, attachment: fs.createReadStream(__dirname + "/cache/15.mp4") }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/15.mp4"));
  };

  return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname + "/cache/15.mp4")).on("close", () => callback());
};
