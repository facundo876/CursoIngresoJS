function mostrar()
{
var NumeroIngesado;
var numerosPares=0;
NumeroIngesado=prompt("Ingresar Numeros ");
for(var contador=NumeroIngesado; contador>1; contador--)
{
	
	if (contador%2==0) 
	{
		numerosPares++;	
	}
}
alert("cantidad de numeros pares : "+numerosPares);
}//FIN DE LA FUNCIÓN