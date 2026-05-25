document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Lógica do Botão Voltar ao Topo (O círculo laranja)
    const btnTop = document.getElementById("btn-top");

    // Mostra o botão quando rolar 300px para baixo
    window.addEventListener("scroll", function() {
        if (window.scrollY > 300) {
            btnTop.style.display = "block";
        } else {
            btnTop.style.display = "none";
        }
    });

    // Ao clicar, sobe suavemente para o topo
    btnTop.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

});