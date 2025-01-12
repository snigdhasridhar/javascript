// setInterval(clock,5000)
// console.log("first line of code")
var clock= ()=>{   
    var date=new Date()
    var hour=date.getHours()
   var minute=date.getMinutes()
   var sec=date.getSeconds()
    console.log(hour+"-"+minute+"-"+sec)
  
}
clock()

console.log("end line of code")

