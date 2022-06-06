const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe')
const marioJump = () => {
    mario.classList.add('mario-jump')

    setTimeout(() => {
        mario.classList.remove('mario-jump')
    },500)
}
document.addEventListener('keydown', marioJump)

const loop = setInterval(() => {

    // if tube offset is 115px in front of mario
    const pipePosition = pipe.offsetLeft;
    // taking the computed style in the image of mario
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 180) {
        
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`
        
        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`

        mario.src = './assets/img/game-over.png'
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        clearInterval(loop);
           
    }

}, 10)