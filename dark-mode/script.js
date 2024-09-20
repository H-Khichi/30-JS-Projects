let icon= document.getElementById("icon")
icon.onclick= function(){
    document.body.classList.toggle("dark-theme")
    if(document.body.classList.contains("dark-theme")){
        icon.src="/dark-mode/images/sun.png"
    }else{
        icon.src="/dark-mode/images/moon.png"
    }
}