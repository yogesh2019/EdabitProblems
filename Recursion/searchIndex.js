function Search(arr,item){
    if(arr.length == 1 && arr[0]!= item)
    return 1;
     
 if(arr[0] == item)
   return 0;
 else
   return  Search(arr.slice(1),item) + 1;
}


function search(arr, item) {
 
  let i = Search(arr,item);
    return i>arr.length-1?-1:i;
   
}


console.log(search([1, 2, 3, 4],3)==2);

console.log(search([2, 4, 6, 8, 10], 8)==3);
console.log(search([1, 3, 5, 7, 9], 11)==-1);


