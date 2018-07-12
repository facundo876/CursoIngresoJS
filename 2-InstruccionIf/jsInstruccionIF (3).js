var edad;
function mostrar()
{
//tomo la edad  //dos iguales es apra COMPARAR uno es para ASIGNAR.
	edad=document.getElementById('edad').value;
		if (edad>=18)//es true si edad es MAYOR IGUAL 18.
		{
			alert("Es mayor de edad");
		}
			/*if (edad<=17) 
			{
				alert("Es menor de edad");
			}*/
		else
		{
			alert("Es menor de edad");
		}

}//FIN DE LA FUNCIÓN