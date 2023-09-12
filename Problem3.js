//         // ---------------------------- Problem 3 ------------------------>


// // -----> First Input

// function isLGSeven(number){
//         if(number < 7){
//             result = number - 7;
//         }
//         else if (number >= 7){
//             result = number * 2;
//         }
//         else{
//             result = "Input should be a NUMBER";
//         }
//         return result
// }
// const firstNumber = isLGSeven(6);

// console.log(firstNumber)

// // -----> Second Input

// function isLGSeven(number){
//     if(number < 7){
//         result = number - 7;
//     }
//     else if (number >= 7){
//         result = number * 2;
//     }
//     else{
//         result = "Input should be a NUMBER";
//     }
//     return result
// }
// const secondNumber = isLGSeven(-15);

// console.log(secondNumber)

// -----> Third Input

function isLGSeven(number){
    if(number < 7){
        result = number - 7;
    }
    else if(typeof(number)=== 'string'){
        result = 'Input Should be a number';
    }
    else{
        result = number * 2;
    }
    return result;
}
const thirdNumber = isLGSeven(15);

console.log(thirdNumber)

