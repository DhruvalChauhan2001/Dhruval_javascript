//1.
// const names  = [
//     {first_name: "Handnm", last_name: "L demo"},
//     {first_name: "Q Wei", last_name: "Alxezx"},
//     {first_name: "Pqwern", last_name: "Ruse"},
//     {first_name: "Wiruyn", last_name: "Ruby"},
//     {first_name: "Erpso", last_name: "Loal"},
//     {first_name: "Demors", last_name: "Poet"},
//     {first_name: "Aleos", last_name: "Lkeu"},
//     ]
//     // Write a code that adds new key in each object named 
//     // full_name: first_name + last_name

// const dhruval =names.map((value)=> value.first_name +" :>"+ value.last_name)
// console.log(dhruval)
    
//2.
// const users  = [
//     {first_name: "Handnm", last_name: "L demo", age: 17},
//     {first_name: "Q Wei", last_name: "Alxezx", age: 30},
//     {first_name: "Pdeq Twern", last_name: "Ruse", age: 22},
//     {first_name: "Widfruyn", last_name: "Ruby", age: 11},
//     {first_name: "Erdfg Pso", last_name: "Loal", age: 34},
//     {first_name: "Dedfgmors", last_name: "Poet", age: 60},
//     {first_name: "Ale4tos", last_name: "Lkeu", age: 16},
//    ]
//    Write a code that adds new key in each object named : isMature
   
// const usersWithIsMature = users.map((value) => ({
//   ...value,
//   isMature: value.age >= 18,
// }));

// console.log(usersWithIsMature);

//3
// let arr = [1,2,3,5]
// console.log(arr[-1]); //?
// undefined

//4
// const nestedArray = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ];
//   => print all items of nested array

// const dhruval = nestedArray.map((value)=>  [...value])
// console.log(dhruval)

// nestedArray.forEach((innerArray) => {
//     innerArray.forEach((item) => {
//       console.log(item);
//     });
//   });
  

//5.
// const nestedObject = {
//     name: "Vishal Kukreja",
//     age: 32,
//     address: {
//       street: "123 Mumbai fashion St",
//       city: "Midtown",
//       state: "MH",
//     },
//     hobbies: ["reading", "drawing", "gardening"],
//   };


//   const { name, age, address, hobbies } = nestedObject;
//   const allItems = [name, age, address.street, address.city, address.state, ...hobbies];
// //   console.log(allItems.join("\n"));
// console.log(allItems.join("\n"))

//6.
// Write a program to check if an array contains any number (strictly) or not.
// Input:  [1,2,3] => true
// [“1”, “a”, “h”] => false
// [“a”, 3, “gh”] => true
// [“a”, ‘3df’, “gh”] => false

// arr=["1","a","h"]
// arr=["a",3,"gh"]

// const dhru = arr.map((value)=>typeof(value)==="number")
// console.log(dhru)
//
// function containsNumber(array) {
//     for (let i = 0; i < array.length; i++) {
//       if (typeof array[i] === "number") {
//         return true;
//       }
//     }
//     return false;
//   }

 //7
//  const numbers = [1, 2, 3, 4];
// // => convert all number to string in given array
// const dhru = numbers.map((value)=>value.toString())
// console.log(dhru)


//8
// const numbers = [1, 2, 3, 4];
// const doubled = numbers.map((num, index, array) => {
//   array.push(num * 2);
//   return num * 2;
// });
// console.log(numbers, doubled);


//10
// Get name initials
// input = "George Raymond Richard Martin"; Output: “GRRM”
// input = “george raymond Richard Martin”; Output: “ GRRM”

// str="George Raymond Richard Martin"; 

// function  getNameInitials(input){
//     const word=input.split(" ");
//     const intitle =word.map((value)=>value.charAt(0).toUpperCase());
//     return intitle.join("");
    
// }
// const input1 = "George Raymond Richard Martin";
// const initials1 = getNameInitials(input1);
// console.log(initials1); // Output: "GRRM"

