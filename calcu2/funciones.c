
int suma(y,x){
    int resultado;

    resultado=y+x;
    return resultado;
}
int resta(y,x){
    int resultado;

    resultado=y-x;
    return resultado;
}
int dividir(y,x){
    float resultado;

    resultado=y/x;
    return resultado;
}
int multiplicar(y,x){
    int resultado;

    resultado=y*x;
    return resultado;
}
int factoriar(y){
    int resultado=1, i;

    for(i=1; i<=y; i++){
        resultado*= i;
    }

    return resultado;
}
