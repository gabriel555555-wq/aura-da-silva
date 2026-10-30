
function descobrirPerfil() {
    let nome = document.getElementById("nome").value.trim();
    let nascimento = document.getElementById("nascimento").value;

    if (nome === "" || nascimento === "") {
        alert("Preencha seu nome e data de nascimento!");
        return;
    }

    let hoje = new Date();
    let data = new Date(nascimento + "T00:00:00");

    if (data > hoje) {
        alert("Digite uma data de nascimento válida!");
        return;
    }

    let idade = hoje.getFullYear() - data.getFullYear();

    if (
        hoje.getMonth() < data.getMonth() ||
        (hoje.getMonth() === data.getMonth() &&
         hoje.getDate() < data.getDate())
    ) {
        idade--;
    }

    let pontos = [0, 0, 0, 0];

    for (let i = 1; i <= 4; i++) {
        let resposta = document.getElementById("pergunta" + i).value;

        if (resposta === "") {
            alert("Responda todas as perguntas!");
            return;
        }

        pontos[Number(resposta) - 1]++;
    }

    let perfil = pontos.indexOf(Math.max(...pontos));

    let perfis = [
        {
            nome: "Engenheiro",
            imagem: "image1.jpg",
            descricao: "Você possui habilidades técnicas e sabe resolver problemas.",
            recomendacao: "Sua função será construir e consertar equipamentos."
        },
        {
            nome: "Pesquisador",
            imagem: "image2.jpg",
            descricao: "Você gosta de estudar, analisar e descobrir coisas novas.",
            recomendacao: "Sua função será pesquisar o planeta e suas formas de vida."
        },
        {
            nome: "Explorador",
            imagem: "image3.jpg",
            descricao: "Você é corajoso e gosta de enfrentar novos desafios.",
            recomendacao: "Sua função será explorar regiões desconhecidas."
        },
        {
            nome: "Líder",
            imagem: "image4.jpg",
            descricao: "Você possui habilidades de liderança e organização.",
            recomendacao: "Sua função será coordenar a equipe da missão."
        }
    ];

    let resultado = perfis[perfil];

    document.getElementById("perfilNome").textContent = resultado.nome;

    document.getElementById("imagemPerfil").src = resultado.imagem;

    document.getElementById("dados").textContent =
        "Participante: " + nome + " | Idade: " + idade + " anos";

    document.getElementById("categoria").textContent =
        "Perfil: " + resultado.nome;

    document.getElementById("descricao").textContent =
        resultado.descricao;

    document.getElementById("recomendacao").textContent =
        resultado.recomendacao;

    document.getElementById("formulario").classList.add("escondido");
    document.getElementById("resultado").classList.remove("escondido");
}

function refazer() {
    document.getElementById("formulario").classList.remove("escondido");
    document.getElementById("resultado").classList.add("escondido");
}

