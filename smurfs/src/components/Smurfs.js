import React from 'react';
import {connect} from 'react-redux';
import Smurf from './Smurf'

class Smurfs extends React.Component{

    render(){
        return(
            <div className="Smurf-Tray">
                {this.props.smurfs.map(smurf =><Smurf key={smurf.id} smurf={smurf}/>)}
                <div className="smurf addSmurf">
                    <form name="addSmurf">
                        <div>
                            <input name="name" type="text"/>
                            <input name="age" type="text"/>
                            <input name="height" type="text"/>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    console.log(state)
    return {
        smurfs:state.smurfs
    }
}

export default connect(mapStateToProps,{})(Smurfs);
