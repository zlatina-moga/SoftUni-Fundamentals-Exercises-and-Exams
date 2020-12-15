function charInRange(a, b){
    let first  = a.charCodeAt(0);
    let second = b.charCodeAt(0);
    let start = Math.min(first, second);
    let end = Math.max(first, second);
    let result = '';

    for (let i = start + 1; i < end; i++){
      result += String.fromCharCode(i) + ' ';
    }
    return result;
}

