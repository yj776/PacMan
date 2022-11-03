class enemyClass{
    constructor(className,IdxPosition,speed){
        this.className = className
        this.IdxPosition = IdxPosition
        this.speed = speed
        this.cntmvenemy = 0
    }
}

enemies = [
    new enemyClass('goku',34,120),
    new enemyClass('goku',42,175),
    new enemyClass('goku',71,100),
    new enemyClass('goku',26,125),
    new enemyClass('goku',30,115)
]

enemies.forEach(enemy => {
    boxes[enemy.IdxPosition].classList.add(enemy.className)
    boxes[enemy.IdxPosition].classList.add('enemy')
})

enemies.forEach(enemy => moveEnemy(enemy))

function moveEnemy(enemy){
    let possibleDirection = [-divX,divX,-divY,divY]
    let direction = possibleDirection[Math.floor(Math.random()*possibleDirection.length)]

    enemy.cntmvenemy = setInterval(function(){
        
        let newPositionGoku = enemy.IdxPosition + direction

        if(!boxes[newPositionGoku].classList.contains('wall') && !boxes[newPositionGoku].classList.contains('enemy')){
            boxes[enemy.IdxPosition].classList.remove(enemy.className,'enemy')
            enemy.IdxPosition = newPositionGoku
            // enemy.IdxPosition += direction
            boxes[enemy.IdxPosition].classList.add(enemy.className,'enemy')
        }
        if(boxes[enemy.IdxPosition].classList.contains('devil')){
            gameOver()
        }
        else{
            direction = possibleDirection[Math.floor(Math.random()*possibleDirection.length)]
        }

    },enemy.speed)
}
