function clickz(){
    var data=document.getElementById("texting").value
    console.log(data)
    document.getElementById("text_2").innerHTML=data
    var data_2=document.getElementById("texting_2").value
    console.log(data_2)
    document.getElementById("text_x").innerHTML=data_2
    var data_3=document.getElementById("gender").value
    console.log(data_3)
    document.getElementById("text_s").innerHTML="age is "+data_3
    var data_4=document.getElementById("name").value
    document.getElementById("name_1").innerHTML="Youre name is"+ data_4
}
function red(){
document.getElementById("style_z").style.backgroundColor="red"
document.getElementById("yellow").style.backgroundColor="black"
document.getElementById("green").style.backgroundColor="black"
}
function yellow(){
document.getElementById("yellow").style.backgroundColor="yellow"
document.getElementById("style_z").style.backgroundColor="black"
document.getElementById("green").style.backgroundColor="black"
}
function green(){
document.getElementById("green").style.backgroundColor="green"
document.getElementById("style_z").style.backgroundColor="black"
document.getElementById("yellow").style.backgroundColor="black"
}
