
function validar(){ 
 var nombre=document.getElementById("nombre").value;
 var dni=document.getElementById("dni").value;
 var email=document.getElementById("email").value;
 var telefono=document.getElementById("telefono").value;
 var provincia=document.getElementById("provincia").value;
 var fecha=document.getElementById("DPC_edit1_DD/MM/YYYY").value;

 var valido=true; // si todo va bien después de todas las comprobaciones, sigue a true
 // CONTROLES DE VALIDACIÓN:
 if (nombre.length==0||parseInt(nombre)){
     document.getElementById("nombreHelp").style.visibility="visible";
     valido=false;
 }
 if  (dni.length==0||!(/^\d{7,8}[a-zA-Z]$/.test(dni))){
    document.getElementById("dniHelp").style.visibility="visible";
    valido=false;
}
if (telefono.length==0||!(/^\d{9}$/.test(telefono))){
    document.getElementById("telefonoHelp").style.visibility="visible";
    valido=false;
} 
 if (email.length==0||!(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(email))){
     document.getElementById("emailHelp").style.visibility="visible";
     valido=false;
 }
 if (provincia==0){ 
     document.getElementById("provinciaHelp").style.visibility="visible";
     valido=false;
 }
 if (fecha==""){
    document.getElementById("fechaHelp").style.visibility="visible";
    valido=false;
}
 if (!aceptar.checked){
     document.getElementById("aceptarHelp").style.visibility="visible";
     valido=false;
 }
 return valido;
}

function quitarError(msg){
 // Cada vez que se camibia un campo, se elimina mensaje de error
  document.getElementById(msg).style.visibility="hidden";
}
