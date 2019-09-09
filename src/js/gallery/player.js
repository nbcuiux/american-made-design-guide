

function clicker1() {
    var elem = document.getElementById("video1");
if (!elem.fullscreenElement &&    // alternative standard method
                    !elem.mozFullScreenElement && !elem.webkitFullscreenElement && !elem.msFullscreenElement ){

if (elem.requestFullscreen) {
  elem.requestFullscreen();
} else if (elem.msRequestFullscreen) {
  elem.msRequestFullscreen();
} else if (elem.mozRequestFullScreen) {
  elem.mozRequestFullScreen();
} else if (elem.webkitRequestFullscreen) {
  elem.webkitRequestFullscreen();
}
}
}

function clicker2() {
    var elem = document.getElementById("video2");
if (!elem.fullscreenElement &&    // alternative standard method
                    !elem.mozFullScreenElement && !elem.webkitFullscreenElement && !elem.msFullscreenElement ){

if (elem.requestFullscreen) {
  elem.requestFullscreen();
} else if (elem.msRequestFullscreen) {
  elem.msRequestFullscreen();
} else if (elem.mozRequestFullScreen) {
  elem.mozRequestFullScreen();
} else if (elem.webkitRequestFullscreen) {
  elem.webkitRequestFullscreen();
}
}
}

function clicker3() {
    var elem = document.getElementById("video3");
if (!elem.fullscreenElement &&    // alternative standard method
                    !elem.mozFullScreenElement && !elem.webkitFullscreenElement && !elem.msFullscreenElement ){

if (elem.requestFullscreen) {
  elem.requestFullscreen();
} else if (elem.msRequestFullscreen) {
  elem.msRequestFullscreen();
} else if (elem.mozRequestFullScreen) {
  elem.mozRequestFullScreen();
} else if (elem.webkitRequestFullscreen) {
  elem.webkitRequestFullscreen();
}
}
}


function clicker4() {
    var elem = document.getElementById("video4");
if (!elem.fullscreenElement &&    // alternative standard method
                    !elem.mozFullScreenElement && !elem.webkitFullscreenElement && !elem.msFullscreenElement ){

if (elem.requestFullscreen) {
  elem.requestFullscreen();
} else if (elem.msRequestFullscreen) {
  elem.msRequestFullscreen();
} else if (elem.mozRequestFullScreen) {
  elem.mozRequestFullScreen();
} else if (elem.webkitRequestFullscreen) {
  elem.webkitRequestFullscreen();
}
}
}

function clicker5() {
    var elem = document.getElementById("video5");
if (!elem.fullscreenElement &&    // alternative standard method
                    !elem.mozFullScreenElement && !elem.webkitFullscreenElement && !elem.msFullscreenElement ){

if (elem.requestFullscreen) {
  elem.requestFullscreen();
} else if (elem.msRequestFullscreen) {
  elem.msRequestFullscreen();
} else if (elem.mozRequestFullScreen) {
  elem.mozRequestFullScreen();
} else if (elem.webkitRequestFullscreen) {
  elem.webkitRequestFullscreen();
}
}
}

function clicker6() {
    var elem = document.getElementById("video6");
if (!elem.fullscreenElement &&    // alternative standard method
                    !elem.mozFullScreenElement && !elem.webkitFullscreenElement && !elem.msFullscreenElement ){

if (elem.requestFullscreen) {
  elem.requestFullscreen();
} else if (elem.msRequestFullscreen) {
  elem.msRequestFullscreen();
} else if (elem.mozRequestFullScreen) {
  elem.mozRequestFullScreen();
} else if (elem.webkitRequestFullscreen) {
  elem.webkitRequestFullscreen();
}
}
}



var myVideo1=document.getElementById("video1"); 

function Pause1()
{ 
  myVideo1.pause(); 
}
function Play1()
{
if (myVideo1.paused) 
  myVideo1.play();     
} 


var myVideo2=document.getElementById("video2"); 

function Pause2()
{ 
  myVideo2.pause(); 
}
function Play2()
{
if (myVideo2.paused) 
  myVideo2.play();     
}    

var myVideo3=document.getElementById("video3"); 

function Pause3()
{ 
  myVideo3.pause(); 
}
function Play3()
{
if (myVideo3.paused) 
  myVideo3.play();     
}    

var myVideo4=document.getElementById("video4"); 

function Pause4()
{ 
  myVideo4.pause(); 
}
function Play4()
{
if (myVideo4.paused) 
  myVideo4.play();     
}    

var myVideo5=document.getElementById("video5"); 

function Pause5()
{ 
  myVideo5.pause(); 
}
function Play5()
{
if (myVideo5.paused) 
  myVideo5.play();     
}    

