let A = document.querySelector(".A");
let audio = document.querySelector("#audio");
let btn = document.querySelector("button");
let key = document.querySelectorAll("div");


/* console.log(audio); */
/* key.addEventListener("click",()=>{
    let key_type = key.classList[1];
    console.log(key_type);
    key.classList.add("playing");
    let audiio = document.querySelector(`audio[key-type="${key_type}"]`);

    audiio.play();
         setTimeout(()=>{
            key.classList.remove("playing");
         },180);
}) */

window.addEventListener("keydown",(e)=>{
    let key = document.querySelector(`div[key-type="${e.keyCode}"]`);
    let playbaack = document.getElementsByTagName("audio");
    console.log();
    
        key.classList.add("playing"); 

    let audio = document.querySelector(`audio[key-type="${e.keyCode}"]`);
    playbaack.playbackRate="18";
    audio.play();
    setTimeout(()=>{
        key.classList.remove("playing");
    },180);
    
})


