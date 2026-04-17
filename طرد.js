module.exports={اسم:"طرد",async تنفيذ(sock,msg){
const u=msg.message.extendedTextMessage?.contextInfo?.participant;
if(u) await sock.groupParticipantsUpdate(msg.key.remoteJid,[u],"remove");
}};