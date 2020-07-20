import React, { Component } from 'react';
import './Enterdetails.css'
import Logintab from '../Logintab/Logintab.js'
import pwl from './../../assets/images/pwl.png'

class Enterdetails extends Component{
    render(){
        return(

            <div class="container-fluid wrapper">

                    <div class="row">{/*This row is for header */}

                        <div class="col ltxted">{/*The below col is for logo on the left */}

                          <img src={pwl} alt="heyy" ></img>

                        </div>

                        <div class="col edrtxt">{/*Theis is for names on the right */}

                            Priya & Varun
                        </div>

                    </div>

                    <div class="row ">{/*This row is for logintab main part */}
                      
                        <div class="col-sm-4 col-lg-3 f">

                          <Logintab/>

                        </div>

                    </div>

                 
            </div>

        )
    }
}

export default Enterdetails;