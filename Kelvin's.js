// Create a variable named kelvin, and set it equal to 293. 
const kelvin = 0;
// Convert Kelvin to Celsius, store the result in another variable named celsius
const celsius = kelvin - 273;
// Use this equation to calculate Fahrenheit.
let fahrenheit = celsius * (9/5) + 32;
// Use the .floor() method from the built-in Math object to round down fahrenheit temperature
fahrenheit = Math.floor(fahrenheit)
console.log(`The temperature is ` + fahrenheit + `degrees Fahrenheit`)
// Convert to Newton
let Newton = celsius * (33/100)
// Round down Newton temperature using .floor()
Newton = Math.floor(Newton)
//Log temperature in newton to the console
console.log(Newton)