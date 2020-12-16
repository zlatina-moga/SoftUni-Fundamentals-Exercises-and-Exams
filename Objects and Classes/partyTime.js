function solve(arr){
    let list = {
        'vip' : [],
        'regular' : []
    }

    let partyIndex = arr.indexOf('PARTY');
    let guests = arr.slice(0, partyIndex);    

    for (let guest of guests){
        if (isNaN(guest[0])){
            list['regular'].push(guest)
        } else {
            list['vip'].push(guest)
        }
    }

    let actualGuests = arr.slice(partyIndex+1);
    for (let line of actualGuests){
        if (list['regular'].includes(line)){
            let i = list['regular'].indexOf(line);
            list['regular'].splice(i, 1)
        }
        if (list['vip'].includes(line)){
            let i = list['vip'].indexOf(line);
            list['vip'].splice(i, 1)
        }
    }

    console.log(list['regular'].length + list['vip'].length);
    console.log(list['vip'].join('\n') + '\n' + list['regular'].join('\n'))
}