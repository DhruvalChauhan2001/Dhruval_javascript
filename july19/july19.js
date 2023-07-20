
// const a=[{id:1},{id:2}]
//  const b=[{id:1,name:"hi"},
//           {id:2,name:"hi"},
//           {id:3,name:"hi"}]

// const c= a.map((val)=>val.id)
// const d= b.filter(value=>{
//    if(!c.includes(value.id)){
//     return value
//    } 
// })
// console.log(d)

// const d= b.map((val)=>val.id)
// console.log(d)
//  let abc = b.filter(value=>{
//     if(!c.includes(value.id)){
//         return value;
//     }
//  });
//  console.log(abc);
// if(c.includes(d)){
//     return 
// }

// const anyString = "Brave new world";
// console.log(`The character at index 0   is '${anyString.charAt()}'`);
// // No index was provided, used 0 as default

// console.log(`The character at index 0   is '${anyString.charAt(0)}'`);
// console.log(`The character at index 1   is '${anyString.charAt(1)}'`);
// console.log(`The character at index 2   is '${anyString.charAt(2)}'`);
// console.log(`The character at index 3   is '${anyString.charAt(3)}'`);
// console.log(`The character at index 4   is '${anyString.charAt(4)}'`);
// console.log(`The character at index 999 is '${anyString.charAt(999)}'`);

//19

// What is the output of the following code?
// let arr1 = [{a: 34}, {a: 45}, {a:12}, {a:5}, {a:78}];
// let arr2 = arr1.map(item => item);
// arr2[2].b = 45;
// console.log(arr1);  // => 
// console.log(arr2);  // =>



// function num_string_range(start, end, step) {
//     const result = [];
//     let current = start;
  
//     while (current <= end) {
//       if (typeof start === "string") {
//         result.push(String.fromCharCode(current));
//       } else {
//         result.push(current);
//       }
//       current += step;
//     }
  
//     return result;
//   }
//   console.log(num_string_range('a', "z", 2)); // ["a", "c", "e", "g", "i", "k", "m", "o", "q", "s", "u", "w", "y"]
//   console.log(num_string_range("Z", "A", 2)); // ["Z", "X", "V", "T", "R", "P", "N", "L", "J", "H", "F", "D", "B"]
//   console.log(num_string_range(0, -5, 1)); // [0, -1, -2, -3, -4, -5]
//   console.log(num_string_range(0, 25, 5)); // [0, 5, 10, 15, 20, 25]
//   console.log(num_string_range(20, 5, 5)); // [20, 15, 10, 5]

  // console.log("hai")


  // function num_string_range(start, end, step) {
  //   const result = [];
    
  //   if (typeof start === 'number' && typeof end === 'number' && typeof step === 'number') {
  //     if (start <= end) {
  //       for (let i = start; i <= end; i += step) {
  //         result.push(i);
  //       }
  //     } else {
  //       for (let i = start; i >= end; i -= step) {
  //         result.push(i);
  //       }
  //     }
  //   } else if (typeof start === 'string' && typeof end === 'string' && typeof step === 'number') {
  //     const startCharCode = start.charCodeAt(0);
  //     const endCharCode = end.charCodeAt(0);
  //     if (startCharCode <= endCharCode) {
  //       for (let i = startCharCode; i <= endCharCode; i += step) {
  //         result.push(String.fromCharCode(i));
  //       }
  //     } else {
  //       for (let i = startCharCode; i >= endCharCode; i -= step) {
  //         result.push(String.fromCharCode(i));
  //       }
  //     }
  //   } else {
  //     throw new Error('Invalid input. Parameters should be of the same type and step should be a number.');
  //   }
    
  //   return result;
  // }
  
  // console.log(num_string_range('a', 'z', 2));
  // console.log(num_string_range('Z', 'A', 2));
  // console.log(num_string_range(0, -5, 1));
  // console.log(num_string_range(0, 25, 5));
  // console.log(num_string_range(20, 5, 5));
  

  // //39
  // function remove_array_element(arr, element) {
  //   const index = arr.indexOf(element);
  //   if (index !== -1) {
  //     arr.splice(index, 1);
  //   }
  //   return arr;
  // }
  
  // // Test data
  // const result = remove_array_element([2, 5, 9, 6], 9);
  // console.log(result); // Output: [2, 9, 6]


  //
  // const a=100
  // const b= new Number(49)

  // console.log(typeof(a))
  // console.log(b)

  // console.log(Math.random())
  // console.log(Math.round(Math.random()))

  // const min=10
  // const max=20

  // console.log(Math.floor(Math.random()*(max-min+1))+min)

  // let a= new Date()
  // console.log(a)
  // console.log(a.toDateString())
  // console.log(a.getDate())
  // console.log(a.toISOString())
  // console.log(a.toJSON())
  // console.log(a.getHours())
  // console.log(a.getMinutes())


  // const arr=[1,2,3,4,"true","false","jai"]

  // const b=arr.map((val,ind)=>val+" hello "+ind)
  
  // console.log(b)

  // function addtonumber (a,b){
  //    return a+b
  // }

  // console.log(addtonumber(2,3))

