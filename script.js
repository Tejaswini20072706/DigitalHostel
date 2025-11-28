// Get the toggle button
const btn = document.getElementById("toggleBtn");

// When button is clicked
btn.addEventListener("click", () => {

    // Toggle dark mode class on body
    document.body.classList.toggle("dark-mode");

    // Change button text based on mode
    if (document.body.classList.contains("dark-mode")) {
        btn.textContent = "Light Mode";
    } else {
        btn.textContent = "Dark Mode";
    }
});