var contador=0;
var acumulador=0;
var suma=0;
function mostrar()
{
	
	while(contador<5)
	{
		acumulador=prompt("Ingresar numero");
		acumulador=parseInt(acumulador);
		suma=suma+acumulador;
		console.log(suma);
		contador++;
	}

document.getElementById('suma').value=suma;
document.getElementById('promedio').value=suma/5;

}//FIN DE LA FUNCIÓN