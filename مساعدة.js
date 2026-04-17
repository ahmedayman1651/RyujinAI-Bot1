module.exports={اسم:"مساعدة",تنفيذ(sock,msg){
sock.sendMessage(msg.key.remoteJid,{text:`📜 الأوامر:
.ذكاء .صور .فيديو .لعبة
.فلوس .يومية .مستوى
.قفل .فتح
.طرد .ترقية .اعفاء
`});
}};