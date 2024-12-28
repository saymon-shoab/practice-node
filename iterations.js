// for loop...

for (let index = 0; index < 10; index++) {
    // {} is curly braces is a block scop..
    const element = index;
    // console.log(element);

    if (element==5) {
        // console.log("5 is the best number")
    }
    // for (let j = 0; j < 5; j++) {
    //     const element = j
    //     console.log(`ineer loop prient no: ${element}`)
    // }
}


// break and continue...
// 1. break
// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`5 i dicacted`)
//         break
//     }
//     console.log(`value of i is ${index}`);
    
// }

// 2. continue
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`5 i dicacted`)
        continue
    }
    console.log(`value of i is ${index}`);
    
}