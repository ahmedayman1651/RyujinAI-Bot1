module.exports={اسم:"ترقية",async تنفيذ(sock,msg){
const u=msg.message.extendedTextMessage?.contextInfo?.participant;
if(u) await sock.groupParticipantsUpdate(msg.key.remoteJid,[u],"promote");
}};