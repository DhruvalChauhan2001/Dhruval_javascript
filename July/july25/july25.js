

// var flatten = function(a, shallow,r){
//     if(!r){ r = []}
     
//   if (shallow) {
//     return r.concat.apply(r,a);
//     }
        
//      for(var i=0; i<a.length; i++){
//           if(a[i].constructor == Array){
//               flatten(a[i],shallow,r);
//           }else{
//               r.push(a[i]);
//           }
//       }
//       return r;
//   }
  
//   console.log(flatten([1, [2], [3, [[4]]],[5,6]]));
  
//   console.log(flatten([1, [2], [3, [[4]]],[5,6]],));

//   console.log(flatten([1,2,3,[9,0,5],[1,2,[3,4,[5,6,[7,8]]]]]))


// var arr = [
//     "apple",
//     "banana",
//     "cherry"
//   ];
  
//   arr = arr.concat([
//     "dragonfruit",
//     "elderberry",
//     "fig"
//   ]);
  
//   console.log(arr);


// const a=[]
//     a.push()
// console.log(a)


// var is_array = function(input) {
//     if (toString.call(input) === "[object Array]")
//       return true;
//     return false;   
//       };
//   console.log(is_array('w3resource'));
//   console.log(is_array([1, 2, 4, 0]));

// const a=[1,2,3]

// function dhru(ab){
//     const  c=typeof(ab)
// }

// // const b=typeof(a)
// // console.log(b)
// console.log(dhru([1,2,3]))


// var last = function last(array, n) {
//     if (array == null) return void 0;
//     if (n == null) return array[array.length - 1];
//     return array.slice(Math.max(array.length - n, 0));
//   };
  
//   console.log(last([7, 9, 0, -2]));
//   console.log(last([7, 9, 0, -2], 3));
//   console.log(last([7, 9, 0, -2], 2));


// a sample 2-D array 
// const a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
 
// for (const i in a) 
// {
//    console.log(`row ${i}`);
//    for (const j in a[i]) 
//      {
//       console.log(` ${a[i][j]}`);
//      }
// }


// function leap_year_range(st_year, end_year) {
//     const year_range = [];
//     for (let i = st_year; i <= end_year; i++)
//     {
//          year_range.push(i);
//     }
//     const new_array = [];

// year_range.forEach(
// year => { 
//   if (test_LeapYear(year)) 
//   new_array.push(year);
// });

// return new_array;
//  }

// function test_LeapYear(year) {
// if ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
//             return year;
//     } else {
//             return false;
//     }
// }

// console.log(leap_year_range(2000,2012));




// function Arrays_sum(array1, array2) 
// {
//   var result = [];
//   var ctr = 0;
//   var x=0;

//   if (array1.length === 0) 
//    return "array1 is empty";
//   if (array2.length === 0) 
//    return "array2 is empty";   

//  while (ctr < array1.length && ctr < array2.length) 
//   {
//     result.push(array1[ctr] + array2[ctr]);
//     ctr++;
//   }

//  if (ctr === array1.length) 
//  {
//     for (x = ctr; x < array2.length; x++)   {
//       result.push(array2[x]);
//     }
//   } 
//   else
//   {
//   for (x = ctr; x < array1.length; x++) 
//     {
//       result.push(array1[x]);
//     }
//   }
//   return result;
// }

// console.log(Arrays_sum([1,0,2,3,4], [3,5,6,7,8,13]));



// var library = [ 
//     { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
//     { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
//     { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
//     ];
 
//  function compare_to_sort(x,y) 
//   {
//    if (x.title < y.title)
//      return -1;
//    if (x.title > y.title)
//      return 1;
//    return 0;
//   }
 
//  console.log(library.sort(compare_to_sort));


// function remove_array_element(array, n)
//  {
//    var index = array.indexOf(n);
//    if (index > -1) {
//     array.splice(index, 1);
// }
//    return array;
//  }

// console.log(remove_array_element([2, 5, 9, 6], 6));



// /////////
// var arr1=[-3,8,7,6,5,-4,3,2,1];
// var arr2=[];
// var min=arr1[0];
// var pos;
// max=arr1[0];
// for (i=0; i<arr1.length; i++)
// {
//         if (max<arr1[i]) max=arr1[i];
// }

// for (var i=0;i<arr1.length;i++)
// {
//         for (var j=0;j<arr1.length;j++)
//         {
//                 if (arr1[j]!="x")
//                 {
//                         if (min>arr1[j]) 
//                         {
//                                 min=arr1[j];
//                                 pos=j;
//                         }
//                 }
//         }
//         arr2[i]=min;
//         arr1[pos]="x";
//         min=max;
// }
// console.log(arr2);
  


// const a=[]
// console.log(a.push(15))
// console.log(a.pop())

// const a=[]
//     a.push()
//     console.log(a)

// const a={a:5}
// const b=[{a:5}]

// // console.log(b.includes(a))
// const c=b.filter((e)=>b.includes(a))
// console.log(c)



