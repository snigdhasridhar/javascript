// operators types 1. assignment operator,2. ternary operator,3.comparision operator , 4.logical operator 5. bitwise operator
// var t=20
// var y=10
// console.log(t)
// console.log(y)
// var x=y
// y=t
// t=x
// without using ternary operator
// console.log(t)
// console.log(y)
// t+=y
// console.log(t)
// ternary operator
// var age=10
// if(age>=18){
//     console.log("you are eligible")
// }
// else{
//     console.log("not eligible")
// }
// shorthand of if else is ternary
// var age=18
// var ages=(age>18)?"you are eligible":"not eligible"
// console.log(ages)
// <=>=,==,!=
// and or not &&,||,!
// function submitting(){
// var user_name=document.getElementById("name").value
// var password=document.getElementById("password").value
// if(user_name=="abcdd" && password=="123abc"){
//     console.log("valid")
//     document.getElementById("nm").innerHTML="valid"
  
// }
// else{
//     console.log("invalid")
//     document.getElementById("else").innerHTML="invalid"
// }}
// bitwise operator 
var a =12
var b =10
console.log(a|b)
// unary operator  ++,--(increment,decrement)
var num=0
function unary_operator(){

num++
if(num>10){
    alert("you have selected more than 10 items")}

    
else{
    console.log(num)
    document.getElementById("unary").innerHTML=num}
}
function unary_operator2(){
    num--
    if(num<0){
        alert("you have to select atleast one item")
    }
    else{
        document.getElementById("unary").innerHTML=num
    }
   
}