//11.
// Get output like example
// input = "Every developer likes to mix kubernetes and javascript";
// output = "E3y d7r l3s to mix k8s and j8t"

// function shortenWords(sentence) {
//         const words = sentence.split(" ");
//         const shortenedWords = [];
      
//         for (let i = 0; i < words.length; i++) {
//           const word = words[i];
//           const length = word.length;
      
//           if (length > 2) {
//             const shortenedWord = `${word.charAt(0)}${length - 2}${word.charAt(length - 1)}`;
//             shortenedWords.push(shortenedWord);
//           } else {
//             shortenedWords.push(word);
//           }
//         }
      
//         return shortenedWords.join(" ");
//       }
      
//       const input = "Every developer likes to mix kubernetes and javascript";
//       const output = shortenWords(input);
//       console.log(output); // Output: "E3y d7r l3s to mix k8s and j8t"
//

//15.
// const products = [
//     { name: "Product 1", price: 20, category: "Electronics" },
//     { name: "Product 2", price: 30, category: "Clothes" },
//     { name: "Product 3", price: 40, category: "Electronics" },
//     { name: "Product 4", price: 50, category: "Clothes" },
//     { name: "Product 5", price: 60, category: "Clothes" },
//     { name: "Product 6", price: 70, category: "Electronics" },
//     { name: "Product 7", price: 80, category: "Clothes" },
//     { name: "Product 8", price: 90, category: "Electronics" },
//   ];
  

// function makeNewObject(arrayName) {
//     let newObject = {};
//     let Clothes = arrayName.filter(value => value.category == "Clothes");
//     let Electronics = arrayName.filter(value => value.category == "Electronics");
//     let a = Clothes.length;
//     let b = Electronics.length;
//     newObject.Clothes = a;
//     newObject.Electronics = b;
//     return newObject;
// }
// let newObj = makeNewObject(products);
// console.log(newObj)

//   function countProductsByCategory(products) {
//     const categoryCounts = {};
  
//     for (let i = 0; i < products.length; i++) {
//       const category = products[i].category;
  
//       if (categoryCounts.hasOwnProperty(category)) {
//         categoryCounts[category]++;
//       } else {
//         categoryCounts[category] = 1;
//       }
//     }
  
//     return categoryCounts;
//   }
  
//   const output = countProductsByCategory(products);
//   console.log(output);


//13
// const employees = [
//         { name: "John", salary: 50000, department: "IT" },
//         { name: "Jane", salary: 60000, department: "HR" },
//         { name: "Bob", salary: 55000, department: "IT" },
//         { name: "Sophie", salary: 75000, department: "HR" },
//         { name: "Mike", salary: 65000, department: "IT" },
//         { name: "Emily", salary: 80000, department: "HR" },
//         { name: "David", salary: 70000, department: "IT" },
//       ];
      
