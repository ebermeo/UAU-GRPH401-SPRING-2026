function toggleDarkMode() {
	const body = document.querySelector("body");
	const btn = document.querySelector("#toggleBtn");

	body.classList.toggle("dark-mode");

	if (body.classList.contains("dark-mode")) {
		btn.textContent = "Switch to Light Mode";
	} else {
		btn.textContent = "Switch to Dark Mode";
	}
}
