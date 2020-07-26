//
// var [foo,hello,[[nested],hi]] = [1,3,[[9],5]];
// console.log(foo,hello,nested);

// var [,,third] = [1,3,9,1,3,4,5];
// console.log(third);


// rest pattern


// var [hello,...restArray] = [1,3,,5,8]
// console.log(restArray);


// let see how it works with the iterator

// function* fibs(){
//     var a = 0;
//     var b = 1;
//     while(true)
//     {
//         yield a;
//         [a,b] = [b,a+b];
//     }
// }
// let [first,second,third,fourth] = fibs();
// console.log(fourth);



// destructuring objects

// var robotA = {  name : "Bender"};

// var {name : nameA} = robotA;
// console.log(nameA)

// var robotA = {  name : "Bender"};

// var {name} = robotA;
// console.log(name)



const str = `({ one = 1, two = 2 } = {one : 1, two : 2 }).toString()`

