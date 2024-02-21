export {};

//  TYPES

// SELECT
const getElementById = <T extends HTMLElement>(id: string): T | null | string =>
  document.getElementById(id) as T | null | string;

const firstName = getElementById<HTMLInputElement>("firstName");
const lastName = getElementById<HTMLInputElement>("lastName");
const dateOfBirth = getElementById<HTMLInputElement>("dateOfBirth");
const salary = getElementById<HTMLInputElement>("salary");
const filterLevel = getElementById<HTMLInputElement>("filterLevel");
const typeOfJob = getElementById<HTMLInputElement>("typeOfJob");
const isMarried = getElementById<HTMLInputElement>("isMarried");

// EDIT
const firstNameEdit = getElementById<HTMLInputElement>("firstNameEdit");
const lastNameEdit = getElementById<HTMLInputElement>("lastNameEdit");
const groupEdit = getElementById<HTMLInputElement>("groupEdit");
const dateOfBirthEdit = getElementById<HTMLInputElement>("dateOfBirthEdit");
const salaryEdit = getElementById<HTMLInputElement>("salaryEdit");
const filterLevelEdit = getElementById<HTMLInputElement>("filterLevelEdit");
const typeOfJobEdit = getElementById<HTMLInputElement>("typeOfJobEdit");
const isMarriedEdit = getElementById<HTMLInputElement>("isMarriedEdit");

const filterSelect = getElementById<HTMLInputElement>("filterSelect");
const filterCountry = getElementById<HTMLInputElement>("filterCountry");
// const studentsList = getElementById<HTMLInputElement>("studentsList");
// const btnAddStudent = document.getElementById("btnAddStudent");
// const btnAddStudent = document.getElementById("btnAddStudent") as HTMLInputElement;

const btnEditStudent = getElementById<HTMLInputElement>;

const studentsList = document.getElementById("studentsList") as HTMLElement;

interface Student {
  id: number | string;
  firstName: string;
  lastName: string;
  group: string;
  dateOfBirth: string;
  salary: string;
  filterLevel: string;
  typeOfJob: string;
  isMarried: boolean;
}

const students: Student[] = JSON.parse(
  localStorage.getItem("students") || "[]"
);
// DISPLAY STUDENTS  ///////READ

function displayStudents(students: Student[]) {
  let str = "";
  students.map((student, i) => {
    str += `
        <tr>
                  <td>${i + 1}</td>
                  <td>${student.firstName}</td>
                  <td>${student.lastName}</td>
                  <td>${student.group}</td>
                  <td>${student.dateOfBirth}</td>
                  <td>${student.filterLevel}</td>
                  <td>${student.typeOfJob}</td>
                  <td>${student.salary}</td>
                  <td>${student.isMarried ? "Yes" : "No"}</td>
                  <td>
                    <button class="btn bg-primary btn-sm text-light" data-bs-toggle="modal"
                    data-bs-target="#editModal" onclick="editStudent(${
                      student.id
                    })">Edit</button>
                    <button class="btn btn-danger btn-sm" onclick='deleteStudent(${
                      student.id
                    })'>Delete</button>
                  </td>
        </tr>
        `;
  });
  studentsList.innerHTML = str;
}

displayStudents(students);

// /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\

// ADD STUDENT   //////
// const btnAddStudent = document.getElementById("btnAddStudent");

// const btnAddStudent = document.getElementById(
//   "btnAddStudent"
// ) as HTMLInputElement;

function addStudent() {
  const firstNameInput = document.getElementById(
    "firstName"
  ) as HTMLInputElement;
  const lastNameInput = document.getElementById("lastName") as HTMLInputElement;
  const groupSelect = document.getElementById("group") as HTMLSelectElement;
  const dateOfBirthInput = document.getElementById(
    "dateOfBirth"
  ) as HTMLInputElement;
  const filterLevelInput = document.getElementById(
    "filterLevel"
  ) as HTMLInputElement;
  const typeOfJobInput = document.getElementById(
    "typeOfJob"
  ) as HTMLInputElement;
  const salaryInput = document.getElementById("salary") as HTMLInputElement;
  const isMarriedCheckbox = document.getElementById(
    "isMarried"
  ) as HTMLInputElement;

  const student = {
    id: students.length + 1,
    firstName: firstNameInput.value,
    lastName: lastNameInput.value,
    group: groupSelect.value,
    dateOfBirth: dateOfBirthInput.value,
    filterLevel: filterLevelInput.value,
    typeOfJob: typeOfJobInput.value,
    salary: salaryInput.value,
    isMarried: isMarriedCheckbox.checked,
  };

  students.push(student);
  localStorage.setItem("students", JSON.stringify(students));
  location.reload();

  firstNameInput.value = "";
  lastNameInput.value = "";
  groupSelect.value = "";
  dateOfBirthInput.value = "";
  filterLevelInput.value = "";
  typeOfJobInput.value = "";
  salaryInput.value = "";
  isMarriedCheckbox.checked = false;
}

const btnAddStudent = document.getElementById("btnAddStudent");
btnAddStudent?.addEventListener("click", addStudent);
