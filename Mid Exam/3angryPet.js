function angryPet(arr, entryPoint, itemsType, priceRatings){
    let leftSum = 0;
    let rightSum = 0;
    let leftArr = arr.splice(0, entryPoint);

    for (i = 0; i < leftArr.length; i++){
        let currentItem = leftArr[i];

        if (itemsType == 'cheap' && currentItem < entryPoint){
            if (priceRatings == 'positive' && currentItem > 0){  
                leftSum += currentItem;
            } else if (priceRatings == 'negative' && currentItem < 0){
                leftSum += currentItem;
            } else if (priceRatings == 'all'){
                leftSum += currentItem;
            }
        } 
        
        else if (itemsType == 'expensive' && currentItem >= entryPoint){
            if (priceRatings == 'positive' && currentItem > 0){  
                leftSum += currentItem;
            } else if (priceRatings == 'negative' && currentItem < 0){
                leftSum += currentItem;
            } else if (priceRatings == 'all'){
                leftSum += currentItem;
            }
        }
    }

    for (i = 0; i < arr.length; i++){
        currentItem = arr[i];

        if (itemsType == 'cheap' && currentItem < entryPoint){
            if (priceRatings == 'positive' && currentItem > 0){  
                rightSum += currentItem;
            } else if (priceRatings == 'negative' && currentItem < 0){
                rightSum += currentItem;
            } else if (priceRatings == 'all'){
                rightSum += currentItem;
            }
        } 
        
        else if (itemsType == 'expensive' && currentItem >= entryPoint){
            if (priceRatings == 'positive' && currentItem > 0){  
                rightSum += currentItem;
            } else if (priceRatings == 'negative' && currentItem < 0){
                rightSum += currentItem;
            } else if (priceRatings == 'all'){
                rightSum += currentItem;
            }
        }
    }
    
    if (leftSum >= rightSum){
        console.log(`Left - ${leftSum}`)
    } else {
        console.log(`Right - ${rightSum}`)
    }
}



