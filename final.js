/*------------ 

        -----------------Assignment 4

-----------*/ 

    // ---------------------------- Problem 1 ------------------------>


        // -----> First Input

        /* Mind Game Function 1 */ 
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
        let firstNumber = mindGame(5);
        


        // -----> Second Input
        
        /* Mind Game Function 2 */
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
        let secondNumber = mindGame(50);
        


        // -----> Third Input
        
        /* Mind Game Function 3 */
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
        let thirdNumber = mindGame(33);
            

        // ---------------------------- Problem 2 ------------------------>

        // -----> First Input

        /* Finding Even or Odd Function 1 */
        function evenOdd(string){

        if (string.length %2 === 0){
            result ="even"    
        }
        else if(string.length %2 === 1){
           result ="odd";
        }
        else{       
            result = "Input should be STRING";
        }

        return result;
        }
        const firstString = evenOdd('Phero');
        


        // -----> Second Input

        /* Finding Even or Odd Function 2 */
        function evenOdd(string){

        if (string.length %2 === 0){
            result ="even"    
        }
        else if(string.length %2 === 1){
           result ="odd";
        }
        else{       
            result = "Input should be STRING";
        }

        return result;
        }
        const secondString = evenOdd('Batch7');
        


        // -----> Third Input

        /* Finding Even or Odd Function 3 */
        function evenOdd(string){

        if (string.length %2 === 0){
            result ="even"    
        }
        else if(string.length %2 === 1){
           result ="odd";
        }
        else{       
            result = "Input should be STRING";
        }

        return result;
        }
        const thirdString = evenOdd('chatgpt');
        


        
        // ---------------------------- Problem 3 ------------------------>


        // -----> First Input

        /*Is Less or Greater Than Seven Function 1 */ 
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
        const firstLGSevenNumber = isLGSeven(6);


        // -----> Second Input

        /*Is Less or Greater Than Seven Function 2 */
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
        const secondLGSevenNumber = isLGSeven(-15);

        

        // -----> Third Input

        /*Is Less or Greater Than Seven Function 3 */
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
        const thirdLGSevenNumber = isLGSeven(15);

        


    // ---------------------------- Problem 4 ------------------------>

        // -----> First Input

        /* Finding Bad Data Function 1 */ 
        function findingBadData(Numbers){
            let count = 0;
        
            for(let i= 0; i < numbers.length; i++){
                const element = numbers[i];
                
                if(element < 0){
                   count++;
                }
                else{
                    count === "Input should be a NUMBER";
                }
            }
            return count;
        }
        
        let firstBadData = findingBadData([1, 2, 5]);
        

        // -----> Second Input

        /* Finding Bad Data Function 2 */
        function findingBadData(numbers){
            let count = 0;
        
            for(let i= 0; i < numbers.length; i++){
                const element = secondNumbers[i];
                
                if(element < 0){
                   count++;
                }
                else{
                    count === "Input should be a NUMBER";
                }
            }
            return count;
        }
        
        let secondBadData = findingBadData([2,-5,-7,-13]);
        

        // -----> Third Input

        /* Finding Bad Data Function 3 */
        function findingBadData(numbers){
            let count = 0;
        
            for(let i= 0; i < numbers.length; i++){
                const element = numbers[i];
                
                if(element < 0){
                   count++;
                }
                else{
                    count === "Input should be a NUMBER";
                }
            }
            
            return count;
        }
        
        let thirdBadData = findingBadData([-4, -9, -5, -33, -55]);



    // ---------------------------- Problem 5 ------------------------>


        // -----> First Input

        /* Convert Gems into Diamond 1 */
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

        // -----> Second Input

        /* Convert Gems into Diamond 2 */
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
        

        // -----> Third Input

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

