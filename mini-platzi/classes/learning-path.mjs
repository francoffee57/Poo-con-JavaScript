export class LearningPath {
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