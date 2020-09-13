import React from 'react';
import ReactDOM from 'react-dom';
import EmpList from './empList';

var empList = [
  {
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

function RenderDom() {
  return(
    <div>
      <EmpList empList = {empList}></EmpList>
    </div>
  )
}
  

ReactDOM.render(<RenderDom></RenderDom>, document.getElementById('root'))