module.exports={اسم:"قفل",تنفيذ(sock,msg,args){
const id=msg.key.remoteJid;const وقت=parseInt(args[0]);
if(!وقت)return sock.sendMessage(id,{text:"مدة؟"});
global.قفل_الشات[id]=true;
sock.sendMessage(id,{text:"🔒 تم القفل"});
setTimeout(()=>{delete global.قفل_الشات[id];sock.sendMessage(id,{text:"🔓 فتح"});},وقت*60000);
}};