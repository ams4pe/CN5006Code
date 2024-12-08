class Person {
    constructor(name, age, email){
        this.name = name;
        this.age = age;
        this.email = email;
    }

    getPersonInfo(){
        return `My name : ${this.name} and age is ${this.age}. Email : ${this.email}`
    }
}

module.exports = Person;