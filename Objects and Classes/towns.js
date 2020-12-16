function solve(arr){
    for (const line of arr){
        let [town, latitude, longitude] = line.split(' | ');
        let city = {
            town,
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longitude).toFixed(2),  
        }
        console.log(city)
    } 
}