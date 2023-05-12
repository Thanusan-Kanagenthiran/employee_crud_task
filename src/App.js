import React from "react";
import { useState } from "react";
import EmployeeTable from "./components/EmployeeTable";
import SelectByDepartment from "./components/SelectByDepartment";
import EmployeeForm from "./components/EmployeeForm";

const App = () => {
  const [employeeListData, setEmployeeListData] = useState([
    {
      id: 1,
      name: "John",
      age: 30,
      email: "John@gmail.com",
      department: "Intern",
    },
    {
      id: 2,
      name: "Jane",
      age: 28,
      email: "Jane@gmail.com",
      department: "Software Tester",
    },
    {
      id: 3,
      name: "Janet",
      age: 26,
      email: "Janet@gmail.com",
      department: "Software Developer",
    },
    {
      id: 4,
      name: "Judy",
      age: 24,
      email: "Judy@gmail.com",
      department: "HR",
    },
  ]);

  const [selectedDepartment, setSelectedDepartment] = useState("");

  const handleDepartmentChange = (event) => {
    setSelectedDepartment(event.target.value);
  };

  const filteredEmployeeListData =
    selectedDepartment === ""
      ? employeeListData
      : employeeListData.filter(
          (employee) => employee.department === selectedDepartment
        );

  const [formData, setFormData] = useState({
    id: "",
    name: "",
    age: "",
    email: "",
    department: "",
  });

  const [formMode, setFormMode] = useState("create");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formMode === "create") {
      const newEmployee = {
        id: employeeListData.length + 1,
        ...formData,
      };
      setEmployeeListData([...employeeListData, newEmployee]);
    } else if (formMode === "update") {
      const updatedEmployeeListData = employeeListData.map((employee) =>
        employee.id === formData.id ? formData : employee
      );
      setEmployeeListData(updatedEmployeeListData);
    }
    setFormData({
      id: "",
      name: "",
      age: "",
      email: "",
      department: "",
    });
    setFormMode("create");
  };

  const handleCancel = () => {
    setFormData({
      id: "",
      name: "",
      age: "",
      email: "",
      department: "",
    });
    setFormMode("create");
  };

  const handleEdit = (id) => {
    setFormMode("update");
    const employee = employeeListData.find((employee) => employee.id === id);
    setFormData(employee);
  };

  const handleDelete = (id) => {
    const updatedEmployeeListData = employeeListData.filter(
      (employee) => employee.id !== id
    );
    setEmployeeListData(updatedEmployeeListData);
  };

  return (
    <div>
      <div className="row">
        <div className="col-12 col-md-8  my-auto">
          <h1>Employee List</h1>
          <SelectByDepartment
            selectedDepartment={selectedDepartment}
            handleDepartmentChange={handleDepartmentChange}
          />
          <table className="table table-hover mx-md-3">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Email</th>
                <th>Department</th>
                <th colSpan={2}>Action</th>
              </tr>
            </thead>
            <EmployeeTable
              filteredEmployeeListData={filteredEmployeeListData}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          </table>
        </div>
        <div className="col-12 col-md-4 px-4  mt-md-4">
          <EmployeeForm
            handleSubmit={handleSubmit}
            handleCancel={handleCancel}
            employeeListData={employeeListData}
            formData={formData}
            setFormData={setFormData}
            formMode={formMode}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
