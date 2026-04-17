module.exports={اسم:"مستوى",تنفيذ(sock,msg,{مستوى}){
const id=msg.key.participant||msg.key.remoteJid;
sock.sendMessage(msg.key.remoteJid,{text:"🏆 "+(مستوى[id]||0)});
}};