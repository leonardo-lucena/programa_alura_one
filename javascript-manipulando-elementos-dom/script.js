const html = document.querySelector("html");
const focoBt = document.querySelector(".app__card-button--foco");
const curtoBt = document.querySelector(".app__card-button--curto");
const longoBt = document.querySelector(".app__card-button--longo");
const banner = document.querySelector(".app__image");
const titulo = document.querySelector(".app__title");
const botoes = document.querySelectorAll(".app__card-button");

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
