const botao = document.querySelector(".btn-plataforma");
const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas");

botao.addEventListener("click", () => {
    elementoPlataformas.classList.toggle("ativo");
});

document.addEventListener('DOMContentLoaded', function () {
    const botoes = document.querySelectorAll('.gl');
    const modal = document.getElementById('modal');
    const imagemAmpliada = document.getElementById('imagem-ampliada');
    const fecharModal = document.querySelector('.fechar');

    botoes.forEach(function (botao) {
        botao.addEventListener('click', function () {
            modal.style.display = 'block';
            const imagemSrc = botao.querySelector('img').src;
            imagemAmpliada.src = imagemSrc;
        });
    });

    fecharModal.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
