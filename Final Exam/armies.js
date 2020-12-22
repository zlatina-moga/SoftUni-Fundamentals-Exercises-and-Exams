function foo(input) {
    let obj = {};
    input.forEach(x => {
        let leaderCheck = x.includes('arrives');
        let dotCheck = x.includes(':');
        let plusCheck = x.includes('+');
        if(leaderCheck){
            let leader = x.split(' ').filter(x => x !== 'arrives').join(' ');
            obj[leader] = { armsName : {}, total: 0};
        }else if(dotCheck){
            let [leader, data] = x.split(': ');
            let [army, count] = data.split(', ');
            count = Number(count);
            if(obj.hasOwnProperty(leader)){
                if(!obj[leader].armsName.hasOwnProperty(army)){
                    obj[leader].armsName[army] = count;
                    obj[leader].total += count;
                }
            }
        }else if(plusCheck){
            let [army, count] = x.split(' + ');
            count = Number(count);
            Object.keys(obj).some(x => {
                for (const i in obj[x]) {
                    if(obj[x][i].hasOwnProperty(army)){
                        obj[x].armsName[army] += count
                        obj[x].total += count;
                    }
                }
            })
        }
    });
    Object.entries(obj).sort((a,b) => b[1].total - a[1].total).forEach(x =>{
        console.log(`${x[0]}: ${x[1].total}`);
        Object.entries(x[1].armsName).sort((a,b) => b[1] - a[1]).forEach(z => {
            console.log(`>>> ${z[0]} - ${z[1]}`);
        })
    })
}

foo(['Rick Burr arrives', 'Fergus: Wexamp, 30245', 'Rick Burr: Juard, 50000', 'Findlay arrives', 'Findlay: Britox, 34540', 'Wexamp + 6000', 'Juard + 1350', 'Britox + 4500', 'Porter arrives', 'Porter: Legion, 55000', 'Legion + 302', 'Rick Burr defeated', 'Porter: Retix 3205'])