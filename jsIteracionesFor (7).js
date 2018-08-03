function mostrar()
{ 	
	var numero=parseInt(prompt("Ingresar numero"));
	var divisores;


	for(var contador=2; contador<numero; contador++)
	{
		if (numero%contador==0) 
		{
			console.log(contador);
		}
	}


}//FIN DE LA FUNCIÓN