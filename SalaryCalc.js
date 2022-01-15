function monthly() {
  var num = document.getElementById("num").value;
   document.getElementById("value1")
       .value = (num / 12) ;
}
function weekly() {
   var num = document.getElementById("num").value; 
       document.getElementById("value2").value = (num / 52) ;
}
function daily() {
   var num = document.getElementById("num").value; 
        document.getElementById("value3").value = (num / 365) ;
}