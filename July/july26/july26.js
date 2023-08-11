

// const a= {a:5}
// const b=[{a:5}]

// const c=b.includes(a)
// console.log(c)

////
// const a=[]
// console.log(a.push(15))
// console.log(a.push(33))
// console.log(a.pop(15))


////
// function twoSum(nums, target_num) {
//     var map = [];
//     var indexnum = [];
    
//     for (var x = 0; x < nums.length; x++)
//     {
//     if (map[nums[x]] != null)
//     {
//     index = map[nums[x]];
//     indexnum[0] = index;
//     indexnum[1] = x;
//     break;
//     }
//     else
//     {
//     map[target_num - nums[x]] = x;
//     }
//     }
//     return indexnum;
//     }
  
//   console.log(twoSum([10,20,10,40,50,60,70],50));



// const a= [1,2,3,4,5]
// const b= a

// console.log(a==b)

// const a=2
// const b=2

// console.log(a==b)


// let arr =[1,1,1,1,2,3,4,5,6,888,888,67,67,4,4,2,1,30,60,20,20]

// let uniq= [...new Set(arr)]
// console.log(uniq)

// const revint =(num)=>{
//     let mynum =num.toString().split("").reverse().join("")
//     console.log(mynum)
// }

// revint(12345)



const Rack =[
        {id:1,name:"medi1"},
        {id:2,name:"medi2"},
        {id:3,name:"medi3"},
        {id:4,name:"medi4"},
        {id:5,name:"medi5"},
        {id:6,name:"medi6"},
        {id:7,name:"medi7"},
        {id:8,name:"medi8"},
        {id:9,name:"medi9"},
        {id:10,name:"medi10"},
    ]

const Batch = [
        {rack_id:1,Batch:"A1"},
        {rack_id:2,Batch:"A2"},
        {rack_id:3,Batch:"A3"},
        {rack_id:4,Batch:"A4"},
        {rack_id:5,Batch:"A5"},
    ]
    const filteredBatches = Batch.filter(batch => !Rack.some(rack => rack.id === batch.rack_id));

    console.log(filteredBatches);