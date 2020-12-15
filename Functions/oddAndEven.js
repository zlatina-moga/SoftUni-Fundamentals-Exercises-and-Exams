function oddAndEvenSum(n){
    let arr = String(n).split('');
    let oddSum = 0;
    let evenSum = 0;
  
      for (let i = 0; i < arr.length; i++){
          const num = Number(arr[i]);
          if (num % 2 == 0){
            evenSum += num;
          } else {
            oddSum += num;
          }
      } 
    return `Odd sum = ${oddSum}, Even sum = ${evenSum}`;
  }
  
  