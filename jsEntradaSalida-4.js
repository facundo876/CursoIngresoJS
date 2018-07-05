/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var nombre;
	nombre=prompt("ingresar nombre");
	document.getElementById('elNombre').value=(nombre);
}

//Siempre guardar antes de actualizar