//   let userName = 'Kunjan';

//   {
//   let userName = 'Uchitlal';
//   }

// console.log(userName)
// var x=5;
// var y=7
// var number1 = 12.25;
// var number2  = 1;
// var number3 =  x + y+'8' ;

// console.log(number3)

//42
// Write a JavaScript program to find the maximum length of arrays inside a given array.
// // Test Data :
// [2,8,[6],3,3,5,3,4,[5,4]] //-> 2
// [2,8,[6,3,3],[4],5,[3,4,[5,4]]] //-> 3
// [2,8,[6,3,3],[4],5,[3,4,[5,4]], [23,56]] //-> 4
// [1,5,2,6,4,23,89] //-> 0




// Test data
// const array1 = [1, 2, 3];
// const array2 = ['a', 'b', 'c'];
// const array3 = [true, false];
// const mainArray = ['hello',[1,2,3],[5,7,8,7,],["hai"],[]];

// //
// const mainArray= [2,8,[6,3,3],[4],5,[3,4,[5,4]]]
// function countArraysInside(mainArray) {
//   return mainArray.filter(Array.isArray).length;
// }

// const result = countArraysInside(mainArray);
// console.log(result); // Output: 3


// //
// Write a JavaScript function to find an array containing a specific element.
// Test data : (ONLY FOR STRING AND NUMBER)
// const arr = [2, 5, 9, 6,"jai"];
// contains(arr, 5); => True
// contains(arr, 10); => False

// function findelement(arr,val){
//   const c= 
// }
// const a=arr.map((val,ind)=>val)
// console.log(a)

//
// const arr = [2, 5, 9, 6,"jai"];
// const b="jai"

// const d=arr.includes(b)
// console.log(d)


// Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]
// Expected result : [15, -22, 47]

// function isNumeric(value) {
//   return typeof value === 'number' && !isNaN(value) && isFinite(value);
// }

// function filterNumericValues(arr) {
//   return arr.filter(isNumeric);
// }

// // Test data
// const sampleArray = [NaN, 0, 15, false, -22, '', undefined, 47, null];
// const result = filterNumericValues(sampleArray);
// console.log(result); // Output: [0, 15, -22, 47]

//
// const sampleArray = [NaN, 0, 15, false, -22, '', undefined, 47, null];
// const result = sampleArray.filter((element) => !!element && typeof element === 'number');
// console.log(result); // Output: [15, -22, 47]


// //36
// Write a JavaScript program to find a pair of elements (indices of the two numbers) in a given array whose sum equals a specific target number.
// (FOR NOW CONSIDER THERE ARE ONLY ONE PAIR WHICH IS POSSIBLE SOLUTION)
// Input: numbers= [10,20,10,40,50,60,70], target=50
// Output: [10, 40] || [40,10]


