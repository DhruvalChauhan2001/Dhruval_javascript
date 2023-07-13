// var n=2;
// function square(num){
// var ans = num * num;
// return ans;
// }
// var square2 = square(n);
// var square4 = square(4);

// console.log(n)
// console.log(square)
// console.log(square2)
// console.log(square4)

// var a="dhruval"
// console.log(a)

// // console.log(a);
// // var a="pppppp";

// {
//     console.log(a);
//     var a="dhruval";

//     console.log(b)
//     var b="jai"
// }
// ab()
// bcd()

// function ab(){
//     var a="dhruval";
//     console.log(a)

// }
// function bcd(){
//     var b="chauhan";
//     console.log(b)
// }

// b="dhruval"
// console.log(b)

// num =5;
// console.log(num);
// var num;

// console.log(num)
// var num=5


// let x=18
// console.log(x)

// console.log(x); // Output: undefined
// var x = 10;
// console.log(x); // Output: 10

// Function declaration
// foo(); // Output: "Hello"
// // console.log(b);
// function foo() {
//     // console.log(b);
//     var b="dhruval";
//     console.log(b)
    
   
// }

// console.log(c)
// var c=12345



// var name=90000;

// {
//     console.log(name)
//     name=30
// }
// {
//     name=90
// }
// console.log(name)


// var obj1={
//     "name jai":"dhruval",
//     age:90,
//     dhruval:["dhru",1,2,3,8.9],
//     jai:{"f name":"yess",lname:"byyy"}



//    obj2:{
//         firstname:"chauhan",
//         lastname:"jai", 
//     }
// }

// console.log(obj1)
// console.log(obj1.dhruval)
// console.log(obj2)
// obj1.dhruval;
// console.log(obj1)

// console.log(obj1.dhruval)

// console.log(obj1.jai.lname)
// console.log(obj1.jai["f name"])
// console.log(obj1["name jai"])


// arr=["dhruval",9,obj={name:"hello",age:90}]

// console.log(arr[2].age)

// arr=[
//     {
//         name:"dhruval",
//         roll_number:"1"
//     },
//     {
//         name:"jai",
//         roll_number:"2",
//     }
// ]

// console.log(arr)
// console.log(arr[0])
// console.log(arr[1].roll_number)



// var student ={
//     name:"dhruval",
//     class:90,
//     all_round:true,
//     arr1:["rita","rahul"]
// }
// console.log(student.arr1)



// arr=[
//     jai={
//             name:"dhruval",
//             roll_number:"1"
//         },
//         {
//             name:"jai",
//             roll_number:"2",
//         }
//     ]

// console.log(arr[0])
// console.log(arr[1])



// const myObj = {
//     name: "John",
//     age: 30,
//     cars: [
//       {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
//       {name:"BMW", models:["320", "X3", "X5"]},
//       {name:"Fiat", models:["500", "Panda"]}
//     ]
//   }

//   console.log(myObj.cars[2])


// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     id: 5566,
//     fullName: function() {
//       return this.firstName + " ggg " + this.lastName;
//     }
//   };

//   console.log(person.fullName())


// const myList = [ ];
// var dhru = myList.toString
// console.log(dhru)

// console.log("hello")


// var a="dhruval";
// var b="chauhan";
// console.log(a)

// function dhru(){

//     a=20;
//     b=30;
//     console.log(a)
//     console.log(b)
// }

// dhru();


// const arr1=[1,2,3,4];

// const arr2=[].concat(arr1);

// arr2.push(90);

// console.log(arr1)
// console.log(arr2)

// var a=10;
// console.log(a)
// var a=20

// var a= new Object();
// a.fname="ram";
// a.lname="chauahan";
// a.age=90;

// // console.log(a);
// console.log(a.age=900)

// var a="anil";
// var b=a;
// b="dhruval";
// console.log(b)

