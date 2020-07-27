tileHand = [
    { tile: "N", score: 1 },
    { tile: "K", score: 5 },
    { tile: "Z", score: 10 },
    { tile: "X", score: 8 },
    { tile: "D", score: 2 },
    { tile: "A", score: 1 },
    { tile: "E", score: 1 }
  ];


// function maximumScore(tileHand) {
//     let sum = 0;
//     for(tile of tileHand)
//     {
//         sum+=tile.score;
//     }
//     return sum;
// }


const maximumScore = tileHand => tileHand.reduce((acc,curr) => acc+curr.score,0);

console.log(maximumScore(tileHand))