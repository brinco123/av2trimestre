const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual o maior campeão da Champions league?",
        alternativas: [
            {
                texto: "Real Marid",
                afirmacao: "Maior clube o mundo "
            },
            {
                texto: "Milan",
                afirmacao: "Um os maiores clubes que já existiu"
            }
        ]
    },
    {
        enunciado: "Qual o jogador com mais gols oficiais?",
        alternativas: [
            {
                texto: "Cristiano Ronaldo",
                afirmacao: "um do maiores que já existiu"
            },
            {
                texto: "Pelé",
                afirmacao: "O rei do futebol"
            }
        ]
    },
    {
        enunciado: "Qual o jogado mai velho na atualidadee?",
        alternativas: [
            {
                texto: "Kazuyoshi Miura",
                afirmacao: "O cara é velho"
            },
            {
                texto: "Fábio",
                afirmacao: "Esse também é velho"
            }
        ]
    },
    {
        enunciado: "Qual jogador que pulou mais alto?",
        alternativas: [
            {
                texto: "Youssef En-Nesyri ",
                afirmacao: "Pulou muito"
            },
            {
                texto: "Cr7",
                afirmacao: "Pula muito"
            }
        ]
    },
    {
        enunciado: "Artilheiro do Braileirão 2023? ",
        alternativas: [
            {
                texto: "Tiquinho Soares",
                afirmacao: "fez muitos gols"
            },
            {
                texto: "Hulk",
                afirmacao: "pricipal peça do time"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
