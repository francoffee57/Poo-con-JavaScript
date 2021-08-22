//Importando las clases
import { Student, ProStudent, FreeStudent } from "./classes/student.mjs";
import { LearningPath } from "./classes/learning-path.mjs";
import { Courses } from "./classes/courses.mjs";
import { classesMiniPlatzi } from "./classes/classes-mini-platzi.mjs";

//Clases de los cursos ----------------------------------------------------------------------------------
const precentacion = new classesMiniPlatzi({
    nameClasse: 'Precentación del curso',
    videoID : '42dwdas',
})
const cierreCurso = new classesMiniPlatzi({
    nameClasse: 'Cierre del curso y proximos pasos',
    videoID : 'i54fio',
})
const introLineaComandos = new classesMiniPlatzi({
    nameClasse: 'Introducción a la linea de comandos',
    videoID : 'ancioaufh2',
})
const queUnity = new classesMiniPlatzi({
    nameClasse: '¿Qué es Unity?',
    videoID : '79gbaufsa',
})


//Courses ----------------------------------------------------------------------------------------------
const gitGithub = new Courses({
    name: 'Curso de Git y Github',
    classes : [
        precentacion,
        cierreCurso,
    ],
})
const terminalComandos = new Courses({
    name: 'Curso de Terminal y Linea de Comandos',
    classes : [
        precentacion,
        introLineaComandos,
        cierreCurso,
    ],
})
const programacionBasica = new Courses({
    name: 'Curso Gratis de Programación Básica',
    classes : [
        precentacion,
        cierreCurso
    ],
    isFree: true,
})
const python = new Courses({
    name: 'Curso de Python',
    classes : [
        precentacion,
        cierreCurso
    ]
})
const disVideojuegos= new Courses({
    name: 'Curso de Diseño de Videojuegos',
    classes : [
        precentacion,
        cierreCurso
    ]
})
const unity = new Courses({
    name: 'Curso de Unity',
    classes : [
        precentacion,
        queUnity,
        cierreCurso
    ]
})


//Escuelas / Rutas de aprendizaje -----------------------------------------------------------------------
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
const juan = new Student({
    name: "JuanDC",
    usarname: "juandc",
    email: "juanito@juanito.com",
    twitter: "fjuandc",
    learningPaths: [
      escuelaWeb,
      escuelaVgs,
    ],
});
const miguelito = new Student({
    name: "Miguelito",
    usarname: "migelitofeliz",
    email: "miguelito@juanito.com",
    instagram: "migelito_feliz",
    learningPaths: [
      escuelaWeb,
      escuelaData,
    ],
});



const juanito = new FreeStudent({
    name: "JuanDC",
    username: "juandc",
    email: "juanito@juanito.com",
    twitter: "fjuandc",
    learningPaths: [
      escuelaWeb,
      escuelaVgs,
    ],
  });
  
  const migue = new ProStudent({
    name: "Miguelito",
    username: "migelitofeliz",
    email: "miguelito@juanito.com",
    instagram: "migelito_feliz",
    learningPaths: [
      escuelaWeb,
      escuelaData,
    ],
  });

  const imprime = migue.approveCourse(python)

  console.log(imprime)