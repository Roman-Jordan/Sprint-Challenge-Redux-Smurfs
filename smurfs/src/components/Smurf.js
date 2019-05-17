import React from 'react';

const Smurf = props =>{
    return(
        <div className="smurf" data-id={props.smurf.id}>
            <div className='smurf-title'>
                <h3>{props.smurf.name}</h3>
                <p>{props.smurf.age}</p>
                <p>{props.smurf.height}</p>
            </div>
        </div>
    )
}

export default Smurf;