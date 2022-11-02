class Enemy{
    constructor(className,startIndex,speed){
        this.className = className
        this.startIndex = startIndex
        this.speed = speed
        this.currentIndex = startIndex
        this.timerId=NaN
    }
}

enemies = [new Enemy('goku',34,500)]

enemies.forEach(enemy => {
    squares[enemy.currentIndex].classList.add(enemy.className)
    squares[enemy.currentIndex].classList.add('enemy')
})

enemies.forEach(enemy => moveEnemy(enemy))

function moveEnemy(enemy){
    let directions = [-divX,divX,-divY,divY]
    let direction = directions[Math.floor(Math.random()*directions.length)]

    // enemy.timerId = setInterval(function(){
    //     if(!squares[enemy.currentIndex + direction].classList.contains('wall') && !squares[enemy.currentIndex + direction].classList.contains('enemy')){
    //         squares[enemy.currentIndex].classList.remove(enemy.className,'enemy','scared-enemy')
    //         enemy.currentIndex += direction
    //         squares[enemy.currentIndex].classList.add(enemy.className,'enemy')
    //     }
    //     else{
    //         direction = directions[Math.floor(Math.random()*directions.length)]
    //     }

    // },enemy.speed)
}