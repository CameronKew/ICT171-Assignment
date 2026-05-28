// Selects the greeting element from the website
const greeting = document.getElementById("greeting");

if (greeting) {

    // Gets the current hour from users system time
    const hour = new Date().getHours();

    // Displays greeting based on time of day 
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

// Selects the theme toggle button
const toggleButton = document.getElementById("theme-toggle");

// Loads saved theme
if (localStorage.getItem("theme") === "light") {

    // Applies saved light mode
    document.body.classList.add("light-mode");

    // Updates button text 
    if (toggleButton) {
        toggleButton.innerText = "Dark Mode";
    }
}

// Checks if button exists 
if (toggleButton) {

    // Adds click event 
    toggleButton.addEventListener("click", function () {

        // Toggles light mode
        document.body.classList.toggle("light-mode");

        // Checks current mode
        if (document.body.classList.contains("light-mode")) {

            // Saves light mode
            localStorage.setItem("theme", "light");

            // Changes button text 
            toggleButton.innerText = "Dark Mode";
        }
        else {

            // Saves dark mode
            localStorage.setItem("theme", "dark");

            // Changes button text 
            toggleButton.innerText = "Light Mode";
        }
    });
}
