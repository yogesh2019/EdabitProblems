function findZip(str) {
    let c = 0;
    for(let i = 0 ; i < str.length ; i++)
    {
         if(str[i] == 'z')
         {
             if(str.substring(i,3+i == "zip"))
              {
                  if(c == 1)
                   return i;
                  c = 1;
                 
              }
             
         }
          
    }
   return -1;
}
// function findZip(str) {
// 	return str.indexOf("zip", str.indexOf("zip") + 1)
// }

console.log(findZip("all zip files are zipped") == 18);
console.log(findZip("all zip files are compressed")== -1)