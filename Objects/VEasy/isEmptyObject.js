 obj = {};


// console.log(Object.keys(obj).length === 0 && obj.constructor === Object);
const isEmp = (obj) => !Object.keys(obj).length;

console.log(isEmp(obj));