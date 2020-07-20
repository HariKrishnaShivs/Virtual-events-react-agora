import React, { Component } from 'react'
import './Logintabdetails.css'

class Logintabdetails extends Component{
    render(){
        return(
            <div class="container ltd-bg">
                <div class="row">
                    <div class="col-sm-10 eventtxtltd">
                       Sangeeth Dance Practice
                     </div>
                 </div>

                 <div class="row">
                    <div class="col-sm-10 eventtimeltd">
                        21st May | 19:30
                      </div>
                </div>

                <div class="row">
                    <div class="col-sm-10 eventparttextltd">
                        Participants
                      </div>
                </div>

                <div class="row">
                    <div class="col-sm-10 eventpartnamesltd">
                        Megha, Pankhuri, Sheetal, Kunal, Akshay, Mohit, Akshaya +14 others
                      </div>
        </div>

                
            </div>
        )
    }
}

export default Logintabdetails;