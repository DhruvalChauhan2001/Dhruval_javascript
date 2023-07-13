

// 20:
// let arr = [1,2,3,4];
// let newArr = arr.map(num => Math.pow(num,4));
// console.log(newArr); 



// 21:
// let persons = [
//     {name:"Tommy",age:23},
//     {name:"Mike",age:27},
//     {name:"Lisa",age:25}
// ];
// let newPersons = persons.map(person => ({...person,salary:(person.age-18)*1000}));
// newPersons.forEach(person => console.log(`${person.name} earns $${person.salary} per year`));




// 22:
// let persons = [
//     {name:"Tommy",age:23},
//     {name:"Mike",age:27},
//     {name:"Lisa",age:25}
// ];
// let newPersons = persons.map(person => ({...person,salary:(person.age-18)*1000}));
// newPersons.forEach(person => console.log(`${person.name} is ${person.age>18 ? "an adult" : "not an adult"}`));
// console.log(newPersons);



// 23:
// let persons = [
//     {name:"Tommy",age:23},
//     {name:"Mike",age:27},
//     {name:"Lisa",age:25}
// ];
// let newPersons = persons.map(person => console.log(`${person.name} is ${person.age} years old`));




// 24:
// const numbers = [4, 9, 16, 25];
// const newArr = numbers.map(Math.sqrt).map(Math.round);
// console.log(newArr);



// 25:
// const numbers = [1, 2, 3, 4, 5];
// const squaredNumbers = numbers.map((num) => num * num);
// console.log(squaredNumbers); 
// console.log(numbers)
;



// 26:
// const products = [
//     { id: 1, name: 'Apple', price: 1.5 },
//     { id: 2, name: 'Banana', price: 0.75 },
//     { id: 3, name: 'Orange', price: 1.2 }
//   ];
//   const productNames = products.map((product) => product.name);
//   console.log(productNames);



// 27:
// console.log(
//     [1, , 3].map((x, index) => {
//       console.log(`Visit ${index}`);
//       return x * 2;
//     }),
//   );



// 28:
// const numbers = [1, 2, 3, 4];
// const filteredNumbers = numbers.map((num, index) => {
//   if (index < 3) {
//     return num;
//   }
// });
// console.log(filteredNumbers);
// console.log(numbers)



//Arrow function

//1.
// const dhru =()=>{
//     console.log("hello")
// }
// dhru()

//2.
// const add=(a,b)=>{
//     return a+b
// }
// console.log(add(3,4))

//3.
// const maltiply =(a,b)=>a*b;
// console.log(maltiply(4,2))

//4.
// const square =num=>num*num
// console.log(square(2));

//5.
// const dhru =(name,age)=>({name,age})
// console.log(dhru(jai,raj))

//6.
// const dhru =(name="jai")=>{
//     return (`hello ${name}`)
// }
// console.log(dhru())

//7.
// const number=[1,2,3,4,5];
//     number.forEach((num)=>console.log(num))

//8.
// const even =(num)=>(num%2==0?true:false)
// console.log(even(5))

//9.
// const maltiply=(num,factor=2)=>{
//     return num*factor;
// }
// console.log(maltiply(3,3))

//10.
// (()=>{
//     console.log("hello world")
// })();


// MAP function:--
//11.
// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = numbers.map(num => num * 2);
// console.log(doubledNumbers);

//12.
// const words = ['hello', 'world', 'javascript'];
// const uppercasedWords = words.map(word => word.toUpperCase());
// console.log(uppercasedWords);

//13.
// const numbers = [1, 2, 3, 4, 5];
// const squaredNumbers = numbers.map(num => num ** 2);
// console.log(squaredNumbers);

//14.
// const words = ['apple', 'banana', 'orange'];
// const wordLengths = words.map(word => word.length);
// console.log(wordLengths);

//15.
// const names = ['John', 'Jane', 'Michael'];
// const prefixedNames = names.map(name => 'Mr. ' + name);
// console.log(prefixedNames);

//16
// const words = ['apple', 'banana', 'orange'];
// const firstCharacters = words.map(word => word[0]);
// console.log(firstCharacters);

//17.
// const numbers = [-5, -3, 0, 2, 7];
// const absoluteNumbers = numbers.map(num => Math.abs(num));
// console.log(absoluteNumbers);

//18.
// const students = [
//     { name: 'John', age: 20 },
//     { name: 'Jane', age: 18 },
//     { name: 'Michael', age: 22 }
//   ];
//   const studentNames = students.map(student => student.name);
//   console.log(studentNames);

