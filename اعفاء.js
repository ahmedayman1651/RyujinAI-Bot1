module.exports={اسم:"اعفاء",async تنفيذ(sock,msg){
const u=msg.message.extendedTextMessage?.contextInfo?.participant;
if(u) await sock.groupParticipantsUpdate(msg.key.remoteJid,[u],"demote");
}};