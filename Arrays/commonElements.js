function commonEl(arr1, arr2) {
    for (let i of arr1){
        isCommon = arr2.includes(i);
        if (isCommon){
            console.log(i)
        }
    }
}