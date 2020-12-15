function smallestNumber(first, second, third){
    let smallestNum = Number.MAX_SAFE_INTEGER;
  
    smallestNum = smallest(first, smallestNum);
    smallestNum = smallest(second, smallestNum);
    smallestNum = smallest(third, smallestNum);
  
    function smallest(n, small){
      if (n < small){
        small = n;
      }
      return small;
    } 
    return smallestNum;
  }
