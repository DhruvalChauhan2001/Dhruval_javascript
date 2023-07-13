// let arr =[10,20,30,"dhruval",true,null,Number,4,"jai"]

// for(var i=0;i<=arr.length;i++){
//     console.log(arr[i] )
// }


// arr=[1,2,3,4,"jai",true,90]
// // var b=arr.length
// // console.log(b)
// console.log(arr.length)



// var a=[1,2,3,"hello"] 
// var b=a.indexOf()
// console.log(b)


// var a=[1,2,3,"hello"]
// var a="jai"
// var b=Array.isArray(a)
// console.log(b)

// var a=[1,2,3,"hello"]
// b=Array.isArray(a)
// console.log(a.isArray(a))
// console.log(b)
// var a="jai"
// var b=Array.isArray(a)
// console.log(b)



// var age=[10,12,18,20,7,19]
// var b=age.filter(myfun)
// console.log(b)

// function myfun(values){
//     return values>=18
// } 


// var age=["apple","Add","Remove","jai",9,10]
// age.sort()
// console.log(age)

// var age=["xreay","Zline","Apple","ball",50,10,67,12]
// age.sort()
// console.log(age)


// var age=["apple","Add",[5,8,["jai",[90,70],"yup"],9,0,12],"Remove","jai",9,10]
// var b=age.flat()
// console.log(b)



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



//.1
// const names = [
//     { first_name: "Handnm", last_name: "L demo" },
//     { first_name: "Q Wei", last_name: "Alxezx" },
//     { first_name: "Pqwern", last_name: "Ruse" },
//     { first_name: "Wiruyn", last_name: "Ruby" },
//     { first_name: "Erpso", last_name: "Loal" },
//     { first_name: "Demors", last_name: "Poet" },
//     { first_name: "Aleos", last_name: "Lkeu" },
//   ];
  
//   const updatedNames = names.map((person) => ({
//     ...person,
//     full_name: person.first_name + " " + person.last_name,
//   }));
  
//   console.log(updatedNames);


//.2
// const names = [
//     { first_name: "Handnm", last_name: "L demo" },
//     { first_name: "Q Wei", last_name: "Alxezx" },
//     { first_name: "Pqwern", last_name: "Ruse" },
//     { first_name: "Wiruyn", last_name: "Ruby" },
//     { first_name: "Erpso", last_name: "Loal" },
//     { first_name: "Demors", last_name: "Poet" },
//     { first_name: "Aleos", last_name: "Lkeu" },
//   ];
  
//   const updatedNames = names.map((person) => ({
//     ...person,
//     full_name: person.first_name + " " + person.last_name,
//   }));
  
//   console.log(updatedNames);


//3
// let arr = [1,2,3,5]
// console.log(arr[-1]); 

//4
// const nestedArray = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ];
//   => print all items of nested array

// for (let i = 0; i < nestedArray.length; i++) {
//     for (let j = 0; j < nestedArray[i].length; j++) {
//       console.log(nestedArray[i][j]);
//     }
//   }

  
//   nestedArray.forEach((subArray) => {
//     subArray.forEach((item) => {
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
//  => print all items of this object in line 
 //Output:
//  Vishal Kukreja
//  32
//  123 Mumbai fashion St
//  Midtown
//  MH
//  reading
//  drawing
//  gardening

// function printItems(obj) {
//     for (let key in obj) {
//       if (typeof obj[key] === "object") {
//         printItems(obj[key]);
//       } else {
//         console.log(obj[key]);
//       }
//     }
//   }
  
//   printItems(nestedObject);



//6.
// Write a program to check if an array contains any number (strictly) or not.
// Input:  [1,2,3] => true
// [“1”, “a”, “h”] => false
// [“a”, 3, “gh”] => true
// [“a”, ‘3df’, “gh”] => false




// function containsNumber(array) {
//     for (let i = 0; i < array.length; i++) {
//       if (typeof array[i] === "number") {
//         return true;
//       }
//     }
//     return false;
//   }
  
//   console.log(containsNumber([1, 2, 3])); // true
//   console.log(containsNumber(["1", "a", "h"])); // false
//   console.log(containsNumber(["a", 3, "gh"])); // true
//   console.log(containsNumber(["a", '3df', "gh"])); // false




// const dhru =["hay","dhru","how","are" ,"you"]
// const values =dhru.forEach((element) => {
//     // console.log(index,element,array)
//     // return
// });
// console.log(values)


// hay
// dhru
// how
// are
// you
// undefined


