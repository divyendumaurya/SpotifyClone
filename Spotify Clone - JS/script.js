

//initialize the variables
let songIndex = 0;
let audioElement = new Audio('./assets/music/1.mp3');
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");
let songItems = Array.from(document.getElementsByClassName('songsItem'));
let volumeIcon = document.getElementById('volumeIcon');







let songs= [
{songName:"Steal my Girl - One Direction" , filepath:"./assets/music/1.mp3" , coverPath: "./assets/covers/1.jpg"},
{songName:"Living While we're young - One Direction" , filepath:"./assets/music/2.mp3" , coverPath: "./assets/covers/2.jpg" },
{songName:"Story of my life - One Direction" , filepath:"./assets/music/3.mp3" , coverPath: "./assets/covers/3.jpg" },
{songName:"You and I - One Direction" , filepath:"./assets/music/4.mp3" , coverPath: "./assets/covers/4.jpg" },
{songName:"Drag me down - One Direction" , filepath:"./assets/music/5.mp3" , coverPath: "./assets/covers/5.png" },
{songName:"Best Song Ever - One Direction" , filepath:"./assets/music/6.mp3" , coverPath: "./assets/covers/6.png"},
{songName:"What makes you beautiful -One Direction" , filepath:"./assets/music/7.mp3" , coverPath: "./assets/covers/7.png"},
{songName:"Kiss You - One Direction" , filepath:"./assets/music/8.mp3" , coverPath: "./assets/covers/8.jpg"},
{songName:"Perfect - One Direction" , filepath:"./assets/music/9.mp3" , coverPath: "./assets/covers/9.png"},
{songName:"One Thing Live - One Direction" , filepath:"./assets/music/10.mp3" , coverPath: "./assets/covers/10.jpg"},

]

songItems.forEach((element, i) => {
    
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
    
});



// handle play/pause 

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime <=0){
        audioElement.play();

        masterPlay.classList.remove("fa-play-circle")
        masterPlay.classList.add("fa-pause-circle")
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();

        masterPlay.classList.remove("fa-pause-circle")
        masterPlay.classList.add("fa-play-circle")
        gif.style.opacity = 0;
    }
})








//Listen to events
audioElement.addEventListener('timeupdate', ()=>{
  
    //update seekbar

    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
   
    myProgressBar.value = progress;

})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100
})


const makeAllPlays= ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach(
        (element)=>{
            

            element.classList.remove('fa-pause-circle');
            element.classList.add('fa-play-circle');

})};

Array.from(document.getElementsByClassName('songItemPlay')).forEach(
    (element)=>{
        element.addEventListener('click' , (e)=>{
            

            if(audioElement.paused ){
                makeAllPlays();
                songIndex = parseInt(e.target.id);
            e.target.classList.remove('fa-play-circle');
            e.target.classList.add('fa-pause-circle');
            audioElement.src = `./assets/music/${songIndex+1}.mp3`;
            masterSongName.innerText=songs[songIndex].songName ;
            audioElement.currentTime = 0;
            audioElement.play();
            gif.style.opacity = 1;
            masterPlay.classList.remove("fa-play-circle");
            masterPlay.classList.add("fa-pause-circle");
            

            
        } 

            else{
                makeAllPlays();
                songIndex = parseInt(e.target.id);
            e.target.classList.remove('fa-pause-circle');
            e.target.classList.add('fa-play-circle');
            audioElement.src = `./assets/music/${songIndex+1}.mp3`;
            masterSongName.innerText=songs[songIndex].songName ;
            audioElement.currentTime = 0;
            audioElement.pause();
            gif.style.opacity = 0;
            masterPlay.classList.remove("fa-pause-circle");
            masterPlay.classList.add("fa-play-circle");
                
            };
           
       

        }
        )
    }
);


//For next / previous buttons

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex >=9){
        songIndex = 0
    }
    else{
        songIndex += 1
    };
    audioElement.src = `./assets/music/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName+ " " +songs[songIndex].endTime ;
            audioElement.currentTime = 0;
            audioElement.play();
            masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex <=0){
        songIndex =0
    }
    else{
        songIndex -= 1;
    };
    audioElement.src = `./assets/music/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName+ " " +songs[songIndex].endTime;
            audioElement.currentTime = 0;
            audioElement.play();
            masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
})


// Volume Slider 

document.getElementById('volBar').addEventListener("change" , (e)=>{
console.log(e.target.value)
audioElement.volume = e.target.value / 100;
if(audioElement.volume === 0){
    console.log("000");
    volumeIcon.classList.remove('fa-volume-high');
    volumeIcon.classList.add('fa-volume-xmark');
}
else{
    volumeIcon.classList.add('fa-volume-high');
    volumeIcon.classList.remove('fa-volume-xmark');

}
})














// Start and End time func

// let startTime = document.getElementById('currStart');
// let endTime = document.getElementById('endTime');

// audioElement.addEventListener('timeUpdate', ()=>{
//     let audio_curr = audioElement.currentTime;
//     let audio_dur = audioElement.duration;

//     let min = Math.floor(audio_dur/60);
//     let sec = Math.floor(audio_dur%60);
// if(sec<10){
//    sec= `0${sec}`
// }

//     endTime.innerText`${min}:${sec}`;


//     let min1 = Math.floor(audio_curr/60);
//     let sec1 = Math.floor(audio_curr%60);
// if(sec1<10){
//     sec1= `0${sec1}`
// }

// startTime.innerText`${min1}:${sec1}`;
// })