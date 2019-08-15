import React from 'react';

const input = (props) => {
    return (
        
        <div className="mt-3">
            <p>66666</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
}
export default input