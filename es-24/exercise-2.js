const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}

const print = Object.values(person)
for (let i = 0; i < print.length; i++) {
  console.log(Object.values(person)[i])
}

// Print values of person using Object.values