import React, { useState } from "react";

function Checkbox() {
  const [selectAll, setSelectAll] = useState(false);
  const [checkboxes, setCheckboxes] = useState([
    { id: 1, label: "Eier", checked: false },
    { id: 2, label: "Mehl", checked: false },
    { id: 3, label: "Salz", checked: false },
  ]);

  const handleSelectAll = (event) => {
    const checked = event.target.checked;
    setSelectAll(checked);
    const updatedCheckboxes = checkboxes.map((checkbox) => {
      return { ...checkbox, checked };
    });
    setCheckboxes(updatedCheckboxes);
  };

  const handleCheckboxChange = (event) => {
    const id = parseInt(event.target.value);
    const checked = event.target.checked;
    const updatedCheckboxes = checkboxes.map((checkbox) => {
      if (checkbox.id === id) {
        return { ...checkbox, checked };
      }
      return checkbox;
    });
    setCheckboxes(updatedCheckboxes);
    const allChecked = updatedCheckboxes.every((checkbox) => checkbox.checked);
    setSelectAll(allChecked);
  };

  const selectedCheckboxes = checkboxes.filter((checkbox) => checkbox.checked);

  return (
    <div style={{textAlign: "center"}}>
        <h1> Einkaufsliste:</h1>
      <label>
        <input type="checkbox" checked={selectAll} onChange={handleSelectAll} />
        Select all
      </label>
      <br />
      {checkboxes.map((checkbox) => (
        <div key={checkbox.id} >
          <label>
            <input
              type="checkbox"
              value={checkbox.id}
              checked={checkbox.checked}
              onChange={handleCheckboxChange}
            />
            {checkbox.label}
          </label>
        </div>
      ))}
      <br />
      <h3> Selected Boxes:</h3>
      {selectedCheckboxes.length > 0 && (
        <ul style={{display: "inline-block"}}>
          {selectedCheckboxes.map((checkbox) => (
            <li key={checkbox.id}>{checkbox.label}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Checkbox;
