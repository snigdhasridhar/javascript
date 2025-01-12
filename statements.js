function submitz(){
var votor_age=document.getElementById("age").value 
if(votor_age<18){
    document.getElementById("agez").innerHTML=votor_age+"you are not elegible"

}
else(
    document.getElementById("agez").innerHTML=votor_age+"you are elegible"
)}


