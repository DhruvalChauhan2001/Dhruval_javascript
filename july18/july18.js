

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
//   ];
//   Note: 2 questions
//   Que1 => output: 
//       {
//      Clothes: 4,
//      Electronics: 4
//       }

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
// // Find the Sum of Squares 
// let arr = [1,2,3,4,5] //=> ans : 55

// const sumOfSquares =arr.reduce((accu,val)=>{
//      accu+val 
//      return (accu+val)+accu
// })
// console.log(sumOfSquares)

//24
const students = [
    { name: 'Alice', age: 20, grade: 'A' },
    { name: 'Bob', age: 18, grade: 'B' },
    { name: 'Charlie', age: 19, grade: 'A' },
    { name: 'David', age: 20, grade: 'C' },
    { name: 'Aavid', age: 20, grade: 'C' },
  ];
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

fun_name([[1, 2], [34, 67], [67, 77], [88, 90]], [1, 2]) //=> true
fun_name([[1, 2], [34, 67], [67, 77], [88, 90]], [2, 1]) //=> true
fun_name([[1, 2], [34, 67], [67, 77], [88, 90]], [22, 15]) //=> false
fun_name([[1, 2], [34, 67], [67, 77], [22, 90, 15], [88, 90]], [22, 15, 90]) //=> true


  



