function distinctArr(arr){
    let extra = '';
    let newArr = [];
    for (let i = 0; i < arr.length; i++){
        if (arr[i] == arr[i]+1){
            extra += arr[i]
        } else {
            if (newArr.includes(arr[i])){
                continue;
            } else {
                newArr.push(arr[i]);
            }
        }
    }
    console.log(newArr.join(' '))
}

