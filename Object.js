// const source = { a: 1 };
// const target = { b: 2 };
// Object.assign(target, source);
// console.log(target);        //=>{ b: 2, a: 1 }
// console.log(source)         //=>{ a: 1 }




// const obj1 = { a: 12, b: 23 };
// const obj2 = obj1;
// const obj3 = { ...obj2 };
// obj1.c = 23;
// console.log(obj1.c, obj2.c, obj3.c);      //=>23 23 undefined
// console.log(obj1);
// console.log(obj2);
// console.log(obj3);



// const obj1 = { a: 12, b: 23 };
// const obj2 = { a: 44, b: 45 };
// const obj3 = Object.assign(obj1, obj2);
// obj2.a = 22;
// console.log(obj1, obj2, obj3);

// console.log(obj1)       //=> { a: 44, b: 45 }
// console.log(obj2)       //=> { a: 22, b: 45 }
// console.log(obj3)       //=> { a: 44, b: 45 }


// const obj1 = { a: 12, b: 23 };
// const obj2 = { a: 44, b: 45 };
// const obj3 = Object.assign(obj2, obj1);
// obj2.a = 22;
// console.log(obj1, obj2, obj3);

// console.log(obj1)
// console.log(obj2)
// console.log(obj3)


// const obj1 = { a: 77, b: 67 };
// const obj2 = { a: 90, b: 34 };
// const obj3 = Object.assign(obj1, obj2);
// obj1.a = 22;
// console.log(obj1);         //=>{ a: 22, b: 34 }
// console.log(obj2);         //=>{ a: 90, b: 34 }
// console.log(obj3);         //=>{ a: 22, b: 34 }



// const obj1 = { a: 77, b: 67 };
// const obj2 = { a: 90, b: 34 };
// const obj3 = Object.assign({}, obj1, obj2);

// obj1.a = 22;
// console.log(obj3);      //=>{ a: 90, b: 34 }
// console.log(obj1.a)      //=>22
// console.log(obj1)
// console.log(obj2)
// console.log(obj3)

// const source = { a: { b: 1 } };
// const target = {};
// Object.assign(target, source);
// console.log(target);        //=>{ a: { b: 1 } }



// const source = { a: { b: 1 } };
// const target = {};
// Object.assign(target, JSON.parse(JSON.stringify(source)));
// source.a.b = 2;
// console.log(target);        //=>{ a: { b: 1 } }


// const source = { a: 1 };
// const target = Object.assign({}, source);
// delete target.a;
// console.log(source);        //=>{ a: 1 }


// const target = { a: 1 };
// const source = { b: 2 };
// const result = Object.assign(target, source);
// console.log(result === source);      //=>false



// const target = { a: 1 };
// const source = { b: 2 };
// const result = Object.assign(target, source);
// console.log(result === { a: 1, b: 2 });
// console.log(target)



// const target = { a: 1 };
// const source = { b: 2 };
// Object.assign(target, source);
// target.b = 234;
// console.log(source);     //=>{ b: 2 }
// console.log(target)      //=>{ a: 1, b: 234 }





// const target = {};
// const source = { a: 1 };
// const result = Object.assign(target, source);
// source.a = 2;
// console.log(result);       //=>{ a: 1 }
// console.log(source);       //=>{ a: 2 }

// const target = {};
// const source = { a: { b: 1 } };
// const result = Object.assign(target, source);
// result.a.b = 2;
// console.log(source);        //=>{ a: { b: 2 } }
// console.log(result);        //=>{ a: { b: 2 } }
// console.log(target);        //=>{ a: { b: 2 } }


// const target = { a: { b: 1 } };
// const source = { a: [2, 3, 4] };
// const result = Object.assign(target, source);
// console.log(result);       //=>{ a: [ 2, 3, 4 ] }
// console.log(target);       //=>{ a: [ 2, 3, 4 ] }
// console.log(source);       //=>{ a: [ 2, 3, 4 ] }




// const target = { a: { b: 1 } };
// const source = { a: [2, 3, 4] };
// const result = Object.assign(target, source);
// target.a[2] = 90;
// console.log(result);        //=>{ a: [ 2, 3, 90 ] }
// console.log(source);        //=>{ a: [ 2, 3, 90 ] }
// console.log(target);        //=>{ a: [ 2, 3, 90 ] }


