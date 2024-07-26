const caixaPrincipal = document.querySelector("caixa-principal")
const caixaPerguntas = document.querySelector("caixa-perguntas")
const caixaAlternativas = document.querySelector("caixa-alternativas")
const caixaResultado = document.querySelector("caixa-resultado")
const textoResultado = document.querySelector("texto-resultado")




const perguntas = [
    {
enunciado: "você gosta de bolo?",
alternativas:[{
    texto: "sim",
    afirmacao: "você é uma pessoa normal"
},
     {
        texto: "não",
        afirmacao: "Você é chato pra carambolas"
}]


    },
    {
        alternativas:[{
            enunciado:"você dorme?",
            texto: "sim",
            afirmacao: "você é uma pessoa normal"
        },
             {
                texto: "não",
                afirmacao: "Você é uma anomalia e deve ser eliminado."
    
        }]
        


    }
]




function mostrapergunta(){
    if(atual >=perguntas.lenght)
        {mostraResultado(); 
            return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}