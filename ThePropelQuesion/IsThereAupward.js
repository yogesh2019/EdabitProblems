function upwardTrend(arr) {
    for(let i = 0 ;i  < arr.length-1 ; i++)
    {
        if(typeof(arr[i])=='string'|| typeof(arr[i+1])== 'string')
         return "Strings not permitted!";
       if(arr[i+1]<arr[i]  )
         return false;
    }
    return true;
}







console.log(upwardTrend([1, 2, 3, 4]));

console.log(upwardTrend([1, 2, 6, 5, 7, 8])==false,

upwardTrend([1, 2, 3, "4"])=="Strings not permitted!",

upwardTrend([1, 2, 3, 6, 7])== true)