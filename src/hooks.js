import React,{useState,useEffect} from 'react';

export default function HooksFunctionality(){
    debugger; 

    var [salary, setSalary] = useState(2000);
    var [userDetail, setUserDetail] = useState({
        name: 'Meha',
        age: 28,
        designation: 'Developer'
    });
    function incrementedSalary() {
        // setSalary(salary); 
        // This will not result in re-rendering as no change in virtual DOM wrt original DOM
        setSalary(salary +100); 
        // This will result in rerendering
    }

    // UseEffect will be called everytime
    useEffect(()=>{
        alert('This is without parameter');
    });

    // UseEffect will be called only once
    useEffect(()=>{
        alert('This is with empty array');
    }, []);

    // UseEffect will be called at initial rendering as well as on change of name or age
    useEffect(()=>{
        alert('This is on change of name or age');
    }, [userDetail]);    
    // useEffect(()=>{
    //     alert('This is on change of name or age');
    // }, [userDetail.name, userDetail.age]);

    function setNewUserDetail(event) {
        // This will not make any change in reference, so rendering will not happen..
        // userDetail[event.target.dataset.attr]= event.target.value;
        // setUserDetail(userDetail);

        setUserDetail({...userDetail,
            [event.target.dataset.attr]: event.target.value})

        // setUserDetail({...userDetail,
        //             [event.target.dataset.attr]: event.target.value})

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