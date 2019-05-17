import React from 'react';
import {connect} from 'react-redux';
import Smurf from './Smurf'
import Loader from 'react-loader-spinner';
import {addSmurf, deleteSmurf} from '../actions'

class Smurfs extends React.Component{
    state={
        name:'',
        height:'',
        age:''
    }

    addSmurf = e =>{
        e.preventDefault();
        if(this.state.name && this.state.height && this.state.age){
            setTimeout(this.props.addSmurf(this.state),1500)
        }
        this.setState({
            name:'',
            height:'',
            age:''
        })
    }

    onChange = e =>{
        e.preventDefault();
        
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    render(){
        return(
            <div className="Smurf-Tray">
                {this.props.smurfs.map(smurf =><Smurf key={smurf.id} deleteSmurf={this.props.deleteSmurf} smurf={smurf}/>)}
                <form name="addSmurf" className="smurf" onSubmit={this.addSmurf}>
                    <img alt="smurf outline" src="https://sites.google.com/site/smurfcompany/_/rsrc/1354029033371/Home/Screen%20Shot%202555-11-27%20at%2010.09.46%20PM.png?height=320&width=272" />
                    <div className="smurf-title" >
                        <input onChange={this.onChange} name="name" type="text" value={this.state.name} placeholder="New Smurf:"/>
                        <input onChange={this.onChange} name="age" type="number" value={this.state.age} placeholder="age:"/>
                        <input onChange={this.onChange} name="height" type="text" value={this.state.height} placeholder="height:"/>
                        <div className="action-tray">
                       
                            {this.props.addingSmurf && <button >	<Loader type="ThreeDots" color="#somecolor" height={80} width={80} /></button>}
                            {!this.props.addingSmurf && <button className="fas fa-plus-circle" type="submit"></button>}
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return {
        smurfs:state.smurfs,
        addingSmurf:state.addingSmurf
    }
}

export default connect(mapStateToProps,{addSmurf,deleteSmurf})(Smurfs);