//19.
// const numbers = [1, 2, 3, 4, 5];
// const multipliedNumbers = numbers.map((num, index) => num * index);
// console.log(multipliedNumbers);

//20.
// const dates = ['2022-01-01', '2023-02-05', '2024-03-10'];
// const years = dates.map(date => new Date(date).getFullYear());
// console.log(years);

//21.
// const celsiusTemperatures = [0, 10, 20, 30, 40];
// const fahrenheitTemperatures = celsiusTemperatures.map(celsius => (celsius * 9/5) + 32);
// console.log(fahrenheitTemperatures);

//22.
// const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// const averages = matrix.map(row => row.reduce((sum, num) => sum + num, 0) / row.length);
// console.log(averages);

//23.
// const sentence = 'javascript is awesome';
// const capitalizedWords = sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1));
// console.log(capitalizedWords.join(' '));

//24.
// const numbers = [1, 2, 3, 4, 5];
// const strings = numbers.map(num => String(num));
// console.log(strings); // ['1', '2', '3', '4', '5']

// 25.
// const numbers = [1.2, 2.7, 3.5, 4.9];
// const rounded = numbers.map(num => Math.round(num));
// console.log(rounded); // [1, 3, 4, 5]

//26.
// const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// const lastElements = matrix.map(subarray => subarray[subarray.length - 1]);
// console.log(lastElements); // [3, 6, 9]

//27.
// const students = [
//     { name: 'John', age: 20 },
//     { name: 'Jane', age: 22 },
//     { name: 'Tom', age: 19 }
//   ];
//   const names = students.map(student => student.name);
//   console.log(names); // ['John', 'Jane', 'Tom']

//28.
// const strings = ["hello", "world", "javascript"];
// const reversedStrings = strings.map(str => str.split("").reverse().join(""));
// console.log(reversedStrings); // ["olleh", "dlrow", "tpircsavaj"]

//29.
// const books = [
//     { title: "The Catcher in the Rye", author: "J.D. Salinger" },
//     { title: "To Kill a Mockingbird", author: "Harper Lee" },
//     { title: "1984", author: "George Orwell" }
//   ];
//   const titles = books.map(book => book.title);
//   console.log(titles); // ["The Catcher in the Rye", "To Kill a Mockingbird", "1984"]
  
//30.
// const numbers = [1, 2, 3, 4, 5];
// const numberStrings = numbers.map(num => num.toString());
// console.log(numberStrings); // ["1", "2", "3", "4", "5"]


//31.
// const strings = ["apple", "banana", "cherry"];
// const lengths = strings.map((value, index, array) => {
//   console.log(`Index: ${index}, Value: ${value}, Array: ${array}`);
//   return value.length;
// });
// console.log(lengths); // [5, 6, 6]



//  32:
// const num = [34, 49, 162, 235];
// const newArr = num.map((Math)=>{
//     return Math/2;
// });
// console.log(num); // [2, 4.5, 8, 12.5]


//  33:
// const numbers = [65, 44, 12, 4];
// const newArr = numbers.map(myFunction);
// function myFunction(num) {
//     return num * 10;
// }
// console.log(newArr); 



//  34:
// const persons = [
//     {firstname : "Malcom", lastname: "Reynolds"},
//     {firstname : "Kaylee", lastname: "Frye"},
//     {firstname : "Jayne", lastname: "Cobb"}
// ];
// console.log(persons.map(getFullName));
// function getFullName(item) {
//     return [item.firstname,item.lastname].join(" ");
// }




//  35:
// let arr = [2, 5, 6, 3, 8, 9];
// let newArr = arr.map(function(val, index) {
//     return {key: index, value: val * val};
// });
// console.log(newArr);




//  36:
// let employees = [
//     {id:"001",name:"Tommy",age:23,city:"New York"},
//     {id:"002",name:"Mike",age:27,city:"Detroit"},
//     {id:"003",name:"Lisa",age:25,city:"Chicago"}
// ];
// console.log(employees.map(employee => employee.name));




//  37:
// let arr = [1.5,2.56,5.1,12.33];
// let newArr = arr.map(Math.round);
// console.log(newArr); 




//  38:
// let arr = ["apple","banana","cherry"];
// let newArr = arr.map(fruit => fruit.toUpperCase());
// console.log(newArr);




//  39:
// let arr = ["apple","banana","cherry"];
// let newArr = arr.map(fruit => fruit.length);
// console.log(newArr);



