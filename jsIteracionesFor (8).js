function mostrar()
{
	var numero=prompt("Ingrese un numero");
	numero=parseInt(numero);

	if(numero==1 || numero==2)
	{
		mensaje=" El "+numero+" es primo";
	}
	else
	{
		for( var contador=2; contador<numero; contador++)
		{
			if (numero % contador == 0) 
			{
				mensaje="El numero "+numero+ " no es primo";
				break;
			}
			else
			{
				mensaje="El numero "+numero+ " es primo";
				break;
			}
		}
	}
	alert(mensaje);
}	