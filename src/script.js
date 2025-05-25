const openBtn = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-btn');
const seal = document.querySelector('.seal');
const letter = document.querySelector('.letter');
const textFront = document.querySelector('.text-front');
const messageEl = document.getElementById('message');

const fullMessage = "El camino será difícil, pero, caminando juntos de la mano cada vez será más sencillo.";

let typingInterval;

openBtn.addEventListener('click', () => {
  seal.classList.add('opened');
  setTimeout(() => {
    seal.style.display = 'none'; // Oculta después de animar
  }, 1000);
  letter.classList.add('visible');
  openBtn.style.display = 'none';
  textFront.style.display = 'none';

  // Efecto de escritura letra por letra
  let index = 0;
  messageEl.textContent = '';
  messageEl.classList.add('typing');
  typingInterval = setInterval(() => {
    if (index < fullMessage.length) {
      messageEl.textContent += fullMessage[index++];
    } else {
      clearInterval(typingInterval);
      messageEl.classList.remove('typing'); // quita el cursor parpadeante
    }
  }, 70);
});

closeBtn.addEventListener('click', () => {
  seal.classList.remove('opened');
  seal.style.display = 'block';
  letter.classList.remove('visible');
  openBtn.style.display = 'block';
  textFront.style.display = 'block';
  messageEl.textContent = '';
  messageEl.style.opacity = 1;
  clearInterval(typingInterval);
});