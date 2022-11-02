let divSelect2;
let imgPhoto2;




function getBackgroundImage(src){
        divSelect2 = document.getElementById('PacManGame')
        imgPhoto2 = document.createElement('img')
        imgPhoto2.src = 'resource/' + src
        imgPhoto2.style.position = 'absolute'
        imgPhoto2.classList = 'gameover'
        imgPhoto2.width = 1000
        imgPhoto2.height = 700
        divSelect2.append(imgPhoto2)
}

// getBackgroundImage('press_start_button_below.png');

let divSelect3 = document.getElementById('PacManGame')
let rect = divSelect3.getBoundingClientRect()
// console.log(rect.x)