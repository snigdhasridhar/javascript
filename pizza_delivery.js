var reach =new Promise((resolve,reject)=>{
var reached=true
if(reached ){
   resolve("reached safely")
   
}
else{
    reject("did not reach")
    console.log("else")
}
})
async function status(){
    try{
        var result=await reach
        console.log("enter")

        console.log(result)
    }
    catch(error){
console.log(error)
    }
   
}
status()