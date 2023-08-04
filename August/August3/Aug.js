let arr =[
    {type:"game",value:25},
    {type:"othar",value:25},
    {type:"audio",value:25},
    {type:"video",value:25},
    {type:"game",value:10},
    {type:"othar",value:30},
    {type:"audio",value:15},
    {type:"video",value:20},
]

////////////////////
let output = [];

arr.forEach((item) => {
    let existingItem = output.find((o) => o.type === item.type);
    if (existingItem) {
        existingItem.value += item.value;
    } else {
        output.push({ type: item.type, value: item.value });
    }
});

console.log(output);


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