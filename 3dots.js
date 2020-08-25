const ages = [15, 16, 17, 18]
const ages2 = [19, 20, 22, 25, 27]
const ages3 = [45, 47, 49, 70]
const allAges = ages.concat(ages2).concat(ages3).concat([5])

console.log(allAges)      //old procedure of concatenation array
const allAges2 = [...ages, ...ages2, 5, ...ages3] //u have used just three dots here to concatenate each array with a comma
const businessman = 650;
const minister = 550;
const secretary = 450;
const maximum = Math.max(businessman, minister, secretary)
console.log(maximum + " is the maximum value found")
const dollarCent = [1000, 400, 700]
const minimum = Math.min(...dollarCent)
console.log(minimum + " is the minimum amount of money Nayan Have")