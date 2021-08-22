export class Student{
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

export class FreeStudent extends Student{
    constructor(props){
        super(props)
    }
    approveCourse(newCourse) {
        if (newCourse.isFree) {
          this.approvedCourses.push(newCourse);
          console.log(`Felicidades por aprobar el curso de ${newCourse.name}`)
        } else {
          console.warn("Lo sentimos, " + this.name + ", solo puedes tomar cursos abiertos");
        }
    }
}
export class ProStudent extends Student{
    constructor(props){
        super(props)
    }
    approveCourse(newCourse) {
        this.approvedCourses.push(newCourse);
        console.log(`Felicidades por aprobar el curso de ${newCourse.name}`)
    }
}