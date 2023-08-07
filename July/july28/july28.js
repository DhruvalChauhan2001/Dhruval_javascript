
// const  input = "Every developer likes to mix kubernetes and javascript";
//    ////output = "E3y d7r l3s to mix k8s and j8t"

// function dhru(value){
//         const a=value.split(" ")
//         const c=a.map((val)=>
//        { if (val.length>3) {
//               return val.at(0)+(val.length -2)+val.at(-1)
//         }else{
//             return val;
//         }
//     })
//         return c.join(" ");
//     }
// // dhru(input)
// console.log(dhru(input))


////1
// let value = 121

// const dhru = ()=>{
//     let a=value.toString().split("").reverse().join("")
//     let b=value.toString()

//     if(a==b){
//         return "palindrome"
//     }
//     else{
//         return "Not a palindrome "
//     }
// }

// console.log( dhru())


/////2

// let num = 5;
// var isprimenumber = true

// for(let i=2;i<num;i++){
//     if(num % i == 0){
//         // console.log("not a prime number")
//         isprimenumber =false;

//     }
//     // else{
//     //     console.log("prime number")
//     // }  
// }   
// if(isprimenumber == true){
//     console.log(`${num} is prime number`)
// }
// else{
//     console.log(`${num} NOT prime number`)
// }


/////
// let num = 5;
// var isprimenumber = true

// for(let i=2;i<num;i++){
//     if(num % i == 0){
//        isprimenumber =false;

//     }
// }   
// if(isprimenumber == true){
//     console.log(`${num} is prime number`)
// }
// else{
//     console.log(`${num} NOT prime number`)
// }


/////3


// const arr =[2,3,4,5,6,7];

// const getsamllNumber = (arr)=>{
//     let smallnum =Number.POSITIVE_INFINITY
//     for(const num of arr){
//         if(num<smallnum){
//             smallnum=num
//         }
//     }
//     return smallnum
// }

// console.log(getsamllNumber(arr))

////

// const arr =[2,3,4,5,6,7];
// const b=arr.reduce((accu,num)=>Math.max(accu,num))
// console.log(b)


///// 
// const a=[1,2,3,4,5,6,10,12]
// const b=[2,3,4,6,8,9,10]

// // const c=a.concat(b)
// // let uniq= [...new Set(c)]
// // console.log(uniq.sort())


// const joinarry =[...a,...b]
// // console.log(joinarry)

// const shorting =joinarry.sort((a,b)=>a-b)
// // console.log(shorting)

// const removedublicate = [...new Set(shorting)]
// console.log(removedublicate)


// ////
// let arr =[2,3,4,5,6]
// let [arr1,arr2,arr3,arr4,arr5,arr6] = arr

// console.log(arr2)
// console.log(arr5)
// console.log(arr6)


//// Set

// const arr = [ 1,2,3,4,5,6,71,2,3,4,5,6,7,"jai","jai","hallo"]

// const b=[...new Set(arr)]
// console.log(b)


// const a="dhruval"
// console.log([...new Set(a)])


/////
// let myname = "dhruval"
// myname="thapa"
// let b =myname


// b="jai"
// console.log(b)


////

// const obj1={
//     id:12,
//     name:"vinod"
// }

// const obj2=obj1

// obj1.name="yesss";
// obj2.name="thapa"

// console.log(obj1)
// console.log(obj2)


// //////
// Write a JavaScript function to remove a specific element from an array.
// Test data :
// remove_array_element([2, 5, 9, 6], 5); => [2, 9, 6]

// const arr=[2, 5, 9, 6]
// const remove=2

// const a=arr.filter((val,index)=>{
//   return remove==val

// })

// console.log(a)


// ////
// Write a JavaScript function to find an array containing a specific element.
// Test data : (ONLY FOR STRING AND NUMBER)
// arr = [2, 5, 9, 6];
// contains(arr, 5); => True
// contains(arr, 10); => False

// ///
// const  arr = [2, 5, 9, 6 ,"hai"];
// const incl =9

// function dhru(){
//         const a=arr;
//         const b=incl
//         const c=a.includes(b)
//         console.log(c)
// }
// dhru()


///////
// Write a JavaScript program to find the maximum length of arrays inside a given array.
// Test Data :
// [2,8,[6],3,3,5,3,4,[5,4]] -> 2
// [2,8,[6,3,3],[4],5,[3,4,[5,4]]] -> 3
// [2,8,[6,3,3],[4],5,[3,4,[5,4]], [23,56]] -> 4
// [1,5,2,6,4,23,89] -> 0

// const arr =  [2,8,[6],3,3,5,3,4,[5,4],[1,2,3]]
// const b = arr.map((val)=>val)
// console.log(b)


