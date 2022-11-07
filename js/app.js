let btnResumen = document.querySelector("#btnResumen");
let cantidad = document.querySelector("#cantidad")
let categoria=document.querySelector("#categoria");
btnResumen.addEventListener("click", function(e){
    e.preventDefault();   
    let precioInicial = 200 * parseInt(cantidad.value) ;
    let precioFinal=0;
  
    if (categoria.value=="estudiante") {
        precioFinal = precioInicial - (precioInicial * 0.8);        
    }
    else if ( categoria.value == "trainee") {
        precioFinal = precioInicial - ( precioInicial * 0.5);
        
    }
    else{
        precioFinal = precioInicial -( precioInicial * 0.15);
    }
  
    document.querySelector("#total").textContent =   precioFinal;

    })