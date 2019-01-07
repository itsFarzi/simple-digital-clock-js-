function show(){
    var allDiv = [ document.querySelector('.date'),
    document.querySelector('.amPM') ,
    document.querySelector('.sec') ,
    document.querySelector('#day') ]
var toDay = {
date : new Date() ,
hour : new Date().getHours() ,
aOp : '' , 
weeks : [ "SunDay"  ,"MonDay ", "TuesDay" ," WednesDay" , "ThursDay ", "FriDay" , "SaturDay"  ] ,
months : ["January" ,'February ' ,' March ' ,' April ',' May'  ,"June" ,"July" , 'August ' ,'September', 'October'  , 'November ' ,'December' ]
}          
if (toDay.hour > 12) {
toDay.hour -= 12;
toDay.aOp = "PM"
} else if (toDay.hour === 0) {
toDay.hour = 12;
toDay.aOp = "AM"
}
 
hour = (toDay.hour < 10) ? "0" + toDay.hour : toDay.hour;
minute = (toDay.date.getMinutes() < 10) ? "0" +toDay.date.getMinutes() : toDay.date.getMinutes();
seconds = (toDay.date.getSeconds()  < 10) ? "0" + toDay.date.getSeconds()  : toDay.date.getSeconds() ;

allDiv[0].innerHTML = hour+":" +minute
allDiv[1].innerHTML = toDay.aOp 
allDiv[2].innerHTML = seconds
allDiv[3].innerHTML = toDay.weeks[toDay.date.getDay()] +"- "+ toDay.months[toDay.date.getMonth()] +"  "+ toDay.date.getDate()

setTimeout(show, 1000);
}

show();
   
// function showTime(){
//     var date = new Date();
//     var h = date.getHours(); // 0 - 23
//     var m = date.getMinutes(); // 0 - 59
//     var s = date.getSeconds(); // 0 - 59
//     var session = "AM";
    
//     if(h == 0)
//     {
//         h = 12;
//     }
    
//     if(h > 12){
//         h = h - 12;
//         session = "PM";
//     }
    
//     // h = (h < 10) ? "0" + h : h;
//     // m = (m < 10) ? "0" + m : m;
//     // s = (s < 10) ? "0" + s : s;
    
//     var time = h + ":" + m + ":" + s + " " + session;
//     document.querySelector('.date').innerText = time;
    
//     setTimeout(showTime, 1000);
    
// }

// showTime();
  