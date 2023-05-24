class Person {
  constructor(name,age) {
    this.name = name;
    this.age = age;
  }
  get getName() {
    return this.name;
  }
  set setAge(age) {
    this.age = age;
  }
}

class Student extends Person {
	constructor(){
		super(name,age)
	}
  study() {
	  super(name,age)

    console.log(`${this.name} is studying.`);
  }
}

class Teacher extends Person {
	 super(name,age)
	 constructor(){
		super(name,age)
	}
  teach() {

    console.log(`${this.name} is teaching.`);
  }
}
// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;