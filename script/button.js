let begin;
let start= document.getElementById('button')
let sec = 0
let cntTime;

function timeIncrease() {
    timer2.innerHTML = sec + ' seconds'; 
    sec ++;
    }

start.onclick = function click() {
    cntTime = setInterval(timeIncrease,1000);
    begin = new Audio('resource/Pac-Man-Theme-Song.mp3');
        begin.play()
        // begin.volume = 0.2;
    // createBoard()
    
   
    
}



// function startbtn() {
//         start.onclick = function click() {
//             timer = setInterval(()=>{
//             timer2.innerHTML = sec + ' seconds';
//             sec ++;
//         },1000);
//         begin = new Audio('resource/Pac-Man-Theme-Song.mp3')
//         begin.play()
//     }
    
// }