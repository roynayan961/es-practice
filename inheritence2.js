class Parent{

    constructor(){
        this.fatherName = "Vasusdev";
        this.motherName = "Devaki"
       
    }

}


class Child extends Parent{
   
    constructor(name){
        super();
        this.name = name;

    }
}
const baby1 = new Child ("Srekrishna")
console.log(baby1)
const baby2 = new Child("Mohamaya")
console.log(baby2)