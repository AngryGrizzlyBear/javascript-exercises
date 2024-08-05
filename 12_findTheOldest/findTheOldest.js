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
    const getAge = function (birth, death) {
        if(!death) {
            death = new Date().getFullYear();
        }
        return death - birth;
    };

    const findTheOldest = function (people) {
        return people.reduce((oldest, currentPerson) => {
          const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
          const currentAge = getAge(
            currentPerson.yearOfBirth,
            currentPerson.yearOfDeath
          );
          return oldestAge < currentAge ? currentPerson : oldest;
        });
      };

// people.sort((a, b) => {
//     const lastGuy = a.yearOfBirth - a.yearOfDeath;
//     const nextGuy = b.yearOfBirth - b.yearOfDeath;
//     return lastGuy > nextGuy ? -1 : 1

// Do not edit below this line
module.exports = findTheOldest;
