function rightPlace(arg1, arg2, arg3) {
    let result = arg1.replace("_", arg2)
    if (result === arg3){
        console.log("Matched")
    } else {
        console.log("Not Matched")
    }
}