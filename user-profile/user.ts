export class User{
   
    name:string;
    firstName : string;
    age : number;
    //quote : '',
    photo : string;
   
    constructor(name:string, fisrtName:string, age:number, photo:string){
        this.name = name;
        this.firstName = fisrtName;
        this.age = age;
        this.photo = photo;
    }
}