//     //   Q1: Calculate the average salary of each department
    //   const departmentAverages = employees.reduce((averages, employee) => {
    //     if (!averages[employee.department]) {
    //       averages[employee.department] = [];
    //     }
    //     averages[employee.department].push(employee.salary);
    //     return averages;
    //   }, {});
      
    //   for (const department in departmentAverages) {
    //     const salaries = departmentAverages[department];
    //     const total = salaries.reduce((sum, salary) => sum + salary, 0);
    //     departmentAverages[department] = total / salaries.length;
    //   }
      
    //   console.log(departmentAverages);
    //
    //

    // function calculateAverageSalaryByDepartment(employees) {
    //     const departmentSalaries = {};
      
    //     employees.forEach((employee) => {
    //       const { salary, department } = employee;
    //       if (departmentSalaries.hasOwnProperty(department)) {
    //         departmentSalaries[department].push(salary);
    //       } else {
    //         departmentSalaries[department] = [salary];
    //       }
    //     });
      
    //     const averageSalaries = {};
      
    //     for (const department in departmentSalaries) {
    //       const salaries = departmentSalaries[department];
    //       const sum = salaries.map(Number).reduce((total, salary) => total + salary);
    //       const average = sum / salaries.length;
    //       averageSalaries[department] = average;
    //     }
      
    //     return averageSalaries;
    //   }

    // const averageSalaries = calculateAverageSalaryByDepartment(employees);
    // console.log(averageSalaries);

    //2
    // function groupSalariesByDepartment(employees) {
    //     const groupedSalaries = {};
      
    //     employees.forEach((employee) => {
    //       const { salary, department } = employee;
      
    //       if (groupedSalaries.hasOwnProperty(department)) {
    //         groupedSalaries[department].push(salary);
    //       } else {
    //         groupedSalaries[department] = [salary];
    //       }
    //     });
      
    //     return groupedSalaries;
    //   }

    // const groupedSalaries = groupSalariesByDepartment(employees);
    // console.log(groupedSalaries);


    //14.
    // const arr= ["Jeel", "Prakhar" , "Bhakti", "Vansh", "Meghna", "Bhaumik", "Pujan", "Rudra", "Sachin" , "Dhruval"];

    // function groupNamesByFirstLetter(names) {
    //     const groupedNames = {};
      
    //     names.map((name) => {
    //       const firstLetter = name[0].toUpperCase();
      
    //       if (groupedNames.hasOwnProperty(firstLetter)) {
    //         groupedNames[firstLetter].push(name);
    //       } else {
    //         groupedNames[firstLetter] = [name];
    //       }
    //     });
      
    //     return groupedNames;
    //   }
      
    //   const groupedNames = groupNamesByFirstLetter(arr);
    //   console.log(groupedNames);
    
    //   {
    //     J: [ 'Jeel' ],
    //     P: [ 'Prakhar', 'Pujan' ],
    //     B: [ 'Bhakti', 'Bhaumik' ],
    //     V: [ 'Vansh' ],
    //     M: [ 'Meghna' ],
    //     R: [ 'Rudra' ],
    //     S: [ 'Sachin' ],
    //     D: [ 'Dhruval' ]
    //   }

    //15.
    // function flatWithDepth(array, depth = 1) {
    //     if (depth < 1) {
    //       return Array.isArray(array) ? array.slice() : [array];
    //     }
      
    //     return array.reduce((result, item) => {
    //       if (Array.isArray(item)) {
    //         result.push(...flatWithDepth(item, depth - 1));
    //       } else {
    //         result.push(item);
    //       }
    //       return result;
    //     }, []);
    //   }
      
    // const nestedArray = [1, [2, [3, 4], 5], 6];

    // const flattenedArrayWithDepth = flatWithDepth(nestedArray, 2);
    // console.log(flattenedArrayWithDepth); // Output: [1, 2, 3, 4, 5, 6]

    //16.
    // Make filter function manually
    // function dhruval(array, callback) {
    //     const filteredArray = [];
    //     for (let i = 0; i < array.length; i++) {
    //       if (callback(array[i], i, array)) {
    //         filteredArray.push(array[i]);
    //       }
    //     }
    //     return filteredArray;
    //   }
    // const numbers = [1, 2, 3, 4, 5];

    // const evenNumbers = dhruval(numbers, (num) => num % 2 === 0);
    // console.log(evenNumbers); // Output: [2, 4]

    // 17
    // Make map function manually
    // function dhruval(array, callback) {
    //     const mappedArray = [];
    //     for (let i = 0; i < array.length; i++) {
    //       mappedArray.push(callback(array[i], i, array));
    //     }
    //     return mappedArray;
    //   }
    // const numbers = [1, 2, 3, 4, 5];

    // const doubledNumbers = dhruval(numbers, (num) => num * 2);
    // console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

    //18
   
    //(2)
    //   const output = {};
    //   input.forEach((item) => {
    //     const firstLetter = item.name[0];
    //     if (!output[firstLetter]) {
    //       output[firstLetter] = [];
    //     }
    //     output[firstLetter].push(item);
    //   });
      
    //   console.log(output);

    //(3)
    //    const output = {};
    //   input.forEach((item) => {
    //     const firstLetter = item.department[0];
    //     if (!output[firstLetter]) {
    //       output[firstLetter] = [];
    //     }
    //     output[firstLetter].push(item);
    //   });
      
    //   console.log(output);

    //(1)
    
