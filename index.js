/*Temp converter*/

function tempConvert(temp, type) {
  
  /*Farenheit to Celsius */
  if (type === "far") {
   var cel = (5/9)*((parseInt (temp)-32))
   console.log(`${temp} degrees Farenheit is equal to ${cel} degrees Celsius`)
  }
  
  /*Celsius to Farenheit*/
  else if (type === "cel") {
   var far = (parseInt (temp)*1.8)+32
   console.log(`${temp} degrees Celsius is equal to ${far} degrees Farenheit`)
  }
  
  /*If function input is not valid*/
  else{console.log("Input valid temp and type please.")}
}

tempConvert("45", "far")
tempConvert("45", "cel")
tempConvert("30")