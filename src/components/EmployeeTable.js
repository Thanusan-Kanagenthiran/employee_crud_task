import React, { Fragment } from "react";

const EmployeeTable = ({
  filteredEmployeeListData,
  handleDelete,
  handleEdit,
}) => {
  return (
    <Fragment>
      <tbody>
        {filteredEmployeeListData.map((employee) => (
          <tr key={employee.id}>
            <td>{employee.id}</td>
            <td>{employee.name}</td>
            <td>{employee.age}</td>
            <td>{employee.email}</td>
            <td>{employee.department}</td>
            <td>
              <button
                className="btn btn-secondary me-2 btn-sm"
                onClick={() => handleEdit(employee.id)}
              >
                <i class="bi bi-pen-fill"></i>
              </button>

              <button
                className="btn btn-danger btn-sm"
                onClick={() => handleDelete(employee.id)}
              >
                <i class="bi bi-trash-fill"></i>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </Fragment>
  );
};

export default EmployeeTable;
