var forest = new Forest();

function startMonth(){
    for(var i = 1; i <= 30; i++){
        
        forest.checkWeight();
        console.log("Today is day " + i + " for the bear");
        if(forest.indicate === "Bear Die"){
            console.log("The bear is too weak and she is dies");
            return;
        }
        forest.catchAnimal();
        if(i >= 20){
            if(forest.hunterKill() === true){
                console.log("The hunter kill the bear on day " + i);
                return;
            }else{
                
                if(forest.bear.mass < 100){
                    console.log("The bear is too weak to run away from the hunter");
                    return;
                }else{
                    console.log("The bear run away from hunter on day " + i + " and now her weight is " + forest.bear.mass);
                }
            }
        }
    }
    
}
console.log(forest);

startMonth();