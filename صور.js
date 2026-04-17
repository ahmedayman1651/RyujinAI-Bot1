module.exports={اسم:"صور",تنفيذ(sock,msg,args){
const q=args.join(" ")||"anime";
sock.sendMessage(msg.key.remoteJid,{text:"📸 https://www.google.com/search?tbm=isch&q="+q});
}};