// var-local scope, let-block scope, constant-constant value cannot be reassigned 

const a =[10.7,"hello",8]
console.log(a)
// datatypes
console.log(typeof(a))
function logic(nm,aj,wh,lm){
var name= nm
var age=aj
var weight=wh
let lastname=lm
console.log("my name is:"+name)
console.log(age)
console.log(weight)
console.log(lastname)
}
logic("aa",20,5.5,"af")
logic("bb",20,5.5,"ss")
logic("rr",20,5.5,"xx")

