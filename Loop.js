
//1.Write a code for returning the greeting message as per current time.


// function getGreetingMessage() {
//     const currentHour = new Date().getHours();
  
//     if (currentHour >= 5 && currentHour < 12) {
//       return "Good morning!";
//     } else if (currentHour >= 12 && currentHour < 18) {
//       return "Good afternoon!";
//     } else {
//       return "Good evening!";
//     }
//   }
  
//   const greetingMessage = getGreetingMessage();
//   console.log(greetingMessage);


//2.Write a code for returning the day name based on the digit. (like 1 for monday and so on.)

// var days=1;
// switch (days) {
//     case 1:
//       days = "Monday";
//       break;
//     case 2:
//       days = "Tuesday";
//       break;
//     case 3:
//       days = "Wednesday";
//       break;
//     case 4:
//       days = "Thursday";
//       break;
//     case 5:
//       days = "Friday";
//       break;
//     case 6:
//       days = "Saturday";
//       break;
//     case 7:
//       days = "Sunday";
//         break;
//     default:
//         "invalid Day";
//   }
// console.log(days)

//secon way

// function getDayName(dayNumber) {
//     const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
//     if (dayNumber >= 1 && dayNumber <= 7) {
//       return days[dayNumber - 1];
//     } else {
//       return 'Invalid day number';
//     }
//   }
  
//   const dayNumber = 2;
//   const dayName = getDayName(dayNumber);
//   console.log(dayName);



//3.Write a program that prints following pattern
 

// function printPattern(rows) {
    // for (let i = 1; i <= 5; i++) {
    //   let pattern = ''
    //   for (let j = 1; j <= 5; j++) {
    //     pattern += '*';
    //   }
    //   console.log(pattern);
    // }
  // }
//   const rows = 5;
//   printPattern(rows);

// *****
// *****
// *****
// *****
// *****



// for(let i=1;i<=4;i++){
//   let patern =" "
// for(let j=1;j<=5;j++){
//   patern +="*";
// }
//   console.log(patern)
// }

//4.Write a program that prints following pattern

// function printPattern(rows) {
    // for (let i = 1; i <= 6; i++) {
    //   let pattern = '';
    //   for (let j = 1; j <= i; j++) {
    //     pattern += '*';
    //   }
    //   console.log(pattern);
    //  }
//   } 
//   const rows = 5;
//   printPattern(rows);

  // *
  // **
  // ***
  // ****
  // *****


//5.Write a program that prints following pattern

// function printPattern(rows) {
    // for (let i = 3; i >= 1; i--) {
    //   let pattern = '';
    //   for (let j = 1; j <= i; j++) {
    //     pattern += '*';
    //   }
    //   console.log(pattern);
    // }
//   }
  
//   const rows = 4; 
//   printPattern(rows);

// ****
// ***
// **
// *





//6. Write a program for returning the number of days in the particular month. 
// For example, getNumberOfDays(1); returns the 31 (1 stands for january)

// var month=7;
// switch (month) {
//     case 1:
//         month = "jan";
//       break;
//     case 2:
//         month = "Feb";
//       break;
//     case 3:
//         month = "Mar";
//       break;
//     case 4:
//         month = "Apr";
//       break;
//     case 5:
//         month = "May";
//       break;
//     case 6:
//         month = "Jun";
//       break;
//     case 7:
//         month = "July";
//         break;
//     default:
//         "invalid month";
//   }
// console.log(month)





//7.Write a program that prints the 1 to 10.

// for(let i=1;i<=10;i++){
//     console.log(i)
// }

//8.Write a function that prints the odd number of given range
// For example, printOddNumbers(1,10); prints 1,3,5,7,9

// function printOddNumbers(start, end) {
//     for (let i = start; i <= end; i++) {
//       if (i % 2 !== 0){
//         console.log(i);
//       }
//     }
//   }
  
// printOddNumbers(1, 10);



// 9.Write a function that prints the even number of given range

// function printOddNumbers(start, end) {
//         for (let i = start; i <= end; i++) {
//           if (i % 2 === 0){
//             console.log(i);
//           }
//         }
//       }
      
// printOddNumbers(1, 10);



//10.Write a function that takes 3 arguments and returns the result based on the given operation. (operation will be sum, subtraction, multiplication, division, modulo)
	// For example: calculate(‘+’, 5, 6); // 11
  // calculate(‘-’, 10, 6); // 4


  // function calculate(operator, num1, num2) {
  //   let result;
  
  //   switch (operator) {
  //     case '+':
  //       result = num1 + num2;
  //       break;
  //     case '-':
  //       result = num1 - num2;
  //       break;
  //     case '*':
  //       result = num1 * num2;
  //       break;
  //     case '/':
  //       result = num1 / num2;
  //       break;
  //     case '%':
  //       result = num1 % num2;
  //       break;
  //     default:
  //       console.log('Invalid operator');
  //       return;
  //   }
  
  //   return result;
  // }
  
  // console.log(calculate('+', 5, 6));  
  // console.log(calculate('-', 10, 6));
  // console.log(calculate('*', 3, 4));  
  // console.log(calculate('/', 8, 2));   
  // console.log(calculate('%', 7, 3));   
  // console.log(calculate('^', 2, 3));  




