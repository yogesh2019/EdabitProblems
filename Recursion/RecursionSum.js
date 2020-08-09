// function sum(n) {
//     if(n == 0)
//      return 0;
//     else
//      {
//          return sum(n-1) + n;
//      }
// }

var sum = (n) => {if(n==0)return 0; else return (sum(n-1)+n)};
console.log(sum(5) == 15);
console.log(sum(12) == 78);
