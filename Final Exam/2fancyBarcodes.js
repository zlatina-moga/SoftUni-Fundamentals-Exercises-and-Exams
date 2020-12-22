function fancyBarcodes(input) {
    input.shift();       
    let pattern = /@#+(?<barcode>[A-Z][A-Za-z\d]{4,}[A-Z])@#+/;    
 
    for(const line of input) {
        let code = '';
        let match = pattern.exec(line);
 
        if(match) {
            for(const element of match.groups.barcode) {
                if(element.charCodeAt() >= 48 && element.charCodeAt() <= 57) {
                    code += element;
                }
            }
 
            if(code == '') {
                console.log(`Product group: 00`);
            } else {
                console.log(`Product group: ${code}`);
            }
        } else {
            console.log(`Invalid barcode`);
        }
    }  
}
fancyBarcodes(['3', '@#FreshFisH@#', '@###Brea0D@###', '@##Che4s6E@##'])