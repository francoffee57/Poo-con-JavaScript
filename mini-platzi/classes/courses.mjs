export class Courses {
    constructor({
        name,
        classes,
        exam = false,
        certificate = false,
    }) {
        this.name = name;
        this.classes = classes;
        this._exam = exam;
        this.certificate = certificate;
    }
    get resExam(){
        if (this._exam) {
            return `Certificado del curso de ${this.name}`
        }else{
            return `Tadavia no apruebas el examen del curso de ${this.name}`
        }
    }
    set certificate(exam){
        if(this.exam){
            Student.approvedCourses.push(this.name) 
            return `Felicidades por completar el curso de ${this.name}`
        }
    }
}