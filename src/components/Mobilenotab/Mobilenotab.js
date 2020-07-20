import React, { Component } from 'react';
import './Mobilenotab.css';
import Logintabdetails from './../Logintabdetails/Logintabdetails.js'
import { v4 as uuidv4 } from "uuid";
import Mobilenotabcredentials from './../Mobilenotabcredentials/Mobilenotabcredentials.js'
import {Link, Redirect} from 'react-router-dom';

export let telno,sessno;

class Mobilenotab extends Component{


    constructor(){
        super();
        this.state={
            showMobSlider: false,
            showOtpSlider: false,
            errorMsgMob: "",
            errorMsgOtp: "",
            sessionIdState: "",
            showMobProp: false, 
            validmob:false     
        }
    }

    sendOtp = () => {
        if (this.mobNum.value.length === 10) {
            telno=this.mobNum.value;
          let sessionId = uuidv4();
          this.setState({ sessionIdState: sessionId });
          sessno=sessionId;
          const apiUrl = `https://pankhuri.co/api/send_otp?session_id=${sessionId}&phone_no=${this.mobNum.value}`;
          fetch(apiUrl, { method: "POST" })
            .then((res) => res.json())
            .then((response) => {
              if (response.Status === "Success") {
                /*this.toggleOtpSlider();
                document
                  .getElementById("mobile_num_slider")
                  .classList.remove("SlideOpen");
                this.sendPhoneData(this.mobNum.value);*/
                this.setState({ errorMsgMob: "" });
                console.log("Hello I am otp");
                console.log(sessionId+"mobtab")
                console.log(telno+"mobtab");
                this.setState({validmob:true});
              } else {
                this.setState({ errorMsgMob: "There was some error please retry" });
              }
            });
        } else {
          this.setState({ errorMsgMob: "Mobile Number should contain 10 digits" });
        }
      };

      RedirFun=()=>{
        if(this.state.validmob)
        {
           return(<Redirect push to='/otpverify'/>)
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
                        <div class="row logrow">

                            <div class="col-sm txtstl">

                                LOGIN

                            </div>

                            </div>

                            <div class="row">

                            <div class="col-sm txtstl">

                                Enter Mobile Number

                            </div>

                            </div>

                            <div class="row inprow">

                            <div class="col-sm">

                                <span class="mbtxtbox"> 
                                    +91
                                    <input
                                        type="text"
                                        value={this.state.value}
                                        maxLength="10"
                                        pattern="\d*"
                                        ref={(input) => (this.mobNum = input)}
                                        class="mbinpstl1"
                                        />


                                </span>

                                <div class="errtxt">
                                    {this.state.errorMsgMob}
                                </div>


                            </div>

                            </div>
                   </div>
                </div>

                <div class="row otpbtn">
                    <div class="col">
                          <button class="getotpbtn" onClick={this.sendOtp}>Get OTP
                          
                          </button>
                          {this.RedirFun()}
                    </div>
                </div>
            </>
        )
    }
}

export default Mobilenotab;