//  40:
// let arr = ["apple","banana","cherry"];
// let newArr = arr.map((fruit,index) => `Fruit ${index+1}: ${fruit}`);
// console.log(newArr); 



//  41:
// let arr = ["apple","banana","cherry"];
// let newArr = arr.map((fruit,index,arr) => `Fruit ${index+1} of ${arr.length}: ${fruit}`);
// console.log(newArr); 



//  42:
// let arr = [1.5,-2.56,-5.1,-12.33];
// let newArr = arr.map(Math.abs);
// console.log(newArr);



//  43:
// let arr = [1.5,-2.56,-5.1,-12.33];
// let newArr = arr.map(num => num <0 ? -num : num);
// console.log(newArr); 




//  44:
// let persons = [
//     {name:"Tommy",age:23},
//     {name:"Mike",age:27},
//     {name:"Lisa",age:25}
// ];
// let newPersons = persons.map(person => ({...person,salary:(person.age-18)*1000}));
// console.log(newPersons)



//  45:
// let persons = [
//     {name:"Tommy",age:23},
//     {name:"Mike",age:27},
//     {name:"Mikey",age:17},
//     {name:"Lisa",age:25}
// ];
// let newPersons = persons.map(person => ({...person,salary:(person.age-18)*1000,
//     adult:person.age>=18}));
// console.log(newPersons);



//  46:
// let persons = [
//     {name:"Tommy",age:23},
//     {name:"Mike",age:27},
//     {name:"Lisa",age:25}
// ];
// let newPersons = persons.map(person => ({...person,surname:"patel",adult:person.age>=18}));
// console.log(newPersons);




// 47:
// let arr = [1.5,-2.56,-5.1,-12.33];
// let newArr = arr.map(num => num.toFixed(2));
// console.log(newArr); 



// 48:
// let arr = [1.5,-2.56,-5.1,-12.33];
// let newArr = arr.map(num => num.toString());
// console.log(newArr); 



// 49:
// let arr = [1,2,3,4];
// let newArr = arr.map(num => num*num);
// console.log(newArr); 



// 50:
// let arr = [1,2,3,4];
// let newArr = arr.map(num => num*num*num);
// console.log(newArr); 

















// const names  = [
//     {first_name: "Handnm", last_name: "L demo"}, 
//     {first_name: "Q Wei", last_name: "Alxezx"},
//     {first_name: "Pqwern", last_name: "Ruse"},
//     {first_name: "Wiruyn", last_name: "Ruby"},
//     {first_name: "Erpso", last_name: "Loal"},
//     {first_name: "Demors", last_name: "Poet"},
//     {first_name: "Aleos", last_name: "Lkeu"},
//     ]
//     const updatedNames = names.map((person) => ({
//             ...person,
//             full_name: person.first_name + " " + person.last_name,
//           }));
          
//           console.log(updatedNames);
    
  


// const  donuts =[
// 	{
// 		"id": "0001",
// 		"type": "donut",
// 		"name": "Cake",
// 		"ppu": 0.55,
// 		"batters":
// 		{
// 			"batter":
// 				[
// 					{ "id": "1001", "type": "Regular" },
// 					{ "id": "1002", "type": "Chocolate" },
// 					{ "id": "1003", "type": "Blueberry" },
// 					{ "id": "1004", "type": "Devil's Food" }
// 				]
// 		},
// 		"topping":
// 			[
// 				{ "id": "5001", "type": "None" },
// 				{ "id": "5002", "type": "Glazed" },
// 				{ "id": "5005", "type": "Sugar" },
// 				{ "id": "5007", "type": "Powdered Sugar" },
// 				{ "id": "5006", "type": "Chocolate with Sprinkles" },
// 				{ "id": "5003", "type": "Chocolate" },
// 				{ "id": "5004", "type": "Maple" }
// 			]
// 	},
// 	{
// 		"id": "0002",
// 		"type": "donut2",
// 		"name": "Raised",
// 		"ppu": 0.55,
// 		"batters":
// 		{
// 			"batter":
// 				[
// 					{ "id": "1001", "type": "Regular" }
// 				]
// 		},
// 		"topping":
// 			[
// 				{ "id": "5001", "type": "None" },
// 				{ "id": "5002", "type": "Glazed" },
// 				{ "id": "5005", "type": "Sugar" },
// 				{ "id": "5003", "type": "Chocolate" },
// 				{ "id": "5004", "type": "Maple" }
// 			]
// 	},
// 	{
// 		"id": "0003",
// 		"type": "donut3",
// 		"name": "Old Fashioned",
// 		"ppu": 0.55,
// 		"batters":
// 		{
// 			"batter":
// 				[
// 					{ "id": "1001", "type": "Regular" },
// 					{ "id": "1002", "type": "Chocolate" }
// 				]
// 		},
// 		"topping":
// 			[
// 				{ "id": "5001", "type": "None" },
// 				{ "id": "5002", "type": "Glazed" },
// 				{ "id": "5003", "type": "Chocolate" },
// 				{ "id": "5004", "type": "Maple" }
// 			]
// 	},
// 	{
// 		"id": "0004",
// 		"type": "donut1",
// 		"name": "Old Fashioned",
// 		"ppu": 0.55,
// 		"batters":
// 		{
// 			"batter":
// 				[
// 					{ "id": "1001", "type": "Regular" }
// 				]
// 		},
// 		"topping":
// 			[
// 				{ "id": "5001", "type": "None" },
// 				{ "id": "5002", "type": "Glazed" },
// 				{ "id": "5003", "type": "Chocolate" },
// 				{ "id": "5004", "type": "Maple" }
// 			]
// 	}
// ]

