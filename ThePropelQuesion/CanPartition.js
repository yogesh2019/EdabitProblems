function canPartition(arr)
{
   for(let  j= 0 ;  j < arr.length ; j++)
   {
    let a = 1;
    for(let i = 0 ; i < arr.length ; i++)
    {
        if(i!=j)
          a*=arr[i];
    }
    if(a == arr[j])
     return true;
   }
   return false;
   
}


console.log(canPartition([2, 8, 4, 1])==true,
canPartition([-1, -10, 1, -2, 20])== false,

canPartition([-1, -20, 5, -1, -2, 2])==true);
