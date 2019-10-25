// Import stylesheets
import './style.css';
import { dataCourses } from './dataCourses';
import { dataStudent } from './dataStudent';
import { Course } from './Course';
import { Student } from './Student';


const coursesTbody: HTMLElement = document.getElementById('courses');
const studentsTbody: HTMLElement = document.getElementById('infoStudent');
const btnfilterByName: HTMLElement = document.getElementById("button-filterByName");
const btnfilterByCredits: HTMLElement = document.getElementById("button-filterByCreditos");
const inputSearchBox: HTMLElement = document.getElementById("search-box");
const inputSearchBox2: HTMLElement = document.getElementById("search-box2");
const inputSearchBox3: HTMLElement = document.getElementById("search-box3");
const totalCreditElm: HTMLElement = document.getElementById("total-credits");

btnfilterByName.onclick = () => applyFilterByName();
btnfilterByCredits.onclick = () => applyFilterByCourseRange();
renderCoursesInTable(dataCourses);
renderStudentsInTable(dataStudent);
totalCreditElm.innerHTML = `${getTotalCredits(dataCourses)}`



function renderCoursesInTable(courses: Course[]): void {
  courses.forEach((course) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${course.name}</td>
                           <td>${course.teacher.name + ' '+ course.teacher.numOffice}</td>
                           <td>${course.credits}</td>`;
    coursesTbody.appendChild(trElement);
  });
}

function renderStudentsInTable(Student: Student): void {
  
    let trElement2 = document.createElement("tr");
    trElement2.innerHTML = `<td>${Student.name}</td>
                           <td>${Student.code}</td>
                           <td>${Student.cardId}</td>
                           <td>${Student.age}</td>
                           <td>${Student.address}</td>
                           <td>${Student.phone}</td>`;
    studentsTbody.appendChild(trElement2);
}
function applyFilterByName() {
  let text = inputSearchBox["value"];
  clearCoursesInTable();
  let coursesFiltered: Course[] = searchCourseByName(text, dataCourses);
  renderCoursesInTable(coursesFiltered);
}

function applyFilterByCourseRange() {
  let numbermin = inputSearchBox2["value"];
  let numbermax = inputSearchBox3["value"];
  let text = inputSearchBox2["value"];
  clearCoursesInTable();
  let coursesFiltered: Course[] = searchCourseByRange(text,numbermin,numbermax, dataCourses);
  renderCoursesInTable(coursesFiltered);
}

function searchCourseByName(nameKey: string, courses: Course[]) {
  return nameKey === '' ? dataCourses : courses.filter((course) => course.name.includes(nameKey));
}

function searchCourseByRange( nameKey: string,creditsmin: number, creditsmax: number, courses: Course[]) {
  return nameKey === '' ? dataCourses : courses.filter((course) => course.credits >= creditsmin &&course.credits<= creditsmax);
}


function getTotalCredits(courses: Course[]): number {
  let totalCredits: number = 0;
  courses.forEach((course) => totalCredits = totalCredits + course.credits);
  return totalCredits;
}

function clearCoursesInTable() {
  while (coursesTbody.hasChildNodes()) {
    coursesTbody.removeChild(coursesTbody.lastChild);
  }
}
