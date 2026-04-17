module.exports={اسم:"يومية",تنفيذ(sock,msg,{فلوس}){
const id=msg.key.participant||msg.key.remoteJid;
فلوس[id]=(فلوس[id]||0)+50;
sock.sendMessage(msg.key.remoteJid,{text:"💰 +50"});
}};