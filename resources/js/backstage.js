function menu(str){
    var a=document.getElementById(str);
    var b=a.style.display;
    if(b=="block")
    {
        a.style.display="none";
    }
    else
    {
        a.style.display="block";
    }
}