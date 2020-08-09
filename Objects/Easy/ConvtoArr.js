
obj = {
    D: 1,
    B: 2,
    C: 3
  };
// function objectToArray(obj) {
//    let va = [];
//     for(o in obj)
//     {
//         va.push([o,obj[o]])
//     }
//     return (va);
// }

const objectToArray = obj => Object.keys(obj).map( key => [key,obj[key]])
console.log(objectToArray(obj))