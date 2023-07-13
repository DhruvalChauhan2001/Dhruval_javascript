// var a=(a,b)=>{
        //  console.log(a+b);
        //    return a-b;


        // }
        // console.log(a)
        // a(5,4)
        

        // function dhru(a,b){
        //     c=a+b
        //   return c;
        // }
        // var d= dhru(4,5);
        // console.log(d)

        // function dhru(){
        //     console.log("helloooooo")
        // }
        // var c=dhru()
        // dhru()
        // // console.log(c)

        // console.log("hello",5+3)
        // console.log("hello"+5+3)

        //Write the syntax for declaring a JavaScript function called sayHello that doesn't take any parameters and doesn't return any value.

        // function dhru(){
        //     console.log("hello")
        // }
        // dhru()

        //What is the syntax for declaring a JavaScript function called calculateSum that takes two parameters num1 and num2, and returns their sum? (write all four types of functions as we discussed in session)

        //with argument with return keyword
        // function sum(num1,num2){
        //     c=num1+num2
        //     return c;
        // }
        // console.log(sum(5,3))    => 8

        //argument without return

        // function sum(num1,num2){
        //     c=num1+num2
        //     console.log(c)          //=>7
        // }
        // console.log(sum(5,2))      //=> undefined

        // function dhru(){
        //     var a=7;
        //     var b=5;
        //     var c = a+b;
        //     return c;
        // }
        // var d =dhru()
        // console.log(d)

        //without argument with return
        
        // function dhru(){
        //     // var c=a+b;
        //     // return c;
        //     var c=5+7
        //     return c;
           

        // }
        // var d=dhru();
        // console.log(d)  //=>12

         //without argument without return

        //  function dhru(){
        //     var a=5;
        //     var b=4;
        //     var c=a+b
        //     // console.log(v)
        //  }
        //  dhru()

        // function add(a, b) {
        //     console.log(a + b);
        // }
        
        // add(3,4);
        // add(2,9);

    //Create a function called printArray that takes an array called arr as a parameter and prints the array. Write the syntax for this function.
    // let myArray = [
    //     function() {
    //       console.log("Function 1");
    //     },
    //     function() {
    //       console.log("Function 2");
    //     },
    //     function() {
    //       console.log("Function 3");
    //     }
    //   ];
    //     myArray[0](); // Output: Function 1
    //     myArray[1](); // Output: Function 2
    //     myArray[2](); // Output: Function 3



        // function printArray() {
        //     console.log(myArray);
        //   }
        
        // let myArray = [1, 2, 3, 4, 5];
        // printArray(); // Output: [1, 2, 3, 4, 5]

        //Write the syntax for declaring an anonymous JavaScript function and assigning it to a variable called multiply that takes two parameters a and b, and returns their multiplication.

        // const dhru =function(a,b){
        //   var c= a*b;
        //   return c;
        //     // return a*b
        // }
        // console.log(dhru(5,2))

        //What is the syntax for calling a function named myFunction that doesn't take any parameters?
        // function myFunction() {
        //     console.log("Hello, world!");
        //   }
          
        //   myFunction(); // Output: Hello, world!


        //Create a JavaScript arrow function called squareNumber that takes a parameter num and returns the square of that number. Write the syntax for this arrow function.

        // const squareNumber = (num) => {
        //     return num * num;
        //   };

        // console.log(squareNumber(4))

        //Write the syntax for declaring a JavaScript function called getFullName that takes two parameters firstName and lastName, and returns the full name as a string.

        // function dhru(fname,lname){
        //     console.log("hello",fname,"=>",lname,"","welcome")
        // }
        // console.log(dhru(dhruval,chauahan))
        // console.log(object)
        // dhru("dhru","chauh")
        // dhru("dhruval","chauahan")

        //What is the syntax for declaring a JavaScript function called calculateArea that takes two parameters length and width, and returns the area of a rectangle?


        // function calculateArea(length, width) {
        //     var area = length * width;
        //     return area;
        //   }

        // var rectangleArea = calculateArea(5, 8);
        // console.log(rectangleArea); // Output: 40

        //Write the syntax for declaring a JavaScript function called isEven that takes a single parameter num and returns true if the number is even, and false otherwise.
        // var greet;
        // function dhru(x){
        //     if (x % 2==0){
        //         console.log(x+" even")
        //     }
        //     else{
        //         console.log(x+" odd")
        //     }
        // }
        // dhru(6)
        // dhru(5)

        //Write a function that takes three parameters and returns the maximum number of three.(use ternary operator and if..else as well) (Also make all four types of function as we discussed in session) (total: 8 functions definition)


        // function dhru(a,b,c){
        //   var c=  (a >= b && a >= c)?"big":"litlle"
        //   console.log(c)
        // }
        // dhru(2,3,4)

        // function findMaxTernary(a, b, c) {
        //     console.log((a >= b && a >= c) ? a : (b >= a && b >= c) ? b : c);
        //     // return (a >= b && a >= c) ? a : (b >= a && b >= c) ? b : c;
           
        //   }

        //   findMaxTernary(4,7,1)
        //   findMaxTernary(20,5,80)


        // function findMaxIfElse(a, b, c) {
        //     if (a >= b && a >= c) {
        //       return a;
        //     } else if (b >= a && b >= c) {
        //       return b;
        //     } else {
        //       return c;
        //     }
        //   }

        //   console.log(findMaxIfElse(9,88,3));


        // Arrow function
        // const findMaxArrowFunc = (a, b, c) => {
        // return (a >= b && a >= c) ? a : (b >= a && b >= c) ? b : c;
        // };

        // var dhru=findMaxArrowFunc(5,60,7)
        // console.log(dhru)



        //Create a JavaScript function called calculatePrice that takes a two parameter price, discount and returns discounted price. 	(defaultDiscount = 10%)
        // Write the syntax for this arrow function.
        // Write the syntax for normal function.

        // const calculatePrice = (price, discount = 0.1) => {
        //     const discountedPrice = price - (price * discount);
        //     return discountedPrice;
        //   };
        
        // console.log(calculatePrice(20,2))
        // var dhru =calculatePrice(100,10)
        // console.log(dhru)

        // function calculatePrice(price, discount = 10) {
        //     return price - ((price * discount) / 100);
        // }
        // let ans1 = calculatePrice(100,50);
        // console.log(ans1);


        // const calculatePrice = (price, discount = 10) => {
        //     return price - ((price * discount) / 100);
        // }
        // let ans = calculatePrice(100,30);
        // console.log(ans);


        //Write the syntax for declaring a JavaScript function called isEven that takes a single parameter num and returns true if the number is even, and false otherwise.

        // function dhru(x){
        //         if (x % 2==0){
        //             console.log(x+" even")
        //         }
        //         else{
        //             console.log(x+" odd")
        //         }
        //     }

        // dhru(25)

        // What is the syntax for declaring a JavaScript function called calculateMultiply that takes two parameters num1 and num2, and returns their multiplication? (make sure that never give an error if i passed anything) (if not pass anything then return 1)
        // With normal function (write all four types of functions as we discussed in session)
        // With arrow function (write all four types of functions as we discussed in session)

        // function calculateMultiply(num1 , num2 ) {
        //     return num1 * num2+" "+ (num1 + num2);
        //     // console.log( num1 * num2+" "+ (num1 + num2))
            
        //   }
        // console.log(calculateMultiply(5,2))
        // // calculateMultiply(4,5)/


        // function calculateMultiply(num1 , num2 ) {
        //     console.log( num1 * num2+" "+ (num1 + num2))
        // }
        // calculateMultiply(4,5)

        // function calculateMultiply(num1 , num2 ) {
        //     return num1 * num2+" "+ (num1 + num2);
        //     }
        // // calculateMultiply()
        // console.log(calculateMultiply())

        // function calculateMultiply(num1 , num2 ) {
        //     console.log( num1 * num2+" "+ (num1 + num2))
        //     }
        // console.log(calculateMultiply())
        // calculateMultiply()   

        // const dhru =(num1 , num2 )=>{
        //         return num1 * num2+" "+ (num1 + num2);
        // }
        // console.log(dhru(4,5))


        // const dhru =(num1 , num2 )=>{
        //         console.log( num1 * num2+" "+ (num1 + num2))
        //     }
        // dhru(3,4)

        // const dhru =(num1 , num2 )=>{
        //     return num1 * num2+" "+ (num1 + num2);
        //         }
        //   console.log(dhru())

        // const dhru =(num1 , num2 )=>{
        //             console.log( num1 * num2+" "+ (num1 + num2))
        //         }
        // console.log(dhru())


        //Write the syntax for declaring a JavaScript function called greet that takes parameters and doesn't return any value. (if not passed an argument then prints ‘Anonymous’)


        // function greet(name) {
        //     if (name) {
        //       console.log(`Hello, ${name}!`);
        //     } else {
        //       console.log('Hello, Anonymous!');
        //     }
        //   }
        // greet("jai")



        //Write the syntax for declaring a JavaScript function called exponent that takes parameters and returns an exponent of passed parameters. (if not passed an argument then returns power 2)

        // function exponent(base , power ) {
        //     console.log( base ** power);
        //   }
        // exponent(4,2)
        // exponent(2,2)
        // exponent(0,0)

       
        
        