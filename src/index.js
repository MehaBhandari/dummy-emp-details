import React from 'react';
import ReactDOM from 'react-dom';
import EmpDetail from './empDetails';

function DummyApp() {
  return (
    <div>
      <EmpDetail name='Meha' age='30' salary='100'></EmpDetail>
    </div>
  )
}

ReactDOM.render(<DummyApp></DummyApp>, document.getElementById('root'))