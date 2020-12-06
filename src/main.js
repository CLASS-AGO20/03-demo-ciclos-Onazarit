export default class App {

    sumarParesFor(){
        let total=0;
        for(let i=2; i<=20; i+=2){
            total = total + i;
        }
    return(total);
    }

    
}

let app = new App();
console.log("La suma de pares del 2 - 20 es: "+app.sumarParesFor());
