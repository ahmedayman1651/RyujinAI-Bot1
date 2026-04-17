module.exports={اسم:"فلوس",تنفيذ(sock,msg,{فلوس}){
const id=msg.key.participant||msg.key.remoteJid;
فلوس[id]=فلوس[id]||100;
sock.sendMessage(msg.key.remoteJid,{text:"💰 "+فلوس[id]});
}};