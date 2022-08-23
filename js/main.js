(function(){
    "use sttrict";
    var regalo = document.getElementById("regalo");
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

        //Extras
        var camisas = document.getElementById("camisa_evento");
        var etiquetas = document.getElementById("etiquetas");

        calcular.addEventListener("click", calcularMontos);

        function calcularMontos(event){
            event.preventDefault();
            if(regalo.value === ""){
                alert("Debes elegir un regalo");
                regalo.focus()
            }else{
                var boletoDia = parseInt(pase_dia.value,10 )|| 0;
                var boleto2Dias = parseInt(pase_dosdias.value)|| 0;
                var boletoCompleto = parseInt(pase_completo.value)|| 0;
                var cantCamisas = parseInt(camisas.value)|| 0;
                var cantEtiquetas = parseInt(etiquetas.value)|| 0;
                
                var totalPagar = (boletoDia * 30) + (boleto2Dias * 45) +(boletoCompleto * 50) + ((cantCamisas *10) * .93) + (cantEtiquetas * 2);

                var listadoProductos = [];

                if(boletoDia>=1){
                    listadoProductos.push(boletoDia + " Pase por día");
                }
                if(boleto2Dias>=1){
                    listadoProductos.push(boleto2Dias + " Pases por 2 días");
                }
                if(boletoCompleto>=1){
                    listadoProductos.push(boletoCompleto + " Pases completo");
                }
                if(cantCamisas>=1){
                    listadoProductos.push(cantCamisas + " Camisas");
                }
                if(cantEtiquetas>=1){
                    listadoProductos.push(cantEtiquetas + " Etiquetas");
                }

            }
        }
    });//DOM CONTENT LOADED
})();