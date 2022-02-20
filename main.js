// the forcast is 293 Kelvin, Kelvin remains constant in our code

const Kelvin = 293;

// Celsius is 273 degrees less than Kelvin so we're subtracting that from Kelvin or 293

celsius = (Kelvin - 273);

// We're converting celsius to fahrenheit

var fahrenheit = celsius * (9/5) + 32;

// We have rounded the fahrenheight temperature and saved it to the fahrenheit variable

var fahrenheit = Math.floor(fahrenheit)


console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);


// By using my program I also found that 0 Kelvin would be -460 degrees Fahrenheit 



