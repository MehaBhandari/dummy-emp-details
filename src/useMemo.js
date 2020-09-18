import React, { useState, useMemo } from 'react';

export default function UseMemoHooksFunction() {
    var [counter, setCounter] = useState(0);
    var [otherCounter, setOtherCounter] = useState(0);
    function addNumber(inputVal) {
        debugger;
        return inputVal+10;
    }
    var memorisedAddNumber = useMemo(() => addNumber(counter), [counter])
    // var addNumber = useCallback((inputVal)=>{
    //     debugger;
    //     return inputVal+10;
    // })
    // It will memorise function only and never the output

    function incrementCounter(){
        setCounter(counter+1);
    }
    function decrementCounter() {
        setCounter(counter-1);
    }

    function incrementOtherCounter(){
        setOtherCounter(otherCounter+1);
    }
    function decrementOtherCounter() {
        setOtherCounter(otherCounter-1);
    }

    return(<div>
        <h2>{counter}</h2>
        <input type='button' onClick={incrementCounter} value='click to increase Counter' /><br></br> <br></br>
        <input type='button' onClick={decrementCounter} value='click to decrease Counter' /><br></br> <br></br>
        {/* <input type='button' onClick={()=>{addNumber(10)}} value='click to Add Number' /> */}
        <h2>Value of addNumber Function is: {memorisedAddNumber}</h2>
        <input type='button' onClick={incrementOtherCounter} value='click to increase Other Counter' /><br></br> <br></br>
        <input type='button' onClick={decrementOtherCounter} value='click to decrease Other Counter' /><br></br> <br></br>
        <h2>{otherCounter}</h2>
    </div>)
}