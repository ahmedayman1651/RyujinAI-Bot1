const axios=require('axios');const إعداد=require('../config');
module.exports={اسم:"ذكاء",async تنفيذ(sock,msg,args){
const نص=args.join(" ");
if(!نص)return sock.sendMessage(msg.key.remoteJid,{text:"اكتب سؤالك"});
const res=await axios.post("https://api.openai.com/v1/chat/completions",{model:"gpt-4o-mini",messages:[{role:"user",content:نص}]},{headers:{Authorization:`Bearer ${إعداد.مفتاح_الذكاء}`}});
sock.sendMessage(msg.key.remoteJid,{text:res.data.choices[0].message.content});
}};