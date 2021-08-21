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
function Studens(name, age, cursosAprobados){
    this.name = name,
    this.age = age,
    this.cursosAprobados = cursosAprobados
}

Studens.prototype.aprobarCursos = function (newCursoAprobado){
    this.cursosAprobados.push(newCursoAprobado);
}

const alejandra = new Studens(
    'Alejandra', 
    29, 
    ['Figma', 'Introducción al diseño UI y UX']
)
alejandra.aprobarCursos(`Illustrator`)
console.log(alejandra)