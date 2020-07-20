import React, { Component } from 'react';
import './Participants.css'
import {  MemFunc } from './../Exp/index.js';

class Participants extends Component{

  componentDidMount(){
      /*{PeopleFunc()};*/
      {MemFunc()};
  }

  constructor(){
      super();
      
  }
    render(){
        return(
            <div id="log1" class="ptcpslog">
                
            </div>
        )
    }
}

export default Participants;