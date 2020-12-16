function solve(arr){
    let numOfSongs = arr.shift();
    let favSongType = arr.pop();

    class Song {
        constructor(typeList, name, time){
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
        play(){
            if (this.typeList === favSongType || favSongType === 'all'){
                console.log(`${this.name}`)
            } 
        }
    }

    for (let i = 0; i < arr.length; i++){
        let [typeList, name, time] = arr[i].split('_');
        let song = new Song(typeList, name, time);
        song.play()
    }
}

