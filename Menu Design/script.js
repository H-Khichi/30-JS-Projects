var selectField= document.getElementById("select-field")
var selectText=document.getElementById("selectText")
var list=document.getElementById("list")
var arrow=document.getElementById("arrow")
var options=document.getElementsByClassName("options")

selectField.onclick=function(){
    list.classList.toggle("hide")
    arrow.classList.toggle("rotate")
}

for( let option of options){
    option.onclick =function(){
        selectText.innerHTML= option.textContent;
        list.classList.toggle("hide");
        arrow.classList.toggle("rotate")

    }
}