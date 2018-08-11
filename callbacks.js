function doTo5(anything){
  return anything(5)
}

function divide10ByN(n){
  return 10/n
}

console.log(doTo5(divide10ByN))

function appendToHello(s){
  return `Hello, ${s}!`
}

console.log(doTo5(appendToHello))

function convertToFor()