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


//                        09

let laterDate =   Date.UTC(2015,5,29,12,13,12,1)

//                        10 

let randomCounter = new  Date(laterDate)

let showDays = currentDate-  randomCounter
// console.log("years : " ,currentDate.getFullYear()- randomCounter.getFullYear(),"moths: ",
// currentDate.getMonth()- randomCounter.getMonth(), "day :",
// currentDate.getDate() - randomCounter.getDate()

// );
let calMoths = Math.floor(showDays /(1000 * 60 * 60 * 24 * 30))
calMoths %= 12
let calYear  = Math.floor(showDays /(1000 * 60 * 60 * 24 * 30 * 12))
let calday = Math.floor(showDays / (1000 * 60 * 60 * 24 ) ); calday %= 30


// console.log(`year ${calYear} , ${monthNames[calMoths]}/${calday}`);


//                                                        11

let oneHourBackTime =  currentDate.getHours() -1 
// console.log(oneHourBackTime);


//                            12

let userAge = 19
function birthDay(){
  let cheak = currentDate.getFullYear() - userAge
  console.log("your birthday is ",cheak);
}
// birthDay()

//                      14

function eletricBill(){
  let userName  = "sufan"
  let currentMonth = monthNames[currentDate.getMonth()]
  let perUnit = 34
  let totalUnit  = 600
  let latePay = 350
  let totalPrice =  totalUnit * perUnit

  console.log(`
    UserName = ${userName}
    Month = ${currentMonth}
    PerUnit = ${perUnit}rs
    totalUnit = ${totalUnit}
    Latecharges  ${latePay}rs
    totalPrice = ${totalPrice} rs
  
  `);

}
eletricBill()