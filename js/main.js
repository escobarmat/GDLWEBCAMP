(function(){
    "use sttrict";
    var regalo = ducument.getElementById("regalo");
    document.addEventListener("DOMContentLoaded", function(){
        //Campos Datos de Usuario
        var nombre = document.getElementById("nombre");
        var apekllido = document.getElementById("apellido");
        var email = document.getElementById("email");
        
        //Campos pases
        var pase_dia = document.getElementById("pase_dia");
        var pase_dosdias = document.getElementById("pase_dosdias");
        var pase_completo = document.getElementById("pase_completo");

        //Botones y Divs
        var calcular = document.getElementById("calcular");
        var errorDiv = document.getElementById("error");
        var botonRegistro = document.getElementById("btnRegistro");
        var resultado = document.getElementById("lista-productos");

        calcular.addEventListener("click", calcularMontos);

        function calcularMontos(event){
            event.preventDefault();
            if(regalo.value=== ""){
                alert("Debes elegir un regalo");
            }
        }
    });//DOM CONTENT LOADED
})();