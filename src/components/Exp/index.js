
import * as $ from 'jquery';
import RtmClient from './rtm-client.js';
import {
  Toast,
  validator,
  serializeFormData,
} from './common';
import './index.css';
{/*import * as M from 'materialize-css';
import './messstyle.scss' */}



  /*M.AutoInit();*/

  let rtm = new RtmClient();
   let arrmess=[];
   
   


  rtm.on("ConnectionStateChanged", (newState, reason) => {


    console.log("reason", reason);
    // const view = $("<div/>",{
    //   text: ["newState: " + newState, ", reason: ", reason].join(""),
    // })
    // $("#log").append(view) --> to remove unnecessary jargon for users

      if(reason=="LOGIN_SUCCESS")
      {
        JoinFunc();
      }

    if (newState == "ABORTED") {
      if (reason == "REMOTE_LOGIN") {
        Toast.error("You have already been kicked off!");
        $("#accountName").text('Agora Chatroom');

        rtm.clearState();
        $("#dialogue-list")[0].innerHTML = '';
        $("#chat-message")[0].innerHTML = '';
      }
    }
  })

 {/* rtm.on("MessageFromPeer", (message, peerId) => {
    console.log("message "+ message.text + " peerId" + peerId);
    const view = $("<div/>",{
      // text: ["message.text: " + message.text, ", peer: ", peerId].join(""),
      text: [peerId + " (private) : " + message.text].join(""),
    })
    $("#log").append(view)
  });*/}

  rtm.on("MemberJoined", ({channelName, args}) => {
    const memberId = args[0];
    console.log("channel ", channelName, " member: ", memberId, " joined");
     MemFunc();
  });

  rtm.on("MemberLeft", ({channelName, args}) => {
    const memberId = args[0];
    console.log("channel ", channelName, " member: ", memberId, " joined");
    const view = $("<div/>",{
      // text: ["event: MemberLeft ", ", channel: ", channelName, ", memberId: ", memberId].join(""),
      text: [memberId, " left ", channelName].join(""),
    })

    MemFunc();
    console.log("Ex mem booted");
   
  });

  rtm.on("ChannelMessage", ({channelName, args}) => {
    const [message, memberId] = args;
    console.log("channel ", channelName, ", messsage: ", message.text, ", memberId: ", memberId);
    /*const view = $("<div/>",{
      // text: ["event: ChannelMessage ", "channel: " , channelName, ", message: ", message.text, ", memberId: ", memberId].join(""),
      text: [ memberId, " : ", message.text].join(""),
    })*/

    const view= '<div class="rmtmsg">'+ '<div class="rmtname">'+ memberId+  '</div>'+ '<div class="rmttxt" >'+ message.text+ '</div>' +'</div>'
   
    arrmess.push(view);
     $("#log").append(view);
  });

 export function MessFunc(){
    for(var i=0;i<arrmess.length;i++)
    {
      $("#log").append(arrmess[i]);
    }
  }

  
  export function MemFunc(){

    if( $('#log1').is(':empty') )
    {

    }
    else{
      $("#log1").empty();
    }

    rtm.channels['hari'].channel.getMembers().then((peoplearrays)=>{
      for(var i=0;i<peoplearrays.length;i++)
      {
        const view='<div class="ptcpsbox">'+ (peoplearrays[i])+'</div>'
        $("#log1").append(view);
      }
      console.log("entered callback");
    });
  }
  
  export default function LoginFunc(value1) {

    if (rtm._logined) {
      Toast.error("You already logined");
      return;
    }

    console.log("Hello I am rtm");
    

    try {
      rtm.init('a4801c22a8954361a3bffd5da59c5fcf');
      window.rtm = rtm;
      rtm.login(value1).then(() => {
        console.log('login')
        rtm._logined = true
        Toast.notice("Login: " + value1);
      }).catch((err) => {
        console.log(err)
      })
    } catch(err) {
      Toast.error("Login failed, please open console see more details");
      console.error(err);
    }

    

  }

   

  $("#logout").on("click", function (e) {
    e.preventDefault();
    if (!rtm._logined) {
      Toast.error("You already logout");
      return;
    }
    rtm.logout().then(() => {
      console.log('logout')
      rtm._logined = false
      Toast.notice("Logout: " + rtm.accountName);
    }).catch((err) => {
      Toast.error("Logout failed, please open console see more details");
      console.log(err)
    })
  })

    function JoinFunc(){

      console.log("Hello,I am join rtm first");


  

    console.log("Hello,I am join rtm second");



    

    /*if (rtm.channels[params.channelName] ||
        (rtm.channels[params.channelName] && rtm.channels[params.channelName].joined)) {
      Toast.error("You already joined");
      return;
    }*/

    rtm.joinChannel('hari').then(() => {
      const view = $("<div/>", {
        text: rtm.accountName + " joined" 
      });
      /*$("#log").append(view);*/
      rtm.channels['hari'].joined = true;
      
    }).catch((err) => {
      Toast.error("Join channel failed, please open console see more details.")
      console.error(err)
    })
      
    
  }

  


  $("#leave").on("click", function (e) {
    e.preventDefault();
    if (!rtm._logined) {
      Toast.error("Please Login First");
      return;
    }

    const params = serializeFormData("loginForm");

    if (!validator(params, ['appId', 'accountName', 'channelName'])) {
      return;
    }

    if (!rtm.channels[params.channelName] || 
      (rtm.channels[params.channelName] && !rtm.channels[params.channelName].joined )
    ) {
      Toast.error("You already leave");
    }

    rtm.leaveChannel(params.channelName).then(() => {
      const view = $("<div/>", {
        text: rtm.accountName + " left"
      });
      $("#log").append(view)
      if (rtm.channels[params.channelName]) {
        rtm.channels[params.channelName].joined = false;
        rtm.channels[params.channelName] = null;
      }
    }).catch((err) => {
      Toast.error("Leave channel failed, please open console see more details.")
      console.error(err)
    })

  })

  


  export  function SendChannelMessage(){
   

    const param = $("#send_input").val();

  console.log("HEllo by send messgae");

    rtm.sendChannelMessage(param, 'hari').then(() => {
      /*const view1=$("<div/>",{text:rtm.accountName+""})*/
    const view = '<div class="bg">'+'<div class="bgtxt">'+param+'</div>'+'</div>'
    
    
    /*addmessfunc(rtm.accountName,param);*/
      /*$("<div />",{
         text: rtm.accountName+" : "+param
      })*/

      
      arrmess.push(view);
      $("#log").append(view)
    }).catch((err) => {
      Toast.error("Send message to channel " + 'hari' + " failed, please open console see more details.")
      console.error(err)
    })

  }

  

  $("#send_peer_message").on("click", function (e) {
    e.preventDefault();
    if (!rtm._logined) {
      Toast.error("Please Login First");
      return;
    }

    const params = serializeFormData("loginForm");

    if (!validator(params, ['appId', 'accountName', 'peerId', 'peerMessage'])) {
      return;
    }

    rtm.sendPeerMessage(params.peerMessage, params.peerId).then(() => {
      const view = $("<div/>", {
        text: rtm.accountName + " ( to " + params.peerId + " ) : " + params.peerMessage 
      });
      $("#log").append(view)
    }).catch((err) => {
      Toast.error("Send message to peer " + params.peerId + " failed, please open console see more details.")
      console.error(err)
    })
  })

  $("#query_peer").on("click", function (e) {
    e.preventDefault();
    if (!rtm._logined) {
      Toast.error("Please Login First");
      return;
    }

    const params = serializeFormData("loginForm");

    if (!validator(params, ['appId', 'accountName', 'memberId'])) {
      return;
    }

    rtm.queryPeersOnlineStatus(params.memberId).then((res) => {
      const view = $("<div/>", {
        text: "memberId: " + params.memberId + ", online: " + res[params.memberId]
      });
      $("#log").append(view)
    }).catch((err) => {
      Toast.error("query peer online status failed, please open console see more details.")
      console.error(err)
    })
  })