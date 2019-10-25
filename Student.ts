import { Course} from './course';

export class Student{

  name: string;
  avatar:string;
  code: number;
  cardId: number;
  age: number;
  address: string;
  phone:string;
  currentCourses:Course[];

  constructor(name: string,code: number, cardId: number,age:number,address:string,phone:string ) {
        this.name = name;
        this.code = code;
        this.cardId = cardId;
        this.age = age;
        this.address = address;
        this.phone = phone;
    }

}