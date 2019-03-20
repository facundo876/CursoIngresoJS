#include <stdio.h>
#include <stdlib.h>

int main()
{
    char valor= 'b';
    switch(valor){
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
            printf("a dormir");
            break;
        case '7':
            printf("buenos dias");
            break;
        case '8':
            printf("cualquier cosa");
            break;
        case 'a':
                printf("10");
                break;
        default:
                    printf("error");
                    break;
    }


    return 0;
}
