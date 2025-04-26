// Função para alternar entre temas claro e escuro
const toggleThemeButton = document.getElementById('toggle-theme');
const body = document.body;

toggleThemeButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDarkMode = body.classList.contains('dark-mode');
    toggleThemeButton.textContent = isDarkMode ? '☀️' : '🌙';
});

// Barra de Progresso de Leitura
window.addEventListener('scroll', () => {
    const progressBar = document.getElementById('progress-bar');
    const maxHeight = document.documentElement.scrollHeight - window.innerHeight;
    const percentage = (window.scrollY / maxHeight) * 100;
    progressBar.style.width = `${percentage}%`;
});

// Alternar entre abas
document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', () => {
        // Remover classe 'active' de todos os botões e conteúdos
        document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

        // Adicionar classe 'active' ao botão clicado e ao conteúdo correspondente
        button.classList.add('active');
        const tabId = button.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    });
});