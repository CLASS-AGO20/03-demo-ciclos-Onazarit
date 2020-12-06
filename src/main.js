export default class App {

    sumarParesFor(){
        let total=0;
        for(let i=2; i<=20; i+=2){
            total = total + i;
        }
    return(total);
    }

    contarImparesFor(inicio,final){
        let totalImpares = 0;
        for(let i=inicio;i<=final;i++){
            if(i % 2 != 0)
                totalImpares++;
        }
        return(totalImpares);
    }

    sumarParesWhile(){
        let total=0;
        let i=2;
        while(i<=20){
            total = total + i;
            i+=2;
        }
        return(total);
    }

    contarImparesWhile(inicio, fin){
        let totalImpares = 0;
        while(inicio <= fin){
            if(inicio %2 !=0)
                totalImpares++;
            inicio++;
        }
        return(totalImpares);
    }
    
    sumarParesDo(){
        let total=0, i=2;
        do{
            total = total + i;
            i+=2;
        }while(i<=20)
        return(total);
    }

    contarImparesDo(inicio, fin){
        let totalImpares=0;
        do{
            if(inicio % 2 != 0){
                totalImpares++;
            }
            inicio++;
        }while(inicio <= fin);
        return(totalImpares);
    }
}

let app = new App();
console.log("La suma de pares del 2 - 20 es: "+app.sumarParesFor());
console.log("Entre el 2 y el 10 hay "+app.contarImparesFor(2,10)+" numeros impares");
console.log("La suma de pares del 2 - 20 es: "+app.sumarParesWhile());
console.log("Entre el 8 y el 20 hay "+app.contarImparesWhile(8,20)+" numeros impares");
console.log("La suma de pares del 2 - 20 es: "+app.sumarParesDo());
console.log("Entre el 10 y el 40 hay "+app.contarImparesDo(10,40)+" numeros impares");