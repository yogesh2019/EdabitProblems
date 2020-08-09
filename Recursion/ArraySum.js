function sum(arr) {
   if(arr.length == 0)
     return 0;
    else
     return Sum(arr);
	
}
function Sum(arr){
    if(arr[1]==undefined)
    return arr[0];
   else
    return Sum(arr.slice(1))+arr[0];
}

// function sum(arr) {
//     return arr.length === 0?0:arr.pop()+sum(arr);
//     }


console.log(sum([1, 2, 3, 4])==10);

console.log(sum([]) == 0);