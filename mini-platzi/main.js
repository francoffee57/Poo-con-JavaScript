// Objeto literar.
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