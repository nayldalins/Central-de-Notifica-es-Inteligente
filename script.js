
// ======================================
// 1. ELEMENTOS DO TOAST
// ======================================

const meuToast = document.getElementById("meuToast");
const tituloToast = document.getElementById("tituloToast");
const mensagemToast = document.getElementById("mensagemToast");
const mensagemInicialToast = document.getElementById("mensagemInicialToast");

// Criar uma única instância do Toast que desaparece depois de 5 segundos
const toast = new bootstrap.Toast(meuToast, {
    autohide: true,
    delay: 5000
});


// ======================================
// 2. ELEMENTOS DO HISTÓRICO
// ======================================

const listaHistorico = document.getElementById("listaHistorico");
const contador = document.getElementById("contador");

let quantidadeAcoes = 0;


// ======================================
// 3. FUNÇÃO PARA MOSTRAR NOTIFICAÇÃO
// ======================================

function mostrarNotificacao(titulo, mensagem) {

    // Esconder mensagem inicial
    mensagemInicialToast.style.display = "none";

    function atualizarToast() {

        tituloToast.textContent = titulo;
        mensagemToast.textContent = mensagem;

        toast.show();

    }

    // Verificar se o Toast está aberto
    if (meuToast.classList.contains("show")) {

        meuToast.addEventListener(
            "hidden.bs.toast",
            atualizarToast,
            { once: true }
        );

        toast.hide();

    } else {

        atualizarToast();

    }

}


// ======================================
// 4. FUNÇÃO PARA REGISTRAR ATIVIDADES
// ======================================

function registrarAtividade(atividade) {

    // Remover mensagem inicial do histórico
    const mensagemInicialHistorico =
        document.getElementById("mensagemInicialHistorico");

    if (mensagemInicialHistorico) {
        mensagemInicialHistorico.remove();
    }

    // Criar novo item
    const novaAtividade = document.createElement("li");

    novaAtividade.classList.add("list-group-item");

    // Adicionar texto
    novaAtividade.textContent = atividade;

    // Adicionar à lista
    listaHistorico.appendChild(novaAtividade);

    // Atualizar contador
    quantidadeAcoes++;

    contador.textContent = quantidadeAcoes;

}


// ======================================
// 5. BOTÃO CADASTRO
// ======================================

document.getElementById("btnCadastro").addEventListener("click", function() {

    mostrarNotificacao(
        "Cadastro realizado",
        "O usuário foi cadastrado com sucesso."
    );

    registrarAtividade(
        "Cadastro realizado com sucesso."
    );

});


// ======================================
// 6. BOTÃO SEGURANÇA
// ======================================

document.getElementById("btnSeguranca").addEventListener("click", function() {

    mostrarNotificacao(
        "Atenção à segurança",
        "Verifique suas credenciais de acesso."
    );

    registrarAtividade(
        "Verificação de segurança executada."
    );

});


// ======================================
// 7. BOTÃO ATUALIZAÇÃO
// ======================================

document.getElementById("btnAtualizacao").addEventListener("click", function() {

    mostrarNotificacao(
        "Sistema atualizado",
        "Nenhuma atualização pendente foi encontrada."
    );

    registrarAtividade(
        "Consulta de atualizações realizada."
    );

});


// ======================================
// 8. FUNÇÃO PARA LIMPAR HISTÓRICO
// ======================================

function limparHistorico() {

    // Apagar os itens da lista
    listaHistorico.innerHTML = "";

    // Zerar contador
    quantidadeAcoes = 0;

    contador.textContent = quantidadeAcoes;

    // Criar mensagem inicial novamente
    const mensagem = document.createElement("li");

    mensagem.classList.add(
        "list-group-item",
        "text-muted"
    );

    mensagem.textContent = "Nenhuma atividade registrada.";

    listaHistorico.appendChild(mensagem);

}


// ======================================
// 9. CONFIRMAR LIMPEZA PELO MODAL
// ======================================

const btnConfirmarLimpeza =
    document.getElementById("btnConfirmarLimpeza");

btnConfirmarLimpeza.addEventListener("click", function() {

    // Limpar histórico
    limparHistorico();

    // Fechar Modal
    const modalLimpar = document.getElementById("modalLimpar");

    const instanciaModal =
        bootstrap.Modal.getInstance(modalLimpar);

    instanciaModal.hide();

});
