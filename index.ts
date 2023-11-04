// classes in typescript


class School {
    name: string;

    students: Student[] = [];
    teachers: Teacher[] = [];

    addStudent(stobj: Student) {
        this.students.push(stobj)
    }

    addTeacher(techobj: Teacher) {
        this.teachers.push(techobj)
    }

    constructor(name: string) {
        this.name = name;
    }
};
class Student {
    name: string;
    age: number;
    schoolName: string;
    constructor(name: string, age: number, schoolName: string) {
        this.name = name;
        this.age = age;
        this.schoolName = schoolName;
    }
};

class Teacher extends Student {
    email: string = "";
    contact: string = "";
    addInfo(email: string, contact: string) {
        this.email = email;
        this.contact = contact;
    }
};


let school1 = new School("Alpha");
let school2 = new School("Nobdy");


let s1 = new Student("Sohail", 22, school1.name);
let s2 = new Student("Sammad", 20, school2.name);
let s3 = new Student("Erum", 28, school2.name);

let t1 = new Teacher("Saima", 25, school1.name);
let t2 = new Teacher("Aena", 26, school2.name);
let t3 = new Teacher("Kiran", 27, school2.name);

// add info
t1.addInfo("abc@abc.com", "123456");
t2.addInfo("efgh@abc.com", "765439");
t3.addInfo("ghy@abc.com", "235680");

// add student

school1.addStudent(s1);
school2.addStudent(s2);
school2.addStudent(s3);

// add teacher

school1.addTeacher(t1);
school2.addTeacher(t2);
school2.addTeacher(t3);

//  console.log(t1);
//  console.log(t2);
//  console.log(t3);


console.log(school1);
console.log(school2);