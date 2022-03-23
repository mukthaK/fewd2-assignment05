//Global variables - form fields and form
let id, fname, ext, email, department;
let empForm;

//Helper function to get dom elements
const $ = (id) => document.getElementById(id);

//Get the form
empForm = $('empForm');

empForm.addEventListener('submit', (e) => {
    e.preventDefault();
    //Get form field values
    id = $('id');
    fname = $('fname');
    ext = $('ext');
    email = $('email');
    department = $('department');
    //Display the form field values
    console.log(`ID: ${id.value} \nName: ${fname.value} \nExtension: ${ext.value} \nEmail: ${email.value} \nDepartment: ${department.value}`);
});



