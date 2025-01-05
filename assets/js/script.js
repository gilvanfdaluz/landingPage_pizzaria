// Seleciona os elementos necessários
const icon = document.querySelector('.icon');
const navigation = document.querySelector('.navigation');

// Função para alternar o menu aberto ou fechado
function toggleMenu() {
    navigation.classList.toggle('active'); // Adiciona ou remove a classe 'active' no menu
}

// Fecha o menu
function closeMenu() {
    navigation.classList.remove('active'); // Remove a classe 'active' do menu
}

// Adiciona evento de clique no ícone para abrir/fechar o menu
icon.addEventListener('click', (event) => {
    event.stopPropagation(); // Impede que o clique se propague para o documento
    toggleMenu();
});

// Adiciona evento de clique em links ou qualquer parte do site para fechar o menu
document.addEventListener('click', (event) => {
    if (!navigation.contains(event.target) && !icon.contains(event.target)) {
        closeMenu();
    }
});

// Fecha o menu ao clicar em qualquer link dentro dele
navigation.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
});



// Atualiza automaticamente o ano atual no footer
document.getElementById("year").textContent = new Date().getFullYear();