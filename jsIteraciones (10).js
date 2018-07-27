
var respuesta="si";
var numero;
var negativos=0;
var positivo=0;
var contadorPosi=0;	
var contadorNega=0;
var ceros=0;
var promedioPosi=0;
var promedioNega=0;
var diferencia;
var cantidadDepares=0;


function mostrar()
{
	while(respuesta!="no")
	{

		numero=prompt("Ingresar numero");numero=parseInt(numero);
		if(numero<0)
		{
			negativos=negativos+numero;
			contadorNega++;
				if(numero%2==0)
				{
					cantidadDepares++;
				}
		}
		else if (numero==0)
		{
			ceros++;

		}
		else
		{
			positivo=positivo+numero;
			contadorPosi++;
				if(numero%2==0)
				{
					cantidadDepares++;
				}
		}

		respuesta=prompt("Ingrese NO para salir ");
	}

	promedioNega=negativos/contadorNega;
	promedioPosi=positivo/contadorPosi;

	diferencia=positivo-negativos;


document.write("La suma de negativos es : "+negativos+"<br>"+
" La suma de positivos es : "+positivo+"<br>"+
" contador Positivos : "+contadorPosi+"<br>"+
" Contador negativos : "+contadorNega+"<br>"+
" Cantidad de ceros : "+ceros+"<br>"+
" Cantidad de pares : "+cantidadDepares +"<br>"+
" Promedio negrativos : "+promedioNega+"<br>"+
" Promedio positivos : "+promedioPosi+"<br>"+
" Diferencia de N y P : "+diferencia);


}//FIN DE LA FUNCIÓN