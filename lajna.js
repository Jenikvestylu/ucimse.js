var input = document.getElementById("lineLength");
input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        generateLine(); 
    }
});


function generateLine() {
    const lineLength = parseInt(document.getElementById("lineLength").value);
    if (!isNaN(lineLength)) {
        const line = '+'.repeat(lineLength);
        document.getElementById("output").textContent = line;
    }
}
