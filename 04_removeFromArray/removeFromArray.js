const removeFromArray = function(passedArray, ...args) {
    const newArray = []
passedArray.forEach(element => {
    if(!args.includes(element)){
        newArray.push(element)
    }
});
return newArray
};

//console.log(removeFromArray([1,2,3,4], 1,2))
// Do not edit below this line
module.exports = removeFromArray;
