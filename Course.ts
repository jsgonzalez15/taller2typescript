export class Course {

  name: string;
  credits: number;
  teacher: any;

  constructor(name: string,credits:number, teacher: any ) {
        this.name = name;
        this.credits = credits;
        this.teacher = teacher;
    }
}