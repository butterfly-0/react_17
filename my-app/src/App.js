import React, { useState } from 'react';
import './App.css';

const employees = [
  {
    "content": "Frontend Misha",
    "id": "fe",
    "relations": ["pm", "be", "ds"]
  },
  {
    "content": "Design Pasha",
    "id": "ds",
    "relations": ["pm", "fe"]
  },
  {
    "content": "Project Manager Sanya",
    "id": "pm",
    "relations": ["ba", "fe", "be", "ds"]
  },
  {
    "content": "Backend Grisha",
    "id": "be",
    "relations": ["pm", "fe", "ba"]
  },
  {
    "content": "Business Analyst Sveta",
    "id": "ba",
    "relations": ["pm"]
  }
];

function EmployeeList() {
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  function handleEmployeeClick(id) {
    setSelectedEmployee(id);
  }

  return (
    <div className="center">
      {employees.map((employee) => {
        const isSelected = employee.id === selectedEmployee;
        const isNeighborSelected = employee.relations.includes(selectedEmployee);

        const classNames = `employee ${isSelected ? 'selected' : ''} ${isNeighborSelected ? 'neighbor' : ''}`;

        return (
          <div
            className={classNames}
            key={employee.id}
            onClick={() => handleEmployeeClick(employee.id)}
          >
            <p>{employee.content}</p>
          </div>
        );
      })}
    </div>
  );
}

export default EmployeeList;
