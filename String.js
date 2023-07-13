// var a ="Dhruval chauahan"
// var b=a.length
// console.log(b)



// var a ="Dhruval chauahan";
// var b=a.toLowerCase();
// console.log(b)  //=>dhruval chauahan


// var a ="Dhruval chauahan";
// var b=a.toUpperCase();
// console.log(b)  //=>DHRUVAL CHAUAHAN


// var a ="Dhruval chauhan";
// var b=a.includes("chauhan")
// console.log(b)  //=>true

// var a ="Dhruval chauhan";
// var b=a.includes("chauhan")
// console.log(b)  //=>true


// var a ="Dhruval chauhan";
// var b=a.replace("chauhan","jai")
// console.log(b)  //=>Dhruval jai


// var a="dhruval"
// var b="chauahn"
// var d="hey"
// var c=a.concat(" ",d," ",b," jai");
// console.log(c)

// var dhru="hello my name is dhruval";
// var b=dhru.slice(6,18)

// console.log(b)   //=>my name is d


// var a="hello my name is dhruval";
// var b=a.substring()


// var a=[1,2,3,4];
// var b=[5,6,7,8];
// // var c=a.concat(b);

// //second way 
// var c=[...a,...b]
// console.log(c)


// var dhru="chauahan dhruval"
// // console.log(dhru.split(" "))
// var jai=dhru.

// let text = "hello my name is Dhruval";
// let jai = text.padStart(23,"*");

// console.log(jai)


// let text = "hello my name ";
// let b=text.length
// console.log(b)
// let jai = text.padStart(16,"*");

// console.log(jai)


// const items = ['apricot', 'banana', 'cherry'];

// for (let i = items.length - 1; i >= 0; i -= 1) {
//   console.log(`${i}. ${items[i]}`);
// }

// const items = ['apricot', 'banana', 'cherry'];

// for (let i = items.length - 1; i >= 0; i -= 1) {
//   console.log(`${i}. ${items[i]}`);
// }

// let abc = {a:10,b:15}
// let a=20;
// let {a:db,b}=abc;
// console.log(a)
// console.log(db)
// console.log(abc)


// let abc = {a:10,b:20}
// let a=15;
// let {a:db,b}=abc;
// console.log(a)
// console.log(db)
// console.log(abc)

// var name="dhruval chauahan";
// var b=name.substring(-2,2)
// console.log(b)


// for (let i = 0; i <=4; i += 1) {
//     console.log(i);
//   };

// 



//Which string method is used to determine the length of a string?

// var a="dhruval"
// var b=a. length
// console.log(b)  //=>7

//How would you convert a string to uppercase using a string method?

// var a="dhruval"
// var b=a.toUpperCase()
// console.log(b)      //=>DHRUVAL

//Which method is used to find the position of a specified value within a string

// var a="dhruval"
// var b=a.indexOf("v")
// console.log(b)      //=>4

//How would you concatenate two strings using a string method?

// var a="dhruval"
// var b="chauahan"

// var c=a.concat(b);
// console.log(c)      //=>    dhruvalchauahan


//Which method would you use to extract a specific portion of a string?

// var a="dhruval chauhan"
// var b=a.slice(8,15)
// console.log(b)       //=>chauhan

//How can you replace a specific value with another value within a string using a method?

// var a="dhruval chauhan ";
// var b=a.replace("chauhan","jai");
// console.log(b)      //=>dhruval jai

//Which method would you use to split a string into an array of substrings based on a specified separator?
// var a="dhruval chauhan";
// var b=a.split("")

// console.log(b)      
//=>                        [
//                         'd', 'h', 'r', 'u',
//                         'v', 'a', 'l', ' ',
//                         'c', 'h', 'a', 'u',
//                         'h', 'a', 'n'
//                         ]

//How would you remove leading and trailing whitespace from a string using a method?

// var a="      dhruval      jai     ";
// var b=a.trim()
// console.log(b)       //=>dhruval      jai

//Which method is used to search for a specified pattern and return the first occurrence in a string?

// var a="dhruval jai hardik"
// var b=a.search("jai");

// console.log(b)         //=>8

//second way

// var a="dhruval jai hardik"
// var b=a.indexOf("jai");

// console.log(b)         //=>8

//How can you check if a string starts with a specific value using a string method?

// const a= 'Hello World!';

// const b= a.startsWith('Hello');
// console.log(b); // Output: true

// const a= 'Hello World!';

// const b= a.startsWith('jai');
// console.log(b); // Output: false

//const message = "Hello, World!";
// console.log(message.length);


// const message = "Hello World!";
// console.log(message.length);  //=>12


