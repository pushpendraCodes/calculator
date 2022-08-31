 var screen = document.getElementById("screen");
var clear = document.getElementById("clear");
var button  =document.querySelectorAll(".button");
console.log(button)

function clearbtn(){
    screen.value =  "";
}

function Disply(num){
    
  
  screen.value += num;

  
   
}
   



function result(){
    if( screen.value == ""){
        alert("enter input")
    }
    // if(typeof(screen.value)== "string"){
    //     alert("enter valid value")
    //     screen.value =  "";

    //     return false;

    // }
    else{
        screen.value = eval(screen.value);
        return true; 
    }
    

}


