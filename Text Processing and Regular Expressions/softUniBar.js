function solve (arr){
    let total = 0;
    const pattern = /%(?<customer>[A-Z][a-z]+)%([^\|\$%\.]+)?<(?<product>\w+)>([^\|\$%\.]+)?\|(?<count>[0-9]+)\|([^\|\$%\.\d]+)?(?<price>[0-9]+(\.[0-9]+)?)\$/g;
    while ((match = pattern.exec(arr)) !== null){
        let customer = match.groups.customer;
        let product = match.groups.product;
        let price = Number(match.groups.price) * Number(match.groups.count);
        total += Number(match.groups.count)*Number(match.groups.price)
        console.log(`${customer}: ${product} - ${price.toFixed(2)}`)    
    }
    console.log(`Total income: ${total.toFixed(2)}`)
}