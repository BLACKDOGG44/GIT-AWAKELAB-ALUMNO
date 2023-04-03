function validar(){
    var name= document.getElementById("fNombre").value; 
    var lastName= document.getElementById("fApellido").value; 
    var email =document.getElementById("fCorreo").value;
    var comentario= document.getElementById("fComentario").value; 
   
    var aprobado =true;
    var expReg = "^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$";
    var expRegEspacio="^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$";
    var expRegEmail= /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
    
    if(name.match(expReg)== null || name == ""){
        alert("Por favor, ingrese su nombre, sin espacios");
        //return false;
        aprobado =false;
    }
    if(lastName.match(expRegEspacio)== null || lastName ==""  ){
        alert("No olvide ingresar su Apellido");
        //document.formContacto.fApellido.focus();
     aprobado=false;
    }
    if(email.match(expRegEmail) == null || email == ""){
        alert("Ingrese su email, recurde incluir @");
        
        aprobado = false;
    }
    if(comentario.match(expRegEspacio)== null || comentario == "" ){
            alert("Ops, ingrese su comentario");
            //document.formContacto.fApellido.focus();
         aprobado=false;
        } 
    
        return aprobado;
}