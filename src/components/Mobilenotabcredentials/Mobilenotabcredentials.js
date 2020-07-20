import React, { Component } from 'react'
import './Mobilenotabcredentials.css';

class Mobilenotabcredentials extends Component{
    render(){
            return(
            <div class="container-fluid">

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
                           <input type="text" class="mbinpstl1" />
                        </span>

                    </div>

                </div>
              
            </div>
        )
    }
}

export default Mobilenotabcredentials;