// Code your solutions in this file
let name = [];

function writeCards(name, suprise) {
    for (let i = 0; i < name.length; i++) {
        name[i] = `Thank you, ${name[i]}, for the wonderful ${suprise} gift!`;
    }
    return name;
}

writeCards(["Guadalupe", "Ollie", "Aki"], "surprise")

// let number = 0;

// function countDown(number){
//     while(number < 10 ){
//         console.log(number++);
//     }
// }


function countDown(number) {
    while (number >= 0) {
        console.log(number--);
        debugger;
    }
}
    countDown(4)

