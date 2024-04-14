let first = "rana"
let second = "zaeem"

let fullName  = first + " " +second;


// console.log(first.indexOf("n"));

//                      2 statement

let userMobile= "pixel 3 "

console.log(userMobile.length);

//                    3 statement

let countryName = 'pakistani'
console.log(countryName.indexOf("n"));

//    4   statement

console.log(countryName[3])

//           5 statement

console.log(first.concat(second))

//                  6
let city = "hyderabad"

console.log(city.replace('hyder','islam'));

//             7

let massages = "laai and Sami are and best friends. They play cricket and"
// console.log(massages.replace('and',"&"));

//                 8

let number = "764"
// console.log(typeof(number));

//             9

let inputname  = "ranazaeem"

// console.log(inputname.toLocaleUpperCase());


//                      10

let inputnumber = 23.32


// console.log(inputnumber.toLocaleString());

let enterusername = 'mslq'

console.log(enterusername.includes('&'&&"s"&&"l"&&"m"&&"h"&&'j'&&'q'));

if(enterusername.includes('!' && '@' && '#' && '$' && '%' && '^' && '&' && '*' && '(' && ')' && '_' && '-' && '+' && '=' && '{' && '}' && '[' && ']' && ':' && ';' && '<' && '>' && ',' && '.' && '?' && '/' && '|')

){
    console.log('please use only alphabe');
}else{
    console.log(enterusername + " welcoem");
}

//                       11

let searchbar=  "butter"

let searcharry = ['cook',"pancake","butter","meat"]

let result = searcharry.filter((item)=>{
   let val = item.includes(searchbar)
   let location = searcharry.indexOf(searchbar)
//    console.log(location);
    return location
})
//  console.log(result);


//   password idenitfire


let inputpassword = "xasxaxw2"
let numbers = '0123456789'
let found = false;


console.log("____________________");

if(inputpassword.length >= 5){
    for(var i =0 ; i < inputpassword.length ; i++){
        if(numbers.includes(inputpassword[i])){
        found = true;
        // console.log(found);
       
        }
        }
        
        if(found){
            console.log("welcome " );
        
        }else{
        console.log("please add number to make strong password");
        }
}else{
    console.log('password must be grather than 6 val');
}


function cheakPassword(){
    if(inputpassword.length < 6 ){
        console.log("plesse entre more than 6 values");
    }
  
}
// cheakPassword()
//                                             17

let pakistan = "pakistan"
function showlastval(){
   let lengths=  pakistan.length -1
   console.log(pakistan[lengths ]);
}


//                                      18
let para = "The quick brown fox jumps over the laxy the dogs"
let name = "the"
function repeatnumber(){
    let count  = para.split(name)
console.log(count.length -1);
}

