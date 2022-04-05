import React, { Component } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";

export default class SignUp extends Component {
    render() {
        // const [isActive, setIsActive] = usestate(false);
        // const options = ['FaQ','Transactional']
        return (
            <form>
                <h3>Sign Up</h3>
                <div className="form-group">
                    <label>PIC name</label>
                    <input type="text" className="form-control" placeholder="PIC name" />
                </div>
                <div className="form-group">
                    <label>Company name</label>
                    <input type="text" className="form-control" placeholder="Company name" />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label>Service Group: </label>
                    <br></br>
                    <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                    <label>Shared</label>
                    <br></br>
                    <input type="checkbox" className="custom-control-input" id="customCheck2"/>
                    <label>Dedicated</label>
                    <br></br>
                    <input type="checkbox" className="custom-control-input" id="customCheck3"/>
                    <label>OnPrem</label>
                </div>
                <div className="form-group">
                    <label>Service Type</label>
                    {/* <InputGroup>
                        <InputGroup.Radio aria-label="Radio button for following text input" />
                         <FormControl aria-label="Text input with radio button" />
                    </InputGroup> */}
                </div>
                <div className="form-group">
                    <label>Channels: </label>
                    <br></br>
                    <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                    <label>Whatsapp</label>
                    <br></br>
                    <input type="checkbox" className="custom-control-input" id="customCheck2"/>
                    <label>Telegram</label>
                    <br></br>
                    <input type="checkbox" className="custom-control-input" id="customCheck3"/>
                    <label>Slack</label>
                    <br></br>
                    <input type="checkbox" className="custom-control-input" id="customCheck4"/>
                    <label>Coster</label>
                    <br></br>
                    <input type="checkbox" className="custom-control-input" id="customCheck5"/>
                    <label>Custom</label>
                </div>
                <div className="form-group">
                    <label>Channels Name</label>
                    <div className="dropdown">
                        <div className="dropdown-btn">
                            Choose One
                            <span className="fas fa-caret-down"></span>
                        </div>
                        {/* `{isActive && (
                            <div className="dropdown-content">
                                <div onClick={e => setSelected 
                                    (e.target.textContent)}>
                                <div className="dropdown-item">FaQ</div>
                                <div className="dropdown-item">Transactional</div>
                            </div>
                        )}` */}
                    </div>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>
                <ReCAPTCHA
                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                onChange={this.handleOnChange}
                />
                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#">sign in?</a>
                </p>
            </form>
        );
    }
}