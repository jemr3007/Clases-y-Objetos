//Clase padre
class Mamiferos{
    // Constructor
    constructor(){
    } 

    Respirar(){
        console.log("Soy capaz de respirar");
    }

    CuidarCrias(){
        console.log("Cuido de mis crias hasta que se valgan por si solas")
    }

}

//Clase Hija
class Caballo extends Mamiferos{
    //Constructor
    constructor(){
        super();
    } 

    galopar(){
        console.log("Soy capaz de galopar");
    }
}

//Clase hija
class Humano extends Mamiferos{
    //Constructors
    constructor(){
        super();
    }

    Pensar(){     
        console.log("Soy capaz de pensar")
    }

    Caminar(){     
        console.log("Soy capaz de caminar")
    }

}
console.log("---------------------Objeto Persona---------------------------------");
//instancia o objeto (persona) de la clase humanos
let persona = new Humano();
persona.Respirar();
persona.Caminar();
persona.Pensar();
console.log("---------------------Objeto Animal---------------------------------");
//instancia o objeto (animal) de la clase Caballo
let animal = new Caballo();
animal.Respirar();
animal.galopar();
animal.CuidarCrias();
console.log("-------------------------------------------------------------------");
console.log("---------------------Objeto Array Manual---------------------------");
// /instancia o objeto con un array manual
var personas = [
    {
        Nombre:"Claudia",
        edad:22
    },
    {
        Nombre: "carlos",
        edad:23
    }
];

console.log(personas)


