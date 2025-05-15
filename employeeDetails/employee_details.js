const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000, specialization: 'Javascript' },
    { id: 2, name: 'Alice Smith', age: 28, department: 'IT', salary: 45000, specialization: 'Python' },
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000, specialization: 'Java' },
    { id: 4, name: 'Charlie Brown', age: 32, department: 'Marketing', salary: 55000, specialization: 'Java' },
    { id: 5, name: 'Diana Prince', age: 29, department: 'IT', salary: 52000, specialization: 'C#' },
    { id: 6, name: 'Ethan Hunt', age: 40, department: 'Operations', salary: 70000, specialization: 'C++' },
    { id: 7, name: 'Felicity Smoak', age: 27, department: 'HR', salary: 48000, specialization: 'Php' },
    { id: 8, name: 'George Clooney', age: 45, department: 'Finance', salary: 80000, specialization: 'Dart' },
    { id: 9, name: 'Hannah Montana', age: 22, department: 'Marketing', salary: 40000, specialization: 'PYthon' },
    { id: 10, name: 'Ian Malcolm', age: 50, department: 'Operations', salary: 90000, specialization: 'Php' }
];

// Function to display all employees
function displayEmployees() {
    const totalEmployees = employees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = totalEmployees;
}

function calculateTotalSalaries() {
      const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
      alert(`Total Salaries: $${totalSalaries}`);
}

function displayHREmployees() {
    const hrEmployees = employees.filter(employee => employee.department === 'HR');
    const hrEmployeesDisplay = hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}

function findEmployeeById(employeeId) {
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    if (foundEmployee) {
        document.getElementById('employeesDetails').innerHTML =`<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
    }
    else{
        document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this ID';
    }
}

function findEmployeeBySpecialization(employeeSpecialization) {
    const foundEmployee = employees.find(employee => employee.specialization === employeeSpecialization);
    if (foundEmployee) {
        document.getElementById('employeesDetails').innerHTML =`<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary} - ${foundEmployee.specialization}</p>`;
    }
    else{
        document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this Spacialization';
    }
}