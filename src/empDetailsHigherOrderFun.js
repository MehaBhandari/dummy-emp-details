import React from 'react';

function personalDetails(props) {
    return(
    <div>
        <p>Name of Employee: {props.name}</p>
        <p>Age of Employee: {props.age}</p>
        <p>Designation of Employee: {props.designation}</p>
    </div>)
}
function financialDetails(props) {
    return(
    <div>
        <p>Name of Employee: {props.name}</p>
        <p>Salary of Employee: {props.salary}</p>
        <p>Bonus of Employee: {props.bonus}</p>
    </div>)
}

function HigherOrderComponent(WrappedComponent) {
    var employee = {
        name: 'Mayank',
        age: 32,
        designation: 'developer',
        salary: 100,
        bonus: 10
    }

    return function() {
        return(<WrappedComponent {...employee}></WrappedComponent>)
    }
}
var EmpDetail = HigherOrderComponent(personalDetails);
export var FinancialDetails = HigherOrderComponent(financialDetails);

export default EmpDetail;