var selector=document.getElementById("selector");
var cajas=document.getElementsByClassName("allPotos")
selector.onchange=function() {
if(selector.value=="chile"){
   revoveImages()
   document.getElementById('chile').style.display = 'block';
}else if (selector.value=="lima5") {
  revoveImages()
  document.getElementById('lima5').style.display = 'block';
}else if (selector.value=="lima6") {
  revoveImages()
  document.getElementById('lima6').style.display = 'block';
}
}
function revoveImages(){
  document.getElementById('chile').style.display = 'none';
  document.getElementById('lima5').style.display = 'none';
  document.getElementById('lima6').style.display = 'none';
}
