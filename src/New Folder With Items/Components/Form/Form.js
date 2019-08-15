import React from 'react';

const form = (props) => {
    return (
        <div className="App mt-3">
                <div className="App mt-3">
                    <input type="text" onChange={(event) => props.funEventChange(event,0)} placeholder="please enter name" />
                </div>
                <div className="App mt-3">
                    <input type="text" onChange={(event) => props.funEventChange(event,1)} placeholder="please enter mail" />
                </div>
                <div className="App mt-3">
                    <input type="text" onChange={(event) => props.funEventChange(event,2)} placeholder="please enter phone" />
                </div>
                <button type="button" onClick={props.buttonClick} className="btn btn-primary mt-3">Primary</button>
        </div>
    );
}

export default form