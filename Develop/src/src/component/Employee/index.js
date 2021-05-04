import React from "react";
import "../Employee/style.css";

const Employee = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="img-conatainer"></div>
            <div className="info">
              <ul>
                <li>
                  <p>Employee Name:</p> {props.name}
                </li>
                <li>
                  <p>Employee Phone:</p>
                  {props.phone}
                </li>
                <li>
                  <p>Employee Location:</p>
                  {props.location}
                </li>
                <li>
                  <p>Employee Email:</p>
                  {props.email}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Employee;
