alert("connected")
var button=document.querySelector("button");
var b1=document.querySelector("#f");
var b2=document.querySelector("#d");
button.addEventListener("click",function(){
b1.style.background=b1.style.background=== "purple"? "lightgreen": "purple";
b2.style.background=b2.style.background=== "lightgreen"? "purple": "lightgreen";
})
