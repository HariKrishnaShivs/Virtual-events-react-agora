import React, { Component } from 'react';
import './Logintab.css';
import Logintabdetails from './../Logintabdetails/Logintabdetails.js'
import Logintabcredentials from './../Logintabcredentials/Logintabcredentials.js'
import { Link } from 'react-router-dom';

class Logintab extends Component{
    render(){
        return(
            <>
                <div class="row ltdstyle">
                    <div class="col">
                      <Logintabdetails/>
                   </div>
                </div>

                <div class="row ltcstyle">
                     <div class="col">
                      <Logintabcredentials/>
                   </div>
                </div>

                <div class="row otpbtn">
                    <div class="col">
                        <Link to={{pathname:"/mobno"}}>
                          <button type="button" class="donebtn">Done</button>
                        </Link>
                    </div>
                </div>
            </>
        )
    }
}

export default Logintab;