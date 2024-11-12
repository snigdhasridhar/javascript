function argu(first,last,age){
   var name="first_name-"+first+"second_name-"+last+"age-"+age
    return name
}
console.log(argu("snigdha","sridhar","20"))
argu("snigdha","sridhar","20")
argu("snigdha","sridhar","23")
argu("snigdha","sridhar","20")
argu("snigdha","sridhar","20")
argu("snigdha","sridhar","20")
// with argument without return
// without argument with return 
// without arg without return
// both arg and return

function reverse(data){
    var strings= data
    var value=""
    for(var i =strings.length-1;i>=0;i--){
        value+=strings[i]
    }console.log(value)
    console.log(value[4])
    
}
reverse("hello")
reverse("welcome")
reverse(12345)

function integer(){
    var number=2345
var sum=number/10
console.log(Math.floor(sum))}
integer()