// const target = { a: { b: { c: 1 } } };
// const source = { a: { b: { d: 2 } } };
// const result = Object.assign(target, source);
// result.a.b.d = 3;
// console.log(target);         //=>{ a: { b: { d: 3 } } }
// console.log(source);         //=>{ a: { b: { d: 3 } } }
// console.log(result);         //=>{ a: { b: { d: 3 } } }              


//Write a JavaScript program to list the properties of a JavaScript object.
//Sample object:



// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 
// };

// var dhru=Object.keys(student);
// console.log(dhru)       //=>[ 'name', 'sclass', 'rollno' ]


//Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
//Sample object:

// var student = {
//     name: "David Rayy",
//     sclass: "VI",
//     rollno: 12
//   };
  
//   console.log("Object before deletion:", student);       //=>Object before deletion: { name: 'David Rayy', sclass: 'VI', rollno: 12 }

//   delete student.rollno;

//   console.log("Object after deletion:", student);        //=>Object after deletion: { name: 'David Rayy', sclass: 'VI' }






  // function operationObj(obj) {
  //   obj = {...obj, c: 12}
  // }
  // let a = {  x: 34,  y: 56 }
  // operationObj(a);
  // console.log(a);     //=>{ x: 34, y: 56 }


  // if(20>10>5){
  //   console.log("hello")
  // }
  // else{
  //   console.log("bye")
  // }
  
  // console.log(20>10>5)
  // console.log(20<10<5)
  
  // console.log( " "==" ")



  // const obj1 = { a:10 };
  // const obj2 = { b:30 };
  // const result = Object.assign(obj1, obj2);


  // function dhru(){
  //     Object.assign(obj1,obj2)
  //     return(...obj1,...obj2)
  // }

// console.log(Object.assign(false,true))
// console.log(Object.assign(5,5))




// const obj1={a:30,b:23};
// const obj2={a:40,b:20,c:80}
// const obj3=Object.assign(obj1,obj2)
//   obj2.b=50;
// console.log(obj1)
// console.log(obj2)
// console.log(obj3)


// const obj1={a:30,b:23};
// const obj2={a:40,b:20,c:80}
// const obj3=Object.assign({},obj1,obj2)
//   obj2.b=50;

// console.log(obj1)
// console.log(obj2)
// console.log(obj3)


//23.a

// let obj1 = { a: 23, b: 45 };
// let arr1 = [{ ...obj1 }];
// let arr2 = arr1;
// arr2[0].c = 5;
// console.log(arr1)
// console.log(obj1)
// console.log(arr2)


//b

// let obj1 = { a: 23, b: 45, c: { f: 990 } };
// let arr1 = [{ ...obj1 }];
// let arr2 = arr1;
// arr2[0].c = 5;
// obj1.c.f = 30;
// console.log(arr1); 


// let obj1 = { a: 23, b: 45, c: { f: 990 } };
// let arr1 = [{ ...obj1 }];
// let arr2 = arr1;
// obj1.c.f = 30;
// console.log(arr1); 


// let obj1 = { a: 23, b: 45 };
// let arr1 = Object.assign([], [{ ...obj1 }]);
// let arr2 = arr1;
// arr2[0].c = 5;
// console.log(arr1); 


// let obj1 = { a: 23, b: 45 };
// let arr1 = Object.assign([], [{ ...obj1 }]);
// let arr2 = arr1;
// arr2[0].c = 5;
// console.log(arr1); 


// let obj1 = { a: 23, b: 45 };
// let arr1 = [{ ...obj1 }];
// let arr2 = Object.assign([], arr1);
// arr2[0].c = 5;
// console.log(arr1); 
// console.log(arr2)


// let obj1 = { a: 23, b: 45 };
// let arr1 = [{ ...obj1 }];
// let arr2 = Object.assign([], [{...arr1[0]}]);
// arr2[0].c = 5;
// console.log(arr1); 


// let obj1 = { a: 34, b: 56, c: { h: 77, j: 90 } };
// let obj2 = Object.assign({}, obj1);
// let obj3 = Object.assign({ ...obj2 }, { c: { k: 44 } });
// obj2.c.h = 67;
// console.log(obj1);
// console.log(obj2);
// console.log(obj3);



// const obj1 = { a: 12, b: 23 };
// const obj2 = obj1;
// const obj3 = { ...obj1 };
// obj1.c = 23;
// console.log(obj1);
// console.log(obj2)
// console.log(obj3)



// const obj1 = { a: 12, b: 23 };
// const obj2 = { a: 44, b: 45 };
// const obj3 = Object.assign(obj1, obj2);
// obj2.a = 22;
// console.log(obj1, obj2, obj3);







