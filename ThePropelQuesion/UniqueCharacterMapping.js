function characterMapping(str)
{
    let res = {};
    let arr = [];
    for(let i = 0 ; i < str.length ; i++)
    {
        if(!(str[i] in res))
          res[str[i]] = Object.values(res).length;
        arr.push(res[str[i]]);
    }
    
    return arr;
}
// function characterMapping(str) {
// 	d=Array.from(new Set(str.split('')))
// 	return str.split('').map(x=>d.indexOf(x))
// }




console.log(JSON.stringify(characterMapping("babbcb"))==JSON.stringify([0, 1, 0, 0, 2, 0]));

console.log(JSON.stringify(characterMapping("abcd"))==JSON.stringify([0, 1, 2,3]));

console.log(JSON.stringify(characterMapping("hmmmmm"))==JSON.stringify([0, 1, 1, 1, 1, 1]));
