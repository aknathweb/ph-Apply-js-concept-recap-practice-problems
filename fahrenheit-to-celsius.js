// ২. একইভাবে উল্টা হিসাব করবে। যাতে তোমাকে ফারেনহাইট হিসেবে তাপমাত্রা দিলে সেটাকে সেলসিয়াস এ কনভার্ট করে আউটপুট দিবে। 

function FahrenheitToCelsius(Fahrenheit) {
    const Celsius = (5 / 9) * (Fahrenheit - 32);
    return Celsius;
}
const FahrenheitTemperature = 68;
console.log("Fahrenheit to Celsius temperature : ", FahrenheitToCelsius(FahrenheitTemperature));