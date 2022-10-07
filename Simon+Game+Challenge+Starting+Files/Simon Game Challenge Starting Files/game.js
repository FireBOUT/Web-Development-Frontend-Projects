var gamePattern=[];
var userClickedPattern=[];
var level=0;
var started= false;
const buttonColors = ["red", "blue", "green", "yellow"];


$(document).keydown(function(){
  if(!started){
    $("h1").text("level"+level);
    nextSequence();
    started=true;
  }
})

function nextSequence(){
  var randomNumber= Math.floor(Math.random()*4);
  var randomChosenColour=buttonColors[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#"+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
  $("h1").text("level "+ level);
  level=level+1;

}

$(".btn").click(function(){
  var userChoosenColor= $(this).attr("id");   //this.id;
  userClickedPattern.push(userChoosenColor);
  playSound(userChoosenColor);
  animatePress(userChoosenColor);
  // nextSequence();
});

function playSound(name){
  var audio = new Audio("sounds/"+name+".mp3");
             audio.play();
}

function animatePress(currentColour){
  $("#"+currentColour).addClass("pressed");
  setTimeout(function () {
    $("#"+currentColour).removeClass("pressed");
  }, 100);
}
