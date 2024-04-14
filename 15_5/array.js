let arry =  [1,2,3,4,5,6,7,8]
let aarr  = ["a","b","c","d","e","f"]


let mapp2  = aarr.map((val  ,index)=> {
 
  // console.log(val); // a b c d e f
  // console.log(index);  // 1 2 3 4 5
    // if(ka === index){
    //     console.log("equal");
    // }
    // else{
    //     console.log("noie e");
    // }
})
let ins = arry.indexOf(3)
// console.log(ins);

let slice = arry.slice(2,1)
// console.log(slice);


let map= arry.map((e)=> e +2)
let filter= arry.filter((e)=> e *22)
// console.log(filter);
// console.log(map)

let valuwe = 3

// console.log([...Array(valuwe)].map((_,val)=>{
// val +=1
// // return console.log(val++);
// }))
//                                                             splice and inedoff


let y= [1,2,3,4,5]
console.log(y.splice(1,1), y);