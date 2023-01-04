// Ver tema cors

// https://spring.io/guides/gs/rest-service-cors/

// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch


//Global variables



//Fetch to JAVA API
let baseURL = "http://localhost:8080";

//Usando Fetch
//   fetch(baseURL + '/api/v1/students')
//   .then(response => response.json())
//   .then(students => showStudents(students))
//   .catch(e => console.log(e));

// const showStudents = (students) => {
//     console.log(students);
// }

//Usando Async/Await con try/catch
const getStudents = async () => {
    try {
        const response = await fetch(baseURL + '/api/v1/students');
        const students = await response.json();
        // console.log(students);
        return students;
    } catch (error) {
        console.log(error);
    }
}

const getStudentById = async (id) => {
    try {
        const response = await fetch(baseURL + `/api/v1/students/${id}`);
        const students = await response.json();
        // console.log(students);
        return students;
    } catch (error) {
        console.log(error);
    }
}

//Usando Async/Await con try/catch
const deleteStudent = async (id) => {
    try {
        const deleteStatus = await fetch(baseURL + `/api/v1/student/${id}`,
            { method: "delete" });
        if (deleteStatus) {
            studentList();
            return true
        } else { return false }
    } catch (error) {
        console.log(error)
    }
}

//Usando Async/Await con try/catch
const addStudent = async (data) => {
    try {
        const response = await fetch(baseURL + `/api/v1/student`,
            {
                method: "post",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
        const student = await response.json();
        console.log(student);

        var form = document.querySelector("#addNewStudentForm");
        form.reset();
        $("#addNewStudentModal").modal('toggle');

        studentList();
    } catch (error) {
        console.log(error);
    }
}

//Usando Async/Await con try/catch
const updateStudent = async (data) => {
    try {
        const response = await fetch(baseURL + `/api/v1/student`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });
        const student = await response.json();
        console.log(student);

        var form = document.querySelector("#addNewStudentForm");
        form.reset();
        $("#addNewStudentModal").modal('toggle');

        studentList()
    } catch (error) {
        console.log(error)
    }
}



//Funcion que arma la tabla llamando a getStudents
const studentList = async () => {
    const students = await getStudents();
    console.log(students);
    let table = document.querySelector('.tableBody');
    table.innerHTML = "";

    students.forEach(student => {
        let row = table.insertRow();
        const fields = Object.keys(student)
        fields.forEach((field, index) => {
            var cell = row.insertCell(index);
            cell.innerHTML = student[field];
        });

        var lastRow = table.rows.length - 1;
        var lastCell = table.rows[lastRow].cells.length;
        var cell = row.insertCell(lastCell);
        cell.innerHTML = ` <button class="btn btn-secondary" onclick="editStudent(${student.id})">Edit</button> `;
        var cell = row.insertCell(lastCell + 1);
        cell.innerHTML = ` <button class="btn btn-primary" onclick="deleteStudent(${student.id})">Delete</button> `;

    });
}


/**
 * Declare editStudent function that receives the id of the student we need to edit
 * it loads the form to edit the student fields
 */
const editStudent = async (id) => {
    const student = await getStudentById(id);
    console.log(student);

    const form = document.querySelector("#addNewStudentForm");

    form['id'].value = student.id;
    form['name'].value = student.name;
    form['email'].value = student.email;
    form['yob'].value = student.yob;
    form['age'].value = student.age;
    form['create'].name = "edit";
    console.log(form['create'].name)


    $("#addNewStudentModal").modal('toggle');

}




/**
 * This modal shows if there is an error that returns from the API
 */



//Evenlistener on Get Students button
document.querySelector("#getStudents").addEventListener("click", () => {
    studentList();
});

//Evenlistener on Add/Edit Student Form Submit
var form = document.querySelector("#addNewStudentForm");
form.addEventListener("submit", (event) => {
    event.preventDefault();



    if (form['create'].name == "create") {
        console.log(form['create'].name);
        let data = {
            name: event.target[1].value,
            email: event.target[2].value,
            yob: event.target[3].value,
            age: event.target[4].value,
        }
        addStudent(data);
    }

    if (form['create'].name == "edit") {
        console.log(form['create'].name);
        let data = {
            id: event.target[0].value,
            name: event.target[1].value,
            email: event.target[2].value,
            yob: event.target[3].value,
            age: event.target[4].value,
        }
        updateStudent(data);
    }

});



// Material complementario
//Append rows to a table

    //    let table = document.querySelector('.table');
    //    let row = table.insertRow();
    //    let cell1 = row.insertCell(0);
    //    let cell2 = row.insertCell(1);
    //    cell1.innerHTML = "New Cell";
    //    cell2.innerHTML = "New Cell";