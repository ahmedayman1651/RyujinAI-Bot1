const { default: makeWASocket, useMultiFileAuthState } = require('@whiskeysockets/baileys');
const fs = require('fs');
const إعداد = require('./config');

const الأوامر = new Map();
global.قفل_الشات = {};
const تحذيرات = {};
const فلوس = {};
const مستوى = {};

fs.readdirSync('./commands').forEach(file=>{
  const cmd = require('./commands/' + file);
  الأوامر.set(cmd.اسم, cmd);
});

function فيه_رابط(نص){
  return نص.includes("http") || نص.includes("www.");
}

async function تشغيل(){
  const { state, saveCreds } = await useMultiFileAuthState("auth");

  const sock = makeWASocket({
    auth: state,
    printQRInTerminal: false
  });

  if (!state.creds.registered) {
    const code = await sock.requestPairingCode(إعداد.رقم_البوت);
    console.log("🔑 كود الربط:", code);
  }

  sock.ev.on("creds.update", saveCreds);

  sock.ev.on("messages.upsert", async ({ messages })=>{
    const msg = messages[0];
    if(!msg.message) return;

    const النص = msg.message.conversation || msg.message.extendedTextMessage?.text;
    const id = msg.key.remoteJid;
    const sender = msg.key.participant || id;

    // xp
    مستوى[sender] = (مستوى[sender] || 0) + 5;

    // lock
    if(global.قفل_الشات[id]) return;

    // anti link
    if(نص && فيه_رابط(نص)){
      تحذيرات[sender] = (تحذيرات[sender] || 0) + 1;

      await sock.sendMessage(id,{text:`⚠️ ممنوع الروابط\n${تحذيرات[sender]}/3`,mentions:[sender]});
      await sock.sendMessage(id,{delete: msg.key});

      if(تحذيرات[sender]>=3){
        await sock.groupParticipantsUpdate(id,[sender],"remove");
      }
      return;
    }

    if(!نص || !نص.startsWith(إعداد.البادئة)) return;

    const args = نص.slice(1).split(" ");
    const اسم = args.shift().toLowerCase();

    const cmd = الأوامر.get(اسم);
    if(cmd){
      cmd.تنفيذ(sock,msg,args,{فلوس,مستوى});
    }
  });
}

تشغيل();