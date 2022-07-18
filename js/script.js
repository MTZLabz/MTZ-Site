const dino = document.querySelector('.dino');
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
  }, 35);
}
let vaquinhas = 0;

function createCactus() {
  const cactus = document.createElement('div');
  let cactusPosition = 2500;
  let numeroInicial = 6000;
  let randomTime = Math.random() * numeroInicial;
  if (vaquinhas < 7) {
    cactus.classList.add('cactus');
    background.appendChild(cactus);
    cactus.style.left = cactusPosition + 'px';
  }
  let leftTimer = setInterval(() => {
    if (cactusPosition <= -60) {
      cactusPosition = 2500;
    } else {
      cactusPosition -= 4;
      cactus.style.left = cactusPosition + 'px';
    }
    if (cactusPosition === 60) {
      jump();
      vaquinhas++;

    }
  }, 18);

  setTimeout(createCactus, randomTime);
}

createCactus();
document.addEventListener('keydown', handleKeyUp);
