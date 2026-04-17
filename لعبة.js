module.exports={اسم:"لعبة",تنفيذ(sock,msg){
const arr=["مين أقوى؟","قول اسم أنمي","تحدي"];
sock.sendMessage(msg.key.remoteJid,{text:"🎮 "+arr[Math.floor(Math.random()*arr.length)]});
}};