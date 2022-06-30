(function(){
    "use sttrict";
    var regalo = ducument.getElementById("regalo");
    document.addEventListener("DOMContentLoaded", function(){
        //Campos Datos de Usuario
        var nombre = document. 
        getElementById("nombre");
        var apellido = document.getElementById("apellido");
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
            if(regalo.value === ""){
                alert("Debes elegir un regalo");
                regalo.focus()
            }else{
                var boletoDia = pase_dia.value;
                var boleto2Dias = pase_dosdias.value;
                var boletoCompleto = pase_completo.value;
                
                console.log("Boletos Dias"+ boletoDia);
                console.log("Boletos 2 Dias"+ boleto2Dias);
                console.log("Pase Completo"+ boletoCompleto);
            }
        }
    });//DOM CONTENT LOADED
})();