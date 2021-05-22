//THIS CONTROLS THE HAMBURGER BUTTON'S TOGGLE

document.addEventListener('DOMContentLoaded', nav)

function nav(){
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.main-nav');
    burger.addEventListener('click', ()=>{
        nav.classList.toggle('show')
    })
}

//THIS CONTROLS THE TOGGLE FOR THE STICKINESS OF THE HEADER ON SCROLL
window.addEventListener("scroll", function(){
    const mainNav=document.querySelector("#main-nav");
    mainNav.classList.toggle("fixed", window.scrollY > 0);
});


//THIS CONTROLS THE PAUSE AND PLAY OF AUDIO
const muteBtn= document.querySelector("#mutebtn");
const speakerBtn= document.querySelector("#speakerbtn");
const playAudio = document.querySelector("#playAudio");


(function(){
    muteBtn.addEventListener("click", ()=>{
        playAudio.play();
    });

    speakerBtn.addEventListener("click", ()=>{
        playAudio.pause();
        speakerBtn.style.display="none";
        muteBtn.style.display="block";
    });

    playAudio.addEventListener("playing", ()=>{
        speakerBtn.style.display="block";
        muteBtn.style.display="none";
    });

    playAudio.addEventListener("ended", ()=>{
        speakerBtn.style.display="none";
        muteBtn.style.display="block";
    });

    playAudio.addEventListener("abort", ()=>{
        speakerBtn.style.display="none";
        muteBtn.style.display="block";
    });
    
})()


//THIS CONTROLS THE VIDEO PARALLAX
(function(){
    const videoContainer= document.querySelector(".videocontainer");
    const audioContainer= document.querySelector(".audiocontainer");

    window.addEventListener("scroll", ()=>{
        let value= window.scrollY
        videoContainer.style.top= value * 50 + "px";
        audioContainer.style.bottom= value * 0.2 + "px";
        
    })
})()

