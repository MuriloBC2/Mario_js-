const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
var butao = document.querySelector('.button')


const jump =() =>{
   mario.classList.add('jump')

   setTimeout(() =>{
    
      mario.classList.remove('jump')
   }, 500)
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')

    if (pipePosition <= 120 && marioPosition < 80 && pipePosition > 0) {
        
        pipe.style.animation = 'none'
        pipe.style.offsetLeft = `${pipePosition}px`

        mario.style.animation = 'none'
        mario.style.offsetLeft = `${marioPosition}px`

        mario.src = 'imgs/game-over.png'
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        clearInterval(loop)

        var carrega = function(){
            window.location.reload()
        }
        
        document.addEventListener('keydown', carrega)
    }

}
,10)


document.addEventListener('keydown', jump)


