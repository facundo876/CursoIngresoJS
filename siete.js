/* 
1-sexo peor nota:
2 - nombre del mas viejo :
3 - nota del mas chico*/

function mostrar()
{
	var contador=0;
	var peorNota;
	var sexoPeorNota;
	var masviejo;
	var nombreMasviejo;
	var masChico;
	var notasMaschico;


while(contador<2)
{
	contador++;

	var nombre=prompt("Ingresar nombre");
	var edad=prompt("Ingresar edad");
	edad=parseInt(edad);
	while(isNaN(edad) || edad<0 || edad>100)
	{
		edad=prompt("Error ! Ingresar edad");
		edad=parseInt(edad);
	}
	
	
	var sexo=prompt("Ingresar sexo");
	
	while(sexo!="m" && sexo!="f")
	{

		sexo=prompt("Error ! Ingresar sexo");

	}
	var nota=prompt("Ingresar nota");
	nota=parseInt(nota);
	while(isNaN(nota) || nota<0 || nota>10)
	{
		nota=prompt("Error ! Ingresar nota");
		nota=parseInt(nota);
	}

	if (contador==1) 
	{
		peorNota=nota;
		sexoPeorNota=sexo;
		masviejo=edad;
		nombreMasviejo=nombre;
		masChico=edad;
		notasMaschico=nota;

	}
	else
	{
		if (nota<peorNota) 
		{
			peorNota=nota;
			sexoPeorNota=sexo;
		}
		if (edad>masviejo) 
		{
			masviejo=edad;
			nombreMasviejo=nombre;
		}
		if(edad<masChico)
		{
			notasMaschico=nota;
		}


	}

	

}
document.write("peor nota :"+peorNota+" sexo : "+sexoPeorNota);
}