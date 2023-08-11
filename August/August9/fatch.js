
////////////////// API demo

// let p =fetch("https://goweather.herokuapp.com/weather/Ny")

// p.then((value1)=>{
//     console.log(value1.status)
//     console.log(value1.ok)
//     return value1.json()
// }).then((value2)=>{
//    console.log(value2)
// })

////////////////////////////////


// function resolveAfter2Seconds() {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve('resolved');
//       }, 2000);
//     });
//   }
  
//   async function asyncCall() {
//     console.log('calling');
//     const result = await resolveAfter2Seconds();
//     console.log(result);
//     // Expected output: "resolved"
//   }
  
//   asyncCall();
  

//////////////


// const data =[
//   {name:"dhruval",age:3},
//   {name:"jai",age:2},
//   {name:"raj",age:1},
// ]

// function getdata(){

//   setTimeout(()=>{
//     let output =""
//     data.forEach((data,index)=>{
//       output +=`<li>${data.name}</li>`
//     })
//     document.body.innerHTML=output
//   },3000)
// }

// getdata()

//////////////////// afeter 5 sec

// async function delay() {
//   await new Promise(resolve => setTimeout(resolve, 5000));
//   console.log("After 5 seconds");
//   dhru()
// }

// delay();

// async function dhru() {
//   await new Promise(resolve => setTimeout(resolve, 5000));
//   console.log("After 10 seconds");
 
// }

////// dhru();

///////////////////////

// function wait2(){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       resolve("wait 2 second please")
//     },2000)
//   })
// }

// function wait4(){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       resolve("wait 4 second please")
//     },2000)
//   })
// }

// async function dhru(){
//   const a = await  wait2()
//   const b = await   wait4()
// }
// // dhru()
// console.log(dhru())