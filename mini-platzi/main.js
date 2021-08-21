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
        cursosAprobados = [],
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

const pablito = new Students2({
    name: 'Pabito',
    age: 23,
    email: 'pablito123@email.com'
})
console.log(pablito)
pablito.aprobarCurso('Curso de terminal y linea de comandos')
console.log(pablito)