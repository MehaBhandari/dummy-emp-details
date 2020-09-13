import React from 'react';
import ReactDOM from 'react-dom';

export default function EmpDetail(props) {
    return(
        <div>
            <p>Name of employee is: {props.name}</p>
            <p>Age of employee is: {props.age}</p>
            <p>Salary of employee is: {props.salary}</p>
        </div>
    )
}
