const fibonacci = function (countArg) {
    let count
    if (typeof countArg !== 'number') {
        count = parseInt(countArg)
    } else {
        count = countArg
    }

    if(count < 0) return("OOPS")
    if (count === 0) return(0)

    let a = 0;
    let b = 1;

    for (let i = 1; i < count; i++){
        let temp = b;

        b = a + b;
        a = temp;
    }

    return b;

};


// Do not edit below this line
module.exports = fibonacci;
