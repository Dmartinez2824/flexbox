
const link = document.querySelectorAll(".links");
const input = document.querySelector(".nav__input");


link.forEach(element => {
    element.addEventListener("click",function(event){
        if(input.checked){
            input.checked = false;
        }
    
    })
});