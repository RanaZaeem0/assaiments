let monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"];
let Weeksdays =[

  "Sunday",
  "Mondey",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
 
] 
let today = new Date()

let currentDate = new Date(today)
let seconds = currentDate.getSeconds()
let hours = currentDate.getHours()
let weekday = currentDate.getDay();  weekday = Weeksdays[weekday ]
let month = currentDate.getMonth(); month = monthNames[month ] 
let year = currentDate.getFullYear()
let date = currentDate.getDate()
let mintus = currentDate.getMinutes()
let PM = currentDate.getHours()


// console.log(weekday )


const oneday = 24*60*60*1000
const onehour = 60*60*1000
// console.log(today/oneday);


//                                      1

// console.log(weekday , " ",date, year,hours+"h :",mintus, );

//                                                2
console.log(month);
//                                       3
let datess  = weekday.split('').splice(0,3)
console.log(datess);
//                       

let fundays =()=>{
  if(weekday == 0 || weekday == 6){
    console.log("its fun days");
  }else{
    console.log("its working day");
  }
}
// fundays()

//                                          5

let monthdays= ()=>{
  console.log(date);
  if(date > 15){
    console.log("last days of the moth");
  }else{
    console.log("starting of the month");
  }
}
// monthdays()

//                           6


let startingDate =  Date.now()

let oldseconds = startingDate / 1000
let oldmints  = startingDate / 60/1000
let oldhours = startingDate /60 /60 /1000
// console.log(oldmints);

//                                  7

console.log("________________________");

if(hours < 12){
console.log("its am");  
}
else{
  console.log("ists pm");
}