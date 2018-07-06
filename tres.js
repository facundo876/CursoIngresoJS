var precio;
var porcentaje;
var descuento;
var precioYdescunto;
var iva;

function mostrar()
{
	
	precio=prompt("Ingresar precio");
		precio=parseInt(precio);
	porcentaje=prompt("Ingresar porcentaje (%)");
		porcentaje=parseInt(porcentaje);

		descuento=precio*porcentaje/100;
		precioYdescunto=precio-descuento;
		iva=precioYdescunto*21/100;


	alert("El descuento es de : "+"$"+descuento+"    El precio con descuento : "+precioYdescunto);
	


}	