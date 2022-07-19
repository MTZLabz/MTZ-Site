const dino = document.querySelector('.dino');
const nave = document.querySelector('.nave');
const background = document.querySelector('.background');

let isJumping = false;
let isGameOver = false;
let position = 0;

function handleKeyUp(event) {
  if (event.keyCode === 32 || event.keyCode === 38) {
    if (!isJumping) {
      jump();
    }
  }
}

function jump() {
  isJumping = true;

  let upInterval = setInterval(() => {
    if (position <= -60) {
      clearInterval(upInterval);

      let downInterval = setInterval(() => {
        if (position >= 0) {
          clearInterval(downInterval);
          isJumping = false;
        } else {
          position += 60;
          dino.style.top = position + 'px';
        }
      }, 350);

    } else {
      position -= 60;
      dino.style.top = position + 'px';
    }
  }, 1);
}
let vaquinhas = 0;
let navinhas = 0;

function createCactus() {
  const cactus = document.createElement('div');
  const nave = document.createElement('div');

  let cactusPosition = 1920;
  let navePosition = 0;
  let numeroInicial = 6000;
  let randomTime = Math.random() * numeroInicial;

  cactus.classList.add('cactus');
  background.appendChild(cactus);


  let leftTimer = setInterval(() => {
    if (cactusPosition <= -60) {
      cactus.remove();
    } else {
      cactusPosition -= 4;
      cactus.style.left = cactusPosition + 'px';
    }
    if (navePosition < 1920) {
      navePosition += 15;
      nave.style.left = navePosition + 'px';
    } else {
      nave.remove();
    }


    if (cactusPosition === 80) {
      jump();
      background.appendChild(nave);
      nave.classList.add('nave');
      navePosition = 0;

    }
  }, 18);

  setTimeout(createCactus, randomTime);
}

createCactus();
document.addEventListener('keydown', handleKeyUp);
