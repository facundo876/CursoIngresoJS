var edad;
function mostrar()
{
//tomo la edad  //dos iguales es apra COMPARAR uno es para ASIGNAR.
	edad=document.getElementById('edad').value;
			 
			/*if (edad>=18) //primero la edad mayor
			{
				alert("Usted es mayor de edad");
			}
			//if (edad>=13 && edad<=17) 
			if(!(edad>18 && edad<12))
			{
				alert("Usted es adolecente");
			}
			if (edad<13) 
			{
				alert("Niño");
			}*/
			if (edad<13) 
			{
				alert("Niño");
			}
			else
			{
				if (edad>=18) 
				{
					alert("Mayor");
				}
				else
				{
					alert("Adolecente");
				}
			}

}
