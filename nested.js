function myPerson(){
  const person = {
  name: "Awesome Pants",
  occupation: {
    title: "Senior Manager of Awesome",
    yearsHeld: 2
  },
  pets: [{
    kind: "dog",
    name:"Fiona"
  }, {
    kind: "cat",
    name: "Ralph"
  }],
  likes: [{
    food: "Apple Pie",
    pet: "Horse",
    weather: "Rainy",
    month: "May"
  }]
}

console.log(`${person.name} is the ${person.occupation.title}.`)
console.log(`${person.name} has been in the position for ${person.occupation.yearsHeld} years.`)
console.log(`${person.name} has ${person.pets.length} pets.`)


console.log(`The first pet is a ${person.pets[0].kind}.`)
console.log(`The second pet is a ${person.pets[1].kind}.`)
}

myPerson()


var myArray = [1,2,3,4,5,6,7,8,9,10]

function find(array, criteriaFN) {
  for (let i = 0; i < array.length; i++){
    if (criteriaFN(array[i])) {
      console.log (array[i])
      return array[i]
    }
  }
}

find(myArray,n => n === 4);
find(myArray,n => n === 7);


const collections = [1, [2, [4, [5, [6]], 3]]]

function find(array, criteriaFN){
  // initialize two variables, `current`, and `next`
  // `current` keeps track of the element that we're
  // currently on, just like we did when unpacking the
  // array above; `next` is itself an array that keeps
  // track of the elements (which might be arrays!) that
  // we haven't looked at yet
  
  let current = array
  let next = []
  
  while(current) {
    if (criteriaFN(current)) {
      console.log(current)
      return current
    }
    
    if (Array.isArray(current)) {
      for (let i = 0; i < current.length; i++) {
        next.push(current[i])
      }
    }
    
    current = next.shift()
  }
  
  return null
}

find(collections, n => n > 5 )
find(collections, n => (typeof n === 'number' && n > 5))
