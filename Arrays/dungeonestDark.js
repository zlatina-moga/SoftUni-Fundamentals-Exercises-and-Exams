function solve(input = []) {
    let rooms = input.shift().split("|");
    let coins = 0;
    let bestRoom = 0;
    let health = 100;
   
    for (let i = 0; i < rooms.length; i++) {
      let tokens = rooms[i].split(" ");
      let encounter = tokens[0];
      let value = +tokens[1];
   
      switch (encounter) {
        case "chest":
          coins += value;
          console.log(`You found ${value} coins.`);
          bestRoom++;
          break;
   
        case "potion":
          if (health + value > 100) {
            console.log(`You healed for ${100 - health} hp.`);
            health = 100;
          } else {
            console.log(`You healed for ${value} hp.`);
            health += value;
          }
          console.log(`Current health: ${health} hp.`);
          bestRoom++;
          break;
   
        default:
          bestRoom++;
          health -= value;
          if (health > 0) {
            console.log(`You slayed ${encounter}.`);
          } else {
            console.log(`You died! Killed by ${encounter}.`);
            console.log(`Best room: ${bestRoom}`);
            return;
          }
          break;
      }
    }
    console.log(`You've made it!`);
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);
  }