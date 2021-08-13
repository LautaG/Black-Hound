function modalContacto() {
  var element = document.getElementById("modal-contacto");
  element.classList.add("is-active");
  var element = document.getElementById("htmlpadre");
   element.classList.add("is-clipped");
}
function modalContactoClose() {
  var element = document.getElementById("modal-contacto");
  element.classList.remove("is-active");
  var element = document.getElementById("htmlpadre");
  element.classList.add("is-clipped");
   

}
function sub() {
  document.getElementById("info-cta-sub").style.display = "none";
    document.getElementById("info-cta-sub-done").style.display = "block";
    document.getElementsByClassName("screen-reader-response").style.display = "none";
}
function contacto() {
 document.getElementById("pop-up-form").style.display = "none";
    document.getElementById("pop-up-exito").style.display = "block";
}
