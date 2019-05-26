function validar(){
   var nombre=document.getElementById("nombre")
   var email=document.getElementById("email")
   var password=document.getElementById("password")
   var edad=document.getElementById("edad")
   var provincia=document.getElementById("provincia")
   var suscripcion=document.getElementById("suscripcion")

   var correcto=true

   if (nombre.value.length==0){
     //alert("El nombre es obligatorio")
     nombre.style.borderColor="#f00"
     document.getElementById("errorNombre").style.visibility="visible"
   	 correcto=false
   }
   if (!(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(email.value))) {
     //alert("El correo es erróneo")
     email.style.borderColor="#f00"
     document.getElementById("errorEmail").style.visibility="visible"
   	 correcto=false
   }
    if (password.value.length<6||
    	password.value.length>30||
    	!/[a-zñ]/.test(password.value)||
    	!/[A-ZÑ]/.test(password.value)||
    	!/[0-9]/.test(password.value)) {
     //alert("El correo es erróneo")
     password.style.borderColor="#f00"
     document.getElementById("errorPassword").style.visibility="visible"
   	 correcto=false
   }  

if (isNaN(edad.value)){
     //alert("El nombre es obligatorio")
     edad.style.borderColor="#f00"
     document.getElementById("errorEdad").style.visibility="visible"
   	 correcto=false
   }

if (provincia.value==0){
     //alert("El nombre es obligatorio")
     provincia.style.borderColor="#f00"
     document.getElementById("errorProvincia").style.visibility="visible"
   	 correcto=false
   }

 if (!suscripcion.checked){
     //alert("El nombre es obligatorio")
     suscripcion.style.borderColor="#f00"
     document.getElementById("errorSuscripcion").style.visibility="visible"
   	 correcto=false
   }

     return correcto

}

function quitarError(dato,mensaje){
   document.getElementById(dato).style.borderColor="#aacfe4"
   document.getElementById(mensaje).style.visibility="hidden"
}