class Enemy{
    constructor(className,startIndex,speed){
        this.className = className
        this.startIndex = startIndex
        this.speed = speed
        this.currentIndex = startIndex
        this.timerId=0
    }
}

enemies = [
    new Enemy('goku',34,120),
    new Enemy('goku',42,175),
    new Enemy('goku',71,100),
    new Enemy('goku',26,125),
    new Enemy('goku',30,115)
]

enemies.forEach(enemy => {
    squares[enemy.currentIndex].classList.add(enemy.className)
    squares[enemy.currentIndex].classList.add('enemy')
})

enemies.forEach(enemy => moveEnemy(enemy))

function moveEnemy(enemy){
    let directions = [-divX,divX,-divY,divY]
    let direction = directions[Math.floor(Math.random()*directions.length)]

    
    enemy.timerId = setInterval(function(){
        if(!squares[enemy.currentIndex + direction].classList.contains('wall') && !squares[enemy.currentIndex + direction].classList.contains('enemy')){
            squares[enemy.currentIndex].classList.remove(enemy.className,'enemy')
            enemy.currentIndex += direction
            squares[enemy.currentIndex].classList.add(enemy.className,'enemy')
        }
        if(squares[enemy.currentIndex].classList.contains('devil')){
            gameOver()
        }
        else{
            direction = directions[Math.floor(Math.random()*directions.length)]
        }

    },enemy.speed)
}
