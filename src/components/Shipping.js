import React, { Component } from 'react'

export class Shipping extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            fullname:'',
            emailid:'',
            mobilenum:'',
            flatnum:'',
            address:'',
            landmark:'',
            pincode:''
        }
    }
    handlerUsernameChange=e =>{
        this.setState({
            [e.target.name]:e.target.value 
            // fullname:event.target.value,
            // emailid:event.target.value,
            // mobilenum:event.target.value,
            // flatnum:event.target.value,
            // address:event.target.value,
            // landmark:event.target.value,
            // pincode:event.target.value
        })
    }
    handleSubmit=event=>{
        //alert(`${this.state.fullname} ${this.state.emailid} ${this.state.mobilenum}`)
        event.preventDefault()
        //console.log(`welcome ${this.state.fullname} ${this.state.emailid} ${this.state.mobilenum} ${this.state.flatnum} ${this.state.address} ${this.state.landmark} ${this.state.pincode}`)
    console.log("mmm",this.state)
    }

    render() {
        const {fullname,emailid,mobilenum,flatnum,address,landmark,pincode} =this.state
        return (
            <React.Fragment>
                <form onSubmit={this.handleSubmit}>
                <div>
               <label>Full Name</label>
               <input type="text" name="fullname" value={fullname} onChange={this.handlerUsernameChange}/>
            </div>
            <div>
                <label>Email Id</label>
                <input type="text" name="emailid" value={emailid} onChange={this.handlerUsernameChange} />
            </div>
            <div>
               <label>Mobile Num</label>
               <input type="text" name="mobilenum" value={mobilenum} onChange={this.handlerUsernameChange}/>
            </div>
            <div>
                <label>Flat No</label>
                <input type="text" name="flatnum" value={flatnum} onChange={this.handlerUsernameChange} />
            </div>
            <div>
                <label>Address</label>
                <textarea name="address" value={address} onChange={this.handlerUsernameChange}></textarea>
            </div>
            <div>
                <label>Landmark</label>
                <input type="text" name="landmark" value={landmark} onChange={this.handlerUsernameChange} />
            </div>
            <div>
                <label>Pincode</label>
                <input type="text" name="pincode" value={pincode} onChange={this.handlerUsernameChange} />
            </div>
            <button type="submit">Add Address</button>
                </form>
            </React.Fragment>
        )
    }
}

export default Shipping
