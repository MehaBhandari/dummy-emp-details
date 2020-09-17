import React from 'react';

export default function EmpDetail(props) {
    function divClicked() {
        alert(props.name);
    }

    return(
        <div onClick={divClicked}>
            <input type='text' data-attr={props.empId} value={props.empId} />
            <p>Name of employee is: {props.name}</p>
            <p>Age of employee is: {props.age}</p>
            <p>Salary of employee is: {props.salary}</p>
        </div>
    )
}
