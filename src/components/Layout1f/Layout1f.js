import React, { Component } from 'react'
import './Layout1f.css';
import g1 from './../../assets/images/Group.png';
import g3 from './../../assets/images/Group 2.png';
import g2 from './../../assets/images/Group 3.png';
import g4 from './../../assets/images/Group 4.png';
import clbutton from './../../assets/images/clbutton.jpg'
import { OverlayTrigger, Popover, Button } from 'react-bootstrap';
import Func,{leaveChannel,weddfeedjoin,weddfeedexit} from './../Exp/agora-interface.js';
import vsi from './../../assets/images/Indian-wedding.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';

class Layout4 extends Component{

    componentDidMount(){
        
        {weddfeedjoin()};
    }

    componentWillUnmount(){
        {weddfeedexit()};
    }

    render(){

           {/*Popover details below */}
           const popover = (
            <Popover id="popover-basic">
             <Popover.Title as="h3">Change layout</Popover.Title>
               <Popover.Content>
                  <div class="container-fluid ">

                    <div class="row rstl">

                       <div class="col-sm csl">

                           <Link to="/layout1f">{/*Image Button for layout change1 */}
                           
                              <button class="identbtn"><img src={g1} alt="Loading..." class="btnimg2"/></button>

                           </Link>

                           <p class="psl">Broadcast & Host</p>

                       </div>

                       <div class="col-sm">

                           <Link to="/layout2f">{/*Image Button for layout change2 */}
                               
                               <button class="identbtn"><img src={g2} alt="Loading..." class="btnimg2"/></button>

                           </Link>

                           <p class="psl">Broadcast,Host and Co-host</p>
   
                       </div>

                   </div>

                   <div class="row rstl">

                       <div class="col-sm ">

                           <Link to="/layout3f">{/*Image Button for layout change3 */}
                           
                              <button class="identbtn"><img src={g3} alt="Loading..." class="btnimg2"/></button>

                           </Link>

                           <p class="psl">Host and co-host</p>

                       </div>

                       <div class="col-sm">

                           <Link to="/layout1">{/*Image Button for layout change4 */}
                               
                               <button class="identbtn"><img src={g4} alt="Loading..." class="btnimg2"/></button>

                           </Link>

                           <p class="psl">Exit Full Screen</p>
   
                       </div>

                   </div>
                 

                 </div>
             </Popover.Content>
           </Popover>
         );

        return(
            <div class="container-fluid l4bgimg">

                <div class="row no-gutter">

                    <div class="col-sm">

                      {/*<img src={vsi} class="fullimg1f"></img>*/}

                           <div id="full-screen-video" class="fullimg1f">

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

                        <span class="l4bdtxt">LIVE BROADCAST</span>

                     </div>

                </div>

                <OverlayTrigger trigger="focus"  placement="top" overlay={popover}>
                        <button class="l1fbtnstl"><img src={clbutton} alt="Loading..." class="bnimgsl"></img></button>
                </OverlayTrigger>
            </div>

        )
    }
}

export default Layout4;