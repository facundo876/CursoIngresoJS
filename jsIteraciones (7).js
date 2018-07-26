function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var suma=0;

	while(respuesta!="no")
	{
		contador++;
		acumulador=prompt("Ingresar numero");
		acumulador=parseInt(acumulador);
			suma=suma+acumulador;
			console.log(suma);
		respuesta=prompt("Desea continuar ?");
	}

document.getElementById('suma').value=suma;
document.getElementById('promedio').value=suma/contador;

}//FIN DE LA FUNCION
