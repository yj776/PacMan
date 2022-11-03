let devildiv = 79
let divY = 11
let divX = 1
let milsec = 500
boxes[devildiv].classList.add('devil')


// let cntUp;
// let cntDown;
// let cntRight;
// let cntLeft;


let newIdx;
let newIdx2;
let newIdx3;
let newIdx4;

window.addEventListener('keydown',(e)=>{

    function mvDevilUpBy1Box(){
        let newIdx = devildiv - divY
        boxes[newIdx].classList.add('devil');
        boxes[devildiv].classList.remove('devil')
        devildiv = newIdx
    }


    function mvDevilDownBy1Box(){
        let newIdx2 = devildiv + divY
        boxes[newIdx2].classList.add('devil');
        // console.log(boxes[newIdx2].classList.add('devil'));
        boxes[devildiv].classList.remove('devil')
        devildiv = newIdx2
    }

    function mvDevilRightBy1Box(){
        let newIdx3 = devildiv + divX
        boxes[newIdx3].classList.add('devil');
        boxes[devildiv].classList.remove('devil')
        devildiv = newIdx3
    }

    function mvDevilLeftBy1Box(){
        let newIdx4 = devildiv - divX
        boxes[newIdx4].classList.add('devil');
        boxes[devildiv].classList.remove('devil')
        devildiv = newIdx4
    }



    switch(e.key){
        case 'w' :  
            let newIdx = devildiv - divY
                if(newIdx >= 2 && layout[devildiv-divY] !==0){
                    mvDevilUpBy1Box()
                }

                if(boxes[devildiv].classList.contains('goku')){
                    gameOver()
                }     
            break;

        case 's':
            let newIdx2 = devildiv + divY    
                if (newIdx2 < 99 && layout[devildiv+divY] !==0){
                    mvDevilDownBy1Box()
                }
                if(boxes[devildiv].classList.contains('goku')){
                    gameOver()
                }
            break;

        case 'd':
            let newIdx3 = devildiv + divX
                if (newIdx3 < 100 && layout[devildiv+divX] !==0){
                    mvDevilRightBy1Box()
                }
                if(boxes[devildiv].classList.contains('goku')){
                    gameOver()
                }
            break;

        case 'a':
            let newIdx4 = devildiv - divX
                if (newIdx4 > 0 && layout[devildiv-divX] !==0){
                    mvDevilLeftBy1Box()
                }
                if(boxes[devildiv].classList.contains('goku')){
                    gameOver()
                }
            break;

        }
        })