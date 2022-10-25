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



// Adding Images
function addImg(imgName,width,leftP,rightP){
    let divSelect = document.getElementById('PacManGame')
    let imgPhoto = document.createElement('img')
    imgPhoto.src = 'resource/'+imgName
    imgPhoto.width = width
    imgPhoto.style.position = 'fixed'
    imgPhoto.style.left = leftP + 'px'
    imgPhoto.style.right = rightP + 'px'
    divSelect.append(imgPhoto)
}

addImg('Purple-Ghost.png', 50, 20, 50)
addImg('PacMan-Open-Mouth.png', 50, 80, 50)
addImg('Red-Ghost.png', 50, 150, 50)


//