var edad;
function mostrar()
{
//tomo la edad  //dos iguales es apra COMPARAR uno es para ASIGNAR.
	edad=document.getElementById('edad').value;
			//if(!(edad<18 && edad>12)) //invierte los signos 
			if (edad>=18 || edad<=12) //primero la edad mayor
			{
				alert("Usted NO es adolecente");
			}

}

