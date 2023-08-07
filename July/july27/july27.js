
// const a= [1,2,3,4,5]
// const b= a

// console.log(a==b)

// const a=2
// const b=2

// console.log(a==b)


// let arr =[1,1,1,1,2,3,4,5,6,888,888,67,67,4,4,2,1,30,60,20,20]

// let uniq= [...new Set(arr)]
// console.log(uniq)

/////1
// const revint =(num)=>{
//     let mynum =num.toString().split("").reverse().join("")
//     console.log(mynum)
// }

// revint(12345)

/////2
// const a=[1,2,3,2,1,4]
// const b=[2,3,3,3,4]

// const ab=a.filter((val)=>b.includes(val))
// console.log(ab)

// let uniq= [...new Set(ab)]
// console.log(uniq)


///3

// let num = 5

// for(let i = num;i>1;){
//     i=i-1
//     var factorial  =num*i
//         num=factorial
        
// }
// console.log(factorial)

///
// let num = 5;
// for(var fact=1;num>1;num--){
//     fact=fact*num
   
// }
// console.log(fact)


// input = "Every developer likes to mix kubernetes and javascript";
// output = "E3y d7r l3s to mix k8s and j8t"

// const contant ="Every developer likes to mix kubernetes and javascript";

// // const a=contant.split(" ")
// // const c=a.forEach((val)=>console.log(val.slice(0,1),val.length -2,val.slice(-1)))
// // const d=toString(c)

// function dhru(value){
//     const a=contant.split(" ")
//     const c=a.map((val)=>console.log(val.slice(0,1),val.length -2,val.slice(-1)))
   
   
// }
// // dhru(contant)
// dhru(contant)

// const input = "George Raymond Richard Martin";// Output: “GRRM”

// function dhru(value){
//     const a=value.split(" ")
//     const b=a.map((val)=>console.log(val.slice(0,1)))

// }
// dhru(input)

 // for (const iterator of value) {
    //     const a=iterator.split(" ")
    //     const c=iterator.slice(0,1)
    //     const d=iterator.length -2
    //     const e=iterator.slice(-1)

    //     return a,c,d,e
    // }





// const d=a.forEach((val)=>console.log(val.length -2 ))
// const b=a.forEach((val)=>console.log(val.slice(-1)))
// const d=a.forEach((val)=>console.log(val.length -2))

// const db=c.join(d)

// function dhru (data){
//     const a=data.forEach((val)=>console.log(val.slice(0,1)))
//     const b=data.forEach((val)=>console.log(val.slice(-1)))
//     const d=data.forEach((val)=>console.log(val.length -2))
//     return a+d+b
// }

// dhru(contant)

/////

const  input = "Every developer likes to mix kubernetes and javascript";
   ////output = "E3y d7r l3s to mix k8s and j8t"

function dhru(value){
        const a=value.split(" ")
        const c=a.map((val)=>
       { if (val.length>3) {
              return val.at(0)+(val.length -2)+val.at(-1)
        }else{
            return val;
        }
    })
        return c.join(" ");
    }
// dhru(input)
console.log(dhru(input))