// const dhru= [
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


// const hardik = dhru.filter((jai) =>{ return jai.type=="Chocolate"});
// console.log(hardik)


// const number=[1,2,3,4,5,6,7,8,9,10]

// const dhru=number.map((num)=>num*2);
// console.log(dhru);

// const hardik=number.filter((har)=>har>=5)
// console.log(hardik)


// const topping=
// 			[
// 				{ "id": "5001", "type": "None" },
// 				{ "id": "5002", "type": "Glazed" },
// 				{ "id": "5003", "type": "Chocolate" },
// 				{ "id": "5002", "type": "Chocolate" },
// 				{ "id": "5004", "type": "Chocolate" },

// 				{ "id": "5004", "type": "Maple" },
// 				{ "id": "5006", "type": "Chocolate" },
// 				{ "id": "5009", "type": "Chocolate" }
// 			]
// const dhru =topping
// 				.filter((num) => num.type=="Chocolate")
// 				.filter((num1)=>num1.id>=5004)
				
// console.log(dhru)

// const number =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// const number =[1,2,3,4,5]


// const dhru=number.reduce((num1,num2)=>num1+num2)
// console.log(dhru)



// const donut =[
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

// const dhru =donut.filter((value)=>value.batters.batter.filter((value)=>value.type=="Chocolate".length>0))
// console.log(dhru)

// filter donuts based which have batter type is regular and topping have Chocolate

// const dhru =donut.filter((value)=>value.batters.batter.filter((value)=>value.type=="Chocolate"&& "Regular"))
// console.log(dhru)

// const employees = [
// 	{ name: "John", salary: 50000, department: "IT" },
// 	{ name: "Jane", salary: 60000, department: "HR" },
// 	{ name: "Bob", salary: 55000, department: "IT" },
// 	{ name: "Sophie", salary: 75000, department: "HR" },
// 	{ name: "Mike", salary: 65000, department: "IT" },
// 	{ name: "Emily", salary: 80000, department: "HR" },
// 	{ name: "David", salary: 70000, department: "IT" },
//   ];
  
//   Que1: => count the average salary of each department
//   Que 2: =>  output: {
// 			  IT: [50000,55000,65000,70000],
// 			  HR: [60000,75000, 80000]
// 		   }
// const dhru=employees
// // .map((value)=>value.salary>=40000)
// .map((value)=>value.salary>=60000)
// console.log(dhru)

// const dhru=employees.map((value)=>{return value.salary>=50000}) || employees.map((value)=>{ return value.salary>=70000})
// const dhru=employees.filter((value)=>{return value.salary>=50000}) && employees.filter((value)=>{ return value.salary>=70000})

// .map((num)=>num<=70000 )
// console.log(dhru)

  


// // flat ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// let num = [1, 2, 3, 4,[5, 6, 7,[8, 9, 10,[11, 12, 13, 14]]]]
// let flat = num.flat(3);
// console.log(flat);
// console.log(num);

// let num = [1,3,4,[[[[4,5,]]]]]
// console.log(num.flat(4));


// const num = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
// console.log(num.flat(Infinity));


// const num =[1,3,4,5,6,[7, 8,[4,6,[34,[]]]],[7, 10,[9, 10]]];
// let result = num.flat(Infinity)
;
// console.log(result);
// console.log(num);


// const num = [1, 2, , 4, 5];
// console.log(num.flat()); 

// const num = [1, , 3, ["a", , "c"]];
// console.log(num.flat()); 

// const num = [1, , 3, ["a", , ["d", , "e"]]];
// console.log(num.flat()); 
// console.log(num.flat(2)); 



// // forEach ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// const fruits = ["mango", "banana", "apple" , "cherry", "watermalon"]
// const num = [10, 11, 12, 13]
// fruits.forEach(function(a,f,g,d,e) {
//     console.log(a,f,g,d,e);
// })

// fruits.forEach(function (item,index,arr) {
//     console.log((index+1) + ". -> " + item);
// })

// const a = num.forEach(function (item,index,arr) {
//    console.log(item + 100); 
// })


// const a = [1,23,  ,53,5]
// let val = 0;
// a.forEach(function (item) {
//     console.log(item);
//     val++
// })
// console.log(val);


// const a = [1,23, "" ,53,5]
// let val = 0;
// a.forEach(function (item) {
//     console.log(item);
//     val++
// })
// console.log(val);



// let other_fruits = [];

