window.onload=function () {
    document.getElementById("mainBody").style.paddingTop=document.getElementById("topHeader").clientHeight.toString()+"px";
}
window.onresize=function () {
    document.getElementById("mainBody").style.paddingTop=document.getElementById("topHeader").clientHeight.toString()+"px";
}