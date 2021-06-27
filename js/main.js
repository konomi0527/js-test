var array = [1,2, 4, 7, 5, 4, 3, 8,1];
var result = array.filter(function(x, i, self) {
})
console.log(result)

function leapYear(year) {


    if ((year % 4 == 0 && year % 100 != 0)　|| (year%400==0) ){
        return year
    }
}
console.log(leapYear(2020))
console.log(leapYear(2021))