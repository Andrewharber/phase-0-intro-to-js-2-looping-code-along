const name = ["Guadalupe", "Oli", "Aki" ];
let thankYou = []

function writeCards(name, surprise) {
    let thankYou = []
    for (let i = 0; i < name.length; i++ ) {
    
    thankYou.push(`Thank you, ${name[i]}, for the wonderful ${surprise} gift!`);
    debugger;
    }
    return thankYou;
}
writeCards(["Guadalupe", "Oli", "Aki"], "surprise");


function countDown(integer) {
    let i = 15;
    while (integer >= 0) {
      console.log(integer--);
}

    return integer;
};