// https://www.hackerrank.com/challenges/drawing-book/problem

function pageCount(n, p) {

    // initial book front
    let book_front = [0,1];
    let book_back;
    if(n % 2 != 0)
    {
      book_back = [n-1,n];
    }
    else{
      book_back = [n,n+1];
    }
    let c1 = 0;
    let finite = 0;
    while(!(p == book_front[0] || p == book_front[1]))
    {
      
        book_front[0]+=2;
        book_front[1]+=2;
        c1++;
     
    }
    let c2 = 0;
    while(!(p == book_back[0] || p == book_back[1]))
    {
      
        book_back[0]-=2;
        book_back[1]-=2;
        c2++;
     
     // console.log(book_back)
    }
    return (c1<c2?c1:c2);
     
    
    /*
     * Write your code here.
     */

}

console.log(pageCount(5,4)); //return 0
console.log(pageCount(6,2) );//return 1