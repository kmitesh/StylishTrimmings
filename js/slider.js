
$(document).ready(function(){
var imgname = ["web-content/socks.png","web-content/zip.png","web-content/slide1.png"];
var indexno = 0;
$("#btnnext").click(function(){
$("#picture").fadeOut(300, function(){
$("#picture").attr("src",imgname[indexno]);
indexno++;
if(indexno>2) {indexno=0;}
$("#picture").fadeIn(500);
});
});
});


$(document).ready(function(){
$(".navbar").mouseenter(function(){
$(this).addClass("navbarclass");
});
$(".navbar").mouseleave(function(){
$(this).removeCClass("navbarclass");
});
});