// for(let i=0; i<fruits.length; i++) {
//     other_fruits.push(fruits[i])
// }
// console.log(other_fruits);


// other_fruits.forEach((item) => console.log(item))
// fruits.forEach((item) => {
//     other_fruits.push(item);
//   });
//   console.log(other_fruits);

// fruits.forEach((item)=>other_fruits.push(item))
// console.log(other_fruits);

// const number = (item,index) => console.log(index + ". --> " + item);
// [2,4,6, ,3, " ",34].forEach(number)


// const words = ["one", "two", "three", "four"];
// words.forEach((word)
//  => {
//   console.log(word)
;
//   if (word === "two") {
//     words.shift(); 
//   }
// }); 
// console.log(words); 

// const items = ["bag", "pencil", "book", "bottle", "box", "chowk"]
// items.forEach((item)=>{
//     console.log(item);
//     if (item === "bottle") {
//         items.shift();
//     }
// });
// console.log(items);


// const makeFlat = (arr) => {
//     const empty = [];
//     arr.forEach((item) => {
//       if (Array.isArray(item)) {
//         empty.push(...makeFlat(item));
//       } else {
//         empty.push(item);
//       }
//     });
//     return empty;
//   };
//   const num = [1,3,4,5,6,[7, 8,[4,6,[34,[]]]],[7, 10,[9, 10]]];
//   console.log(makeFlat(num)); 



// // find ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//  const arr_obj = [{
//         name : "rudra",
//         age:18
//     },{
//         name : "jsdhfkj",
//         age : 20
//     },{
//         name : "dfkas",
//         age : 16,
//     }
//  ]

// function finder(obj) {
//     return obj.name === "rudra"
// } 
// const find1 = arr_obj.find(finder); 
// const find2 = arr_obj.find(finder).age; 
// console.log(find1);
// console.log(find2);
// console.log(arr_obj);

// const arr = [45,45,4,56,1,56,7]
// const checker = arr.find((a) => a===56);
// const index = arr.findIndex((val) => val === checker)
// console.log(arr);
// console.log(checker);
// console.log(index);

// // findIndex ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const arr = [45,45,4,56,1,56,7]
// const index = arr.findIndex((val) => val === 56)
// console.log(arr);
// console.log(index);

// // findLastIndex ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// const arr = [45,45,4,56,1,56,56,7]
// const index = arr.findLastIndex((val) => val === 56)
// console.log(arr);
// console.log(index);


// // slice ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const myFish = ["angel", "clown", "mandarin", "sturgeon", "sffd" , " fdsf"];

// const slice = myFish.slice();

// console.log(myFish);
// console.log(slice);

// const myFish = ["angel", "clown", "mandarin", "sturgeon", "sffd" , " fdsf"];

// const slice = myFish.slice(-3,1);

// console.log(myFish);
// console.log(slice);

// const myFish = ["angel", "clown", "mandarin", "sturgeon", "sffd" , " fdsf"];

// const slice = myFish.slice(-3,null);

// console.log(myFish);
// console.log(slice);

// const myFish = ["angel", "clown", "mandarin", "sturgeon", "sffd" , " fdsf"];

// const slice = myFish.slice(1,3);

// console.log(myFish);
// console.log(slice);


// // splice ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// const names = ["foo", "bar", "menu", "prakhash"]
// const edt = names.splice(2,1)
// console.log(names);
// console.log(edt);


// const names = ["foo", "bar", "menu", "prakhash"]
// const edt = names.splice(2,4,"dhf", "dkshf")
// console.log(names);
// console.log(edt);


// const myFish = ["angel", "clown", "mandarin", "sturgeon"];
// const removed = myFish.splice(2, 0, "drum", "guitar");

// console.log(myFish);
// console.log(removed);


// const myFish1 = ["angel", "clown", "mandarin", "sturgeon"];
// const removed = myFish.splice(-2, 1,"steon",myFish);
// console.log(removed);
// console.log(myFish1);


// const myFish = ["angel", "clown", "mandarin", "sturgeon", "sffd" , " fdsf"];
// const removed = myFish.splice(2);
// console.log(myFish);
// console.log(removed);


// const arr = [1, , 3, 4, , 6];
// console.log(arr.splice(1, 2));
// console.log(arr); 



//1
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
// const arr=names.map((names)=>names.first_name +" ==> "+names.last_name)
// console.log(arr)   

//2
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
// const arr1 =users.map((val)=>({
//    ...val,
//    ismature:val.age>18,
// }))
// console.log(arr1)


