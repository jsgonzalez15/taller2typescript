import { Course} from './course';

export class Student{

  completeName: string;
  avatar:string;
  code: number;
  cardId: number;
  age: number;
  address: string;
  phone:string;
  currentCourses:Course[];

  constructor(completeName: string,code: number, cardId: number  ) {
        this.completeName = completeName;
        this.code = code;
        this.cardId = cardId;
    }

}