// ////
// const nestedArray = [[1,[2,3,4], 2], [3, 4], [5, 6]];
// // => flat this array using reduce (NOTE: array will be only depth 1)
// const b=nestedArray.flat(2)
// console.log(b)

////
// Filter out duplicate values from an array.
// const numbers = [1, 2, 2, 3, 4, 4, 5];
// const b=[...new Set(numbers)]
// console.log(b)

////
// Find the first string that contains the letter 'a' in an array.


// const words = ['apple', 'banana', 'orange'];

// const b=words.map((val)=>{
//  if(val.charAt(0)=="a"){
//     console.log(val)
//  }
// })

////
// Find the index of the first odd number in an array.
// const numbers = [2, 4, 6, 8, 9, 10,3,15];

// const a=numbers.filter((val,index)=>{
//     if(val % 2 !=0){
//         console.log(val)
//     }
// })


// /////
// Find the index of the first person whose name starts with 'A' and age is less than 20.
// const people = [
//   { name: 'Alice', age: 18 },
//   { name: 'Bob', age: 20 },
//   { name: 'Charlie', age: 19 },
//   { name: 'David', age: 21 },
//   { name: 'Alice', age: 21 },
// ];

// const a=people.filter((val)=>{
//     if(val.age<20 && val.name.charAt(0)=="A"){
//         console.log(val)
//     }
// })



/////
// Create an array of squares of even numbers from a given array.
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// const a=numbers.filter((val)=>{
//     if(val % 2 == 0)
//     console.log(val +"=>"+ val*2)
// })


/////

// Find the first string that contains the letter 'a' in an array.
// const words = ['apple', 'banana', 'orange'];

// const a=words.filter((val)=>{
//     if(val.charAt(0)=="a"){
//         console.log(val)
//     }
// })


/////
// Find the index of the first odd number in an array.
// const numbers = [2, 4, 6, 8, 9, 10];

// const a=numbers.filter((val,ind)=>{
//     if(val % 2 !=0){
//         console.log( val+"==>"+ ind)
        
//     }
// })


// /////
// Write a program to check if an array contains any number (strictly) or not.
// Input:  [1,2,3] => true
// [“1”, “a”, “h”] => false
// [“a”, 3, “gh”] => true
// [“a”, ‘3df’, “gh”] => false

// const a= ["a", 3, "gh"] 
// const a=["1","1","h",1]


// const b=a.filter((val)=>{
//     if(typeof(val)=="number"){
//         console.log(true)
//     }
//     // console.log(false)
// })


/////
// const numbers = [1, 2, 3, 4];
// 	// => convert all number to string in given array
// const b=numbers.toString()
// console.log(b)


// //////
// const numbers = [1, 2, 3, 4];
// const doubled = numbers.map((num, index, array) => {
//   array.push(num * 2);
//   return num * 2;
// });
// console.log(numbers, doubled);


/////
// Create an array of squares of even numbers from a given array.
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// const a=numbers.filter((val)=>{
//     if(val%2==0){
//         console.log(val+"==>"+val**2)
//     }
// })


///////

// // Filter out duplicate values from an array.
// const numbers = [1, 2, 2, 3, 4, 4, 5];

// const a=[...new Set(numbers)]
// console.log(a)


///////



/////////
// make a function that takes two parameter (arrayOfArray, array) and returns boolean based on following example:

// fun_name([[1, 2], [34, 67], [67, 77], [88, 90]], [1, 2]) //=> true
// fun_name([[1, 2], [34, 67], [67, 77], [88, 90]], [2, 1]) //=> true
// fun_name([[1, 2], [34, 67], [67, 77], [88, 90]], [22, 15]) //=> false
// fun_name([[1, 2], [34, 67], [67, 77], [22, 90, 15], [88, 90]], [22, 15, 90])// => true


// const arr = [[1, 2], [34, 67], [67, 77], [88, 90]]
// const inclu= [1, 2]

// function dhru(arrayOfArray, array){
//     const a=arrayOfArray
//     const b=array

    
    
// }




// const a=arr.flat()
// console.log(a)

// const b=inclu
// console.log(b)
// const b=include.flat()
// console.log(b)

// const c=inclu.includes(a)
// console.log(c)

// const fill=a.filter((val)=>{
//     if(val===inclu){
//         // return val
//         console.log(val)
//     }
// })




// function dhru(){
//     const a=arr
//     const b=include

//     a.flat()
//     // b.flat()

//     console.log(a.includes(b))
//     // return a.includes(b)
// }
// dhru()

// arr2.some((arrVal) =>(arrVal[0]==arr1[0]));
//     // console.log(arr2)
//     return true6+


////////
// Find the index of the first odd number in an array.
// const numbers = [2, 4, 6, 8, 9, 10,19];

