var numeroUno;
var numeroDos;
var resultado;
function mostrar()
{
 	numeroUno=prompt("Ingresar numero");
 	numeroUno=parseInt(numeroUno)
 	numeroDos=prompt("Ingresar numero");
 	numeroDos=parseInt(numeroDos);

 	if (numeroUno==numeroDos) 
 	{
 		alert(numeroUno+" "+numeroDos);
 	}
 	else
 	{
 		if (numeroUno>numeroDos) 
 		{
 			resultado=numeroUno/numeroDos;
 			alert("Resultado de la division " +resultado);
 		}
 		else
 		{
 			resultado=numeroUno+numeroDos;
 			if(resultado<50)
 			{
 				alert("La suma es "+resultado+" y es menor a 50");
 			}
 			else
 			{
				alert("La suma es "+resultado);
 			}
 			
 		}
 	}

}
