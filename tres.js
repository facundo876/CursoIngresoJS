var precio;
var porcentaje;
var descuento;
var precioYdescunto;
var iva;
iva=0.21;
function mostrar()
{
	
	precio=prompt("Ingresar precio");
		precio=parseInt(precio);
	porcentaje=prompt("Ingresar porcentaje (%)");
		porcentaje=parseInt(porcentaje);

		descuento=precio/porcentaje;
		precioYdescunto=precio-descuento;
		iva=precioYdescunto*iva;


	alert("El descuento es de : "+"$"+descuento+"    El precio con descuento : "+precioYdescunto);
	


}	