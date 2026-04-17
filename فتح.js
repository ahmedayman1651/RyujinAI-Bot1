module.exports={اسم:"فتح",تنفيذ(sock,msg,args){
const id=msg.key.remoteJid;const وقت=parseInt(args[0]);
if(!وقت)return sock.sendMessage(id,{text:"مدة؟"});
delete global.قفل_الشات[id];
sock.sendMessage(id,{text:"🔓 تم الفتح"});
setTimeout(()=>{global.قفل_الشات[id]=true;sock.sendMessage(id,{text:"🔒 قفل"});},وقت*60000);
}};