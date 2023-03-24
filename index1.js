let btn1=document.getElementById("btn1");
let btn2=document.getElementById("btn2");

btn2.onclick= function() {
    btn1.style.color= "#2eb4f2";
    btn2.style.color= "#fff";
    btn1.style.background = "#fff";
    btn2.style.background = "#2eb4f2";
}
btn1.onclick= function() {
    btn1.style.color= "#fff";
    btn2.style.background = "#fff";
    btn2.style.color= "#2eb4f2";
    btn1.style.background = "#2eb4f2";

}



