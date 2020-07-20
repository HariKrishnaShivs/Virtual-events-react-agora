import React, { Component } from 'react';
import './OTPtabcredentials.css';
import openi from './../../assets/images/openi.png'
import closei from './../../assets/images/closei.png'

class OTPtabcredentials extends Component{

    constructor(){
        super();

        const img1=require('./../../assets/images/openi.png');
        const img0=require('./../../assets/images/closei.png');
        this.state={
            inpval:'password',
            imgs:[img1,img0],
            index:0
        }

    }

    showHandler=()=>{
        this.setState({
             inpval: this.state.inpval==='password'?'text':'password',
             index: 1-this.state.index
        })
    }

    render(){
        return(
            <div class="container">
                 
                 <div class="row">
                       
                       <div class="col-sm txt">

                           LOGIN

                       </div>

                 </div>

                 <div class="row">
                       
                       <div class="col-sm txt1">

                           Enter OTP

                       </div>

                 </div>

                 <div class="row otpinpstl">

                        <div class="col-sm ">

                            <span class="txtbox"> 
                               
                               <input type={this.state.inpval} class="otpinp" placeholder="Enter OTP"/>
                               <button onClick={this.showHandler} class="eyebutton"><img src={this.state.imgs[this.state.index]} alt="lc" class="eyeimg"></img></button>
                            </span>

                        </div>

                 </div>

            </div>
        )
    }
}

export default OTPtabcredentials;