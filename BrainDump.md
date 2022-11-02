// Pseudocode Below

// Very High Level:
// HTML - Page Set up
// HTML - Browser Title
// HTML - Div Container for game
// HTML - Div Container for Score
// HTML - Div Container for lives

// JS - Import All characters (Pacman, ghosts, dots, lives) using DOM
// JS - Create initial Barriers
// JS - Pacman responding to arrow movement using eventlisteners
// JS - Set up Game Obstacle
// JS - Create/set up more barriers
// JS - Set up - Hit The obstacle = Game Over - check if any crashing.
// JS - Maybe Redesign obstacle size - write a function, make it random, Place it in place
// JS - Allow Pacman and ghosts to have rotation
// JS - Insert Game Sounds
// JS - Design Game Score
// JS - Display 'Winner' at the End of the Game with score
// JS - Bonus: How many dots ate; alive for how long

//Write from the start of game to end of game. 
// user click start game. Game will start in ___ s
// arrow goes up; aroorw goes down


//Elabroated Steps on how the game works. What are the criterias 

------------
move function
    - Eventlistener for keyboard arrows
    - Identify N,E,S,W with the corresponding axis (set initial left,bottom access?)

-------------------------------------
// function newImage(src){
//     let Image = document.createElement('img')
//     Image.src = src
// }

// function draw(){
// const ctx =  document.getElementById('PacManGame').getContext('2d');
//     const img = new Image()
//     img.src = 'resource/Purple Ghost.png'
// }
    
// let foo = document.getElementById('PacManGame')
// console.log(foo)

// let imgPhoto = document.createElement('img')
// imgPhoto.src = 'resource/Purple Ghost.png'
// imgPhoto.width = "100"
// foo.append(imgPhoto)

// const ctx = PacManGame.getContext("2d");

// img.src = 'resource/Purple Ghost.png'
// img.width = '100'
// document.ctx.append(img)

// ctx.fillRect(10,10,10,10);

// function addImg(url,width){
//     let foo = document.getElementById('PacManGame')
//     let imgPhoto = document.createElement('img')
//     imgPhoto.src = url
//     imgPhoto.width = width
//     foo.append(imgPhoto)
// }

// addImg('resource/Purple-Ghost.png',"100" )


// let foo = document.getElementById('PacManGame')
// let imgPhoto = document.createElement('img')
// imgPhoto.src = 'resource/Purple-Ghost.png'
// imgPhoto.width = '50'
// imgPhoto.style.position = 'fixed'
// imgPhoto.style.left = '5px'
// foo.append(imgPhoto)

// function newImage(imgSource, leftPosition, bottomPosition){
//     let imgName = document.createElement('img')
//     imgName.src = 'Resource' + imgSource
//     imgName.style.position = 'fixed'
//     imgName.style.left = leftPosition + 'px'
//     imgName.style.bottom = bottomPosition + 'px'
//     document.body.append(imgName)
// }

// newImage('Red-Ghost', 100,100)
------------------------------------------------------------

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
--------------------------------------------------
// cntLeft = setInterval(mvDevilLeftBy1Box,milsec)
----------