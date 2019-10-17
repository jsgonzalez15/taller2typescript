export class Course {

  name: string;
  credits: number;
  teacher: string[];

  constructor(name: string,credits:number, teacher: string[] ) {
        this.name = name;
        this.credits = credits;
        this.teacher = teacher;
    }
}