module.exports =  class Animal {
    name;
    age;
    color;
    constructor(name, age, color){
        this.name = name;
        this.age = age;
        this.color = color;
    }
    eat(){
        console.log("eat", this.name);
    }
    sleep(){
        console.log("sleep");
    }
}