// var arr=donuts.filter(item => item.topping.filter(p))


// // const result = [].concat(...donuts.map(donut => donut.batters.batter));
// // console.log(result)

// // const result = donuts.filter(donut => donut.batters.batter.some(batter => batter.type === 'Regular') && donut.topping.some(topping => topping.type === 'Chocolate'));

// // => bring all batters for all donuts in single array
// const arr1=donuts.filter(callback);
// console.log(value.arr1.push());

// function callback(value,index,array){
    
//     var b= value=="Chocolate";
//     console.log(b)
//     return ;

//     }
        
//// Extract all batters from each donut in a single array
// const allBatters = donuts.filter(donut => donut.batters.batter);
// console.log(allBatters);

//=> bring all batters for all donuts in single array



// const arr1=donuts.filter(callback);
// console.log(arr1)

// function callback(value,index,array){
//         value=="Chocolate";
//         return value

// }

// => filter donuts based on which have topping  Chocolate
// const arr1=donuts.filter(callback);
// console.log(arr1)

// function callback(value,index,array){
//         value=="Chocolate";
//         return value

// }


//=> filter donuts based on which have topping chocolate and Sugar

// function dhru (donuts){
//     const a=donuts.filter((value)=>{
//         if(value=="topping"){
//         value=="Chocolate";
//         value=="Sugar"
        
//         return value
//         }
//     })
// }
// dhru(value)
// console.log(dhru)



// const filteredDonuts = donuts.filter(donut =>
//     donut.topping.some(topping => topping.type === "Chocolate")
//   );
  
//   console.log(filteredDonuts);
//2.
// const filteredDonuts = donuts.filter(donut =>
//     donut.topping.map(topping => topping.type).includes("Chocolate")
//   );
  
//   console.log(filteredDonuts);




// => filter donuts based which have batter type is regular and topping have Chocolate

// function dhru(donuts){
//     var a=donuts.filter

// }


//   function toppingChocolate(arr) {
//     arr.filter((value) => {
//         for (let key in value) {
//             if (key === "topping") {
//                 for (let index in value[key]) {
//                     for (let subKey in value[key][index]) {
//                         if (subKey == "type") {
//                             if (value[key][index][subKey] == "Chocolate") {
//                                 console.log(value);
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     })
// }
// toppingChocolate(arr);



//=> filter donuts based on ppu > 0.5
// const filteredByPPU = donuts.filter(donut => donut.ppu > 0.5);

// console.log(filteredByPPU);

//=> bring all batters for all donuts in single array
// const allBatters = donuts.flatMap(donut => donut.batters.batter);

// console.log(allBatters);


// => filter donuts based on which have 2 and more than 2 batter in it 

// const filteredByMultipleBatters = donuts.filter(
//     donut => donut.batters.batter.length >= 2
//   );
  
//   console.log(filteredByMultipleBatters);



//1
// function toppingChocolate(array) {
//     let a = donuts.filter((value, index, arr) => {
//         let topping = value.topping;
//         for (let i = 0; i < topping.length; i++) {
//             if (topping[i].type == "Chocolate"){
//                 console.log(value.type+":");
//                 console.log(value);
//                 return value;
//             }
//         }
//     });
//     console.log(a);
//   }
//   toppingChocolate(donuts);

