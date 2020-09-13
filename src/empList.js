import React from 'react';
import EmpDetail from './empDetail';

export default function EmpList(props) {
    debugger;
    return (
        <div>
            { 
                props.empList.map((emp)=>{
                // var {name, empId, age, salary} = {emp}
                    return (
                        <div>
                        {/* Easiest way */}
                        <EmpDetail {...emp}></EmpDetail><hr/> 

                        {/* 
                        For sending properties one by one and using var {name, empId} = {emp}
                        <EmpDetail name={name} age={age} salary={salary}></EmpDetail><hr/>
                        
                        For sending properties one by one
                        <EmpDetail name={emp.name} age={emp.age} salary={emp.salary}></EmpDetail><hr/>
                        
                        For sending whole object at once... but it copies the reference and change in obj will alter original obj too
                        <EmpDetail emp={emp}></EmpDetail><hr/> */} 
                        </div>
                    )
                })
            }
        </div>    
    )
}
  