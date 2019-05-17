import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import {getSmurfs} from '../actions'
import Loader from 'react-loader-spinner';
import Smurfs from './Smurfs';



class App extends Component {
  componentDidMount(){
    setTimeout(this.props.getSmurfs, 5000);
  }

  render() {
    return (
      <div className="App">
        {this.props.fetchingSmurfs && 
          <div className="loader">
            <div className="load-text">
              <h2>Please Wait while we get a few things ready	</h2>
            </div>
            <Loader type="Circles" color="#027dfe" height={80} width={80}/>
          </div>
        }
        {!this.props.fetchingSmurfs &&
        <div className="Smurf-Village">
          <h1>Welcome To Smurf Village</h1>
          <Smurfs />
        </div>
        }
      </div>
    );
  }
}

const mapStateToProps= state =>{
  console.log(state)
  return{
    ...state,
  }
}

export default connect(mapStateToProps,{getSmurfs})(App);
