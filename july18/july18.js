

// function sum(name, ...args){
//     console.log(arguments);

//     console.log(`hello ${name}: `);

//     let sum=0;
//     for(let i in args){
//         sum +=args[i];
//     }
//    console.log(sum);
//    console.log(name)
//    console.log(args)
// }

// sum("yahoo baba",20,30,40);


//6
// Write a program to check if an array contains any number (strictly) or not.
// Input:  [1,2,3] => true
// [“1”, “a”, “h”] => false
// [“a”, 3, “gh”] => true
// [“a”, ‘3df’, “gh”] => false

// const a=["1","a","h",7]

// const dhru = a.map((value)=>typeof(value)==="number")
// console.log(dhru)


//7
// const numbers = [1, 2, 3, 4];
// 	// => convert all number to string in given array

// const numbertoString =numbers.toString()
// console.log(numbertoString)

// //8
// const numbers = [1, 2, 3, 4];
// const doubled = numbers.map((num, index, array) => {
//   array.push(num * 2);
//   return num * 2;
// });
// // console.log(numbers, doubled);
// console.log(numbers)
// console.log(doubled)

// const number =[1,2,3,4,5];
// const duble =number.map((val,ind,arr)=>{
//     arr.push(val*2);
//     return val*2;

// })

// console.log(number,duble)
// console.log(duble)
// // console.log(val)


//10
// Get name initials
// input = "George Raymond Richard Martin"; Output: “GRRM”
// input = “george raymond Richard Martin”; Output: “ GRRM”


// const name ="George Raymond Richard Martin";

// function  getNameInitials(input){
// const b= input.split(" ")
// const duble =b.map((val,ind,arr)=>val.charAt(0).toUpperCase());
//     return duble.join("");
// }                                                                                      

// const input1 = "George Raymond Richard Martin";
// const initials1 = getNameInitials(input1);
// console.log(initials1); // Output: "GRRM"

//12

// const products = [
//     { name: "Product 1", price: 20, category: "Electronics" },
//     { name: "Product 2", price: 30, category: "Clothes" },
//     { name: "Product 3", price: 40, category: "Electronics" },
//     { name: "Product 4", price: 50, category: "Clothes" },
//     { name: "Product 5", price: 60, category: "Clothes" },
//     { name: "Product 6", price: 70, category: "Electronics" },
//     { name: "Product 7", price: 80, category: "Clothes" },
//     { name: "Product 8", price: 90, category: "Electronics" },
//     { name: "Product 8", price: 90, category: "Electronics" },
//      { name: "Product 8", price: 90, category: "Electronics" },
//   ];
// //   Note: 2 questions
// //   Que1 => output: 
// //       {
// //      Clothes: 4,
// //      Electronics: 4
// //       }

// const E=[]
// const C=[]
// const catgory =products.map((val)=>{
//     if(val.category == "Electronics"){
//     E.push(val)
//     return E
//     }
// })       
// console.log(E)
// const catgory2 =products.map((val)=>{
//     if(val.category == "Clothes"){
//     C.push(val)
//     return C
//     }
// })       
// console.log(C)

// const g=E.reduce((ac,val,ind)=> ind+1)
// console.log(g)

// const k=C.reduce((ac,val,ind)=> ind+1)
// console.log(k)

//13

// const employees = [
//     { name: "John", salary: 50000, department: "IT" },
//     { name: "Jane", salary: 60000, department: "HR" },
//     { name: "Bob", salary: 55000, department: "IT" },
//     { name: "Sophie", salary: 75000, department: "HR" },
//     { name: "Mike", salary: 65000, department: "IT" },
//     { name: "Emily", salary: 80000, department: "HR" },
//     { name: "David", salary: 70000, department: "IT" },
//   ];
  
//   Que1: => count the average salary of each department
//   Que 2: =>  output: {
//               IT: [50000,55000,65000,70000],
//               HR: [60000,75000, 80000]
//            }
// const I=[]
// const H=[]
// function department (value){
//     if(employees.department == value.department=="IT"){
//        return value.salary
//     }
//     else {
//         value.department=="HR" 
//         // return H.push(value.salary)
//         return value.salary
//     }
// }
  
// const depart=department(employees)
// console.log(depart)
// console.log(I)

// console.log(department(employees))



