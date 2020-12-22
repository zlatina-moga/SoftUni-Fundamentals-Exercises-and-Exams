function bookShelf(input) {
    const shelfPattern = /->/g;
    const bookPattern = /[:,]/g;
    const shelves = {};
    const normalizeInput = (line, pattern) => line
        .split(pattern)
        .map(e => e.trim());
 
    input.forEach(line => {
        if (new RegExp(shelfPattern).test(line)) {
            const [id, genre] = normalizeInput(line, shelfPattern);
 
            if (!shelves[id]) {
                shelves[id] = { genre, books: [] };
            }
        } else if (new RegExp(bookPattern).test(line)) {
            const [title, author, bookGenre] = normalizeInput(line, bookPattern);
 
            const shelf = Object.keys(shelves)
                .find(k => shelves[k].genre === bookGenre);
 
            if (shelf) {
                shelves[shelf].books.push({ title, author, genre: bookGenre });
            }
        }
    });
 
    Object.keys(shelves)
        .sort((a, b) => shelves[b].books.length - shelves[a].books.length)
        .map(k => {
            shelves[k].books = shelves[k].books.sort((a, b) => a.title.localeCompare(b.title));
 
            return k;
        })
        .forEach(k => {
            const { id, genre, books } = { id: k, ...shelves[k] };
 
            console.log(`${id} ${genre}: ${books.length}\n${books.map(b => `--> ${b.title}: ${b.author}`).join('\n')}`);
        });
}

bookShelf(['1 -> history', '1 -> action', 'Death in Time: Criss Bell, mystery','2 -> mystery', '3 -> sci-fi', 'Child of Silver: Bruce Rich, mystery', 'Hurting Secrets: Dustin Bolt, action', 'Future of Dawn: Aiden Rose, sci-fi', 'Lions and Rats: Gabe Roads, history', '2 -> romance', 'Effect of the Void: Shay B, romance', 'Losing Dreams: Gail Starr, sci-fi', 'Name of Earth: Jo Bell, sci-fi', 'Pilots of Stone: Brook Jay, history'])

function solve(input) {
    let library = {};
 
    for (const line of input) {
        if (line.includes('->')) {
            let [id, genre] = line.split(' -> ');
 
            if (!library.hasOwnProperty(id)) {
                library[id] = { [genre]: [] };
            }
        } else {
            let [bookInfo, genre] = line.split(', ');
 
            for (const key in library) {
                if (library[key].hasOwnProperty(genre)) {
                    library[key][genre].push(bookInfo);
                    break;
                }
            }
        }
    }
 
    Object.keys(library).sort((a, b) => Object.entries(library[b])[0][1].length - Object.entries(library[a])[0][1].length)
        .forEach(id => {
            console.log(`${id} ${Object.keys(library[id])}: ${Object.values(library[id])[0].length}`);
            Object.values(library[id]).forEach(values => {
                values.sort((a, b) => a.localeCompare(b)).forEach(v => {
                    console.log(`--> ${v}`);
                });
            });
        });
}