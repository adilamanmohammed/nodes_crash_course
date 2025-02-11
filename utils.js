function generateRandomNumber() {
    return Math.floor(math.random() * 100)+1;
}

function celciusToFahrenheit (celsius) {
    return celsius * 9/5 + 32;
}

module.exports = {
    generateRandomNumber,
    celciusToFahrenheit
};