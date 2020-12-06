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

    
}

let app = new App();
console.log("La suma de pares del 2 - 20 es: "+app.sumarParesFor());
console.log("Entre el 0 y el 6 hay "+app.contarImparesFor(2,10)+" numeros impares");