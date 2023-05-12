import React, { Fragment } from "react";

const SelectByDepartment = ({ selectedDepartment, handleDepartmentChange }) => {
  return (
    <Fragment>
      <div>
        <label htmlFor="department-select">Filter by department:</label>
        <select
          id="department-select"
          value={selectedDepartment}
          onChange={handleDepartmentChange}
        >
          <option value="">All</option>
          <option value="Intern">Intern</option>
          <option value="Software Tester">Software Tester</option>
          <option value="Software Developer">Software Developer</option>
          <option value="HR">HR</option>
        </select>
      </div>
    </Fragment>
  );
};

export default SelectByDepartment;
