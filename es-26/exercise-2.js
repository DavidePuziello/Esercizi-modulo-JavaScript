function person(firstName, lastName) {
  this.fullName = () => {
    return firstName + ' ' + lastName
  }
}

 const john = new person('John', 'Doe')
 const simon = new person('Simon', 'Collins')

console.log(john.fullName()); // John Doe
console.log(simon.fullName()); // Simon Collins