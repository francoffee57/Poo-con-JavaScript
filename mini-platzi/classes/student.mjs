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