// const a=numbers.filter((val,index)=>{
//     if(val%2!=0){
//         console.log(val +"==>"+index)
//     }
// })

///39
// Write a JavaScript function to remove a specific element from an array.
// Test data :
// remove_array_element([2, 5, 9, 6], 5); => [2, 9, 6]


///
// const fname ="        dhru     chauhan   "

// const a=fname.trim().split(" ")
// const b=a.filter((val)=>{
//     // if(val.length>1){
//         console.log(val)
//     // }
// })
// console.log(b.join(" "))

// const b=fname.split(" ")
// // console.log(b)
// function dhru(name){
//     const a=name.trim()
//     const b=a.split(" ").
//     // console.log(b)
    
//     // const d = b.filter((val)=>{
//     //     if(length.val>1){
//     //         console.log(val)
//     //     }
//     // })
    
// }
// dhru(fname)

// console.log('       dsds              sdsdsd       '.split(" ").filter(Boolean).join(" "))


// Write a JavaScript function to remove a specific element from an array.
// Test data :
// remove_array_element([2, 5, 9, 6], 5); => [2, 9, 6]

// remove_array_element([2, 5, 9, 6], 5);

// function remove_array_element(arr,ele){
//     const index=arr.indexOf(ele)
//     console.log(index)
//     if(index !== -1){
//         arr.splice(index,1)
//     }
//     return arr;
// }

// const result = remove_array_element([2, 5, 9, 6], 5);
// console.log(result); // Output: [2, 9, 6]




// function remove_array_element(arr, element) {
//     const index = arr.indexOf(element);
//     if (index !== -1) {
//       arr.splice(index, 1);
//     }
//     return arr;
//   }
  
//   // Test data
//   const result = remove_array_element([2, 5, 9, 6], 9);
//   console.log(result); // Output: [2, 9, 6]




// ////
// Write a JavaScript function to find an array containing a specific element.
// Test data : (ONLY FOR STRING AND NUMBER)
// arr = [2, 5, 9, 6];
// contains(arr, 5); => True
// contains(arr, 10); => False

// const arr=[2, 5, 9, 6];
// const ele= 6

// console.log(arr.includes(ele))


// function contains(arr,ele){
//     const b=arr.include(ele)
//     console.log(b)

// }

// //////


// [2,8,[6],3,3,5,3,4,[5,4]] -> 2
// [2,8,[6,3,3],[4],5,[3,4,[5,4]]] -> 3
// [2,8,[6,3,3],[4],5,[3,4,[5,4]], [23,56]] -> 4
// [1,5,2,6,4,23,89] -> 0


// const arr= [1,5,2,6,4,23,89]

// // arr.forEach(element => {
// //     console.log(Array.isArray(element))
// // });

// const a=arr.filter((val)=>{
//     const b=Array.isArray(val)
//     // console.log(b)
//     return b
// })
// console.log(a.length)

////
// function num_string_range(start, end, step) {
//     const result = [];
//     const startCode = start.charCodeAt(0);
//     const endCode = end.charCodeAt(0);
  
//     for (let i = startCode; i <= endCode; i += step) {
//       result.push(String.fromCharCode(i));
//     }
  
//     return result;
//   }
  
//   // Test
//   const result = num_string_range('a', 'z', 2);
//   console.log(result); // Output: ["a", "c", "e", "g", "i", "k", "m", "o", "q", "s", "u", "w", "y"]
  

//////

// Write a JavaScript program to count the number of arrays inside a given array.
// Test Data :
// ([2,8,[6],3,3,5,3,4,[5,4]]) -> 2
// ([2,8,[6,3,3],[4],5,[3,4,[5,4]]]) -> 3


// const arr=[2,8,[6],3,3,5,3,4,[5,4]]

// const a=arr.filter((val)=>{
//     // const b=Array.isArray(val)
//     // console.log(b)
//     if(Array.isArray(val)){
//         // console.log(val)
//         return val.length
//     }
// })
// console.log(a.length)


// /////
// const arr=[2, 4, 8, 16, 32]
// // const arr=[2, 4, 16, 32, 68]

// const b=arr.filter((val,ind)=>{
//     if(val%2 ==0 ){
//     //    val**2
//        return val
//     }
//     else{
//     //    console.log(false)
//     }
// })

// console.log(b)



////

// Sample array : [NaN, 0, 15, false, -22, '', undefined, 47, null]
// Expected result : [15, -22, 47]

// const arr =  [NaN, 0, 15, false, -22, '', undefined, 47, null]

// const b=arr.filter((value)=>{
//     if(typeof(value)=="number"){
//         return value
//     }
// })
// console.log(b)

/////
// let arr = [1,2,3,5]
// console.log(arr[-1]); //?