// const str = "HelloWorld";
// console.log(str.toLowerCase());

// const sentence = "I love JavaScript!";
// console.log(sentence.indexOf("JavaScript"));

// const sentence = "I love JavaScri9pt!";
// console.log(sentence.indexOf(9));

// const name = "John";
// const greeting = `Hello, ${name}!`;
// console.log(greeting);

// const text = "Hello World!";
// console.log(text.substring(9,2));

//first perametar index number and second perametar number(NOT accept NAGETIVE value -1 take defold 0 )

// const message = "Hello, World!";
// console.log(message.replace("World", "Universe"));

// const words = "apple, banana, orange";
// const fruits = words.split(", ");
// console.log(fruits);

// const text = "   Hello, World!   ";
// console.log(text.trim());

// const text = "   Hello,       World!   ";
// console.log(text.trim());

// const str = "Hello, World!";
// console.log(str.endsWith("World!"));  //=>true


// const sentence = "JavaScript is fun!";
// console.log(sentence.charAt(12));    //=>s

// const str1 = "Hello";
// const str2 = "World";
// console.log(str1.concat(",jai ", str2));


// const sentence = "JavaScript is awesome!";
// console.log(sentence.slice(0, -3));

// const sentence = "JavaScript is awesome!";
// console.log(sentence.slice(-7, -6));  //=>w

// const text = "Hello, World!";
// console.log(text.repeat(3));       //=>Hello, World!Hello, World!Hello, World!


// const sentence = "The quick brown fox";
// console.log(sentence.split(" "));


// const str = "Hello, World!";
// console.log(str.indexOf("o"));

// const sentence = "JavaScript is fun!";
// console.log(sentence.substring(4, 9));

// const text = "Hello, World!";
// console.log(text.charAt(1));


// const sentence = "I love JavaScript!";
// console.log(sentence.split("o"));


// const str = "Hello, World!";
// console.log(str.includes("World"));

// const sentence = "JavaScript is cool!";
// console.log(sentence.lastIndexOf("o"));


// const text = "Hello, World!";
// console.log(text.startsWith("Hello"));

// const str = "Hello, World!";
// console.log(str.toUpperCase());

// const sentence = "JavaScript is awesome!";
// console.log(sentence.toLowerCase());

// const str = "Hello, World!";
// console.log(str.charAt(12));

// const sentence = "JavaScript is fun!";
// console.log(sentence.substr(4, 10));

// const text = "Hello, World!";
// console.log(text.includes("WORLD"));       //=>false

// const sentence = "JavaScript is amazing! amazing";
// console.log(sentence.replace("amazing", "awesome"));


// const str = "Hello, World!";
// console.log(str.charCodeAt(4));


// const sentence = "JavaScript is powerful!";
// console.log(sentence.split(" ").length);

// const text = "Hello, World!";
// console.log(text.search("W"));


// const sentence = "JavaScript is dynamic!";
// console.log(sentence.slice(-7));


// const str = "Hello, World!";
// console.log(str.concat(" Goodbye!"));

// const sentence = "JavaScript is flexible!";
// console.log(sentence.charAt(sentence.length - 1));

// const sentence = "JavaScript is interesting!";
// console.log(sentence.substring(10));

// const str = "Hello, World!";
// console.log(str.search("World"));

// const sentence = "JavaScript is versatile!";
// console.log(sentence.split(" ").reverse().join(" "));

// const sentence = "JavaScript is versatile!";
// console.log(sentence.split(" ").reverse());

// const sentence = "JavaScript is versatile!";
// console.log(sentence.split(" ").join(" "));


// const sentence = "JavaScript is powerful!";
// console.log(sentence.substring(4, 10));

// const str = "Hello, World!";
// console.log(str.charCodeAt(0));

// const sentence = "JavaScript is amazing!";
// console.log(sentence.slice(4, 10));

// var a="dhruval"
// var b=a.length;
// console.log(b)


// const text = "Hello, World!";
// console.log(text.indexOf("o", 5));

//5 ke baad vala o accept karega


// const sentence = "JavaScript is fun!";
// console.log(sentence.startsWith("Java"));

// const str = "Hello, World!";
// console.log(str.endsWith("!"));

// const sentence = "JavaScript is amazing!";
// console.log(sentence.lastIndexOf("a", 12));

// 12 ke phle wala accept karega in last index 


// const text = "Hello, World!";
// console.log(text.indexOf("o", 5));

//5 ke baad vala o accept karega in index of 


// const text = "Hello, World!";
// console.log(text.substring(2, 8));

//  8 and 2 are swipe olwayes increment way


// const sentence = "JavaScript is cool!";
// console.log(sentence.concat(" I love it!"));