//19
// What is the output of the following code?
// 	let arr1 = [{a: 34}, {a: 45}, {a:12}, {a:5}, {a:78}];
// 	let arr2 = arr1.map(item => item);
// 	arr2[2].b = 45;
//     arr2[2].c=300
// console.log(arr1);  // => 
// 	console.log(arr2);  // =>

//20

// What is the output of the following code?
// let arr1 = [{a: 34}, {a: 45}, {a:12}, {a:5}, {a:78}];
// 	let arr2 = arr1.map(item => item.a * 2);
// console.log(arr1);  // => 
// 	console.log(arr2);  // =>

//21
// What is the output of the following code?
// let arr = [1,2,3,4,5];
// let arr2 = arr.reduce((a, c) => a + c).map(item => item);
// console.log(arr2); // =>

//22
// What is the output of the following code?
// const example = ({ a, b, c }) => {
// console.log(a, b, c);  
// };
// example(0, 1, 2);

// console.log(example)

//23
// Find the Sum of Squares 
// let arr = [1, 2, 3, 4, 5];   //=>55

// const sumOfSquares =arr.reduce((accu,val)=>{
//      return accu+(val*val)
// })
// console.log(sumOfSquares)

//24
// const students = [
//     { name: 'Alice', age: 20, grade: 'A' },
//     { name: 'Bob', age: 18, grade: 'B' },
//     { name: 'Charlie', age: 19, grade: 'A' },
//     { name: 'David', age: 20, grade: 'C' },
//     { name: 'Aavid', age: 20, grade: 'C' },
//   ];
    //   => sort by age
    //   => sort by grade
    //   => sort by name
    //   => average of ages
    //   => sum of ages


    // const a=students.map((val)=> val.age)
    // console.log(a.sort())

    // const b=students.map((val)=>val.grade)
    // console.log(b.sort())

    // const c=students.map((val)=>val.name)
    // console.log(c.sort())

    // const d=students.reduce((acc,val)=>acc+val.age)
    // console.log(d)

    // const e=students.map((val)=>val.age)
    // console.log(e)
    // const f =e.reduce((ac,val)=>ac+val)
    // console.log(f)

    //26
    // Create an array of squares of even numbers from a given array.
    // const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

    // const b=numbers.filter((val)=>val%2==0).map((val)=>val*2)
    // console.log(b)

    //27
    // Filter out duplicate values from an array.
    // const numbers = [1, 2, 2, 3, 4, 4, 5,0,12,17,11,10,11,10,0];
    // const a=numbers.filter((val,ind)=>numbers.indexOf(val)===ind)
    // console.log(a)


    //28
    //Find the index of the first odd number in an array.
    // const numbers = [2, 4,1, 6, 8, 9, 10,3,5];
    // const a=numbers.filter((val,ind)=>  val%2!==0)
    // console.log(a)

    //31
    // Find the index of the first person whose name starts with 'A' and age is less than 20.
//     const people = [
//   { name: 'Alice', age: 18 },
//   { name: 'Bob', age: 20 },
//   { name: 'Charlie', age: 19 },
//   { name: 'David', age: 21 },
//   { name: 'Alif', age: 18 },
// ];

// const b=people.filter((val)=>{
//     if(val.name[0].charAt(0)=="A" && val.age<20){
//     console.log(val)
//     }
// })


//32

// make a function that takes two parameter (arrayOfArray, array) and returns boolean based on following example:

// fun_name([[1, 2], [34, 67], [67, 77], [88, 90]], [1, 2]) //=> true
// fun_name([[1, 2], [34, 67], [67, 77], [88, 90]], [2, 1]) //=> true
// fun_name([[1, 2], [34, 67], [67, 77], [88, 90]], [22, 15]) //=> false
// fun_name([[1, 2], [34, 67], [67, 77], [22, 90, 15], [88, 90]], [22, 15, 90]) //=> true

// const a=[[1, 2], [34, 67], [67, 77], [88, 90]];
// const b=[1, 2];

// const c=a.flat()
// // console.log(c)

// const d=b.flat()
// // console.log(d)

// const e= c.includes(d)
// // (searchElement: number, fromIndex?: number | undefined): boolean
// console.log(e)

// let arr1 =[[1, 2], [34, 67], [67, 77], [88, 90]];
// let arr2 = [1, 2];

// let isFounded = arr1.every( ai => arr2.includes(ai) );
// console.log(isFounded)
// const b=arr1[2].map((val)=>)
// console.log(b)

//4
// const nestedArray = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ];
// //   => print all items of nested array

