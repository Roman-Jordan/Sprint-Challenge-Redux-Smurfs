import React from 'react';


const Smurf = props =>{
    return(
        <div className="smurf" data-id={props.smurf.id}>
            <img alt="smurf outline" src="https://sites.google.com/site/smurfcompany/_/rsrc/1354029033371/Home/Screen%20Shot%202555-11-27%20at%2010.09.46%20PM.png?height=320&width=272" />
            <div className='smurf-title'>
                <h3>{props.smurf.name}</h3>
                <p>age: {props.smurf.age}</p>
                <p>height: {props.smurf.height}</p>
            </div>
        </div>
    )
}

export default Smurf;