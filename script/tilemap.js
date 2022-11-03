
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


let boxes = []
function createLayout() {
    for (let i = 0; i<layout.length; i++){
        let box = document.createElement ('div')
        PacManGame.appendChild(box)
        boxes.push(box)
        
            if (layout[i] === 0) {
                boxes[i].classList.add('wall')
            
            }
            if(layout[i] === 1) {
                boxes[i].classList.add('pacdot')
                
            }
            if (layout[i] === 2) {
                boxes[i].classList.add('devil')
            }
            if (layout[i] === 3) {
                boxes[i].classList.add('goku')
            }
            if (layout[i] === 4) {
                boxes[i].classList.add('bkg')
            }
        }
}

createLayout()