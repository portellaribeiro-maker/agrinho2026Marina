/**
 * Lógica de Interação da Página - AgroSolar
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Efeito de Rolagem Suave (Smooth Scroll) para os Links Internos
    const linksDeNavegacao = document.querySelectorAll('nav a, .btn');

    linksDeNavegacao.forEach(anchor => {
        anchor.addEventListener('click', function(event) {
            event.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Executa a rolagem suave nativa do navegador
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Opcional: Adiciona uma sombra extra ou efeito visual ao cabeçalho durante o scroll
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 10px 30px rgba(45, 106, 79, 0.1)';
        } else {
            header.style.boxShadow = '0 4px 20px rgba(45, 106, 79, 0.05)';
        }
    });

});