// console.log(null===undefined)


            // var a = 33;
            // var b = 10;
            // var c = "Test";
            // // var linebreak = "<br />";
         
            // console.log("a + b = ");
            // result = a + b;
            // console.log(result);



            // let person = {
            //     firstName: 'John',
            //     lastName: 'Doe',
            //     address: {
            //         street: 'North 1st street',
            //         city: 'San Jose',
            //         state: 'CA',
            //         country: 'USA'
            //     }
            // };
            
            
            // let copiedPerson = JSON.parse(JSON.stringify(person));
            
            // copiedPerson.firstName = 'Janeeeeeeee'; // disconnected
            
            // copiedPerson.address.street = 'Amphitheatre Parkway';
            // copiedPerson.address.city = 'Mountain View';
            
            // console.log(person);
            // console.log(copiedPerson);


            // let person = {
            //     firstName: 'John',
            //     lastName: 'Doe',
            //     address: {
            //         street: 'North 1st street',
            //         city: 'San Jose',
            //         state: 'CA',
            //         country: 'USA'
            //     }
            // };
            
            
            // let copiedPerson = Object.assign({}, person);
            
            // copiedPerson.firstName = 'Janee'; // disconnected
            
            // copiedPerson.address.street = 'Amphitheatre Parkway'; // connected
            // copiedPerson.address.city = 'Mountain View'; // connected
            
            // console.log(person);
            // console.log(copiedPerson);


            // let a=0;
            // let b=a||10;
            // console.log(b)
            
            // let a=null;
            // let b=NaN ?? 10;
            // console.log(b)


            // function createFunction2() {
                
            //     function f() {
            //         var x = 20;
            //       return x; // this `x` refers to the local `x` above
            //     }
            //     f();
            //   }

            //   createFunction2();


            // var x = 10;

            // function createFunction1() {
            // const x = 20;
            // console.log(x)
            // return new Function("return x;"); // this `x` refers to global `x`
            // }

            // createFunction1()
            // console.log(x)
 

            // console.log(2+5*"10")

            // const a = function hey() {
               
            // };
            // a.displayName = "MyFunction";
            // console.log(a)

            // a; // function MyFunction()
            // hey();

            // 
            

        // // Arrow functions with a single parameter 
        // const checkWeight = (weight) => { 
        // console.log(`Baggage weight : ${weight} kilograms.`); 
        // }; 
        // checkWeight(25); 

        // const printHello = () => { 
        //     console.log('hello');
        // };
        // printHello();


        // // Named function
        // function rocketToMars() {
        // console.log("BOOM!");
        // }
        // rocketToMars()
  
        // Anonymous function
        // const rocketToMars = function() {
        // console.log("BOOM!");
        // }
        // b=rocketToMars
        // console.log(b)


        // const rocketToMars = function() {
        //     console.log( 'BOOM!');
        //   }
        //   rocketToMars()

        // function sum(a,b){
        //     // return a+b;
        //     console.log(a+b)
        // }

        // // console.log(sum(5,2))
        // sum(3,"dhru")

        // console.log( 5 + 4 * 2)
        // console.log(10 - 2 / 4 )
        // console.log(0.5-10)
        // console.log(2/4)
        // console.log(3 * (2 + 4))
        // console.log(8 / (2 + 2))
        // console.log(15 % 4 )
        // console.log(15 % 4 + 2)
        // console.log( 20 / 4  )
        // console.log( 20 / 4 - 2 )
        // console.log(2 + 3 * 4 / 2)
        // console.log(  2 ** 2)
        // console.log( 4/ 2 ** 2)
        // console.log((10 + 2) / 3)
        // console.log(12/3)
        // console.log( 6 * 2 % 4)
        // console.log(  12 % 4)
        // console.log( 6 * 2)
        // console.log( 2 ** 3 )
        // console.log( 3 ** 2)
        // console.log( 2 ** 3 ** 2)
        // console.log((4 + 2) ** 3)
        // console.log( 2 + 3 * 4 ** 2)
        // console.log(6 * (2 + 4) / 3)
        // console.log(NaN || null)
        // console.log(null || NaN)
        // console.log(false ? 1 : 0)
        // console.log(null !== undefined ? "Different" : "Same" )
        // console.log(10 > 5 ? "Greater" : "Less")
        // console.log(undefined === null ? "Equal" : "Not equal")
        // console.log(0.5 ? "True" : "False")
        // console.log( "" ? "Object" : "Not object")
        // console.log( {} ? "Object" : "Not object")
        // console.log([1, 2] ? "Exists" : "Not exists")
        // console.log( [12,2] ? "NotEmpty" : "Empty")
        // console.log( [] ? "NotEmpty" : "Empty")
        // console.log(NaN ? "Valid" : "Invalid")
        // console.log(null ? "Valid" : "Invalid")
        // console.log(8 ? "Valid" : "Invalid")
        // console.log(undefined ? "Valid" : "Invalid")
        // console.log( "" ? "Truthy" : "Falsy")
        // console.log( "90" ? "Truthy" : "Falsy")
        // console.log( 0 ? "Truthy" : "Falsy")
        // console.log( 10 ? "Truthy" : "Falsy")
        // console.log(1 < 0 ? "True" : "False")
        // console.log(1 > 0 ? "True" : "False")
        // console.log( 'a' == 'b' ? "Different" : "Same")
        // console.log( 'a' !== 'b' ? "Different" : "Same").
        // console.log(undefined ? "Defined" : "Undefined")
        // console.log(null ? "NotNull" : "Null")
        // console.log(false ? "Hello" : "World")
        // console.log(10 === 10 ? "Equal" : "Not equal")
        // console.log(3 > 5 ? "Greater" : "Less")
        // console.log(false ? 10 : 5)
        // console.log( true ? "Yes" : "No")
        // console.log("hello" && 10)
        // console.log(false || "false1")
        // console.log(null && undefined)
        // console.log(0 && false)
        // console.log(false && undefined);
        // console.log(NaN || "")
        // console.log( "" && 10)
        // console.log(10 || "number")
        // console.log(undefined && "undefined1")
        // console.log(undefined ?? "undefined1")
        // console.log(undefined || "undefined1")
        // console.log(NaN || null)
        // console.log(null ?? undefined)
        // console.log(null ?? null)
        // console.log(0 && true)
        // console.log(true && 0)
        // console.log(false && 0)
        // console.log(0 && false)
        // console.log( "hello" || 0)
        // console.log( false && "false12")
        // console.log( null || undefined)
        // console.log( NaN && "value")
        // console.log("" || 0)


        // console.log(10 && "number")
        // console.log(0 && false)
        // console.log(0 && true)
        // console.log(undefined && "undefined1")
        // console.log("undefined1" && undefined)
        // console.log( "" && 10)
        // console.log(undefined && null )
        // console.log(null && true)
        // console.log( "hello" && 0)


        // console.log(NaN || "value")
        // console.log("value"|| NaN)
        // console.log( "" || "world")
        // console.log(10 * 2 / 5 + Math.pow(2, 3) - 4 % 3)
        // console.log(4 % 3)
        // console.log(10 * 2)
        // console.log( Math.pow(2, 3))


        // console.log(6 - Number("1.2"))
        // console.log(String(1.2) + "0.5")
        // console.log(8 / Number("2.5"))

        // console.log( 3.5 * Number("2"))
        // console.log( 3 * Number("2"))

        // console.log( 10 - Number("2.5"))
        // console.log( 10 - Number("25"))
        // console.log( "7" + String(2.5))
        // console.log(9.8 / Number("2") )
        // console.log(4/ Number("2") )
        // console.log(1.5 * Number("3.2"))
        // console.log(1 * Number("3"))
        // console.log(4 - Number("hello"))
        // console.log( Number("2.5") + 1.8)
        // console.log("10" % "3" )
        // console.log("15" / "5")
        // console.log("10" * "2")
        // console.log("7" - "2")
        // console.log("5" + "3")
        // console.log(Number("5")+Number("3"))
        // console.log( 6 * (2 + 4) % 3 + 1 - 2)
        // console.log(6%3)
        // console.log(-1*6)
        // console.log( 2 + (3 * 4 ** 2) / 2 - 3)
        // console.log((4 + 2) ** 3 + 1)


        // var a=(a,b)=>{
        //  console.log(a+b);
        //    return a-b;


        // }
        // console.log(a)
        // a(5,4)
        

        // function dhru(a,b){
        //     c=a+b
        //   return c;
        // }
        // var d= dhru(4,5);
        // console.log(d)

        // function dhru(){
        //     console.log("helloooooo")
        // }
        // var c=dhru()
        // dhru()
        // // console.log(c)

        // console.log("hello",5+3)
        // console.log("hello"+5+3)

        //Write the syntax for declaring a JavaScript function called sayHello that doesn't take any parameters and doesn't return any value.

        // function dhru(){
        //     console.log("hello")
        // }
        // dhru()

        //What is the syntax for declaring a JavaScript function called calculateSum that takes two parameters num1 and num2, and returns their sum? (write all four types of functions as we discussed in session)

        //with argument with return keyword
        // function sum(num1,num2){
        //     c=num1+num2
        //     return c;
        // }
        // console.log(sum(5,3))    => 8

        //argument without return

        // function sum(num1,num2){
        //     c=num1+num2
        //     console.log(c)          //=>7
        // }
        // console.log(sum(5,2))      //=> undefined

        // function dhru(){
        //     var a;
        //     var b;
        //     var c = a+b
        //     return c;
        // }
        // var d =dhru(4,5)
        // console.log(d)

        
        // console.log(b)
        // Var=b="dhruval";

        const a={b:10};
        const arr=[a]
        console.log(arr[0])
        a.b=15;
        console.log(arr[0])

        // var a={name:"dhruval",
        //         lname:"chauahan"}
        // console.log(typeof(a))