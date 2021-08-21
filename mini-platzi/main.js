//Escuelas / Rutas de aprendizaje
class LearningPath {
    constructor({
        name,
        courses = [],
    }){
        this.name = name;
        this.courses = courses;
    }
    addNewCourse(newCourse){
        this.approvedCourses.push(newCourse)
    }
}

const escuelaWeb = new LearningPath({
    name: 'Escuela de Desarrollo Web',
    courses: ['Curso de Git y Github', 'Curso de Terminal y Linea de Comandos', 'Curso de Frontend', 'Curso de Basico de JavaScript']
});
const escuelaData = new LearningPath({
    name: 'Escuela de Ciencia de Datos',
    courses: ['Curso de Estructura de datos', 'Curso de Python']
});
const escuelaVgs = new LearningPath({
    name: 'Escuela de Videojuegos',
    courses: ['Curso de Diseño de Videojuegos', 'Curso de C#', 'Curso de Unity']
});



//Estudiantes
class Student{
    constructor({
        name,
        email,
        usarname,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = [],
    }) {
        this.name = name;
        this.email = email;
        this.usarname = usarname;
        this.socialMedia = {
            twitter,
            instagram,
            facebook
        }
        this.approvedCourses = approvedCourses; 
        this.learningPaths = learningPaths;
    }
    addLearningPaths(newLearningPaths){
        this.learningPaths.push(newLearningPaths)
    }
}

const juan = new Student({
    name: "JuanDC",
    username: "juandc",
    email: "juanito@juanito.com",
    twitter: "fjuandc",
    learningPaths: [
      escuelaWeb,
      escuelaVgs,
    ],
});
const miguelito = new Student({
    name: "Miguelito",
    username: "migelitofeliz",
    email: "miguelito@juanito.com",
    instagram: "migelito_feliz",
    learningPaths: [
      escuelaWeb,
      escuelaData,
    ],
});

console.log(juan)
console.log(miguelito)