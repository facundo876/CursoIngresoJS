function mostrar()
{
var NumeroIngesado;
var divisores=0;
NumeroIngesado=prompt("Ingresar Numeros ");
for(var contador=NumeroIngesado; contador>1; contador--)
{
	
	if (contador) 
	{
		divisores++;	
	}
}
alert("cantidad de divisores : "+divisores);
}//FIN DE LA FUNCIÓN