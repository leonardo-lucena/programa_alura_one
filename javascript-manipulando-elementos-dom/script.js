const html = document.querySelector("html");
const focoBt = document.querySelector(".app__card-button--foco");
const curtoBt = document.querySelector(".app__card-button--curto");
const longoBt = document.querySelector(".app__card-button--longo");
const banner = document.querySelector(".app__image");
const titulo = document.querySelector(".app__title");
const botoes = document.querySelectorAll(".app__card-button");
const musicaFocoInput = document.querySelector("#alternar-musica");
const musica = new Audio("./sons/luna-rise-part-one.mp3");
const startPause = document.querySelector("#start-pause");

const audioPlay = new Audio("/sons/play.wav");
const audioPausa = new Audio("/sons/pause.mp3");
const audioTempoFinalizado = new Audio("./sons/beep.mp3");

let tempoEmSegundos = 5;
let intervaloId = null;

musicaFocoInput.addEventListener("change", () => {
  if (musica.paused) {
    musica.play();
  } else {
    musica.pause();
  }
});

focoBt.addEventListener("click", () => {
  alterarContexto("foco");
  focoBt.classList.add("active");
});

curtoBt.addEventListener("click", () => {
  alterarContexto("descanso-curto");
  curtoBt.classList.add("active");
});

longoBt.addEventListener("click", () => {
  alterarContexto("descanso-longo");
  longoBt.classList.add("active");
});

function alterarContexto(contexto) {
  html.setAttribute("data-contexto", contexto);
  banner.setAttribute("src", `./imagens/${contexto}.png`);

  botoes.forEach(function (contexto) {
    contexto.classList.remove("active");
  });

  if (contexto == "foco") {
    titulo.innerHTML = `Otimize sua produtividade,<br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>`;
  }

  if (contexto == "descanso-curto") {
    titulo.innerHTML = `Texto 2,<br>
                <strong class="app__title-strong">texto 2.</strong>`;
  }

  if (contexto == "descanso-longo") {
    titulo.innerHTML = `Texto 3,<br>
                <strong class="app__title-strong">Texto 3.</strong>`;
  }
}

const contagemRegressiva = () => {
  if (tempoEmSegundos <= 0) {
    audioTempoFinalizado.play();
    zerar();
    return;
  }

  tempoEmSegundos = -1;
};

startPause.addEventListener("click", contagemRegressiva);

function iniciarPausar() {
  if (intervaloId) {
    audioPausa.play();
    zerar();
    return;
  }
  audioPlay.play();
  intervaloId = setInterval(contagemRegressiva, 1000);
}

function zerar() {
  clearInterval(intervaloId);
  intervaloId = null;
}
