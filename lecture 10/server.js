const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // Middleware to parse JSON request bodies

const employees=[
    {empId: 1, empName: 'John Doe', empSalary: 50000, department: 'IT'},
    {empId: 2, empName: 'Jane Smith', empSalary: 60000, department: 'HR'},
    {empId: 3, empName: 'Mike Johnson', empSalary: 55000, department: 'Finance'},
    {empId: 4, empName: 'Emily Davis', empSalary: 70000, department: 'Marketing'},
    {empId: 5, empName: 'David Wilson', empSalary: 65000, department: 'IT'}
]

app.get('/employees', (req, res) => {
    res.json(employees);
});

app.get('/employees/:empId', (req, res) => {
    const id = req.params.empId;
    const employee = employees.find(employee => employee.empId == Number(id));
    if (employee) {
        res.json(employee);
    } else {
        res.status(404).json({ message: 'Employee not found' });
    }
    res.json({success: true,employee})
});

app.post('/employees', (req, res) => {
    const employee = req.body;
    employees.push({empId: employees.length + 1, ...employee});
    res.json({ success: true, employee });
});

//update employee
app.put('/employees/:empId', (req, res) => {
    const id = req.params.empId;
    const employee= req.body;
    const result = employees.find(emp => emp.empId == Number(id));
    if (!result) {
        res.status(404).json({ message: 'Employee not found' });
        return;
    }
    result.empName=employee.name;
    result.empSalary=employee.salary;
    result.department=employee.department;
    res.json({ success: true, employee});
});

//delete employee
app.delete("/employees/:id", (req, res) => {
    const id = req.params.id;
    const result = employees.find((employee) => employee.empId == Number(id));
    if(!result){
        res.status(404).json({ success: false, message: "Employee not found" });
    }
    employees.splice(id-1, 1);
    res.json({sucess:true, result});
});

app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
})