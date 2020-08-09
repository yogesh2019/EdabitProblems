function puzzlePieces(a1, a2) {
    if(a1.length==a2.length)
    {
      for(let i = 0 ;i < a1.length-1 ; i++)
      {
         if(a1[i+1]+a2[i+1] != a1[i]+a2[i])
          return false;
      }
      return true;
    }
    return false;
}


console.log(puzzlePieces([1, 2, 3, 4], [4, 3, 2, 1]),

puzzlePieces([1, 8, 5, 0, -1, 7], [0, -7, -4, 1, 2, -6])==true,

puzzlePieces([1, 2], [-1, -1])==false,

puzzlePieces([9, 8, 7], [7, 8, 9, 10])==false)