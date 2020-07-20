import React, { Component } from 'react'
import './Logintabcredentials.css'

 export let rtmcliname
class Logintabcredentials extends Component{


   
    NameHandler=(e)=>{
         rtmcliname=e.target.value;
         console.log(rtmcliname);
   }

    render(){
        return(
            <div class="container">

                <div class="row ">{/*Name input */}


                      <input type="text" id="namefield" class="inpsl1 namestyl" placeholder="Name" onChange={this.NameHandler}></input>


                </div>

                <div class="row ">{/*Email input */}


                        <input type="text" class="inpsl1 emailstyl" placeholder="Email"></input>


                </div>

                <div class="row ">{/*Relation input */}

                        <input type="text" class="inpsl1 relstyl" placeholder="Relation"></input>

                </div>

                <div class="row ">{/*Location input */}

                        <input type="text" class="inpsl1 locstyl" placeholder="Location"></input>

                </div>

            </div>
        )
    }
}

export default Logintabcredentials;
