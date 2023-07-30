document.getElementById("no").focus();
function showPrimes(n, outputElement) {
    outputContainer.innerHTML = "";
    for (let i = 2; i <= n; i++) {
      if (!isPrime(i)) continue;
        // Display the result on the webpage
        var outputElement = document.createElement("div");
        outputElement.textContent = i;
        outputContainer.appendChild(outputElement);
        //alert(i);  // a prime
    }
  }
  
function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if ( n % i == 0) return false;
    }
    return true;
}

document.getElementById("mf").addEventListener("submit", function(event) {
    event.preventDefault();
    var Value = document.getElementById("no").value;
    var outputContainer = document.getElementById("result");
    showPrimes(Value, outputContainer);
});  
