let popup= document.getElementById("popup")

function openPopup(){
    popup.style.visibility="visible"
    popup.style.top="50%"
    popup.style.transform= "scale(1) translate(-50%,-50%)"

    // popup.classList.add("open-popup")
}

function closePopup(){
    popup.style.visibility="hidden"
    popup.style.top="0%"
    popup.style.transform= "translate(-50%, -50%) scale(0.1)"

    // popup.classList.remove("open-popup")

}