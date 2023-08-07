let btn= document.querySelector("button")
let fBook=document.querySelector(".fa-brands.fa-facebook-f")
let twitter=document.querySelector(".fa-brands.fa-twitter")
let inst=document.querySelector(".fa-brands.fa-instagram")

function colorBtn(element){
    element.onclick=()=>{
        element.style.cssText="background-color:#e652d1;color:white"
    }
}

function colorIcon(element){
    element.onclick=()=>{
        element.style.cssText="color:#e652d1;border-color:#e652d1;"
    }
    
}

colorIcon(fBook);
colorIcon(twitter);
colorIcon(inst);
colorBtn(btn);