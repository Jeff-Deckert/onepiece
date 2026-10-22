const botoes = Array.from(document.querySelectorAll(".botao"));
const personagens = Array.from(document.querySelectorAll(".personagem"));

// Mantém a lista de botões e os painéis alinhados pelo mesmo índice.
if (botoes.length !== personagens.length) {
    console.error(
        `One Piece: existem ${botoes.length} botões e ${personagens.length} personagens. Confira o HTML.`
    );
}

botoes.forEach((botao, indice) => {
    botao.setAttribute("aria-pressed", String(botao.classList.contains("selecionado")));

    botao.addEventListener("click", () => {
        const personagem = personagens[indice];

        // Evita erros caso o HTML seja alterado e um painel não exista.
        if (!personagem) {
            console.error(`One Piece: não foi encontrado o personagem do botão ${indice + 1}.`);
            return;
        }

        botoes.forEach((item) => {
            const selecionado = item === botao;
            item.classList.toggle("selecionado", selecionado);
            item.setAttribute("aria-pressed", String(selecionado));
        });

        personagens.forEach((item) => {
            item.classList.toggle("selecionado", item === personagem);
        });
    });
});
