class Person {
    constructor (firstName, lastName, age, gender, interest){
        this.name = {firstName: firstName, lastName: lastName};
        this.age = age;
        this.gender = gender;
        this.interests = [interest];
        this._personType = 'person';
    }
    
    addInterest(interest) {
        this.interests = [...this.interests, interest]
    }

    personalGreet(type){
        if (type == 'student'){ return console.log(`Yo! I\'m ${this.name.firstName}.`) }
        if (type == 'teacher'){ return console.log(`Hello. My name is ${this.name.lastName}, and I teach ${this.subject}.`) }
        console.log(`Hi! I\'m ${this.fullName}.`)
    }

    get fullName() {
        return `${Object.values(this.name).join(' ')}`
    }

    get bio(){
        console.log(`${this.fullName} is ${this.age} years old and likes ${this.interests.join(', ')}.`)
    }
    
    get greet(){
        this.personalGreet(this._personType);
    }

}

class Teacher extends Person{
    constructor(firstName, lastName, age, gender, interest, subject){
        super(firstName, lastName, age, gender, interest);
        this.subject = subject
        this._personType = 'teacher'
    }

    get greet() {
        return super.greet
    }
}

class Student extends Person{
    constructor(firstName, lastName, age, gender, interest){
        super(firstName, lastName, age, gender, interest);
        this._personType = 'student'
    }

    get greet() {
        return super.greet
    }
}