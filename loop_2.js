// two types of looping. Entry control loop. 2 is Exit control loop. 
// example for 1 is for loop and example for 2 is do-while,while
// var i=0
// do{
//     console.log("hello")
//     i++
// }
//  while(i<5)
// var sum=0   
// var num=1
// for(var i=0;i<=100;i++){
//     if(i%2==0){

    
//      sum=sum+i}
    
// }
// console.log(sum)
    // for loop is the fastest loop . the first difference is for loop is used when the limit of how many times to execute is known. 
    // for password checkinh we use while loop.
    // while and do-while are more important 
    
    // for in loop. they skip empty values. for of does not skip them bt call them undefined.
    // var arr=[1,2, ,3.4,56,"seven"]
    // for(let val of (arr)){
    //     console.log(val)
    // }
    // var arz=[12,13,43.4,"welcome",-8]
    // arz.forEach(function(arz){
    //     console.log(arz)
    // }
    var arl=[1,2,3,"hi", ,49.3]
    for(let i in arl){
        console.log(arl[i])
    }