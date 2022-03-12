function formEnvio(){

    if (document.formulario.nombre.value.length==0){
           alert("Debe ingresar su nombre")
           document.formulario.nombre.focus()
           return 0;
    }else{

    if (document.formulario.apellidos.value.length==0){
           alert("Debe ingresar su apellido.")
           document.formulario.apellidos.focus()
           return 0;
    }


    if (document.formulario.correo.value.length==0){
        alert("Debe ingresar su correo de contacto.")
        document.formulario.correo.focus()
        return 0;
 }

    if (document.formulario.mensaje.value.length==0){
        alert("Debe escribir su mensje o sugerencia.")
        document.formulario.mensaje.focus()
        return 0;
 }

 
    alert("Muchas gracias por enviar el formulario");
    document.formulario.submit();
}
		
}