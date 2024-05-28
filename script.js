// Predefined variables
const P = 1000; // Principal
const r = 0.05; // Rate of interest
const n = 12; // Number of times interest is compounded per year
const t = 3; // Time in years

// Calculate compound interest
const A = P * Math.pow((1 + (r / n)), (n * t));

// Display the result
document.getElementById('result').innerText = "The compound interest after " + t + " years is: " + A.toFixed(2);
