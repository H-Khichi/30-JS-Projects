const pswdBox=document.getElementById("password");
const length=12;
const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase="abcdefghijklmnopqrstuvwxyz"
const number ="0123456789";
const symbol="@#$%^&*()_-+=/<>[]{}|"
const allChars= upperCase+lowerCase+number+symbol;
function createPswd(){
    let pswd="";
    // pswd += upperCase[Math.floor(Math.random()*upperCase.length)];
    // pswd += lowerCase[Math.floor(Math.random()*lowerCase.length)];
    // pswd += number[Math.floor(Math.random()*number.length)];
    // pswd += symbol[Math.floor(Math.random()*symbol.length)];
    while(length> pswd.length){
        pswd += allChars[Math.floor(Math.random()*allChars.length)];

    }
    pswdBox.value=pswd;
}
function copyPswd(){
    pswdBox.select();
    document.execCommand("copy");
}
