const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

    function findTheOldest(people) {
    people.sort((a, b) => {
        const lastGuy = a.yearOfBirth - a.yearOfDeath;
        const nextGuy = b.yearOfBirth - b.yearOfDeath;
        
        return lastGuy > nextGuy ? 1 : -1
    })
    return people[0]
};

// people.sort((a, b) => {
//     const lastGuy = a.yearOfBirth - a.yearOfDeath;
//     const nextGuy = b.yearOfBirth - b.yearOfDeath;
//     return lastGuy > nextGuy ? -1 : 1

// Do not edit below this line
module.exports = findTheOldest;
