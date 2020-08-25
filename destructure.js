const person = {name: 'Jack William', age: 17, job:'facbooker', gfName:' Ema Watson', address: 'cantonment', phone:'017279549558', friends:['Tom Hanc', 'Tom cruize', 'Tom Yarn']}
const name = person.name

const gfName = person.gfName;
const address = person.address;
const phone = person.phone
const job = person.job


console.log(gfName, address, name, ...phone, ...job);


const {age} = person;
console.log(age)
