    // // First Problem ------------>

    //     // -----> First Input
        
    //     function mindGame(number) {
    //         const sum1 = number * 3;
    //         const sum2 = sum1 + 10;
    //         const sum3 = sum2 / 2;
    //         const sum4 = sum3 - 5;
    //         result = sum4;

    //         if(number.isNumber = (number)){
    //             result = sum4;
    //         }
    //         else{
    //             result = 'Input should be a Number.'
    //         }
    //         return sum4;
    //     }
    //     let firstNumber = mindGame('a');
    //     console.log(result);




    //     // -----> Second Input
        
    //     function mindGame(number) {
    //         const sum1 = number * 3;
    //         const sum2 = sum1 + 10;
    //         const sum3 = sum2 / 2;
    //         const sum4 = sum3 - 5;
    //         result = sum4;

    //         return sum4;
    //     }
    //     let secondNumber = mindGame(50);
    //     console.log(result);




        // -----> First Input
        
        function mindGame(number) {
            const sum1 = number * 3;
            const sum2 = sum1 + 10;
            const sum3 = sum2 / 2;
            const sum4 = sum3 - 5;
            result = sum4;

            if(typeof(number)=== 'string'){
                result = 'Input Should be a number';
            }
            else{
                result = sum4
            }
            return result;
        }
        let thirdNumber = mindGame("33");
        console.log(result);