//3
// let arr = [1,2,3,5]
// console.log(arr[-1]); //?

//4
// const nestedArray = [
//    [1, 2, 3],
//    [4, 5, 6],
//    [7, 8, 9],
//  ];
// //  => print all items of nested array
// const arr1=nestedArray.flat(Infinity)
// console.log(arr1)

//5
// const nestedObject = {
//    name: "Vishal Kukreja",
//    age: 32,
//    address: {
//      street: "123 Mumbai fashion St",
//      city: "Midtown",
//      state: "MH",
//    },
//    hobbies: ["reading", "drawing", "gardening"],
//  };
// => print all items of this object in line 
//Output:
// Vishal Kukreja
// 32
// 123 Mumbai fashion St
// Midtown
// MH
// reading
// drawing
// gardening

// const {name,age,address,hobbies} = nestedObject;
// const arr2=[name,age,address.street,address.city,address.state,...hobbies]
// console.log(arr2.join("\n"))


 //6
// //  Write a program to check if an array contains any number (strictly) or not.
// Input:  [1,2,3] => true
// [“1”, “a”, “h”] => false
// [“a”, 3, “gh”] => true
// [“a”, ‘3df’, “gh”] => false

// function containsNumber(arr1){
//    for (const iterator of arr1) {
//      if(typeof iterator ==="number"){
//       return true;
//      }
//    }
//    return false;
// }

//  const array1 = [1, 2, 3];
//  const array2 = ["1", "a", "h"];
//  const array3 = ["a", 3, "gh"];
//  const array4 = ["a", "3df", "gh"];
 
//  console.log(containsNumber(array1)); // true
//  console.log(containsNumber(array2)); // false
//  console.log(containsNumber(array3)); // true
//  console.log(containsNumber(array4)); // false


//7
// const numbers = [1, 2, 3, 4];
// 	// => convert all number to string in given array
// const arr1=numbers.toString()
// console.log(arr1)
// console.log(typeof(arr1))

//8
// const numbers = [1, 2, 3, 4];
// const doubled = numbers.map((num, index, array) => {
//   array.push(num * 2);
//   return num * 2;
// });
// // console.log(numbers, doubled);
// console.log(numbers)
// console.log(doubled)

//10
// Get name initials
// input = "George Raymond Richard Martin"; Output: “GRRM”
// input = “george raymond Richard Martin”; Output: “ GRRM”

// const arr1="george raymond Richard Martin"

// const hay=[]
// const arr2=arr1.split(" ")
// for (const iterator of arr2) {
//   const arr3 = iterator[0].toUpperCase() 
//   hay.push(arr3)

// }
// // console.log(arr2)
// console.log(hay.join(""))

//11
// Get output like example
// input = "Every developer likes to mix kubernetes and javascript";
// output = "E3y d7r l3s to mix k8s and j8t"

// function shortenWords(sentence) {
// const words = sentence.split(" ");
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


//12
// const products = [
//    { name: "Product 1", price: 20, category: "Electronics" },
//    { name: "Product 2", price: 30, category: "Clothes" },
//    { name: "Product 3", price: 40, category: "Electronics" },
//    { name: "Product 4", price: 50, category: "Clothes" },
//    { name: "Product 5", price: 60, category: "Clothes" },
//    { name: "Product 6", price: 70, category: "Electronics" },
//    { name: "Product 7", price: 80, category: "Clothes" },
//    { name: "Product 8", price: 90, category: "Electronics" },
//    { name: "Product 8", price: 90, category: "Electronics" },

//  ];
//  Note: 2 questions
//  Que1 => output: 
//     {
//     Clothes: 4,
//     Electronics: 4
//     }
//  Que 2 => count the total average of each category price.

// const categoryCount = products.reduce((counts, product) => {
//    const category = product.category;
//    counts[category] = counts[category] || 0;
//    counts[category]++;
//    return counts;
//  }, {});
 
//  const averagePricePerCategory = Object.entries(categoryCount).map(([category, count]) => {
//    const price = products.filter((product) => product.category === category).reduce((sum, product) => sum + product.price, 0);
//    return { category, price, average: price / count };
//  });
 
//  console.log(categoryCount); // { Clothes: 4, Electronics: 4 }
//  console.log(averagePricePerCategory); // [{ category: "Clothes", price: 60, average: 15 }, { category: "Electronics", price: 100, average: 25 }]

// const arr1=products.filter((val)=>val.category=="Electronics")
// console.log(arr1)