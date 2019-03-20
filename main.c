#include <stdio.h>
#include <stdlib.h>
// ENTREGA DE T.PRACTICO Nº1 ANTES DE 5/4/19

/*
float result;
iny n1, n2;
n1=5;
n2=2;
resul=(float)n1/n2; crea un resultado en flotante se llama castear
castea solo an n1
*/
int main()
{
   //int numero= 0;
    //while
    /*while (numero<10){ //hasta que numero deje de ser menor a 10

        numero++;
        printf("%d ,", numero);
    }*/

    //do whlie se usa cuando no sabes cuantas veses vas a repertir
    /*do{
    numero++;
    printf("%d ,", numero);
    }while(numero<10);*/

    //for

    /*for(numero=0; numero<10; numero++){

        printf("%d\n", (numero+1));
    }
    printf("%d", numero);*/

    //Ejercicio ____________________________--_____________

    /*int i, numero, promedio=0, maximo, minimo, flag=0;//

    for(i=0; i<5; i++){
        printf("Ingresar numero [%d] : ", i);
        scanf("%d", &numero);

        promedio=promedio+numero;
    }
    printf("Promedio : %d", (promedio/i));*/
    //#ctype.h bibloteca
    int valro, min, max, flag=0;
    char rta;
    do{
        if(flag==0 || numero>max){//consepto de bandera

            max=numero;
        }
        if(flag==0 || numero<min){

            min=numero;
            flag=1;
        }
      //validar
      do{
        printf("continuar [n/s]?");
        fflush(stdin);
        scanf("%d", &rta);
        rta =topper(rta);

      }while(rta!='s'&& rta!='n');
    }while(rta=='s')

    return 0;
}
//limpiar fflush( stdin );