// const output = {};
// for (const obj of input) {
//   const { name, ...rest } = obj;
//   output[name] = rest;
// }

// console.log(output);


//19.
// What is the output of the following code?
	// let arr1 = [{a: 34}, {a: 45}, {a:12}, {a:5}, {a:78}];
	// let arr2 = arr1.map(item => item);
	// arr2[3].b = 45;
    // console.log(arr1);  // => 
	// console.log(arr2);  // =>


//20
// What is the output of the following code?
    // let arr1 = [{a: 34}, {a: 45}, {a:12}, {a:5}, {a:78}];
    // 	let arr2 = arr1.map(item => item.a * 2);
    //     console.log(arr1);  // => 
    // 	console.log(arr2);  // =>

//21
// What is the output of the following code?
// let arr = [1,2,3,4,5];
// let arr2 = arr.reduce((a, c) => a + c).map(item => item);
// console.log(arr2); // =>
// console.log(arr)


//22
// What is the output of the following code?
// const example = ({ a, b, c }) => {
// console.log(a, b, c);  
// };
// example(0, 1, 2);


//
// const object ={js:"java script",app:"c++",rb:"ruby",swift:"swift apple"}
// const object=[10,20,30,40,50]
// 
// for (const key in object) {
//         // console.log(key)
//         // console.log(object[key])
//        console.log(`${key} is For:= ${object[key]}`)
//     }

// for (const iterator of object) {
//     console.log(iterator)
// }


// const numbers = [2, 4, 6];

// const sum = numbers.reduce(function summarize(sum, number, index) {
//   console.log(index); // logs 1, 2
// console.log(number)
//   return sum + number;
// });

// console.log(sum)


// const arr=[1,2,3,4,5]
//     const arr2=arr.reduce((a,b)=>a+b)
//     console.log(arr2)

// const arr=["apple","bannna","dhruval","hardik12"]
// const result = arr.reduce((longest, current) => (current.length > longest.length) ? current:longest, "");
// console.log(result);


// const longestElement = arr.reduce((longest, current) => {
//     if (current.length > longest.length) { 
//       return current;
//     } else {
//       return longest;
//     }
//   }, "");
  
//   console.log(longestElement);


// const obj={a:20,b:30,c:60,d:40};
// const obj = { a: 20, b: 30, c: 60, d: 40 };

// const total = Object.values(obj).reduce((accumulator, currentValue) => accumulator + currentValue);
// console.log(total);
// const result = obj.reduce((longest, current) => (current.obj + longest.obj) ? current:longest, "");
// for (const i in obj) {
//     console.log(obj[i])
//     // console.log(i)
// }

// console.log(result)



// const obj = {
//     foo: {
//       bar: {
//         baz: () => console.log('Hello')
//       }
//     }
//   };
  
//   obj?.foo?.bar?.baz?.(); // Logs 'Hello'



// const user ={}
// user.id="123"
// user.mailid="123@dhru"
// user.login=false

// console.log(user)

// const user={
//     email:"dhruval@123",
//     fullname:{
//         userfillname:{
//             fname:"dhruval",
//             lname:"chauhan",
//         }
//     }
// }

// console.log(user.fullname?.userfillname?.fname)


// obj1={a:20,b:60,c:40}
// obj2={a:30,d:50,c:80,f:100,e:90}

// obj3=Object.assign(obj1,obj2)
// // obj3={...obj1,...obj2}
// console.log(obj3)
// const obj4=Object.values(obj3).reduce((a,b)=>a+b)
// console.log(obj4)


