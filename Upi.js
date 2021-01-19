import React, { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { style } from './firstFormStyle';
import { Button,Input } from 'antd';
import CryptoJS from 'crypto-js';
import Base64 from 'crypto-js/enc-base64';
import hmacSHA512 from 'crypto-js/hmac-sha256';
import sha256 from 'crypto-js/sha256';
import FormHeader from './FormHeader'
import {Collapse} from 'antd';
import mastercard from '../download.png'
import rupay from '../payment+rupay+icon-1320186078051260333.png'
import visa from '../verified-by-visa_0.jpg'
import pcj from '../download (1).png'

function Upi(props) {
    // console.log('form data are:-',props.location.state);
    const [vpa,setVpa] = useState('');
    let data = {};
    let config = {};
    const od = props.location.state;
    console.log('Option data are:-',od);
    config.layout = {};
    config.checkout = "transparent";
    config.mode = "TEST";
    
    useEffect(() => {
        data.appId = "14936a0d1bc2adec01f1c55ad63941";
        data.orderId = new Date().getTime();
        data.orderAmount = props.location.state.amount;

        data.customerPhone = props.location.state.phone;
        data.customerEmail = props.location.state.email;
        // data.notifyUrl = "http://localhost:3000/";
        //  data.returnUrl = 'https://www.enalo.in';
        // data.paymentModes = "";
         data.orderNote = props.location.state.purpose;
        // data.pc = "<?php echo $pc; ?>";
        data.orderCurrency = "INR";
        // data.paymentToken = "HuILfDvCM9Ew4S9AjMER+ep27d14ouzEvW/CoXDH1Y0=";
        // var response = window.CashFree.init(config);
        let str = "";
        Object.keys(data).forEach((key) => {
            if (str) {
                str = str + `&${key}=${data[key]}`;
            } else {
                str = str + `${key}=${data[key]}`;
            }
        });

        const {
            appId,
            orderId,
            orderAmount,
            customerEmail,
            customerPhone,
            orderCurrency,
        } = data;

        const tokenData = `appId=${appId}&orderId=${orderId}&orderAmount=${orderAmount}&customerEmail=${customerEmail}&customerPhone=${customerPhone}&orderCurrency=${orderCurrency}`;

        console.log("tokenData", tokenData);
        console.log(str);
        let sha256 = CryptoJS.HmacSHA256(
            tokenData,
            "d00bb4e6b1f440915f7a9cedeed72eb17fbd192f"
        );
        let token = Base64.stringify(sha256);

        // pc();sha256);
        // data.paymentToken = "4RQpTzr5/XoREax3idDLdYMaRtPN6Ti9/+p/eyXbggc=";
        // const newData = { ...data };
        data.paymentToken = token;
        console.log("paymentToken", token, data);
        data.customerName = props.location.state.nam;
        var response = window.CashFree.init(config);
        // console.log("CashFree", window.CashFree);
        console.log("init", response);
    },[]);

    const postPaymentCallback = function (event) {
        console.log(event);
        // Callback method that handles Payment
        if (
            event.name == "PAYMENT_RESPONSE" &&
            event.response.txStatus == "SUCCESS"
        ) {
            // Handle Success
            console.log('sucess');
        } else if (
            event.name == "PAYMENT_RESPONSE" &&
            event.status == "CANCELLED"
        ) {
            // Handle Cancelled
            console.log('cancelled');
        } else if (
            event.name == "PAYMENT_RESPONSE" &&
            event.response.txStatus == "FAILED"

        ) {
            console.log('failed')
            // Handle Failed
        } else if (event.name == "VALIDATION_ERROR") {
            // Incorrect inputs
            console.log('validation error');
        }
        else if (event.name == "PAYMENT_RESPONSE" && event.response.txStatus == "INCOMPLETE") {
            console.log('incomplete');
        }
    };
    const  payUpiPP = function() {
        // PhonePay
        data.paymentOption = "upi";
        data.upi = {};
        data.upi.vpa = vpa;

        window.CashFree.paySeamless(data, postPaymentCallback);
        return false;
      };
    const  payUpiGP = function() {
        // Google Pay
        data.paymentOption = "upi";
        data.upi = {};
        data.upi.vpa = vpa;

        window.CashFree.paySeamless(data, postPaymentCallback);
        return false;
      };
    const  payUpiBI = function() {
        // Bheem Upi
        data.paymentOption = "upi";
        data.upi = {};
        data.upi.vpa = vpa;

        window.CashFree.paySeamless(data, postPaymentCallback);
        return false;
      };
    const  payUpiPTM = function() {
        // Paytm 
        data.paymentOption = "upi";
        data.upi = {};
        data.upi.vpa = vpa;

        window.CashFree.paySeamless(data, postPaymentCallback);
        return false;
      };

      const  handleChange = e =>{
          setVpa({
              vpa:e.target.value
          })
      }
      const st = {
        margin: "auto",
      align:"center",
      width: "30%",
      border:"3px solid lightgray",
      overflow: "hidden"
    }

    const {formStyle} = style;
    const total = parseInt(props.location.state.amount) + (parseInt(props.location.state.amount) * 18) / 100
        return (
        <>
        {/* <div style={{backgroundColor:"orange"}}>
        <h2 style={{color: "#0D2366",font:"12px,Muli,Lato,-apple-system",padding:"0px 0px 0px 16px"}}>Save our earth foundation</h2>

        </div> */}
        <form style={formStyle}>
        <FormHeader />
        <div className='prevData col-12 text-left pt-3 pl-2 pr-0'>
                            <div className='row col-12 justify-content-between m-auto p-0'>
                                <p className='p-0 m-0'>Purpose of payment</p>
                                {/* <Button
                                    onClick={this.goBack}
                                    type="link">Change</Button> */}
                            </div>
                            <p className='p-0 m-0'><strong>{props.location.state.purpose}</strong></p>
                            <div className='row ml-0 mr-0 mt-3 col-12 mb-0 pl-0 justify-content-between text-dark'>
                                <p className='p-0 m-0'>Amount</p>
                                <p>{props.location.state.amount}</p>
                            </div>
                            <Collapse bordered={false} style={{ backgroundColor: "white" }}
                                className='text-secondary'>
                                <Collapse.Panel header="Convinience fee" key="1">
                                    <div className='row col-12 justify-content-between m-auto p-0'>
                                        <p className='p-0 m-0'>GST @ 18%</p>
                                        <p className='p-0 m-0'>{
                                            (parseInt(props.location.state.amount) * 18) / 100}</p>
                                    </div>
                                </Collapse.Panel>
                            </Collapse>
                        </div>
                        <div className='row col-12 ml-0 mr-0 justify-content-between mt-2'>
                            <p className='text-left'><strong>Total</strong></p>
                            <p className='text-right'><strong>{total}</strong></p>
                        </div>

            <div className='row col-12 ml-0 mr-0 justify-content-between mt-2'>
                <p  style={{color: "#0D2366",font:"12px,Muli,Lato,-apple-system",padding:"0px 0px 0px 16px"}}className='text-center'>UPI</p>
               
            </div>
            <div className='col-12 form-group text-left mt-10 ml-2' >
                    <label className='m-0 '>VPA</label>
                    <Input type="text" 
                    name="vpa" 
                    id="vpa"
                    value={vpa}
                    className='form-control'
                    onChange={(event) => setVpa(event.target.value) }
                    // onChange={handleChange}
                    required/>
                </div>

            <p className='p-0 m-0 pl-3 text-secondary text-left'>Select your UPI App</p>
            <div className='row col-12 m-auto pl-0 pr-0'>
                <div className='col-6 p-3 '>
                    <div className='border rounded col-12 bg-secondary '
                    onClick = {()=> payUpiBI()}>
                        <img src={style.bhimImg} alt="" className='col-12 p-0 ' height='70px' />
                    </div>
                </div>
                <div className='col-6 p-3' >
                    <div className='p-3 border rounded col-12 bg-secondary'
                    onClick = {()=> payUpiPP()}>
                        <img src={style.phoneImg} alt="" className='col-12 p-0'
                            height='40px' />
                    </div>
                </div>
                <div className='col-6 p-3'>
                    <div className='p-3 border rounded col-12 bg-secondary'
                    onClick = {()=> payUpiPTM()}>
                        <img src={style.paytmImg} alt="" className='col-12 p-0'
                            height='40px' />
                    </div>
                </div>
                <div className='col-6 p-3'>
                    <div className='p-3 border rounded col-12 bg-secondary'
                    onClick = {()=> payUpiGP()}>
                        <img src={style.gpayImg} alt="" className='col-12 p-0'
                            height='40px' />
                    </div>
                </div>
            </div>
            <p  className='text-secondary ml-2'style={{fontSize:"5px,Muli,Lato,-apple-system",padding:"0px 0px 0px 16px"}}>By purchasing you agree to the terms and conditions</p>
      <p className='ml-6'style={{marginLeft:"3px"}}>
                            <img src={pcj} alt="" width={20} height={20} className='col-2 p-0 m-0 ' />
                            <img src={mastercard} alt="" width={20} height={20} className='col-2 p-0 m-0 ' />
                            <img src={rupay} alt="" width={20} height={20} className='col-2 p-0 m-0 ' />
                            <img src={visa} alt="" width={20} height={20} className='col-2 p-0 m-0 ' />
                        </p>
            </form>
            
            {/* <h6 className='  text-center mt-4'>Powered by <img src="https://enalo.in/images/logo.svg" alt="img" height='35px'/></h6> */}
            </>
    )
}
export default Upi;