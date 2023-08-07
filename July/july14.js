// const a = [{id:1,slot:[{dose:" "}, {dose:"hi"}]},
//             {id:2,slot:[{dose:"hai"}, {dose:"hi"}]}]

// for (const key in a) {
//     const b=Object.values(key)
//     console.log(b)
// }



// const isEmpty = (obj) => {
//     for (const key in obj) {
//       if (obj[key] !== " ") {
//         return false;
//       }
//     }
//     return true;
//   }
  
//   console.log(isEmpty(a[0])); // true
//   console.log(isEmpty(a[1])); // false


// const a=[1,2,3,4,5,6]

// for (const iterator of a) {
//     console.log(iterator)
// }

// const b={name:"jai",sname:"chauhan",age:20}

// for (const iterator in b) {
//     console.log(Object.values(b))
// }

// const a="hello welcome"

// for (const iterator of a) {
//     console.log(typeof(iterator))
// }

// var a;
// console.log(typeof(a))

// const c={name:"jai",sname:"chauhan",age:20}



// const a = [{id:1,slot:[{dose:" "}, {dose:"hi"}]},
//             {id:2,slot:[{dose:"hai"}, {dose:"hi"}]}]

// const b=a.forEach((val)=>{
//    if(val.slot.dose==" "){
//     return true
//    }
//    else{
//     return false
//    }
// })
// console.log(b)


// const b =[
//     {name:"dhru"},
//     {sname:"chauhan"},
//     {age:30}
// ]

// b.forEach((val)=>{
//     console.log(val.sname)
// }
// )

// const arr=[
//     {language:"javascript",
//     lanfillname:"js"},
//     {language:"python",
//     lanfillname:"py"},
//     {language:"C++",
//     lanfillname:"c"},
// ]

// arr.forEach((val)=>{
//       console.log(val.language)
// })

// const arr =[1,2,3,4,5,6]

// const b=arr.map((val,ind)=>val+10 +" "+ ind )
// console.log(b)


//9
// function Operation(obj){
//     obj.z={...obj,c:12}
// }
// let a={x:34,y:56};
// console.log(a)   //{ x: 34, y: 56 }

//11
// const target ={a:1};
// const sourece ={b:2};
// const result = Object.assign(target,sourece)
// console.log(result===target)  //=>true

//12
// let text =[{a:34},{a:45},{a:5},{a:2}];
// text && (text=text.map(an =>{an.a=2}));
// console.log(text);      //=>[ undefined, undefined, undefined, undefined ]


//14
// var animal = {weight:23,sound:"woof"};
// function makeSound(Options){
//     var species = Options.species || "animal";
//     var sound =Options.sound;
//     return("The"+species+"says"+sound+"!");
// }
// console.log(makeSound(animal));      //=>Theanimalsayswoof!

//15
// const names =["10","150","56","1","4","55","67"]
// function dhru(value){
//     var b=value.sort((a,b)=>b-a)
//     console.log(b)
// }
// dhru(names)

//16
// let arr = [1,2,3];
// let arr2=[100,2,1,10];

// let c=[...new Set([...arr,...arr2])]
//     c.sort((a,b)=>a-b)
// console.log(c)


// var a=[1,2,3];
// var b=[100,2,1,10];
// var c=a.concat(b)
// var res=c.filter((value,pos) => {return c.indexOf(value) == pos;} );
//     res.sort((a,b)=>a-b)

// console.log(res)


//19
const a="as4dj1as2asd3n";
const b=a.split("")
const c=[]
b.map((element) =>(typeof(element==Number)));
console.log(b)
console.log(c)