// const arr=[1,3,4,10,100,16]
// const arr2=short(arr)
// console.log(arr2)


//23
// Find the Sum of Squares 
// let arr = [1,2,3,4,5] //=> ans : 55

// const arr2=arr.reduce((accu,value)=>accu+(value*value))
// console.log(arr2)

// .reduce((a,b)=>a*b)
// console.log(arr2)
// let arr = [1, 2, 3, 4, 5];

// let sumOfSquares = arr.reduce((sum, num) => {
//   return sum + (num * num);
// }, 0);

// console.log(sumOfSquares); // Output: 55


//24
// const students = [
//     { name: 'Alice', age: 20, grade: 'A' },
//     { name: 'Bob', age: 18, grade: 'B' },
//     { name: 'Charlie', age: 19, grade: 'A' },
//     { name: 'David', age: 20, grade: 'C' },
//   ];
    //   => sort by age
    //   => sort by grade
    //   => sort by name
    //   => average of ages
    //   => sum of ages

//(1)
// const obj1=students.sort((a,b)=>a.age-b.age)
// console.log(obj1)

//(2)
// const obj1=students.grade.sort()
// console.log(obj1)
// const arr=students.sort((a, b) => {
//     const nameA = a.grade.toUpperCase(); // ignore upper and lowercase
//     const nameB = b.grade.toUpperCase(); // ignore upper and lowercase
//     if (nameA < nameB) {
//       return -1;
//     }
//     if (nameA > nameB) {
//       return 1;
//     }
  
//     // names must be equal
//     return 0;
//   });
//   console.log(arr)

//(2)second way
// const arr=students.sort((a,b)=>(a.grade<b.grade)?-1:1)
// console.log(arr)

//(3)
// const arr=students.sort((a,b)=>(a.name<b.name)?-1:1)
// console.log(arr)

//(4)
// const totalAges = students.reduce((sum, student) => sum + student.age, 0);
// const averageAge = totalAges / students.length;

// console.log(averageAge); // Output: 19.25

//(5)
// const arr=students.map((val)=>val.age).reduce((accu,val)=>accu+val)
// console.log(arr)


//25
// const nestedArray = [[1, 2], [3, 4], [5, 6]];
// => flat this array using reduce (NOTE: array will be only depth 1)

// const arr=nestedArray.flat().reduce((a,b)=>a+b)
// console.log(arr)

//26
// Create an array of squares of even numbers from a given array.
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// const arr=numbers.filter((val)=>val%2==0).map((val)=>val*val)
// console.log(arr)

//27
// Filter out duplicate values from an array.
// const numbers = [1, 2, 2, 3, 4, 4, 5];

// const uniqueNumbers = numbers.filter((value, index, array) => {
//   return array.indexOf(value) === index;
// });

// console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5]

//28
// Find the first string that contains the letter 'a' in an array.
// const words = ['apple', 'banana', 'orange',"appy"];

// const wordWithA = words.find((word) => word.includes('a'));

// console.log(wordWithA); // Output: 'apple'

//29
// Find the index of the first odd number in an array.
// const numbers = [2, 4, 6, 8, 20 , 9, 10];

// const oddIndex = numbers.findIndex((number) => number % 2 !== 0);
// console.log(oddIndex); // Output: 5

//30
// Write a function that returns the factorial of given number

// function factorial(n) {
//     if (n === 0) {
//       return 1;
//     }
//     return n * factorial(n - 1);
//   }
// //   console.log(factorial(3))
// const number = 5;
// const result = factorial(number);
// console.log(`The factorial of ${number} is: ${result}`);
//31
// Find the index of the first person whose name starts with 'A' and age is less than 20.
// const people = [
//   { name: 'Bob', age: 20 },
//   { name: 'Charlie', age: 19 },
//   { name: 'David', age: 21 },
//   { name: 'Alice', age: 18 }
// ];
// const index = people.findIndex(person => person.name.startsWith('A') && person.age < 20);

// console.log(index);










  
