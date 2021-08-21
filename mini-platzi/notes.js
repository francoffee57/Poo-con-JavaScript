// Objeto literal.
const nathaly = {
    name: 'Nat',
    age : '24',
    cursosAprobados: ['Tecnicas de estudio', 'Git y GitHub'],

    aprobarCursos (newCursoAprobado){
        this.cursosAprobados.push(newCursoAprobado)
    },
}

nathaly.aprobarCursos('CSS Grid')
console.log(nathaly)



//Prototipos
function Students(name, age, cursosAprobados){
    this.name = name,
    this.age = age,
    this.cursosAprobados = cursosAprobados
}

Students.prototype.aprobarCursos = function (newCursoAprobado){
    this.cursosAprobados.push(newCursoAprobado);
}



// Instancia de prototipos
const alejandra = new Students(
    'Alejandra', 
    29, 
    ['Figma', 'Introducción al diseño UI y UX']
)
alejandra.aprobarCursos(`Illustrator`)
console.log(alejandra)


//Prototipos usando la sintaxis de clases
//En ves de pasar cada parametro podemos enviar un objeto literal que tenga la información que necesitamos. Tambien podemos inicializarlos
class Students2{
    constructor({
        name,
        age,
        email,
        cursosAprobados = [], //podemos inicializar valores por defecto
    }){
        this.name = name;
        this.age = age;
        this.email = email;
        this.cursosAprobados = cursosAprobados
    }

    aprobarCurso(nuevoCursito) {
        this.cursosAprobados.push(nuevoCursito);
      }
}

//Como le pasamos un objeto podemos pasar los datos sin importar el orden.
const pablito = new Students2({
    name: 'Pabito',
    email: 'pablito123@email.com',
    age: 23
})
console.log(pablito)

pablito.aprobarCurso('Curso de terminal y linea de comandos')
console.log(pablito)

//Exportar una clase o una funcion
    //export default class NomClase{}

//importar una clase o una funcion
    //import NomClase from './ruta.mjs' 

// para trabajar con modulos a los archivos los huardamos con la extencian ".mjs"
    //import { PlatziClass } from "./main.mjs";

//Para exportarlos a HTML:
    //<script src="module.mjs" type="module"></script>
