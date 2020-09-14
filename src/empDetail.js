import React from 'react';

export default function EmpDetail(props) {
    function divClicked() {
        debugger;
    }

    return(
        <div onChange={divClicked}>
            <input type='text' data-attr='emp.empId' value={props.empId} />
            <p>Name of employee is: {props.name}</p>
            <p>Age of employee is: {props.age}</p>
            <p>Salary of employee is: {props.salary}</p>
        </div>
    )
}
