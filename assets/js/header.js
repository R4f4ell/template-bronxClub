// Seleciona o ícone de menu e a navegação
const menuIcon = document.createElement('div');
menuIcon.innerHTML = '&#9776;'; // Símbolo de hambúrguer
menuIcon.classList.add('menu-icon');

// Insere o ícone no header
const header = document.querySelector('header');
header.appendChild(menuIcon);

// Evento de clique para alternar o menu
menuIcon.addEventListener('click', () => {
    const nav = document.querySelector('header nav');
    
    // Alterna a visibilidade do menu
    if (nav.style.display === 'flex') {
        nav.style.display = 'none';
    } else {
        nav.style.display = 'flex';
    }
});

// Função para garantir que o menu volte a ficar visível em telas maiores
window.addEventListener('resize', () => {
    const nav = document.querySelector('header nav');
    
    if (window.innerWidth > 768) {
        nav.style.display = 'flex'; // Mostra o menu em telas maiores
    } else {
        nav.style.display = 'none'; // Esconde o menu em telas menores
    }
});
