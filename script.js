function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true;
}

document.getElementById("startButton").addEventListener("click", function() {
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";

    for (let i = 1; i <= 1000; i++) {
        if (isPrime(i)) {
            const primeNumber = document.createElement("p");
            primeNumber.textContent = i;
            resultDiv.appendChild(primeNumber);
        }
    }
});
