import React from 'react';
import { style } from './firstFormStyle';
import 'bootstrap/dist/css/bootstrap.css'
import 'antd/dist/antd.css';
import { Form, Input, Collapse, Button } from 'antd';
import FormHeader from './FormHeader'
import mastercard from '../download.png'
import rupay from '../payment+rupay+icon-1320186078051260333.png'
import visa from '../verified-by-visa_0.jpg'
import pcj from '../download (1).png'
class Option extends React.Component {
    goBack = (e) => {
        e.preventDefault();
        this.props.history.push('/');
    }

    render() {
        const data = this.props.location.state;
        console.log('data filled are', data);
        const { formItemStyle, formStyle } = style;
        const total = parseInt(this.props.location.state.amount) + (parseInt(this.props.location.state.amount) * 18) / 100
        return (
            <>
                <div>
                    <Form
                        className='p-0 m-auto rounded pb-3'
                        style={formStyle}
                    >
                        <FormHeader />
                        <div className='prevData col-12 text-left pt-3 pl-2 pr-0'>
                            <div className='row col-12 justify-content-between m-auto p-0'>
                                <p className='p-0 m-0'>Purpose of payment</p>
                                <Button
                                    onClick={this.goBack}
                                    type="link">Change</Button>
                            </div>
                            <p className='p-0 m-0'><strong>{this.props.location.state.purpose}</strong></p>
                            <div className='row ml-0 mr-0 mt-3 col-12 mb-0 pl-0 justify-content-between text-dark'>
                                <p className='p-0 m-0'>Amount</p>
                                <p>{this.props.location.state.amount}</p>
                            </div>
                            <Collapse bordered={false} style={{ backgroundColor: "white" }}
                                className='text-secondary'>
                                <Collapse.Panel header="Convinience fee" key="1">
                                    <div className='row col-12 justify-content-between m-auto p-0'>
                                        <p className='p-0 m-0'>GST @ 18%</p>
                                        <p className='p-0 m-0'>{
                                            (parseInt(this.props.location.state.amount) * 18) / 100}</p>
                                    </div>
                                </Collapse.Panel>
                            </Collapse>
                        </div>
                        <div className='row col-12 ml-0 mr-0 justify-content-between mt-2'>
                            <p className='text-left'><strong>Total</strong></p>
                            <p className='text-right'><strong>{total}</strong></p>
                        </div>
                        <ul className='col-12'><p className='text-left text-secondary pl-3'><strong>Prefered Payment Method</strong></p>
                            <li className='btn btn-outline-primary col-12 p-1'
                                onClick={() => this.props.history.push('/upi',data)}>
                                <img src={style.bhimImg} alt="img" className='col-2 p-0 m-0 ' />
                                <img src={style.phoneImg} alt="img" className='col-2 p-0 m-0 ' />
                                <img src={style.gpayImg} alt="img" className='col-2 p-0 m-0 ' />
                            </li>
                            <li
                                className='btn btn-outline-primary col-12  mt-2 text-left'
                                onClick={() => this.props.history.push('/cardpayment',data)}><i className="fa fa-credit-card"></i>  Debit Card</li>
                            <li className='btn btn-outline-primary col-12 mt-2 text-left'
                               y onClick={() => this.props.history.push('/netbanking',data)}><i className="fa fa-university"></i> Net Banking</li>
                        </ul>
                        <ul className='col-12'><p className='text-left text-secondary pl-3'><strong>Other Payment Options</strong></p>
                            <li className='btn btn-outline-primary col-12 mt-2 text-left'
                                onClick={() => this.props.history.push('/wallet',data)}><i className="fa fa-folder-open"></i> Wallets</li>
                            <li
                                className='btn btn-outline-primary col-12  mt-2 text-left'
                                onClick={() => this.props.history.push('/credit',data)}><i className="fa fa-credit-card"></i> Credit Card</li>


                        </ul>
                        <p className='ml-6'style={{marginLeft:"3px"}}>
                            <img src={pcj} alt="" width={20} height={20} className='col-2 p-0 m-0 ' />
                            <img src={mastercard} alt="" width={20} height={20} className='col-2 p-0 m-0 ' />
                            <img src={rupay} alt="" width={20} height={20} className='col-2 p-0 m-0 ' />
                            <img src={visa} alt="" width={20} height={20} className='col-2 p-0 m-0 ' />
                        </p>

                    </Form>
                    {/* <h6 className='d-inline-block text-secondary mt-4 mb-4 ml-6'>Powered by <img src="https://enalo.in/images/logo.svg" alt="img" height='35px' /></h6> */}

                </div>
            </>

        )
    }
}
export default Option;
