// // Problem 5

// // function gemsToDiamond(firstFriendGems, secondFriendGems, thirdFriendGems){
// //     const firstFriendGemsPower = 21;
// //     const secondFriendGemsPower = 32;
// //     const thirdFriendGemsPower = 43;

// //     const  firstFriendDiamond = firstFriendGems * firstFriendGemsPower;
// //     const  secondFriendDiamond = secondFriendGems * secondFriendGemsPower;
// //     const  thirdFriendDiamond = thirdFriendGems * thirdFriendGemsPower;

// //     const totalDiamond = firstFriendDiamond + secondFriendDiamond + thirdFriendDiamond;

// //     return totalDiamond;
   
// // }


// // console.log(gemsToDiamond(1, 1, 1));





// /* Convert Gems into Diamond 1 */ 
// function gemsToDiamond(firstFriendGems, secondFriendGems, thirdFriendGems){
//     const firstFriendGemsPower = 21;
//     const secondFriendGemsPower = 32;
//     const thirdFriendGemsPower = 43;

//     const  firstFriendDiamond = firstFriendGems * firstFriendGemsPower;
//     const  secondFriendDiamond = secondFriendGems * secondFriendGemsPower;
//     const  thirdFriendDiamond = thirdFriendGems * thirdFriendGemsPower;

//     const totalDiamond = firstFriendDiamond + secondFriendDiamond + thirdFriendDiamond;

//     if(totalDiamond > 2000){
//         result = totalDiamond - 2000;
//     }
//     else if(totalDiamond <= 2000){
//         result = totalDiamond;
//     }
//     else {
//         result = "Input should be a NUMBER";
//     }

//     return result;
   
// }


// console.log(gemsToDiamond(1, 1, 1));


// /* Convert Gems into Diamond 2 */ 
// function gemsToDiamond(firstFriendGems, secondFriendGems, thirdFriendGems){
//     const firstFriendGemsPower = 21;
//     const secondFriendGemsPower = 32;
//     const thirdFriendGemsPower = 43;

//     const  firstFriendDiamond = firstFriendGems * firstFriendGemsPower;
//     const  secondFriendDiamond = secondFriendGems * secondFriendGemsPower;
//     const  thirdFriendDiamond = thirdFriendGems * thirdFriendGemsPower;

//     const totalDiamond = firstFriendDiamond + secondFriendDiamond + thirdFriendDiamond;

//     if(totalDiamond > 2000){
//         result = totalDiamond - 2000;
//     }
//     else if(totalDiamond <= 2000){
//         result = totalDiamond;
//     }
//     else {
//         result = "Input should be a NUMBER";
//     }

//     return result;
   
// }


// console.log(gemsToDiamond(20, 200, 50));


/* Convert Gems into Diamond 3 */ 
function gemsToDiamond(firstFriendGems, secondFriendGems, thirdFriendGems){
    const firstFriendGemsPower = 21;
    const secondFriendGemsPower = 32;
    const thirdFriendGemsPower = 43;

    const  firstFriendDiamond = firstFriendGems * firstFriendGemsPower;
    const  secondFriendDiamond = secondFriendGems * secondFriendGemsPower;
    const  thirdFriendDiamond = thirdFriendGems * thirdFriendGemsPower;

    const totalDiamond = firstFriendDiamond + secondFriendDiamond + thirdFriendDiamond;

    if(totalDiamond > 2000){
        result = totalDiamond - 2000;
    }
    else if(totalDiamond <= 2000){
        result = totalDiamond;
    }
    else {
        result = "Input should be a NUMBER";
    }

    return result;
   
}


console.log(gemsToDiamond('a', 5, 1));