// 11.Write a function that takes marks as argument and returns the grade according to marks.

  // function calculateGrade(marks) {
  //   let grade;
  
  //   if (marks >= 90) {
  //     grade = 'A+';
  //   } else if (marks >= 80) {
  //     grade = 'A';
  //   } else if (marks >= 70) {
  //     grade = 'B';
  //   } else if (marks >= 60) {
  //     grade = 'C';
  //   } else if (marks >= 50) {
  //     grade = 'D';
  //   } else {
  //     grade = 'F';
  //   }
  
  //   return grade;
  // }
  
  // console.log(calculateGrade(85));  //=> A
  // console.log(calculateGrade(72));  //=> B
  // console.log(calculateGrade(93));  //=> A+
  // console.log(calculateGrade(55));  //=> D
  // console.log(calculateGrade(40));  //=> F




// 12. Write a function that takes a currency_code and amount as an argument and 
// returns the amount of money in INR.


// function convertToINR(currency_code, amount) {
//   let exchange_rate;

//   switch (currency_code) {
//     case 'USD':
//       exchange_rate = 74.5;
//       break;
//     case 'EUR':
//       exchange_rate = 89.2;
//       break;
//     case 'GBP':
//       exchange_rate = 103.8;
//       break;
//     default:
//       return 'Invalid currency code';
//   }

//   const inr_amount = amount * exchange_rate;

//   return inr_amount;
// }


// console.log(convertToINR('USD', 100));  //=>  7450 (assuming exchange rate of 74.5)
// console.log(convertToINR('EUR', 50));   //=>  4460 (assuming exchange rate of 89.2)
// console.log(convertToINR('GBP', 75));   //=>  7785 (assuming exchange rate of 103.8)



//13. Write a function for reversing the string.


// function reverseString(str) {
//   return str.split('').reverse().join('');
// }

// console.log(reverseString('Hello'));        //=>"olleH"
// console.log(reverseString('JavaScript'));   //=>"tpircSavaJ"


//14.Write a function that takes an object and prints all keys and values in the console.

// function printObject(obj) {
//   Object.entries(obj).forEach(([key, value]) => {
//     console.log(`${key}: ${value}`);
//   });
// }

// const person = {
//   name: 'John Doe',
//   age: 30,
//   occupation: 'Software Engineer'
// };

// printObject(person);


//15.Write a function that returns boolean on condition if the string contains a number or not.
// For example: isStringContainsNum(“assad”); // false
// isStringContainsNum(“agfh1”); // true
// isStringContainsNum(“ag1sdf”); // true
// isStringContainsNum(“111”); // true


// function isStringContainsNum(str) {
//   for (let i = 0; i < str.length; i++) {
//     if (!isNaN(Number(str[i]))) {
//       return true;
//     }
//   }
//   return false;
// }


// console.log(isStringContainsNum("assad")); // false
// console.log(isStringContainsNum("agfh1")); // true
// console.log(isStringContainsNum("ag1sdf")); // true
// console.log(isStringContainsNum("111")); // true



//16.Write a function that prints messages based on condition if the string contains a number or not.
	// For example: For “1212” => string is number
  // For “sadfsd” => string not contains number
  // For “sad2q” => string contains number


// function printMessage(str) {
//   if (/[0-9]/.test(str)) {
//     console.log("String contains a number");
//   } else {
//     console.log("String does not contain a number");
//   }
// }


// printMessage("1212");    // String contains a number
// printMessage("sadfsd");  // String does not contain a number
// printMessage("sad2q");   // String contains a number



//17.Write a function that returns the position of the first occurrence of digit in string.


// function findDigitPosition(str) {
//   for (let i = 0; i < str.length; i++) {
//     if (/[0-9]/.test(str[i])) {
//       return i;
//     }
//   }
//   return -1; // Return -1 if no digit is found
// }

// // Example usage:
// console.log(findDigitPosition("abc123"));  // 3
// console.log(findDigitPosition("hello"));   // -1
// console.log(findDigitPosition("1a2b3c"));  // 0



//18.Write a function that returns the position of the first capital letter in string. (For this string only contains A-Z, a-z)

// function findFirstCapitalPosition(str) {
//   for (let i = 0; i < str.length; i++) {
//     if (/[A-Z]/.test(str[i])) {
//       return i;
//     }
//   }
//   return -1; // Return -1 if no capital letter is found
// }

// console.log(findFirstCapitalPosition("helloWorld"));  // 5
// console.log(findFirstCapitalPosition("javascript"));  // -1
// console.log(findFirstCapitalPosition("OpenAI"));     // 0



//19.Modify following code to work perfectly.
// function printOdd(start, end){
// 	for(let i = start; i< end; i++){
	
//   if(i%2 !==0){
//     console.log(i);
//   }
// }
// }
// printOdd(1,10)      // Prints: 1 3 5 7 9

