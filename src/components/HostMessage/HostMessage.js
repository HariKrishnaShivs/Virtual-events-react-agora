import React, { Component } from 'react';
import './HostMessage.css';
import vsi from './../../assets/images/vd-stream-img.webp';
import Chat from './../Chat/Chat.js';
import Participants from './../Participants/Participants.js';
import msglogo from './../../assets/images/messagelogo.png';
import ptcpslogo from './../../assets/images/ptcpslogo.png';
import {MemFunc} from './../Exp/index.js';

class HomeMessage extends Component{

    componentDidMount(){
        /*{MemFunc()};*/
    }

    constructor(){
        super()
        this.state={
            form:[<Chat/>,<Participants/>],
            formval:0
        }
    }

    messageHandler=()=>{
        this.setState({
            formval:0
        })
    }

    participantsHandler=()=>{
        this.setState({
            formval:1
        })
    }

    render(){
        return(
            <div class="container-fluid">

                <div class="row ">

                    <div class="col-sm host-vd">

                       <img src={vsi} class="vsi-style"></img>

                       <p class="hosttxt">HOST</p>

                       <p  class="hostname">Sharath ShyamSundar</p>

                    </div>
     
                </div>

                <div class="row buttons">

                     <div class="col-lg-6">

                        <button type="button" class="hmbtncht" onClick={this.messageHandler} autoFocus>Chat  <i class="fas fa-comment btnimg"></i></button>

                     </div>

                     <div class="col-lg-6 ">

                        <button type="button" class="hmbtnptc" onClick={this.participantsHandler}>Participants <i class="fa fa-users btnimg btnimgptcs" aria-hidden="true"></i></button>

                      </div>

                </div>

                <div class="row ">

                    <div class="col-sm messagebar">

                       {/* <p class="ps">This is to check the overflow of the messages in this tab in responsive mode</p> */}   
                      {this.state.form[this.state.formval]}
                    </div>

                </div>

            </div>
        )
    }
}

export default HomeMessage;