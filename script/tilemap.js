
let layout = [
    0,0,0,0,0,0,0,0,0,0,0,
    0,1,1,0,1,1,1,1,0,1,0,
    0,1,1,1,1,0,0,1,1,1,0,
    0,1,0,1,1,1,0,1,0,1,1,
    1,1,1,1,0,1,1,1,0,1,0,
    0,1,1,0,0,1,0,1,1,1,0,
    0,0,1,1,0,1,1,1,1,0,0,
    0,1,1,1,0,1,1,0,1,1,0,
    0,1,0,1,1,1,1,0,1,1,0,
    0,0,0,0,0,0,0,0,0,0,0
    
];


let squares = []
function createBoard() {
    for (let i = 0; i<layout.length; i++){
        let square = document.createElement ('div')
        PacManGame.appendChild(square)
        squares.push(square)
        
            if (layout[i] === 0) {
                squares[i].classList.add('wall')
            
            }
            if(layout[i] === 1) {
                squares[i].classList.add('pacdot')
                
            }
            if (layout[i] === 2) {
                squares[i].classList.add('devil')
            }
            if (layout[i] === 3) {
                squares[i].classList.add('goku')
            }
            if (layout[i] === 4) {
                squares[i].classList.add('bkg')
            }
        }
}

createBoard()