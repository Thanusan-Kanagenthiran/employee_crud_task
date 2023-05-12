import React, { Fragment } from "react";

const EmployeeForm = ({
  handleSubmit,
  formMode,
  formData,
  setFormData,
  employeeListData,
  handleCancel,
}) => {
  return (
    <Fragment>
      <form className="px-3" onSubmit={handleSubmit} class="bs-5">
        <h4 class="mb-3 px-3">
          {formMode === "create" ? "Create Employee" : "Update Employee"}
        </h4>
        <div class="mb-3 px-3">
          <label for="name-input" class="form-label">
            Name:
          </label>
          <input
            required
            type="text"
            id="name-input"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            class="form-control"
          />
        </div>
        <div class="mb-3 px-3">
          <label for="age-input" class="form-label">
            Age:
          </label>
          <input
            required
            type="number"
            id="age-input"
            value={formData.age}
            onChange={(e) => setFormData({ ...formData, age: e.target.value })}
            class="form-control"
          />
        </div>
        <div class="mb-3 px-3">
          <label for="email-input" class="form-label">
            Email:
          </label>
          <input
            required
            type="email"
            id="email-input"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            class="form-control"
          />
        </div>
        <div class="mb-3 px-3">
          <label for="department-input" class="form-label">
            Department:
          </label>
          <select
            id="department-input"
            value={formData.department}
            onChange={(e) =>
              setFormData({ ...formData, department: e.target.value })
            }
            class="form-select"
          >
            {employeeListData.map((employee) => (
              <option key={employee.id} value={employee.department}>
                {employee.department}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" class="btn btn-primary me-2">
          {formMode === "create" ? "Create" : "Update"}
        </button>
        {formMode === "update" && (
          <button
            type="button"
            onClick={handleCancel}
            class="btn btn-secondary"
          >
            Cancel
          </button>
        )}
      </form>
    </Fragment>
  );
};

export default EmployeeForm;
