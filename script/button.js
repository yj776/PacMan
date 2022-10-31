let begin;

function startbtn() {
    let start= document.getElementById('button')
    // let count= document.getElementById('timer2')
    // console.log('clicked')
    let sec = 0
    start.onclick = function click() {
        timer = setInterval(()=>{
            timer2.innerHTML = sec + ' seconds';
            sec ++;
        },1000);
        begin = new Audio('resource/Pac-Man-Theme-Song.mp3')
        begin.play()

        // gameOver()
        // imgPhoto2.classList.remove('gameover')
    }
    
}