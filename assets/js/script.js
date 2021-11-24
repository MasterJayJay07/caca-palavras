//variáveis que se conectam com a section tabela do html
const secaoTabela = document.getElementById("tabela")
//
const secaoBotoes = document.createElement("section")
const table = document.createElement("table")
let btn = document.createElement("BUTTON")
let btnVerify = document.createElement("BUTTON")
//adição de classes e textos
secaoBotoes.classList.add("secaoBotoes")
btn.innerText = 'Jogar'
btnVerify.innerText = 'Eu acertei?'
//append
secaoTabela.appendChild(secaoBotoes)
secaoTabela.appendChild(table)
secaoBotoes.appendChild(btn)
secaoBotoes.appendChild(btnVerify)
//

//loop que cria a tabela do caça palavras
for (let i=0; i<10; i++){
    let criarLinha = document.createElement("tr")
    criarLinha.classList.add("linha")
    table.appendChild(criarLinha)
    for (let j=0; j<10; j++){
        let criarColuna = document.createElement("td")
        criarColuna.classList.add("celula")
        criarLinha.appendChild(criarColuna)
    }
}
//

//variáveis que pegam as linhas e celulas das linhas da tabela
const linhas = document.getElementsByClassName("linha")
const celulas = document.getElementsByClassName("celula")

//parte Alexandre
//Criando função que preenche a tabela com palavras na Horizontal

const arrayPalavras = ['PIKACHU', 'TAUROS', 'CHARIZARD', 'DRAGONITE', 'ONIX', 'ARBOK', 'RAICHU',
'KADABRA', 'VULPIX', 'ARCANINE', 'ZUBAT', 'HORSEA', 'SNORLAX', 'ARTICUNO', 'LAPRAS', 'MAGIKARP',
'MOLTRES', 'ZAPDOS', 'MEWTWO', 'LUCARIO'];

//Gerar variáveis aleátorias usando a função gerarNumeroAleatorio e usar condicional para que eles não sejam iguais.

function gerarPalavras(){
    let palavras = []
    let indicePrimeiraPalavra = gerarNumeroAleatorio();
    let indiceSegundaPalavra = gerarNumeroAleatorio();
    let indiceTerceiraPalavra = gerarNumeroAleatorio();
    if(indicePrimeiraPalavra === indiceSegundaPalavra || indicePrimeiraPalavra === indiceTerceiraPalavra){
        indicePrimeiraPalavra++;
    }

    if(indiceSegundaPalavra === indicePrimeiraPalavra || indiceSegundaPalavra === indiceTerceiraPalavra){
        indiceSegundaPalavra++;
    }

    if(indiceTerceiraPalavra === indicePrimeiraPalavra || indiceTerceiraPalavra === indiceSegundaPalavra){
        indiceTerceiraPalavra++;
    }
    let primeiraPalavra = arrayPalavras[indicePrimeiraPalavra].split("");
    let segundaPalavra = arrayPalavras[indiceSegundaPalavra].split("");
    let terceiraPalavra = arrayPalavras[indiceTerceiraPalavra].split("");
    palavras.push(primeiraPalavra)
    palavras.push(segundaPalavra)
    palavras.push(terceiraPalavra)
    return palavras
}


function gerarPosicao(primeiraPalavra, segundaPalavra, terceiraPalavra){
    let arrayPosicoesNaTabela = []
    let indicePosicaoTabelaAleatorio1 = 0;
    let indicePosicaoTabelaAleatorio2 = 0;
    let indicePosicaoTabelaAleatorio3 = 0;
    switch(primeiraPalavra.length){
    case 4:
        indicePosicaoTabelaAleatorio1 = Math.floor(Math.random() * 7)
        break;
    case 5:
        indicePosicaoTabelaAleatorio1 = Math.floor(Math.random() * 6)
        break;
    case 7:
        indicePosicaoTabelaAleatorio1 = Math.floor(Math.random() * 4)
        break;
    case 8:
        indicePosicaoTabelaAleatorio1 = Math.floor(Math.random() * 3)
        break;
    case 9:
        indicePosicaoTabelaAleatorio1 = Math.floor(Math.random() * 2)
        break;
    
    default:
        break;
}

switch(segundaPalavra.length){
    case 4:
        indicePosicaoTabelaAleatorio2 = Math.floor(Math.random() * 7)
        break;
    case 5:
        indicePosicaoTabelaAleatorio3 = Math.floor(Math.random() * 6)
        break;
    case 6:
        indicePosicaoTabelaAleatorio2 = Math.floor(Math.random() * 5)
        break;
    case 7:
        indicePosicaoTabelaAleatorio2 = Math.floor(Math.random() * 4)
        break;
    case 8:
        indicePosicaoTabelaAleatorio2 = Math.floor(Math.random() * 3)
        break;
    case 9:
        indicePosicaoTabelaAleatorio2 = Math.floor(Math.random() * 2)
        break;
    
    default:
        break;
}

switch(terceiraPalavra.length){
    case 4:
        indicePosicaoTabelaAleatorio3 = Math.floor(Math.random() * 7)
        break;
    case 5:
        indicePosicaoTabelaAleatorio3 = Math.floor(Math.random() * 6)
        break;
    case 6:
        indicePosicaoTabelaAleatorio3 = Math.floor(Math.random() * 5)
        break;
    case 7:
        indicePosicaoTabelaAleatorio3 = Math.floor(Math.random() * 4)
        break;
    case 8:
        indicePosicaoTabelaAleatorio3 = Math.floor(Math.random() * 3)
        break;
    case 9:
        indicePosicaoTabelaAleatorio3 = Math.floor(Math.random() * 2)
        break;
    
    default:
        break;
    }
    arrayPosicoesNaTabela.push(indicePosicaoTabelaAleatorio1)
    arrayPosicoesNaTabela.push(indicePosicaoTabelaAleatorio2)
    arrayPosicoesNaTabela.push(indicePosicaoTabelaAleatorio3)
    return arrayPosicoesNaTabela
}

