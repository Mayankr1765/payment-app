import React from 'react';
import 'antd/dist/antd.css';
import { Form, Button, Input } from 'antd';
import history from 'history';
import NetPay from './NetPay';
import { style } from './firstFormStyle';
import fb from '../iconfinder_1_Facebook_colored_svg_copy_5296499 (1).svg'
import wsp from '../iconfinder_Asset_10_2001672.svg'
import twitter from '../iconfinder_twitter_386736.svg'

class FirstForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            purpose: "",
            amount: "",
            nam: "",
            email: "",
            phone: ""
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        sessionStorage.setItem('doc', JSON.stringify(this.state));
        const sd = {
            purpose: this.state.purpose,
            amount: this.state.amount,
            nam: this.state.nam,
            email: this.state.email,
            phone: this.state.phone

        }
        console.log('pay', { amount: this.state });
        this.props.history.push("/paymentoption", sd);
        console.log('submitted sucessfully');
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    componentDidMount = () => {
        this.dd = JSON.parse(sessionStorage.getItem('doc'));
        if (sessionStorage.getItem('doc')) {
            this.setState({
                purpose: this.dd.purpose,
                amount: this.dd.amount,
                nam: this.dd.nam,
                email: this.dd.email,
                phone: this.dd.phone

            })
        }
    }

    render() {
        const formStyle = {
            margin: "auto",
            marginTop: "48px",
            minWidth: "200px",
            width: "400px",
            backgroundColor: 'white',
            border: "3px solid lightgray",
            paddingTop: "0px",
            overflow: "hidden"
        }
        const h = {
            width: '100%',
            padding: '20px',
            backgroundColor: "white",
            color: "blue",
            margin: "0px"

        }
        const bt = {
            justifyContent: 'right'
        }
        const sty = {
            width:"50%",
            marginLeft:"1px",
            align:"left",
            border:"4px solid lightgrey",
            overflow:"hidden",
            float:"left",
            backgroud:"#FCFCFC"
        }
        const str = {
            widht:"100%",
            align:"right",
            border:"2px",
            overflow:"hidden",
            float:"right",
            height:"100%",
            color:"#515978",
            background:"#FFFFFF",
            font:"16px Muli,Lato-apple-system",
            padding:"30px 32px",
            zIndex:"10000000000",
            backfaceVisibility:"hidden"
            



        }
        return (
            <>
                <div style={sty}>
                    <h3 className='mt-3 text-center' style={{ color: "#0D2366",font:"18px,Muli,Lato,-apple-system",padding:"0px 0px 0px 16px" }}><strong>Save Our Earth Foundation</strong></h3>
                    {/* <h2 className='mt-2'style={{ color: "#0D2366",font:"24px,Muli,Lato,-apple-system",padding:"0px 0px 0px 16px" }}><strong>Enalo Technology!</strong></h2> */}
                    <p  className='text-secondary' style ={{color: "515978",contrast:"5.99",font:"14px,Muli,Lato,-apple-system",padding:"0px 0px 0px 16px"}}>Save Our Earth Foundation is a not-for-profit organisation headquartered in Bengaluru, India. Our organisation strives to eliminate classroom hunger by implementing the Mid-Day Meal Scheme in government schools and government-aided schools.
                     Since 2000, Save Our Earth Foundation has been instrumental in providing fresh and nutritious meals to children on every single school day. We have helped 2000+ schools in India and wish to help a lot more.
                     </p>
                     <h4 style={{color: "#0D2366",font:"18px,Muli,Lato,-apple-system"}}>Share this on</h4>
                     <p className='mt-2 ml-10'>
                     <a href="https://facebook.com"> <img src={fb} alt="" width={24} height={24} className="ml-4"></img></a>
                     <a href="https://whatsapp.com"><img src={wsp} alt=""  width={24} height={24}className="ml-9"></img></a>
                    <a href="https://twitter.com"> <img src={twitter} alt=""  width={24} height={24}className="pl-7"></img></a>
                     </p>
                     <h3 style={{color: "#0D2366",font:"12px,Muli,Lato,-apple-system",padding:"0px 0px 0px 16px"}}>Contact us</h3>
                     <p className='text-secondary'>support@saveourearth.org</p>
                     <p className='text-secondary'>1234567890</p>
                     <h3 style={{color: "#0D2366",font:"12px,Muli,Lato,-apple-system",padding:"0px 0px 0px 16px"}}>Terms and condition</h3>
                     <p className='text-secondary'>This is a sample donation Payment Page created by Razorpay. 
                     Save our earth organisation is a fictitious construct.
                     Please make a payment of only ₹1 to experience the flow. The payment will be refunded.</p>
                     <div>
                         <h style= {{color: "#0D2366",font:"14px,Muli,Lato,-apple-system",padding:"0px 0px 0px 16px"}}>Razorpay</h>
                         <p  className='text-secondary' style = {{color: "#0D2366",font:"14px,Muli,Lato,-apple-system",padding:"0px 0px 0px 10px"}}>Want to create payment page for your business visit Razorpay and get started</p> 
                     </div>
                </div>

                <form style={formStyle} onSubmit={this.handleSubmit} >
                    <div style={str}>

                        <h1 style={{color: "#0D2366",font:"18px,Muli,Lato,-apple-system",padding:"0px 0px 0px 16px"}}> Payment Details</h1>
                        <div className='col-12 form-group text-left mt-5 ml-2' >
                            <label className='m-0 '>Purpose of payment</label>
                            <Input type="text" name="purpose"
                                id="purpose"
                                value={this.state.purpose}
                                className='form-control'
                                onChange={this.handleChange}
                                required />
                        </div>
                        <div className='col-12 form-group text-left mt-10 ml-2' >
                            <label className='m-0 '>Amount</label>
                            <Input type="text"
                                name="amount"
                                id="amount"
                                value={this.state.amount}
                                className='form-control'
                                onChange={this.handleChange}
                                required />
                        </div>
                        <div className='col-12 form-group text-left mt-10 ml-2' >
                            <label className='m-0 '>Name</label>
                            <Input type="text"
                                name="nam"
                                id="name"
                                value={this.state.nam}
                                className='form-control'
                                onChange={this.handleChange}
                                required />
                        </div>
                        <div className='col-12 form-group text-left mt-10 ml-2' >
                            <label className='m-0 '>Email</label>
                            <Input type="email"
                                name="email"
                                id="email"
                                value={this.state.email}
                                className='form-control'
                                onChange={this.handleChange}
                                required />
                        </div>
                        <div className='col-12 form-group text-left mt-10 ml-2' >
                            <label className='m-0 '>Phone</label>
                            <Input type="text"
                                name="phone"
                                id="phone"
                                value={this.state.phone}
                                className='form-control'
                                onChange={this.handleChange}
                                required />
                        </div>

                        <button type="submit" className="btn btn-outline-secondary col-11" style={bt}>Proceed</button>
                    </div>
                    <div className='btn btn-outline-none col-12 p-1'>
                    <img src={style.bhimImg} alt="img" className='col-2 p-0 m-0 ' />
                    <img src={style.phoneImg} alt="img" className='col-2 p-0 m-0 ' />
                    <img src={style.gpayImg} alt="img" className='col-2 p-0 m-0 ' />

                    </div>
                </form>
                {/* <h6 className='  text-center mt-4'>Powered by <img src="https://enalo.in/images/logo.svg" alt="img" height='35px' /></h6> */}
            </>
        );
    }
}

export default FirstForm;