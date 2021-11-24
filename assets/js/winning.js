const sectionVitoria = document.getElementById("vitoria")
const botaoJogarDenovo = document.getElementById("jogarDeNovo")
const msgVitoria = document.getElementById("mensagemVitoria")
msgVitoria.innerText = "Parabéns, você encontrou todos os Pokemon! Parece que temos um mestre Pokemon por aqui."

//função que marca a letra clicada
function marcarLetra(e){
    let cel = e.currentTarget
    cel.classList.toggle("clicada")
    texto = cel.innerText
}
//função que retorna a classe da celula clicada
function estaClicada(atual){
    return atual.classList
}

//funcao que diz se as palavras pegas batem com as do array
function pegarPalavra(){
    let arr = []
    for(let i=0; i<celulas.length; i++){
        let valorClasse = estaClicada(celulas[i])
        if(valorClasse.value==="celula clicada"){
            let letra = celulas[i].innerText
            arr.push(letra)
        }
        else {
            arr.push(" ")
        }
    }
    let newArr = arr.join("").trim().split(" ")
    newArr = newArr.filter(e => e !== "");
    let incluiOuNao1 = arrayPalavras.includes(newArr[0])
    let incluiOuNao2 = arrayPalavras.includes(newArr[1])
    let incluiOuNao3 = arrayPalavras.includes(newArr[2])

    if(incluiOuNao1 && incluiOuNao2 && incluiOuNao3){
        sectionVitoria.classList.remove("sumir")
    }
    else {
        alert("vamos lá, ainda faltam Pokemon pra achar")
    }
}

//loop que adiciona o evento de marcar letra nas celulas
for (let i=0; i<celulas.length; i++){
    celulas[i].addEventListener("click", marcarLetra)
}

//adiciona o evento que diz se venceu ou não
btnVerify.addEventListener("click", pegarPalavra)

botaoJogarDenovo.addEventListener("click", function(){
    sectionVitoria.classList.add("sumir")
    gerarTabela()
})