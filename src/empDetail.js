import React from 'react';

export default function EmpDetail(props) {
    return(
        <div onClick={() => alert(props.name)}>
            <p>Name of employee is: {props.name}</p>
            <p>Age of employee is: {props.age}</p>
            <p>Salary of employee is: {props.salary}</p>
        </div>
    )
}
