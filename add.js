var arrayz=[]
function cart(){
    var add_to_cart=document.getElementById("add_to_cart").value
    arrayz.push(add_to_cart)
    document.getElementById("add_to_cart").value=""
update_table()
}
function update_table(){
var z=document.getElementById("table")
z.innerHTML=""
var product_inside_table="<table><thead><tr><th>index</th><th>items</th></tr></thead><tbody> "
for(var i=0;i<arrayz.length;i++){
    product_inside_table+="<tr><td>"+(i+1)+"</td><td>"+arrayz[i]+"</td></tr>"

}
product_inside_table+="</tbody></table>"
z.innerHTML=product_inside_table



}
