function convert() {
    const numberInput = document.getElementById("number");
    const resultElement = document.getElementById("result");

    const number = parseInt(numberInput.value);
    if (!isNaN(number)) {
        const binary = number.toString(2);
        resultElement.textContent = `Dvojková reprezentace čísla ${number} je: ${binary}`;
    } else {
        resultElement.textContent = "Zadejte platné číslo.";
    }
}