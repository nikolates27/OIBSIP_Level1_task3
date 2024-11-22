function convertTemperature() {
    // Getting the user input and the selecting unit
    const tempInput = document.getElementById("temperature").value;
    const unit = document.getElementById("unit").value;
    let temperature = parseFloat(tempInput);

    // Checking the input to be number
    if (isNaN(temperature)) {
        document.getElementById("result").innerText = "Please enter a valid number.";
        return;
    }

    let convertedTemp, unitFrom, unitTo;
    // Converting based on the selected unit
    if (unit === "Celsius") {
        // Converting Celsius to Fahrenheit and Kelvin
        convertedTemp = {
            Fahrenheit: (temperature * 9/5) + 32,
            Kelvin: temperature + 273.15
        };
        unitFrom = "Celsius";
        unitTo = "Fahrenheit and Kelvin";
    } else if (unit === "Fahrenheit") {
        // Converting Fahrenheit to Celsius and Kelvin
        convertedTemp = {
            Celsius: (temperature - 32) * 5/9,
            Kelvin: (temperature - 32) * 5/9 + 273.15
        };
        unitFrom = "Fahrenheit";
        unitTo = "Celsius and Kelvin";
    } else if (unit === "Kelvin") {
        // Converting Kelvin to Celsius and Fahrenheit
        convertedTemp = {
            Celsius: temperature - 273.15,
            Fahrenheit: (temperature - 273.15) * 9/5 + 32
        };
        unitFrom = "Kelvin";
        unitTo = "Celsius and Fahrenheit";
    }

    // Displaying the Output
    let resultText = `${temperature}° ${unitFrom} is equal to:`;
    for (let key in convertedTemp) {
        resultText += `\n${convertedTemp[key].toFixed(2)}° ${key}`;
    }
    document.getElementById("result").innerText = resultText;
}
