document.addEventListener("DOMContentLoaded", () => {
    const infoSection = document.querySelector(".info");
    const techSection = document.querySelector(".lang-and-tech");
    const techIcons = document.querySelectorAll(".lang-and-tech-item");

    // Adiciona classes hidden no início
    infoSection.classList.add("hidden-left");
    techSection.classList.add("hidden-right");

    // Após um pequeno delay, mostra a section INFO (da esquerda)
    setTimeout(() => {
        infoSection.classList.add("show");
    }, 500);

    // Depois mostra a LANG AND TECH (da direita)
    setTimeout(() => {
        techSection.classList.add("show");

        // Anima cada ícone um por um
        techIcons.forEach((icon, index) => {
            icon.style.opacity = 0;
            setTimeout(() => {
                icon.style.transition = "opacity 0.4s ease";
                icon.style.opacity = 1;
            }, index * 100); // Delay por ícone
        });
    }, 800);
});

document.addEventListener("DOMContentLoaded", () => {
    const themeButton = document.querySelector("button"); // Seleciona o botão do tema
    const currentTheme = localStorage.getItem("theme"); // Recupera o tema salvo no localStorage
    
    // Se já houver um tema salvo, aplica-o
    if (currentTheme) {
        document.body.classList.add(currentTheme);
    } else {
        document.body.classList.add("light-theme");  // Se não houver tema salvo, define o tema claro como padrão
    }

    // Função para alternar o tema
    themeButton.addEventListener("click", () => {
        if (document.body.classList.contains("light-theme")) {
            document.body.classList.remove("light-theme");
            document.body.classList.add("dark-theme");
            localStorage.setItem("theme", "dark-theme"); // Salva a escolha do usuário
            themeButton.textContent = "Light Mode";
        } else {
            document.body.classList.remove("dark-theme");
            document.body.classList.add("light-theme");
            localStorage.setItem("theme", "light-theme"); // Salva a escolha do usuário
            themeButton.textContent = "Dark Mode";
        }
    });
    
    if (document.body.classList.contains("light-theme")) {
        themeButton.textContent = "Dark Mode";
    } else {
        themeButton.textContent = "Light Mode";
    }
});
