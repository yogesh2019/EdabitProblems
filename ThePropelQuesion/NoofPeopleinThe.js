var number = function(busStops){
 let a = busStops.map((a)=>{
     return a[0]-a[1];
 }).reduce((acc,curr)=>  acc+curr,0);
 return a;
}
console.log(number([[10,0],[3,5],[5,8]]) == 5);
console.log(number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]])==17);
console.log(number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]])==21);