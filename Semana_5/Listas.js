$(document).ready(
    function(){
        $("#tarea").on("focus", function(e){
            $(this).css("background-color", "yellow");
        });

        $("#editar").on("mouseenter", function(e){
            $(this).css({
                "text-transform": "uppercase",
                "background-color": "black", 
                "color": "white"
            });
        });
        $("#agregar").on("click", function(e){
            let tarea = $("#tarea").val();
            console.log(tarea);
            $("#lista>li").append("<li>"+ tarea + "</li>");
        });

        $("#limpiar").on("click", function(){
            $("#tarea").val('');
        });

        $("#lista > li").on("click",'li', function(){
           $(this).appendTo("#lista-done");

           // let tareaDone = $("#lista > li").text();
            //console.log(tareaDone);
            //$("#lista-done > ul").appendTo("<li>"+ tareaDone + "</li>");
        });

        $("#suma").on("click", function(e){
            let numero = parseInt($("#numero").val());
            console.log(numero);
            suma(numero, numero);
            document.writeln('El resultado de la suma es:'+ " " + total);
        });
        function suma (numero ,numero){
            total = numero += numero;
        }

    }
)

