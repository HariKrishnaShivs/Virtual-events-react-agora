import React, { Component } from 'react';
import './OTPtab.css';
import Logintabdetails from './../Logintabdetails/Logintabdetails.js'
import { Link,Redirect } from 'react-router-dom';
import OtpInputs from './../OtpInputs/OtpInputs.js';
import {telno,sessno} from './../Mobilenotab/Mobilenotab.js';

class OTPtab extends Component{

    constructor(props){
        super(props);
        this.state={
          errorMsgOtp:"",
          validotp:false,
          handleentered:0
        };
    }


    handleOtp = (otp) => {
        this.otpNum = otp;
         this.setState({handleentered:1});
      };

      

     
  validateOtp = () => {
    /*const { onSuccessHook } = this.props;
    this.setState({ showMobSlider: false });*/

    if(this.state.handleentered){
    console.log(sessno);
    console.log(this.otpNum);
    if (this.otpNum.length === 6) {
      const apiUrl = `https://pankhuri.co/api/validate_otp?session_id=${sessno}&phone_no=${telno}&otp=${this.otpNum}`;
      fetch(apiUrl, { method: "POST" })
        .then((res) => res.json())
        .then((response) => {
          if (response.status === "1") {
            console.log("Correctotp");
            this.setState({validotp:true});
          } else {
            console.log(response);
            this.setState({ errorMsgOtp: "Invalid OTP" });
            console.log("sorry");
          }
        });
    } else {
      this.setState({ errorMsgOtp: "OTP should have 6 charcters" });
      console.log("entirely wrong");
    }
}
else{
    this.setState({ errorMsgOtp: "Invalid OTP" });
}
  };

  Redirotpfun=()=>{
      if(this.state.validotp){
          return(<Redirect to='/Layout1'/>)
      }
  }

    
    
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
                      {/*<OTPtabcredentials/>*/}

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

                        <div class="col-sm txtboxinp">

                            <span class="txtbox"> 
                              

                            <OtpInputs
                                onChangeOtp={this.handleOtp}
                                submitOtp={this.validateOtp}
                                />

                             
                             </span>

                             <div class="txtboxinp">
                                 {this.state.errorMsgOtp}
                             </div>

                        </div>

                 </div>


                      {/*End*/}
                   </div>
                </div>

                <div class="row otpbtn">
                    <div class="col">
                          <button class="btnlogin" onClick={this.validateOtp}>Login</button>
                          {this.Redirotpfun()}
                    </div>
                </div>
            </>
        )
    }
}

export default OTPtab;