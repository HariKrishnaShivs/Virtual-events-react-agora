import React, { Component } from 'react'
import './Chat.css'
import sendmsg from './../../assets/images/sendmsg.png'
import './../Exp/agora-interface.js';
import LoginFunc,{SendChannelMessage, MessFunc,MemFunc} from './../Exp/index.js';


class Chat extends Component{

  componentDidMount(){
    {MessFunc()};
  }


    render(){
        return(
            <>

                <div class="row no-gutter">

                     {/* Messaging starts */}
                     

                  <div class="col messagelog" id="log">
                    
                  </div>

                </div>

                <div class="row no-gutter">

                
                  
                  <div class="cinp">
                    <input type="text" placeholder="channel message" name="channelMessage" class="chatinpstl" id="send_input"/>
                    <button class="sendbtnstl" onClick={SendChannelMessage} ><i class="fa fa-paper-plane" aria-hidden="true"></i>
                      </button>
                  </div>

                </div>

            </>
        )
    }
}

export default Chat;