// function findPairs(numbers, target) {
//   const pairs = numbers.reduce((result, num1, index) => {
//     numbers.slice(index + 1).forEach(num2 => {
//       if (num1 + num2 === target) {
//         result.push([num1, num2]);
//       }
//     });
//     return result;
//   }, []);

//   return pairs.map(pair => pair.sort((a, b) => a - b));
// }

// const numbers = [10, 20, 10, 40, 50, 60, 70,20,30];
// const target = 50;
// const output = findPairs(numbers, target);
// console.log(output); // Output: [ [ 10, 40 ], [ 10, 40 ] ]


// //33
// make a function that takes two parameter (arrayOfArray, array) and returns boolean based on following example:

// fun_name([[1, 2], [34, 67], [67, 77], [88, 90]], [1, 2]) => true
// fun_name([[1, 2], [34, 67], [67, 77], [88, 90]], [2, 1]) => false
// fun_name([[1, 2], [34, 67], [67, 77], [88, 90]], [22, 15]) => false
// fun_name([[1, 2], [34, 67], [67, 77], [22, 90, 15], [88, 90]], [22, 15, 90]) => false



// const arr=[[1, 2], [34, 67], [67, 77], [88, 90]];
// const b=[1, 2];

// const c= arr.map((val)=>b.includes(val))
// console.log(c)

// function fun_name(arrayOfArray, array) {
//   return arrayOfArray.some(subArray => areArraysEqual(subArray, array));
// }

// function areArraysEqual(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }

//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       return false;
//     }
//   }

//   return true;
// }

// // Test examples
// console.log(fun_name([[1, 2], [34, 67], [67, 77], [88, 90]], [1, 2])); // Output: true
// console.log(fun_name([[1, 2], [34, 67], [67, 77], [88, 90]], [2, 1])); // Output: false
// console.log(fun_name([[1, 2], [34, 67], [67, 77], [88, 90]], [22, 15])); // Output: false
// console.log(fun_name([[1, 2], [34, 67], [67, 77], [22, 90, 15], [88, 90]], [22, 15, 90])); // Output: false



// //
// const source = { a: 1 };
// const target = { b: 2 };
// Object.assign(target, source);
// console.log(target);
// console.log(source)
// console.log(target)

//

// const obj1 = { a: 12, b: 23 };
// const obj2 = obj1;
// const obj3 = { ...obj1 };
// obj1.c = 23;
// console.log(obj1.c, obj2.c, obj3.c);
// console.log(obj1)
// console.log(obj2)
// console.log(obj3)

// //
// const obj1 = { a: 12, b: 23 };
// const obj2 = { a: 44, b: 45 };
// const obj3 = Object.assign(obj1, obj2);
// obj2.a = 22;
// console.log(obj1, obj2, obj3);

//
// const obj1 = { a: 77, b: 67 };
// const obj2 = { a: 90, b: 34 };
// obj1.a = 22;
// obj1.b=50
// const obj3 = Object.assign({},obj1, obj2);

// console.log(obj1)
// console.log(obj2)
// console.log(obj3);

// //
// const obj1 = { a: 77, b: 67 };
// const obj2 = { a: 90, b: 34 };
// const obj3 = Object.assign(obj1, obj2);
// obj1.a = 22;
// console.log(obj1)
// console.log(obj2)
// console.log(obj3);

//
// const obj1 = { a: 77, b: 67 };
// const obj2 = { a: 90, b: 34 };
// const obj3 = Object.assign({}, obj1, obj2);
// obj1.a = 22;
// console.log(obj1)
// console.log(obj2)
// console.log(obj3);


//
// const source = { a: { b: 1 } };
// const target = {};
// Object.assign(target, source);
// console.log(target);

