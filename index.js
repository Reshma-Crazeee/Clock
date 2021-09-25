
setInterval(time_fn,500);
function time_fn(){
    var time = new Date();
    var hr = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();
    var ap = "AM";

    if(hr > 12){ ap = "PM";}

    if(hr > 12){ hr = hr -12;}
    if(hr ==0){hr =12;}

    if(hr < 10){ hr = '0' + hr;}
    if(min < 10){ min = '0' + min;}
    if(sec < 10){ sec = '0' + sec;}

    document.getElementById('hours').innerHTML = hr;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;
    document.getElementById('meri').innerHTML = ap;
    
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function boom(){
    var four = document.getElementById("imgone")
    four.src = "images/party.jpeg";
    document.getElementById("name").innerHTML = "&nbsp;&nbsp;&nbsp;   PARTY TIME !!";
    document.getElementById("wish").innerHTML = "&nbsp;&nbsp;&nbsp; PARTY la la la ";


}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function morning(){
    var first = document.getElementById('imgone');
    first.src = "images/early.png";
    document.getElementById("name").innerHTML = "&nbsp;&nbsp;&nbsp; WAKE UP !!";
    document.getElementById("wish").innerHTML = "&nbsp;&nbsp;&nbsp; GOOD MORNING ";

}

function noon(){
    var second = document.getElementById('imgone');
    second.src = "images/pizza.png";
    document.getElementById("name").innerHTML = "&nbsp;&nbsp;&nbsp; LET'S HAVE SOME LUNCH  !!";
    document.getElementById("wish").innerHTML = "&nbsp;&nbsp;&nbsp; GOOD AFTERNOON ";

    
}

function night(){
    var third = document.getElementById('imgone');
    third.src = "images/sleep.png";
    document.getElementById("name").innerHTML = "&nbsp;&nbsp;&nbsp; GOOD NIGHT !!";
    document.getElementById("wish").innerHTML = "&nbsp;&nbsp;&nbsp; GOOD NIGHT ";
}

function rest(){
    var five = document.getElementById('imgone');
    five.src = "images/files.png";
    document.getElementById("name").innerHTML = "&nbsp;&nbsp;&nbsp; FREE TIME !!";
    document.getElementById("wish").innerHTML = "&nbsp;&nbsp;&nbsp; UPDATING FILES ";
}



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var now =new Date();
var day_night = now.getHours();
if(day_night >=8 && day_night<12){morning();}
else if(day_night >=12 && day_night < 17){noon();}
else if(day_night >=20 && day_night < 24){night();}
else{rest();}