let var1, var2, var3;

//Essa função gera um número aleatório de 0 a 20

function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * 20);
}
function getRandomInt(max) {
  max=3
  return Math.floor(Math.random() * max);
}
function getRandomInt2(max) {
  max=4
  return Math.floor(Math.random() * max);
}

function gerarNumeroAleatorioColuna(){
    return (Math.floor(Math.random() * 10))*10  ;
}

//parte Lucas
// cria e preenche a tabela com letras aleatorias
function randomStrings(){
    let randomStr = ""
    let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    return randomStr = letters.charAt(Math.floor(Math.random() * letters.length))
}


function gerarTabela(){
    for(let i=0; i<celulas.length; i++){
        celulas[i].classList.remove("clicada")
    }
    let arrayDePalavras = gerarPalavras()
    let posicoes = gerarPosicao(arrayDePalavras[0],arrayDePalavras[1],arrayDePalavras[2])
    for(let j=0; j<celulas.length; j++){
        celulas[j].innerText=""
    }
    const nums1 = [0,10,20]
    const nums2 = [30,40,50]
    const nums3 = [60,70,80,90]
    const randow = getRandomInt()
    const randow2 = getRandomInt2()
    let numInt1 = nums1[randow]
    let numInt2 = nums2[randow]
    let numInt3 = nums3[randow2]
    //
    let primeiraPalavra = arrayDePalavras[0]
    let segundaPalavra = arrayDePalavras[1]
    let terceiraPalavra = arrayDePalavras[2]
    let primeiraPosicao = posicoes[0]+numInt1
    let segundaPosicao = posicoes[1]+numInt2
    let terceiraPosicao = posicoes[2]+numInt3
    for (let i=0; i<primeiraPalavra.length; i++){
        celulas[primeiraPosicao].innerText=primeiraPalavra[i]
        primeiraPosicao++
    }
    for (let i=0; i<segundaPalavra.length; i++){
        celulas[segundaPosicao].innerText=segundaPalavra[i]
        segundaPosicao++
    }
    for (let i=0; i<terceiraPalavra.length; i++){
        celulas[terceiraPosicao].innerText=terceiraPalavra[i]
        terceiraPosicao++
    }
    for (let i=0; i<celulas.length; i++){
        let celulaAtual = celulas[i]
        if(celulaAtual.innerText===""){
            celulaAtual.innerText=randomStrings()
        }
    }
}

btn.addEventListener("click", () => gerarTabela())

// btn.addEventListener("click", function(){
//     for(let i=0; i<celulas.length; i++){
//         celulas[i].classList.remove("clicada")
//     }
//     let arrayDePalavras = gerarPalavras()
//     let posicoes = gerarPosicao(arrayDePalavras[0],arrayDePalavras[1],arrayDePalavras[2])
//     for(let j=0; j<celulas.length; j++){
//         celulas[j].innerText=""
//     }
//     const nums1 = [0,10,20]
//     const nums2 = [30,40,50]
//     const nums3 = [60,70,80,90]
//     const randow = getRandomInt()
//     let numInt1 = nums1[randow]
//     let numInt2 = nums2[randow]
//     let numInt3 = nums3[randow]
//     //
//     let primeiraPalavra = arrayDePalavras[0]
//     let segundaPalavra = arrayDePalavras[1]
//     let terceiraPalavra = arrayDePalavras[2]
//     let primeiraPosicao = posicoes[0]+numInt1
//     let segundaPosicao = posicoes[1]+numInt2
//     let terceiraPosicao = posicoes[2]+numInt3
//     for (let i=0; i<primeiraPalavra.length; i++){
//         celulas[primeiraPosicao].innerText=primeiraPalavra[i]
//         primeiraPosicao++
//     }
//     for (let i=0; i<segundaPalavra.length; i++){
//         celulas[segundaPosicao].innerText=segundaPalavra[i]
//         segundaPosicao++
//     }
//     for (let i=0; i<terceiraPalavra.length; i++){
//         celulas[terceiraPosicao].innerText=terceiraPalavra[i]
//         terceiraPosicao++
//     }
//     for (let i=0; i<celulas.length; i++){
//         let celulaAtual = celulas[i]
//         if(celulaAtual.innerText===""){
//             celulaAtual.innerText=randomStrings()
//         }
//     }
// })