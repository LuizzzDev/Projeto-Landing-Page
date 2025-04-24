var setaDireita = document.getElementById("setaDireita");

var Bruna = document.getElementById("Bruna");
var Leonardo = document.getElementById("Leonardo");
var Samantha = document.getElementById("Samantha");

var setaEsquerda = document.getElementById("setaEsquerda");

function RolarParaDireita() {
    Bruna.style.display = "none"; // Esconde Bruna
    Samantha.style.display = "flex"; // Mostra Samantha
    setaDireita.style.display = "none"; // Esconde seta direita
    setaEsquerda.style.display = "flex"; // Mostra seta esquerda
}

function RolarParaEsquerda() {
    Bruna.style.display = "flex"; // Mostra Bruna
    Samantha.style.display = "none"; // Esconde Samantha
    setaDireita.style.display = "flex"; // Mostra seta direita
    setaEsquerda.style.display = "none"; // Esconde seta esquerda
    

}

