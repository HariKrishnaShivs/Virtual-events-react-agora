import React, { Component } from 'react';
import './EnterOTP.css';
import OTPtab from './../OTPtab/OTPtab.js';
import pwl from './../../assets/images/pwl.png';
import LoginFunc,{MemFunc} from './../Exp/index.js';
import {rtmcliname} from './../Logintabcredentials/Logintabcredentials.js';
import Func,{leaveChannel} from './../Exp/agora-interface.js';

class EnterOTP extends Component{

    componentDidMount(){
        {LoginFunc(rtmcliname)};
        {Func()};
        /*{MemFunc()};*/
    }
    
constructor(props){
    super(props);
    console.log("I am from otptab"+rtmcliname);
}

    render(){
        return(
            <div class="container-fluid wrapper">

                    <div class="row">{/*This row is for header */}

                        <div class="col ltxteo">{/*The below col is for logo on the left */}

                          <img src={pwl} alt="heyy" ></img>

                        </div>

                        <div class="col rtxt">{/*This is for names on the right */}

                            Priya & Varun
                        </div>

                    </div>

                    <div class="row ">{/*This row is for logintab main part */}
                      
                        <div class="col-sm-4 col-lg-3 f">

                          <OTPtab/>

                        </div>

                    </div>

                 
            </div>
        )
    }
}

export default EnterOTP;