//20.Modify following code to work perfectly.
//Code prints only odd number
//Code must be prints only 10 instance

// function printOdd(start, end) {
//   let count = 0;
  
//   for (let i = start; i <= end; i++) {
//     if (i % 2 !== 0) {
//       console.log(i);
//       count++;
      
//       if (count === 10) {
//         break;
//       }
//     }
//   }
// }

// printOdd(1, 100);








// const names = [
//     { first_name: "Asndnm", last_name: "L demo" },
//     { first_name: "Qpweui", last_name: "Alxezx" },
//     { first_name: "Pqwern", last_name: "Ruse" },
//     { first_name: "Wiruyn", last_name: "Ruby" },
//     { first_name: "Erpso", last_name: "Loal" },
//     { first_name: "Demors", last_name: "Poet" },
//     { first_name: "Aleos", last_name: "Lkeu" }
//   ];
  
//   const namesWithFullName = names.map(name => {
//     return { ...name, full_name: name.first_name + ' ' + name.last_name };
//   });
  
//   console.log(namesWithFullName);
    


//second way
// names.forEach((name) => {
//     name.full_name = name.first_name + " " + name.last_name;
//   });
  
//   console.log(names);






// const fruits3 = "Apple, Banana".split(",");
// console.log(fruits3);

// let dhru=fruits3.reverse()
// console.log(dhru)


  

  // function checkStringContainsNumber(string) {
  //   if (/\d/.test(string)) {
  //     console.log("String contains a number");
  //   } else {
  //     console.log("String does not contain a number");
  //   }
  // }


  









//14.Write a function that takes an object and prints all keys and values in the console.


// function printObject(obj) {
//   for (let key in obj) {
//     console.log(key + ': ' + obj[key]);
//   }
// }

// const person = {
//   name: 'John Doe',
//   age: 30,
//   occupation: 'Software Engineer'
// };

// printObject(person);









  
// function getNumberOfDays(month) {
//     const monthsWith31Days = [1, 3, 5, 7, 8, 10, 12];
//     const monthsWith30Days = [4, 6, 9, 11];
  
//     if (month === 2) {
//       return 28; // Assuming it's not a leap year
//     } else if (monthsWith31Days.includes(month)) {
//       return 31;
//     } else if (monthsWith30Days.includes(month)) {
//       return 30;
//     } else {
//       return -1; // Invalid month
//     }
//   }
  
//   const month = 7;
//   const numberOfDays = getNumberOfDays(month);
  
//   if (numberOfDays === -1) {
//     console.log('Invalid month');
//   } else {
//     console.log(`Number of days in month ${month}: ${numberOfDays}`);
//   }
  



// function assignObjects(target, source) {
//   for (let key in source) {
//     if (source.hasOwnProperty(key)) {
//       target[key] = source[key];
//     }
//   }
  
//   return target;
// }


// const target = { a: 1, b: 2 };
// const source = { b: 3, c: 4 };

// const result = assignObjects(target, source);
// console.log(result); // { a: 1, b: 3, c: 4 }



// var a=Math.max(4,5,6,7,7)
// console.log(a)



// for(let i=1;i<=6;i++){
//   if(i==3){continue}
//   console.log(i)
// }



// for(let i=1;i<=6;i++){
//   if(i==3){break}
//   console.log(i)
// }


// function assignObjects(target, source) {
//   for (let key in source) {
//     if (source.hasOwnProperty(key)) {
//       target[key] = source[key];
//     }
//   }
  
//   return target;
// }

// const target = { a: 1, b: 2 };
// const source = { b: 3, c: 4 };

// const result = assignObjects(target, source);
// console.log(result); // { a: 1, b: 3, c: 4 }



 


//   let obj1 = {
//     0: { a: 1 },
//     1: { b: 2 },
//     2: { c: 3 }
// }
// let a = Object.values(obj1);
// for(let value in a){
//     a[value].img = "some";
// }
// console.log(a);
// for (let i = 0; i < a.length; i++) {
//     a[i].img = "Something";
// }
// console.log(a);


//  const obj1 = { a: 12, b: 23 };
//   const obj2 = { a: 44, b: 45 };
//   const obj3 = Object.assign(obj1, obj2);
//   obj2.a = 22;
//   console.log(obj1);
//   console.log(obj2);
//   console.log(obj3);


// const obj1 = { a: 77, b: 67 };
// const obj2 = { a: 90, b: 34 };
// const obj3 = Object.assign({}, obj1, obj2);
// obj1.a = 22;
// console.log(obj1);
// console.log(obj2);
// console.log(obj3);  


// let arr1={a:15,b:20};
// let arr2=[...arr1[0]]

// console.log(arr2)

// const greet = () => {
//   console.log('Hello!');
  

// };
// greet()

// const add = (a, b) => {
//   return a + b;
// };
// console.log( add(9,7))


// const createPerson = (name, age) => ({ name, age });

// console.log(createPerson())


// (() => {
//   console.log("IIFE executed");
// })();


