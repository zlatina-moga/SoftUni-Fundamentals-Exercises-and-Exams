function solve(data) {
    let stringPattern = /[^\d]+/g;
    let numPattern = /\d+/g;
   
    let uniqueSymbols = new Set();
   
    let myString = data[0]
      .split("")
      .filter((x) => x !== "")
      .join("");
   
    let stringExec = stringPattern.exec(myString);
    let numExec = numPattern.exec(myString);
    let result = "";
   
    while (stringExec) {
      let currentMessage = stringExec[0].toUpperCase();
      let numOfRepeat = Number(numExec[0]);
   
      if (numOfRepeat > 0) {
        currentMessage.split("").map((x) => uniqueSymbols.add(x));
      }
      result += currentMessage.repeat(numOfRepeat);
      stringExec = stringPattern.exec(myString);
   
      numExec = numPattern.exec(myString);
    }
    console.log(`Unique symbols used: ${Array.from(uniqueSymbols).length}`);
    console.log(`${result}`);
  }