var myVideo6=document.getElementById("video6"); 

function Pause6()
{ 
  myVideo6.pause(); 
}
function Play6()
{
if (myVideo6.paused) 
  myVideo6.play();     
}    

var myVideo7=document.getElementById("video7"); 

function Pause7()
{ 
  myVideo7.pause(); 
}
function Play7()
{
if (myVideo7.paused) 
  myVideo7.play();     
}    

var myVideo8=document.getElementById("video8"); 

function Pause8()
{ 
  myVideo8.pause(); 
}
function Play8()
{
if (myVideo8.paused) 
  myVideo8.play();     
}    

  
    


var playersrc=$('#player').attr('src');
$('#player').mouseover(function(){
$('#player').attr('src',playersrc+'&autoplay=1');
});
$('#player').click(function(){
$('#player').click(playFullscreen);
});
$('#player').mouseout(function(){
$('#player').attr('src',playersrc);
});

var playersrc1=$('#player1').attr('src');
$('#player1').mouseover(function(){
$('#player1').attr('src',playersrc1+'&autoplay=1');
});
$('#player1').mouseout(function(){
$('#player1').attr('src',playersrc1);
});

var playersrc2=$('#player2').attr('src');
$('#player2').mouseover(function(){
$('#player2').attr('src',playersrc2+'&autoplay=1');
});
$('#player2').mouseout(function(){
$('#player2').attr('src',playersrc2);
});

var playersrc3=$('#player3').attr('src');
$('#player3').mouseover(function(){
$('#player3').attr('src',playersrc3+'&autoplay=1');
});
$('#player3').mouseout(function(){
$('#player3').attr('src',playersrc3);
});

var playersrc4=$('#player4').attr('src');
$('#player4').mouseover(function(){
$('#player4').attr('src',playersrc1+'&autoplay=1');
});
$('#player4').mouseout(function(){
$('#player4').attr('src',playersrc4);
});

var playersrc5=$('#player5').attr('src');
$('#player5').mouseover(function(){
$('#player5').attr('src',playersrc5+'&autoplay=1');
});
$('#player5').mouseout(function(){
$('#player5').attr('src',playersrc5);
});

var playersrc6=$('#player6').attr('src');
$('#player6').mouseover(function(){
$('#player6').attr('src',playersrc6+'&autoplay=1');
});
$('#player6').mouseout(function(){
$('#player6').attr('src',playersrc6);
});

var playersrc7=$('#player7').attr('src');
$('#player7').mouseover(function(){
$('#player7').attr('src',playersrc7+'&autoplay=1');
});
$('#player7').mouseout(function(){
$('#player7').attr('src',playersrc7);
});

var playersrc1=$('#player7').attr('src');
$('#player7').mouseover(function(){
$('#player7').attr('src',playersrc7+'&autoplay=1');
});
$('#player7').mouseout(function(){
$('#player7').attr('src',playersrc7);
});

var playersrc8=$('#player8').attr('src');
$('#player8').mouseover(function(){
$('#player8').attr('src',playersrc8+'&autoplay=1');
});
$('#player8').mouseout(function(){
$('#player8').attr('src',playersrc8);
});

var playersrc9=$('#player9').attr('src');
$('#player9').mouseover(function(){
$('#player9').attr('src',playersrc9+'&autoplay=1');
});
$('#player9').mouseout(function(){
$('#player9').attr('src',playersrc9);
});

var playersrc10=$('#player10').attr('src');
$('#player10').mouseover(function(){
$('#player10').attr('src',playersrc10+'&autoplay=1');
});
$('#player10').mouseout(function(){
$('#player10').attr('src',playersrc10);
});

var playersrc11=$('#player11').attr('src');
$('#player11').mouseover(function(){
$('#player11').attr('src',playersrc11+'&autoplay=1');
});
$('#player11').mouseout(function(){
$('#player11').attr('src',playersrc11);
});

var playersrc12=$('#player2').attr('src');
$('#player12').mouseover(function(){
$('#player12').attr('src',playersrc12+'&autoplay=1');
});
$('#player12').mouseout(function(){
$('#player12').attr('src',playersrc12);
});

var playersrc13=$('#player13').attr('src');
$('#player13').mouseover(function(){
$('#player13').attr('src',playersrc1+'&autoplay=1');
});
$('#player13').mouseout(function(){
$('#player13').attr('src',playersrc13);
});

var playersrc14=$('#player14').attr('src');
$('#player14').mouseover(function(){
$('#player14').attr('src',playersrc14+'&autoplay=1');
});
$('#player14').mouseout(function(){
$('#player14').attr('src',playersrc14);
});