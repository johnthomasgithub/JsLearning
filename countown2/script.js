

var countdown = document.getElementById('countdown');
var initialval = countdown.innerHTML;

setInterval(function(){
    initialval = initialval >0 ? initialval -1 :0;
    countdown.innerHTML  = initialval;
    countdown.style.fontSize = initialval * 100 +"px";
},1000);
