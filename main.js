"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  TYPES
// SELECT
var getElementById = function (id) {
    return document.getElementById(id);
};
var firstName = getElementById("firstName");
var lastName = getElementById("lastName");
var dateOfBirth = getElementById("dateOfBirth");
var salary = getElementById("salary");
var filterLevel = getElementById("filterLevel");
var typeOfJob = getElementById("typeOfJob");
var isMarried = getElementById("isMarried");
// EDIT
var firstNameEdit = getElementById("firstNameEdit");
var lastNameEdit = getElementById("lastNameEdit");
var groupEdit = getElementById("groupEdit");
var dateOfBirthEdit = getElementById("dateOfBirthEdit");
var salaryEdit = getElementById("salaryEdit");
var filterLevelEdit = getElementById("filterLevelEdit");
var typeOfJobEdit = getElementById("typeOfJobEdit");
var isMarriedEdit = getElementById("isMarriedEdit");
var filterSelect = getElementById("filterSelect");
var filterCountry = getElementById("filterCountry");
// const studentsList = getElementById<HTMLInputElement>("studentsList");
// const btnAddStudent = document.getElementById("btnAddStudent");
// const btnAddStudent = document.getElementById("btnAddStudent") as HTMLInputElement;
var btnEditStudent = (getElementById);
var studentsList = document.getElementById("studentsList");
var students = JSON.parse(localStorage.getItem("students") || "[]");
// DISPLAY STUDENTS  ///////READ
function displayStudents(students) {
    var str = "";
    students.map(function (student, i) {
        str += "\n        <tr>\n                  <td>".concat(i + 1, "</td>\n                  <td>").concat(student.firstName, "</td>\n                  <td>").concat(student.lastName, "</td>\n                  <td>").concat(student.group, "</td>\n                  <td>").concat(student.dateOfBirth, "</td>\n                  <td>").concat(student.filterLevel, "</td>\n                  <td>").concat(student.typeOfJob, "</td>\n                  <td>").concat(student.salary, "</td>\n                  <td>").concat(student.isMarried ? "Yes" : "No", "</td>\n                  <td>\n                    <button class=\"btn bg-primary btn-sm text-light\" data-bs-toggle=\"modal\"\n                    data-bs-target=\"#editModal\" onclick=\"editStudent(").concat(student.id, ")\">Edit</button>\n                    <button class=\"btn btn-danger btn-sm\" onclick='deleteStudent(").concat(student.id, ")'>Delete</button>\n                  </td>\n        </tr>\n        ");
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
    var firstNameInput = document.getElementById("firstName");
    var lastNameInput = document.getElementById("lastName");
    var groupSelect = document.getElementById("group");
    var dateOfBirthInput = document.getElementById("dateOfBirth");
    var filterLevelInput = document.getElementById("filterLevel");
    var typeOfJobInput = document.getElementById("typeOfJob");
    var salaryInput = document.getElementById("salary");
    var isMarriedCheckbox = document.getElementById("isMarried");
    var student = {
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
var btnAddStudent = document.getElementById("btnAddStudent");
btnAddStudent === null || btnAddStudent === void 0 ? void 0 : btnAddStudent.addEventListener("click", addStudent);
