// SELECT
var firstName = document.getElementById("firstName");
var lastName = document.getElementById("lastName");
var group = document.getElementById("group");
var dateOfBirth = document.getElementById("dateOfBirth");
var salary = document.getElementById("salary");
var filterLevel = document.getElementById("filter");
var typeOfJob = document.getElementById("typeOfJob");
var isMarried = document.getElementById("isMarried");
// EDIT
var firstNameEdit = document.getElementById("firstNameEdit");
var lastNameEdit = document.getElementById("lastNameEdit");
var groupEdit = document.getElementById("groupEdit");
var dateOfBirthEdit = document.getElementById("dateOfBirthEdit");
var salaryEdit = document.getElementById("salaryEdit");
var filterLevelEdit = document.getElementById("filterLevelEdit");
var typeOfJobEdit = document.getElementById("typeOfJobEdit");
var isMarriedEdit = document.getElementById("isMarriedEdit");
var filterSelect = document.getElementById("filter-select");
var filterCountry = document.getElementById("filter-country");
var studentsList = document.getElementById("students-list");
var btnAddStudent = document.getElementById("btn-add-student");
var btnEditStudent = document.getElementById("btn-edit-student");
var students = JSON.parse(localStorage.getItem("students")) || [];
displayStudents(students);
// \/\/\/\/\/\/\/\/\/\/\/\/\/\/\
// DISPLAY STUDENTS  ///////READ
function displayStudents(students) {
    var str = "";
    students.map(function (student, i) {
        str += "\n      <tr>\n                <td>".concat(i + 1, "</td>\n                <td>").concat(student.firstName, "</td>\n                <td>").concat(student.lastName, "</td>\n                <td>").concat(student.group, "</td>\n                <td>").concat(student.dateOfBirth, "</td>\n                <td>").concat(student.filterLevel, "</td>\n                <td>").concat(student.typeOfJob, "</td>\n                <td>").concat(student.salary, "</td>\n                <td>").concat(student.isMarried ? "Yes" : "No", "</td>\n                <td>\n                  <button class=\"btn bg-primary btn-sm text-light\" data-bs-toggle=\"modal\"\n                  data-bs-target=\"#editModal\" onclick=\"editStudent(").concat(student.id, ")\">Edit</button>\n                  <button class=\"btn btn-danger btn-sm\" onclick='deleteStudent(").concat(student.id, ")'>Delete</button>\n                </td>\n      </tr>\n      ");
    });
    studentsList.innerHTML = str;
}
displayStudents(students);
// \/\/\/\/\/\/\/\/\/\/\/\/\/\/\
// ADD STUDENT   //////CREATE
function addStudent() {
    var student = {
        id: students.length + 1,
        firstName: firstName.value,
        lastName: lastName.value,
        group: group.value,
        dateOfBirth: dateOfBirth.value,
        filterLevel: filterLevel.value,
        typeOfJob: typeOfJob.value,
        salary: salary.value,
        isMarried: isMarried.checked,
    };
    students.push(student);
    localStorage.setItem("students", JSON.stringify(students));
    location.reload();
    firstName.value = "";
    lastName.value = "";
    group.value = "";
    dateOfBirth.value = "";
    filterLevel.value = "";
    typeOfJob.value = "";
    salary.value = "";
    isMarried.checked = false;
}
btnAddStudent.addEventListener("click", addStudent);
// \/\/\/\/\/\/\/\/\/\/\/\/\/\/\
// DELETE STUDENT  /////DELETE
function deleteStudent(id) {
    if (confirm("Are you sure to delete this student ?")) {
        var newStudents = students.filter(function (std) { return std.id !== id; });
        localStorage.setItem("students", JSON.stringify(newStudents));
        location.reload();
    }
}
// \/\/\/\/\/\/\/\/\/\/\/\/\/\/\
// EDIT STUDENTS ////EDIT
var studentEditing;
function editStudent(id) {
    var student = students.find(function (student) { return student.id === id; });
    if (student) {
        studentEditing = student;
        firstNameEdit.value = student.firstName;
        lastNameEdit.value = student.lastName;
        groupEdit.value = student.group;
        dateOfBirthEdit.value = student.dateOfBirth;
        salaryEdit.value = student.salary;
        filterLevelEdit.value = student.filterLevel;
        typeOfJobEdit.value = student.typeOfJob;
        isMarriedEdit.checked = student.isMarried;
    }
}
// \/\/\/\/\/\/\/\/\/\/\/\/\/\/\
// UPDATE STUDENTS ////
function updateStudent() {
    if (studentEditing) {
        var student_1 = {
            id: studentEditing.id,
            firstName: firstNameEdit.value,
            lastName: lastNameEdit.value,
            group: groupEdit.value,
            dateOfBirth: dateOfBirthEdit.value,
            filterLevel: filterLevelEdit.value,
            typeOfJob: typeOfJobEdit.value,
            salary: salaryEdit.value,
            isMarried: isMarriedEdit.checked,
        };
        var newStudents = students.map(function (st) {
            return st.id === student_1.id ? student_1 : st;
        });
        localStorage.setItem("students", JSON.stringify(newStudents));
        location.reload();
    }
}
btnEditStudent.addEventListener("click", updateStudent);
// \/\/\/\/\/\/\/\/\/\/\/\/\/\/\
// FILTER LEVEL
filterSelect.addEventListener("change", function (e) {
    var grpp = e.target.value;
    var newStudentsList = [];
    if (grpp === "Select a level") {
        newStudentsList = students;
    }
    else {
        newStudentsList = students.filter(function (st) { return st.filterLevel === grpp; });
    }
    displayStudents(newStudentsList);
});
// \/\/\/\/\/\/\/\/\/\/\/\/\/\/\
// FILTER COUNTRIES
filterCountry.addEventListener("change", function (e) {
    var grp = e.target.value;
    var newStudentsList = [];
    if (grp === "Select your country") {
        newStudentsList = students;
    }
    else {
        newStudentsList = students.filter(function (st) { return st.group === grp; });
    }
    displayStudents(newStudentsList);
});
// \/\/\/\/\/\/\/\/\/\/\/\/\/\/\
// SEARCH STUDENTS //////////////////
search.addEventListener("input", function (e) {
    var text = e.target.value;
    var newSearchedList = [];
    if (text === "") {
        newSearchedList = students;
    }
    else {
        newSearchedList = students.filter(function (st) {
            return st.firstName.toLowerCase().includes(text.toLowerCase()) ||
                st.lastName.toLowerCase().includes(text.toLowerCase()) ||
                st.group.toLowerCase().includes(text.toLowerCase()) ||
                st.group.toLowerCase().includes(text.toLowerCase()) ||
                st.filterLevel.toLowerCase().includes(text.toLowerCase()) ||
                st.salary.toLowerCase().includes(text.toLowerCase()) ||
                st.dateOfBirth.toLowerCase().includes(text.toLowerCase()) ||
                st.typeOfJob.toLowerCase().includes(text.toLowerCase());
        });
    }
    displayStudents(newSearchedList);
});
