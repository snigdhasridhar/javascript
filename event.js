var event_z=document.getElementById("button+")
event_z.addEventListener("click",add_fn)
event_z.addEventListener("dblclick",sub_fn)
event_z.addEventListener("mouseout",bgm)
event_z.addEventListener("mouseenter",mouse_enter)

function add_fn(){
var num_1=parseInt(document.getElementById("box_1").value)
var num_2=parseInt(document.getElementById("box_2").value)
var sum=num_1+num_2
console.log(sum)
document.getElementById("tag_1").innerHTML=sum
}

function sub_fn(){
    var num_1=parseInt(document.getElementById("box_1").value)
var num_2=parseInt(document.getElementById("box_2").value)
diff=num_1-num_2
console.log(diff)
document.getElementById("tag_2").innerHTML=diff
}
function bgm(){
    document.getElementById("body").style.backgroundColor="white"
}
function mouse_enter(){
    document.getElementById("body").style.backgroundColor="green"
}
function static(){
    var key=document.getElementById("keyboard_into").value
    document.getElementById("keyboard_para").innerHTML=key
}