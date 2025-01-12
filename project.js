function project(){
    var c_name=document.getElementById("name").value
    var c_price=document.getElementById("price").value
    var c_quantity=document.getElementById("quan").value
    document.getElementById("one").innerHTML=c_name
    document.getElementById("two").innerHTML=c_price
    document.getElementById("three").innerHTML=c_quantity
    document.getElementById("four").innerHTML=parseInt(c_price*c_quantity)
}