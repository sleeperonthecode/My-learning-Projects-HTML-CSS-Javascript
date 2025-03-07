// This function will be called when the "Convert" button is clicked
function convert() {
    // Get the input value from the text input field
    const inputValue = parseFloat(document.getElementById("inputValue").value);
    // Get the selected input unit from the dropdown
    const inputUnit = document.getElementById("inputUnit").value;
    // Get the selected output unit from the dropdown
    const outputUnit = document.getElementById("outputUnit").value;
    
    // Check if the input value is a valid number: If not, it displays an error message.
    if (isNaN(inputValue)) {
        document.getElementById("result").innerText = "Please enter a valid number.";
        return;
    }

    // Conversion rates object
    const conversionRates = {
        meters: { meters: 1, kilometers: 0.001, feet: 3.28084, miles: 0.000621371, millimeters: 1000, inches: 39.3701, centimeters: 100 },
        kilometers: { meters: 1000, kilometers: 1, feet: 3280.84, miles: 0.621371, millimeters: 1000000, inches: 39370.1, centimeters: 100000 },
        centimeters: { meters: 0.01, kilometers: 0.00001, feet: 0.0328084, miles: 0.0000062137, millimeters: 10, inches: 0.393701, centimeters: 1 },
        feet: { meters: 0.3048, kilometers: 0.0003048, feet: 1, miles: 0.000189394, millimeters: 304.8, inches: 12, centimeters: 30.48 },
        miles: { meters: 1609.34, kilometers: 1.60934, feet: 5280, miles: 1, millimeters: 1609344, inches: 63360, centimeters: 160934 },
        inches: { meters: 0.0254, kilometers: 0.0000254, feet: 0.0833333, miles: 0.0000157828, millimeters: 25.4, inches: 1, centimeters: 2.54 },
        millimeters: { meters: 0.001, kilometers: 0.000001, feet: 0.00328084, miles: 0.000000621371, millimeters: 1, inches: 0.0393701, centimeters: 0.1 }
    };

    // Calculate the converted value using the conversion rates
    const convertedValue = inputValue * conversionRates[inputUnit][outputUnit];

    // Display the result
    document.getElementById("result").innerText = `${inputValue} ${inputUnit} = ${convertedValue} ${outputUnit}`;
}