export class Courses {
    constructor({
        name,
        classes,
        examPassed = false,
        certificate = false,
        isFree
    }) {
        this.name = name;
        this.classes = classes;
        this.isFree = isFree;
        this.examPassed = examPassed;
        this.certificate = certificate;
    }
    // get resExam(){
    //     if (this.examPassed) {
    //         return `Felicidades por aprobar el curso de ${this.name}!!`
    //     }else{
    //         return `Tadavia no apruebas el examen del curso de ${this.name}`
    //     }
    // }
    // getCertificate(){
    //     if(this.examPassed && this.certificate){
    //         return `Certificado del curso de ${this.name}`
    //     }
    //     else if(this.examPassed){
    //         return `Para obtener tu certificado debes convertirte en estudiante premium`
    //     }
    //     else{
    //         return `Lo sentimos todavia no puedes optener el certificado :(`
    //     }
    // }

}

// class FreeCourses extends Courses{
//     constructor(props){
//         super(props)
//     }
// }
// class ProCourses extends Courses{
//     constructor(props, certificate){
//         super(props);
//         this.certificate = certificate;
//     }
//     getCertificate(){
//         if(this.examPassed){
//             return `Certificado del curso de ${this.name}`
//         }
//     }
// }

