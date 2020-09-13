import React from 'react';
import ReactDOM from 'react-dom';
import EmpDetail from './empDetails';

var empList = [{
  name: 'Meha',
  empId: '0001',
  age: 28,
  salary: 100
},{
  name: 'Mayank',
  empId: '0002',
  age: 32,
  salary: 200
},{
  name: 'Mohit',
  empId: '0003',
  age: 30,
  salary: 50
},{
  name: 'Akshay',
  empId: '0004',
  age: 29,
  salary: 250
},{
  name: 'Sonam',
  empId: '0005',
  age: 35,
  salary: 150
}]

function DummyApp(props) {
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

ReactDOM.render(<DummyApp empList={empList}></DummyApp>, document.getElementById('root'))