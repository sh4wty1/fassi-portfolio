document.addEventListener("DOMContentLoaded", () => {
    const infoSection = document.querySelector(".info");
    const techSection = document.querySelector(".lang-and-tech");
    const techIcons = document.querySelectorAll(".lang-and-tech-item");

    // add hidden classes at the start
    infoSection.classList.add("hidden-left");
    techSection.classList.add("hidden-right");

    // Show info section
    setTimeout(() => {
        infoSection.classList.add("show");
    }, 500);

    // Then show lang and tech
    setTimeout(() => {
        techSection.classList.add("show");

        // icon animation
        techIcons.forEach((icon, index) => {
            icon.style.opacity = 0;
            setTimeout(() => {
                icon.style.transition = "opacity 0.4s ease";
                icon.style.opacity = 1;
            }, index * 100); // Delay
        });
    }, 800);
});

document.addEventListener("DOMContentLoaded", () => {
    const themeButton = document.querySelector("button"); // define theme button var
    const currentTheme = localStorage.getItem("theme"); // takes the current theme and define a var
    
    // applies the current theme, if it exists
    if (currentTheme) {
        document.body.classList.add(currentTheme);
    } else {
        document.body.classList.add("light-theme");  // else, set light theme as default
    }

    // changing theme function
    themeButton.addEventListener("click", () => {
        if (document.body.classList.contains("light-theme")) { // if light theme is set...
            document.body.classList.remove("light-theme"); // class changing
            document.body.classList.add("dark-theme"); // class changing
            localStorage.setItem("theme", "dark-theme"); // apply user choice
            themeButton.textContent = "Light Mode"; // change button name
        } else {
            document.body.classList.remove("dark-theme"); //class changing
            document.body.classList.add("light-theme"); //class changing
            localStorage.setItem("theme", "light-theme"); // apply user choice
            themeButton.textContent = "Dark Mode"; // change button name
        }
    });
    
    if (document.body.classList.contains("light-theme")) {
        themeButton.textContent = "Dark Mode";
    } else {
        themeButton.textContent = "Light Mode";
    }
});
