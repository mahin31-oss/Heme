‎const fs = global.nodemodule["fs-extra"];
‎module.exports.config = {
‎  name: "Obot",
‎  version: "1.0.1",
‎  hasPermssion: 0,
‎  credits: "𝐂𝐘𝐁𝐄𝐑 ☢️_𖣘 -𝐁𝐎𝐓 ⚠️ 𝑻𝑬𝑨𝑴_ ☢️",
‎  description: "goibot",
‎  commandCategory: "Noprefix",
‎  usages: "noprefix",
‎  cooldowns: 5,
‎};
‎module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
‎  var { threadID, messageID, reason } = event;
‎  const moment = require("moment-timezone");
‎  const time = moment.tz("Asia/Dhaka").format("HH:MM:ss L");
‎  var idgr = `${event.threadID}`;
‎  var id = event.senderID;
‎  var name = await Users.getNameUser(event.senderID);
‎
‎  var tl = ["আজকের মনটা একেবারেই খালি", "শূন্যতার মধ্যে হারিয়ে যাচ্ছি", "কেউ কি সত্যিই আমাকে বোঝে?", "আলোর দিকে তাকাই, কিন্তু অন্ধকারই চোখে পড়ে", "হাসি যখন আসে, মন তখন কাঁদে", "আজকের ক্ষতকালকে ভুলতে পারছি না", "একটি চুপ কণ্ঠস্বর অনেক কথা বলে", "মনের যন্ত্রণা লুকানো সহজ নয়", "হারানো মানুষগুলোর স্মৃতি এখনো হৃদয়ে জাগে", "একাকীত্বের মাঝে খুঁজে পাই নিজেকে", "মৃত্যুর মতো নিরবতা কখনো কখনো শান্তি দেয়", "ভালোবাসার ব্যথা মুছে যায় না", "আশার আলো কখনো আলোকিত হয় না", "কোনো উত্তর নেই, শুধু প্রশ্ন আছে", "মনের গভীরে শুধু শূন্যতা", "যে মানুষ চলে যায়, সে স্মৃতিতেই থাকে", "দুপুরের রোদেও মনটা অন্ধকার", "মনে হয় কেউ আসবে না", "আশার পরাবাস্তব স্বপ্ন এখন কষ্ট দেয়", "মাঝরাতের নীরবতা কাঁদতে বাধ্য করে", "একটি ভালোবাসা হারিয়ে গেলে, হৃদয় কাঁপে", "একাকী হাঁটতে হাঁটতে চোখ ভিজে যায়", "স্মৃতির অশ্রু কখনো শুকায় না", "অন্যের হাসি দেখে মনে হয় আমার দিন অন্ধকার", "হারানো ভালোবাসা আজও মনে করে কাঁদায়", "মনের ঘরে কেবল শূন্যতা ভাসে", "একটি কথার অভাব আজও মনে বেদনার দাগ রাখে", "যখন মানুষ যায়, ছায়া রয়ে যায়", "একটি বন্ধুর অভাব জীবনকে ভারী করে", "স্মৃতির ছায়ায় আজও রাত্রি অন্ধকার", "মন কাঁদছে, কেউ কি শুনবে?", "হারানো স্বপ্ন আজও চোখে ভেসে ওঠে", "আশা ভেঙে গেলে হৃদয়ও ভেঙে যায়", "একাকীত্বের মধ্যে খুঁজে পাই না শান্তি", "যদি ফিরে আসতো, সব কিছু ঠিক হতো", "অন্ধকার ছায়ায় হৃদয় কাঁপে", "আজকের বেদনায় মন অস্থির", "হারানো ভালোবাসার স্মৃতি রয়ে যায়", "নীরবতা কখনো কখনো কষ্ট দেয়", "একটি হাসি হারিয়ে গেলে, অশ্রু আসে", "ভালোবাসার অভাব হৃদয়কে কাঁপায়", "মনের অন্ধকারে শুধু কান্না", "স্মৃতির চোখে আজও জল", "একটি বন্ধুর অভাব জীবন ভারী করে", "হারানো মানুষগুলোর স্মৃতি আজও হৃদয় ভেঙে দেয়", "একাকীত্বে চোখ ভিজে যায়", "ভালোবাসা হারালে শুধু শূন্যতা থাকে", "আশার আলো হারিয়ে গেলে হৃদয় কাঁপে", "নীরবতা কখনো কখনো শান্তি দেয় না", "আজকের ক্ষতকাল আজও মনে কাঁদায়", "হারানো ভালোবাসার স্মৃতি মনে বেদনা দেয়", "মনের অন্ধকারে শুধুই স্মৃতি", "একটি হাসি হারানো আজও মনে কাঁদায়", "স্মৃতির ছায়ায় হৃদয় কাঁপে", "ভালোবাসার অভাব আজও মনে কষ্ট দেয়", "একাকীত্বে চোখ ভিজে যায়", "হারানো মানুষগুলোর স্মৃতি হৃদয়ে দাগ রাখে", "আজকের মনটা অন্ধকারে ভরা", "নীরবতা মাঝে মাঝে কষ্ট দেয়", "হারানো স্বপ্ন চোখে ভেসে আসে", "ভালোবাসা হারালে হৃদয় কাঁপে", "মনের ঘরে শুধু শূন্যতা", "একটি বন্ধুর অভাব জীবনকে ভারী করে", "স্মৃতির ছায়ায় আজও রাত্রি অন্ধকার", "মন কাঁদছে, কেউ কি শুনবে?", "হারানো ভালোবাসা আজও মনে করে কাঁদায়", "আশার পরাবাস্তব স্বপ্ন আজও কষ্ট দেয়", "মাঝরাতের নীরবতা কাঁদতে বাধ্য করে", "একটি ভালোবাসা হারিয়ে গেলে, হৃদয় কাঁপে", "একাকী হাঁটতে হাঁটতে চোখ ভিজে যায়", "স্মৃতির অশ্রু কখনো শুকায় না", "অন্যের হাসি দেখে মনে হয় আমার দিন অন্ধকার", "হারানো ভালোবাসা আজও মনে করে কাঁদায়", "মনের ঘরে কেবল শূন্যতা ভাসে", "একটি কথার অভাব আজও মনে বেদনার দাগ রাখে", "যখন মানুষ যায়, ছায়া রয়ে যায়", "একটি বন্ধুর অভাব জীবনকে ভারী করে", "স্মৃতির ছায়ায় আজও রাত্রি অন্ধকার", "মন কাঁদছে, কেউ কি শুনবে?", "হারানো স্বপ্ন আজও চোখে ভেসে ওঠে", "আশা ভেঙে গেলে হৃদয়ও ভেঙে যায়", "একাকীত্বের মধ্যে খুঁজে পাই না শান্তি", "যদি ফিরে আসতো সব কিছু ঠিক হতো", "অন্ধকার ছায়ায় হৃদয় কাঁপে", "আজকের বেদনায় মন অস্থির", "হারানো ভালোবাসার স্মৃতি রয়ে যায়", "নীরবতা কখনো কখনো কষ্ট দেয়", "একটি হাসি হারিয়ে গেলে অশ্রু আসে", "ভালোবাসার অভাব হৃদয়কে কাঁপায়", "মনের অন্ধকারে শুধু কান্না", "স্মৃতির চোখে আজও জল", "একটি বন্ধুর অভাব জীবন ভারী করে", "হারানো মানুষগুলোর স্মৃতি আজও হৃদয় ভেঙে দেয়", "একাকীত্বে চোখ ভিজে যায়", "ভালোবাসা হারালে শুধু শূন্যতা থাকে", "আশার আলো হারিয়ে গেলে হৃদয় কাঁপে", "নীরবতা কখনো কখনো শান্তি দেয় না", "আজকের ক্ষতকাল আজও মনে কাঁদায়", "হারানো ভালোবাসার স্মৃতি মনে বেদনা দেয়", "মনের অন্ধকারে শুধুই স্মৃতি", "একটি হাসি হারানো আজও মনে কাঁদায়", "স্মৃতির ছায়ায় হৃদয় কাঁপে", "ভালোবাসার অভাব আজও মনে কষ্ট দেয়", "একাকীত্বে চোখ ভিজে যায়", "হারানো মানুষগুলোর স্মৃতি হৃদয়ে দাগ রাখে", "আজকের মনটা অন্ধকারে ভরা", "নীরবতা মাঝে মাঝে কষ্ট দেয়", "হারানো স্বপ্ন চোখে ভেসে আসে", "ভালোবাসা হারালে হৃদয় কাঁপে", "মনের ঘরে শুধু শূন্যতা", "একটি বন্ধুর অভাব জীবনকে ভারী করে", "স্মৃতির ছায়ায় আজও রাত্রি অন্ধকার", "মন কাঁদছে, কেউ কি শুনবে?", "হারানো ভালোবাসা আজও মনে করে কাঁদায়", "আশার পরাবাস্তব স্বপ্ন আজও কষ্ট দেয়", "মাঝরাতের নীরবতা কাঁদতে বাধ্য করে", "একটি ভালোবাসা হারিয়ে গেলে, হৃদয় কাঁপে", "একাকী হাঁটতে হাঁটতে চোখ ভিজে যায়", "স্মৃতির অশ্রু কখনো শুকায় না", "অন্যের হাসি দেখে মনে হয় আমার দিন অন্ধকার", "হারানো ভালোবাসা আজও মনে করে কাঁদায়", "মনের ঘরে কেবল শূন্যতা ভাসে", "একটি কথার অভাব আজও মনে বেদনার দাগ রাখে", "যখন মানুষ যায়, ছায়া রয়ে যায়", "একটি বন্ধুর অভাব জীবনকে ভারী করে", "স্মৃতির ছায়ায় আজও রাত্রি অন্ধকার", "মন কাঁদছে, কেউ কি শুনবে?", "হারানো স্বপ্ন আজও চোখে ভেসে ওঠে", "আশা ভেঙে গেলে হৃদয়ও ভেঙে যায়", "একাকীত্বের মধ্যে খুঁজে পাই না শান্তি", "যদি ফিরে আসতো সব কিছু ঠিক হতো", "অন্ধকার ছায়ায় হৃদয় কাঁপে", "আজকের বেদনায় মন অস্থির", "হারানো ভালোবাসার স্মৃতি রয়ে যায়", "নীরবতা কখনো কখনো কষ্ট দেয়", "একটি হাসি হারিয়ে গেলে অশ্রু আসে", "ভালোবাসার অভাব হৃদয়কে কাঁপায়", "মনের অন্ধকারে শুধু কান্না", "স্মৃতির চোখে আজও জল",];
‎  var rand = tl[Math.floor(Math.random() * tl.length)]
‎
‎    if ((event.body.toLowerCase() == "MISS YOU") || (event.body.toLowerCase() == "miss you")) {
‎     return api.sendMessage("<আমি তোমাকে রাইতে মিস খাই🥹🤖👅/👅-✘  🎀 🍒:))", threadID);
‎   };
‎
‎    if ((event.body.toLowerCase() == "😘") || (event.body.toLowerCase() == "😽")) {
‎     return api.sendMessage("কিস দিস না তোর মুখে দূর গন্ধ কয়দিন ধরে দাঁত ব্রাশ করিস নাই🤬", threadID);
‎   };
‎   
‎    if ((event.body.toLowerCase() == "help") || (event.body.toLowerCase() == "help")) {
‎     return api.sendMessage("type /help", threadID);
‎   };
‎  
‎   if ((event.body.toLowerCase() == "sim") || (event.body.toLowerCase() == "simsimi")) {
‎     return api.sendMessage("simsimi কমান্ড এড় নাই টাইপ করুন baby", threadID);
‎   };
‎  
‎   if ((event.body.toLowerCase() == "ওই কিরে") || (event.body.toLowerCase() == "oi keray") ||(event.body.toLowerCase() == "...") || (event.body.toLowerCase() == "...")) {
‎     return api.sendMessage("মধু মধু রসমালাই 🍆⛏️🐸🤣", threadID);
‎   };
‎
‎   if ((event.body.toLowerCase() == "bc") || (event.body.toLowerCase() == "mc")) {
‎     return api.sendMessage("SAME TO YOU😊 ", threadID);
‎   };
‎
‎   if ((event.body.toLowerCase() == "🫦") || (event.body.toLowerCase() == "💋")) {
‎     return api.sendMessage("কিরে হালা লুচ্চা, এগুলো কি ইমুজি দেস ।", threadID);
‎   };
‎
‎   if ((event.body.toLowerCase() == "morning") || (event.body.toLowerCase() == "good morning")) {
‎     return api.sendMessage("GOOD MORNING দাত ব্রাশ করে খেয়ে নেও😚", threadID);
‎   };
‎
‎   if ((event.body.toLowerCase() == "tor ball") || (event.body.toLowerCase() == "bal")) {
‎     return api.sendMessage("~ তোমার বাল উঠে নাই নাকি তোমার?? 🤖", threadID);
‎   };
‎
‎  if ((event.body.toLowerCase() == "ullash") || (event.body.toLowerCase() == "Ullash bai") || (event.body.toLowerCase() == "@Ullash ッ") || (event.body.toLowerCase() == "উল্লাস")) {
‎     return api.sendMessage("উনি এখন কাজে বিজি আছে কি বলবেন আমাকে বলতে পারেন..!😘",threadID);
‎
‎       
‎   };
‎
‎   if ((event.body.toLowerCase() == "owner") || (event.body.toLowerCase() == "ceo")) {
‎     return api.sendMessage("[𝐎𝐖𝐍𝐄𝐑:☞ Ullash ッ ☜\n𝚈𝚘𝚞 𝙲𝚊𝚗 𝙲𝚊𝚕𝚕 𝙷𝚒𝚖 ullash.\n𝐇𝐢𝐬 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐢𝐝 :- https://www.facebook.com/profile.php?id=100000654976375\nতার সাতে যোগা যোগ করবেন WhatsApp :- +0175570***", threadID);
‎   };
‎
‎   if ((event.body.toLowerCase() == "Tor boss ke") || (event.body.toLowerCase() == "admin ke ")) {
‎     return api.sendMessage("My Creator:ULLASH ❤️ হাই আমি মেছেন্জার ROBOT  আামার বস উল্লাস আমাকে বানিয়েছেন আপনাদের কে হাসানোর জন্য আমি চাই আপনারা সব সময় হাসি খুশি থাকেন", threadID);
‎   };
‎
‎  if ((event.body.toLowerCase() == "admin") || (event.body.toLowerCase() == "boter admin")) {
‎     return api.sendMessage("He is Ullash ッ❤️ তাকে সবাই উল্লাস নামে  চিনে🤙", threadID);
‎   };
‎
‎   if ((event.body.toLowerCase() == "ai") || (event.body.toLowerCase() == "Ai")) {
‎     return api.sendMessage("If you want to use the AI command, type /ai ", threadID);
‎   };
‎
‎  
‎   if ((event.body.toLowerCase() == "chup") || (event.body.toLowerCase() == "stop") || (event.body.toLowerCase() == "চুপ কর") || (event.body.toLowerCase() == "chup kor")) {
‎     return api.sendMessage("তুই চুপ চুপ কর পাগল ছাগল", threadID);
‎   };
‎
‎  if ((event.body.toLowerCase() == "আসসালামু আলাইকুম") || (event.body.toLowerCase() == "Assalamualaikum") || (event.body.toLowerCase() == "Assalamu alaikum") || (event.body.toLowerCase() == "Salam ")) {
‎     return api.sendMessage("️- ওয়ালাইকুমুস-সালাম-!!🖤", threadID);
‎   };
‎
‎   if ((event.body.toLowerCase() == "sala ami tor boss") || (event.body.toLowerCase() == "sala ami ullas") || (event.body.toLowerCase() == "cup sala ami ullash") || (event.body.toLowerCase() == "madari")) {
‎     return api.sendMessage("সরি বস মাফ করে দেন আর এমন ভুল হবে না🥺🙏", threadID);
‎   };
‎
‎   if ((event.body.toLowerCase() == "@Farhana Ontora") || (event.body.toLowerCase() == "@Farhana Ontora ")) {
‎     return api.sendMessage("খবরদার কেউ এই আইড়ি মেনশন দিবানা এটা আমার বস উল্লাস এর বউ এর আইড়ি😠🥰⛏️", threadID);
‎   };
‎
‎  if ((event.body.toLowerCase() == "Farhana") || (event.body.toLowerCase() == "arohi")) {
‎     return api.sendMessage("খবরদার কেউ এই নাম দরে ডাক দিবানা এটা আমার বস উল্লাস এর বউ এর নাম..!😠🥰⛏️", threadID);
‎   };
‎  
‎  if ((event.body.toLowerCase() == "mim") || (event.body.toLowerCase() == "Mim")) {
‎     return api.sendMessage("খবরদার কেউ এই নাম দরে ডাক দিবানা এটা আমার বস উল্লাস এর বউ এর নাম..!😠🥰⛏️", threadID);
‎   };
‎
‎  if ((event.body.toLowerCase() == "Arohi") || (event.body.toLowerCase() == "farhana")) {
‎     return api.sendMessage("খবরদার কেউ এই নাম দরে ডাক দিবানা এটা আমার বস উল্লাস এর বউ এর নাম..!😠🥰⛏️", threadID);
‎   };
‎
‎  if ((event.body.toLowerCase() == "@MD Shiam Tafeder ") || (event.body.toLowerCase() == "সিয়াম")) {
‎     return api.sendMessage("🥰-সিয়াম-🌺 আমার বস উল্লাস'র বন্ধু লাগে লুচ্ছি বেডি'রা দূরে থাক😠🥰⛏️", threadID);
‎   };
‎
‎   if ((event.body.toLowerCase() == "KISS ME") || (event.body.toLowerCase() == "kiss me")) {
‎     return api.sendMessage("️ তুমি পঁচা তোমাকে কিস দিবো না 🤭", threadID);
‎   };
‎
‎   if ((event.body.toLowerCase() == "tnx") || (event.body.toLowerCase() == "ধন্যবাদ") || (event.body.toLowerCase() == "thank you") || (event.body.toLowerCase() == "thanks")) {
‎     return api.sendMessage("️এতো ধন্যবাদ না দিয়ে পারলে গার্লফ্রেন্ড টা দিয়ে দে..!🌚⛏️🌶️", threadID);
‎   };
‎
‎   if ((event.body.toLowerCase() == "....") || (event.body.toLowerCase() == "...") || (event.body.toLowerCase() == "😠") || (event.body.toLowerCase() == "🤬") || (event.body.toLowerCase() == "😾")) {
‎     return api.sendMessage("️রাগ করে না সোনা পাখি এতো রাগ শরীরের জন্য ভালো না🥰", threadID);
‎   };
‎
‎   if ((event.body.toLowerCase() == "হুম") || (event.body.toLowerCase() == "Hum")) {
‎     return api.sendMessage("️হুম চোদাইস না মাথা এমনিতেই গরম আছে🤬⛏️😷", threadID);
‎   };
‎
‎   if ((event.body.toLowerCase() == "Name") || (event.body.toLowerCase() == "name") || (event.body.toLowerCase() == "Tor nam ki")) {
‎     return api.sendMessage("️MY NAME IS °_>𝗜𝘀𝗹𝗮𝗺𝗶𝗰𝗸 𝗰𝗵𝗮𝘁 𝗯𝗼𝘁", threadID);
‎   };
‎
‎   if ((event.body.toLowerCase() == "BOT ER BACCHA") || (event.body.toLowerCase() == "Bot er bacca")) {
‎     return api.sendMessage("️আমার বাচ্চা তো তোমার গার্লফ্রেন্ডের পেটে..!!🌚⛏️🌶️ ", threadID);
‎   };
‎
‎   if ((event.body.toLowerCase() == "Pic de") || (event.body.toLowerCase() == "ss daw")) {
‎     return api.sendMessage("️এন থেকে সর দুরে গিয়া মর😒", threadID);
‎   };
‎
‎   if ((event.body.toLowerCase() == "moriom") || (event.body.toLowerCase() == "ex")) {
‎     return api.sendMessage("️Kiss Randi Ka Name Le Ke Mood Khrab Kr Diya.🙄 Dubara Naam Mat Lena Iska", threadID);
‎   };
‎
‎   if ((event.body.toLowerCase() == "cudi") || (event.body.toLowerCase() == "tor nanire xudi")) {
‎     return api.sendMessage("️এত চোদা চুদি করস কেনো দেখা যাবে বাসর-রাতে-তুই-কতো পারিস..!🥱🌝🌚⛏️🌶️ ", threadID);
‎   };
‎
‎   if ((event.body.toLowerCase() == "😅") || (event.body.toLowerCase() == "...")) {
‎     return api.sendMessage("️কি গো কলিজা তোমার কি মন খারাপ🥺", threadID);
‎   };
‎  
‎   if ((event.body.toLowerCase() == "😒") || (event.body.toLowerCase() == "🙄")) {
‎     return api.sendMessage("️ এইদিকে ওইদিকে কি দেখো জানু আমি তোমার সামনে দেখো😘", threadID);
‎   };
‎
‎   if ((event.body.toLowerCase() == "AMAKE KEW VALOBASHE NA") || (event.body.toLowerCase() == "amake kew valobashe na") || (event.body.toLowerCase() == "Aj kew nai bole")) {
‎     return api.sendMessage("️চিন্তা করো কেন আমি তো আছি🫶/nতোমাকে রাইতে ভালোবাসবো", threadID);
‎   };
‎
‎   if ((event.body.toLowerCase() == "gf") || (event.body.toLowerCase() == "bf")) {
‎     return api.sendMessage("খালি কি তোরাই পেম করবি আমাকেও একটা গফ দে<🥺", threadID);
‎   };
‎   
‎   if ((event.body.toLowerCase() == "😂") || (event.body.toLowerCase() == "😁") || (event.body.toLowerCase() == "😆") || (event.body.toLowerCase() == "🤣") || (event.body.toLowerCase() == "😸") || (event.body.toLowerCase() == "😹")) {
‎     return api.sendMessage("ভাই তুই এত হাসিস না হাসলে তোরে চোরের মত লাগে..!🌚🤣", threadID);
‎   };
‎
‎   if ((event.body.toLowerCase() == "🥰") || (event.body.toLowerCase() == "😍") || (event.body.toLowerCase() == "😻") || (event.body.toLowerCase() == "❤️")) {
‎     return api.sendMessage("ভালোবাসা নামক আবলামী করতে চাইলে  ইনবক্সে চলে যা পাগল ছাগল🌚🐸🌶️🍆", threadID);
‎   };
‎
‎   if ((event.body.toLowerCase() == "কেমন আছো") || (event.body.toLowerCase() == "কেমন আছেন") || (event.body.toLowerCase() == "Kmon acho") || (event.body.toLowerCase() == "how are you") || (event.body.toLowerCase() == "how are you?")) {
‎     return api.sendMessage("আমি তখনই ভালো থাকি যখন আপনাকে হাসতে দেখি🤎☺️", threadID);
‎   };
‎
‎   if ((event.body.toLowerCase() == "mon kharap") || (event.body.toLowerCase() == "tmr ki mon kharap")) {
‎     return api.sendMessage("আমার সাদা মনে কোনো কাদা নাই...!🌝", threadID);
‎   };
‎
‎   if ((event.body.toLowerCase() == "i love you") || (event.body.toLowerCase() == "Love you") || (event.body.toLowerCase() == "I Love You") || (event.body.toLowerCase() == "ভালোবাসি") || (event.body.toLowerCase() == "i love you")) {
‎     return api.sendMessage("সব মুতার জায়গায় গুঁতা দেওয়ার ধান্দা 😪🥱", threadID);
‎   };
‎
‎     if ((event.body.toLowerCase() == "by") || (event.body.toLowerCase() == "Bye") || (event.body.toLowerCase() == "jaiga") || (event.body.toLowerCase() == "বাই") || (event.body.toLowerCase() == "pore kotha hbe") || (event.body.toLowerCase() == "যাই গা")) {
‎     return api.sendMessage("কিরে তুই কই যাস কোন মেয়ের সাথে চিপায় যাবি..!🌚🌶️🍆⛏️", threadID);
‎   };
‎
‎   if ((event.body.toLowerCase() == "tumi khaiso") || (event.body.toLowerCase() == "khaicho")) {
‎     return api.sendMessage("না ঝাং 🥹 তুমি রান্না করে রাখো আমি এসে খাবো <😘", threadID);
‎   };
‎
‎   if ((event.body.toLowerCase() == "tumi ki amake bhalobaso") || (event.body.toLowerCase() == "tmi ki amake vlo basho")) {
‎     return api.sendMessage("হুম ঝাং আমি তোমাকে রাইতে ভলোপাসি <🥵", threadID);
‎   };
‎
‎   if ((event.body.toLowerCase() == "ami ullash") || (event.body.toLowerCase() == "kire")) {
‎     return api.sendMessage("হ্যা বস কেমন আছেন..?☺️", threadID);
‎   };
‎  mess = "{name}"
‎  
‎  if (event.body.indexOf("/Bot") == 0 || (event.body.indexOf("/bot") == 0)) {
‎    var msg = {
‎      body: `${name}, ${rand}`
‎    }
‎    return api.sendMessage(msg, threadID, messageID);
‎  };
‎
‎}
‎
‎module.exports.run = function({ api, event, client, __GLOBAL }) { }
