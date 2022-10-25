

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