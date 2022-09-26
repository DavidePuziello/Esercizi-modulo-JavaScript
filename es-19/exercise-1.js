const person1 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25
};

const person2 = person1;
person2.firstName = 'Simon'

/* Se scrivo person2.firstName = 'Simon' sto creando un riferimento all'oggetto, 
ed essendo person2 = person1 tramite la variabile specificata sopra, vado a modificare il 
nome in entrambi gli oggetti */

// Modifica la proprietà "firstName" di person2 in "Simon"

console.log(person1);
console.log(person2);