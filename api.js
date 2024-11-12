// // json file is an array of objects
// var arr=[2,5,6,7,8]
// var value="fruits"
// var app={
//     name:"krishna",age:"21",city:"coimbatore",number:"322",numbers:[34,56,77,33]
// }
// console.log(arr)
// console.log(value)
// console.log(app)
fetch('./app.json')
.then((res)=> res.json())
.then((cake)=>{
    let cake_display=document.getElementById("card-body")
    var empty="";
cake.map((index)=>{
empty+=`<h5>${index.name}</h5><p>${index.age}</p><p>${index.designation}</p>`
})
cake_display.innerHTML=empty
})
