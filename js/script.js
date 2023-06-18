const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clound = document.querySelector('.clouds')
const clound2 = document.querySelector('.clouds-2')

const jump = () => { 
    mario.classList.add('jump');

    setTimeout( () => {
    mario.classList.remove('jump');
    }, 600);
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const cloundPosition = clound.offsetLeft;
    const clound2Position = clound2.offsetLeft;


    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        clound.style.animation = 'none';
        clound.style.left=`${cloundPosition}px`;
        clound2.style.animation = 'none';
        clound2.style.left=`${clound2Position}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './img/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px' 

        document.querySelector('.gameOver').style.opacity = '1';

        clearInterval(loop);
    
    }

}, 10)


document.addEventListener('keydown', (ev)=>{
    if(ev.code == 'Escape'){
       location.href = "./index.html?"
    }else{
        jump();
    }
});

document.addEventListener('click', jump);