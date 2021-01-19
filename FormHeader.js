import React, { Component } from 'react'
class FormHeader extends Component {
    render() {
        return (
    <div className="row col-12 text-light p-1 m-0 text-left" style={{backgroundColor:"#617389"}}>
            <div className="col-3 p-3 m-0">
                {/* <img src="https://enalo.in/images/logo.svg" alt="" className="rounded" style={{width:"100%"}}/> */}
            </div>
            <div className="col-8 pt-3 ml-0 pl-0">
                {/* <p className="p-0 m-0">Paying to</p> */}
                {/* <p className="p-0 m-0">Enalo</p> */}
            </div>
        </div>
        )
    }
}
export default FormHeader