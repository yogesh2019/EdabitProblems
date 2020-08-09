function sameVowelGroup(w) {
    let obj = {a:0, e:0, i:0, o:0, u:0};
     let ret = [w[0]];
     let obj1 =Object.assign({},obj);
    for(let i = 0 ; i < w[0].length; i++)
    {
       
        if(w[0][i] in obj1)
        {
            obj1[w[0][i]]  = 1;
        }
    }
    
  // console.log(obj1);
   for(let i = 1 ; i < w.length; i++)
   {
       let obj2 = Object.assign({},obj);
       
      for(let j = 0 ;  j < w[i].length ; j++)
      {
        if(w[i][j] in obj2)
        {
            obj2[w[i][j]]  = 1;
        }
      }
      if((JSON.stringify(obj2) == JSON.stringify(obj1)))
         ret.push(w[i]);
   }
 return ret;
   
}
console.log(
sameVowelGroup(["toe", "ocelot", "maniac"]),["toe", "ocelot"],

sameVowelGroup(["many", "carriage", "emit", "apricot", "animal"]),["many"],

sameVowelGroup(["hoops", "chuff", "bot", "bottom"]) ,["hoops", "bot", "bottom"]);