// //
// const source = { a: { b: 1 } };
// const target = {};
// Object.assign(target, JSON.parse(JSON.stringify(source)));
// source.a.b = 2;
// console.log(target);


// const a=["apple","banana","apple"] 

// function removeDuplicates(str) {
//   const charSet = new Set();
//   let result = '';

//   for (const char of str) {
//     if (!charSet.has(char)) {
//       charSet.add(char);
//       result += char;
//     }
//   }

//   return result;
// }

// const originalString = "hello";
// const stringWithoutDuplicates = removeDuplicates(originalString);
// console.log(stringWithoutDuplicates); // Output: "helo"


//
// function removeDuplicates(arr) {
//   const uniqueArray = [];
  
//   for (const element of arr) {
//     if (!uniqueArray.includes(element)) {
//       uniqueArray.push(element);
//     }
//   }
  
//   return uniqueArray;
// }

// const a = ["apple", "banana", "apple"];
// const result = removeDuplicates(a);
// console.log(result); // Output: ["apple", "banana"]

// //
// const source = { a: 1 };
// const target = Object.assign({}, source);
// delete target.a;
// console.log(source);
// console.log(target)


// //
// const target = { a: 1 };
// const source = { b: 2 };
// const result = Object.assign(target, source);
// console.log(result === source);
// console.log(result === target)


//
// const target = { a: 1 };
// const source = { b: 2 };
// const result = Object.assign(target, source);
// console.log(result === { a: 1, b: 2 });
// console.log(typeof(result))
// console.log(target)
// console.log(typeof({ a: 1, b: 2 }))

// const target = { a: 1 };
// const source = { b: 2 };
// const result = Object.assign(target, source);
// console.log(result === { a: 1, b: 2 });
// console.log(result)

// console.log({ a: 1, b: 2 }==={ a: 1, b: 2 })


//
// const target = { a: 1 };
// const source = { b: 2 };
// Object.assign(target, source);
// target.a = 234;
// target.b=5555
// source.b=100
// console.log(source);
// console.log(target)

// //
// const target = {};
// const source = { a: 1 };
// const result = Object.assign(target, source);
// source.a = 2;
// console.log(result);
// console.log(source);
// console.log(target)


//
// const target = {};
// const source = { a: { b: 1 } };
// const result = Object.assign(target, source);
// result.a.b = 2;
// console.log(target)
// console.log(result)
// console.log(source);


//
// const target = { a: { b: 1 } };
// const source = { a: [2, 3, 4] };
// const result = Object.assign(target, source);
// console.log(result);
// console.log(source);
// console.log(target)

//
// const target = { a: { b: 1 } };
// const source = { a: [2, 3, 4] };
// const result = Object.assign(target, source);
// target.a[2] = 90;
// console.log(result);
// console.log(source);
// console.log(target)

//
// const target = { a: { b: { c: 1 } } };
// const source = { a: { b: { d: 2 } } };
// const result = Object.assign(target, source);
// result.a.b.d = 3;
// console.log(target);
// console.log(result)
// console.log(target)

//
// Write a JavaScript program to list the properties of a JavaScript object.
// Sample object:
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 
// };

// // for (const iterator in student) {
// //   console.log(iterator.Object.entries[student])
// // }
// console.log(Object.values(student))
// console.log(Object.keys(student))
// console.log(Object.entries(student))


//
// Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
// Sample object:
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 
// };


// //
// function operationObj(obj) {
//   obj = {...obj, c: 12}
// }
// let a = {  x: 34,  y: 56 }
// operationObj(a);
// console.log(a);
// console.log(operationObj(a))

//
// function operationObj(obj) {
//   obj.z = {...obj, c: 12}
// }
// let a = {
//   x: 34,
//   y: 56
// }
// operationObj(a);
// console.log(a);


// //
// const target = { a: { b: { c: 1 } } };
// const source = { a: { b: { d: 2 } } };
// const result = Object.assign(target, source);
// result.a.b.d = 3;
// console.log(source);













