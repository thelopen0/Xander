let menuVisible = false;


function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}


function ocultarSecciones(){
    document.querySelectorAll("section").forEach(sec=>{
        sec.style.display="none"; 
    });
}


function mostrarSolo(id){
    ocultarSecciones();
   
    const sec = document.getElementById(id);
    if(sec) sec.style.display="block";

  
    const filaDatos = document.querySelector(".fila-datos");
    if(filaDatos){
        if(id === "contacto"){
            filaDatos.style.display = "flex"; 
        } else {
            filaDatos.style.display = "none"; 
        }
    }
}


window.onload = function(){
    mostrarSolo("inicio");
}


function seleccionar(){
    
    document.getElementById("nav").classList = "";
    menuVisible = false;

    
    const current = event.target.getAttribute("href");
    if(current){
        mostrarSolo(current.substring(1)); // quitar el '#'
    }
}


function cambiarSeccion(){
    const opcion = document.getElementById("menu-mobile").value;
    if(opcion){
        mostrarSolo(opcion.substring(1)); // quitar el '#'
    }
}