// console.log(toppingChocolate);


//2
// const result = donuts.filter(donut => donut.batters.batter.some(batter => batter.type === 'Regular') && donut.topping.some(topping => topping.type === 'Chocolate'));
// console.log(result)

//3
// const result = donuts.filter(donut => donut.topping.some(topping => topping.type === 'Chocolate' || topping.type === 'Sugar'));

//4
// const result = donuts.filter(donut => donut.ppu > 0.5);

//5
// const result = [].concat(...donuts.map(donut => donut.batters.batter));
// console.log(result)

//6
// const result = donuts.filter(donut => donut.batters.batter.length >= 2);

// console.log(result);



// Get name initials
// input = "George Raymond Richard Martin"; Output: “GRRM”
// input = “george raymond Richard Martin”; Output: “ GRRM”

// function getInitials(name) {
//     const words = name.split(" ");
//     const initials = words.map(word => word.charAt(0).toUpperCase());
//     return initials.join("");
//   }

// const input1 = "George Raymond Richard Martin";
// const output1 = getInitials(input1);
// console.log(output1); // Output: "GRRM"


//11.
// Get output like example
// input = "Every developer likes to mix kubernetes and javascript";
// output = "E3y d7r l3s to mix k8s and j8t"

// function shortenWords(sentence) {
//     const words = sentence.split(" ");
//     const shortenedWords = [];
  
//     for (let i = 0; i < words.length; i++) {
//       const word = words[i];
//       const length = word.length;
  
//       if (length > 2) {
//         const shortenedWord = `${word.charAt(0)}${length - 2}${word.charAt(length - 1)}`;
//         shortenedWords.push(shortenedWord);
//       } else {
//         shortenedWords.push(word);
//       }
//     }
  
//     return shortenedWords.join(" ");
//   }
  
//   const input = "Every developer likes to mix kubernetes and javascript";
//   const output = shortenWords(input);
//   console.log(output); // Output: "E3y d7r l3s to mix k8s and j8t"
 


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



  
//2
// const categoryAverages = products.reduce((averages, product) => {
//     averages[product.category] = (averages[product.category] || 0) + product.price;
//     return averages;
//   }, {});
  
//   for (const category in categoryAverages) {
//     const count = categoryCounts[category];
//     categoryAverages[category] /= count;
//   }
  
//   console.log(categoryAverages);



//
  
//   Q2: Create an object with department names as keys and an array of salaries as values
//   const departmentSalaries = employees.reduce((salaries, employee) => {
//     if (!salaries[employee.department]) {
//       salaries[employee.department] = [];
//     }
//     salaries[employee.department].push(employee.salary);
//     return salaries;
//   }, {});
  
//   console.log(departmentSalaries);
//   Output:
//   {
//     IT: [50000, 55000, 65000, 70000];
//     HR: [60000, 75000, 80000]
//   }
  

// let arr=[{a:15,b:[15,20]},{a:20,b:15}]

// let arr2=arr.map((value)=>{
//     if()
// })

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


// 13
// const employees = [
//         { name: "John", salary: 50000, department: "IT" },
//         { name: "Jane", salary: 60000, department: "HR" },
//         { name: "Bob", salary: 55000, department: "IT" },
//         { name: "Sophie", salary: 75000, department: "HR" },
//         { name: "Mike", salary: 65000, department: "IT" },
//         { name: "Emily", salary: 80000, department: "HR" },
//         { name: "David", salary: 70000, department: "IT" },
//       ];
      
    //   Q1: Calculate the average salary of each department
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


    //Q.2
    // var arr1= []
    // var arr2= []
    // const dhru1=employees.filter((item)=>{
    //     if(item.department== "IT"){
    //        arr1.push(item.salary)
    //     }
    // })
    // // console.log(dhru1)
    
    // const dhru2=employees.filter((item)=>{
    //     if(item.department== "HR"){
    //        arr2.push(item.salary)
    //     }
    // })

    // console.log(arr1)
    // console.log(arr2)


    //14
//     Make a function that returns the grouped data based on first letter of the string.
// For Example: [“Jeel” , “Prakhar” , “Bhakti”, “Vansh”, “Meghna”, “Bhaumik”, “Pujan”, “Rudra”, “Sachin” , “Dhruval”]
// Output: {
// 		J: [“Jeel”],
// 		P: [“Pakhar”, “Pujan”],
// 		B: [“Bhakti”, “Bhaumik”],
// 		…….. And so on
// 	    }




   