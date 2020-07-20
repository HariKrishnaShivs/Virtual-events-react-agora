import React, { Component } from 'react';
import './Layout1.css';
import ppl from './../../assets/images/ppl.png';
import vsi from './../../assets/images/Indian-wedding.jpeg';
import g1 from './../../assets/images/Group.png';
import g3 from './../../assets/images/Group 2.png';
import g2 from './../../assets/images/Group 3.png';
import g4 from './../../assets/images/Group 4.png';
import clbutton from './../../assets/images/clbutton.jpg'
import HostMessage from './../HostMessage/HostMessage.js';
import { OverlayTrigger, Popover, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import Func,{leaveChannel,StreamFuncs, weddfeedjoin,weddfeddexit, weddfeedexit} from './../Exp/agora-interface.js';
import micoff from './../../assets/images/micoff.png';
import './../Exp/Exp.css';
import {rtmcliname} from './../Logintabcredentials/Logintabcredentials.js';



class Layout1 extends Component{

    componentDidMount(){
       /*{Func()};*/
       {weddfeedjoin()};
    }

    componentWillUnmount(){
       {weddfeedexit()};
    }


    constructor(){
        super();
        const micoff=require('./../../assets/images/micoff.png');
        const vidoff=require('./../../assets/images/vidoff.png');
        const vidon=require('./../../assets/images/vidon.png');
        const cutcall=require('./../../assets/images/cutcall.png')
        this.state={
              micopt:[micoff],
              vidopt:[vidoff,vidon],
              callopt:[cutcall],
              micstat:0,
              vidstat:0
            }
            console.log(rtmcliname);
    }

       micHandler=()=>{
            this.setState({
                micstat:1-this.state.micstat
            })
        }

        vidHandler=()=>{
            this.setState({
                vidstat:1-this.state.vidstat
            })
        }

     render(){
            {/*Popover details below */}
           const popover = (
            <Popover id="popover-basic" class="pstl">
             <Popover.Title as="h3">Change layout</Popover.Title>
               <Popover.Content>
                  <div class="container-fluid ">

                    <div class="row rstl">

                       <div class="col-sm csl">

                           <Link to="/layout1">{/*Image Button for layout change1 */}
                           
                              <button class="identbtn"><img src={g1} alt="Loading..." class="btnimg2"/></button>

                           </Link>

                           <p class="psl">Broadcast & Host</p>

                       </div>

                       <div class="col-sm">

                           <Link to="/layout2">{/*Image Button for layout change2 */}
                               
                               <button class="identbtn"><img src={g2} alt="Loading..." class="btnimg2"/></button>

                           </Link>

                           <p class="psl">Broadcast,Host and Co-host</p>
   
                       </div>

                   </div>

                   <div class="row rstl">

                       <div class="col-sm ">

                           <Link to="/layout3">{/*Image Button for layout change3 */}
                           
                              <button class="identbtn"><img src={g3} alt="Loading..." class="btnimg2"/></button>

                           </Link>

                           <p class="psl">Host and co-host</p>

                       </div>

                       <div class="col-sm">

                           <Link to="/layout1f">{/*Image Button for layout change4 */}
                               
                               <button class="identbtn"><img src={g4} alt="Loading..." class="btnimg2"/></button>

                           </Link>

                           <p class="psl"> Full Screen Mode</p>
   
                       </div>

                   </div>
                 

                 </div>
             </Popover.Content>
           </Popover>
         );

        return(

            <div class="container-fluid l1">

                

                 <div class="row headrl1 no-gutter">

                     <div class="col-sm-2 logo-txtl1">
                          <img src={ppl} alt="Loading..."></img>

                     </div>

                     <div class="col-sm-4 wed-txtl1">

                          Wedding Ceremony-Priya and Sharath
                         
                     </div>

                     <div class="col-sm-3 time-txtl1">

                          January 12 2020 | 19:30


                     </div>

                     <div class="col-sm host-txtl1">

                         Shriya Saran


                     </div>

                 </div>

                 <div class="row vd-feed no-gutter">

                     <div class="col-sm-9 ">

                         <div class="row no-gutter vsil1">

                                {/*<img src={vsi} class="vsil1"></img>*/}

                                <div id="full-screen-video" class="vsil1">

                                </div>
                                <div id="lower-video-bar" class="row fixed-bottom mb-1">
                                    <div id="remote-streams-container" class="container col-9 ml-1">
                                        <div id="remote-streams" class="row">
                                        </div>
                                    </div>
                                    <div id="local-stream-container" class="col p-0">
                                        <div id="mute-overlay" class="col">
                                            <i id="mic-icon" class="fas fa-microphone-slash"></i>
                                        </div>
                                        <div id="no-local-video" class="col text-center">
                                            <i id="user-icon" class="fas fa-user"></i>
                                        </div>
                                        <div id="local-video" class="col p-0">
                                            
                                        </div>
                                    </div>  

                                 </div>

                                <p class="streamtxtl1"> LIVE BROADCAST </p>


                          </div>


                           <div class="row footrl1 no-gutter">

                             <div class="col-sm-12">

                                 {/*<button  id="mic-btn" class="l1micbtn" ><img src={micoff} class="l1micimg"></img></button>

                                 <button id="video-btn" class="l1vidbtn" onClick={this.vidHandler}><img src={this.state.vidopt[this.state.vidstat]} class="l1vidimg"></img></button>

                                 <button id="exit-btn" class="l1exbtn"><img src={this.state.callopt[0]} class="l1eximg"></img></button>*/}

                                   {/* <div id="buttons-container" class="row no-gutter">
                                        <div class="col-sm-6 text-center">
                                        <button id="mic-btn" type="button" class="l1micbtn">
                                            <i id="mic-icon" class="fas fa-microphone"></i>
                                        </button>
                                        </div>
                                        <div class="col-sm-1 text-center">
                                        <button id="video-btn" type="button" class="l1vidbtn">
                                            <i id="video-icon" class="fas fa-video"></i>
                                        </button>
                                        </div>
                                        <div class="col-sm-1 text-center">
                                        <button id="exit-btn" type="button" class="l1exbtn">
                                            <i id="exit-icon" class="fas fa-phone-slash"></i>
                                        </button>
                                        </div>
                                         <div class="col-sm rt text-center">
                                        <OverlayTrigger trigger="focus"  placement="top" overlay={popover}>
                                          <button class="bnsl1"><i class="fa fa-th-large bnimgsl1" aria-hidden="true"></i></button>
                                        </OverlayTrigger>
                                         </div>
                                    </div>*/}

                                        <button class="l2micbtn" onClick={this.micHandler}><img src={this.state.micopt[this.state.micstat]} class="l2micimg"></img></button>

                                        <button class="l2vidbtn" onClick={this.vidHandler}><img src={this.state.vidopt[this.state.vidstat]} class="l2vidimg"></img></button>

                                        <button class="l2exbtn"><img src={this.state.callopt[0]} class="l2eximg"></img></button>


                                        <OverlayTrigger trigger="focus"  placement="top" overlay={popover}>
                                            <button class="bnsl2"><img src={clbutton} alt="Loading..." class="bnimgsl2"></img></button>
                                        </OverlayTrigger>
                                
                               

                              </div>


                           </div>

                     
                     </div>

                     <div class="col-sm-3">

                         <HostMessage/>

                     </div>

               </div>

                  
            </div>

        )
        
        }
         
}

export default Layout1;