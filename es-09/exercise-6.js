function getKeys(obj) {
  let objkeys = [];
  objkeys.push(Object.keys(obj))
  return objkeys
}

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 32,
  city: 'Rome',
  job: 'Developer',
};

const keys = getKeys(person);
console.log(keys);