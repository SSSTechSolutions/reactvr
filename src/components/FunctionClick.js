import React from 'react';

function FunctionClick() {

    function clickHandler() {
        alert("Hello Guys")
    }

    return (
        <div>
            <button onClick={clickHandler}>Click Event</button>
        </div>
    )
}


export default FunctionClick