// const b=nestedArray.flat()
// console.log(b.toString())  


//5
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
//  => print all items of this object in line 
//  //Output:
//  Vishal Kukreja
//  32
//  123 Mumbai fashion St
//  Midtown
//  MH
//  reading
//  drawing
//  gardening
 
// const a=Object.values(nestedObject)
// console.log(a)

// for (const key of Object.values(nestedObject)) {
//    console.log(key)
// }

//8
// const numbers = [1, 2, 3, 4];
// const doubled = numbers.map((num, index, array) => {
// //   array.push(num * 5);
//   return num * 2;
// });
// console.log(numbers, doubled);


//11
// Get output like example
// input = "Every developer likes to mix kubernetes and javascript";
// output = "E3y d7r l3s to mix k8s and j8t"


// const arr= "Every developer likes to mix kubernetes and javascript"

// const a=arr.split(" ")
// console.log(a)

// const b= a.map((val)=>val.charAt(0))
// console.log(b)

// // const c=a.map((val)=>val.slice(1,-1).length)
// // console.log(c)
// const c=a.map((val)=>val.slice().length-2)
// console.log(c)


// const d= a.map((val)=>val.slice(-1))
// console.log(d)

// const e=b.join(c)
// console.log(e)
// const e=[...b,...c,...d]
// console.log(e)
// const e= b.concat(c,d).toString
// console.log(e)

// array.forEach(element => {
//     element
// });


//14
// Make a function that returns the grouped data based on first letter of the string.
// For Example: [“Jeel” , “Prakhar” , “Bhakti”, “Vansh”, “Meghna”, “Bhaumik”, “Pujan”, “Rudra”, “Sachin” , “Dhruval”]
// Output: {
// 		J: [“Jeel”],
// 		P: [“Pakhar”, “Pujan”],
// 		B: [“Bhakti”, “Bhaumik”],
// 		…….. And so on
// 	    }

// const arr=["sachin","hardik","dhruval","jai","raj","ajay","parth","Hardik"]

// const b=arr.sort()
// console.log(b)


//
// var a=5
// var b=-a
// console.log(b)

// console.log(+true)
// console.log(true)
// console.log(true+"")

// console.log(+" ")

// let num1,num2,num3

// num1=num2=num3=2+2

// console.log(num1,num2,num3)

// let a=100
//     a++;
//     a++;
// console.log(a)

// console.log(null>=0)
// const a=10
// console.log(2+2+"4")
// console.log(typeof(""))

// const source = { a: 1 };
// const target = { b: 2 };
// const d={c:4}
// const e= Object.assign(target, source,d);
// console.log(target);
// console.log(source);
// console.log(d)
// console.log(e)

// const obj1 = { a: 12, b: 23 };
// const obj2 = obj1;

// const obj3 = { ...obj1 };
// obj1.c = 23;
// console.log(obj1.c, obj2.c, obj3.c);

// const obj1 = { a: 12, b: 23 };
// const obj2 = { a: 44, b: 45 };
// const obj3 = Object.assign(obj1, obj2);
// obj2.a = 22;
// console.log(obj1, obj2, obj3);



// function isPrime(number) {
//     if (number <= 1) {
//       return false;
//     }
  
//     for (var i = 2; i <= Math.sqrt(number); i++) {
//       if (number % i === 0) {
//         return false;
//       }
//     }
  
//     return true;
//   }
  
//   function main() {
//     var start = 2;
//     var end = 100;
  
//     for (var i = start; i <= end; i++) {
//       if (isPrime(i)) {
//         console.log(i);
//       }
//     }
//   }
  
//   if (require.main === module) {
//     main();
//   }
  

// function isPrime(number) {
//     if (number <= 1) {
//       return false;
//     }
    
//     // Check for divisibility from 2 to the square root of the number
//     for (let i = 2; i <= Math.sqrt(number); i++) {
//       if (number % i === 0) {
//         return false;
//       }
//     }
    
//     return true;
//   }

//   console.log(isPrime(12))


//  const a=[{id:1},{id:2}]
//  const b=[{id:1,name:"hi"},
//           {id:2,name:"hi"},
//           {id:3,name:"hi"}]

// const c= a.map((val)=>val.id)
// console.log(c)

// const d= b.map((val)=>val.id)
// console.log(d)
 
// const e=c.includes(d)
// console.log(e)
 
// let res = b.filter(item => item.id !== a.map(val => val.id))
// console.log(res);



