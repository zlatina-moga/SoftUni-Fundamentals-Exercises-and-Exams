function solve(arr){
    let movies= [];

    arr.forEach(element => {
        let tokens = element.split(' ');
        let addIndex = tokens.indexOf('addMovie');
        let directorIndex = tokens.indexOf('directedBy');
        let dataIndex = tokens.indexOf('onDate');

        if (addIndex > -1){
            movies.push({name: tokens.slice(addIndex+1).join(' ')});
        }

        if (directorIndex > -1){
            let name = tokens.slice(0, directorIndex).join(' ');
            let director = tokens.slice(directorIndex+1).join(' ');
            movies.forEach(movie => {
                if (movie.name === name){
                    movie.director = director;
                }
            })
        }

        if (dataIndex > -1){
            let name = tokens.slice(0, dataIndex).join(' ');
            let date = tokens.slice(dataIndex+1).join(' ');
            movies.forEach(movie => {
                if (movie.name === name){
                    movie.date = date;
                }
            })
        }
    });

    movies.forEach(movie => {
        if (movie.name!== undefined && movie.director !== undefined && movie.date !== undefined){
            console.log(JSON.stringify(movie))
        }
    })
}

