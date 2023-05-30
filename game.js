var userClickedPattern=[];
var gamePattern=[];
var gameColors=["red","blue","green","yellow"];
var level=0;
var start=false;
function nextSequence(){
    level++;
    $("#level-title").text("Level "+ level);
    var number=Math.random();
    number=Math.floor(number*4);
    var randomColorChoose=gameColors[number];
    gamePattern.push(randomColorChoose);
    $("#"+randomColorChoose).fadeOut(100).fadeIn(100);
    playSound(randomColorChoose);
}
$(".btn").click(function(){
   var userchoosenColor=$(this).attr("id");
   userClickedPattern.push(userchoosenColor);
   playSound($(this).attr("id"));
   animationPress($(this).attr("id"));
   checkAnswer(userClickedPattern.length-1);
})
function playSound(event){
    var audio=new Audio('sounds/'+event+'.mp3')
    audio.play();
}
function animationPress(event){
    var active=document.querySelector("."+event);
    active.classList.add("pressed");
    setTimeout(function(){
active.classList.remove("pressed");
    },100);
}
$(document).keypress(function(){
   if(!start){
    $("#level-title").text("Level "+ level);
    nextSequence();
    start=true;
   }
});
function checkAnswer(event){
    if(userClickedPattern[event]===gamePattern[event]){
        console.log("win");
        if(userClickedPattern.length===gamePattern.length){
            setTimeout(function(){
                nextSequence();
                
                    },1000);
                    userClickedPattern=[];
        }
    }
    else{
        $("#level-title").text("You Lose Press any Key to Restart");
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);
        StartOver();
    }
    
}
function StartOver(){
    level=0;
    start=false;
    gamePattern=[];
    userClickedPattern=[];
}


 
    
     

