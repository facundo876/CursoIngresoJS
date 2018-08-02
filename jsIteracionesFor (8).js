function mostrar()
{
var primos=0;
var NumeroIngesado=prompt("Ingresar numero");
	NumeroIngesado=parseInt(NumeroIngesado);
var mensaje;

for(var contador=NumeroIngesado; contador>=1; contador--)
{
	if (NumeroIngesado%contador==0 && NumeroIngesado&NumeroIngesado==1) 
	{
		primos++;
	}
}

alert(primos);
}//FIN DE LA FUNCIÓN