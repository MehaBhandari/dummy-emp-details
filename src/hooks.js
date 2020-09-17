import React,{useState} from 'react';

export default function HooksFunctionality(){
    var [salary, setSalary] = useState(2000);
    var [userDetail, setUserDetail] = useState({
        name: 'Meha',
        age: 28,
        designation: 'Developer'
    });
    function incrementedSalary() {
        setSalary(salary+100);
    }
    function setNewUserDetail(event) {
        debugger;
        setUserDetail({...userDetail,
                    [event.target.dataset.attr]: event.target.value})

        // if(event.target.dataset.attr === 'name'){
        //     setUserDetail({...userDetail,
        //         name: event.target.value})
        // }
        // else if(event.target.dataset.attr === 'age'){
        //     setUserDetail({...userDetail,
        //         age: event.target.value})
        // }
        // else if(event.target.dataset.attr === 'designation'){
        //     setUserDetail({...userDetail,
        //         designation: event.target.value})
        // }
    }
    return(
        <div>
            <h3>Salary is: {salary}</h3>
            <input type='button' onClick={incrementedSalary} value='Click Me'/> <br></br><br></br>
            <span>Name: </span><input type='text' data-attr='name' onChange={setNewUserDetail} value={userDetail.name}/> <br></br><br></br>
            <span>Age: </span><input type='text' data-attr='age' onChange={setNewUserDetail} value={userDetail.age}/> <br></br><br></br>
            <span>Designation: </span><input type='text' data-attr='designation' onChange={setNewUserDetail} value={userDetail.designation}/> <br></br><br></br>
        </div>
        
    )
}