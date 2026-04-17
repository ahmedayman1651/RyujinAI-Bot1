module.exports={اسم:"فيديو",تنفيذ(sock,msg,args){
const q=args.join(" ")||"anime";
sock.sendMessage(msg.key.remoteJid,{text:"🎬 https://www.youtube.com/results?search_query="+q});
}};