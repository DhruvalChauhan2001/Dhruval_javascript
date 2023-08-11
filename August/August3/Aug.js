let arr =[
    {type:"game",value:20},
    {type:"othar",value:25},
    {type:"audio",value:25},
    {type:"video",value:25},
    {type:"game",value:10},
    {type:"othar",value:30},
    {type:"audio",value:15},
    {type:"video",value:20},
]

// let ab=[]
// arr.forEach((item)=>{
//     let exisArray = ab.find((fin)=>fin.value === item.value)
//     if(exisArray){
//         exisArray.value += item.value
//     }
//     else{
//         ab.push({type:item.type,value:item.value})
//     }
// })
// console.log(ab)

// //////////////////// task 2
// let empty = {}
// arr.forEach((e) => {
//     let a = empty[e.type]
//     if(a){
//         empty[e.type] += e.value
//     }
//     else{
//         empty[e.type] = e.value
//     }
// })
// console.log(empty); 



///////////////
// let ab=[]
// arr.forEach((item)=>{
//     let exisArray = ab.find((fin)=>fin.value === item.value)
//     if(exisArray){
//         exisArray.value += item.value
//     }
//     else{
//         ab.push({type:item.type,value:item.value})
//     }
// })
// console.log(ab)



//////////////////// task 1
// let ab = [];
// arr.forEach((item) => {
//     let existingItem = ab.find((o) => o.type === item.type);
//     if (existingItem) {
//         existingItem.value += item.value;
//     } else {
//         ab.push({ type: item.type, value: item.value });
//     }
// });
// console.log(ab);


///////////////////////////////////
// let grouped = arr.reduce((acc, obj) => {
//     if (!acc[obj.type]) {
//       acc[obj.type] = { type: obj.type, value: 0 };
//     }
//     acc[obj.type].value += obj.value;
//     return acc;
//   }, {});

//   // Step 2: Convert the grouped objects back to an array
//   let output = Object.values(grouped);

//   console.log(output);



/////////////////////////
//  const b = arr.sort()
//  console.log(b)
// const a=[]
// const b=arr.filter((val)=>{
//     if(val.type && sort(val)){
//      return val
//     }
// })
// console.log(b)
// console.log(a)
// const b=arr.filter((val)=>{
//     if(val.type=="game"){
//         return val.value
//     }
// if(val.type=="video"){
//     return val
// }
// if(val.type=="othar"){
//     return val
// }
// if(val.type=="audio"){
//     return val
// }
// })
// console.log(b)


// //////////////////////////
// // fetch("https://something.com").then().catch().finally()


// const PromiseOne = new Promise(function(resolve,reject){
//     //Do async task 
//     //DB calls ,Crypto
//     setTimeout(function(){
//         console.log("async task is completade")
//         resolve()
//     },2000)
// })


// PromiseOne.then(function(){
//     console.log("promise consumed")
// })


// const color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
// // o = ["th","st","nd","rd"]
// // Write a JavaScript program to display the colors in the following way :
// // "1st choice is Blue ."
// // "2nd choice is Green."
// // "3rd choice is Red."
// //////////////////
// Write a JavaScript function to sort the following array of objects by title value.
// Sample object :

// var library = [ 
//    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
//    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
//    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
//    ];

// const b =library.map((val)=> (val.title).sort())
// console.log(b)

// Expected result :

// [[object Object] {
//   author: "Suzanne Collins",
//   libraryID: 3245,
//   title:"Mockingjay:The Final Book of The Hunger Games"
// }, [object Object] {
//   author: "Bill Gates",
//   libraryID: 1254,
//   title: "The Road Ahead"
// }, [object Object] {
//   author: "Steve Jobs",
//   libraryID: 4264,
//   title: "Walter Isaacson"
// }]

