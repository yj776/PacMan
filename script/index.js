
function gameOver(){
    console.log('gameOver');

    function changePMGbackground(){
        let divSelect2 = document.getElementById('PacManGame')
        let imgPhoto2 = document.createElement('img')
        imgPhoto2.src = 'resource/gameover.jpg'
        imgPhoto2.style.position = 'fixed'
        imgPhoto2.classList = 'gameover'
        imgPhoto2.width = 1000
        imgPhoto2.height = 700
        divSelect2.append(imgPhoto2)
        let die = new Audio('resource/pacman-die.mp3').play()
        begin.pause()
        console.log('stop')
    }
    changePMGbackground()
    
    
}



// Adding Images
// function addImg(imgName,width,leftP,btmP){
//     let divSelect = document.getElementById('PacManGame')
//     let imgPhoto = document.createElement('img')
//     imgPhoto.src = 'resource/'+imgName
//     imgPhoto.width = width //What is the default unit of measure? why img goes away when px is added
//     imgPhoto.style.position = 'fixed'
//     imgPhoto.style.left = leftP  + 'px'
//     imgPhoto.style.bottom = btmP  + 'px'
//     divSelect.append(imgPhoto)
//     return imgPhoto
//     // return imgPhoto //?? Do i need this here?
// }

// addImg('purple_ghost.png', 50, 20, 300)
// addImg('pacman_open_mouth.png', 50, 80, 300)
// let redGhost = addImg('red_ghost.png', 100, 590, 130)
// let wall = addImg("wall.jpg", 100, 800, 400)


// function move() {
    
//     let continueLeft; //declare
//     let continueRight;
//     let continueUp;
//     let continueDown;

//     //For window Size 80% zoom
//     let leftBound = 590
//     let rightBound = 1400
//     let btmBound = 130
//     let topBound = 730 //unit in px
//     let ms = 50
//     let pix = 5
    
//     window.addEventListener("keydown",(e) => {

//     function mvGhostLeftBy5px(){
//         if(parseInt(redGhost.style.left) >= leftBound){
//             redGhost.style.left = parseInt(redGhost.style.left) - pix + 'px';
//         }
//         else(clearInterval(continueLeft))
//     }
    
//     function mvGhostRightBy5px(){
//         if(parseInt(redGhost.style.left) <= rightBound){
//             redGhost.style.left = parseInt(redGhost.style.left) + pix + 'px'; 
//         }
//         else(clearInterval(continueRight))
//     }
  
//     function mvGhostUpBy5px(){
//         if(parseInt(redGhost.style.bottom) <= topBound){
//             redGhost.style.bottom = parseInt(redGhost.style.bottom) + pix + 'px';
//         }
//         else
//             (clearInterval(continueDown))
//     }

//     function mvGhostDownBy5px(){
//         if(parseInt(redGhost.style.bottom) >= btmBound){
//         redGhost.style.bottom = parseInt(redGhost.style.bottom) - pix + 'px';
//         }
//         else
//             (clearInterval(continueDown))
//     }
    
    

//     switch (e.key){
//         case 'ArrowLeft':
//             clearInterval(continueRight);    
//             clearInterval(continueUp);
//             clearInterval(continueDown);
//             continueLeft = setInterval(mvGhostLeftBy5px,ms); //continueLeft stores the ID (string/num/others) returned from setInterval method
//             // console.log(continueLeft)
//             break;

//         case 'ArrowRight': 
//             clearInterval(continueLeft);
//             clearInterval(continueUp);
//             clearInterval(continueDown);
//             continueRight = setInterval(mvGhostRightBy5px,ms);
//             break;

//         case 'ArrowUp':
//             clearInterval(continueLeft);
//             clearInterval(continueRight);
//             clearInterval(continueDown);
//             continueUp = setInterval(mvGhostUpBy5px,ms);
//             break;

//         case 'ArrowDown':
//             clearInterval(continueLeft);
//             clearInterval(continueRight);
//             clearInterval(continueUp);
//             continueDown = setInterval(mvGhostDownBy5px,ms);
//             break;
        
//     } 

// });
// }

// move();






