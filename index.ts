// Import stylesheets
import './style.css';
import { dataCourses } from './dataCourses';
import { Course } from './course';


const coursesTbody: HTMLElement = document.getElementById('courses');
const btnfilterByName: HTMLElement = document.getElementById("button-filterByName");
const inputSearchBox: HTMLElement = document.getElementById("search-box");
const totalCreditElm: HTMLElement = document.getElementById("total-credits");

btnfilterByName.onclick = () => applyFilterByName();
renderCoursesInTable(dataCourses);
totalCreditElm.innerHTML = `${getTotalCredits(dataCourses)}`



function renderCoursesInTable(courses: Course[]): void {
  courses.forEach((course) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${course.name}</td>
                           <td>${course.professor}</td>
                           <td>${course.credits}</td>`;
    coursesTbody.appendChild(trElement);
  });
}


function applyFilterByName() {
  let text = inputSearchBox["value"];
  clearCoursesInTable();
  let coursesFiltered: Course[] = searchCourseByName(text, dataCourses);
  renderCoursesInTable(coursesFiltered);
}

function searchCourseByName(nameKey: string, courses: Course[]) {
  return nameKey === '' ? dataCourses : courses.filter((course) => course.name.includes(nameKey));
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