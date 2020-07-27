// function hasKey(obj, key) {
//     if(key in obj)
//     {
//         return true;
//     }
//     return false;
// }
// hasKey({name:"yogesh"},"name");



// now let see whether the array has some elements or not

// const array  = [1, 2, 3, 4, 5];

// const isEven = (element) => element%2 === 0;

// console.log(array.some(isEven));

// console.log(array.includes(2));


const hasKey = (obj, key) => obj[key]? true : false;