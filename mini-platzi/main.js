//Classes ------------------------------------------------------
class classes {
    constructor({
        nameClasse,
        resources = undefined,
    })
    {
        this.nameClasse = nameClasse;
        this.resources = resources;
    }
}

const precentacion = new classes({
    nameClasse: 'Precentación del curso'
})
const cierreCurso = new classes({
    nameClasse: 'Cierre del curso y proximos pasos'
})
const introLineaComandos = new classes({
    nameClasse: 'Introducción a la linea de comandos'
})
const queUnity = new classes({
    nameClasse: '¿Qué es Unity?'
})


//Courses -----------------------------------------------------
class Courses {
    constructor({
        name,
        classes,
        exam = false,
    }) {
        this.name = name;
        this.classes = classes;
        this.exam = exam;
        this.certificate = certificate;
    }
    certificate(){
        if(this.exam){
            return `Felicidades por completar el curso de ${this.name}`
        }
    }
}

const gitGithub = new Courses({
    name: 'Curso de Git y Github',
    classes = [
        precentacion,
        cierreCurso
    ]
})
const terminalComandos = new Courses({
    name: 'Curso de Terminal y Linea de Comandos',
    classes = [
        precentacion,
        introLineaComandos,
        cierreCurso
    ]
})
const programacionBasica = new Courses({
    name: 'Curso Gratis de Programación Básica',
    classes = [
        precentacion,
        cierreCurso
    ]
})
const python = new Courses({
    name: 'Curso de Python',
    classes = [
        precentacion,
        cierreCurso
    ]
})
const disVideojuegos= new Courses({
    name: 'Curso de Diseño de Videojuegos',
    classes = [
        precentacion,
        cierreCurso
    ]
})
const unity = new Courses({
    name: 'Curso de Unity',
    classes = [
        precentacion,
        queUnity,
        cierreCurso
    ]
})


//Escuelas / Rutas de aprendizaje --------------------------------------
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
    courses: [
        programacionBasica,
        gitGithub,
        terminalComandos, 
    ]

});
const escuelaData = new LearningPath({
    name: 'Escuela de Ciencia de Datos',
    courses: [
        programacionBasica,
        python
    ]
});
const escuelaVgs = new LearningPath({
    name: 'Escuela de Videojuegos',
    courses: [
        programacionBasica,
        disVideojuegos,  
    
    ]
});



//Estudiantes ---------------------------------------------------------------------------------------
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

