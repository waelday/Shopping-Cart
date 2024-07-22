/**
    * @description      : 
    * @author           : waeld
    * @group            : 
    * @created          : 22/07/2024 - 13:18:31
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 22/07/2024
    * - Author          : waeld
    * - Modification    : 
**/

let heart_btn = document.getElementsByClassName("heart_btn");
let plus_btn = document.getElementsByClassName("plus-btn");
let minus_btn=document.getElementsByClassName("minus-btn")
let Quant = document.getElementsByClassName("Quant");
let finalPrice = document.getElementsByClassName("finalPrice");
let delete_btn = document.getElementsByClassName("delete");
let Item=document.getElementsByClassName("Item")
console.log(Quant)
let price=[1379,179,249]
console.log(plus_btn)
for (let i=0;i<heart_btn.length;i++){
    heart_btn[i].addEventListener("click",function(){
        if (heart_btn[i].style.color=="red"){
            heart_btn[i].style.color="black";
        }
        else{
            heart_btn[i].style.color="red"
        }
    });
    plus_btn[i].addEventListener("click",function(){
        Quant[i].value = Number(Quant[i].value)+1;
        finalPrice.value=Number(finalPrice.value)+price[i]
    });
    minus_btn[i].addEventListener("click",function(){
        if(Number(Quant[i].value)>=1)
        Quant[i].value = Number(Quant[i].value)-1;
        finalPrice.value=Number(finalPrice.value)-price[i]
    });
    
}
//Delete button 
delete_btn[i].addEventListener("click",function(){
    finalprice.value=Number(finalprice.value)-(price[i]*Number(Quant[i].value))
    Item[i].remove()

})