// const str = "Hello, aorld!";
// console.log(str.toUpperCase().charAt(7));

// const sentence = "JavaScript is amazing!";
// console.log(sentence.replace("amazing", "awesome").toUpperCase());


// var ab="hello world"
// ab.replace("world"," ")

// console.log(ab)


// let obj1={a:15,b:20}
// let obj2={a:20}
// // console.log(obj1.a)
// let obj3=Object.assign(obj1,obj2)

//     obj1.a=30
//     console.log(obj3.a)
//     console.log(obj1.a)


// let obj1={a:12,b:30}
// let obj2=Object.assign({a:90},obj1)
// // console.log(obj2.a)

// obj1.a=89
// console.log(obj2.a);


// function addOffset(match, ...args) {
//     const hasNamedGroups = typeof args.at(-1) === "object";
//     const offset = hasNamedGroups ? args.at(-3) : args.at(-2);
//     return `${match} (${offset}) `;
//   }
  
//   console.log("abcd".replace(/(bc)/, addOffset)); // "abc (1) d"
//   console.log("abcd".replace(/(?<group>bc)/, addOffset)); // "abc (1) d"
  


// const source = { a: 1 };
// const target = { b: 2 };
// Object.assign(target, source);
// console.log(target);


// let obj1={name:"dhruval",lname:"chauhan",age:20}
// let obj2={name:"yesh",age:30}
// let obj3=Object.assign({},obj1,obj2)
// console.log(obj3)



// let obj1={a:15,b:20}
// let obj2={a:20}
// let dhru=Object.assign(obj1,obj2)

//     obj1.a=30
//     console.log(dhru)
//     console.log(obj1)
//     console.log(obj2)
    // console.log(obj3.a)
    // console.log(obj1.a)


    // Write a JavaScript function to check whether an 'input' is a string or not.
    // Test Data :

    // function is_string(input) {
    //     return typeof input === 'string';
    //   }

    // console.log(is_string("8dhru")); // true
    // console.log(is_string([1, 2, 4, 0])); // false

    // Write a JavaScript function to check whether a string is blank or not.
    // Test Data :

    // function is_Blank(str) {
    //     return str.trim().length === 0;
    //   }

    // console.log(is_Blank('')); // true
    // console.log(is_Blank('abc')); // false

    // Write a JavaScript function to split a string and convert it into an array of words.
    // Test Data :

    // function string_to_array(str) {
    //     return str.split(' ');
    //   }

    // console.log(string_to_array("Robin Singh")); // ["Robin", "Singh"]


    // Write a JavaScript function to extract a specified number of characters from a string.
    // Test Data :

    // function truncate_string(str, num) {
    //     return str.slice(0, num);
    //   }
      
    // console.log(truncate_string("Robin Singh",4)); // "Robi"

   // Write a JavaScript function that hides email addresses to prevent unauthorized access.
   // Test Data :

//    function protect_email(email) {
//     var parts = email.split('@');
//     var username = parts[0];
//     var domain = parts[1];
//     var hiddenUsername = username.slice(0, 4) + '...';
//     return hiddenUsername + '@' + domain;
//   }


//     console.log(protect_email("robin_singh@example.com"));  //=>robi...@example.com
    


    
    //Write a JavaScript function to parameterize a string.
   // Test Data :

//    function string_parameterize(str) {
//     return str.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '-').replace(/^-+|-+$/g, '');
//   }

//     console.log(string_parameterize("Robin Singh from USA."));
//     Output: "robin-singh-from-usa"


//Write a JavaScript function to capitalize the first letter of a string.
//Test Data :

// function capitalize(str) {
//     return str.charAt(0).toUpperCase() + str.slice(1);
//   }

// console.log(capitalize('js string exercises'));
// Output: "Js string exercises"


// Write a JavaScript function to capitalize the first letter of each word in a string.
// Test Data :

// function capitalize_Words(str) {
//     var words = str.split(' ');
//     for (var i = 0; i < words.length; i++) {
//       words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
//     }
//     return words.join(' ');
//   }
  
// console.log(capitalize_Words('js string exercises'));
// "Js String Exercises"


// Write a JavaScript function to insert a string within a string at a particular position (default is 1).
// Test Data :



// function insert(str, insertStr, position = 1) {
//     return str.slice(0, position) + insertStr + str.slice(position);
//   }


// console.log(insert('We are doing some exercises.'));
// console.log(insert('We are doing some exercises.','JavaScript '));
// console.log(insert('We are doing some exercises.','JavaScript ',18));
// Output: "We are doing some exercises."   
// "JavaScript We are doing some exercises."
// "We are doing some JavaScript exercises.”

























