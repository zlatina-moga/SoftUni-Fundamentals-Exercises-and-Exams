function solve(input){
    input.shift();
    let registrations = input;
    let successCount = 0;

    for (const registration of registrations){
        let pattern = /U\$(?<user>[A-Z][a-z]{2,})U\$P@\$(?<pass>[a-z]{5,}\d+)P@\$/g;
        let match = pattern.exec(registration);

        if (match){
            successCount++;
            console.log(`Registration was successful`)
            console.log(`Username: ${match.groups.user}, Password: ${match.groups.pass}`)
        } else {
            console.log(`Invalid username or password`)
        }
    }
    console.log(`Successful registrations: ${successCount}`)
}
solve(['3', 'U$MichaelU$P@$asdqwe123P@$', 'U$NameU$P@$PasswordP@$', 'U$UserU$P@ad2P@$'])