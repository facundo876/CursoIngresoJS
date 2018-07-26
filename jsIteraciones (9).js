var respuesta='si';
var contador=0;
var numero;
var mayor=0;
var menor=99999999;
function mostrar()
{

	while(respuesta!='no')
	{
		numero=prompt("Ingresar numero");
		numero=parseInt(numero);	
		if(numero>mayor);
		{
			mayor=numero;
				
		}
		if(numero<menor)
		{
			menor=numero;
		}
		respuesta=prompt("Desea continuar ?");
	}

	document.getElementById('maximo').value=mayor;
	document.getElementById('minimo').value=menor;
}//FIN DE LA FUNCIÓN