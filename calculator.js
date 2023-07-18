let result = document.getElementById("inputtext");
let calculate=(numb)=>{
    result.value+=numb;
}
    
   let Result=()=>{
        try{
            result.value=eval(result.value);

        }catch(err){
            alert("please enter the correct value");
            

        }
    }
   function clr(){
    result.value = ""
   }
   
   function del(){
    result.value =result.value.slice(0,-1);
   }
