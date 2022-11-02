let devildiv = 40
let divY = 10
let divX = 1
let milsec = 500
squares[devildiv].classList.add('devil')


let cntUp;
let cntDown;
let cntRight;
let cntLeft;


let newIdx;
let newIdx2;
let newIdx3;
let newIdx4;



window.addEventListener('keydown',(e)=>{
    
// function mvDevilUpBy1Box(){
//     if(newIdx >= 2 && layout[newIdx] !== 0)
    
//     let newIdx = devildiv - divY
//     squares[newIdx].classList.add('devil');
//     squares[devildiv].classList.remove('devil')
//     squares[devildiv].classList.add('bkg')
//     devildiv = newIdx
//     return newIdx
// }

function mvDevilUpBy1Box(){
    let newIdx = devildiv - divY
    squares[newIdx].classList.add('devil');
    // console.log(squares[newIdx].classList)
    squares[devildiv].classList.remove('devil')
    // console.log(squares[devildiv])
    devildiv = newIdx
}


function mvDevilDownBy1Box(){
    let newIdx2 = devildiv + divY
    squares[newIdx2].classList.add('devil');
    // console.log(squares[newIdx2].classList.add('devil'));
    squares[devildiv].classList.remove('devil')
    devildiv = newIdx2
}

function mvDevilRightBy1Box(){
    let newIdx3 = devildiv + divX
    squares[newIdx3].classList.add('devil');
    squares[devildiv].classList.remove('devil')
    devildiv = newIdx3
}

function mvDevilLeftBy1Box(){
    let newIdx4 = devildiv - divX
    squares[newIdx4].classList.add('devil');
    squares[devildiv].classList.remove('devil')
    devildiv = newIdx4
}



switch(e.key){
    case 'w' :  
        // clearInterval(cntDown)
        // clearInterval(cntRight)
        // clearInterval(cntLeft)
        
        let newIdx = devildiv - divY
            if(newIdx >= 2 && layout[devildiv-divY] !==0){
                // cntUp = setInterval(mvDevilUpBy1Box,milsec)
                console.log(devildiv)
                console.log(divY)
                console.log(newIdx)
                // console.log('setIntervalId: ' + cntUp)


                mvDevilUpBy1Box()
                // console.log('indexOf1BoxUp:' + newIdx)
                // console.log(devildiv-divY)
                // console.log('indexValueOf1BoxUp inside layout array: '+ layout[devildiv-divY])
            }

            if (layout[devildiv] === 3){
                gameOver()
            }

            
        break;

    case 's':
        // clearInterval(cntUp)
        // clearInterval(cntRight)
        // clearInterval(cntLeft)
        
        let newIdx2 = devildiv + divY    
            if (newIdx2 < 79 && layout[devildiv+divY] !==0){
                // cntDown = setInterval(mvDevilDownBy1Box,milsec)
                mvDevilDownBy1Box()
            }
            if (layout[devildiv] === 3){
                gameOver()
            }
           
        break;

    case 'd':
        // clearInterval(cntUp)
        // clearInterval(cntDown)
        // clearInterval(cntLeft)
    
        let newIdx3 = devildiv + divX
            if (newIdx3 < 80 && layout[devildiv+divX] !==0){
                // cntRight = setInterval(mvDevilRightBy1Box,milsec)
                mvDevilRightBy1Box()
            }
            if (layout[devildiv] === 3){
                gameOver()
            }
        break;

    case 'a':
        // clearInterval(cntUp)
        // clearInterval(cntDown)
        // clearInterval(cntRight)
    
        let newIdx4 = devildiv - divX
            if (newIdx4 > 0 && layout[devildiv-divX] !==0){
                // cntLeft = setInterval(mvDevilLeftBy1Box,milsec)
                mvDevilLeftBy1Box()
            }
            if (layout[devildiv] === 3){
                gameOver()
            }
        break;

    }


    })