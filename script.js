const testButton = document.getElementById("testButton");
const status = document.getElementById("status");

testButton.addEventListener("click", () => {
    status.textContent = "JavaScript is working successfully!";
});
