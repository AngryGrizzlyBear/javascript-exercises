const leapYears = function(year) {
if ( year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
    return true
} else {
   // console.log( year + " is not a leap year")
   return false
}
};



// Do not edit below this line
module.exports = leapYears;
