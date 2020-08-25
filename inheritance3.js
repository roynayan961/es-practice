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
    getFullName1(){
        return this.name +" " + this.fatherName

    }
    getFullName2(){
        return this.name + " " + this.motherName

    }
}
const baby1 = new Child ("Srekrishna")
console.log(baby1.getFullName1())
const baby2 = new Child("Mohamaya")
console.log(baby2.getFullName2())