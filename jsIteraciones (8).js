var contador=0;
var positivo=0;
var negativo=1;	
var respuesta='si';
function mostrar()
{
while(respuesta!="no")
{
	contador=prompt("Ingresar numeros");contador=parseInt(contador);
		if(contador>0)
		{
			positivo=positivo+contador;
			console.log("Suma "+positivo);
		}
		else
		{
			negativo=negativo*contador;
			console.log("Mulplicacion "+negativo);
		}
	respuesta=prompt("Desea continuar ?");
}

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN