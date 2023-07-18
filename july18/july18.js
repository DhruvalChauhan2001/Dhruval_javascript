

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


