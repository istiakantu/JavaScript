// // --------> problem 4

// function findingBadData(Numbers){
//     let count = 0;

//     for(let i= 0; i < numbers.length; i++){
//         const element = numbers[i];
        
//         if(element < 0){
//            count++;
//         }
//         else{
//             count === "Input should be a NUMBER";
//         }
//     }
//     return count;
// }

// let firstBadData = findingBadData([1, 2, 5]);
// console.log(firstBadData);


// // // Second Input Numbers Function ------->

// function findingBadData(numbers){
//     let count = 0;

//     for(let i= 0; i < numbers.length; i++){
//         const element = secondNumbers[i];
        
//         if(element < 0){
//            count++;
//         }
//         else{
//             count === "Input should be a NUMBER";
//         }
//     }
//     return count;
// }

// let secondBadData = findingBadData([2,-5,-7,-13]);
// console.log(secondBadData);

// // // Third Input Numbers Function ------->

// // function findingBadData(thirdNumbers){
// //     let count = 0;

// //     for(let i= 0; i< firstNumbers.length; i++){
// //         const element = firstNumbers[i];
        
// //         if(element < 0){
// //             // count++
// //         }
// //         return count
// //     }
// // }

// // const result2 = findingBadData([-4, -9, -5, -33, -55]);
// // console.log(result2)


function findingBadData(numbers){
    let count = 0;

    for(let i= 0; i < numbers.length; i++){
        const element = numbers[i];
        
        if(typeof(numbers)=== 'string'){
            result = 'Input Should be a number';
        }
        else if(element < 0){
            count++;
         }
    }
    
    return count;
}

let thirdBadData = findingBadData([-4, -9, -5, 'a', -55]);
console.log(thirdBadData);