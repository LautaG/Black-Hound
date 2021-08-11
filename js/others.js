function FAQE() {
    document.getElementById("maincontainer-empresa").style.display = "block";
    document.getElementById("maincontainer-invertir").style.display = "none";
     document.getElementById("maincontainer-proyectos").style.display = "none";
      var element = document.getElementById("boton-empresa");
   element.classList.add("active");
    var element = document.getElementById("boton-invertir");
   element.classList.remove("active");
    var element = document.getElementById("boton-proyectos");
   element.classList.remove("active");
};

function FAQI() {
    document.getElementById("maincontainer-empresa").style.display = "none";
    document.getElementById("maincontainer-invertir").style.display = "block";
     document.getElementById("maincontainer-proyectos").style.display = "none";
     var element = document.getElementById("boton-invertir");
   element.classList.add("active");
    var element = document.getElementById("boton-empresa");
   element.classList.remove("active");
    var element = document.getElementById("boton-proyectos");
   element.classList.remove("active");
    };

function FAQP() {
    document.getElementById("maincontainer-empresa").style.display = "none";
    document.getElementById("maincontainer-invertir").style.display = "none";
     document.getElementById("maincontainer-proyectos").style.display = "block";
    var element = document.getElementById("boton-proyectos");
   element.classList.add("active");
    var element = document.getElementById("boton-empresa");
   element.classList.remove("active");
    var element = document.getElementById("boton-invertir");
   element.classList.remove("active");
    };