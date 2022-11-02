let divSelect2;
let imgPhoto2;
let divSelect3;


divSelect2 = document.getElementById('PacManGame')
imgPhoto2 = document.createElement('img')
imgPhoto2.src = 'resource/red_ghost.png'
imgPhoto2.style.position = 'fixed'
imgPhoto2.classList = 'redghostbg'
imgPhoto2.width = 1000
imgPhoto2.height = 900
divSelect2.append(imgPhoto2)



function getBackgroundImage(src){
        divSelect2 = document.getElementById('PacManGame')
        imgPhoto2 = document.createElement('img')
        imgPhoto2.src = 'resource/' + src
        imgPhoto2.style.position = 'absolute'
        imgPhoto2.classList = 'gameover'
        imgPhoto2.width = 1100
        imgPhoto2.height = 1000
        divSelect2.appendChild(imgPhoto2)
        // divSelect2.removeChild(imgPhoto2)
        
}

function rmvBackgroundImage(){
    // let divSelect2 = document.getElementsById('PacManGame')
    // imgPhoto2 = document.createElement('img')
    document.getElementsByTagName.removeChild('img')
}

// getBackgroundImage('press_start_button_below.png');

// let divSelect3 = document.getElementById('PacManGame')
// let rect = divSelect3.getBoundingClientRect()
// console.log(rect.x)