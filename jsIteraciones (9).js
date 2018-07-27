var respuesta='si';
var numero;
var mayor;
var menor;
var contador;

function mostrar()
{

	while(respuesta!='no')
	{
		contador++;
		numero=prompt("Ingresar numero");
		numero=parseInt(numero);	
			//mayor=Math.max(numero,mayor);
			//menor=Math.min(numero,menor);
			if (contador==1) 
			{
				mayor=numero;
				menor=numero;
			}
			else
			{
				if (numero>mayor) {}
			}
		respuesta=prompt("Desea continuar ?");
	}

	document.getElementById('maximo').value=mayor;
	document.getElementById('minimo').value=menor;
}//FIN DE LA FUNCIÓN