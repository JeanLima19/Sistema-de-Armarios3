function TextosApi() {
  axios({
    method: "GET",
    url: "./dados.json",
  }).then((response) => {
    
    const logo2 = document.querySelector(".logo2");
    const p1 = document.getElementById("p1");
    const p2 = document.getElementById("p2");
    const p3 = document.getElementById("p3");
    const bloco1 = document.getElementById("bloco1");
    const bloco2 = document.getElementById("bloco2");

    namelogo = response.data[3].nameLogo;
    stats = response.data[3].nameStatus;
    stats2 = response.data[3].nameStatus2;
    stats3 = response.data[3].nameStatus3;

    logo2.textContent = namelogo;
    p1.textContent = stats;
    p2.textContent = stats2;
    p3.textContent = stats3;
    bloco1.textContent = response.data[3].bloco1;
    bloco2.textContent = response.data[3].bloco2;
  });
}

function CoresApi() {
  axios({
    method: "GET",
    url: "./dados.json"
  })
  .then((response)=> {
    const abertoIni = document.querySelector('.aberto')
    const emUsoIni = document.querySelector('.em-uso')
    const ManuIni = document.querySelector('.manutencao')

    green = response.data[0].color
    red = response.data[1].color
    yellow = response.data[2].color

    abertoIni.style.backgroundColor = `${green}`;
    emUsoIni.style.backgroundColor = `${red}`;
    ManuIni.style.backgroundColor = `${yellow}`;
  })
}

function estados() {
  axios({
    method: "GET",
    url: "./dados.json",
  }).then((response) => {
    //    Estados

    const buttons = document.querySelectorAll(".estado");

    aberto = response.data[0].estado;
    emUso = response.data[1].estado;
    manutenção = response.data[2].estado;

    buttons[0].innerHTML = aberto;
    buttons[1].innerHTML = emUso;
    buttons[2].innerHTML = manutenção;
    buttons[3].innerHTML = aberto;
    buttons[4].innerHTML = aberto;
    buttons[5].innerHTML = aberto;
    buttons[6].innerHTML = manutenção;
    buttons[7].innerHTML = aberto;
    buttons[8].innerHTML = aberto;
    buttons[9].innerHTML = aberto;
  });
}

function MudandoEstados() {
  axios({
    method: "GET",
    url: "./dados.json",
  }).then((response) => {
    const aberto = response.data[0].estado;
    const emUso = response.data[1].estado;
    const manutencao = response.data[2].estado;

    const nomes = [aberto, emUso, manutencao];
    const cores = ["verde", "vermelho", "amarelo"];
    let indice = 0;

    function atualizarNome(botao) {
      botao.textContent = nomes[indice];
      botao.classList.remove("verde", "vermelho", "amarelo");
      botao.classList.add(cores[indice]);

      indice = (indice + 1) % nomes.length;
    }

    const botoes = document.querySelectorAll(".meusBotoes");

    botoes.forEach((botao) => {
      botao.addEventListener("click", function () {
        atualizarNome(this);
      });
    });
  });
}

TextosApi();
CoresApi()
estados();
MudandoEstados();
