const persons = [
  {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
  },
  {
    id: 2,
    firstName: 'Maria',
    lastName: 'Verdi',
    age: 32
  },
  {
    id: 3,
    firstName: 'Giovanni',
    lastName: 'Rossi',
    age: 35
  }
];

const jobs = [
  {
    id: 1,
    jobTitle: 'CEO'
  },
  {
    id: 2,
    jobTitle: 'Project Manager'
  },
  {
    id: 3,
    jobTitle: 'Developer'
  }
];

function fetchPersonById(id) {
  return new Promise ((resolve, reject) => {
    if (persons.find(item => item.id === id)) {
      resolve (persons.find(item => item.id === id))
    } else {
      reject('ID not found')
    }
  })
}

function fetchJobById(id) {
  return new Promise((resolve, reject) => {
    if (jobs.find(item => item.id === id)) {
      resolve (jobs.find(item => item.id === id))
    }else {
      reject('ID not found')
    }
  })
}

/* fetchPersonById(1)
.then((person) => console.log(person))
.catch((err) => console.log(err))

fetchJobById(1)
.then((person) => console.log(person))
.catch((err) => console.log(err)) */

async function complete(id) {
  let persons = await fetchPersonById(id);
  let job = await fetchJobById(id);
  return console.log(persons.firstName, persons.lastName, job.jobTitle)
}

complete(1)
.catch((err) => console.log(err))

complete(4)
.catch((err) => console.log(err))