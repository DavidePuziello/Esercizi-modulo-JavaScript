const person = {
  get getFirstName() {
    return firstName;
  },
  set setFirstName(n) {
    this.firstName = n;
  },
  get getLastName() {
    return lastName
  },
  set setLastName(n) {
    this.lastName = n;
  },
  fullName() {
    return `${this.firstName} ${this.lastName}`
  }
}



const john = Object.create(person);
john.firstName = "Jhon";
john.lastName = "Doe";

const simon = Object.create(person);
simon.firstName = "Simon";
simon.lastName = "Pappardella";


console.log(john.fullName()); // John Doe
console.log(simon.fullName()); // Simon Collins