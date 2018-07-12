var edad;
function mostrar()
{
//tomo la edad  //dos iguales es apra COMPARAR uno es para ASIGNAR.
	edad=document.getElementById('edad').value;
	//edad=parseInt(edad);
		/*if (edad>=13)//es true si edad es MAYOR IGUAL 18.
		{
			if (edad<=17) 
			{
				alert("Usted es adolecente");
			}*/
			if (edad<=17 && edad>=13) //primero la edad mayor
			{
				alert("Usted es adolecente");
			}
			
}

//FIN DE LA FUNCIÓN