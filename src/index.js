import React from 'react';
import ReactDOM from 'react-dom';
import EmpList from './empList';
import EmpDetail, {FinancialDetails} from './empDetailsHigherOrderFun';
import HooksFunctionality from './hooks';
import UseMemoHooksFunction from './useMemo';

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
      <h1>useMemo Hooks</h1>
      <UseMemoHooksFunction></UseMemoHooksFunction>
      {/* <h1>This is hooks: </h1>
      <HooksFunctionality></HooksFunctionality> */}
      {/* <h1>This is a Higher Order Component</h1>
      <EmpDetail></EmpDetail> <hr></hr>
      <FinancialDetails></FinancialDetails><hr></hr>
      <h1>This is Employee List</h1>
      <EmpList empList = {empList}></EmpList> */}
    </div>
  )
}
  

ReactDOM.render(<RenderDom></RenderDom>, document.getElementById('root'))