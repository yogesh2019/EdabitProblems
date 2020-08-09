function slidingWindow(arr,k)
{
    let nArr = [];
  for(let i = 0 ; i <= arr.length -k ; i++)
  {
     nArr.push(median(arr,i,k));
  }
  return nArr;
}

function median(arr,i,k)
{
    let arr1 =  [];
    for(let j = i ; j < k+i ; j++)
    {
        arr1.push(arr[j]);
    }
   arr1.sort((a,b)=> a-b);
   if(k%2!=0)
    return(arr1[Math.floor(arr1.length/2)]);
  else
    return((arr1[Math.floor(arr1.length/2)]+arr1[(Math.floor(arr1.length/2))-1])/2)
}

console.log(slidingWindow([-1, 5, 13, 8, 2, 3, 3, 1], 4));