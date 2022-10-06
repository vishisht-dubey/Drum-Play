var x = document.querySelectorAll(".drum").length;
for (var i = 0; i < x; i++) {

    document.querySelectorAll("button")[i].addEventListener("click", function () {
        var clicked = this.innerHTML;
        sound(clicked);
        buttonanimation(clicked);

    });
}


document.addEventListener("keypress", function (event) {
    sound(event.key);
    buttonanimation(event.key);
});

function sound(key) {
    switch (key) {
        case "w":

            var audio_0 = new Audio('sounds/tom-4.mp3');
            audio_0.play();

            break;
        case "a":
            var audio_0 = new Audio('sounds/tom-3.mp3');
            audio_0.play();
            break;
        case "s":
            var audio_0 = new Audio('sounds/kick-bass.mp3');
            audio_0.play();
            break;
        case "d":
            var audio_0 = new Audio('sounds/snare.mp3');
            audio_0.play();
            break;
        case "j":
            var audio_0 = new Audio('sounds/crash.mp3');
            audio_0.play();
            break;
        case "k":
            var audio_0 = new Audio('sounds/tom-1.mp3');
            audio_0.play();
            break;
        case "l":
            var audio_0 = new Audio('sounds/tom-2.mp3');
            audio_0.play();
            break;
    }
}
 function buttonanimation(currentkey)
 {
    document.querySelector("."+currentkey).classList.add("ripple");
  //  document.querySelector("body").classList.add("ripple");
    setTimeout(function ()
    {
        document.querySelector("."+currentkey).classList.remove("ripple");
        //document.querySelector("body").classList.remove("ripple");
    },100);
 }
