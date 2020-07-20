import React, { Component } from 'react';
import './Entermobno.css'
import Mobilenotab from './../Mobilenotab/Mobilenotab.js'
import pwl from './../../assets/images/pwl.png'
import {rtmcliname} from './../Logintabcredentials/Logintabcredentials.js'

class Entermobno extends Component{

    constructor(props){
        super(props)
        console.log("name in next tab"+rtmcliname);
    }
    render(){
        return(

            <div class="container-fluid wrapper">



                    <div class="row">{/*This row is for header */}

                        <div class="col ltxtem">{/*The below col is for logo on the left */}

                          <img src={pwl} alt="heyy" ></img>

                        </div>

                        <div class="col rmbtxt">{/*This is for names on the right */}

                            Priya & Varun
                        </div>

                    </div>

                    <div class="row ">{/*This row is for logintab main part */}
                      
                        <div class="col-sm-4 col-lg-3 f">

                          <Mobilenotab/>

                        </div>

                    </div>

                 
            </div>

        )
    }
}

export default Entermobno;