const greeting = document.getElementById("greeting");

if (greeting) {

    const hour = new Date().getHours();

    if (hour < 12) {
        greeting.innerText = "Good Morning";
    }
    else if (hour < 18) {
        greeting.innerText = "Good Afternoon";
    }
    else {
        greeting.innerText = "Good Evening";
    }
}

const toggleButton = document.getElementById("theme-toggle");

if (localStorage.getItem("theme") === "light") {

    document.body.classList.add("light-mode");

    if (toggleButton) {
        toggleButton.innerText = "Dark Mode";
    }
}

if (toggleButton) {

    toggleButton.addEventListener("click", function () {

        document.body.classList.toggle("light-mode");

        if (document.body.classList.contains("light-mode")) {

            localStorage.setItem("theme", "light");

            toggleButton.innerText = "Dark Mode";
        }
        else {

            localStorage.setItem("theme", "dark");

            toggleButton.innerText = "Light Mode";
        }
    });
}
