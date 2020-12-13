$("#agregar").on("click", function(){
    
    $("#partidas").append("<tr>\
    <td><input type='text' class='clave'></td>\
    <td><input type='text' class='descripcion'></td>\
    <td><input type='number' class='precio'></td>\
    <td><input type='number' class='unidades'></td>\
    <td><input type='number' class='importe'></td>\
    </tr>\
");

$(".precio:last, .unidades:last").on("change", function(){
    var tr = $(this).closest("tr");
    calcularImporte(tr);
});

$(".clave:last").on("keydown", function(e) {
    var barra = 9;
    var keycode = e.which;

    if (keycode === barra) {
        tr = $(this).closest("tr");
        $("#dialog").dialog("open");
    }
});

});

function calcularImporte(tr){
    var precio = Number($(tr).find(".precio").val());  
  //  console.log(precio);

    var unidades = Number($(tr).find(".unidades").val());
    //console.log(unidades);

    var importe = precio * unidades;
  //  console.log(importe);


    $(tr).find(".importe").val(importe); //para poner un valor en un elemento

    calcularTotales();

}

function calcularTotales(){
    var subtotal = 0;
    $(".importe").each(function(){ //each es para que lo haga en cada elemento
      //  console.log(subtotal);
        subtotal += Number ($(this).val())
       // console.log(subtotal);
    });

   $("#subtotal").text(subtotal.toFixed(2));

   calcularIva(subtotal)
}

function calcularIva(subtotal){
    var iva = 0.16 * subtotal;
   // console.log(iva);
    $("#iva").text(iva.toFixed(2));

    sumaTotal(iva, subtotal);
}

function sumaTotal(iva, subtotal){
    var total = iva + subtotal;
  //  console.log(total);
    $("#final").text(total.toFixed(2));
}


$("#articulo").on("click", function(){
    let clave =  $(".claveArticulo").text();
    let desc =  $(".descArticulo").text();
    let precio =  $(".precioArticulo").text();
    console.log(clave + desc + precio);

  //  agregarArticulo(clave, desc, precio);
});

