function solve(text){
    let lastIndexOfDashes = text.lastIndexOf('\\')
    let fileInfo = text.substring(lastIndexOfDashes + 1);
    let lastIndexDot = fileInfo.lastIndexOf('.')
    let fileName = fileInfo.substring(0, lastIndexDot);
    let fileExtension = fileInfo.substring(lastIndexDot + 1)
    console.log(`File name: ${fileName}`)
    console.log(`File extension: ${fileExtension}`)
}

