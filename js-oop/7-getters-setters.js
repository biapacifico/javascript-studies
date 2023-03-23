class Student {
    constructor (name, course, semester){
        this.name = name,
        this.course = course,
        this.semester = semester
    }
    get studentName (){
        return this.name
    }
    set studentName (studentName){
        this.name = studentName
    }
}

let myself = new Student (" ", "Computer Engineer", 2)
console.log (myself)
myself.studentName = "Bianca"
console.log (myself.name)