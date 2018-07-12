var edad;
var estado;
function mostrar()
{
//tomo la edad  
	edad=document.getElementById('edad').value;
	estado=document.getElementById('estadoCivil').value;
	/*if (edad<18) 
	{
		//if (estado!="Soltero") 
		if(!(estado=="Soltero"))
		{
			alert("Es muy pequeño para NO ser soltero.");
		}	*/
		if (edad<18 && estado!="Soltero") 
		{
			alert("Es muy pequeño para NO ser soltero.");
		}
	}
	


}//FIN DE LA FUNCIÓN