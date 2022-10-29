
let layout = [
    1,1,1,1,1,1,1
    // [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    // [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    // [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    // [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    // [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    // [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    // [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    
];


// document.addEventListener('DOMContentLoaded', () => {
    // let PacMangame = document.getElementById('#PacManGame')
//     let width =50

// })

let squares = []
function createBoard() {
    for (let i = 0; i<layout.length; i++){
        if(layout[i] === 1) {
            let square = document.createElement ('div')
            console.log(square)
            // square.src = 'resource/wall.jpg'
            square.className = 'wall'
            PacManGame.appendChild(square)
            squares.push(square)
            console.log(squares[i])
            squares[i].classList.add('wall')
        }
        

        if(layout[i] === 0) {
            let square = document.createElement ('div')
            console.log(square)
            // square.src = 'resource/wall.jpg'
            square.className = 'wall'
            PacManGame.appendChild(square)
            squares.push(square)
            console.log(squares[i])
            squares[i].classList.add('wall')
        }
    }
}

createBoard()